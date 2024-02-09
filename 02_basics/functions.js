function myFun(){
    console.log("P");
    console.log("R");
    console.log("A");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("N");
    console.log("T");
}
// myFun()

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }
function addTwoNumbers(num1, num2){
    
    let result = num1 + num2
    return result;
}

const result = addTwoNumbers(4, 6)

// console.log("result:", result);

function loggedIn(username = "Gaurav"){
    if(!username){ //(!) convert true to false and vice versa 
        console.log("Please enter username:");
        return

    }
    return `${username} is active now.`
}

// console.log(loggedIn("Prashant"));
// console.log(loggedIn("Prashant")); //undefined

function pricing(...num){
    return num

}

// console.log(pricing(99, 249, 18, 132));


let user = {
    item: "10kg rice",
    price: 540
} //var object

itemPrice({
    item: "5kg rice",
    price: "298"
}) //direct object

function itemPrice(iP){
    // console.log(`Item: ${iP.item} \n Price: ${iP.price}`);
}

// itemPrice(user)

const array = [10, 20, 30, 40, 50]

function returnValue(getElement){
    return getElement[3]
}

// console.log(returnValue(array));
// console.log(returnValue([10, 20, 30, 40, 50]));




