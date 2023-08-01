module.exports = {
  env: {
    node: true,
  },
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended", //recommended-type-checked
    "prettier",
  ],
  plugins: ["@typescript-eslint"],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020,
    // https://typescript-eslint.io/linting/typed-linting
    tsconfigRootDir: __dirname,
    project: ['./packages/*/tsconfig.json', './apps/*/tsconfig.json']
  },
  rules: {
    "@typescript-eslint/no-non-null-assertion": "off",
    "no-var": "error",
    "no-compare-neg-zero": "warn"
  },
};
