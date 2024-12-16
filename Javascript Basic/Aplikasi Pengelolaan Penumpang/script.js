// Penumpang
var penumpang = [];

// Penumpang Naik
function tambahPenumpang(namaPenumpang, penumpang) {
    if(penumpang.length===0){
        penumpang.unshift(namaPenumpang);
        return penumpang;
    } else {
        for(let i = 0; i < penumpang.length; i++) {
            if(penumpang[i]==undefined) {
                penumpang[i] = namaPenumpang;
                return penumpang;
            } else if(penumpang[i]==namaPenumpang) {
                console.log("Penumpang sudah ada");
                return penumpang;
            } else {
                penumpang.push(namaPenumpang);
                return penumpang;
            }
        }
    }    
}

// Penumpang Turun
function hapusPenumpang(namaPenumpang, penumpang) {
    if(penumpang.length===0) {
        console.log("Angkot kosong");
    } else {
        for(let i = 0; i < penumpang.length; i++) {
            if(penumpang[i] == namaPenumpang) {
                penumpang[i] = undefined;
                return penumpang;
        }
    }
    console.log("Penumpang tidak ada di angkot");
    return penumpang;
    }
}