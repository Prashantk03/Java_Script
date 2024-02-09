//**********************for of***********************

const myArr = [1, 2, 3, 4, 5]

for (const num of myArr) {
    // console.log(num);
}

const thoughts = "CONSISTENCY"

for (const t of thoughts) {
    // console.log(`Each char is ${t}`);
}

//************************maps***********************

const map = new Map()

map.set('IN', "India")
map.set('AUS', "Australia")
map.set('UK', "United Kingdom")

// console.log(map);

for (const [key, Value] of map) {
    console.log(key, '-', Value);
}