function buatObject(firstName, lastName, gender, age) {
  var star = {};
  star.firstName = firstName;
  star.lastName = lastName;
  star.gender = gender;
  star.age = age;
  return star;
}
function changeMe(arr) {
  var tahunNow = 2018;
  if (arr.length===0) {
    console.log('\"\"');
  }else {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i][3] === undefined || arr[i][3] > tahunNow) {
          arr[i][3] = 'Invalid Birth Year';
      }else {
        arr[i][3] = tahunNow - arr[i][3];
      }
      var star = buatObject(arr[i][0], arr[i][1], arr[i][2], arr[i][3])
      console.log((i+1) + '. ' + arr[i][0] + ' ' + arr[i][1] + ':');
      console.log(star);
    }
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


// PSEUDECODE
// Declare function buatObject with parameter fistName, lastName, gender, and age
//   store star with empty object value
//   add to star key and value firstName
//   add to star key and value lastName
//   add to star key and value gender
//   add to star key and value age
//   return star value
// End function
// Declare function changeMe with parameter arr
//   store tahunNow with 2018
//   if arr.length = 0 then
//     display ""
//   else then
//     for store i with 0 and i < arr.length do
//       if arr[i][3] > tahunNow and is undefined then
//         set arr[i][3] with value "invalid Birth Year"
//       else then
//         set arr[i][3] with result of tahunNow - arr[i][3]
//       end if
//       store star with value result buatObject with value arr[i][0],arr[i][1],arr[i][2],arr[i][3]
//       display '(i+1)+. +arr[i][0]+ +arr[i][1]+ :' value
//       display star
//     end for
//   end if
// End function