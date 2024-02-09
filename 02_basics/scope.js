function addOne(num) {
    return num + 1
}
// console.log(addOne(4));

const addTwo = function (num) {
    return num + 2
}
// console.log(addTwo(2));

if (true) {
    const username = "Prashant"
    let userid = "prashantk4772"
    var password = "ijklmnop"
    // console.log(username);
}
// console.log(password);
// console.log(userid);

function one() {
    const name = "Prashant"

    function two() {
        const lastname = " Kumar"
        // console.log(name);

    }

    // console.log(lastname); // outside the scope value is not defined
    two();
}
one()



