import globals from 'globals'
import jsdoc from 'eslint-plugin-jsdoc'
import standard from '@sequencemedia/eslint-config-standard/merge'
import typescript from '@sequencemedia/eslint-config-typescript/merge'

export default [
  jsdoc.configs['flat/recommended'],
  {
    languageOptions: {
      globals: {
        ArrayBufferLike: 'readonly'
      }
    }
  },
  ...standard({
    files: [
      '**/*.{mjs,cjs,mts,cts}'
    ],
    ignores: [
      'test'
    ],
    languageOptions: {
      globals: {
        ...globals.node
      }
    }
  }),
  ...typescript({
    files: [
      '**/*.{mts,cts}'
    ],
    ignores: [
      'test'
    ],
    languageOptions: {
      globals: {
        ...globals.node
      }
    }
  }),
  ...standard({
    files: [
      'test/**/*.{mjs,cjs,mts,cts}'
    ],
    languageOptions: {
      globals: {
        ...globals.mocha
      }
    }
  }),
  ...typescript({
    files: [
      'test/**/*.{mts,cts}'
    ],
    languageOptions: {
      globals: {
        ...globals.mocha
      }
    }
  })
]
