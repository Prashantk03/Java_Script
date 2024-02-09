const courses = [
    {
        courseName: 'Javascript',
        price: 1999
    },
    {
        courseName: 'DSA with C++',
        price: 5999
    },
    {
        courseName: 'Java',
        price: 4599
    },
    {
        courseName: 'Python',
        price: 999
    },
    {
        courseName: 'Web development',
        price: 4999
    }
]

const totalPrice = courses.reduce( (acc, item) => (acc + item.price), 0 )

console.log(totalPrice);


