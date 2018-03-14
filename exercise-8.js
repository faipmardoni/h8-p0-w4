function urutkanAbjad(str) {
    // you can only write your code here!
    var arrB = [];
    for (var i = 0; i < str.length; i++) {
        var hurufToNum = str[i].charCodeAt(0)+95;
        arrB.push(hurufToNum);
    } 
    arrB.sort();
    var arrC = ''
    for (var j = 0; j < arrB.length; j++) {
        var numToHuruf = String.fromCharCode(arrB[j]-95);
        arrC+=numToHuruf;
    }
    return arrC;
  }
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'