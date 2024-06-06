// Higher Order Functions
// Adalah function yang beroperasi pada function yang lain
// baik sebagai argumen atau return value

// Javascript memoerlakukan function sebagai objek

// contoh

function salam(waktu){
    return (nama) => `Selamat ${waktu}, ${nama}`; // AI sebagai return
}

let selamatPagi = salam("Pagi");

console.log(selamatPagi("Budi")); // Selamat Pagi, Budi

// contoh lain
let a = 0;
setInterval(()=>{
    console.log(a++); // Function sebagai argumen atau callback 
}, 1000);

// contoh lain

function repeat(i=0,n,func) {
    for(let index=i; index <= n; index++) {
        func(index);
    }
}

repeat(1,10,(index) => {
    console.log(`Pengulangan Ke - ${index}`);
});