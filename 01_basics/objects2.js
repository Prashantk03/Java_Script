// const user = new Object() //construct
const user = {}

user.id = "123abc"
user.pass = "xyz"
user.isloggedin = "false"

// console.log(user);

const user2 = {
    userid: "321abc",
    userpass: "ijk",
    userlogin: "true",
    username: {
        fullname:{
        firstname: "Prashant",
        lastname: "Kumar",
        }
    },
    useremail: "prashant@microsoft.com", 

}

// console.log(user2.username.fullname);

const obj1 ={1:"a", 2:"b"}
const obj2 ={3:"a", 4:"b"}

// const obj3 = {...obj1, ...obj2}
const obj3 = Object.assign({}, obj1, obj2)

console.log(obj3);

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));
// console.log(user.hasOwnProperty('isloggedin')); 


//******************************************

// user2.useremail
const {useremail: ue} = user2 //ue is the given name

// console.log(useremail);
// console.log(ue);

//******************JSON*******************/
{
    // "1":"a",
    // "2":"a",
    // "3":"a",
    // "4":"a",
    // "5":"a",
}

[
    {},
    {},
    {},
    {},
]