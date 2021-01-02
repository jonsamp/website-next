import React, { useEffect, useState } from "react"
import styles from "../styles/Running.module.scss"

import { CircleProgressBar } from "../components/CircleProgressBar"

export default function RunningPage() {
  const [result, setResult] = useState<any | undefined>()

  useEffect(function didMount() {
    async function getStats() {
      const oauthResultData = await fetch(
        "https://www.strava.com/api/v3/oauth/token",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            client_id: "58877",
            client_secret: "b1ccf61ca736c92561e92275d2624c46db536648",
            refresh_token: "b4d19bde62e7b68a4cd7fb205fe5338b9e108d39",
            grant_type: "refresh_token",
          }),
        }
      )

      const oauthResult = await oauthResultData.json()

      const result = await fetch(
        "https://www.strava.com/api/v3/athletes/19827606/stats",
        {
          method: "GET",
          headers: {
            // @ts-ignore
            Authorization: `Bearer ${oauthResult.access_token}`,
          },
        }
      )

      const data = await result.json()

      setResult(data)
    }
    getStats()
  }, [])

  if (!result?.ytd_run_totals) {
    return <p>loading...</p>
  }

  const actualMiles = result.ytd_run_totals.distance * 0.000621371
  const date = undefined

  function dayOfYear() {
    let now = new Date()
    if (date) {
      now = new Date(date)
    }
    var start = new Date(now.getFullYear(), 0, 0)
    var diff = Number(now) - Number(start)
    var oneDay = 1000 * 60 * 60 * 24
    return Math.floor(diff / oneDay)
  }

  function dateFromDay(day) {
    let date = new Date(2021, 0) // initialize a date in `year-01-01`
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ]

    return {
      month: monthNames[new Date(date.setDate(day)).getMonth()],
      date: new Date(date.setDate(day)).getDate(),
    }
  }

  function milesPerDay() {
    return 1250 / 365
  }

  function goalForToday() {
    return milesPerDay() * dayOfYear()
  }

  function estimatedEndDate() {
    if (!actualMiles) {
      return
    }

    const percentOfGoal = goalForToday() / actualMiles
    const finishDayOfYear = (percentOfGoal * 365).toFixed()

    return dateFromDay(finishDayOfYear)
  }

  const milesToGo =
    Math.floor(1250 - actualMiles) > 0 ? Math.floor(1250 - actualMiles) : 0
  const mileDifference = Math.abs(goalForToday() - actualMiles).toFixed(2)
  const daysDifference = (
    Math.abs(Number(mileDifference)) / milesPerDay()
  ).toFixed(2)
  const status =
    Math.abs(goalForToday() - actualMiles) <= 0
      ? "Behind pace"
      : "Ahead of pace"

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <p>Jon&apos;s 2021 running goal</p>
        <h1 className={styles.header}>1,250 miles</h1>
      </div>
      <div className={styles.gridContainer}>
        <div className={styles.cardContainer}>
          <CircleProgressBar
            yearPercent={(dayOfYear() / 365) * 100}
            goalPercent={(actualMiles / 1250) * 100}
            textValue={Math.round(actualMiles)}
          />
          <div className={styles.row}>
            <p>Goal for today</p>
            <p>{goalForToday().toFixed(2).toLocaleString()} miles</p>
          </div>
          <div className={styles.row}>
            <p>Actual miles</p>
            <p>{actualMiles.toFixed(2).toLocaleString()} miles</p>
          </div>
          <div className={styles.row}>
            <p>Average miles/month</p>
            <p>{(actualMiles / (dayOfYear() / 30.416666)).toFixed(2)} miles</p>
          </div>
          <div className={styles.row}>
            <p>Average miles/week</p>
            <p>{(actualMiles / (dayOfYear() / 7)).toFixed(2)} miles</p>
          </div>
          <div className={styles.row}>
            <p>Average miles/day</p>
            <p>{(actualMiles / dayOfYear()).toFixed(2)} miles</p>
          </div>
          <div className={styles.row}>
            <p>Miles to go</p>
            <p>{Math.round(milesToGo).toLocaleString()} miles</p>
          </div>
        </div>

        <div
          className={`${styles.cardContainer} ${styles.differenceContainer}`}
        >
          <h1>{mileDifference} miles</h1>
          <h2>({daysDifference} days)</h2>
          <p>{status}</p>
        </div>

        <div
          className={`${styles.cardContainer} ${styles.differenceContainer}`}
        >
          <div className={styles.calContainer}>
            <div className={styles.calHeader}>
              <h3>{estimatedEndDate().month}</h3>
            </div>
            <div>
              <h1 className={styles.calDate}>{estimatedEndDate().date}</h1>
            </div>
          </div>
          <p>Estimated finish date</p>
        </div>
      </div>
    </div>
  )
}
