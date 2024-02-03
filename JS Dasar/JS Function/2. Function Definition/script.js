// Cara mendefinisikan function

// Function Declaration
// contoh: 

function tambah(a,b) {
    return a+b;
}

// tidak akandi eksekusi sampai kita panggil

tambah(2,3);

// Function Expression / Variable Expression
// menyimpan function dalam variabel
// contoh:

let fungsi = function(x) {return x+2;};

// Anonymous Self Invoked Function
// Function anonimus yang bisa memnaggil sendiri

(function(){
    console.log("Hello World");
})();

// diatas adalah membuat anonimus function yang bisa memanggil dirinya sendiri

// Tipe data function adalah object

console.log(typeof(tambah))