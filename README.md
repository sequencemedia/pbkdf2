# @sequencemedia/pbkdf2

A password can be validated against a `hash` and `salt` (and the number of `iterations` that were used to compute it)

Both the `hash` and `salt` are expected from the command line to be strings in _Base64_ format

- The `hash` is decoded to a `Buffer`
- The `salt` is transformed from _Base64_ into _ASCII_

```bash
npm test
bash ./compare.sh
```
