// Function Parameter

function a(b,c) {
    console.log("b : " + b);
    console.log("c : " + c);
    console.log("b dan c adalah parameter");
    console.log("Nilai " + b + " dan " + c + " yang dimasukan kedalamnya adalah argumen");
}

a(3,4);

// jika nilai parameter tidak dimasukan, akan otomatis terisi undefined

a();

// namun kita bisa atur defaultnya

function a(b=2,c=3) {
    console.log("b : " + b);
    console.log("c : " + c);
    console.log("b dan c adalah parameter");
    console.log("Nilai " + b + " dan " + c + " yang dimasukan kedalamnya adalah argumen");
} // default nya nilai b adalah 2 dan c adalah 3