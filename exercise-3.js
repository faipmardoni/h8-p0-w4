function cariMedian(arr) {
    // you can only write your code here!
    var median = 0;
    if ((arr.length) % 2 == 1) {
        median = arr[(arr.length - 1) / 2];
    }else {
        var mid = arr.length / 2;
        median = (arr[mid - 1] + arr[mid]) / 2;
    }
    
    return median;
  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5


//   PSEUDECODE

//   Declare function cariMedian with parameter arr then
//   store median = 0;
//   if arr.length%2 is not equal 0 then
//     set median = arr[(arr.length-1)/2]
//   else then
//     store mid = arr.length/2
//     set median = (arr[mid-1] + arr[mid]) / 2
//   end if
//   return median
// End function