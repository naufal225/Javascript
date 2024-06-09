// // Destructuring Assignment

// // Contoh sederhana

// const [a,b,c] = [1,2,3];

// // pada array

// const contoh1 = ["Nama", "Saya", "Adalah", "Naufal"];

// const [satu, dua, tiga, naufal] = contoh1;

// // skip

// const [satuu, , , name] = contoh1;

// // swap item

// let a1 = 4;
// let b1 = 8;

// [a1,b1] = [b1,a1];

// console.log(a1); // 8

// console.log(b1); // 4

// // Return value pada function

// function coba(a,b) {
//     return [a,b];
// }

// const [a2, b2] = coba(3,4);
// console.log(a2); // 3
// console.log(b2); // 4

// // Rest Parameter

// const [a3, b3, ...values] = [1,2,3,4,5,6];
// console.log(a3);   // 1
// console.log(b3);   // 2
// console.log(values); // 3,4,5,6




// // Destructuring Object

// const siswa ={
//     nama: "Naufal",
//     umur: 16,
//     kelas: "X RPL 4"
// }

// const { nama, umur, kelas } = siswa; // nama variabel harus sesuai nama properti
// console.log(nama);
// console.log(umur);
// console.log(kelas);

// // Assignement Tanpa Deklarasi Object

// (
//     {nama, umur, kelas} = {
//         nama: "Naufal",
//         umur: 16,
//         kelas: "X RPL 4"
//     }
// )

// console.log(nama);
// console.log(umur);
// console.log(kelas);

// // Assign Ke Variabel Baru

// const siswa ={
//     nama: "Naufal",
//     umur: 16,
//     kelas: "X RPL 4"
// }

// const { nama: n, umur: u, kelas: k} = siswa; // nama akan disimpan sebagai n, umur sebagai u, dan kelas k
// console.log(n);
// console.log(u);
// console.log(k);

// // Default Value

// const siswa ={
//     nama: "Naufal",
//     umur: 16,
//     kelas: "X RPL 4",
//     // email: "naufal@gmail.com", // jika ada, pakai ini
// }

// const { nama: n, umur: u, kelas: k, email: e = 'email@gmail.com'} = siswa; // jika di object tidak ada email, pakai ini
// console.log(n);
// console.log(u);
// console.log(k);
// console.log(e);

// Rest Parameter Pada Object

// const siswa = {
//     nama: "Naufal",
//     umur: 16,
//     kelas: "X RPL 4",
//     email: "naufal@gmail.com"
// }

// const { nama, ...values } = siswa;
// console.log(nama); // string
// console.log(values); // object

// Mengambil field pada object yang dikirim sebagai parameter untuk function

const siswa = {
    id: 1,
    nama: "Naufal",
    umur: 16,
    kelas: "X RPL 4",
    email: "naufal@gmail.com"
};

const obnj = {
    cihuy: "hhh",
}

function getId({ id }) {
    return id;
}

console.log(getId(siswa)); // 1
console.log(getId(obnj)); // undefined
