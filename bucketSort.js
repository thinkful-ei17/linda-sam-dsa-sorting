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
      tempArray[array[i] - lowestValue] = 1 //1 truthy; 0 falsy
  }
  let i = 0;

  for (let j=0; j < tempArray.length; j++){
    if(tempArray[j] === 1){
      array[i] = j + lowestValue;
      i++;
    }
  }

  return array;
}

//console.log(bSort([89, 30, 25, -32, 72],-32,89));
console.log(bSort([89, 30, 25, 32, 72],25,89));

