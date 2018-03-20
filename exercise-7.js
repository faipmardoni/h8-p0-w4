function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  let temp;
  let arr = []
  let min = 999;
  if (angka === 1) return 2
  for (let i = 0; i < angka; i++) {
      if (angka % i === 0) {
        let index = i.toString().split('');
        temp = (angka/i).toString().split('');
        for (let j = 0; j < index.length; j++) {
            temp.push(index[j]);
        }
      }else continue;
      arr.push(temp)
    }
    for (let i in arr) {
        if (min > arr[i].length) {
            min = arr[i].length;
        }
    }
  return min;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(2)); // 2

// PSEUDECODE

// Declare function digitPerkalianMinimum with parameter angka then
//  store arr with empty array
//  store min with 999;
//  store temp with any value;
//  if angka = 1 then return 2 end if
//  for store i with 0 and i < angka do
//   if angka % i = 0 then
//     store index with result of i.toString().split('')
//     set b with (angka/i).toString().split('')
//     for store j with 0 and j < a.length do
//         add b by a[j]
//     end for
//     else then continue
//   end if
//   add arr with b
//  end for
//  for store i in arr do
//     if min > arr[i].length then
//         set min = arr[i].length
//     end if
//  end for
//  return min
// End function