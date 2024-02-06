// this
// keyword yang didefiniskan saat setiap kali kita membuat function atau object

console.log(this); // akan merujuk pada object global window

var a = 10; // nilai a akan terkirim ke object global window

console.log(this.a); // merujuk ke this, window, cari nilai a

// menjalankan 'this' di setiap cara membuat object

// function declaration

function halo() {
    console.log(this);
    console.log("halo");
}

halo();

// this mengembalikan object global

// Object Literal

var obj = {
    nama : "Udin",
    umur : "15",
    tthis : function() {
        console.log(this);
    }
}

obj.tthis();

// Mengembaikan object yang bersangkutan

// consctructor

