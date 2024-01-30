var siswa = new Object();
siswa.namaDepan ="Reihan "
siswa.namaBelakang ="Azi Firdaus"
siswa.namaLengkap = function(){
    return this.namaDepan + "" +this.namaBelakang;
};

//object json
var siswa2 = {
    namaDepan: "raid ",
    namaBelakang: "sadad",
    namaLengkap: function(){
        return this.namaDepan + "" + this.namaBelakang;
    },
};


alert("nama: " + siswa.namaLengkap());
alert("nama: " + siswa2.namaLengkap());

