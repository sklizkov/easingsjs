import typescript from 'rollup-plugin-typescript2'
import banner from 'rollup-plugin-banner'
import { terser } from 'rollup-plugin-terser'

import pkg from './package.json'


export default [
  {
    input: 'src/index.ts',
    output: [
      { file: `dist/${ pkg.name }.cjs.js`, format: 'cjs' }, // cjs
      { file: `dist/${ pkg.name }.module.js`, format: 'es' }, // es
      { file: `dist/${ pkg.name }.js`, format: 'umd', name: 'easingFns' }, // umd
    ],
    plugins: [
      typescript({ useTsconfigDeclarationDir: true }),
      terser(),
      banner('<%= pkg.name %>@<%= pkg.version %> - <%= pkg.homepage %>')
    ],
    watch: {
      include: 'src/**',
    },
  },
]