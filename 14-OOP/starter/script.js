'use strict';

// 👀 SECTION 14: Object-Oriented Programming(OOP) With JavaScript 👻

// 🚨 204. Section Intro
// 🚨 205. Section Roadmap
// 🚨 206. What is Object-Oriented Programming(OOP)?
// 🚨 207. OOP in JavaScript
// 🚨 208. Constructor Functions and the new Operator

// Construction functions always start with capital letter
/*
const Person = function (firstName, birthYear) {
  // instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // adding method to the object
  // BUT NEVER CREATE METHOD INSIDE
  // THE CONSTRUCTIVE FUNCTION
  // instead this we can use prototypes(next video)
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};
// 'this' key word in the function will be the empty object becouse we are calling it with new key word 'new'
const petar = new Person('Petar', 1987);

console.log(petar);
// output: Person {firstName: 'Petar', birthYear: 1987}

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

// We can use this construction function to create new different object we need

const matilda = new Person('Matilda', 2017);
const ivan = new Person('ivan', 1975);
console.log(matilda, ivan);
//output:
// Person {firstName: 'Matilda', birthYear: 2017}
// Person {firstName: 'ivan', birthYear: 1975}

console.log(petar instanceof Person); // true

// 🚨 209. Prototypes

console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
petar.calcAge(); // 50
matilda.calcAge(); // 20

console.log(petar.__proto__); // {calcAge: ƒ, constructor: ƒ}
console.log(petar.__proto__ === Person.prototype); // true

console.log(Person.prototype.isPrototypeOf(petar)); // true
console.log(Person.prototype.isPrototypeOf(matilda)); // true
console.log(Person.prototype.isPrototypeOf(Person)); // false

Person.prototype.species = 'Homo Sapiens';
console.log(petar.species, matilda.species);

console.log(petar.hasOwnProperty('species'));
console.log(petar.hasOwnProperty('firstName'));

// 🚨 210. Prototypal Inheritance and The Prototype Chain
// 🚨 211. Prototypal Inheritance on Built-in Object

console.log(petar.__proto__);
// Object .prototype (top of prototype chain)
console.log(petar.__proto__.__proto__);
console.log(petar.__proto__.__proto__.__proto__); // null

console.dir(Person.prototype.constructor);

const arr = [3, 4, 5, 7, 8, 9]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };
// console.log(arr.unique());

const h1 = document.querySelector('h1');
console.log(x => x + 1);
*/

// 🚨 212. Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. 
A car has a make and a speed property. The speed 
property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will 
increase the car's speed by 10, and log the new 
speed to the console;
3. Implement a 'brake' method that will decrease 
the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 
accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

/*
function Car(make, speed) {
  this.make = make;
  this.speed = speed;
}

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is now going at ${this.speed} km/h.`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is now going at ${this.speed} km/h.`);
};

const BMW = new Car('BMW', 120);
const Mercedes = new Car('Mercedes', 95);

BMW.accelerate();
BMW.accelerate();
BMW.accelerate();
BMW.brake();
BMW.brake();
BMW.brake();

Mercedes.accelerate();
Mercedes.accelerate();
Mercedes.accelerate();
Mercedes.brake();
Mercedes.brake();
Mercedes.brake();
*/

// 🚨 213. ES6 Classes
// Classes are special type of functions

// class expression
// const PersonCL = class {};

/*
// class declaration
class PersonCL {
  constructor(firstName, birthYear) {
    // constructor() is a METHOD in this function and need to be call constructor
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.firstName}`); // Hey Jessuca
  }
}
const jessica = new PersonCL('Jessuca', 1996);
console.log(jessica); // PersonCL {firstName: 'Jessuca', birthYear: 1996}
jessica.calcAge(); // 41

console.log(jessica.__proto__ === PersonCL.prototype);

// PersonCL.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
jessica.greet(); // Hey Jessuca

// ℹ️ 👇
// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 2.1. (we can pass them in to functions and also return them from functions)
// 3. Classes are executed in strict mode
*/

// 🚨 214. Setters and Getters
// this is functions who get and set value,
// but out side they still look like regular properties?

/*
const account = {
  owner: 'jonas',
  movements: [200, 300, 500, 340],

  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest); // 340

account.latest = 50;
console.log(account.movements); // (5) [200, 300, 500, 340, 50]
*/

// 🚨 215. Static Methods
/*
const Person = function (firstName, birthYear) {
  // instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const petar = new Person('Petar', 1987);
Person.hey = function () {
  console.log('Hey there 👻');
};

Person.hey();
*/

// 🚨 216. Object.create
/*
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto); // true

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge(); // 58
*/

// 🚨 217. Coding Challenge #2
/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h 
(but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, 
and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/
/*
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} going at ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6; // Convert km/h to mi/h
  }

  set speedUS(speedMph) {
    this.speed = speedMph * 1.6; // Convert mi/h to km/h
  }
}
const car = new Car('Ford', 120);
console.log(car.speedUS);
car.accelerate();
car.accelerate();
car.accelerate();
car.brake();
car.speedUS = 50;
console.log(car); // Car {make: 'Ford', speed: 80}
*/

// 🚨 218. Inheritance Between "Classes": Constructor Functions
// Наследяване между "класове": функции на конструктора

/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  //   this.firstName = firstName;
  //   this.birthYear = birthYear;
  // 👇 to avoid duplicate of the code, change this two lines with this one
  Person.call(this, firstName, birthYear);
  // the .call method here call function Person and spotify this key word
  // to be this key word and in this function as well
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const ivan = new Student('Ivan', 2020, 'Coputer Science');
ivan.introduce(); // My name is Ivan and I study Coputer Science
ivan.calcAge(); // 17

console.log(ivan.__proto__);
console.log(ivan.__proto__.__proto__);

console.log(ivan instanceof Student); // true
console.log(ivan instanceof Person); // true
console.log(ivan instanceof Object); // true

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor); // ƒ Student(firstName, birthYear, course)
*/

// 🚨 119. Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) 
as a CHILD "class" of Car. Besides a make and current speed, the EV also 
has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' 
and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed 
by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla 
going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 
'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 
'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is now going at ${this.speed} km/h.`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is now going at ${this.speed} km/h.`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

// LInk the prototypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.speed--;
  console.log(
    `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`
  );
};

const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake(); // Tesla is now going at 115 km/h.
tesla.accelerate(); // Tesla is going at 134 km/h, with a charge of 90
*/

// 🚨 220. Inheritance Between "Classes"

/*
class PersonCL {
  constructor(fullName, birthYear) {
    // constructor() is a METHOD in this function and need to be call constructor
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.fullName}`); // Hey Jessuca
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there 👻');
  }
}
class StudentCl extends PersonCL {
  constructor(fullName, birthYear, course) {
    // Always need to happen first!
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();
*/

// 🚨 221. Inheritance Between "Classes": ES6 Classes

/*
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce(); // My name is Jay and I study Computer Science
jay.calcAge(); // 27
*/

// 🚨 222. Another Class Example

/*
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;

    console.log(`Thank's for opening an account, ${owner}`);
  }
  // Public interface (API)
  deposit(val) {
    this.movements.push(val);
  }
  withdraw(val) {
    this.deposit(-val);
  }

  approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

// movements
// acc1.movements.push(250);
// acc1.movements.push(-150);
// OR
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);

console.log(acc1);
console.log(acc1.pin); // 1111
*/

// 🚨 223. Encapsulatiion: Protected Properties and Methods
// the same code from the previous task

/*
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // Protected property
    this._pin = pin; // puting _ protecting the pin
    this._movements = [];
    this.locale = navigator.language;

    console.log(`Thank's for opening an account, ${owner}`);
  }
  // Public interface (API)

  getMovements() {
    return this._movements;
  }

  deposit(val) {
    this._movements.push(val);
  }
  withdraw(val) {
    this.deposit(-val);
  }

  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

// movements
// acc1._movements.push(250);
// acc1._movements.push(-150);
// OR
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
acc1._approveLoan(1000);
console.log(acc1.getMovements());

console.log(acc1);
console.log(acc1.pin); // 1111
*/

// 🚨 224. Encapsulation: Private Class Fields and Methods

// 1/ Public fields
// 2/ Private fields
// 3/ Public methods
// 4/ Private methods
// (there is also and the static version)
// all of them are 8

/*
class Account {
  // 1/ Public fields
  locale = navigator.language;

  // 2/ Private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // Protected property
    this.#pin = pin; // puting _ protecting the pin
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thank's for opening an account, ${owner}`);
  }

  // 3/ Public methods

  // Public interface (API)

  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
  }
  withdraw(val) {
    this.deposit(-val);
  }

  requestLoan(val) {
    // if (this.#approveLoan(val)) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }

  // 4/ Private methods
  //   #approveLoan(val) {
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

// movements
// acc1._movements.push(250);
// acc1._movements.push(-150);
// OR
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);

console.log(acc1.getMovements());

console.log(acc1);

// console.log(acc1.#movemets); // Error message
// console.log(acc1.#pin); // Error message
// console.log(acc1.#approveLoan(100)); // Error message
*/

// 🚨 225. Chaining Methods

/*
class Account {
  // 1/ Public fields
  locale = navigator.language;

  // 2/ Private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // Protected property
    this.#pin = pin; // puting _ protecting the pin
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thank's for opening an account, ${owner}`);
  }

  // 3/ Public methods

  // Public interface (API)

  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this; // adding return this because this is the current object
  }
  withdraw(val) {
    this.deposit(-val);
    return this; // adding return this because this is the current object
  }

  requestLoan(val) {
    // if (this.#approveLoan(val)) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this; // adding return this because this is the current object
    }
  }

  // 4/ Private methods
  //   #approveLoan(val) {
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

// movements
// acc1._movements.push(250);
// acc1._movements.push(-150);
// OR
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);

console.log(acc1.getMovements());

console.log(acc1);

// console.log(acc1.#movemets); // Error message
// console.log(acc1.#pin); // Error message
// console.log(acc1.#approveLoan(100)); // Error message

// Chaining
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());
*/

// 🚨 226. ES6 Classes Summary

// 🚨 227. Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: 
create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' 
methods of this class, and also update the 'brake' method in the 
'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

/*
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is now going at ${this.speed} km/h.`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is now going at ${this.speed} km/h.`);
    return this;
  }

  get speedUS() {
    return this.speen / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.speed--;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);

rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(90)
  .accelerate();
*/
