let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate); 

let createdDate = new Date("11-23-2023")
// console.log(createdDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);

// console.log(createdDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());

// `${}`

newDate.toLocaleString('default',{
    weekday: "long"
})