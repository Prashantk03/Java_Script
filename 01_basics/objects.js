// singleton
// Object.create // creates constructor

//*************Object literals**************

const mysym = Symbol("key1")

const obj = {
    name: "Prashant",
    "full name": "Prashant Kumar",
    age: 20,
    [mysym]: "mykey1", // [] for symbol
    email: "prashant@google.com",
    location: "Roorkee"
}

// console.log(obj.location);
// console.log(obj["name"]);
// console.log(obj["email"]);
// console.log(obj[mysym]);
// console.log(obj["full name"]); //only access with []

obj.email = "prashant@outlook.com"
// console.log(obj.email);
// Object.freeze(obj) // freeze the value
obj.location = "Noida"
// console.log(obj.location);
// console.log(obj);

obj.greeting = function(){
    console.log("Good Afternoon");
}
obj.greetings = function(){
    console.log(`Good Afternoon ${this.name}`);
}

console.log(obj.greeting());
console.log(obj.greetings());

