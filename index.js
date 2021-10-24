 getIndexToIns = (arr, num) =>{
    // Insert num into arr, creating a new array.
       let newArray = arr.concat(num)
    //             [40, 60].concat(50)
    //             [40, 60, 50]
  
    // Sort the new array from least to greatest.
       newArray.sort((a, b) => a - b)
    // [40, 60, 50].sort((a, b) => a - b)
    // [40, 50, 60]
  
    // Return the index of num which is now
    // in the correct place in the new array.
       return newArray.indexOf(num);
    // return [40, 50, 60].indexOf(50)
    // 1
  }
  
  console.log(getIndexToIns([40, 60], 50))