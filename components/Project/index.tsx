import React from "react"
import { theme, AppleIcon, AndroidIcon } from "@expo/styleguide"

import { Project as ProjectType } from "../../projects"
import { GitHubIcon, WebsiteIcon } from "../Icons/index"
import styles from "../../styles/Project.module.scss"

type Props = {
  project: ProjectType
}

export function Project(props: Props) {
  const { project } = props

  const iconMap = {
    apple: <AppleIcon color={theme.background.default} />,
    android: <AndroidIcon color={theme.background.default} />,
    website: <WebsiteIcon />,
    github: <GitHubIcon />,
  }

  function byKey(a, b) {
    return a[0].localeCompare(b[0])
  }

  return (
    <div className={styles.container}>
      <img src={project.image} className={styles.projectImage} />
      <div>
        <div className={styles.titleContainer}>
          <h3 className={styles.title}>{project.title}</h3>
          <div className={styles.linkContainer}>
            {Object.entries(project.links)
              .sort(byKey)
              .map(([key, link]) => (
                <a href={link} key={link}>
                  <div
                    className={styles.link}
                    style={{
                      color: theme.background.default,
                    }}
                  >
                    {iconMap[key]}
                  </div>
                </a>
              ))}
          </div>
        </div>
        <p>{project.description}</p>
      </div>
    </div>
  )
}
