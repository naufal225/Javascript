// Operator

// - Operator Aritmatika
console.log(4+6)
console.log(7-4)
console.log(2*3)
console.log(6/3)
console.log(6%3)
console.log(10%2)
console.log(10%3)

// - Operator Penugasan

let x
x = 10 // menugaskan nilai 10 ke variabel x
console.log(x) // 10
x = 200 // menugaskan nilai 200 ke variabel x
console.log(x) // 200
x += 30 // x = x+30
console.log(x) // 230
x -= 15 // x = x-15
console.log(x) // 215
x *= 2 // x = x*2
console.log(x) // 430
x /= 2 // x = x/2
console.log(x) // 215
x %= 2 // x = x%2
console.log(x) // 1


// - Operator Perbandingan
// akan mengembalikan nilai Boolean
// true or false

console.log(5==5) //true
console.log(5=="5") //true
console.log(5==6) //false
console.log(5!=6) //true
console.log(5!="5") //false
console.log(5===5) //true
console.log(5==="5") //false
console.log(5!=="5") //true
console.log(5>3) //true
console.log(5>5) //false
console.log(5<5) //false
console.log(5<7) //true
console.log(5>=5) //true
console.log(5>=3) //true
console.log(5<=5) //true
console.log(5<=6) //true


// - Operator Logika
// mengembalikan nilai Boolean
// AND, OR, NOT
// &&   ||   !

console.log(true && true) //true
console.log(true && false) //false
console.log(true || true) //true
console.log(true || false) //false
console.log(false || false) //false
console.log(true != false) //true

// - Operator String
// dengan "+"
let a = "Soto"
let b = "Enak"

console.log(a + " " + b)
console.log("10"+"10") //1010
console.log("10"+10) //1010
console.log("10"+10+10) //101010
console.log(10+10+"10") //2010

// - Operator Kondisional
// (10 % 2 == 0) ? "Genap" : "Ganjil"

// - Operator typeOf
// untuk mengetahui tipe data dari sebuah nilai

console.log(typeof("cihuy"))//String
console.log(typeof(300)) //Number
console.log(typeof(true)) //Boolean
