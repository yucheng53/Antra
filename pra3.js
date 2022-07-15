import {fetch} from 'node-fetch';

// function foo(a, b, ...args) {
//     console.log(args);
//     args.pop();
// }
// foo(1,2,3,4,true,"hello")

// const arr = [1, 2, 3];
// const copyarr = [1, ...arr, 5];
// const obj = {
//   name: 'TT',
//   company: 'Antra'
// }
// const copyobj = {
//   ...obj,
//   name: 'DD',
//   age: 45
// };
// console.log(copyarr);
// console.log(copyobj);

// // shallow copy, deep copy or clone
// const obj = {
//   name: 'TT',
//   company: 'Antra',
//   isOpen: false,
//   id: 124,
//   children: [1, 2, 3],
//   date: new Date(),
//   // foo: function() {}
// };
// const obj1 = obj;

// const obj2 = {...obj};
// obj.children[0] = 452;
// // console.log(obj2.children[0]);

// console.dir(obj, JSON.parse(JSON.stringify(obj)));

//const obj3 = structuredClone(obj);
//console.log(obj3);

// // Lodash | _.cloneDeep() Method

// function foo() {
//   console.log(this);
// }
// foo();

// const myObj = {
//   pi: 3.14,
//   foo: function() {
//     console.log('foo: ', this); // <------

//     // function bar() {
//     //   console.log('bar: ', this);
//     // }
//     // const baz = bar.bind(this); // <------
//     const bar = () => {
//       console.log('bar: ', this);
//     }
//     bar();
//   },
//   abc: () => {
//     console.log('abc: ', this);
//   }
// }
// myObj.foo();

// class Person {
//   constructor(name, age) {
//     this.name = name;
//   }

//   show() {
//     console.log(this.name);
//   }
// }
// const p = new Person('RR', 12)
// p.show();


//~ bind, call, apply
// const obj = {
//   wer: 'RR'
// }

// function printName(age, company) { //100
//   console.log(this.wer, age, company);
// }

// const print = printName.bind(obj); // lazy 1
// print(12, 'Antra'); // 100

// printName.call(obj, 12, 'Antra'); //eager // 1 + 100
// printName.apply(obj, [12, 'Antra']); // 1 + [].length === 100

// var func = function() {
//     let a = 0;
//     return function(){
//         console.log(a++);
//     }
// }

// var f = func();
// f();
// f();
// f();
// f();

// function foo(n) {
//   function sum(m) {
//     return n - m;
//   }
//   return [sum];
// }
// const [bar] = foo(4);
// console.log(bar(5))

//~~~~~Promise
// new Promise(function (resolve, reject) {
//   var a = 0;
//   var b = 0;
//   if (b == 0) reject("Divide zero");
//   else resolve(a / b);
// }).then(function (value) {
//   console.log("a / b = " + value);
// }).catch(function (err) {
//   console.log(err);
// }).finally(function () {
//   console.log("End");
// });

//interview
// const callback1 = (a) => a + 2; // 7
// const callback2 = (b) => b * 2; // 14
// const callback3 = (c) => c - 2; // 0

// console.log(runAll(callback1, callback2, callback3)(8)); // 2

// function runAll(...args) {
  
//   return function(num) {
//     return args.reduce((acc, cur) => cur(acc), num);
//     let res = num;
//     console.log(args);
//     while (args.length) {
//       const cb = args.shift();
//       res = cb(res);
//     }
//     return res;
//   }
// }
// for (let i = 0; i < 5; i++) {
//   // (function(ii) {
//     setTimeout(() => console.log(i), (5 - i) * 1000);
//   // })(i);
// }
// const resolvedProm = Promise.resolve(33);

// let thenProm = resolvedProm.then(value => {
//     console.log("this gets called after the end of the main stack. the value received and returned is: " + value);
//     return value;
// });
// // instantly logging the value of thenProm
// console.log(thenProm);

// // using setTimeout we can postpone the execution of a function to the moment the stack is empty
// setTimeout(() => {
//     console.log(thenProm);
// });

fetch('https://www.leixuesong.com')
.then(response => response.json())
.then(json => console.log(json))
.catch(err => console.log('Request Failed', err));