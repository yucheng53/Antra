const state = {
    a: "apple",
    b: "banana",
    c: "city",
    d: "dom",
    e: "end",
    f: "forEach",
    g: "gesdrwesf"
};
var allAlpha = [];
var allWords = [];
var alpha = document.getElementById("alpha");
var words = document.getElementById("word");

for (let i = 0; i < alpha.options.length; i++) {
    allAlpha.push(alpha.options[i].value);
}

for (let i = 0; i < words.options.length; i++) {
    allWords.push(words.options[i].value);
}
function myFunction1 () {
    var display = "";
    for (let i = 0; i < allWords.length; i++) {
        if(allWords[i][0] === document.getElementById("alpha").value) {
            display = allWords[i];
            break;
        }
    }
    document.getElementById("word").value = display;
}

function myFunction2 () {
    var display = "";
    for (let i = 0; i < allAlpha.length; i++) {
        if(allAlpha[i] === document.getElementById("word").value[0]) {
            display = allAlpha[i];
            break;
        }
    }
    document.getElementById("alpha").value = display;
}