function ubahHuruf(kata) {
    // you can only write your code here!
    let word = '';
    for (let i in kata) {
        var hurufToNum = kata[i].charCodeAt();
        hurufToNum = String.fromCharCode(hurufToNum + 1)
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

//   PSEUDECODE

//   Declare function ubahHuruf with parameter kata then
//   store word = ''
//   for store i with 0 and i < kata.length do
//     store ubah with result of function kata[i].charCodeAt with paramter ()
//     set ubah = result of function String.fromCharCode with parameter ubah + 1
//     add word by ubah
//   add i by 1
//   end for
//   return word
// End function