import type {
  BinaryLike
} from 'node:crypto'

interface CompareParams {
  salt: BinaryLike
  hash: Buffer
  iterations?: number
  keylen?: number
  digest?: string
}

export default function compare (password: BinaryLike, params: CompareParams): Promise<boolean>
