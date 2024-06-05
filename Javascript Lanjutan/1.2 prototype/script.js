function Siswa(nama,nis,energi) {
    this.nama = nama;
    this.nis = nis;
    this.energi = energi;
}

Siswa.prototype.makan = function(porsi) {
    this.energi += porsi;
    return Siswa;
}

Siswa.prototype.tidur = function(jam) {
    this.energi  += jam*0.5;
    return Siswa;
}

Siswa.prototype.main = function(jam) {
    this.energi -= jam;
    return Siswa;
}

var siswa2 = new Siswa("Budi", "232410000", 10);

