import withDarkMode from "next-dark-mode";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default withDarkMode(MyApp);
