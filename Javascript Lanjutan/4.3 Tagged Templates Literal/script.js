// const nama = "Budi";
// let umur = 17;

// function coba(string, ...values) {
//     // let result = ``;
//     // string.forEach((str, i) => {
//     //     result += `${str}${values[i] || ''}`;
//     // });
//     // return result;

//     return string.reduce((result,str,i) => `${result}${str}${values[i] || ''}`,'');
// }

// let str = coba`Nama saya ${nama}, umur saya ${umur} tahun`;

// console.log(str);



// Highlight

const nama = "Naufal";
let umur = 16;
const email = "naufal@gmail.com";

function highlight(string, ...values) {
    return string.reduce((result,str,i) => `${result}${str}<span class="hl">${values[i] || ''}</span>`, '');
}

let str = highlight`Nama Saya ${nama}, umur saya ${umur} tahun, dan email saya adalah ${email}`;

document.body.innerHTML += str;