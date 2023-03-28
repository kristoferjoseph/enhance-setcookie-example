## Repro steps

1. npm i
2. npm start
3. navigate to http://localhost:3333/
4. notice redirect to /login (fake login flow I was messing around with)
5. click login
6. see code inside login.mjs that should set-cookie hello=world
7. observe cookies in logs (no hello=world cookie)
