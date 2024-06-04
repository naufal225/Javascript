// Object
// secara garis besar, object adalah kumpulan nilai yang mempunyai nama

// membuat object secara literal

var siswa1 = {
    nama: "Naufal Ma'ruf Ashrori",
    nis: "232410104",
    nilai: [90,80,99,100,76],
    rata: function() {
        var sum = 0, total = 0;
        this.nilai.forEach(function(e){
            sum += e;
            total++;
        });
        return sum/total
    }
}

// membuat object dengan function declaration

function buatSiswa(nama,nis,nilai) {
    var siswa = {
        nama: nama,
        nis: nis,
        nilai: nilai,
        rata: function() {
            var sum = 0, total = 0;
            this.nilai.forEach(function(e){
                sum += e;
                total++;
            });
            return sum/total
        }
    }
    return siswa;
}

var siswa2 = buatSiswa("Budi", "232410102", [80,90,100,60,70]);


// membuat object menggunakan constructor

function Siswa(nama,nis,nilai) {
    this.nama = nama;
    this.nis = nis;
    this.nilai = nilai;
    this.rata = function() {
        var sum = 0, total = 0;
            this.nilai.forEach(function(e){
                sum += e;
                total++;
            });
            return sum/total
    }
}

var siswa3 = new Siswa("Eko", "232410100", [80,90,100,50,90]); //harus dengan keyword new
