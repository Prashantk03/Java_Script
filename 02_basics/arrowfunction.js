//******************Arrow function*******************

const arrowFunction = () => {
    let name = "Prashant"
    let lastname = " Kumar"
    return name + lastname

}

// console.log(arrowFunction()) // () =>{} arrow function 

const add = (num1, num2) => (num1 + num2) //implicit

// console.log(add(4, 8)); // => arrow function

const obj = (n) => ({name: "Prashant"}) //({}) function for object without return.

console.log(obj(1)); 

