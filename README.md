# @sequencemedia/pbkdf2

## Compare a given password to a `hash` and `salt`

Exposes the crypto `pbkdf2` utilities as `async` functions for Node and the shell

ES functions are exported from the package root alongside a TS definition

## Password validation by `hash` and `salt` comparison

A password can be compared with a `hash` and `salt` (and the number of `iterations` that were used to compute it) to determine whether it is valid

The ES functions expect the same argument types as the underlying Node utilities

- The `hash` is a `Buffer`
- The `salt` is a `Buffer`
- `iterations` is a `Number`
- `keylen` is a `Number`
- `digest` is a `String`

Etc.

### `compare`

The password is expected as the first argument, while the others are fields on a params object

```javascript
const isValid = await compare(password, {
  hash,
  salt,
  iterations,
  keylen,
  digest
})
```

### `hash`

As with `compare`, the password is expected as the first argument, while the others are fields on a params object (except for `hash` which can of course be omitted)

```javascript
const value = await hash(password, {
  hash,
  iterations,
  keylen,
  digest
})
```

### `salt`

An `async` wrapper around `crypto.randomBytes()` to _generate_ a salt from the salt size

```javascript
const value = await salt(size)
```

## In the shell

Scripts are exposed to `npm` in the package and each script can of course be invoked from the command line directly in the shell

```json
{
  "compare": "node scripts/compare.mjs",
  "hash": "node scripts/hash.mjs",
  "salt": "node scripts/salt.mjs"
}
```

Where required, both the `hash` and `salt` arguments are expected from the command line to be strings in _Base64_ format. Both `iterations` and `keylen` are coerced from strings to numbers

```bash
npm run compare -- \
  --password <PASSWORD> \
  --hash <HASH> \
  --salt <SALT> \
  --keylen <KEY LENGTH> \
  --iterations <ITERATIONS> \
  --digest <DIGEST>
```

```bash
./scripts/compare.mjs \
  --password <PASSWORD> \
  --hash <HASH> \
  --salt <SALT> \
  --keylen <KEY LENGTH> \
  --iterations <ITERATIONS> \
  --digest <DIGEST>
```

Etc.

- The `hash` is decoded to a `Buffer`
- The `salt` is transformed from a _Base64_ into an _ASCII_ `String`

## Tests

```bash
npm test
```

```bash
./compare.sh
```
