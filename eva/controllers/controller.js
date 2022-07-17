import { Model } from "../models/model.js"; 
import { View } from "../views/view.js";

export const Controller = ((model, view) => {
    const state = new model.State();
    var count = 0;

    const moviesContainer = document.querySelector(view.domstr.moviesContainer);;

    const leftBtn = document.querySelector(view.domstr.leftBtn);
    const rightBtn = document.querySelector(view.domstr.rightBtn);
    
    const rightSlide = () => {
        rightBtn.addEventListener("click", () => {
        moviesContainer.scrollLeft += moviesContainer.clientWidth/4;
        if(count >= 0 )
        count++;
        console.log(count)
        if(count === 5)  {
            rightBtn.style.display = "none";
        }
        else {rightBtn.style.display = "flex"};
        if(count ===0)  {
            leftBtn.style.display = "none";
        }
        else {leftBtn.style.display = "flex"};
        });
    }

    const leftSlide = () => {
        leftBtn.addEventListener("click", () => {
            moviesContainer.scrollLeft -= moviesContainer.clientWidth/4;
            console.log(count);
            if(count >= 0 )
            {count --};
            if(count ===0)  {
                leftBtn.style.display = "none";
            }
            else {leftBtn.style.display = "flex"};
            if(count === 5)  {
                rightBtn.style.display = "none";
            }
            else {rightBtn.style.display = "flex"};
            });

    }


    const init = () => {
        model.getMovies().then((movies) => {
            state.movielist = [...movies];
        });
        leftBtn.style.display = "none";
    };

    const bootstrap = () => {
        init();
        rightSlide();
        leftSlide();
    };
    return {bootstrap};
})(Model, View);