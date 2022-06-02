# Documentation

# Jelastic cli configuration on CI

```bash
# Configuration to provide through the env

JELASTIC_PLATFORM_URI=app.hidora.com
JELASTIC_USER_LOGIN=xxxx
JELASTIC_USER_PASSWORD=xxxx
```

# Ci Process

## 1 - Login
The very first thing to do in the CI is to login

```bash
# Place this in the script section
~/jelastic/users/authentication/signin --login  ${JELATIS_USER_LOGIN} --password  ${JELASTIC_USER_PASSWORD} --platformUrl  ${JELASTIC_PLATFORM_URI}


```

# Jelastic documentation links

- Api: https://docs.jelastic.com/api/
- https://www.virtuozzo.com/application-platform-docs/cli/?lang=en
- https://www.virtuozzo.com/application-platform-docs/cli-create-environment/