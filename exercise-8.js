function urutkanAbjad(str) {
    let arr = str.split('')
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr.join('')
}
  
// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'

// PSEUDECODE

// Declare function urutkanAbjad with parameter str then
//   store arr with result of str.split('')
//   for store i with 0 and i < arr.length do
//     for store j with i+1 and j < arr.length do
//         if str[i] > str[i+1] then
//             store temp with str[i]
//             set str[i] = str[j]
//             set str[j] = temp;
//         end if
//         add j by 1
//     end for
//     add i by 1
//   end for
//   return result of arr.join('')
// End function