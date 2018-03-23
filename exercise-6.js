function hitungHuruf(kata) {
    let arr = kata.split(' ');
    let duplicate = [];
    let max = 0;
    let mod = 0;
    for (let i in arr) {
        var counter = 0;
        for (let j in arr[i]) {
            for (let k = Number(j)+1; k < arr[i].length; k++) {
                if (arr[i][j] === arr[i][k]) {
                    counter++;
                    break;
                }
            }
        }
        duplicate.push(counter);
        if (duplicate[i] > max) {
            max = duplicate[i];
            mod = i;
        }
    }
    return arr[mod];
}
  
// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau

  // PSEUDECODE

// Declare function hitungHuruf with parameter kata then
//   store arr with result of function kata.split with parameter ' '
//   store duplicate with emptry array
//   store max with 0
//   store mod with 0
//   for store i in arr do
//     store counter with 0
//     for store j with 0 and j < arr[i].length do
//       for store k with j+1 and k < arr[i].length do
//         if arr[i][j] = arr[i][k] then
//           add counter by 1
//           break
//         end if
//         add k by 1
//       end for
//       add i j by 1
//     end for
//     add duplicate by counter
//     if duplicate[i] > max then
//       set max = duplicate[i]
//       set mod = i
//     end if
//   end for
//   return arr[mod]
// End function