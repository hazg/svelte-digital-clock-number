import svelte from 'rollup-plugin-svelte'
import resolve from '@rollup/plugin-node-resolve'
import autoPreprocess from 'svelte-preprocess'
import { terser } from 'rollup-plugin-terser'
import commonjs from '@rollup/plugin-commonjs'
import bundleSize from 'rollup-plugin-bundle-size'
import analyze from 'rollup-plugin-analyzer'

import pkg from './package.json'

const production = !process.env.ROLLUP_WATCH

const { name } = pkg

export default {
  input: 'src/number.svelte',
  output: [
    {
      file: pkg.module,
      format: 'es',
      sourcemap: !production,
      name
    },
    {
      file: pkg.main,
      format: 'umd',
      sourcemap: !production,
      name
    }
  ],
  plugins: [
    svelte({
      // enable run-time checks when not in production
      dev: !production,
      // generate: production ? 'dom' : 'ssr',
      hydratable: true,
      preprocess: autoPreprocess({
        postcss: {
          plugins: [require('autoprefixer')()]
        }
      })
    }),
    resolve(),
    commonjs(),
    production && terser(),
    production && analyze(),
    production && bundleSize(),
  ],
}