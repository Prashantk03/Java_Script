//**********************for loop*********************

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 7) {
        // console.log("7 is a unique no.");
        
    }
    // console.log(element);
}

for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`inner loop value: ${j}`);
        // console.log(i + ' * ' + j + ' = ' + i*j);
    }
    
}

let myArr = ["Ironman", "Thor", "Bruce"]
for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i];
    // console.log(element);
}

//***************break and continue******************

for (let i = 1; i <= 20; i++) {
    if (i == 10) {
        // console.log(`detected ${i}`);
        break
    }
    // console.log(i);
}
for (let i = 1; i <= 20; i++) {
    if (i == 10) {
        // console.log(`detected ${i}`);
        continue
    }
    // console.log(i);
}

function printTriangle(rows) {
    for (let i = 1; i <= rows ; i++) {
        let row = '';
    for (let j = 1; j <= i; j++) {
        row = "*"
        
    }       
    // console.log(row); 
    }
}

printTriangle(5)
