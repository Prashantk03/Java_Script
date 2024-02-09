

// const languages = ["CPP", "JS", "JAVA", "SWIFT"]

// languages.forEach( function (item){
//     console.log(item);
// } )

// languages.forEach( (val) => {
//     console.log(val);
// } )

// function printMe(value) {
//     console.log(value);
// }

// languages.forEach(printMe)

// languages.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// }

const languages = [
    {
        languageName: "Javascript",
        languageFileName: "JS"
    },
    {
        languageName: "C++",
        languageFileName: "CPP"
    },
    {
        languageName: "Python",
        languageFileName: "PY"
    }
]

languages.forEach( (item) => {
    console.log(item.languageFileName);
} )