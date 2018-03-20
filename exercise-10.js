function checkAB(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a' && str[i+4] === 'b') return true
        if (str[i] === 'b' && str[i+4] === 'a') return true
    }
    return false;
}
  
// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false

// PSEUDECODE

// Declare function checkAB with parameter str then
//   for store i with 0 and i < str.length do
//     if str[i] === 'a' and str[i+4] === 'b' then
//       return true
//     else if str[i] === 'b' and str[i+4] === a then
//       return true      
//     end if
//     add i by 1
//   end for
//   return false
// End function