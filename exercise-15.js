function changeVocals (str) {
  let paswd = '';
  for (let i in str) {
    if (str[i] == 'a' || str[i] == 'e' || str[i] === 'i' || str[i] == 'u' || str[i] === 'o' || str[i] == 'A' || str[i] == 'E' || str[i] === 'I' || str[i] == 'U' || str[i] === 'O') {
      paswd += String.fromCharCode((str[i].charCodeAt(0)+95)-94);
    }else {
      paswd += str[i];
    }
  }
  return paswd
}

function reverseWord (str) {
  let passwd = '';
  for (let i = str.length-1; i >= 0; i--) {
    passwd += str[i];
  }
  return passwd;
}

function setLowerUpperCase (str) {
  let passwd = '';
  for (let i in str) {
    if(str[i] === str[i].toLowerCase()) {
      passwd += str[i].toUpperCase();
    }else {
      passwd += str[i].toLowerCase();
    }
  }
  return passwd;
}

function removeSpaces (str) {
  if(str.length < 5) return 'Minimal karakter yang diinputkan adalah 5 karakter'
  let passwd = str.replace(' ','');
  return passwd;
}

function passwordGenerator (name) {
  let vocals = changeVocals(name);
  let reverse = reverseWord(vocals);
  let lowerUpper = setLowerUpperCase(reverse);
  let spaces = removeSpaces(lowerUpper);
  return spaces;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'


// PSEUDECODE

// Declare function changeVocals with parameter str
//   store passwd with empty string value
//   for store i in str do
//     if str[i] is a or e or i or o or u or A or E or I or O or U then
//       set passwd with result of function String.fromCharCode with parameter result of function str[i].charCodeAt()+95 less 94
//     end if
//   end for
//   return passwd value
// End function

// Declare function reverseWord with parameter str
//   store passwd with empty string value
//   for store i with str.length value and i >= 0 do
//     add to passwd by str[i]
//     less i by 1
//   end for
//   return passwd value
// End function

// Declare function setLowerUpperCase with parameter str
//   store passwd with empty string value
//   for store i in str do
//     if str[i] is lowerCase then
//       add passwd by result of function str[i].toUpperCase
//     else then
//       add passwd by result of function str[i].toLowerCase
//     end if
//   end for
//   return passwd value
// End function

// Declare function removeSpaces with parameter str
//   if str.length === 0 then
//      return "Minimal karakter yang diinputkan adalah 5 karakter"
//   end if
//   store passwd with result of function str.replace with parameter ' ' and ''
//   return passwd value
// End function

// Declare function passwordGenerator with parameter str
//   store vocals with result of function changeVocals with parameter str
//   store reverse with result of function changeVocals with parameter vocals
//   store lowerUpper with result of function changeVocals with parameter reverse
//   store spaces with result of function changeVocals with parameter lowerUpper
//   return spaces value
// End function