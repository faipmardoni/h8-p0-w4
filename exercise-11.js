function changeMe(arr) {
  // you can only write your code here!
  var age = 0;
  for (var i = 0; i < arr.length; i++) {
    if(arr[i][3] === undefined || arr[i][3] > 2016) {
      age = 'Invalid Birth Year';
      arr[i][3] = age;
    }else {
      age = 2018-arr[i][3];
      arr[i][3] = age;
    }
  }
  function buatObject(firstName, lastName, gender, age) {
    var star = {};
    star.firstName = firstName;
    star.lastName = lastName;
    star.gender = gender;
    star.age = age;
    return star;
  }

  if(arr.length !== 0) {
    for (var j = 0; j < arr.length; j++) {
      var fullname = (j+1) + '. ' + arr[j][0] + ' ' + arr[j][1] + ':';
      var star = buatObject(arr[j][0], arr[j][1], arr[j][2], arr[j][3])
      console.log(fullname)
      console.log(star) 
    }
  }else {
    console.log('\"\"')
  }
  // console.log(nama1)
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