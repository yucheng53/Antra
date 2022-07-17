import { Api } from "../apis/api.js";
import { View } from "../views/view.js";

export const Model = ((api, view) => {
    class State {
        #movies = [];
        get movielist() {
            return this.#movies;
        }
        set movielist(movies) {
            this.#movies = [...movies];
            const moviesContainer = document.querySelector(view.domstr.moviesContainer);
			const tmp = view.createTmp(this.#movies);
			view.render(moviesContainer, tmp);
        }
    }

    const {getMovies} = api;

    return {
        getMovies,
        State,
    }
})(Api, View);