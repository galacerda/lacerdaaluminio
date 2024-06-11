import { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import GlobalStyles from "../styles/globalStyles";
import * as gtag from "../../public/lib/gtag";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const canonicalUrl = "https://www.lacerdaaluminio.com.br/";

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <title>Lacerda Alumínio | Esquadrias de Alumínio</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Lacerda Alumínio - Especialista em produção e instalação de esquadrias de alumínio localizada em Pirassununga. Solicite um orçamento!"
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
