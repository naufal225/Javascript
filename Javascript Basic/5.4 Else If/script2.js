let noAngkot = 1, jmlAngkot = 10, angkotBeroperasi = 6;
for(noAngkot; noAngkot<=jmlAngkot; noAngkot++) {
  if(noAngkot<=angkotBeroperasi) {
    console.log("Angkot No. " + noAngkot + " beroperasi dengan baik");
  } else if(noAngkot == 8){
    console.log("Angkot No. " + noAngkot + " sedang lembur");
  } else {
    console.log("Angkot No. " + noAngkot + " sedang tidak beroperasi");
  }
}
