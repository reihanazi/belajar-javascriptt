var siswa = new Object();
siswa.namaDepan ="Reihan "
siswa.namaBelakang ="Azi Firdaus"
siswa.namaLengkap = function(){
    return this.namaDepan + "" +this.namaBelakang;
};
alert("nama: " + siswa.namaLengkap());

