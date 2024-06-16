// Spread Operator

// memecah iterabel meenjadi single element

const siswa = ["Budi", "cecep", "Udin"];

console.log(...siswa);
console.log(...siswa[1]);

const guru = ["Asep", "Joko"];

const orang = [...siswa, "Icikiwwir", ...guru];

console.log(orang);


// meng copy array

const siswaLain = [...siswa];
console.log(siswaLain);