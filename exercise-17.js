function totalDigitRekursif(angka) {
  // you can only write your code here!
  let arr = angka.toString().split('');
  let temp = Number(arr[0]);
  if (arr.length === 0) return 0
  arr.shift();
  return temp + Number(totalDigitRekursif(arr.join('')))
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5















// PSEUDECODE

// Declare function totalDigitRekursif with parameter angka then
//   store arr with result of function angka.split with parameter '' and result of function angka.toString
//   store temp with result of function Number with parameter arr[0];
//   if waktu.length is 0 then return 0
//   end if
//   delete first data from arr
//   return temp + result of function Number with paramater result of totalDigitRekursif with parameter result of function arr.join with paramter ''
// End function

