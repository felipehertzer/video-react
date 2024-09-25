import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import sass from 'rollup-plugin-sass'
import pkg from './package.json' with { type: 'json' }

const peerDependencies = Object.keys(pkg.peerDependencies || {})
const dependencies = Object.keys(pkg.dependencies || {})

function baseConfig() {
  return {
    input: 'src/video-react.js',
    external: peerDependencies.concat(dependencies),
    plugins: [
      sass({
        output: 'dist/video-react.css',
      }),
      nodeResolve({
        browser: true,
        preferBuiltins: false,
      }),
      commonjs(),
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**',
        presets: [
          [
            '@babel/preset-env',
            {
              loose: true,
              shippedProposals: true,
              modules: false,
              targets: '> 0.25%, not dead, ie 11',
            },
          ],
          '@babel/preset-react',
        ],
      }),
    ],
  }
}

// CommonJS and ES Module builds
const libConfig = {
  ...baseConfig(),
  output: [
    {
      sourcemap: true,
      name: 'VideoReact',
      file: 'dist/video-react.cjs.js',
      format: 'cjs', // CommonJS format
    },
    {
      sourcemap: true,
      name: 'VideoReact',
      file: 'dist/video-react.es.js',
      format: 'es', // ES Module format
    },
  ],
}

export default [libConfig]
