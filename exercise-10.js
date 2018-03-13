function checkAB(num) {
    var arrA = [];
    for (var i = 0; i < num.length; i++) {
        if(num.charAt(i)==='a') {
            arrA.push(i)
        }
    }
    var arrB = [];
    for (var j = 0; j < num.length; j++) {
        if(num.charAt(j)==='b') {
            arrB.push(j)
        }
    }
    if(arrA.length===1&&arrB.length===1) {
        if(arrA[0]-arrB[0]===4||arrB[0]-arrA[0]===4) {
            return true;
        }
    }else {
        for (var k = 0; k < arrA.length; k++) {
            for (var l = 0; l < arrB.length; l++) {
                if(arrA[k]-arrB[l]===4||arrB[l]-arrA[k]===4) {
                    return true;
                }
            }
        }
    }
    return false;
}
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false