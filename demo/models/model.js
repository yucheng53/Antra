import { Api } from "../apis/api.js";
import { View } from "../views/view.js"
//Model
export const Model = ((api, view) => {
    class Todo {
        constructor(title) {
            this.userId = 2;
            this.title = title;
            this.completed = false;
        }
    }

    class State {
        #todos = [];
        get todolist() {
            return this.#todos;
        }
        set todolist(todos) {
            this.#todos = [...todos];
            const todosContainer = document.querySelector(view.domstr.todosContainer);
			const tmp = view.createTmp(this.#todos);
			view.render(todosContainer, tmp);
        }
    }

    const {getTodos, deleteTodo, addTodo} = api;

    return {
        getTodos,
        deleteTodo,
        State,
        addTodo,
        Todo,
    }
})(Api, View);