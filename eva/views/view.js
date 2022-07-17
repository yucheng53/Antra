export const View = (() => {
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
                <img src="${movie.imgUrl}" alt="${movie.outlineInfo} height="auto" width="100%">
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