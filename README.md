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


## TL;DR

This one esm file (minified) targeted for the browser gets mangled
```
await esbuild.build({
        // This file is inside @coveo/headless as browser target
        // Even though is just one esm file, it gets mangled to export default
        entryPoints: ['node_modules/@coveo/headless/dist/browser/headless.esm.js'],
        format:'esm',
        bundle: true, // even with bundle: false it converts the exports
        outfile: 'incorrect_esm_bundling_single_esm.mjs',
        logLevel: 'info'
    });
```