import {
  randomBytes
} from 'node:crypto'

/**
 * function salt (size, complete = () => {}) {
 *   randomBytes(size, complete)
 * }
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
