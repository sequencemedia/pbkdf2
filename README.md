# @sequencemedia/pbkdf2

ES functions are exported from package root alongside a TS definition

## Password validation

A password can be validated against a `hash` and `salt` (and the number of `iterations` that were used to compute it)

Both the `hash` and `salt` are expected from the command line to be strings in _Base64_ format

- The `hash` is decoded to a `Buffer`
- The `salt` is transformed from _Base64_ into _ASCII_

You can use these utilities from the shell or as part of a Node application

## Tests

```bash
npm test
bash ./compare.sh
```
