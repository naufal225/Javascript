function Angkot(sopir, trayek, penumpang, kas) {
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    this.penumpangNaik = function(namaPenumpang) {
        if(this.penumpang.length === 0) {
            this.penumpang.push(namaPenumpang);
            return this.penumpang;
        }
        for(let i = 0;i < this.penumpang.length; i++) {
            if(this.penumpang[i] == namaPenumpang) {
                console.log("Penumpang sudah naik");
                return this.penumpang;
            } else if(this.penumpang[i] === undefined) {
                this.penumpang[i] = namaPenumpang;
                return this.penumpang;
            }
        }
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    }

    this.penumpangTurun = function(namaPenumpang, bayar) {
        if(this.penumpang.length === 0) {
            console.log("Angkot masih kosong");
            return this.penumpang;
        }
        for(let i = 0; i < this.penumpang.length; i++) {
            if(this.penumpang[i] == namaPenumpang) {
                this.penumpang[i] = undefined;
                this.kas += bayar;
                return this.penumpang;
            }
        }
        console.log("Penumpang tidak ada");
        return this.penumpang;
    }
}

var angkot1 = new Angkot("Joko", "Tambun-Cibitung", [], 0);