/* ~~~~~~~~~~~~~~ Day 3 ~~~~~~~~~~~~~~
//~ rest parameter vs. spread operator
// function foo(a, b, ...args) { // take
//   console.log(args);
// }
// foo(3, 4, 5, 7, true);

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
// console.log(copyobj);

//~ object copy
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

// const obj3 = structuredClone(obj);
// console.log(obj3);

// // Lodash | _.cloneDeep() Method

//~ this
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
// myObj.abc();

// class Person {
//   constructor(name, age) {
//     this.name = name;
//   }

//   show() {
//     console.log(`${this.name}`);
//   }
// }
// const p = new Person('RR', 12)

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

//~ arrow function
// function foo() {
//   console.log(arguments);
// }

//~ high order function, curring, closure
// function foo(n) {
//   function sum(m) {
//     return n + m;
//   }
//   return [sum];
// }
// const [bar] = foo(4);
// bar(5)
//^ ~~~~~~~~~~~~~~~~ interview ~~~~~~~~~~~~~~~~
//~ 1
// const target = (a, b) => console.log(a + b);
// const fn = limitedFunction(5, target); // target, counter = 0
// fn(2, 3); // 5; // 1
// fn(1, 3); // 4; // 2
// fn(2, 6); // 8; // 3
// fn(6, 3); // 9; // 4
// fn(2, 3); // 5; // 5
// fn(2, 3); // over limited
// fn(2, 3); // over limited
// fn(2, 3); // over limited
// fn(2, 3); // over limited
// const fnone = limitedFunction(5, target); // target, counter = 0 
// function limitedFunction(num, target){
//   let counter = 0;

//   return function(...args) { // rest parameter
//     if (counter === num) {
//       console.log('over limited');
//     } else {
//       target(...args); // spread operator
//       counter++;
//     }
//   }
// }
//~ 2
// const callback1 = (a) => a + 2; // 7
// const callback2 = (b) => b * 2; // 14
// const callback3 = (c) => c - 2; // 0

// console.log(runAll(callback1, callback2, callback3)(8)); // 2

// function runAll(...args) {
  
//   return function(num) {
//     return args.reduce((acc, cur) => cur(acc), num);
//     // let res = num;
//     // while (args.length) {
//     //   const cb = args.shift();
//     //   res = cb(res);
//     // }
//     // return res;
//   }
// }

//~ event loop

// for (let i = 0; i < 5; i++) {
//   // (function(ii) {
//     setTimeout(() => console.log(i), (5 - i) * 1000);
//   // })(i);
// }

// call stack: [() => console.log(4)],
// web api, async api: 
// () => console.log(0) 5s
// () => console.log(1) 4s
// () => console.log(2) 3s
// () => console.log(3) 2s
// () => console.log(4) 1s
/* 
  tasks queue: [
    () => console.log(4)
    () => console.log(3)
    ....
  ] 
  
*/

// function foo() {
//   var a = 0;
// }
// foo();
// console.log(a);
// 0, 1, 2, 3, 4

//^ ~~~~~~interview question~~~~~~~~~~~~
const first = [
    { userid: 2, name: 'Velen' },
    { userid: 56, name: 'Illidan' },
    { userid: 23, name: 'Muradin' },
    { userid: 12, name: 'Sylvanas' },
    { userid: 44, name: 'Cenarius' },
    { userid: 4, name: 'Gul\'Dan' }
];
const second = [
    { userid: 2, role: 'Mage' },
    { userid: 4, role: 'Worlock' },
    { userid: 56, role: 'Demon Hunter' },
    { userid: 66, role: 'Druid' },
    { userid: 87, role: 'Shaman' },
    { userid: 12, role: 'Hunter' },
];
function solution(farr, sarr) {
  const arr = [...farr, ...sarr];
  const map = {};
  // {
  //   2: { userid: 2, name: 'Velen' },
  // }
  arr.forEach(ele => {
    map[ele.userid] = {
      ...{userid: null, name: null, role: null},
      ...map[ele.userid],
      ...ele,
    }
  })
  return  Object.values(map);
}
console.log(solution(first, second));

// [
//   { userid: 2, name: 'Velen', role: 'Mage' },
//   { userid: 56, name: 'Illidan', role: 'Demon Hunter' },
//   { userid: 23, name: 'Muradin', role: null },
//   { userid: 12, name: 'Sylvanas', role: 'Hunter' },
//   ...
//   { userid: 87, name: null, role: 'Shaman' },
// ]

//* ~~~~~~~~~~~~~~ Day 4 ~~~~~~~~~~~~~~
//todo: callback function & callback hell

//todo: Promise & MyPromise

//todo: fetch & myFetch

//* ~~~~~~~~~~~~~~ TodoList ~~~~~~~~~~~~~~

//* ~~~~~~~~~~~~~~ Evaluation ~~~~~~~~~~~~~~