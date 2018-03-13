function cariModus(arr) {
    // you can only write your code here!
    arr.sort(function(a,b){return a-b});
    var modus
    var arrModus = [];
    var arrIndex = [];
    var arrA = []
    var arrB = []
    // console.log(arr)
    for (var j=0; j<arr.length; j++) {
        // console.log(j)
        var modus=1;
        for (var i=j+1; i<arr.length; i++) {
            // console.log(i)
            if(arr[j] === arr[i] && arr[j] !== arr[j-1]) {
                modus++
                // console.log(arr[i],arr[j],modus)
            }
        }
        // console.log(modus)
        arrModus.push(modus)
        
    } 
    // console.log(arrModus)
    for(i=0; i<arrModus.length; i++) {
        arrA=[]
        if(arrModus[i]>1) {
            // console.log(arrModus);
            arrA.push(arr[i],arrModus[i])
        }else {
            continue
        }
        arrB.push(arrA)
    }
    console.log(arrB)
    if(arrB.length===0) {
        return -1
    }else if(arrB[0][1]===arr.length) {
        return -1
    }else if(arrB.length===1) {
        return arrB[0][0]
    }else {
        for(i=0; i<arrB.length; i++) {
            if(arrB[i][1]<arrB[i+1][1]){
                return arrB[i+1][0]
            }else {
                return arrB[i][0]
            }
        }
    }
    
    arrIndex.push(arrModus);  
    return arrB;
}
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1