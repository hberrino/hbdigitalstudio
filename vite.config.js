import react from "@vitejs/plugin-react";
import { createElement } from "react";
import { renderToString } from "react-dom/server";
import { defineConfig } from "vite";
import LandingPage from "./app/components/LandingPage.jsx";

function prerenderLandingPage() {
  return {
    name: "prerender-landing-page",
    transformIndexHtml: {
      order: "pre",
      handler(html) {
        const markup = renderToString(createElement(LandingPage));
        return html.replace('<div id="root"></div>', `<div id="root">${markup}</div>`);
      },
    },
  };
}

export default defineConfig({
  plugins: [react(), prerenderLandingPage()],
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
