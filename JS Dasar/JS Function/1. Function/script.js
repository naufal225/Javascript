// Function

function tambah(a,b) {
    return a+b; 
}

// untuk memanggilnya tulis nama function dan ()

tambah(2,4);

// jika function meiliki parameter, maka nilai argumen harus dimasukan

// jika tidak menggunakan () maka akan return block code function nya

var a = tambah; // a menyimpan code function tambah

console.log(a);

// variabel didalam function bersifat lokal

function h() {
    var a; // hanya bisa di gunakan di dalam function
}