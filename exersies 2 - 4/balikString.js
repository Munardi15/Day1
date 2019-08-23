// balikString

function balikString(kata){
  var j = '';
  for (var i = kata.length -1; i>=0; i--){
    j += kata[i];
  }
  return j;
}

console.log(balikString('hello world!'));