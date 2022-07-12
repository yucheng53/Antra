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
let sum = 0;
const arr = [1,2,3,4,5];
function sums(i) {
    sum += i;
    return sum;
}
console.log(arr.forEach(sums))