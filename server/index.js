import express from "express";
import { render } from "./entry-server.js";
import fs from "fs";
import path from "path";

const app = express();
const isProd = process.env.NODE_ENV === "production";

// Serve static assets
app.use("/assets", express.static(path.resolve("dist/client/assets")));

// SSR route
app.get("*", async (req, res) => {
  const { appHtml, headTags } = await render(req.url);

  const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        ${headTags}
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script type="module" src="/assets/index.js"></script>
      </head>
      <body>
        <div id="root">${appHtml}</div>
      </body>
    </html>
  `;

  res.status(200).set({ "Content-Type": "text/html" }).end(html);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
