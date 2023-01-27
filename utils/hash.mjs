import {
  pbkdf2
} from 'node:crypto'
import {
  ITERATIONS,
  KEYLEN,
  DIGEST
} from '#config/compare'

/**
 * function hash (password, salt, complete = () => {}) {
 *   pbkdf2(password, salt, ITERATIONS, KEYLEN, DIGEST, complete)
 * }
 */

export default function hash (password, {
  salt,
  iterations = ITERATIONS,
  keylen = KEYLEN,
  digest = DIGEST
} = {}) {
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
