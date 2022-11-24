import type { AppProps, AppType } from "next/app";
import "../styles/reset.css";

const App: AppType<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
