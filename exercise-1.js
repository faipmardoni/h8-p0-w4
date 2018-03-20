function angkaPrima(angka) {
    // you can only write your code here!
    if (angka === 2) return true;
    if (angka%2 === 0) {
        return false
    }else {
        for (let i = 3; i < angka; i++) {
            if (angka%i === 0) {
                return false
            }
        }
        return true;
    }
  }

  // TEST CASES
  console.log(angkaPrima(3)); // true
  console.log(angkaPrima(7)); // true
  console.log(angkaPrima(6)); // false
  console.log(angkaPrima(23)); // true
  console.log(angkaPrima(33)); // false


//   PSEUDECODE

//   Declare function angkaPrima with parameter angka then
//   if angka === 2 then return true end if
//   if angka%2 === 0 then return true
//   for store i with 3 and i < angka do
//     if angka%i === 0 then
//       return false
//     end if
//   add i by 1
//   end for
//   return true
// End function