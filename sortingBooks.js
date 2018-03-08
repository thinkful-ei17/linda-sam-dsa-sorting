'use strict';

/* 
Sorting books
Imagine that I gave you twenty books to sort in alphabetical order. How would you go about it? Can you express this as an algorithm?

USING QUICK SORT
*/

const library = [
  { author: 'Cowlishaw, Mike', dewey: '005.133', title: 'The REXX Language' },
  { author: 'Sams', dewey: '005.133', title: 'Teach Yourself C++ In 21 Days' },
  { author: 'Stroustrup., Bjarne', dewey: '005.133', title: 'The C++ Programming Language' },
  { author: 'Crockford, Douglas', dewey: '005.2762', title: 'JavaScript: The Good Parts' },
  { author: 'Flanagan, David', dewey: '005.2762', title: 'JavaScript: The Definitive Guide' },
  { author: 'Schmidt, Meinhard', dewey: '005.44684', title: 'Windows Vista for Dummies' },
  { author: 'Zondervan', dewey: '220.52081', title: 'NIV Study Bible' },
  { author:'Humphries, Russell, Dr.', dewey: '231.7652', title: 'Starlight and Time' },
  { author: 'Jane, Frederick Thomas', dewey: '623.82509051', title: 'Jane\'s Fighting Ships' },
  { author: 'Norris, Chuck', dewey: '796.8092', title: 'The Official Chuck Norris Fact Book' }
];

const sortBooks = (books, start = 0, end = books.length) => {
  if (start >= end) {
    return books;
  }

  const middle = partitionBooks(start, end, books);
  sortBooks(books, start, middle);
  sortBooks(books, middle + 1, end);
  return books;
};

const partitionBooks = (start, end, books) => {
  const pivot = books[end - 1].title;
  let j = start;

  for (let i = start; i < end - 1; i++) {
    if (books[i].title <= pivot) {
      swap(books, i, j);
      j++;
    }
  }
  swap(books, end - 1, j);
  return j;
};

const swap = (books, i, j) => {
  const tmp = books[i];
  books[i] = books[j];
  books[j] = tmp;
};

console.log(sortBooks(library));