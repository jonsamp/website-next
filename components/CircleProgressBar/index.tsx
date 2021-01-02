import React from "react"
import styles from "./CircleProgressBar.module.scss"

type Props = {
  yearPercent: number
  goalPercent: number
  textValue: number
}

export function CircleProgressBar(props: Props) {
  const { goalPercent = 100, yearPercent = 100, textValue = 1050 } = props

  const circleConfig = {
    viewBox: "0 0 44 44",
    x: 22,
    y: 22,
  }

  const radius = 15.91549430918954
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference * (1 - goalPercent / 100)

  const innerRadius = radius - 3
  const innerCircumference = 2 * Math.PI * innerRadius
  const innerStrokeDashoffset = innerCircumference * (1 - yearPercent / 100)

  return (
    <figure
      style={{
        background: "linear-gradient(#1F172C, #09060F)",
        margin: 0,
      }}
    >
      <svg viewBox={circleConfig.viewBox}>
        <circle
          cx={circleConfig.x}
          cy={circleConfig.y}
          r={radius}
          fill="transparent"
          stroke="#362C47"
          opacity={0.7}
          strokeWidth={3}
        />
        <circle
          cx={circleConfig.x}
          cy={circleConfig.y}
          r={radius}
          fill="transparent"
          stroke="url(#linear)"
          strokeLinecap="round"
          strokeWidth={3}
          strokeDasharray={`${
            circumference - strokeDashoffset
          } ${strokeDashoffset}`}
          strokeDashoffset={circumference * 0.25}
        />
        <circle
          cx={circleConfig.x}
          cy={circleConfig.y}
          r={innerRadius}
          fill="transparent"
          stroke="#685784"
          strokeLinecap="round"
          strokeWidth={0.25}
          opacity={0.8}
          strokeDasharray={`${
            innerCircumference - innerStrokeDashoffset
          } ${innerStrokeDashoffset}`}
          strokeDashoffset={innerCircumference * (0.25 * 81)}
        />
        <g className={styles.circleLabel}>
          <text x="50%" y="50%" className={styles.circleValue} fill="#F4F5F9">
            {textValue}
          </text>
          <text x="50%" y="50%" className={styles.circleLabel} fill="#F4F5F9">
            Miles
          </text>
        </g>
        <defs>
          <linearGradient id="linear" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stop-color="#FFFF73" />
            <stop offset="100%" stop-color="#FF6A5E" />
          </linearGradient>
        </defs>
      </svg>
    </figure>
  )
}
