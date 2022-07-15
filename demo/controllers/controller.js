import { Model } from "../models/model.js";
import { View } from "../views/view.js"
//controller
export const Controller = ((model, view) => {
    const state = new model.State();

    const deleteTodo = () => {
		const todosContainer = document.querySelector(view.domstr.todosContainer);
		todosContainer.addEventListener("click", (event) => {
			if (event.target.className === "dltbtn") {
				state.todolist = state.todolist.filter(
					(todo) => +todo.id !== +event.target.id
				);
				model.deleteTodo(event.target.id);
			}
		});
	};

    const addTodo = () => {
		const inputbox = document.querySelector(view.domstr.inputbox);
		inputbox.addEventListener("keyup", (event) => {
			if (event.code === "Enter" && event.target.value.trim() !== "") {
				const newTodo = new model.Todo(event.target.value);

                model.addTodo(newTodo).then(todo => {
                    state.todolist = [todo, ...state.todolist];
                });
                event.target.value = '';
			}
		});
	};

    const init = () => {
        model.getTodos().then((todos) => {
            state.todolist = [...todos.reverse()];
        });
    };

    const bootstrap = () => {
        init();
        deleteTodo();
        addTodo();
    };
    return {bootstrap};
})(Model, View);