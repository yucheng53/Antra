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
