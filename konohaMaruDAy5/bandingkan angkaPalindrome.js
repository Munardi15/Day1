console.log('bandingkan angkaPalindrome','\n')


function angkaPalindrome(num) {
  // you can only write your code here!
  
   var digits = num.toString();
   
   var digits1 = num.toString().lastIndexOf(num.toString());
    
   var palindrome = digits[0] + digits1[0];
   
   do{
     num ++;
     
     return num;
     
   } while (digits[0] === digits1[0])
    
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001