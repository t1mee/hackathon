import type { AppProps } from "next/app";
import Head from "next/head";
import Navbar from "../src/components/Navbar";

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>volunteer</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <Navbar />
      <Component {...pageProps} />
    </main>

    <footer></footer>
  </>
);

export default App;
