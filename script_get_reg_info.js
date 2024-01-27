const fs = require('fs');
const cookie = fs.readFileSync('D:\\BitcoinRegtest\\regtest\\.cookie', 'utf8').trim();
const [cookieUser, cookiePassword] = cookie.split(':');

console.log(cookieUser);
console.log(cookiePassword);