const state = {
    a: "apple",
    b: "banana",
    c: "city",
    d: "dom",
    e: "end",
    f: "forEach",
    g: "gesdrwesf"
};
var alpha = document.getElementById("alpha");
var words = document.getElementById("word");

for(let key of Object.keys(state)) {
    let option = document.createElement("option");
    option.value = key;
    option.text = key;
    alpha.add(option, alpha[alpha.length]);
}
for(let val of Object.values(state)) {
    let option = document.createElement("option");
    option.value = val;
    option.text = val;
    words.add(option, words[words.length]);
}

function handleChange (element) {
    var display = "";
        for (let i = 0; i < Object.keys(state).length; i++) {
            if( element.value === Object.keys(state)[i]) {
                display = Object.values(state)[i];
                document.getElementById("word").value = display;
                break;
            }
            else if(element.value === Object.values(state)[i]) {
                display = Object.keys(state)[i];
                document.getElementById("alpha").value = display;
                break;
            }
        }
    }
