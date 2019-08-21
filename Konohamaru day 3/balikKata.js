function balikKata(kata) {
  
  var kataBalik = '';
  
  for (var i = kata.length -1/*mengambil index huruf terakhir*/; i >= 0; i--/*untuk looping mundur dari angka terakhir*/){
    //penghitungan var kosong + index kata yang di hitung
        kataBalik += kata[i];
    
  }
  //menampilkan hasil yang sudah mundur
  return kataBalik;
  
}

// TEST CASES
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS