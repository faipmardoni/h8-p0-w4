function makanTerusRekursif(waktu) {
  // you can only write your code here!
  if (waktu <= 0) return 0
  return 1 + makanTerusRekursif(waktu-15)
}

// TEST CASES
console.log(makanTerusRekursif(66)); // 5
console.log(makanTerusRekursif(100)); // 7
console.log(makanTerusRekursif(90)); // 6
console.log(makanTerusRekursif(10)); // 1
console.log(makanTerusRekursif(0)); // 0


















// PSEUDECODE

// Declare function makanTerusRekursif with parameter waktu then
//   if waktu <= 0 then return 0
//   end if
//   return 1 + result of function makanTerusRekursif with parameter waktu-15
// End function