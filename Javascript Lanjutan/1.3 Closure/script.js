// Closure

function salam(waktu) {
    return function(nama) {
        console.log(`Selamat ${waktu}, ${nama}`); // menggunakan template literal dengan backtick
    }
}

let selamatPagi = salam("Pagi");
let selamatSiang = salam("Siang");
let selamatMalam = salam("Malam");

selamatPagi("Budi"); // Output: Selamat Pagi, Budi
selamatSiang("Andi"); // Output: Selamat Siang, Andi
selamatMalam("Susi"); // Output: Selamat Malam, Susi

// Contoh lain

// function add() {
//     let counter = 0;
//     return () => counter++;
// }

// let tambah = add();

// console.log(tambah()); // 0
// console.log(tambah()); // 1
// console.log(tambah()); // 2

let add = (function(){
    let counter = 0;
    return () => counter++;
})();

console.log(add()) // 0
console.log(add()) // 1
console.log(add()) // 2
console.log(add()) // 3
console.log(add()) // 4