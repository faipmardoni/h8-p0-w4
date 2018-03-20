function cariModus(arr) {
    let max = 0;
    let modus = 0;
    for (let i = 0; i < arr.length; i++) {
        let counter = 1;
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                counter++;
            }
        }
        if (max < counter) {
            max = counter;
            modus = i
        }
    }
    if (max === 1 || max === arr.length) return -1
    return arr[modus];
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1


// PSEUDECODE

// Declare function cariModus with parameter arr then
//   store max with 0
//   store modus with 0
//   for store i with 0 and i < arr.length do
//     store counter with 1
//     for store j with i+1 and j < arr.length do
//       if arr[i] is equal to arr[j] then
//         add counter by 1
//       end if
//       add j by 1
//     end for
//     if max < counter then
//       set max by counter
//       set modus by i
//     end if
//   end for
//   if max === 1 or max === arr.lenght then return 1
//   end if
//   return arr[modus]
// End function