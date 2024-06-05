// Arrow Fucntion

// let salam = (waktu, nama) => {return `Selamat ${waktu}, ${nama}`;}
let salam = (waktu, nama) => `Selamat ${waktu}, ${nama}`;// implisit return

console.log(salam("Siang", "Budi"));

const listNama = ['Budi', "Joko", "Cecep", "Udin", "Asep"];
listNama.forEach(nama => console.log(`Selamat Pagi, ${nama}`));

// Membuat Objek dari arrow function 

let objDataNama = listNama.map(nama => ({Nama: nama, Panjang: nama.length}));
