import Myclass from "./es6Modules.js";
import { Myclass1, Myclass2, Myclass3 as Myclass4 } from "./es6Modules.js";
// as can be used for alias of the importing property

let myObj = new Myclass("John");
let myObj1 = new Myclass1("John");
let myObj2 = new Myclass4("John");
console.log(myObj);
console.log(myObj1);
console.log(myObj2);
