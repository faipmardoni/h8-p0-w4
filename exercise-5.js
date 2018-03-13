function ubahHuruf(kata) {
    // you can only write your code here!
    var word = '';
    for (var i=0; i<kata.length; i++) {
        var hurufToNum=kata[i].charCodeAt(0);
        hurufToNum=String.fromCharCode(hurufToNum+1)
        word+=hurufToNum;
    }
    return word
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu