import path from "path";
import { fileURLToPath } from "url";

import { build, defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import typescript from "@rollup/plugin-typescript";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

process.env.NODE_ENV = "production";

const reactComponentLibrary = {
  plugins: [],
  entry: path.resolve(__dirname, "../src/index.ts"),
  fileName: (format) => `index.${format}.js`,
  name: "index",
};

const webcomponentsLibrary = {
  plugins: [],
  entry: path.resolve(__dirname, "../src/webcomponents.ts"),
  fileName: (format) => `webcomponents.${format}.js`,
  name: "webcomponents",
};

const getSharedConfiguration = ({ plugins, ...library }) => {
  return defineConfig(() => ({
    plugins: [react(), typescript(), cssInjectedByJsPlugin(), ...plugins],
    build: {
      lib: {
        formats: ["es", "umd"],
        ...library,
      },
    },
    rollupOptions: {
      external: ["react"],
      output: {
        globals: {
          react: "react",
        },
      },
    },
  }));
};

const viteBuild = (configFactory) => {
  const config = configFactory();

  return build(config);
};

const buildLibraries = async () => {
  await Promise.all(
    [webcomponentsLibrary, reactComponentLibrary]
      .map(getSharedConfiguration)
      .map(viteBuild)
  );
};

buildLibraries();
