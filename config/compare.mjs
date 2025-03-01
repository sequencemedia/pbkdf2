import argsMap from './args-map.mjs'

/**
 *  @type {number}
 */
export const ITERATIONS = (
  argsMap.has('ITERATIONS')
    ? argsMap.get('ITERATIONS')
    : 10
)

/**
 *  @type {number}
 */
export const KEYLEN = (
  argsMap.has('KEYLEN')
    ? argsMap.get('KEYLEN')
    : 64
)

/**
 *  @type {string}
 */
export const DIGEST = (
  argsMap.has('DIGEST')
    ? argsMap.get('DIGEST')
    : 'sha512'
)
