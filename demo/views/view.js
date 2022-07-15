//View
export const View = (() => {
    const domstr = {
        todosContainer: "#tasks",
        deletebtn: ".dltbtn",
        inputbox: ".todolist__input",
    };

    const render = (ele, tmp) => {
        ele.innerHTML= tmp;
    };

    const createTmp = (arr) => {
        let tmp = "";
        arr.forEach((todo) => {
            tmp +=`
            <li class="task">
                <span>${todo.id} - ${todo.title}</span>
                <button class="dltbtn" id="${todo.id}">X</button>
            </li>
            `;
        });
        return tmp;
    };

    return {
        render,
        createTmp,
        domstr,
    }
})();