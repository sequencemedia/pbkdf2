import {
  timingSafeEqual
} from 'node:crypto'
import hash from './hash.mjs'

/**
 * function compare (password, salt, h, complete = () => {}) {
 *   hash(password, salt, (e, v) => {
 *     if (e) return complete(e)
 *
 *     complete(null, timingSafeEqual(h, v))
 *   })
 * }
 */

export default async function compare (password, {
  hash: alpha,
  ...params
} = {}) {
  const omega = await hash(password, params)

  return timingSafeEqual(alpha, omega)
}
