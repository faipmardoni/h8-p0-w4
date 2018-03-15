function shoppingTime(memberId, money) {
  // you can only write your code here!
  var modal = money;
  var itemDijual = [['Sepatu Stacattu', 1500000], 
                    ['Baju Zoro', 500000], 
                    ['Baju H&N', 250000], 
                    ['Sweater Uniklooh', 175000], 
                    ['Casing Handphone', 50000]];
  if(memberId==='' || memberId===undefined) {
    return "Mohon maaf, toko X hanya berlaku untuk member saja";
  }else if(money<50000 || money===undefined) {
    return "Mohon maaf, uang tidak cukup"
  }else {
    var list = [];
    for (let i = 0; i < itemDijual.length; i++) {
      if(itemDijual[i][1] <= money) {
        money-=itemDijual[i][1];
        list.push(itemDijual[i][0]);
      }
    }
    var obj = {
      memberId: memberId,
      money: modal,
      listPurchased: list,
      changeMoney: money
    }     
  }
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

// Declare function shoppingTime with parameter memberId and money
//   store modal with money value
//   store itemDijual with [['Sepatu Stacattu', 1500000], 
//                         ['Baju Zoro', 500000], 
//                         ['Baju H&N', 250000], 
//                         ['Sweater Uniklooh', 175000], 
//                         ['Casing Handphone', 50000]];
//   if memberId is blank or undefined then
//     return "Mohon maaf, toko X hanya berlaku untuk member saja" value
//   else if money<50000 or undefined then
//     return "Mohon maaf, uang tidak cukup" value
//   else then
//     store list with empty array value
//     for store i with 0 and i<itemDijual.length do
//       if itemDijual[i][1] <= money then
//         less money by itemDijual[i][1]
//         add to list with itemDijual[i][0] value
//       end if
//     end for
//     store obj object with key and value
//       key and value memberId,
//       key money with value modal,
//       key listPurchased with value list,
//       changeMoney with value money
//     end object
//   end if
//   return obj value
// end function


 