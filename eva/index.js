const Api = (() => {
    const baseUrl  = 'http://localhost:4232'; 
    const path = "movies";

    const getMovies = () =>
        fetch([baseUrl, path].join("/")).then((response) => response.json());

    return {
        getMovies,
    };
})();

//view
const View = (() => {
    const domstr = {
        moviesContainer: "#movies_container",
        singleMovie: ".single_movie",
        leftBtn: "#leftBtn",
        rightBtn: "#rightBtn"
    };

    const render = (ele, tmp) => {
        ele.innerHTML= tmp;
    };

    const createTmp = (arr) => {
        let tmp = "";
        arr.forEach((movie) => {
            tmp +=`
            <li class="single_movie">
                <img src="${movie.imgUrl}" alt="${movie.outlineInfo} height="auto">
                <p>Movie: ${movie.name}</p>
                <p>Info: ${movie.outlineInfo}</p>
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

//Model
const Model = ((api, view) => {
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


//controller
const Controller = ((model, view) => {
    const state = new model.State();

    const moviesContainer = document.querySelector(view.domstr.moviesContainer);;
    const singleMovie = document.querySelector(view.domstr.singleMovie);
    const leftBtn = document.querySelector(view.domstr.leftBtn);
    const rightBtn = document.querySelector(view.domstr.rightBtn);

    const rightSlide = () => {
        rightBtn.addEventListener("click", () => {
        moviesContainer.scrollLeft += moviesContainer.clientWidth/4;
        });
    }

    const leftSlide = () => {
        leftBtn.addEventListener("click", () => {
            // const slideWidth = singleMovie.clientWidth;
            moviesContainer.scrollLeft -= moviesContainer.clientWidth/4;
        });
    }



    const init = () => {
        model.getMovies().then((movies) => {
            state.movielist = [...movies];
        });
    };

    const bootstrap = () => {
        init();
        rightSlide();
        leftSlide();
    };
    return {bootstrap};
})(Model, View);

Controller.bootstrap();