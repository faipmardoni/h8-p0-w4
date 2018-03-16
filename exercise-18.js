function kaliTerusRekursif(angka) {
  let arr = angka.toString().split('');
  let hasil = 1;
  if (arr.length===1) return arr[0];
  for (let i in arr) {
    hasil *= arr[i];
  }
  return kaliTerusRekursif(hasil)
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6














// PSEUDECODE
// 
// Declare function kaliTerusRekursif with parameter angka then
//   store arr with result of function angka.toString() and function split with parameter ('')
//   store hasil with 1
//   if arr.length is 1 then return result of function Number with parameter arr[0]
//   for store i in arr do
//     set hasil with result*arr[i]
//   end for
//   return result of function Number with parameter hasil
// End function