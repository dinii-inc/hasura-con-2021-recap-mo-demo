import { AppProps } from "next/app";
import Head from "next/head";
import React, { useEffect } from "react";
import { client } from "store/client";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { GlobalStyle } from "styles/global";
import { theme } from "styles/theme";

import { ApolloProvider } from "@apollo/client";
import CssBaseline from "@material-ui/core/CssBaseline";
import { StylesProvider, ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    jssStyles?.parentElement?.removeChild(jssStyles);
  }, []);

  return (
    <>
      <Head>
        <title>MO App</title>
      </Head>
      <StylesProvider injectFirst>
        <MuiThemeProvider theme={theme}>
          <StyledThemeProvider theme={theme}>
            <ApolloProvider client={client}>
              <CssBaseline />
              <GlobalStyle />
              <Component {...pageProps} />
            </ApolloProvider>
          </StyledThemeProvider>
        </MuiThemeProvider>
      </StylesProvider>
    </>
  );
};

export default App;
