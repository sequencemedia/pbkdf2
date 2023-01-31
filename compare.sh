#!/bin/bash

# the-user-1
npm run compare -- \
  --password "^49pPaRdVSNC" \
  --hash "kOhpM7//M4I9+WcWLH7vbb/yN2+8qKyxQ0xAfI4JzamcRMdwwl7vAh0ch7UJ0JoBe9AqaAGuUJZF/mVA9EqaLQ==" \
  --salt "YzFjMTY4MmMyMWE4MjFkYjRhNWE5YjJmNDY0OTUzM2Q=" \
  --iterations 32768 \
  --digest sha512

# the-user-2
npm run compare -- \
  --password "S0uSaC&FzDOO" \
  --hash "BrtOel2qy5HrYWn45jBKf5b3HUKdVeQfIj1ljhGxQ/SiWsmMMuOl756H4MXkMOnVJKrgFfHFy7cgFXUaSFA2ow==" \
  --salt "MDI2OGM0MDU4NWJiOTgxNWEyYzQwN2RkYjM1YTY5YWU=" \
  --iterations 32768 \
  --digest sha512

# the-user-3
npm run compare -- \
  --password "@^EJmdlkt5A#" \
  --hash "bV76sVqsM0doKBFnaHsZQC9OgcVnF/+gzkG7HFXdD7jyQdN1PqCVijyXKMijmYQPWJohi5f7sVxhoLJ5kf8aQA==" \
  --salt "ZDI3OTZmZWU3M2I3M2Y3MTgxMmYyNGM3MjU4NDE2NDM=" \
  --iterations 32768 \
  --digest sha512
