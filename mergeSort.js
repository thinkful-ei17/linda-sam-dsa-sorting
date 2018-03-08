'use strict';

let count = 0;
const mSort = array => {
  if (array.length <= 1) {
    count++;
    
    return array;
  }

  const middle = Math.floor(array.length / 2);
  const leftArray = array.slice(0, middle);
  const rightArray = array.slice(middle, array.length);

  mSort(leftArray);
  mSort(rightArray);
  
  return merge(leftArray, rightArray, array);
};

const merge = (left, right, array) => {
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    count++;
    if (left[leftIndex] < right[rightIndex]) {
      // iteration happens after the value declaration -- could be done in two parts of declaration and then iterate after in lines 27 and 28
      array[outputIndex++] = left[leftIndex++];
      // outputIndex++;
      // leftIndex++;
    } else {
      array[outputIndex++] = right[rightIndex++];
    }
  }
	
  for (let i=leftIndex; i < left.length; i++) {
    count++;
    array[outputIndex++] = left[i];
  }
	
  for (let i=rightIndex; i < right.length; i++) {
    count++;
    array[outputIndex++] = right[i];
	}
  console.log('MergeSort count no. of operations:', count);
	return array;
};

console.log(mSort([89, 30, 25, 32, 72]));
//console.log(mSort([89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5]));
