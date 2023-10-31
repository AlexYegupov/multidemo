## Code editors

### Emacs

  run via pnpify (`yarn pnpify emacs .`) at the project root and use `flycheck-mode`, `web-mode`, `tide-mode`

### VScode

   А `jump to definition` for the local workspace works if packages in `package.json` declared as:

  ```
  "myLocalPackage": "workspace:^"
  ```

  run to configure:
    ```
    yarn dlx @yarnpkg/sdks vscode
    ```

  Note: to make vscode jump to sources work required those root dev packages:
    "eslint": "^8.52.0",
    "prettier": "^3.0.3",
    "typescript": "^5.1.6"

  Also seems like with typescript 5.2 "go to definition" not works

  What should work in vscode:
   - correctly show typescript & jsx syntax
   - prettier code autofix
   - eslint show errors and can call "Eslint: fix all auto-fixable problems"
   - "go to definition should work (including other workspaces libraries) 



# ORIGINAL README:


# `Turborepo` Vite starter

This is an official starter Turborepo.

## Using this example

Run the following command:

```sh
npx create-turbo@latest -e with-vite
```

## What's inside?

This Turborepo includes the following packages and apps:

### Apps and Packages

- `docs`: a vanilla [vite](https://vitejs.dev) ts app
- `web`: another vanilla [vite](https://vitejs.dev) ts app
- `ui`: a stub component & utility library shared by both `web` and `docs` applications
- `eslint-config-custom`: shared `eslint` configurations
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package and app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Jest](https://jestjs.io) test runner for all things JavaScript
- [Prettier](https://prettier.io) for code formatting
