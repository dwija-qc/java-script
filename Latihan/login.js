const prompt = require('prompt-sync')({sigint: true});

const password = prompt('Enter password: ');
const validPassword = 'password'

if (password===validPassword) {
    console.log("selamat datang")
}

else {
    console.log("Password salah, silakan coba kembali")
}

console.log("Terima kasih sudah menggunakan")