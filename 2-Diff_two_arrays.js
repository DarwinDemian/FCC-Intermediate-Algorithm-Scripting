// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/diff-two-arrays

// Compare two arrays and return a new array with any items only found 
// in one of the two given arrays, but not both. 
// In other words, return the symmetric difference of the two arrays.

// Note: You can return the array with its elements in any order.

// O(n)
function diffArray(arr1, arr2) {
  const arr = [...arr1, ...arr2].sort();
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      i++
    } else newArr.push(arr[i]);
  }

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);