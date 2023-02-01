#!/bin/bash

# the-user-1 (UMS)
npm run compare -- \
  --password '^49pPaRdVSNC' \
  --hash 'kOhpM7//M4I9+WcWLH7vbb/yN2+8qKyxQ0xAfI4JzamcRMdwwl7vAh0ch7UJ0JoBe9AqaAGuUJZF/mVA9EqaLQ==' \
  --salt 'YzFjMTY4MmMyMWE4MjFkYjRhNWE5YjJmNDY0OTUzM2Q=' \
  --iterations 32768 \
  --digest 'sha512'

# the-user-1 (Keycloak)
npm run compare -- \
  --password '$b!6A6t7M7URi.' \
  --hash 'zC9qCa/0XjQOt/fy/XFZ69rvnw6w6hueI294PnqmPeKOeMH3Qr8S5RWhg1v+b60DhkcSlw1FKZWpgNjsQflxYA==' \
  --salt '9xdUcOPkoYYS/kr2URMArw==' \
  --iterations 27500 \
  --digest 'sha256' \
  --keylen 64

# the-user-2 (UMS)
npm run compare -- \
  --password 'S0uSaC&FzDOO' \
  --hash 'BrtOel2qy5HrYWn45jBKf5b3HUKdVeQfIj1ljhGxQ/SiWsmMMuOl756H4MXkMOnVJKrgFfHFy7cgFXUaSFA2ow==' \
  --salt 'MDI2OGM0MDU4NWJiOTgxNWEyYzQwN2RkYjM1YTY5YWU=' \
  --iterations 32768 \
  --digest 'sha512'

# the-user-2 (Keycloak)
npm run compare -- \
  --password 'CJPRki*Qx4GsL9' \
  --salt '+7WfVsQDJwz3NhT7sIVAGA==' \
  --hash 'dA0brxazVBjCiiWGJOvUjGKZzEsdHaooUYRWhz3gYsPQJlADznYzk+9Mlzh0AHNgbo4vlWFMGm6vIQC2DxucJw==' \
  --iterations 27500 \
  --digest 'sha256' \
  --keylen 64

# the-user-3
npm run compare -- \
  --password '@^EJmdlkt5A#' \
  --hash 'bV76sVqsM0doKBFnaHsZQC9OgcVnF/+gzkG7HFXdD7jyQdN1PqCVijyXKMijmYQPWJohi5f7sVxhoLJ5kf8aQA==' \
  --salt 'ZDI3OTZmZWU3M2I3M2Y3MTgxMmYyNGM3MjU4NDE2NDM=' \
  --iterations 32768 \
  --digest 'sha512'

# the-user-3 (Keycloak)
npm run compare -- \
  --password 'Q*edKXB@@u#7kN' \
  --hash 'Pmmom2yEUX0/M1chwCdyHM0WMiyAoHEVOmbRNUN/695FlkZMPSxSMwBLPBgYoKbP1Shir/NDBWcH6mgtHFPyYw==' \
  --salt 't8U4ClO+biQUa9amFn4bUA==' \
  --iterations 27500 \
  --digest 'sha256' \
  --keylen 64
