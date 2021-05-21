export type Project = {
  displayed: boolean
  title: string
  year: number
  description: string
  image: string
  links: {
    [i: string]: string
  }
}

export const projects: Project[] = [
  {
    displayed: false,
    title: "Gray One",
    year: 2020,
    image: "/images/gray-one.png",
    description:
      "Gray One allows you to journal about everyday moments to once-in-a-lifetime events with a simple and elegant interface. Start journaling in an instant.",
    links: {
      apple: "https://apps.apple.com/us/app/gray-one/id1515200066?ls=1",
      website: "https://jovial-sammet-3cec91.netlify.app/",
      github: "https://github.com/jonsamp/gray-one",
      android:
        "https://play.google.com/store/apps/details?id=com.jonsamp.grayone",
    },
  },
  {
    displayed: true,
    title: "Word Check",
    year: 2020,
    image: "/images/word-check.png",
    description:
      "The fastest and easiest way to check if a word is playable in the game of Scrabble.",
    links: {
      apple:
        "https://apps.apple.com/us/app/word-check-for-scrabble/id1489890340",
      android:
        "https://play.google.com/store/apps/details?id=com.jonsamp.wordcheck",
    },
  },
  {
    displayed: true,
    title: "Single Origin 2",
    image: "/images/single-origin-2.png",
    year: 2019,
    description:
      "Learn to brew specialty coffee with step by step instructions, calculations, and timers. Now on iPhone and iPad.",
    links: {
      website: "https://singleoriginapp.com/",
      apple:
        "https://apps.apple.com/us/app/single-origin-2-coffee-timer/id1480168613?ls=1",
      android:
        "https://play.google.com/store/apps/details?id=com.jonsamp.singleorigintwo",
    },
  },
  {
    displayed: true,
    title: "Codecademy Go",
    year: 2019,
    image: "/images/cc-go.png",
    description:
      "Practice and review coding anywhere in five minutes, built with Expo. Apple App Store “App of the Day”, June 3, 2019.",
    links: {
      apple: "https://itunes.apple.com/us/app/codecademy-go/id1376029326?mt=8",
      android:
        "https://play.google.com/store/apps/details?id=com.ryzac.codecademygo&hl=en_US",
    },
  },
  {
    displayed: true,
    title: "Codecademy Go Cast",
    year: 2019,
    image: "/images/go-cast.png",
    description: "A podcast about building and maintaining Codecademy Go.",
    links: {
      apple:
        "https://itunes.apple.com/us/podcast/codecademy-go-cast/id1450421834",
    },
  },
  {
    displayed: true,
    title: "react-native-expo-svg",
    year: 2019,
    image: "/images/github.png",
    description:
      "Takes a regular SVG, optimizes it with SVGO, then creates an Expo-friendly SVG JS file for React Native.",
    links: {
      github: "https://github.com/jonsamp/react-native-expo-svg",
      // website: "/react-native-expo-svg",
    },
  },
  {
    displayed: true,
    title: "Single Origin",
    year: 2018,
    description: "Learn to brew specialty coffee.",
    image: "/images/single-origin.png",
    links: {
      apple:
        "https://apps.apple.com/us/app/single-origin-coffee-timer/id1316843624?ls=1",
    },
  },
  {
    displayed: true,
    title: "date-streaks",
    image: "/images/github.png",
    year: 2018,
    description: "Find a variety of streak metrics from a list of dates.",
    links: {
      github: "https://github.com/jonsamp/date-streaks",
    },
  },
  {
    displayed: false,
    title: "react-native-header-scroll-view",
    image: "/images/github.png",
    year: 2018,
    description:
      "A React Native component that creates a Apple-esque large header that fades in a smaller header as you scroll.",
    links: {
      github: "https://github.com/jonsamp/react-native-header-scroll-view",
    },
  },
  {
    displayed: false,
    title: "Vent",
    year: 2017,
    image: "/images/github.png",
    description:
      "Journaling app with sentiment analysis. You write, then it reveals your subconscious. It's spontaneous self reflection.",
    links: {
      website: "https://frozen-retreat-69078.herokuapp.com/",
    },
  },
]
