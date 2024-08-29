// ******************promiseOne*******************
const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("async task is complete");
        resolve()
    }, 1000)
});

promiseOne.then(function () {
    console.log("Promise consumed");

})

// ******************promiseTwo*******************
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("async task 2");
        resolve()

    }, 1000)
}).then(function () {
    console.log("async 2 resolved");

})

// ******************promiseThree*******************
const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "prashant", email: "kumarprashant71037@gmail,com" })
    }, 1000)
})

promiseThree.then(function (user) {
    console.log(user);

})

// ******************promiseFour*******************
const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "prashant", password: "1234" })
        } else {
            reject("Error");

        }
    })
}, 1000)

promiseFour.then((user) => {
    console.log(user);
    return user.username

}).then((username) => {
    console.log(username);

}).catch(function (error) {
    console.log(error);

}).finally(() => console.log("resolved or rejected")
)

// ******************promiseFive*******************
const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "javascript", password: "1234" })
        } else {
            reject("JS Error");

        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);

    }
}

consumePromiseFive()

// ****************fetch*****************
// async function getApi() {
//     try {
//         const respone = await fetch('https://api.github.com/users/Prashantk03')
//         const data = await respone.json()
//         console.log(data);
//     } catch (error) {
//         console.log(error);

//     }

// }

// getApi()

fetch('https://api.github.com/users/Prashantk03')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
    
})
.catch((error) => console.log(error)
)