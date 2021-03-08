import React, { useEffect, useState } from "react"
import styles from "../styles/Running.module.scss"

import { CircleProgressBar } from "../components/CircleProgressBar"

import { mockRunningData } from "../mocks"

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

      // setResult(mockRunningData)
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
    actualMiles - goalForToday() >= 0 ? "Ahead of pace" : "Behind pace"

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <p>Jon&apos;s 2021 running goal</p>
          <h1 className={styles.header}>1,250 miles</h1>
        </div>

        <div className={styles.gridContainer}>
          <div className={styles.cardContainer}>
            <div
              style={{
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
                overflow: "auto",
              }}
            >
              <CircleProgressBar
                yearPercent={(dayOfYear() / 365) * 100}
                goalPercent={(actualMiles / 1250) * 100}
                textValue={Math.round(actualMiles)}
              />
            </div>
            <div className={styles.headerRow}>
              <p>Actual</p>
              <p>Goal</p>
              <p>Diff</p>
            </div>
            <div className={styles.row}>
              <p className={styles.rowTitle}>Total miles</p>
              <div className={styles.rowInner}>
                <p>{actualMiles.toFixed(2).toLocaleString()}</p>
                <p>{goalForToday().toFixed(2).toLocaleString()}</p>
                <p>
                  {actualMiles - goalForToday() >= 0 ? "+ " : "- "}
                  {Math.abs(actualMiles - goalForToday())
                    .toFixed(2)
                    .toLocaleString()}
                </p>
              </div>
            </div>
            <div className={styles.row}>
              <p className={styles.rowTitle}>Average miles/month</p>
              <div className={styles.rowInner}>
                <p>{(actualMiles / (dayOfYear() / 30.416666)).toFixed(2)}</p>
                <p>{(goalForToday() / (dayOfYear() / 30.416666)).toFixed(2)}</p>
                <p>
                  {actualMiles / (dayOfYear() / 30.416666) -
                    goalForToday() / (dayOfYear() / 30.416666) >=
                  0
                    ? "+ "
                    : "- "}
                  {Math.abs(
                    actualMiles / (dayOfYear() / 30.416666) -
                      goalForToday() / (dayOfYear() / 30.416666)
                  ).toFixed(2)}
                </p>
              </div>
            </div>
            <div className={styles.row}>
              <p className={styles.rowTitle}>Average miles/week</p>
              <div className={styles.rowInner}>
                <p>{(actualMiles / (dayOfYear() / 7)).toFixed(2)}</p>
                <p>{(goalForToday() / (dayOfYear() / 7)).toFixed(2)}</p>
                <p>
                  {actualMiles / (dayOfYear() / 7) -
                    goalForToday() / (dayOfYear() / 7) >=
                  0
                    ? "+ "
                    : "- "}
                  {Math.abs(
                    actualMiles / (dayOfYear() / 7) -
                      goalForToday() / (dayOfYear() / 7)
                  ).toFixed(2)}
                </p>
              </div>
            </div>
            <div className={styles.row}>
              <p className={styles.rowTitle}>Average miles/day</p>
              <div className={styles.rowInner}>
                <p>{(actualMiles / dayOfYear()).toFixed(2)}</p>
                <p>{(goalForToday() / dayOfYear()).toFixed(2)}</p>
                <p>
                  {actualMiles / dayOfYear() - goalForToday() / dayOfYear() >= 0
                    ? "+ "
                    : "- "}
                  {Math.abs(
                    actualMiles / dayOfYear() - goalForToday() / dayOfYear()
                  ).toFixed(2)}
                </p>
              </div>
            </div>
            <div className={styles.row} style={{ borderBottom: "none" }}>
              <p className={styles.rowTitle}>Miles to go</p>
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
    </div>
  )
}
