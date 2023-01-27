#!/usr/bin/env node

import argsMap from '#utils/args-map'
import compare from '#utils/compare'
import {
  fromBase64ToBuffer,
  fromBase64
} from '#utils/common'
import {
  ITERATIONS,
  KEYLEN,
  DIGEST
} from '#config/compare'

if (!argsMap.has('password')) throw new Error('Parameter `password` is required')
const password = argsMap.get('password')

if (!argsMap.has('hash')) throw new Error('Parameter `hash` is required')
const hash = fromBase64ToBuffer(argsMap.get('hash'))

if (!argsMap.has('salt')) throw new Error('Parameter `salt` is required')
const salt = fromBase64(argsMap.get('salt'))

const iterations = (
  argsMap.has('iterations')
    ? argsMap.get('iterations')
    : ITERATIONS
)

const keylen = (
  argsMap.has('keylen')
    ? argsMap.get('keylen')
    : KEYLEN
)

const digest = (
  argsMap.has('digest')
    ? argsMap.get('digest')
    : DIGEST
)

compare(password, { hash, salt, iterations, keylen, digest })
  .then((isValid) => {
    console.log(isValid ? '👍' : '👎')
  })
  .catch(() => {
    console.error('💩')
  })
