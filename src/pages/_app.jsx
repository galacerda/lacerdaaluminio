import Head from "next/head";
import GlobalStyles from "../styles/globalStyles";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Luminium</title>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
