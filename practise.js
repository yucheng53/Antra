//prototype
// function Animal(name,legs) {
//     this.spec = "mammal";
//     this.name = name;
//     this.legs = legs;
// }

// Animal.prototype.color = "red";
// Animal.prototype.eat = function () {console.log("I am eating")};

// function Dog(name,legs,cate) {
//     Animal.call(this, name, legs,cate);
//     this.category = cate;
// }
// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;
// const dog = new Dog("Jojo", 4, "xxx");
// console.log(Dog.prototype.constructor)
// dog.eat();

// const cat = new Animal();
// console.log(cat.color);
// cat.eat();

//loop
// const values = [1, 2, 3, 4, 5];
// const evens = values.filter( val => val % 2 === 0 );
// console.log(evens);

// Array.prototype.myForEach = function(callback) {
//     for(let i = 0; i < this.length; i++) {
//         callback(this[i], i, this);
//     }
// }

// arr.myForEach(function(cur,i,self){self[i]=cur+1});
// console.log(arr);

// Array.prototype.myMap = function(callback) {
//     for(let i = 0; i < this.length; i++) {
//         let arr = [];
//         arr.push(callback(this[i], i, this));
//         return arr;
//     }
// }
// let arr = "abcdef"
// Array.prototype.myReduce = function(...args) {
//     let[acc,index] = args.length < 2 ? [this[0], 1] : [args[1], 0];
//     for(let i = index; i < this.length; i++) {
//         acc = args[0](acc, this[i], i, this)
//     }
//     return acc;
// }
// console.log(arr.split("").myReduce((acc,cur)=>acc+cur+cur,""));
// function foo(arr) {
//   return arr.myReduce((acc, cur) => ({...acc, [cur.name]: cur.age}), {});
// }
// const input = [
// 	{ name: "TT", age: 12 },
// 	{ name: "DD", age: 32 },
// 	{ name: "SS", age: 22 },
// ];
// console.log(foo(input));

// Array.prototype.myReduce = function (...args) {
// 	let [acc, index] = args.length < 2 ? [this[0], 1] : [args[1], 0];

// 	for (let i = index; i < this.length; i++) {
// 		acc = args[0](acc, this[i], i, this);
// 	}
// 	return acc;
// };

// const str = 'abc';
//  // ['a', 'b', 'c']

// console.log(str.split('').myReduce((acc, cur) => acc + cur + cur, ''));

//~~~~~~~~~~~~~~~~~~~
//rest vs spread
console.log([..."abc"]);
// object copy
//shallow copy vs depp cpoy or clone
// const obj ={
//     name:"TT",
// }
// const obj2 = obj;
// const obj3 = {...obj};

// JSON.stringify({})  //some disadvantages 
// JSON.parse('{"hello":"hello world"}')

// const obj4 = structuredClone(obj); //still has problem with functions

//Lodash | _.cloneDeep() Method; real deep clone;

//this
//default --> global object; in browser is the window / in terminall it is the node global object;
//
// console.log(this);
//bind, call, apply -for functions
//const print = pringName.bind(obj) return a new function  //lazy
//print(12,'Antra');

//printName.call(obj, 12, 'Antra'); //eager
//printName.apply(obj, [12,'Antra']) //eager

//~~~arrow function
//not syntax surger could bind this to current scope object;

//~~~hgih order function, curring, closure
//like chaining
//~~~~interview

//event loop
// var i;
// for(i =0; i < 5; i++) {
//     setTimeout(() => console.log(i), i * 1000);
// }
//~~~~~Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);

const mapTest = new Map();
mapTest.set("name", "Cheng");

console.log(fruits, mapTest[name]);