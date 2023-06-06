import type { ViteDevServer } from "vite";
import { createServer } from "vite";
import { IS_TEST } from "./constants/dev";

let viteDevServer: ViteDevServer;

export async function getViteServer() {
  if (!viteDevServer) {
    viteDevServer = await createServer({
      root: process.cwd(),
      logLevel: IS_TEST ? "error" : "info",
      server: {
        middlewareMode: true,
        watch: {
          usePolling: true,
          interval: 100
        }
        // proxy: {
        //   "/api": {
        //     target: `http://localhost:${process.env.SERVER_RUNNING_PORT}`,
        //     changeOrigin: true,
        //     rewrite: path => path.replace(/^\/api/, "")
        //   }
        // }
      },
      appType: "custom"
    });
  }
  return viteDevServer;
}
