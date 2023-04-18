declare module '@sequencemedia/pbkdf2' {
  export function compare(password: string, params: { salt: string, hash: Buffer, iteration?: number, keylen?: number, digest?: string }): Promise<boolean>
  export function hash (password: string, params: { salt: string, iteration?: number, keylen?: number, digest?: string }): Promise<Buffer>
  export function salt (size: number): Promise<Buffer>
}
