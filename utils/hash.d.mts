
import type {BinaryLike} from 'node:crypto'

type HashParams = {
      salt: BinaryLike,
      iterations?: number,
      keylen?: number,
      digest?: string
   }

export default function hash (password: BinaryLike, params: HashParams): Promise<Buffer>
