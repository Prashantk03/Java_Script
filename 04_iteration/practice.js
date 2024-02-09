//********************practice********************

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2008},
    { title: 'Book Two', genre: 'Comedy', publish: 2000, edition: 2010},
    { title: 'Book Three', genre: 'Sci-fi', publish: 1981, edition: 2002},
    { title: 'Book Four', genre: 'Horror', publish: 1988, edition: 2005},
    { title: 'Book Five', genre: 'Fiction', publish: 1986, edition: 2004},
    { title: 'Book Six', genre: 'Historic', publish: 1990, edition: 2007},
    { title: 'Book Seven', genre: 'Horror', publish: 1997, edition: 2013},
    { title: 'Book Eight', genre: 'Sci-fi', publish: 2001, edition: 2001},
]

// let userBooks = books.filter( (bk) =>  bk.genre === 'Sci-fi')

userBooks = books.filter( (bk) => {
    return bk.publish >= 1985 && bk.genre === 'Horror'
} )


console.log(userBooks);

