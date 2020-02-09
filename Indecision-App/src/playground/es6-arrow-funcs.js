
const square = function(x) {
    return x*x;
};

const squareArrow = (x) => {
    return x * x;
};

const squareArrowTwo = (x) => x * x;

console.log(square(5));
console.log(squareArrow(6));
console.log(squareArrowTwo(7));



const getFirstName_Long = (fullName) => {
    return fullName.split(' ')[0];
};

const getFirstName = (fullName) => fullName.split(' ')[0];

console.log(getFirstName_Long('Cody Lee'));
console.log(getFirstName('Samantha Lee'));