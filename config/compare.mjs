import argsMap from '#utils/args-map'

export const ITERATIONS = (
  argsMap.has('ITERATIONS')
    ? argsMap.get('ITERATIONS')
    : 10
)

export const KEYLEN = (
  argsMap.has('KEYLEN')
    ? argsMap.get('KEYLEN')
    : 64
)

export const DIGEST = (
  argsMap.has('DIGEST')
    ? argsMap.get('DIGEST')
    : 'sha512'
)
