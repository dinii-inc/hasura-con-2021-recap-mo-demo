import NextDocument, { Head, Html, Main, NextScript } from "next/document";
import React from "react";
import { ServerStyleSheet } from "styled-components";
import { theme } from "styles/theme";

import { ServerStyleSheets } from "@material-ui/core/styles";

export default class Document extends NextDocument {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <meta name="theme-color" content={theme.palette.primary.main} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

Document.getInitialProps = async (ctx) => {
  const sheet = new ServerStyleSheet();
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(sheets.collect(<App {...props} />)),
      });

    const initialProps = await NextDocument.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {sheet.getStyleElement()}
          {sheets.getStyleElement()}
        </>
      ),
    };
  } finally {
    sheet.seal();
  }
};
