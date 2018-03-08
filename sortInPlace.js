'use strict';

/*
Sort in place
Write an algorithm to shuffle an array into a random order in-place (i.e. without creating a new array).
-O(n)
-every possible arrangement is equally likely
Array:[2, 3, 4, 5] => 4! =>24
[[2, 3, 4, 5],
[2, 4, 5, 3],
[2, 5, 3, 4],
[2, 5, 4, 3],
[2, 4, 3, 5],
[2, 3, 5, 4],
[3, 2, 4, 5],
[3, 4, 5, 2],
[3, 5, 2, 4],
[3, 5, 4, 2],
[3, 4, 2, 5],
[3, 2, 5, 4],
[4, 2, 3, 5],
[4, 3, 5, 2],
[4, 5, 2, 3],
[4, 5, 3, 2],
[4, 3, 2, 5],
[4, 2, 5, 3],
[5, 2, 3, 4],
[5, 3, 4, 2],
[5, 4, 2, 3],
[5, 4, 3, 2],
[5, 3, 2, 4],
[5, 2, 4, 3]
]
*/

const checkArray = 
[[2, 3, 4, 5],
[2, 4, 5, 3],
[2, 5, 3, 4],
[2, 5, 4, 3],
[2, 4, 3, 5],
[2, 3, 5, 4],
[3, 2, 4, 5],
[3, 4, 5, 2],
[3, 5, 2, 4],
[3, 5, 4, 2],
[3, 4, 2, 5],
[3, 2, 5, 4],
[4, 2, 3, 5],
[4, 3, 5, 2],
[4, 5, 2, 3],
[4, 5, 3, 2],
[4, 3, 2, 5],
[4, 2, 5, 3],
[5, 2, 3, 4],
[5, 3, 4, 2],
[5, 4, 2, 3],
[5, 4, 3, 2],
[5, 3, 2, 4],
[5, 2, 4, 3]]

const testShuffle = (number, testArray) => { 
  let resultsArray = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  for( let i=0 ; i <number; i++) { 
    let array = [2, 3, 4, 5];
    let results = rShuffle(array);
    for(let j=0; j<testArray.length; j++){
      if(results.toString() === testArray[j].toString()){
        resultsArray[j] = resultsArray[j] + 1;
      }
    }
  }
  return resultsArray;
}

// const compare = () => { 
  
// if([ 4, 5, 2, 3 ] === [ 4, 5, 2, 3 ]){
//   console.log('yay');
// }
// console.log('crap');
// }

// compare();


const rShuffle = (array) => {
  for(let i = 0; i < array.length; i++){
    let randomIndex = getRandomInt(array.length - i); //0, 1, 2, 3; array.length is 4
    swap(array, i, randomIndex + i); //picks random one, moves to first position, cycles through
  }
  return array;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const swap = (array, i, j) => {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
};


//console.log(rShuffle([25, 30, 32, 72, 89]));
//console.log(rShuffle([2, 3, 4, 5]));
console.log(testShuffle(24000, checkArray));


//Commented out below based on discussion with Chris - can do this without recursion
// const rSort = (array, start = 0, end = array.length) => {
//   if (start >= end) {
//     return array;
//   }

//   const middle = partition(start, end, array);
//   rSort(array, start, middle);
//   rSort(array, middle + 1, end);

//   return array;
// };


// const partition = (start, end, array) => {
//   const pivot = array[end - 1];
//   let j = start;

//   for (let i = start; i < end - 1; i++) {
//     if (Math.random() <= .5) {
//       swap(array, i, j);
//       j++;
//     }
//   }
//   swap(array, end - 1, j);
//   return j;
// };

// const swap = (array, i, j) => {
//   const tmp = array[i];
//   array[i] = array[j];
//   array[j] = tmp;
// };


// //range of assignable index numbers (index 0) to (array.length-1)
// //keep calling rSort until number of cycles === array.length/2

//console.log(rSort([25, 30, 32, 72, 89]));