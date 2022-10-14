const path = require("path");

const { build } = require("vite");
const react = require("@vitejs/plugin-react");
const typescript = require("@rollup/plugin-typescript");

const reactComponentLibrary = {
  plugins: [typescript()],
  entry: path.resolve(__dirname, "../src/index.ts"),
  fileName: (format) => `react-component-library.${format}.js`,
  name: "react-component-library",
};

const webcomponentsLibrary = {
  plugins: [],
  entry: path.resolve(__dirname, "../src/webcomponents.ts"),
  fileName: (format) => `webcomponents.${format}.js`,
  name: "webcomponents",
};

const getSharedConfiguration = ({ plugins, ...library }) => {
  return {
    plugins: [react(), ...plugins],
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
  };
};

const buildLibraries = async () => {
  [reactComponentLibrary, webcomponentsLibrary]
    .map(getSharedConfiguration)
    .map(build);
};

buildLibraries();
