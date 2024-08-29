const arr = [1,2,3,4,5]

const newArr = arr.reduce((acc, cur, i, ar) => {
        if(ar === arr.length -1){
            acc += cur
        }

}, 0)