class Person {

    constructor(name = 'default name', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        //return 'Hi, I am ' + this.name + '!';
        return `Hi, I am ${this.name}`;
    }

    getDescription() {
        return `${this.name} is ${this.age} years old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();
        if(this.hasMajor()){
            description += ` Their major is: ${this.major}`;
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    hasHomeLocation() {
        return !!this.homeLocation;
    }

    getGreeting() {
        let greeting = super.getDescription();
        if(this.hasHomeLocation()) {
            greeting += ` I am visiting from ${this.homeLocation}`;
        }
        return greeting;
    }
}

const me = new Student('Cody L.', 28, 'EE');
console.log(me.getGreeting());
console.log(me.getDescription());
console.log(me.hasMajor());

const other = new Student();
console.log(other.getGreeting());
console.log(other.getDescription());
console.log(other.hasMajor());

const t1 = new Traveler('T1', 123, 'CLT')
console.log(t1.getGreeting());

const t2 = new Traveler('T2', 456);
console.log(t2.getGreeting());