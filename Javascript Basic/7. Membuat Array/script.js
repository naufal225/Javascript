// Membuat Array
var array1 = ["satu", "dua", "tiga"];

// Akses isi array
for(let i = 0; i < array1.length; i++) {
    console.log(array1[i]);
}

// Manipulasi Array

// 1. Menambah isi
array1[3] = "empat";
console.log(array1[3]);

// 2. Menghapus isi array
// dengan mengganti nilai menjadi undefined

array1[1] = undefined
console.log(array1[1]);




// Method pada array

// 1. join()
// agar array bisa tampil di konsol

// console.log(array1) // tidak bisa

//harus 

console.log(array1.join()); // memisahkan tiap isi dengan koma
console.log(array1.join(" - ")); // dengan strip

// jika isi undefined maka tidak akan tampil

// 2. push()
// untuk menambahkan elemen baru dari belakang

array1.push("lima");
array1.push("enam", "tujuh")
console.log("");
for(let i = 0; i < array1.length; i++) {
    console.log(array1[i]);
}

// 3. pop()
// untuk menghaous isi array dari belakang

array1.pop();
array1.pop();
console.log("");
for(let i = 0; i < array1.length; i++) {
    console.log(array1[i]);
}

// 4. unshift()
// untuk menambahkan elemen baru dari depan

array1.unshift("min satu","nol");
array1.unshift("nol koma lima");
console.log("");
for(let i = 0; i < array1.length; i++) {
    console.log(array1[i]);
}

// 5. shift() 
// untuk menghapus elemen dari depan

array1.shift();
array1.shift();
console.log("");
for(let i = 0; i < array1.length; i++) {
    console.log(array1[i]);
}

// 6. splice()
// array.splice(indexAwal, mauDihapusBerapa, elemen1, elemen2, ...)

var arrayBuah = ['mangga', 'apel', 'pisang', 'kiwi', 'jeruk', 'lemon'];
console.log(arrayBuah.join("-"));

arrayBuah.splice(1, 1, "semangka"); // pada index 1, hapus 1 item, tambahkan semangka di posisi tersebut
console.log(arrayBuah.join("-"));

arrayBuah.splice(1,2);
console.log(arrayBuah.join("-")); // pada index 1, hapus 2 item, tidak menambahkan apa apa

arrayBuah.splice(1,2,"semangka", "apel", "nanas", "pepaya", "manggis"); // pada index 1, hapus 2 item, tambahkan semangka apel nanas di posisi tersebut
console.log(arrayBuah.join("-"));

// mangga, semangka, apel, nanas, pepaya, manggis, lemon

// 7. slice()
// untuk mereturn array yang dipilih dalam jarak tertentu untuk dimasukan ke array baru
// array.splice(x,y)
// dpilih dari index x sampai y-1

var arrayLain = arrayBuah.splice(1,4); // memilih semangka, apel, nanas, pepaya, dan menghapusnya dari array sebelum nya
console.log(arrayLain.join("-"));

// 8. foreach()

var angka = [1,2,20,15,3,4,5,6,7,8,9];
angka.forEach(
    function(e) {
        console.log(e);
    }
);

// meskipun begitu, forEach() tidak bisa digunakan untuk return value
// untuk return value, kita pakai map()

// 9. map()

var angka2 = angka.map(
    function(e) {
        if(e % 2 == 1) {
            return e;
        }
    }
);
console.log(angka2.join("-"));

// 10. sort()

var angka3 = [3,5,20,10,2,5,7,1,0,8];
console.log(angka3.join());

console.log("");

angka3.sort(function(a,b){
    return a-b;
});

console.log(angka3.join());

// 11. filter()

var numbers = [];
for(let i = 1; i <= 20; i++) {
    numbers.push(i);
} // mengisi array numbers dari angka 1 sampai 20

console.log(numbers.join("-"));

var numbers2 = numbers.filter(function(e){
    return e %2 == 0;
}); // mengisi array numbers 2 dengan angka genap

console.log("numbers = " + numbers.join());
console.log("numbers2 = " + numbers2.join());

// 12. find()
// menemukan angka pertama yang sesuai kriteria

var number = numbers2.find(
    (e) => e>8 // mereturn angka yang lebih besar dari 8 pada array numbers2, output 10
);

console.log(number)