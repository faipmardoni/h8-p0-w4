function fpb(angka1, angka2) {
    // you can only write your code here!
    let result = 0;
    for (let i = 0; i < angka1; i++) {
        if (angka1%i === 0 && angka2%i === 0) {
            result = i;
        }
    }
    return result;
}
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1




// PSEUDECODE

// Declare function fpb with parameter angka1 and angka2 then
//   store result = 0
//   for store i with 0 and i < angka1 do
//     if angka1%i === 0 and angka2%i === 0 then
//       set result = i
//     end if
//   end for
//   return result
// End function