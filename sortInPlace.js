/*
Sort in place
Write an algorithm to shuffle an array into a random order in-place (i.e. without creating a new array).
*/

const rSort = (array, start = 0, end = array.length) => {
  if (start >= end) {
    return array;
  }

  const middle = partition(start, end, array);
  rSort(array, start, middle);
  rSort(array, middle + 1, end);

  return array;
};


const partition = (start, end, array) => {
  const pivot = array[end - 1];
  let j = start;

  for (let i = start; i < end - 1; i++) {
    if (Math.random() <= .5) {
      swap(array, i, j);
      j++;
    }
  }
  swap(array, end - 1, j);
  return j;
};

const swap = (array, i, j) => {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
};


//range of assignable index numbers (index 0) to (array.length-1)
//keep calling rSort until number of cycles === array.length/2

console.log(rSort([25, 30, 32, 72, 89]));