// Array

const myArray = [0, 1, 2, 3, 4, 5]
const myArr = new Array(0, 1, 2, 3, 4, 5)

// console.log(myArray[0]);

// *************Array Methods***************

// Array Methods

// myArr.push(6) // Add
// myArr.push(7)
// myArr.push(8)
// myArr.push(9)
// myArr.push(10)
// myArr.pop() // Remove
// myArr.pop()

// console.log(myArr);

// myArr.unshift(9) //to add value first
// myArr.shift() // to remove first value
// console.log(myArr.includes(5));

const newArr = myArr.join()
// console.log(newArr);
// console.log(typeof newArr);

// *************Slice, Splice***************

// console.log("A", myArr);

const myA1 = myArr.slice(1, 4) // (.slice) does not take last one

// console.log(myA1);
// console.log("B", myArr);

const myA2 = myArr.splice(1, 3) // (.splice) takes last one & also CHANGE in original array

// console.log(myA2);
// console.log("C", myArr);

// **********Push, Concat, Spread***********

const marvelHero = ["Thor", "Ironman", "Spiderman"]
const dcHero = ["Superman", "Batman", "Flash"]

// marvelHero.push(dcHero) 
// console.log(marvelHero);

// const merged = marvelHero.concat(dcHero)
// console.log(merged);

const mergedInline = [...marvelHero, ...dcHero] // spread

// console.log(mergedInline);

const newA1 = [1, 2, 3,[4, 5, 6], 7, 8, [9, 10, [11, 12]], 13]

const newA2 = newA1.flat(Infinity) // (.flat) in sequence

// console.log(newA2);
// console.log(typeof newA2);

// console.log(Array.isArray("PRASHANT")); // (.is) to check
// console.log(Array.from("PRASHANT")); // (.from) to convert in array
// console.log(Array.from({name: "PRASHANT"})); //INTRESTING

let s1 = 100
let s2 = 200
let s3 = 300

// console.log(Array.of(s1, s2, s3)); // (.of) to make array of diff. data type



















 