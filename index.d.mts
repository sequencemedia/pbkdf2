import type {
  BinaryLike
} from 'node:crypto'

export type CompareParams = {
  salt: BinaryLike,
  hash: Buffer,
  iterations?: number,
  keylen?: number,
  digest?: string
}

export type HashParams = {
  salt: BinaryLike,
  iterations?: number,
  keylen?: number,
  digest?: string
}

export function compare(password: BinaryLike, params: CompareParams): Promise<boolean>
export function hash (password: BinaryLike, params: HashParams): Promise<Buffer>
export function salt (size: number): Promise<Buffer>
