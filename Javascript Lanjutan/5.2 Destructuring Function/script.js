// Desctructuring Function

// return value

function kalkulasi(a,b) {
    return {
        tambah: a+b,
        kurang: a-b,
        kali: a*b,
        bagi: a/b,
    }
}

// const {tambah} = kalkulasi(2,4);
// const {kali} = kalkulasi(2,4);
// const {kurang} = kalkulasi(2,4);
// const {bagi} = kalkulasi(2,4);

const {tambah, kurang, kali, bagi} = kalkulasi(2,4);

console.log(tambah);
console.log(kurang);
console.log(kali);
console.log(bagi);

// argument

const siswa = {
    nama: 'Budi',
    umur: 18,
    kelas: 'XII RPL 1',
    nilai: {
        tugas: 90,
        uts: 80,
        uas: 70,
        akhir: function() {
            return (this.nilai.tugas + this.nilai.uts + this.nilai.uas) / 3;
        }
    }
}

function halo({nama, umur, kelas, nilai: {tugas, uts, uas, akhir}}) {
    return `Halo, nama saya ${nama}, umur saya ${umur} tahun, saya di kelas ${kelas}, nilai tugas saya ${tugas}`;
}

console.log(halo(siswa));