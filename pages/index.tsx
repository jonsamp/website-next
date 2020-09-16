import Head from "next/head"
import { useDarkMode } from "next-dark-mode"
import { useState } from "react"

import { Project } from "../components/Project/index"
import { projects } from "../projects"
import styles from "../styles/Home.module.scss"

export default function Home() {
  const [bioIndex, setBioIndex] = useState(0)
  const { darkModeActive } = useDarkMode()

  return (
    <div
      className={`${styles.container} ${
        darkModeActive ? styles.dark : styles.light
      }`}
    >
      <Head>
        <title>Jon Samp's Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section className={styles.aboutMe}>
          <div className={`${styles.me} ${styles.displayHorizontal}`}>
            <img src="/yellow.jpg" className={styles.avatar} />
            <h1>Jon Samp</h1>
          </div>
          <p>
            👋 Hi! I'm a software developer at{" "}
            <a href="https://expo.io">Expo</a> in New York City, where I work on
            frontend and design projects. I love creating quality user
            experiences with JavaScript, React Native, and Expo. You can find me
            on <a href="https://github.com/jonsamp">GitHub</a>,{" "}
            <a href="https://codepen.io/jonsamp/pens/public">Codepen</a>, and{" "}
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
              incredibly lucky to find a job as a developer... as a JavaScript
              developer. While I didn't know JavaScript, they took a chance on
              me and I studied JavaScript every day on the train. I eventually
              wrote a whole{" "}
              <a href="https://www.codecademy.com/learn/introduction-to-javascript">
                course on JavaScript
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
              Finally, I moved to New York City. Specifically Brooklyn. I have a
              Shiba Inu named Nikko (she has a{" "}
              <a href="https://www.instagram.com/nikko__dog/">
                must-see Instagram
              </a>
              ) and an Orange Tabby named Proxie. I love to run, brew specialty
              coffee, and cook everything I see on{" "}
              <a href="https://www.foodnetwork.com/shows/good-eats">
                Good Eats
              </a>
              .
            </p>
          )}
        </section>

        <section className={styles.projectsSection}>
          {projects.map((project) => (
            <Project project={project} key={project.title} />
          ))}
        </section>
      </main>

      <footer className={styles.footer}>
        {/* <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{" "}
          <img src='/vercel.svg' alt='Vercel Logo' className={styles.logo} />
        </a> */}
      </footer>
    </div>
  )
}
