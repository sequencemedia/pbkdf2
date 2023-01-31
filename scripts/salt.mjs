#!/usr/bin/env node

import argsMap from '#utils/args-map'
import {
  fromBufferToBase64
} from '#utils/common'
import salt from '#utils/salt'

if (!argsMap.has('size')) throw new Error('Parameter `size` is required')
const size = argsMap.get('size')

salt(size)
  .then((buffer) => {
    console.log(fromBufferToBase64(buffer))
  })
  .catch(({ message }) => {
    console.error(`💩 - ${message}`)
  })
