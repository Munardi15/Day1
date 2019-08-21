function konversiMenit(menit) {
  var menit2 = menit % 60;
  var jam = (menit-menit2)/60;

  if (menit2 > 10) {
    return jam + ':'+ menit2;
  }
  else {
    return jam + ':' + '0' + menit2;
  }
  // you can only write your code here!
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00