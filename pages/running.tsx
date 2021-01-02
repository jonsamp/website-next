import React, { useEffect, useState } from "react"
import styles from "../styles/Running.module.scss"

import { CircleProgressBar } from "../components/CircleProgressBar"

const mockData = {
  biggest_ride_distance: 18930.4,
  biggest_climb_elevation_gain: null,
  recent_ride_totals: {
    count: 0,
    distance: 0,
    moving_time: 0,
    elapsed_time: 0,
    elevation_gain: 0,
    achievement_count: 0,
  },
  all_ride_totals: {
    count: 30,
    distance: 329388,
    moving_time: 55922,
    elapsed_time: 63402,
    elevation_gain: 3051,
  },
  recent_run_totals: {
    count: 9,
    distance: 69274.400390625,
    moving_time: 23683,
    elapsed_time: 26204,
    elevation_gain: 523.3059921264648,
    achievement_count: 0,
  },
  all_run_totals: {
    count: 206,
    distance: 1802205,
    moving_time: 611812,
    elapsed_time: 648223,
    elevation_gain: 13024,
  },
  recent_swim_totals: {
    count: 0,
    distance: 0,
    moving_time: 0,
    elapsed_time: 0,
    elevation_gain: 0,
    achievement_count: 0,
  },
  all_swim_totals: {
    count: 0,
    distance: 0,
    moving_time: 0,
    elapsed_time: 0,
    elevation_gain: 0,
  },
  ytd_ride_totals: {
    count: 0,
    distance: 0,
    moving_time: 0,
    elapsed_time: 0,
    elevation_gain: 0,
  },
  ytd_run_totals: {
    count: 1,
    distance: 14481,
    moving_time: 4849,
    elapsed_time: 4982,
    elevation_gain: 124,
  },
  ytd_swim_totals: {
    count: 0,
    distance: 0,
    moving_time: 0,
    elapsed_time: 0,
    elevation_gain: 0,
  },
}

export default function RunningPage() {
  const [result, setResult] = useState<any | undefined>(mockData)

  useEffect(function didMount() {
    async function getStats() {
      // const result = await fetch(
      //   "https://www.strava.com/api/v3/athletes/19827606/stats",
      //   {
      //     method: "GET",
      //     headers: {
      //       Authorization: "Bearer bab63e31851196590c3d72bd65b5a4340e9e1e69",
      //     },
      //   }
      // )
      //
      // const data = await result.json()
      //
      // console.log(JSON.stringify(data))

      setResult(mockData)
    }
    getStats()
  }, [])

  if (!result.ytd_run_totals) {
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
    var diff = now - start
    var oneDay = 1000 * 60 * 60 * 24
    return Math.floor(diff / oneDay)
  }

  function format(date, y) {
    var z = {
      M: date.getMonth() + 1,
      d: date.getDate(),
      h: date.getHours(),
      m: date.getMinutes(),
      s: date.getSeconds(),
    }
    y = y.replace(/(M+|d+|h+|m+|s+)/g, function (v) {
      return ((v.length > 1 ? "0" : "") + eval("z." + v.slice(-1))).slice(-2)
    })

    return y.replace(/(y+)/g, function (v) {
      return date.getFullYear().toString().slice(-v.length)
    })
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

  function compareActualMiles() {
    if (!actualMiles) {
      return
    }

    console.log(
      `Actual:  ${actualMiles} miles (${(actualMiles / 10).toFixed(
        2
      )}% of goal)\nTo go:   ${1000 - actualMiles} miles
      `
    )
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
