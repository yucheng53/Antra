// 1.Reverse a number
function reverse(num)
{
	num = num + "";
	var num2 = Number(num.split("").reverse().join(""));
    return num2;
}
console.log(reverse(32243));

// function reverse2(num) {
//     num = num + "";
//     var str2 = "";
//     for(let i = num.length-1 ;i>=0;i--) {
//         str2 += num[i];
//     }
//     return str2;
// }
// console.log(Number(reverse2(12345678)));

//2.Check palindrome
function palin(str) {
    if(str.split("").reverse().join("") === str) {
        return true;
    }
    return false;
}
console.log(palin(""));

//3.Combinations
function combi(str) {
    var arr = [];
    for(let i = 0; i < str.length;i++) {
        for(let j = i+1; j < str.length;j++ ){
            arr.push(str.slice(i,j+1));
        }
    }
    return arr;
}
console.log(combi("hello"));

//4.alphabetical order
function alpha(str) {
    var aToZ = "abcdefghijklmnopqrstuvwxyz"
    var str2 = "";
    str = str.toLowerCase();
    for(let i=0; i<aToZ.length;i++) {
        for(let j=0; j<str.length;j++) {
            if(aToZ[i] == str[j]){
                str2 += str[j];
            }
        }
    }
    return str2;
}

console.log(alpha("Webmaster"));

//5.to uppercase
function toUpper(str) {
    var aToZ = "abcdefghijklmnopqrstuvwxyz"
    var str2 = str[0].toUpperCase();
    for(let i=1; i<str.length; i++) {
        if(!aToZ.includes(str[i-1])) {
            str2 += str[i].toUpperCase();
        }
        else {
            str2 += str[i];
        }
    }
    return str2;
}
console.log(toUpper("the quick brown fox"));

//6.find the longest
function longest(str) {
    var arr = str.split(" ");
    var max = arr[0].length;
    var index = 0;
    for(let i=1; i<arr.length; i++) {
        if(max < arr[i].length) {
            max = arr[i].length;
            index = i;
        }
    }
    return arr[index];
}
console.log(longest("Web Development Turorial"))

//7. find all the vowels
function vowel(str) {
    var refer = "aeiouAEIOU";
    var num = 0;
    for(let i=0; i<str.length; i++) {
        if(refer.includes(str[i])) {
            num ++;
        }
    }
    return num;
}
console.log(vowel("The quick brown fox"))

//8.check prime or not
function prime(num) {
    if(num < 2) {
        return false;
    }
    if(num === 2) {
        return true;
    }
    else {
        for(let i=2; i<num; i++) {
            if(num % i === 0) {
                return false;
            }
        }
        return true;
    }
}
console.log(prime(4));

//9.return type
function type(var1) {
    return typeof(var1);
}
console.log(type("hello"));

//10.n * n matirx
function matrix(num) {

    for(let i = 0; i < num; i++) {
        var str = "";
        for(let j = 0; j < num; j++) {
            str += "*";
        }
        console.log(str);
    }
}
matrix(4);

//11. second lowest and greatest numbers;
function secon(arr) {
    var result = [];
    arr.sort((a,b)=> {return a - b} );
    result.push(arr[1]);
    result.push(arr[arr.length-2]);
    return result;
}
console.log(secon([1,5,2,4,3,8,6]));

//12. perfect numbers
function perfec(num) {
    if(num < 1) return false;
    var arr = []
    var sum = 0;
    for(let i = 1; i < num; i++) {
        if( num % i === 0) {
            arr.push(i);
        }
    }
    for(let j = 0; j < arr.length; j++) {
        sum += arr[j];
    }
    if(sum === num) {
        return true;
    }
    else {
        return false;
    }
}
console.log(perfec(496));

//13. find factors
function factor(num) {
    var factors = [];
    for(let i = 1; i <= num; i++) {
        if(num % i === 0 ) {
            factors.push(i);
        }
    }
    return factors;
}
console.log(factor(10));

//14. convert an amount to coins
function toCoins(num, arr) {
    var result = [];
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < parseInt(num/arr[i]); j++) {
            result.push(arr[i]);
        }
        num = num % arr[i];
    }
    return result;
}
console.log(toCoins(46,[25,10,5,2,1]));

//15. compute the value of bn
function power(b, n) {
        return Math.pow(b,n)
    }
console.log(power(-2.5,3));

//16. extarct unique characters from a string
const unique = (str) => {
    var result = "";
    for(let i = 0; i < str.length; i++) {
        if(!result.includes(str[i])){
            result += str[i];
        } 
    }
    return result;
}
console.log(unique("thequickbrownfoxjumpsoverthelazydog"));

//17. occurrences
function occur(str) {
    let result = {};
    for
}