const languages = ["CPP", "JS", "JAVA", "SWIFT"]

// const value = languages.forEach( (item) => {
    // console.log(item);
    // return item
// } )

// console.log(value);

//********for each did not return any value**********


const value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newVal = value.filter( (num) => num > 5 ) // num > 5 : condition

const newVal = value.filter( (num) => {
    return num > 5 //use return in {}
} )

console.log(newVal);










