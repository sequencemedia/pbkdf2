import {
  randomBytes
} from 'node:crypto'

/**
 * @param {number} size
 * @returns {Promise<Buffer>}
 */
export default function salt (size) {
  return (
    new Promise((resolve, reject) => {
      randomBytes(size, (e, buffer) => {
        (!e)
          ? resolve(buffer)
          : reject(e)
      })
    })
  )
}
