export function fromBase64ToBuffer (string) {
  return Buffer.from(string, 'base64')
}

export function fromBufferToBase64 (buffer) {
  return buffer.toString('base64')
}

export function fromBase64 (string) {
  return Buffer.from(string, 'base64').toString('ascii')
}

export function toBase64 (string) {
  return Buffer.from(string).toString('base64')
}
