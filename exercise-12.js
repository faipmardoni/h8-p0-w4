function shoppingTime(memberId, money) {
  if (memberId === undefined || memberId === '') return 'Mohon maaf, toko X hanya berlaku untuk member saja';
  if (money < 50000 || money === undefined) return 'Mohon maaf, uang tidak cukup';
  let listBarang = [['Sepatu Stacattu', 1500000], 
                    ['Baju Zoro', 500000],
                    ['Baju H&N', 250000],
                    ['Sweater Uniklooh', 175000],
                    ['Casing Handphone', 50000]
                   ];
  let listPurchased = [];
  let obj = {};
  let changeMoney = money;
  for (let i = 0; i < listBarang.length; i++) {
    if (changeMoney >= listBarang[i][1]) {
      listPurchased.push(listBarang[i][0]);
      changeMoney -= listBarang[i][1];
    }
  }
  obj.memberId = memberId;
  obj.money = money;
  obj.listPurchased = listPurchased;
  obj.changeMoney = changeMoney;
  return obj;
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja





// PSEUDECODE

// Declare function shoppingTime with parameter memberId and money then
//   if memberId is undefined or is blank then return 'Mohon maaf, toko X hanya berlaku untuk member saja' end if
//   if money < 500000 or is undefined then return 'Mohon maaf, uang tidak cukup' end if
//   store listBarang with [['Sepatu Stacattu', 1500000], 
//                          ['Baju Zoro', 500000],
//                          ['Baju H&N', 250000],
//                          ['Sweater Uniklooh', 175000],
//                          ['Casing Handphone', 50000]
//                         ]
//   store listPurchased with empty array
//   store obj with empty object
//   set changeMoney = money
//   for store i with 0; i < listBarang.length do
//     if changeMoney >= listBarang[i][1] then
//       add listPurchased by listBarang[i][0]
//       set changeMoney -= listBarang[i][1]
//     add i by 1
//   end for
//   set obj.memberId = memberId
//   set obj.money = money
//   set obj.listPurchased = listPurchased
//   set obj.changeMoney = changeMoney
//   return obj
// End function
