import { resolve } from "node:path";
import { defineConfig } from "vitest/config";
import swc from "unplugin-swc";

export default defineConfig({
  root: "server",
  test: {
    globals: true
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "server"),
      "#": resolve(__dirname)
    }
  },
  plugins: [
    swc.vite({
      tsconfigFile: "tsconfig.server.json",
      jsc: {
        parser: {
          syntax: "typescript",
          decorators: true
        },
        transform: {
          decoratorMetadata: true
        }
      }
    })
  ]
});
