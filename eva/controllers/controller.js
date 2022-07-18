import { Model } from "../models/model.js"; 
import { View } from "../views/view.js";

export const Controller = ((model, view) => {
    const state = new model.State();
    var count = 0;
    var moviesArr = [];
    model.getMovies().then((movies) => {
        moviesArr = [...movies];
    });
    let index = 0;

    const moviesContainer = document.querySelector(view.domstr.moviesContainer);;
    const leftBtn = document.querySelector(view.domstr.leftBtn);
    const rightBtn = document.querySelector(view.domstr.rightBtn);
    
    // const rightSlide = () => {
    //     rightBtn.addEventListener("click", () => {
    //         moviesContainer.scrollLeft += moviesContainer.clientWidth/4;
    //         count++;
    //         count===5 ? rightBtn.style.display = "none" :rightBtn.style.display = "flex";
    //         count===0 ? leftBtn.style.display = "none" : leftBtn.style.display = "flex";
    //     });
    // }
    //for infinite loop
    const rightInfinite = () => {
        rightBtn.addEventListener("click", () => {
            var showArr = [];
            if(index < 6) {
                index ++;
                showArr = moviesArr.slice(index,index +4);
            };
            if(10> index && index >= 6) {
                index ++;
                console.log(moviesArr.slice(0,index-6));
                showArr = [...moviesArr.slice(index-1, 10), ...moviesArr.slice(0,index - 6)];

            }
            else if(index === 10) {
                index = 1;
                showArr = moviesArr.slice(index,index +4);
            }
            console.log(showArr,index);
            state.movielist = [...showArr];
        });     
    }

    const leftSlide = () => {
        leftBtn.addEventListener("click", () => {
            moviesContainer.scrollLeft -= moviesContainer.clientWidth/4;
            count --;
            count===5 ? rightBtn.style.display = "none" :rightBtn.style.display = "flex";
            count===0 ? leftBtn.style.display = "none" : leftBtn.style.display = "flex";
        });
    };

    const init = () => {
        model.getMovies().then((movies) => {
            state.movielist = [...movies];
        });
        leftBtn.style.display = "none";
    };

    const bootstrap = () => {
        init();
        rightInfinite();
        //rightSlide();
        leftSlide();
    };
    return {bootstrap};
})(Model, View);