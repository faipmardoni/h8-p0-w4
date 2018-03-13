function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    function numbToArray (num) {
        var str = num.toString();
        var arr = str.split('');
        return arr;
    }
    var arrAngka = [];
    for (var i=1; i<=angka; i++) {
        // console.log(i)
        var arrNum = []
        if(angka%i===0) {
            var hasilBagi = angka/i;
            var arrHasil = numbToArray(hasilBagi)
            var arrBagi = numbToArray(i)
            for(var j=0; j<arrBagi.length; j++) {
                arrHasil.push(arrBagi[j])
            }
        }else {
            continue;
        }
        arrAngka.push(arrHasil)
    }
    var arrDigit = []
    for(var k=0; k<arrAngka.length; k++) {
        arrDigit.push(arrAngka[k].length);
    }
    arrDigit.sort();
    
    return arrDigit[0];
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2