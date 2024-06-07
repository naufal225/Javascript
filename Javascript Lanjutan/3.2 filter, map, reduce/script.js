// Higher Order Function
// pada filter, map dan reduce

// Filter

const angka = [-1,-3,4,7,2,1,7,6,5,9,-7];

const angkaBaru = angka.filter(e => e >= 5);

console.log(angka);
console.log(angkaBaru);

// Map

const angkaBaru2 = angka.map(e => e * 2);

console.log(angkaBaru2);

// Reduce

var sum = angkaBaru2.reduce((accumulator, currentValue)=> accumulator + currentValue, 0);
console.log(sum);

// Method Chaining

var hasil = angkaBaru2.filter(e => e > 5).map(e => e*2).reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(hasil);