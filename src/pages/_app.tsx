import Head from "next/head";
import { useEffect } from "react";
import GlobalStyles from "../styles/globalStyles";
import AOS from "aos";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <>
      <Head>
        <title>Lacerda Alumínio | Esquadrias de Alumínio</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Lacerda Alumínio - Especialista em produção e instalação de esquadrias de alumínio. Solicite um orçamento!"
        />
        <meta
          name="google-site-verification"
          content="T8wuSzv9TJFYVIGDzebdc9UJr058A1UG1JwZNvgBOiU"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
