// stack (Stores Premitive), Heap (Stores Non Premitive)


let myName = "Prashant"
let anotherName = myName
anotherName = "Coder"

console.log(myName);
console.log(anotherName); //value changed in stack storage => copied data

let user1 = {
    email: "prashant@google.com",
    userid: 43356
}
let user2 = user1

console.log(typeof user1);

user2.email = "sahil@google.com" //change in heap storage => original data

console.log(user1.email);
console.log(user2.email);