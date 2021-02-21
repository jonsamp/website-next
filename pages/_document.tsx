import Document, { Html, Head, Main, NextScript } from "next/document"
import { BlockingSetInitialColorMode } from "@expo/styleguide"

export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <BlockingSetInitialColorMode />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
