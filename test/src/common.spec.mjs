import {
  expect
} from 'chai'

import {
  fromBase64ToBuffer,
  fromBufferToBase64
} from '#pbkdf2/common'

describe('`#pbkdf2/common`', () => {
  describe('fromBase64ToBuffer', () => it('is a function', () => expect(fromBase64ToBuffer).to.be.a('function')))

  describe('fromBufferToBase64', () => it('is a function', () => expect(fromBufferToBase64).to.be.a('function')))

  describe('fromBase64ToBuffer()', () => {
    describe('User 1', () => {
      it('returns a buffer', () => {
        const BASE64 = 'YzFjMTY4MmMyMWE4MjFkYjRhNWE5YjJmNDY0OTUzM2Q='
        const BUFFER = Buffer.from('c1c1682c21a821db4a5a9b2f4649533d')

        return expect(Buffer.compare(fromBase64ToBuffer(BASE64), BUFFER)).to.equal(0)
      })
    })

    describe('User 2', () => {
      it('returns a buffer', () => {
        const BASE64 = 'MDI2OGM0MDU4NWJiOTgxNWEyYzQwN2RkYjM1YTY5YWU='
        const BUFFER = Buffer.from('0268c40585bb9815a2c407ddb35a69ae')

        return expect(Buffer.compare(fromBase64ToBuffer(BASE64), BUFFER)).to.equal(0)
      })
    })

    describe('User 3', () => {
      it('returns a buffer', () => {
        const BASE64 = 'ZDI3OTZmZWU3M2I3M2Y3MTgxMmYyNGM3MjU4NDE2NDM='
        const BUFFER = Buffer.from('d2796fee73b73f71812f24c725841643')

        return expect(Buffer.compare(fromBase64ToBuffer(BASE64), BUFFER)).to.equal(0)
      })
    })
  })

  describe('fromBufferToBase64()', () => {
    describe('User 1', () => {
      it('returns a string', () => {
        const BUFFER = Buffer.from('c1c1682c21a821db4a5a9b2f4649533d')
        const BASE64 = 'YzFjMTY4MmMyMWE4MjFkYjRhNWE5YjJmNDY0OTUzM2Q='

        return expect(fromBufferToBase64(BUFFER)).to.equal(BASE64)
      })
    })

    describe('User 2', () => {
      it('returns a string', () => {
        const BUFFER = Buffer.from('0268c40585bb9815a2c407ddb35a69ae')
        const BASE64 = 'MDI2OGM0MDU4NWJiOTgxNWEyYzQwN2RkYjM1YTY5YWU='

        return expect(fromBufferToBase64(BUFFER)).to.equal(BASE64)
      })
    })

    describe('User 3', () => {
      it('returns a string', () => {
        const BUFFER = Buffer.from('d2796fee73b73f71812f24c725841643')
        const BASE64 = 'ZDI3OTZmZWU3M2I3M2Y3MTgxMmYyNGM3MjU4NDE2NDM='

        return expect(fromBufferToBase64(BUFFER)).to.equal(BASE64)
      })
    })
  })
})
