function hitungHuruf(kata) {
    // you can only write your code here!
    var arrKata = kata.split(' ');
    var patokan=0;
    var word = '';
    for (var i=0; i<arrKata.length; i++) {
        word=arrKata[i];
        var count=0;
        // console.log(i,arrKata)
        for (var j=0; j<arrKata[i].length; j++) {
            var arrSama = word[j];
            // console.log(arrSama)
            for(var k=j; k<word.length; k++) {
                if(arrSama===word[k] && k!==j) {
                    // console.log(arrSama,j,k,count);
                    count++
                }
            }
        }
        // console.log(count)
        if(count>patokan){
            patokan=count;
            arrKata=word;
            // console.log(arrKata,count)
        }
    } 
    if(patokan>0) {
        return arrKata;
    }else {
        return -1
    }
  }
  
  // TEST CASES
  console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
  console.log(hitungHuruf('I am a passionate developer')); // passionate
  console.log(hitungHuruf('aku adalah anak gembala')); // adalah
  console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
  console.log(hitungHuruf('mengayuh perahu di danau')); // danau