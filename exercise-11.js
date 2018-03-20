function changeMe(arr) {
  if (arr.length === 0) return "";
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][3] >= 2018 || arr[i][3] === undefined) {
      arr[i][3] = "Invalid Birth Year";
    }else {
      arr[i][3] = 2018 - arr[i][3];
    }
    console.log((i+1)+'.',arr[i][0],arr[i][1]+':');
    obj.firstName = arr[i][0];
    obj.lastName = arr[i][1];
    obj.gender = arr[i][2];
    obj.age = arr[i][3];
    console.log(obj);
  }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""


// Declare function changeMe with parameter arr then
//   if arr.length === 0 then return "" end if
//   store obj with empty object
//   for store i with 0 and i < arr.length do
//     if arr[i][3] is undefined OR arr[i][3] >= 2018 then
//       set arr[i][3] = Invalid Birth Year
//     else then
//       set arr[i][3] = 2018-arr[i][3]
//     end if
//     display (i+1)+'.'+' '+arr[i][0]+arr[i][3]+':'
//     obj.firstName = arr[i][0]
//     obj.lastName = arr[i][2]
//     obj.gender = arr[i][2]
//     obj.age = arr[i][3]
//     display obj
//     add i by 1
//   end for
// End function