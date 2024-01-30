var x = prompt("masukan nilai anda :");
// alert("selamat datang " + nama);
if(x < 40 ) {
    alert ("nilai" +x + " maka grade e");
}else if(x <65) {
    alert ("nilai" +x + " maka grade d");
}else if(x <75) {
    alert ("nilai" + x + " maka grade c");
}else if(x <85) {
    alert ("nilai" +x + " maka grade b");
}else if(x <= 100) {
    alert ("nilai" +x + " maka grade a");
}else{
    alert("data bukan angka");
}