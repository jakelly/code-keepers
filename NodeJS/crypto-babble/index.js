const crypto = require('crypto');
const key = 'special-secret-encryption-key!!!';  // 32 character Encryption Key
const iv = '1111222233334444';  // 16 character Initialization Vector
const clearText = 'ABCD1234';   // Text to be encrypted

const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);

const encrypted = Buffer.concat([
    cipher.update(clearText), 
    cipher.final()
]);

// Convert to Base64 for transport and display in Console
console.log('Encrypted value: ' + encrypted.toString('base64'));

const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
const decrypted = Buffer.concat([
    decipher.update(encrypted.toString('base64'), 'base64'),
    decipher.final()
]);

// Convert to UTF-8 and display in Console
console.log('Decrypted value: ' + decrypted.toString('utf-8'));