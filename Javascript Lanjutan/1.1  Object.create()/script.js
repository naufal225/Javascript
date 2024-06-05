// Object.create()

const methodSiswa = {
    makan: function(porsi) {
        this.energi += porsi*1.5;
    },
    main: function(jam) {
        this.energi -= jam;
    },
    tidur: function(jam) {
        this.energi += jam*2;
    }
}

// Menggunakan Function Decalration

function siswa(nama, nis, energi) {
    var siswa = Object.create(methodSiswa);
    siswa.nama = nama;
    siswa.nis = nis;
    siswa.energi = energi

    return siswa;
}

var siswa1 = siswa("Budi", "232410000", 10);


// Menggunakan Constructor
function Siswa(nama,nis,energi) {
    this.nama = nama;
    this.nis = nis;
    this.energi = energi;
}

var siswa2 = new Siswa("Budi", "232410000", 10);