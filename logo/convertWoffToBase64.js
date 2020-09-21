const fs = require('fs');

const base64 = fs.readFileSync('./logo.woff', { encoding: 'base64' });

console.log(base64);
