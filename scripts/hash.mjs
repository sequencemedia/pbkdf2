#!/usr/bin/env node

import argsMap from '#config/args-map'
import {
  fromBase64ToBuffer,
  fromBufferToBase64
} from '#utils/common'
import hash from '#utils/hash'
import {
  ITERATIONS,
  KEYLEN,
  DIGEST
} from '#config/compare'

if (!argsMap.has('password')) throw new Error('Parameter `password` is required')
const password = argsMap.get('password')

if (!argsMap.has('salt')) throw new Error('Parameter `salt` is required')
const salt = fromBase64ToBuffer(argsMap.get('salt'))

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

hash(password, { salt, iterations, keylen, digest })
  .then((buffer) => {
    console.log(fromBufferToBase64(buffer))
  })
  .catch(({ message }) => {
    console.error(`💩 - ${message}`)
  })
