import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import scss from "rollup-plugin-scss";

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
        globals: { react: "React" },
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
        globals: { react: "React" },
      },
      {
        file: packageJson.browser,
        format: "umd",
        name: packageJson.name,
        sourcemap: true,
        globals: { react: "React" },
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      terser(),
      scss({
        fileName: "types/themes/index.scss",
        outputStyle: "compressed",
      }),
    ],
    external: ["react", "react-dom", "styled-components"],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [
      dts.default(),
      scss({
        fileName: "index.scss",
        outputStyle: "compressed",
      }),
    ],
  },
];
