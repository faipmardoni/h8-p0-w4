function sorting(arrNumber) {
  return arrNumber.sort(function(a,b) { return b-a });
}

function getTotal(arrNumber) {
  let arr = [];
  if (arrNumber.length === 0) {
    return '\'\'';
  }
  for (let i = 0; i < arrNumber.length; i++) {
    let count = 1;
    if (arrNumber[i] !== arrNumber[i-1]) {
      for (let j = i+1; j < arrNumber.length; j++) {
        if (arrNumber[i] === arrNumber[j]) {
          count++;
        }
      }
      arr.push([arrNumber[i],count])
    }
  }
  return 'angka paling besar adalah '+arr[0][0]+' dan jumlah kemunculan sebanyak '+arr[0][1]+ ' kali';
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''

// Declare function sorting with parameter arrNumber then
//   return result of sorting arrNumber with function descending
// End function
// Declare function getTotal with parameter arrNumber then
//   if arrNumber.length is 0 then
//     return ""
//   end if
//   store arr with empty array value
//   for store i with 0 and i < arrNumber.length do
//     store count with 1
//     if arrNumber[i] is not equal arrNumber[i-1] then
//       for store j with i+1 and j < arrNumber.length do
//         if arrNumber[i] === arrNumber[j] then
//           add count by 1
//         end if
//         add i by 1 
//       end for
//       add arr by a array of arrNumber[i] and count
//     end if
//   end for
//   return "angka paling besar adalah", arrNumber[0][0], "dan jumlah kemunculan sebanyak",arr[0][1],"kali"
// End function
// Declare function mostFrequentLargestNumbers with parameter arrNumber then
//   store listSort with result of function sorting arrNumber
//   store countHighest with result of function getTotal listSort
//   return countHighest value
// End function