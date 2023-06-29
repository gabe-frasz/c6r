import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./src/components/**/*.tsx"],
  format: "esm",
  clean: true,
  external: ["react", "react-dom"],
});
