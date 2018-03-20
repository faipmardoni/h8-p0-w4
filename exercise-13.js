function countProfit(shoppers) {
  let arr = [];
  if (shoppers.length === 0) return arr
  let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                     ['Baju Zoro', 500000, 2],
                     ['Sweater Uniklooh', 175000, 1]
                   ];
  for (let i = 0; i < listBarang.length; i++) {
    let obj = {};
    let buyer = [];
    let soldOut = 0;
    let stok = listBarang[i][2];
    for (let j = 0; j < shoppers.length; j++) {
      if (listBarang[i][0] === shoppers[j].product && listBarang[i][2] >= shoppers[j].amount) {
        listBarang[i][2] -= shoppers[j].amount;
        soldOut += shoppers[j].amount;
        buyer.push(shoppers[j].name); 
      }
    }
    obj.product = listBarang[i][0];
    obj.shoppers = buyer;
    obj.leftOver = stok - soldOut;
    obj.totalProfit = soldOut * listBarang[i][1];
    arr.push(obj);
  }
  return arr
}
// TEST CASES
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, 
{name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, 
{name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, 
{name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, 
{name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, 
{name: 'Devi', product: 'Baju Zoro', amount: 1}, 
{name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// // [ { product: 'Sepatu Stacattu',
// //     shoppers: [ 'Windi' ],
// //     leftOver: 2,
// //     totalProfit: 120000000 },
// //   { product: 'Baju Zoro',
// //     shoppers: [ 'Devi', 'Lisa' ],
// //     leftOver: 0,
// //     totalProfit: 1000000 },
// //   { product: 'Sweater Uniklooh',
// //     shoppers: [ 'Rani' ],
// //     leftOver: 0,
// //     totalProfit: 175000 } ]
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// // [ { product: 'Sepatu Stacattu',
// //     shoppers: [],
// //     leftOver: 10,
// //     totalProfit: 0 },
// //   { product: 'Baju Zoro',
// //     shoppers: [],
// //     leftOver: 2,
// //     totalProfit: 0 },
// //   { product: 'Sweater Uniklooh',
// //     shoppers: [],
// //     leftOver: 1,
// //     totalProfit: 0 } ]
console.log(countProfit([])); //[]

// PSEUDECODE

// Declare function countProfit with parameter shoppers then
//   store arr with empty array
//   if shoppers.length = 0 then return arr
//   store listBarang with [ ['Sepatu Stacattu', 1500000, 10],
//                      ['Baju Zoro', 500000, 2],
//                      ['Sweater Uniklooh', 175000, 1]
//                    ]
//   for store i with 0 and i < listBarang.length do
//   store stok with listBarang[i][2]
//   store obj with empty object
//   store buyer with empty array
//   store soldOut with 0
//     for store j with 0 and j < shoppers.length do
//       if listBarang[i][0] === shoppers[j].product && listBarang[i][2] >= shoppers[j].amount then
//         less listBarang[i][2] by shoppers[j].amount
//         add buyer by shoppers[j].name
//         add soldOut by shoppers[j].amount
//       end if
//       add j by 1
//     end for
//     add obj by key product and value listBarang[i][0]
//     add obj by key shoppers and value buyer
//     add obj by key leftOver and value result of stok - soldOut
//     add obj by key totalProfit and value soldOut * listBarang[i][1]
//     add arr by obj
//     add i by 1
//   end for
//   return arr
// End function