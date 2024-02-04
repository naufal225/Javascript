// String Methods

// .length

let str1 ="Ini adalah sebuah string";
console.log(str1.length);

// .charAt(index)
// me-return karakter string di index

console.log(str1.charAt(0));

// bisa juga dengan

console.log(str1[1]);

// meskipun begitu string tidak sama dengan array

// Mengekstrak bagian bagian string
// slice(start, end+1)
// substring(start, end+1)
// substr(start,length)

let str2 = "Ini adalah string juga ya";

// slice()

console.log(str2.slice(4,10));

// jika parameter kedua diabagikan maka akan return sampai akhir string

console.log(str2.slice(3));

// bisa negatif parameter

console.log(str2.slice(-2));
console.log(str2.slice(9))

// substring()
// seperti slice, hanya saja jika parameternya negatif maka akan dianggap 0

console.log(str2.substring(-3,4));

// substr()
// seperti slice, hanya saja parameter keduanya merepresentasikan panjang dari string yang akan diekstral

console.log(str2.substr(4,6));

// convert ke uppercase dan lowercase
// .toUpperCase()
// .toLowerCase()

console.log(str2.toUpperCase());
console.log(str2.toLowerCase());

// .concat()
// untuk konkatenasi dua atau lebih string

let text1 = "Halo";
let text2 = "ini";
let text3 = "saya";
let text4 = text1.concat(" ", text2, " ", text3);
console.log(text4);

// sama saja dengan
// text4 = text1 + " " + text2 + " " text3

// .trim()
// meremove whitespace di kanan dan kiri string

let str3 = "      Helo      ";
console.log(str3.trim());

// .trimStart() 

console.log(str3.trimStart());

// .trimEnd()

console.log(str3.trimEnd());

// .repeat()
// mengcopy string ke string baru dengan jumlah sesuai parameter

console.log(str1.repeat(3));

// .replace(a,b)
// mereplace a dengan b

let str4 = "Saya adalah saya";
console.log(str4.replace("saya","kamu"));

// .replace() tidak mengubah string lama, melainkan membuat string baru
// dan hanya mengganti string yang pertama kali ditemukan
// dan .replace itu case sensitive

// cara dibawah ini tidak akan bekerja

let text = "ini saya dan saya adalah saya";
// console.log(text.replace("SAYA","Anda"))

// untuk mengatasinya dapat menggunakan / STRinG /i untuk menjadikannya insensitive

console.log(text.replace(/SaYA/i,"Anda")); // menjadi insensitive

// untuk mengganti semua kata "saya" pada variabel text, kita bisa menggunakan /g flag (global match)

console.log(text.replace(/saya/g,"Anda"));

// bisa juga dengan .replaceAll(a,b), tidak perlu lagi pakai /g flag

console.log(text.replaceAll("saya", "Anda"));

// jika pakai replaceAll maka /i dan /g tidak lagi dapat dipakai
// .replaceAll() tidak bisa dipakai di Internet Explorer




// Convert String Ke Array

// .split(separator)

let texta = "ini adalah array dari string";
let array1 = texta.split(" ");
console.log(array1);

// jika tidak ada separator ('') maka akan mengubah setiap karakter jadi elemen array

let array2 = texta.split("");
console.log(array2);
