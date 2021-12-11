import Head from "next/head";
import GlobalStyles from "../styles/globalStyles";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Lacerda Alumínio | Esquadrias de Alumínio</title>
        <link rel="shortcut icon" href="/img/favicon_1.png" />
        <link rel="apple-touch-icon" href="/img/favicon_1.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Lacerda Alumínio - Especialista em produção e instalação de esquadrias de alumínio"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
      <script>0</script>
    </>
  );
}

export default MyApp;
