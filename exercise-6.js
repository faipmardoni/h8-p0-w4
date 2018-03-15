function cekDupicated(str) {
    var obj = {};
    for (let i of str) {
        if (obj[i] === undefined) {
            obj[i] = 1;
        }else {
            obj[i] += 1;
        }
    }
    var counter = 0;
    for (let i in obj) {
        if (obj[i] > 1) {
            counter++;
        }
    }
    return counter;
}
function hitungHuruf(kata) {
    // you can only write your code here!
    var arr = kata.split(' ');
    var max = 0;
    var result;
    for (let i = 0; i < arr.length; i++) {
        if (cekDupicated(arr[i]) > max) {
            max = cekDupicated(arr[i]);
            result = arr[i];
        }
    }
    return result;
  }
  
  // TEST CASES
  console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
  console.log(hitungHuruf('I am a passionate developer')); // passionate
  console.log(hitungHuruf('aku adalah anak gembala')); // adalah
  console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
  console.log(hitungHuruf('mengayuh perahu di danau')); // danau

  // PSEUDECODE
// Declare function cekDupicated with paramater str then
//   store obj with empty object value
//   for let i of str do
//     if obj[i] is undefined then
//       add obj[i] with key i and value 1
//     else then
//       add obj[i] by 1
//     end if
//   end for
//   store counter with 0
//   for let i in obj do
//     if obj[i]>1 then
//       add counter by 1
//     end if
//   end for 
//   return counter value
// End function
// Declare function hitungHuruf with paramter kata then
//   store arr with result of split kata with paramater space
//   store max with 0;
//   store result with any value
//   for let i with arr.length-1 and i >= 0 do
//     if cekDupicated(arr[i]) > max then
//       set max with cekDupicated(arr[i]) value
//       set result with arr[i] value
//     end if
//     less i by 1
//   end for
//   return result
// End function