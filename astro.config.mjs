import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import react from "@astrojs/react";

const defaultAllowedHosts = [
  "developer-quiz.prork.cz",
  "rapid-europa-0ee.rock8cloud.cz",
];

const envAllowedHosts = (process.env.VITE_ALLOWED_HOSTS || "")
  .split(",")
  .map((host) => host.trim())
  .filter(Boolean);

export default defineConfig({
  output: "server",
  adapter: node({ mode: "standalone" }),
  integrations: [react()],
  vite: {
    server: {
      allowedHosts: [...new Set([...defaultAllowedHosts, ...envAllowedHosts])],
    },
  },
});
