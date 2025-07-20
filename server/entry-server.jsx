import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router/server";
import App from "../src/App.jsx";
import { HelmetProvider } from "react-helmet-async";

export async function render(url) {
  const helmetContext = {};
  const appHtml = ReactDOMServer.renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HelmetProvider>
  );

  const { helmet } = helmetContext;

  return {
    appHtml,
    headTags: `
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
    `,
  };
}
