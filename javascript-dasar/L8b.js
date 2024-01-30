// Daftar menu makanan beserta harganya
const menu = {
    nasiGoreng: 10000,
    mieayam: 8000,
    buburAyam: 10000,
   
  };
  
  // Menggunakan prompt untuk meminta pengguna memilih menu
  let pesanan = prompt("Menu makanan yang tersedia:\n1. Nasi Goreng\n2. Mie ayam\n3.Bubur ayam\n \nSilahkan Pilih Makanan:");
  
  // Menggunakan pengkondisian untuk menentukan harga berdasarkan pilihan pengguna
  let harga = 0;
  if (pesanan === "1") {
    harga = menu.nasiGoreng;
  } else if (pesanan === "nasi goreng") {
    harga = menu.mieAyam;
  } else if (pesanan === "mie ayam") {
    harga = menu.buburAyam;
  } else if (pesanan === "bubur ayam") {
    harga = menu.sotoAyam;
  } else if (pesanan === "soto ayam") {
    harga = menu.bakso;
  } else {
    alert("Nomor menu tidak valid.");
    // Keluar dari program jika nomor menu tidak valid
    throw new Error("Terminating program.");
  }
  
  // Menggunakan prompt untuk meminta pengguna memasukkan jumlah makanan yang diinginkan
  let jumlah = prompt("Masukkan jumlah makanan yang diinginkan:");
  
  // Menghitung total biaya
  let totalBiaya = harga * jumlah;
  
  // Menampilkan hasil kepada pengguna
  alert("Detail Pesanan:\nMenu: " + pesanan +" nasi goreng" + "\nJumlah: " + jumlah + "\nTotal Biaya: Rp " + totalBiaya);
  alert("terima kasih");