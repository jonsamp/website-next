import Head from "next/head";
import { useDarkMode } from "next-dark-mode";

import styles from "../styles/Home.module.scss";

export default function Home() {
  const {
    autoModeActive,
    autoModeSupported,
    darkModeActive,
    switchToAutoMode,
    switchToDarkMode,
    switchToLightMode,
  } = useDarkMode();

  return (
    <div
      className={`${styles.container} ${
        darkModeActive ? styles.dark : styles.light
      }`}
    >
      <Head>
        <title>Jon Samp's Website</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <img src='/yellow.jpg' />
        <button onClick={() => switchToDarkMode()}>switch to dark</button>
        <button onClick={() => switchToLightMode()}>switch to light</button>
        <h1>header 1</h1>
        <p>
          The <a href='#'>hello im a link</a> evolution of a{" "}
          <em>process is directed</em> process is directed by a pattern of rules
          called a program. People create programs to direct processes. In
          effect, we conjure the spirits of the computer with our spells. A
          computational process is indeed much like a sorcerer’s idea of a
          spirit. It cannot be seen or touched. It is not composed of master at
          all. However, it is very real. It can perform intellectual work. It
          can answer questions. It can affect the world by disbursing money at a
          bank or by controlling a robot arm in a factory. The programs we use
          to conjure processes are like a sorcerer’s spells. They are carefully
          composed from symbolic expressions in arcane and esoteric programming
          languages that prescribe the tasks we want our processes to perform. A
          computational process, in a correctly working computer, executes
          programs precisely and accurately. Thus, like the sorcerer’s
          apprentice, novice programmers must learn to understand and to
          anticipate the consequences of their conjuring. Even small errors
          (usually called bugs or glitches) in programs can have complex and
          unanticipated consequences.
        </p>
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
  );
}
