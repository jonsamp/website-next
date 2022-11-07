import Head from "next/head"
import { theme } from "@expo/styleguide"

import styles from "../styles/Home.module.scss"
import Image from "next/image";

export default function Orbit() {

  return (
    <div
      className={styles.container}
      style={{
        background: theme.background.default,
        color: theme.text.default,
      }}
    >
      <Head>
        <title>Jon Samp | Orbit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <h2>The Acaia Orbit</h2>
          <p>👋 Hello Acaia,</p>
          <p>First and foremost, thanks for venturing into the grinder space. I am really excited about the Orbit and spent some time practicing checking out on your site to make sure I could check out fast enough to get one of the first 30 grinders. With some luck, I was able to get the seventh one, aka number 007 😎</p>
          <p>Coffee has always been a hobby for me, and this summer I bought my first espresso machine: a Decent DE1Pro. Along with it, I bought a Niche Zero and a DF64, so that I could try both conical and flat burrs. I came away realizing that flat burrs are right up my alley. They provide mellow acidity and lack the astringent and bitter bite on the back end of the shot, that you get with a Niche shot. </p>
          <p>After realizing this, I thought: okay. I might need to sell these and try to get a Lagom P64. But then, I learned that the Orbit was on its way, and long story short, I got one. Really haven't been this excited about a thing since getting a Gameboy Advance many years ago 😂</p>
          <img src="/images/orbit/007.jpeg" style={{ width: '50%', margin: '2rem auto' }} />
          <p>Once I received it, I started making shots with it. One thing I noticed was that when I ground at +2 to +3 from the touch point, the shots would run way too fast. Also looking at the ground coffee visually, it was mostly very coarse, but with some fines as well. Here's the Decent's graph from a shot I pulled at +0.5 from the touch point (16 gram dose, Gentle and Sweet profile). Note: I was using a medium/light roast from PTs Coffee and doing WDT to break up any clumps.</p>
          <img src="/images/orbit/no-pressure.png" style={{ width: '100%', margin: '2rem auto' }} />
          <p>After pulling a ton of shots at different grind settings, I gave up for a day. I loved everything about this grinder and all of its features, but if I wanted an espresso, I had to use the Niche (life is hard, I know).</p>
          <p>I messaged you and got help on Twitter in a DM. My next step was to do a marker test. You all suggested I get a torque wrench, but I don't know which one, and they are easily $75+, so I decided to try without.</p>
          <p>I pulled off the non-stationary burr, marked it, and came up with this:</p>
          <img src="/images/orbit/misaligned.jpeg" style={{ width: '50%', margin: '2rem auto' }} />
          <p>Yikes! This burr is misaligned. Even spinning it, I could tell visually that the burr was touching on one side and not the other. While I was at it, I also noticed that the burrs may be misaligned such that the two burrs do not line up in another way. It's subtle, but in the first picture here you can see the green marker I used and the teeth of the stationary burr:</p>
          <img src="/images/orbit/green-1.jpeg" style={{ width: '75%', margin: '2rem auto' }} />
          <p>Then I spinned the burr 180 degrees, and we can no longer see the bottom burr:</p>
          <img src="/images/orbit/green-2.jpeg" style={{ width: '75%', margin: '2rem auto' }} />
          <p>I also noticed that the black pad the non-stationary burr sits on was not in great shape (is this normal?):</p>
          <img src="/images/orbit/pad.jpeg" style={{ width: '75%', margin: '2rem auto' }} />
          <p>So, after all of this, I continued to do the marker test, and it took me far too long to realize that I could use the screws to adjust the burrs instead of using shims (I am a creature of habit). And I finally got a clean test today. The burrs are now aligned. Look at this graph, this is some good stuff! I can confirm this coffee was <em>much</em> better than anything before.</p>
          <img src="/images/orbit/just-right.png" style={{ width: '100%', margin: '2rem auto' }} />
          <p>So! this has been my journey with the Orbit. After 4-5 days of tinkering, I think I got it right now.</p>
          <p>Some stuff I love:</p>
          <ul>
            <li>The auto-stop and purge is just wonderful</li>
            <li>Looks/feels really nice</li>
            <li>The knocker is satisfying to use</li>
            <li>The stencil for adding the magnets to the Lunar was an excellent user experience</li>
          </ul>
          <p>Some stuff I'd love to improve:</p>
          <ul>
            <li>I have a new touch point now, but there's no way to get the sticker off cleanly. Wish I had some more stickers.</li>
            <li>For a grinder that has so many intentional and opinionated details, the detent ring is really unopinionated, and doesn't feel like it belongs. But that may just be me, since I don't have a workflow for it.</li>
            <li>Using the scale with the Decent is an annoying workflow; because of how the Decent works and not Acaia. When the scale connects to the Decent, getting it to connect to the Acaia again means I have to manually tell the Decent to disconnect before the Orbit may connect again. I think the solution is that I will have to buy another Lunar if I want this to be smooth but they're not cheap so maybe some time next year 😅</li>
            </ul>
            <p>Thanks for reading my story. I hope it helps you improve the grinder, and I am so relieved I got it working. Also, I got the swag box. Thanks for all the goodies. The brush was really nice during this process. Also the hat is surpisingly high quality.</p><p> Hope you have a great coffee today. Please let me know if you have any questions or need anything else!</p>
            <p>~ Jon Samp</p>
      </main>
    </div>
  )
}
