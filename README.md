# esbuild repro

## To run:

```sh
npm install
node test.mjs
```

## Three examples:

- Bundling @codemirror/autocomplete that works

- Bundling one single file in ESM (bundled already - zero dependencies) that incorrectly removes named exports (@coveo/headless/dist/browser/headless.esm.js)

- Bundling the pre-bundle ESM that also mangles named exports (@coveo/headless/dist/headless.esm.js)