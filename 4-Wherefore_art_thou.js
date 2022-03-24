// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/wherefore-art-thou

/*
 Make a function that looks through an array of objects (first argument) and
 returns an array of all objects that have matching name and
 value pairs (second argument). Each name and value pair of the source object
 has to be present in the object from the collection if it is to be included
 in the returned array.
*/

/*
 For example, if the first argument is

 [{ first: "Romeo", last: "Montague" },
  { first: "Mercutio", last: null },
  { first: "Tybalt", last: "Capulet" }],

 and the second argument is

 { last: "Capulet" },

 then you must return the third object from the array (the first argument),
 because it contains the name and its value,
 that was passed on as the second argument.
*/

// O(n*m)
const whatIsInAName = (collection, source) => {
  const arr = [];
  let keys = Object.keys(source);
  let result;

  for (let i = 0; i < collection.length; i++) {
    for (let j = 0; j < keys.length; j++) {
      if (source[keys[j]] !== collection[i][keys[j]]) {
        result = false;
        break;
      } else result = true;
    }

    if (result === true) {
      arr.push(collection[i]);
    }
  }

  return arr;
};

let collection = [
  { first: "Romeo", last: "Montague" },
  { first: "Mercutio", last: null },
  { first: "Tybalt", last: "Capulet" },
];

let source = { last: "Capulet" };

let collection2 = [{ a: 1, b: 2, c: 3 }];
let source2 = { a: 1, b: 9999, c: 3 };

let collection3 = [
  { apple: 1, bat: 2 },
  { apple: 1 },
  { apple: 1, bat: 2, cookie: 2 },
  { bat: 2 },
];

let source3 = { apple: 1, bat: 2 };

console.log("--------------------------------------")
console.log("           First result is            ")
console.log("--------------------------------------")
console.log()
console.log(whatIsInAName(collection, source));
console.log()
console.log("--------------------------------------")
console.log("           Second result is           ")
console.log("--------------------------------------")
console.log()
console.log(whatIsInAName(collection2, source2));
console.log()
console.log("--------------------------------------")
console.log("           Third result is            ")
console.log("--------------------------------------")
console.log()
console.log(whatIsInAName(collection3, source3));
