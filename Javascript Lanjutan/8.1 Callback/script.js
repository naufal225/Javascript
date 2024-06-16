// Callback

// function halo(nama) {
//     alert(`Halo ${nama}`);
// }

// function tampilkanPesan(callback) {
//     const nama = prompt("Masukan nama: ");
//     callback(nama);
// }

// // tampilkanPesan(halo);
// tampilkanPesan((x) => alert(`Halo ${x}`));


const data = [
    {
        "nama": "Budi",
        "email": "budi123@gmail.com",
        "telepon": "081296378"
    },
    {
        "nama": "Asep",
        "email": "budi123@gmail.com",
        "telepon": "081296378"
    },
    {
        "nama": "Udin",
        "email": "budi123@gmail.com",
        "telepon": "081296378"
    },
    {
        "nama": "Joko",
        "email": "budi123@gmail.com",
        "telepon": "081296378"
    }
];

// console.log('mulai');
// data.forEach(m => console.log(m.nama));
// console.log('selesai');

// console.log("mulai");
// data.forEach(m => {
//     for(let i = 0; i <= 1000000000; i += 0.5) {
//         let a = 1;
//     };
//     console.log(m.nama);
// })
// console.log("selesai");




// Asynchronous Callback

// vanilla javascript

// function getData(url, success, error) {
//     let xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = () => {
//         if(xhr.readyState === XMLHttpRequest.DONE) {
//             if(xhr.status === 200) {
//                 success(xhr.response);
//             } else {
//                 error();
//             }           
//         }
//     }

//     xhr.open('GET', url);
//     xhr.send();
// }

// console.log("mulai");
// getData('data/data.json', (response) => {
//     JSON.parse(response).forEach(e => console.log(`${e.nama}, Rp.${e.harga}, ada ${e.jumlah} pcs`));
// }, () => {
//     console.log("ada masalah");
// })
// console.log("selesai");

// jquery

console.log("Mulai");
$.ajax({
    url: 'data/data.json',
    success: (data) => {
        data.forEach(e => console.log(`${e.nama}, Rp. ${e.harga}, ada ${e.jumlah} pcs`))
    },
    error: (e) => {
        console.log("error kayaknya");
        console.log(e.responseText);
    } 
});
console.log("selesai");