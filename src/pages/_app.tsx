import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import CartProvider from "../context/Cart";
import theme, { GlobalStyle } from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&family=Open+Sans:wght@500&family=Roboto&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <GlobalStyle />
      <CartProvider>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </CartProvider>
    </>
  );
}

export default MyApp;
