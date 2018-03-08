'use strict';

/*
Bucket sort
Write an O(n) algorithm to sort an array of integers, where you know in advance what the lowest and highest values are.

Highest: 12

Lowest: 3

correlate value with index number

index[0] => Lowest (mathematical)
[0] => 3
add 3 to index to get corresponding value number
*/

const bSort = (array, lowestValue, highestValue) => {
  if(array.length <= 1){
    return array;
  }
  let tempArray = [];
  for (let i=0; i < array.length; i++){
    if (!tempArray[array[i] - lowestValue]) {
      tempArray[array[i] - lowestValue] = 1;
    } else {
      tempArray[array[i] - lowestValue] = tempArray[array[i] - lowestValue] + 1;
    }
  }
  let i = 0;

  for (let j=0; j < tempArray.length; j++){
    if(tempArray[j] === 1){
      array[i] = j + lowestValue;
      i++;
    } else if (tempArray[j] > 1) {
      for (let k=0; k < tempArray[j]; k++) {
        array[i] = j + lowestValue;
        i++;
      }
    }
  }

  return array;
};

//console.log(bSort([89, 30, 25, -32, 72],-32,89));
// console.log(bSort([89, 30, 25, 32, 72],25,89));
console.log(bSort([89, 89, 89, 89, 89, 30, 25, 32, 72, 70, 51, 42, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5], 1, 98));