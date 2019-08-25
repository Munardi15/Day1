console.log('pasangan angka terbesar', '\n')
// sumpah bang ga ngerti caranya gelap pisan ini

function pasanganTerbesar(num) {
  // you can only write your code here!
  
  var newNumber = num.toString().split('');
  
  var newArr = [];
  
  for (var i =0; i < newNumber.length -1 ; i ++){
    
    var checkNumber = newNumber[i] + newNumber[i +1];
    
    newArr.push(checkNumber);
  }
  
  return newArr.sort(function(a, b){return b - a})[0];
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
