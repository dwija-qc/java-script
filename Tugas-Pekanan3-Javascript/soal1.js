const prompt = require('prompt-sync')({sigint: true});

const nilai = prompt('Input Nilai: ');
let nilaiAkhir;
var message;

if (nilai<0) {
    message = "Tidak bisa input bilangan negatif";
    console.log(message);
}
else if (nilai % 2 !== 0){
    message = "Tidak bisa input bilangan ganjil";
    console.log(message);
}
else { 
    nilaiAkhir = Math.sqrt(nilai);
    console.log(nilaiAkhir)
}


