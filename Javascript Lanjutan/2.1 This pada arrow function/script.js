// Konsep This Pada Arrow Fucntion

// Constuctor 

// dengan function biasa 

// const Orang = function(nama, umur) {
//     this.nama = nama; // this ini mengarah pada objek ini
//     this.umur = umur;
//     this.sayHello = function() {
//         console.log(`Hello, my name is ${this.nama}, and i am ${this.umur}`);
//     }
// }

// var orang1 = new Orang("Budi", 17);
// orang1.sayHello();


// dengan arrow function
// kita tidak bisa membuat constructor function

// var icikiwir= "icikiweieer";

// const Orang = function(nama, umur) {
//     this.nama = nama; // this ini mengarah pada objek ini
//     this.umur = umur;
//     this.sayHello = () => {
//         console.log(`Hello, my name is ${nama}, and i am ${this.umur}, ${icikiwir}`); // tidak mengenal konsep this
//     }
// }

// var orang2 = new Orang("Joko", 16);
// orang2.sayHello();


// Object Literal
// pada object literal, this pada arrow function akan merujuk pada objek window
// arrow function tidak mengenal konsep this

const orang3 = {
    nama: "Asep",
    umur: 16,
    sayHello: () => {
        // console.log(`Hi, My name is ${this.nama}, and i am ${this.umur}`); // Menjadi Undefined karena tidak ada nama dan umur di window, function merujuk window bukan objek
        console.log(this); // window
    }
}

orang3.sayHello();


// Kembali ke constructor

const Orang = function(nama, umur) {
    this.nama = nama; // this ini mengarah pada objek ini
    this.umur = umur;
    this.sayHello = function() {
        console.log(`Hello, my name is ${this.nama}, and i am ${this.umur}`);
    }

    // setInterval(function(){
    //     console.log(this.umur++); // Nan, karena method setinterval merujuk pada objek window (window.setInterval), sehingga this nya menuju window, sementara di window tak ada this.umur
    // }, 500); // cara mengatasi nya adalah menggunakan arrow function

    setInterval(()=>{
        console.log(this.umur++);
    }, 1000);

}

var orang1 = new Orang("Budi", 17);
orang1.sayHello();