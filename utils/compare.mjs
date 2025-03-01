/**
 *  @typedef {import('node:crypto').BinaryLike} BinaryLike
 *
 *  @typedef {{
 *    salt: BinaryLike,
 *    hash: Buffer,
 *    iterations?: number,
 *    keylen?: number,
 *    digest?: string
 *  }} CompareParams
 *
 *  @typedef {{
 *    salt: BinaryLike,
 *    iterations?: number,
 *    keylen?: number,
 *    digest?: string
 * }} HashParams
 */

import {
  timingSafeEqual
} from 'node:crypto'

import hash from './hash.mjs'

/**
 * @param {BinaryLike} password
 * @param {CompareParams} params
 * @returns {Promise<boolean>}
 */
export default async function compare (password, {
  hash: alpha,
  ...params
}) {
  /**
   *  @type {Buffer<ArrayBufferLike>}
   */
  const omega = await hash(password, params)

  return timingSafeEqual(alpha, omega)
}
