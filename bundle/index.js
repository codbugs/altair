const esbuild = require('esbuild');
const sassPlugin = require('esbuild-plugin-sass');

esbuild.build({
    entryPoints: ['src/altair.js'],
    bundle: true,
    outdir: './bin/dev',
    plugins: [sassPlugin()],
    watch: true,
}).catch((e) => console.error(e.message))