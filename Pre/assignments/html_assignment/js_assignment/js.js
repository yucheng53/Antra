// 1.Reverse a number
function reverse(num) {
    num = num + "";
    var num2 = Number(num.split("").reverse().join(""));
    return num2;
}
console.log(reverse(32243));

//2.Check palindrome
function palin(str) {
    if (str.split("").reverse().join("") === str) {
        return true;
    }
    return false;
}
console.log(palin(""));

//3.Combinations
function combi(str) {
    var arr = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = i; j < str.length; j++) {
            arr.push(str.slice(i, j + 1));
        }
    }
    return arr;
}
console.log(combi("dog"));

//4.alphabetical order
function alpha(str) {
    var aToZ = "abcdefghijklmnopqrstuvwxyz";
    var str2 = "";
    str = str.toLowerCase();
    for (let i = 0; i < aToZ.length; i++) {
        for (let j = 0; j < str.length; j++) {
            if (aToZ[i] == str[j]) {
                str2 += str[j];
            }
        }
    }
    return str2;
}

console.log(alpha("Webmaster"));

//5.to uppercase
function toUpper(str) {
    var aToZ = "abcdefghijklmnopqrstuvwxyz";
    var str2 = str[0].toUpperCase();
    for (let i = 1; i < str.length; i++) {
        if (!aToZ.includes(str[i - 1])) {
            str2 += str[i].toUpperCase();
        } else {
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
    for (let i = 1; i < arr.length; i++) {
        if (max < arr[i].length) {
            max = arr[i].length;
            index = i;
        }
    }
    return arr[index];
}
console.log(longest("Web Development Turorial"));

//7. find all the vowels
function vowel(str) {
    var refer = "aeiouAEIOU";
    var num = 0;
    for (let i = 0; i < str.length; i++) {
        if (refer.includes(str[i])) {
            num++;
        }
    }
    return num;
}
console.log(vowel("The quick brown fox"));

//8.check prime or not
function prime(num) {
    if (num < 2) {
        return false;
    }
    if (num === 2) {
        return true;
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }
}
console.log(prime(4));

//9.return type
function type(var1) {
    return typeof var1;
}
console.log(type("hello"));

//10.n * n matirx
function matrix(num) {
    for (let i = 0; i < num; i++) {
        var str = "";
        for (let j = 0; j < num; j++) {
            str += "*";
        }
        console.log(str);
    }
}
matrix(4);

//11. second lowest and greatest numbers;
function secon(arr) {
    var result = [];
    arr.sort((a, b) => {
        return a - b;
    });
    result.push(arr[1]);
    result.push(arr[arr.length - 2]);
    return result;
}
console.log(secon([1, 5, 2, 4, 3, 8, 6]));

//12. perfect numbers
function perfec(num) {
    if (num < 1) return false;
    var arr = [];
    var sum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            arr.push(i);
        }
    }
    for (let j = 0; j < arr.length; j++) {
        sum += arr[j];
    }
    if (sum === num) {
        return true;
    } else {
        return false;
    }
}
console.log(perfec(496));

//13. find factors
function factor(num) {
    var factors = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            factors.push(i);
        }
    }
    return factors;
}
console.log(factor(10));

//14. convert an amount to coins
function toCoins(num, arr) {
    var result = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < parseInt(num / arr[i]); j++) {
            result.push(arr[i]);
        }
        num = num % arr[i];
    }
    return result;
}
console.log(toCoins(46, [25, 10, 5, 2, 1]));

//15. compute the value of bn
function power(b, n) {
    return Math.pow(b, n);
}
console.log(power(-2.5, 3));

//16. extarct unique characters from a string
const unique = (str) => {
    var result = "";
    for (let i = 0; i < str.length; i++) {
        if (!result.includes(str[i])) {
            result += str[i];
        }
    }
    return result;
};
console.log(unique("thequickbrownfoxjumpsoverthelazydog"));

//17. occurrences
function occur(str) {
    for (let i = 0; i < str.length; i++) {
        let count = 0;
        for (let j = 0; j < str.length; j++) {
            if (str[i] == str[j] && i > j) {
                break;
            }
            if (str[i] == str[j]) {
                count++;
            }
        }
        if (count > 0) {
            console.log(`${str[i]} : ${count}`);
        }
    }
}
occur("hello");

//18. binary search
function binary(arr, val, start, end) {
    if (start > end) return false;
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === val) {
        return true;
    }
    if (arr[mid] > val) {
        return binary(arr, val, start, mid - 1);
    } else {
        return binary(arr, val, mid + 1, end);
    }
}
console.log(binary([1, 3, 5, 7, 8, 9], 6, 0, 5));

//19. array elements larger than a number
function larger(arr, num) {
    let newArr = [];
    for (let i of arr) {
        if (i > num) {
            newArr.push(i);
        }
    }
    return newArr;
}
console.log(larger([1, 2, 43, 32, 12, 34, 7, 9, 0], 5));

//20. random id
function generateId(length) {
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var result = "";
    for (var i = 0; i < length; i++) {
        result += string[Math.floor(Math.random() * string.length)];
    }
    return result;
}
console.log(generateId(10));

// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array.
function subset(arra, arra_size)
{
var result_set = [], 
    result;
for(var x = 0; x < Math.pow(2, arra.length); x++) {
    result = [];
    i = arra.length - 1; 
    do
    {
    if( (x & (1 << i)) !== 0)
        {
            result.push(arra[i]);
        }
    }  while(i--);

if( result.length >= arra_size)
    {
        result_set.push(result);
    }
}

return result_set; 
}

console.log(subset([1, 2, 3], 2));

/*
22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. 
*/
function countLet(str, letter) {
    let count = 0;
    for(let i = 0; i < str.length; i++) {
        if(str[i] === letter) {
            count ++;
        }
    }
    return count;
};
console.log(countLet("hello", "l"));

/*
23. Write a JavaScript function to find the first not repeated character. 
*/
function firstNotRep(string) {
    for(let i = 0; i < string.length; i++) {
        let count = 1;
        for(let j = 0; j < string.length; j++) {
            if(string[i] === string[j] && i != j){
                count ++;
                break;
            }
        }
        if(count === 1) {
            return string[i];
        }
    }
}
console.log(firstNotRep("abacddbec"));

/*
24. Write a JavaScript function to apply Bubble Sort algorithm. 
*/
function bubbleSort(arr) {
    for(let i = 0; i < arr.length-1; i++) {
        for(let j = 0; j < arr.length-1-i; j++)
        if(arr[j] < arr[j+1]) {
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
    return arr;
}
console.log(bubbleSort([234, 43, 55, 63,  5, 6, 235, 547]));

/*
25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. 
*/
function longestCountry(arr) {
    let result = arr[0];
    for (let i of arr) {
        if(i.length > result.length) {
            result = i;
        }
    }
    return result;
}
console.log(longestCountry(["Australia", "Germany", "United States of America"]));


/*
26. Write a JavaScript function to find longest substring in a given a string without repeating characters
*/
function lengthOfLongestSubstring(s) {
    let count = 0;
    let longestArr = [];
    let tempArr = [];
    let strArr = s.split("");
    if (strArr.length !== 0) {
        tempArr[0] = strArr[0];
        longestArr[0] = strArr[0];
        for (let j = 0; j < strArr.length; j++) {
            for (let i = j + 1; i < strArr.length; i++) {
                if (tempArr.includes(strArr[i])) {
                    if (tempArr.length >= longestArr.length) {
                        longestArr = tempArr;
                        tempArr = [];
                        count = 0;
                        tempArr[count] = strArr[j + 1];
                        break;
                    } 
                    else {
                        tempArr = [];
                        count = 0;
                        tempArr[count] = strArr[j + 1];
                        break;
                    }
                } 
                else {
                    count++;
                    tempArr[count] = strArr[i];
                }
            }
        }
    } 
    else {
        return false;
    }
    if (tempArr.length >= longestArr.length) {
        longestArr = tempArr;
    }
    return longestArr.join("");
};
console.log(lengthOfLongestSubstring("abcddbcasrrrsbad"));

/*
27. Write a JavaScript function that returns the longest palindrome in a given string. 
*/
function longestPalSubstr(str) {
    let n = str.length; 
    if (n < 2) return n; 
    let maxLength = 1,
    start = 0;
    let low, high;
    for (let i = 0; i < n; i++) {
        low = i - 1;
        high = i + 1;
        while (high < n && str[high] == str[i])
        high++;
        while (low >= 0 && str[low] == str[i])
        low--;
        while (low >= 0 && high < n && str[low] == str[high]) {
            low--;
            high++;
        }
        let length = high - low - 1;
        if (maxLength < length) {
        maxLength = length;
        start = low + 1;
        }
    }
    return str.substring(start, maxLength + start);
}
console.log(longestPalSubstr("abaddsljdsljalssasssjdlsjdl"))

/*
28. Write a JavaScript program to pass a 'JavaScript function' as parameter. 
*/
function func(str) {
    console.log(str);
}
function callFunction(func, str) {
    func(str);
}
callFunction(func,"hello");

//29. get the function name.
function getName() {
    return getName.name;
}
console.log(getName());