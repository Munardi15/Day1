console.log('polindrome yang bernilai true', '\n')


function palindrome(kata) {
  
  var tampungKataTerbalik = '';
  
  for (var i = kata.length -1; i >= 0; i--){
    
    tampungKataTerbalik += kata[i];
    
  }
  
  if ((tampungKataTerbalik) === kata){
    return true;
  } else{
    return false;
  }
  
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false




