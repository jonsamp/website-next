import Head from "next/head"
import { useState } from "react"
import { theme } from "@expo/styleguide"

import { Project } from "../components/Project/index"
import { projects } from "../projects"
import styles from "../styles/Home.module.scss"

export default function Home() {
  const [bioIndex, setBioIndex] = useState(0)

  return (
    <div
      className={styles.container}
      style={{
        background: theme.background.default,
        color: theme.text.default,
      }}
    >
      <Head>
        <title>Jon Samp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section
          className={styles.aboutMe}
          style={{
            borderBottom: `2px solid ${theme.border.default}`,
          }}
        >
          <div className={`${styles.me} ${styles.displayHorizontal}`}>
            <img
              src="/yellow.jpg"
              className={styles.avatar}
              style={{
                border: `4px solid ${theme.background.default}`,
              }}
            />
            <h1>Jon Samp</h1>
          </div>
          <p>
            👋 Hi! I'm a developer and designer at{" "}
            <a href="https://expo.io">Expo</a>. I love creating quality user
            experiences with JavaScript, React Native, and Expo. You can find me
            on <a href="https://github.com/jonsamp">GitHub</a>,{" "}
            <a href="https://dribbble.com/jonsamp">Dribbble</a>, and{" "}
            <a href="https://twitter.com/jonsamp">Twitter</a>. Also, there's a
            list of my side-projects and packages below. Thanks for stopping by!{" "}
            {bioIndex === 0 && (
              <a onClick={() => setBioIndex(1)}>
                <em>More...</em>
              </a>
            )}
          </p>
          {bioIndex >= 1 && (
            <p>
              Originally from Kansas, I started post-college life as a
              herpetology researcher (
              <em>
                I have a wild story where I had ~100 snakes in my car at once.
                Ask me!
              </em>
              ). At the same time, I was interested in higher education. I found
              a job as an admissions counselor and proceeded to spend a year
              driving hundreds of miles around rural Kansas while talking to
              high schoolers and their parents about education.{" "}
              {bioIndex === 1 && (
                <a onClick={() => setBioIndex(2)}>
                  <em>More...</em>
                </a>
              )}
            </p>
          )}
          {bioIndex >= 2 && (
            <p>
              Then I moved to Chicago, taught myself Ruby on Rails, and was
              incredibly lucky to find a job as a JavaScript developer. While I
              didn't know JavaScript, they took a chance on me and I studied
              JavaScript every day on the train. I eventually wrote a whole{" "}
              <a href="https://www.codecademy.com/learn/introduction-to-javascript">
                course on JavaScript
              </a>{" "}
              and the majority of{" "}
              <a href="https://www.codecademy.com/learn/learn-typescript">
                another course on TypeScript
              </a>
              . I still think about JavaScript every day (Isn't it so
              wonderful?).{" "}
              {bioIndex === 2 && (
                <a onClick={() => setBioIndex(3)}>
                  <em>More...</em>
                </a>
              )}
            </p>
          )}
          {bioIndex >= 3 && (
            <p>
              Finally, I moved to Brooklyn, New York City. I have a Shiba Inu
              named Nikko and an Orange Tabby named Proxie. I'm lucky to be the
              partner of the absolutely amazing{" "}
              <a href="https://emilygiurleo.dev">Emily Giurleo</a>. I love to
              run, brew specialty coffee, and cook everything I see on{" "}
              <a href="https://www.foodnetwork.com/shows/good-eats">
                Good Eats
              </a>
              .
            </p>
          )}
        </section>

        <section className={styles.projectsSection}>
          {projects
            .filter((project) => project.displayed)
            .map((project) => (
              <Project project={project} key={project.title} />
            ))}
        </section>
      </main>
    </div>
  )
}
