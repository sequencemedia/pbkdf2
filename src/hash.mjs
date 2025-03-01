/**
 *  @typedef {import('node:crypto').BinaryLike} BinaryLike
 *  @typedef {{
 *    salt: BinaryLike,
 *    iterations?: number,
 *    keylen?: number,
 *    digest?: string
 *  }} HashParams
 */

import {
  pbkdf2
} from 'node:crypto'

import {
  ITERATIONS,
  KEYLEN,
  DIGEST
} from '#config/compare'

/**
 * @param {BinaryLike} password
 * @param {HashParams} params
 * @returns {Promise<Buffer>}
 */
export default function hash (password, {
  salt,
  iterations = ITERATIONS,
  keylen = KEYLEN,
  digest = DIGEST
}) {
  return (
    new Promise((resolve, reject) => {
      pbkdf2(password, salt, iterations, keylen, digest, (e, buffer) => {
        (!e)
          ? resolve(buffer)
          : reject(e)
      })
    })
  )
}
