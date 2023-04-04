// **************BASICS let const *******************
// let markMass = 78;
// let markHeight = 1.69;

// let johnMass = 92;
// let johnHeight = 1.95;

// const markBmi = markMass / markHeight ** 2; // 2 is the power operator
// const johnBmi = johnMass / johnHeight ** 2;

// console.log(markBmi, johnBmi);
// const markHigherBMI = markBmi > johnBmi;
// console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI);
// console.log('')

// For loop shorthand
// const fruits = ["mango", "peach", "banana"];
// for (let fruit of fruits) {
//   console.log(fruit);
// }
// prints each element
// for (let index in fruits) {
//   console.log(index);
// } 
// prints each index
// ************** Creating a object ***********************

// const myObj = {
//   1: "hello",
//   noNeedToName: 1,
//   myCamelCaseVar: "its me",
//   nestedObj: {
//     ok: "yes",
//     1: 2,
//     5: 6,
//     "spaced name": "its me",
//   },
//   myObjFunction: function () {
//     console.log("hi ");
//     this.noNeedToName = 2;
//   },
// };

// console.log(myObj.myCamelCaseVar);
// console.log(myObj["1"]);
// console.log(myObj.nestedObj[1]); // finds a key named 1 and prints its value
// console.log(myObj.nestedObj["1"]); // prints 2 by finding the value of 1
// NOTE: for objects you cannot access myObj.1 or in case where there is space in the key name you need to use myObj["key name"]
// console.log(myObj.nestedObj["spaced name"]); // prints "its me"
// // console.log(myObj.nestedObj.ok);
// // console.log(myObj.nestedObj["ok"]);

// myObj.myObjFunction();
// console.log(myObj.noNeedToName);

//  ************************ Standard Functions *****************************
// function myFunction(a, b) {
//   console.log(a, b);
//   return a + b;
// }
// const newFunction = function (a, b) {
//   console.log(a, b);
//   return a + b;
// }
// *************************** arrow function *********************************
// const resultFunction = (a, b) => {
//   const n = a + b;
//   console.log(`This is inside function ${n}`);
//   return n;
// }
// console.log(`This is outside ${resultFunction(1, 2)}`);
// one linear arrow function
// const resultFunction2 = (a, b) => a + b;

// ****************Functions in JavaScript are Objects ****************
// function Car(model) {
//   this.model = model;
// }
// const myFuncObj = new Car("Focus"); // this is a constructor function which creates a new object
// console.log(myFuncObj); // {model: 'Focus'}


// BIND METHOD
// The Bind method is used to set the value of this in a function
// It borrows a function and creates a copy of it. "this" is set to the first argument passed to bind

// Here  is before binding
// const speak = function speak(sound){
// console.log(this.name + " says " + sound);
// }
// let cat = {
// name: "Fluffy",
// speak
// };

// let dog = {
// name: "Fido",
// speak
// };

// cat.speak("meow");
// dog.speak("woof");

// Here is after binding
// function speak(sound) {
//   console.log(this.name + " says " + sound);
// }

// let cat1 = {
//   name: "Fluffy",
// };

// let dog1 = {
//   name: "Fido",
// };

// const bark = speak.bind(dog1, "woof");
// const meow = speak.bind(cat1, "meow");

// bark();
// meow();


// *************** Class based Constructor ES6******************************
// class Circle1 {
//   #radius = 0; // private variable
//   constructor(radius) {
//     console.log(`Constructor called with radius: ${radius}`);
//     this.#radius = radius;
//     this.notPrivate = 1;
//   }
//   getVal() {
//     return this.#radius;
//   }
//   setVal(newVal) {
//     this.#radius = newVal;
//   }
//   #privateMethod() {
//     console.log(`This is a private method`);
//   }
//   dummyMethod() {
//     this.#privateMethod();
//   }
// }
// const c2 = new Circle1(2);
// console.log(`Initializing radius to ${c2.getVal()}}`);
// // c2.#radius = 3; // this will throw an error as #radius is private
// c2.notPrivate = 2;
// console.log(`Getter Called ${c2.getVal()}`);
// c2.setVal(7);
// console.log(`Setter Called ${c2.getVal()}`);
// c2.dummyMethod();

// ********************** Function Constructor **************************
// function Circle(radius) {
//   this.radius = radius; // public variable
//   let myPrivateVar = 1; // private variable
//   this.draw = function () {
//     console.log(`draw ${radius}`);
//   };
//   let privateMethod = function () {
//     console.log("this is a private method");
//   }
// }

// let funObj = new Circle(5);
// funObj.draw();

// ******************FACTORY FUNCTIONS (Type of Constructor)*********************
// function myFunction1(radius) {
//   return {
//     radius, // as radius key and radius val are same it can be shortened (enhanced object literals)
//     draw: function () {
//       console.log("draw circle");
//     },
//   };
// }
// // assign var to obj function
// const myObjVar = myFunction1(1);
// console.log(myObjVar.radius);
// myObjVar.draw();
// this is known as factory method: when a function returns an object

// *************************** Object Constructor **********************************
// const personPrototype = {
//   greet: function() {
//     console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//   }
// };

// const person1 = Object.create(personPrototype);

// person1.name = "John";
// person1.age = 30;

// person1.greet(); // Output: Hello, my name is John and I am 30 years old.


// *************************** ARRAY METHODS -  MAP, REDUCE, FILTER **********************************
// https://www.freecodecamp.org/news/javascript-map-reduce-and-filter-explained-with-examples/
//MAP: Always returns an array of the same length as the original array


// let myArray = [1, 2, 3, 4, 5];
// let myArray1 = ["hello", "ciao", "hola", "salut"];

// let newArray = myArray.map(function mapFunc(number, index) {
//   console.log(`The value is ${number} on index ${index}`);
//   return number + 1;
// });
// let newArray3 = myArray.map((number) => number + 1);

// console.log(newArray); // [2, 3, 4, 5, 6]

// let myObjectArray = [
//   { name: "Ferrari", price: "$$$$$" },
//   { name: "tesla", price: "$$" },
// ];

// let count = 0;
// let newPrice = myObjectArray.map(function (obj, index) {
//   console.log(`The whole obj ${obj}`);
//   count += 1;
//   return obj.name;
// });
// console.log(newPrice); // ['$$$$$', '$$']

// FILTER: - Filters the values on applying conditions
// const numbers = [1, 2, 3, 4];
// const evens = numbers.filter((item) => item % 2 === 0);
// console.log(evens); // [2, 4]

// const students = [
//   { name: "Quincy", grade: 96 },
//   { name: "Jason", grade: 84 },
//   { name: "Alexis", grade: 100 },
//   { name: "Sam", grade: 65 },
//   { name: "Katie", grade: 90 },
// ];
// // student => student.grade >= 90
// const studentGrades = students.filter(function (student) {
//   if (student.grade >= 91) {
//     return true;
//   }
// });
// // console.log(studentGrades);
// //  or Es6 arrow function statement
// const newStudents = students.filter((student) => student.grade > 91);
// console.log(`This is it ${JSON.stringify(newStudents)} `); // Json.stringify is used to convert the object to string
 // if value is boolean true returned than that object is filtered
// or in simple console.log
// console.log(studentGrades1); 
// [ { name: 'Quincy', grade: 96 }, { name: 'Alexis', grade: 100 }, { name: 'Katie', grade: 90 } ]

// REDUCE - Aggregate and reduce the values to one

// let myArray = [1, 2, 3, 4, 5];
// let reduceFunc = (sum, number, index) => {
//   console.log(index);
//   return sum + number;
// };
// // // TASK: sum the values in the array in 2 - 3 lines of code without for loop
// const endSum = myArray.reduce(reduceFunc, 10); // Initial value to be added to each index value here 0 is used
// console.log(endSum);

// const endSum2 = myArray.reduce((sum, number, index) => sum + number, 0); // ES 6 One liner
// console.log(endSum2);

// //Using objects and reduce
// const primaryColors = [
//   { color: "red" },
//   { color: "yellow" },
//   { color: "blue" },
// ];
// const newRedFunc = (accumulator, obj) => {
//   accumulator.push(obj.color);
//   return accumulator;
// };
// const colorList = primaryColors.reduce(newRedFunc, []);
// console.log(colorList); // ['red', 'yellow', 'blue']

// // TASK Count number of pets and form a object with petName as key and count as value
// const pets = ["dog", "chicken", "cat", "dog", "chicken", "chicken", "rabbit"];

// const petObj = pets.reduce((accumulator, pet) => {
//   if (pet in accumulator) {
//     accumulator[pet] += 1;
//   } else {
//     accumulator[pet] = 1;
//   }
//   return accumulator;
// }, {});
// console.log(petObj);

// FIND, EVERY, SOME Array helper

// Find - Returns the element if found from an array (can be used best with array of objects)

// const posts = [
//   { id: 1, title: "New Post" },
//   { id: 1, title2: "Old Post" },
//   { id: 2, title: "New Post2" },
// ];
// const comment = { postId: 2, content: "Great Comment" };

// const foundPost = posts.find((obj) => obj.id === comment.postId);
// // if the find function returns true then that value is returned (break)

// console.log(foundPost);

// //"EVERY" and "SOME" array helper
// //Every and some - Just checks the condition is met and doesnt return values but return boolean - true, false
// const computers = [
//   { name: "Apple", ram: 24 },
//   { name: "Acer", ram: 4 },
//   { name: "Asus", ram: 32 },
// ];
// console.log(computers.every((obj) => obj.ram > 16)); // false checks if every element fullfill the condition
// console.log(computers.some((obj) => obj.ram > 16)); // true checks if some of the element fullfill the condition

// // FOR EACH array helper
// const colors = ["red", "blue", "green"];
// colors.forEach((color) => console.log(color)); // prints each element of the array

// **************************** Enhanced Object Literals *********************************
// const someFunction = (studentObj) => {
//   return {
//     studentObj, // enhanced obj literal. Same as studentObj: studentObj
//     someInsideSumFunction: function() {
//       // Sums the total number of students
//       return this.studentObj.reduce((total, student) => total + 1, 0); // Here as it is an object function (that returns an object)
//     // "this" refers to the current obj
//     },
//     someInsideGetFunction(name) {
//       // finds the student obj by name and returns the obj
//       return this.studentObj.find(function (student) {
//         return student.name === name;
//       });
//     },
//   };
// };

// const students = [
//   { name: "john", age: 25, rollNum: 1 },
//   { name: "justin", age: 26, rollNum: 2 },
//   { name: "johnathan", age: 24, rollNum: 3 },
// ];

// const someFunctionObj = someFunction(students);
// console.log(someFunctionObj);
// console.log(someFunctionObj.someInsideSumFunction()); // 3
// console.log(someFunctionObj.someInsideGetFunction("john")); // {name: 'john', age: 25, rollNum: 1}

// *************************** DESTRUCTURING **********************************
// Destructuring - Extracting values from an object or array and assigning them to variables
// Array Destructuring
// const array1 = ["A", "B", "C", "D", "E", "F", "G"];
// const array2 = [1, 2, 3, 4, 5, 6, 7];
// const array3 = [11, 22, 33, 44, 55, 66, 77];

// // Traditional Method
// const elem = array1[0];
// const secondElem = array1[1]; 

// // Destructuring Method
// const [a, b] = array1; 
// console.log(`a: ${a}, b: ${b}`); // a: A, b: B
// const [A, B, ...rest] = array1; //... AKA spread operator. Spreads the rest of the elems here
// console.log(`A ${A}`); // A 
// console.log(`B ${B}`); // B
// console.log(`rest ${rest}`); // [ 'C', 'D', 'E', 'F', 'G' ]

// // // Concat two arrays by destructuring and spreading
// const newArray = [...array1, ...array2];
// console.log(newArray); // can be also done using below method
// const otherNewArray = array1.concat(array2);
// console.log(otherNewArray);

// const newArray1 = [...array1, ...array2, ...array3];
// console.log(newArray1); // can be also done using below method
// const otherNewArray1 = array1.concat(array2).concat(array3);
// console.log(otherNewArray1);


// // Destructuring used with functions
// let sumAndMultiply = (a, b) => {
//   return [a + b, a * b];
// };
// let [sum, multiply] = sumAndMultiply(2, 3);
// console.log(sum, multiply);

// // Destructuring used with functions and default values
// let [sum1, multiply1, division1 = "This is the default value"] = sumAndMultiply(
//   2,
//   3
// ); // default value can be set here if the function doesnt return the value for that variable (division1)
// console.log(sum1, multiply1, division1); // 5 6 This is the default value
// let sumAndMultiply1 = (a, b) => {
//   return [a + b, a * b, a / b];
// };
// let [
//   sum2,
//   multiply2,
//   division2 = "Value will be returned and this will be overrriden",
// ] = sumAndMultiply1(2, 3); // default value can be set here if the function doesnt return the value for that variable (division1)
// console.log(sum2, multiply2, division2); // 5 6 0.6666666666666666

// Object Destructuring
// const myPersonObj1 = {
//   name: "John",
//   age: 22,
//   address: {
//     city: "Doe City",
//     state: "Doe State",
//   },
// };

// const { name, age } = myPersonObj; // obj destructuring
// console.log(name, age); // John 22

// const { name: myCustomVarName } = myPersonObj; // custom obj Destructuring. Value is assigned to a custom variable
// console.log(`myCustomVarName ${myCustomVarName}`); // John

// Default obj Destructuring
// const myPersonObj = {
//   name: "John",
//   age: 22,
//   address: {
//     city: "Doe City",
//     state: "Doe State",
//   },
// };

// let{ name: myCustomName1, defaultObjName = "This Default Value"} = myPersonObj; // Default obj Destructuring with custom variable name
// console.log(defaultObjName); // This is the Default Value
// console.log(myPersonObj);
// myPersonObj.defaultObjName = "This is the new value";
// console.log(myPersonObj); // We can also later modify the value of the default obj and assign it to a new value of the original obj


// Function Based object Destructuring
// const personeOne = {
//   name: "John",
//   age: 24,
//   address: {
//     city: "some city",
//     state: "my state",
//   },
// };

// const myFunct = ({ name, age }) => {
//   // Function based based destructuring
//   console.log(`The name fetched from obj ${name}, and the age ${age}`);
// };

// myFunct(personeOne);

// // REST Operator
// Rest operator is used to pass in any number of arguments to a function
// const myRestFunction = (...args) => {
//   console.log(args); // [1, 2, 3, 4, 5]
//   console.log(args.at(1)); // 2 (at() is a method of array which returns the value at the index passed in the arg)
// };
// myRestFunction(1, 2, 3, 4, 5); // pass in any number of args

// TERNARY OPERATOR
// WITHOUT TERNARY
// let checkAge = (age) => {
//   if (age > 18) {
//     return "adult";
//   } else {
//     return "Not Adult";
//   }
// };
// console.log(checkAge(15));
// console.log(checkAge(19));

// // // WITH TERNARY
// let checkAge1 = (age) => (age > 18 ? "Adult" : "Not Adult"); // (condition ? if true returning part : else returning part)
// // console.log(checkAge1(15));
// // console.log(checkAge1(19));

// const checkAge2 = (age) => {
//   return age > 18 ? "adult" : "Not Adult";
// };
// console.log(checkAge2(15));
// console.log(checkAge2(19));

// // LONG TERNARY OPERATIONS
// const checkEven = (val) => {
//   let newVal;
//   let newVal2;
//   val % 2 == 0 // Condition
//     ? ((newVal = val + 2), console.log(`Even ${newVal}`)) // if operation comma(,) separated
//     : ((newVal2 = val + 3), console.log(`Not Even ${newVal2}`)); // else operations
// };
// checkEven(5);

// // Multi Ternary

// let firstCheck = false,
//   secondCheck = false,
//   access = firstCheck
//     ? "Access Denied 1"
//     : secondCheck
//     ? "Access Denied 2"
//     : "Access Granted";
// console.log(access);

// Ternary Function Calls

// const number = 50;
// let result;

// const user = {
//   save() {
//     console.log("user saved");
//     return true;
//   },
//   printErrors() {
//     console.log("Error Occurred");
//     return false;
//   },
//   valid: true, // toggle this to see the ternary in action
// };
// console.log(user.valid);
// user.valid = user.valid ? user.save() : user.printErrors();
// console.log(user.valid);

// ITERATORS
// https://livecodestream.dev/post/how-to-use-generator-and-yield-in-javascript/
// let log = console.log;
// function* myFunc22(array) {
//   // Generator Function that spits out values (iterable)
//   for (let i of array) {
//     yield i;
//   }
// }
// let myArr = Array.from(Array(10).keys());
// const myGenerator = myFunc22(myArr);
// log(myGenerator.next());
// log(myGenerator.next());
// log(myGenerator.next());
// log(myGenerator.next());
// log(myGenerator.next());

// const myGenerator1 = myFunc22(myArr);
// while (!myGenerator1.next().done) {
//   log(myGenerator1.next());
// }

// const myGenerator2= myFunc22(myArr);
// for (const val of myGenerator2) {
//   log(val);
// }
// // Multiple yield
// function* iterableObj() {
//   yield "I";
//   yield "am";
//   yield "iterable.";
// }

// for (const val of iterableObj()) {
//   console.log(val);
// }

// Generator that generates a sequence using infinite loop
// function* infiniteSequence() {
//   let num = 0;
//   while (true) {
//     yield num;
//     num += 1;
//   }
// }
// const infiniteSequenceGenerator = infiniteSequence();
// log(infiniteSequenceGenerator.next());
// log(infiniteSequenceGenerator.next());
// log(infiniteSequenceGenerator.next());
// log(infiniteSequenceGenerator.next());
// log(infiniteSequenceGenerator.next());

// **********************************************************************************************
// OOP JS
// ****************************** INHERITANCE ******************************
// Inheritance -> Two types classical and prototypical
// Classical Inheritance -> ES6 Classes
// Super
// class Car {
//   constructor(options) {
//     this.title = options.title;
//   }
//   drive() {
//     // add a function to these Car class
//     return "vroom";
//   }
// }

// class Toyota extends Car {
//   constructor(options) {
//     super(options);
//     this.price = options.price;
//     this.model = options.model;
//     console.log(`THIS ${JSON.stringify(this)}`);
//   }
//   honk() {
//     console.log("beep");
//   }
// }
// const carObj = new Toyota({ title: "Toyota", price: 1111111, model: "supra" });
// carObj.drive();
// carObj.honk();
// console.log(carObj);

// // METHOD OVERLOADING, METHOD OVERRIDING
// // JS doesn't support Overloading - Two Function can't have same name
// // OVERRIDING
// class One {
//   func1 = () => console.log("YO!");
//   func2 = () => console.log("YO!");
// }
// class Two extends One {
//   func1 = () => console.log("OPPA!");
// }

// let twoObj = new Two();
// console.log(twoObj.func1()); // Called from  class Two
// console.log(twoObj.func2()); // Ca;led from class One

// // PRIVATE PROPERTY
// class MyClass {
//   myVar = 1212;
//   a = function () {
//     console.log(this.myVar);
//   };
//   #privateAccessor = "private stuff"; // Wont be part of the object cannot be called by the instance obj below
//   myFunc = () => {
//     console.log(this.#privateAccessor); // Can be accessed within the class
//   };
//   #privateFunc() {
//     console.log("This is a private function");
//   }
//   privateCaller() {
//     console.log(this.#privateFunc());
//   }
// }
// let clasObj = new MyClass();
// console.log(clasObj); // Because class are still obj
// console.log(clasObj.myFunc()); // Because class are still obj
// // console.log(clasObj.#privateFunc()); // cannot be called
// console.log(clasObj.privateCaller());

// class Child extends MyClass {
//   myfunc2() {
//     console.log(this.myVar);
//     // console.log(this.#privateAccessor); // Will get error cannot be accessed
//   }
// }

// let childObj = new Child();
// console.log(childObj.myfunc2());

// Prototypical Inheritance
// Define a Person object
// const Person = {
//   init: function(name, age) {
//     this.name = name;
//     this.age = age;
//   },
//   introduce: function() {
//     console.log("Hi, my name is " + this.name + " and I'm " + this.age + " years old.");
//   }
// };

// // Create a new object based on the Person prototype
// const person1 = Object.create(Person);
// person1.init("John", 30);
// person1.introduce(); // "Hi, my name is John and I'm 30 years old."

// // Create another object based on the Person prototype
// const person2 = Object.create(Person);
// person2.init("Jane", 25);
// person2.introduce(); // "Hi, my name is Jane and I'm 25 years old."

// Person.sayHello = () => console.log("Hello");
// person1.sayHello(); // "Hello"
// person2.sayHello(); // "Hello"
