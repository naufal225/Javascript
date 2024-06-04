// Object
// secara garis besar, object adalah kumpulan nilai yang mempunyai nama

// membuat object

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