import {
  expect
} from 'chai'
import {
  fromBase64,
  toBase64,
  fromBase64ToBuffer,
  fromBufferToBase64
} from '#utils/common'

describe('`#utils/common`', () => {
  describe('fromBase64', () => it('is a function', () => expect(fromBase64).to.be.a('function')))

  describe('toBase64', () => it('is a function', () => expect(toBase64).to.be.a('function')))

  describe('fromBase64ToBuffer', () => it('is a function', () => expect(fromBase64ToBuffer).to.be.a('function')))

  describe('fromBufferToBase64', () => it('is a function', () => expect(fromBufferToBase64).to.be.a('function')))

  describe('fromBase64()', () => {
    describe('User 1', () => {
      it('returns a string', () => {
        const BASE64 = 'YzFjMTY4MmMyMWE4MjFkYjRhNWE5YjJmNDY0OTUzM2Q='
        const ASCII = 'c1c1682c21a821db4a5a9b2f4649533d'

        return expect(fromBase64(BASE64)).to.equal(ASCII)
      })
    })

    describe('User 2', () => {
      it('returns a string', () => {
        const BASE64 = 'MDI2OGM0MDU4NWJiOTgxNWEyYzQwN2RkYjM1YTY5YWU='
        const ASCII = '0268c40585bb9815a2c407ddb35a69ae'

        return expect(fromBase64(BASE64)).to.equal(ASCII)
      })
    })

    describe('User 3', () => {
      it('returns a string', () => {
        const BASE64 = 'ZDI3OTZmZWU3M2I3M2Y3MTgxMmYyNGM3MjU4NDE2NDM='
        const ASCII = 'd2796fee73b73f71812f24c725841643'

        return expect(fromBase64(BASE64)).to.equal(ASCII)
      })
    })
  })

  describe('toBase64()', () => {
    describe('User 1', () => {
      it('returns a string', () => {
        const ASCII = 'c1c1682c21a821db4a5a9b2f4649533d'
        const BASE64 = 'YzFjMTY4MmMyMWE4MjFkYjRhNWE5YjJmNDY0OTUzM2Q='

        return expect(toBase64(ASCII)).to.equal(BASE64)
      })
    })

    describe('User 2', () => {
      it('returns a string', () => {
        const ASCII = '0268c40585bb9815a2c407ddb35a69ae'
        const BASE64 = 'MDI2OGM0MDU4NWJiOTgxNWEyYzQwN2RkYjM1YTY5YWU='

        return expect(toBase64(ASCII)).to.equal(BASE64)
      })
    })

    describe('User 3', () => {
      it('returns a string', () => {
        const ASCII = 'd2796fee73b73f71812f24c725841643'
        const BASE64 = 'ZDI3OTZmZWU3M2I3M2Y3MTgxMmYyNGM3MjU4NDE2NDM='

        return expect(toBase64(ASCII)).to.equal(BASE64)
      })
    })
  })

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
