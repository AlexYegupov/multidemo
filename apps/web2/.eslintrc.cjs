module.exports = {
  extends: ["custom"],
  root: true,
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: true,
  },
  rules: {
    "no-compare-neg-zero": "warn",
  }
};
