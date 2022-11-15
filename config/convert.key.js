const fs = require('fs');
const path = require('path');

const privateKey = fs.readFileSync(path.join(__dirname, 'private.key'));
const publicKey = fs.readFileSync(path.join(__dirname, 'public.key'));

const privateKeyBase64 = Buffer.from(privateKey).toString('base64');
const publicKeyBase64 = Buffer.from(publicKey).toString('base64');

console.log('\nPrivate Key:');
console.log(privateKeyBase64);

console.log('\nPublic Key:');
console.log(publicKeyBase64);
