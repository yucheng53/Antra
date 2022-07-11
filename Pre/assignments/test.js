const longest = (str) => {
    let longestArr = [];
    let maxArr = [];
    console.log(str.slice(0,2).includes(str[3]));
    for(let i = 0 ; i < str.length; i++) {
        let tempStr = str[i];
        let tempMax = 1;
        for(let j=i+1; j < str.length; j++) {
            if(str.slice(i,j).includes(str[j])){
                break;
            }
            tempStr += str[j];
            tempMax ++;
        }
        longestArr.push(tempStr);
        maxArr.push(tempMax);
    }
    maxArr.sort(function(a,b){return b - a});
    for(let i = 0; i < longestArr.length; i++) {
        if(longestArr[i].length === maxArr[0]) {
            return longestArr[i];
        }
    }
}
console.log(longest("abcddbcasrrrsba"));