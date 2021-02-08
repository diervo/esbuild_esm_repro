import { default as esbuild } from 'esbuild';

(async function() {
    // Bundling codemirror (which has a bunch of dependencies - all esm) works just fine
    // The exports get preserved
    await esbuild.build({
        // This file is the one 
        entryPoints: ['node_modules/@codemirror/autocomplete/dist/index.js'],
        format:'esm',
        bundle: true,
        outfile: 'correct_esm_bundling_codemirror.mjs',
    });

    // Bundling one file from @coveo/headless (browser target)
    await esbuild.build({
        // This file is inside @coveo/headless as browser target
        // Even though is just one esm file, it gets mangled to export default
        entryPoints: ['node_modules/@coveo/headless/dist/browser/headless.esm.js'],
        format:'esm',
        bundle: true, // even with bundle: false it converts the exports
        outfile: 'incorrect_esm_bundling_single_esm.mjs',
        logLevel: 'info'
    });

    // Bundling the esm target (yet to be bundled)
    await esbuild.build({
        // It yields the same outcome as the previous
        entryPoints: ['node_modules/@coveo/headless/dist/headless.esm.js'],
        format:'esm',
        bundle: false,
        outfile: 'incorrect_esm_coveo_headless_npm.mjs',
    });

    // Bundling the esm target (yet to be bundled)
    await esbuild.build({
        // It yields the same outcome as the previous
        entryPoints: ['trivial_esm.js'],
        format:'esm',
        bundle: false,
        outfile: 'incorrect_trivial_esm.mjs',
    });
}())