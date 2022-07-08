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
    var arr = str.split("");
    var arr2 = [];
    for(let i = 0; i < arr.length;i++) {
        for(let j = i; j < arr.length;j++ ){
            arr2.push(arr[j])
        }

    }
}
