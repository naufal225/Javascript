// Promise

// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = () => {
//     if(xhr.readyState === XMLHttpRequest.DONE) {
//         if(xhr.status === 200) {
//             console.log(xhr.response);
//         } else {
//             console.log("error kocak");
//         }
//     }
// }

// xhr.open("GET", "../8.1 Callback/data/data.json");
// xhr.send();


// Menggunakan fetch

// fetch('../8.1 Callback/data/data.json')
//     .then(res => res.json())
//     .then(res => console.log(res));


// Promise
// sebuah object yang merepresentasikan keberhasilan atau kegagalan dari sebuah event yang asynchronous yang akan terjadi di masa yang akan datang
// bisa terpenuhi atau ingkar
// states (fulfilled / rejected / pending)
// callback(resolve / reject / finally)
// aksie (then / catch)


// contoh 1

// let ditepati = true;
// const janji1 = new Promise((resolve, reject) => {
//     if( ditepati ) {
//         resolve("Janji ditepati");
//     } else {
//         reject("Janji tidak ditepati");
//     }
// });

// console.log("start");
// janji1
//     .then(m => console.log(`OK, ${m}`))
//     .catch(r => console.log(`walah, ${r}`))
//     .finally(() => console.log("Selesai"));
// console.log("end");

// contoh 2

// let ditepati2 = true;
// const janji2 = new Promise((resolve, reject) => {
//     if(ditepati2) {
//         setTimeout(() => {
//             console.log("Janji ditepati setelah beberapa waktu");
//         }, 2000);
//     } else {
//         setTimeout(() => {
//             console.log("Janji tidak ditepati setelah beberapa waktu");
//         }, 2000);
//     }
// });

// console.log("start");
// console.log(
//     janji2
//     .finally(() => "Proses selesai")
//     .then(m => `OK, ${m}`)
//     .catch(r => `Walah, ${r}`)
// );
// // janji2
// //     .finally(() => console.log("Proses selesai"))
// //     .then(m => console.log(`OK, ${m}`))
// //     .catch(r => console.log(`Walah, ${r}`));
// console.log("end");


// Promise.all

const barang = new Promise(resolve => {
    setTimeout(() => {
        resolve([
            {
                nama: "Buku",
                harga: 3000,
                jumlah: 10
            },
            {
                nama: "Pensil",
                harga: 2000,
                jumlah: 12
            }
        ])
    }, 1000);
});

const kota = new Promise(resolve => {
    setTimeout(() => {
        resolve([
            {
                kota: "Bekasi",
                temp: 37,
                kondisi: "Panas"
            }
        ])
    }, 500);
});

// Promise.all([barang, kota])
//     .then(m => console.log(m)); // Dicetak menjadi satu array

Promise.all([barang, kota])
    .then(response => {
        const [barang, kota] = response; // mejadi dua array
        console.log(barang);
        console.log(kota);
    });