export function fromBase64ToBuffer (string) {
  return Buffer.from(string, 'base64')
}

export function fromBufferToBase64 (buffer) {
  return buffer.toString('base64')
}
