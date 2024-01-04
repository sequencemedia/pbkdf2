import {
  expect
} from 'chai'
import compare from '#utils/compare'

describe('`#utils/compare`', () => {
  xdescribe('compare', () => it('is a function', () => expect(compare).to.be.a('function')))

  describe('compare()', () => {
    const ITERATIONS = 32768

    describe('User 1', () => {
      const HASH = Buffer.from('kOhpM7//M4I9+WcWLH7vbb/yN2+8qKyxQ0xAfI4JzamcRMdwwl7vAh0ch7UJ0JoBe9AqaAGuUJZF/mVA9EqaLQ==', 'base64')
      const SALT = 'c1c1682c21a821db4a5a9b2f4649533d'

      describe('`password` is valid', () => {
        it('returns true', async () => {
          const password = '^49pPaRdVSNC'
          const isValid = await compare(password, { hash: HASH, salt: SALT, iterations: ITERATIONS })

          return expect(isValid).to.be.true
        })
      })

      describe('`password` is not valid', () => {
        it('returns false', async () => {
          const password = 'not password'
          const isValid = await compare(password, { hash: HASH, salt: SALT, iterations: ITERATIONS })

          return expect(isValid).to.be.false
        })
      })
    })

    describe('User 2', () => {
      const HASH = Buffer.from('BrtOel2qy5HrYWn45jBKf5b3HUKdVeQfIj1ljhGxQ/SiWsmMMuOl756H4MXkMOnVJKrgFfHFy7cgFXUaSFA2ow==', 'base64')
      const SALT = '0268c40585bb9815a2c407ddb35a69ae'

      describe('`password` is valid', () => {
        it('returns true', async () => {
          const password = 'S0uSaC&FzDOO'
          const isValid = await compare(password, { hash: HASH, salt: SALT, iterations: ITERATIONS })

          return expect(isValid).to.be.true
        })
      })

      describe('`password` is not valid', () => {
        it('returns false', async () => {
          const password = 'not password'
          const isValid = await compare(password, { hash: HASH, salt: SALT, iterations: ITERATIONS })

          return expect(isValid).to.be.false
        })
      })
    })

    describe('User 3', () => {
      const HASH = Buffer.from('bV76sVqsM0doKBFnaHsZQC9OgcVnF/+gzkG7HFXdD7jyQdN1PqCVijyXKMijmYQPWJohi5f7sVxhoLJ5kf8aQA==', 'base64')
      const SALT = 'd2796fee73b73f71812f24c725841643'

      describe('`password` is valid', () => {
        it('returns true', async () => {
          const password = '@^EJmdlkt5A#'
          const isValid = await compare(password, { hash: HASH, salt: SALT, iterations: ITERATIONS })

          return expect(isValid).to.be.true
        })
      })

      describe('`password` is not valid', () => {
        it('returns false', async () => {
          const password = 'not password'
          const isValid = await compare(password, { hash: HASH, salt: SALT, iterations: ITERATIONS })

          return expect(isValid).to.be.false
        })
      })
    })
  })
})
