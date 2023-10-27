// module.exports = {
//   env: {
//     node: true,
//   },
//   extends: [
//     'eslint:recommended',
//     'plugin:@typescript-eslint/recommended'
//     //'plugin:@typescript-eslint/recommended-type-checked',
//   ],
//   parser: '@typescript-eslint/parser',
//   parserOptions: {
//     ecmaVersion: 2020,
//     tsconfigRootDir: __dirname,
//     project: [
//       /*'./tsconfig.eslint.json', */
//       './packages/*/tsconfig.json',
//       './apps/*/tsconfig.json'
//       //w './tsconfig.json'
//     ]
//   },
//   plugins: ['@typescript-eslint'],
//   root: true,
// };

module.exports = {
  extends: ["custom"],
  root: true,
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: true
  },
  rules: {
    "no-var": 'warn',
  }
};

// module.exports = {
//   env: { browser: true, es2020: true },
//   extends: [
//     'eslint:recommended',
//     'plugin:@typescript-eslint/recommended',
//     'plugin:react-hooks/recommended',
//   ],
//   parser: '@typescript-eslint/parser',
//   parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
//   plugins: ['react-refresh', '@typescript-eslint'],
//   rules: {
//     'react-refresh/only-export-components': 'warn',
//     "no-var": 'off',
//     //"no-console": 'error'
//   },
// }
