const name = "Prashant"
const number =  9695996488

// console.log(name + number);

console.log(`Hello my name is ${name} and my number is ${number}`);

const alpha = new String('ABCDEFGH-IJKLMNOP-QRSTUVWXYZ') 

// console.log(alpha[0]);
// console.log(alpha[25]);
// console.log(alpha.length);
// console.log(alpha.toLowerCase());
// console.log(alpha.charAt('16'));
// console.log(alpha.indexOf('S'));

const newString = alpha.substring(0, 12)
// console.log(newString);

const anotherString = alpha.slice(-25, 10)
// console.log(anotherString);

const string1 = "    Prashant    "
console.log(string1);
console.log(string1.trim());

console.log(alpha.split);

const alphabet = alpha.split('')
console.log(alphabet[10]);

const url = "http://www.google.com/Prashant%20kumar"

console.log(url.replace('%20', '-'));

console.log(url.includes("www"));

console.log(alpha.split('-'));

