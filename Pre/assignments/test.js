// const longest = (str) => {
//     let longestArr = [];
//     let maxArr = [];
//     console.log(str.slice(0,2).includes(str[3]));
//     for(let i = 0 ; i < str.length; i++) {
//         let tempStr = str[i];
//         let tempMax = 1;
//         for(let j=i+1; j < str.length; j++) {
//             if(str.slice(i,j).includes(str[j])){
//                 break;
//             }
//             tempStr += str[j];
//             tempMax ++;
//         }
//         longestArr.push(tempStr);
//         maxArr.push(tempMax);
//     }
//     maxArr.sort(function(a,b){return b - a});
//     for(let i = 0; i < longestArr.length; i++) {
//         if(longestArr[i].length === maxArr[0]) {
//             return longestArr[i];
//         }
//     }
// }
// console.log(longest("abcddbcasrrrsba"));

// //7/11
// //~prototype 
// function Person() {
//     this.name = " TT";
//     }
// Person.prototype.show = function() {
//     console.log(this.name);
// }
// function Employee() {
//     Person.call(this);
//     }
// Employee.prototype = Object.create(Person.prototype);
// Employee.prototype.constructor =  Employee;
// console.log(Employee.prototype.constructor);
// const e = new Employee();
// e.show();

// //~loop~
// const obj = {
//     name: "TT",
//     age:34,
// }
// const arr = [1, 2,4,3]
// for(let i in arr) {
//     console.log(typeof(i));
// }

// for(const key in  obj) {
//     console.log(obj[key]);
// }
// Object.values(obj);
// Object.keys(obj);
// Object.entries(obj);
// for (const num of arr) {
//     console.log(num);
// }
// console.log(arr.forEach(function(num){
//     if(num === 2) {
//         return;//continue;   can't use break or continue;
//     }
//     console.log(num);
//     return num;
// }))

// Array.prototype.myForEach = function(callback) {
//     for(let i = 0; i < this.length; i++) {
//         callback(this[i], i, this);
//     }
// }
// arr.myForEach(function (cur, i, self){
//     self[i] = cur +1;
// })

const str = "abc";
str.split("");
console.log(str.split("").reduce((acc, cur) => acc+cur+cur, ""));
//console.log(str.split("").reduce((acc, cur, i, self) => {}, initialValue))
//array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

function foo(arr) {
    // const obj = arr.reduce((acc, cur)=> {
    //     acc[cur.name] = cur.age;
    //     return acc;
    // },{});
    // return obj;
    return arr.reduce((acc, cur) => ({...acc,[cur.name]: cur.age}) ,{});
}
const input = [
    {name: "TT", age: 12},
    {name: "td", age: 13},
    {name: "dd", age: 14}
];
console.log(foo(input));

//destructure