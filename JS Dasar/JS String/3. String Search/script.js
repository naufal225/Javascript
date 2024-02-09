// Method

// indexOf(x)
// mencari posisi string atau karakter x pertama dari string dan return -1 jika tidak ditemukan
// mencari dari depan

let str1 = "pertama";
let str2 = "ini Budi dan ini Budi";

let strc = str1.indexOf("a"); // mencari posisi pertama "a" di kata "pertama", return 4
console.log(strc);

console.log(str2.indexOf("Budi")); // return 4

strc = str1.indexOf("b"); // return -1 karena tidak nemu
console.log(strc);

// lastIndexOf(x)
// mencari posisi string atau karakter x terakhir dari string dan return -1 jika tidak ditemukan
// mencari dari belakang

strc = str1.lastIndexOf("a"); // return 6
console.log(strc);

console.log(str2.lastIndexOf("Budi")); // return 17
