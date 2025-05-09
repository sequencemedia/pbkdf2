/**
 *  @param {string} string
 *  @returns {Buffer}
 */
export function fromBase64ToBuffer (string) {
  return Buffer.from(string, 'base64')
}

/**
 *  @param {Buffer} buffer
 *  @returns {string}
 */
export function fromBufferToBase64 (buffer) {
  return buffer.toString('base64')
}
