const add = function(a, b) {
    console.log(arguments);
    return a + b;
}

const add2 = (a, b) => {
    // console.log(arguments);
    return a + b;
}

console.log(add(55, 1));
console.log(add2(56, 1));


const user = {
    name: 'Cody',
    cities: ['Newberry', 'Sarasota', 'Charlotte'],
    printPlacesLived() {
        const cityMessages = this.cities.map((city) => {
            return this.name + ' has lived in ' + city;
        });

        // const cityMessages = this.cities.map((city) => return this.name + ' has lived in ' + city;

        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city);
        // });
        return cityMessages;
    }
}
console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 5,
    multiply() { 
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};
console.log(multiplier.multiply());