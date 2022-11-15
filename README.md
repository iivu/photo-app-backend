## create private key and public key

```sh
openssl
genrsa -out private.key 4096
rsa -in private.key -pubout -out public.key
```
