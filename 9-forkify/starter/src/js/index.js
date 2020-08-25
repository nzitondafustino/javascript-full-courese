import Search from './models/Search';
import {elements, renderLoader, clearLoader} from './views/base';
import * as searchView from './views/search';
import * as recipeView from './views/recipe';
import Recipe from './models/Recipe';
import * as listView from './views/list';
import * as likesView from './views/likes';
import List from './models/List';
import Likes from  './models/Likes';

/********Global sate of the app 
 *  -Search object
 *  -Current recipe object
 *  -Shopping list object
 *  -Liked recipes
*/
const state = {}

window.addEventListener('load',()=>{
    console.log('Loading')
    //create  a new like
     state.likes = new Likes();
     //restore the likes from local storage
     state.likes.readStorage();
     //toogle a like
    likesView.toggleLikeMenu(state.likes.getNumberOfLikes());
    //update the UI
    state.likes.likes.forEach(like => likesView.renderLike(like));
})
const controlSearch = async()=>{
    //get query from view
    const query = searchView.getInput();
    if(query){
        //new search object and add it to the global state
        state.search = new Search(query);
        //prepare the UI for result
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);

        //search the recipe 
        await state.search.getResult();
        clearLoader();
        //render the recipes on UI
        searchView.renderResults(state.search.result);
    }
}

const controlList= ()=>{
    //create a list if there is none yet
    if(!state.list) state.list = new List();
    //add ingredient to the list

    state.recipe.ingredients.forEach(ingredient=>{
        const item = state.list.addItem(ingredient.count, ingredient.unit, ingredient.ingredient);
        listView.renderItem(item);
    })
}

/***********
 * CONTROL like
 */


 const controlLike = ()=>{


    //no like
    if(!state.likes) state.likes = new Likes();

    const currentID = state.recipe.id;

    // not liked

    if(!state.likes.isLiked(currentID)){
        //create like
        const newLike = state.likes.addLike(
             currentID,
             state.recipe.title, 
             state.recipe.author, 
             state.recipe.img 
        );
        //toggle the like button
        likesView.toggleLike(true)
        //update the UI
        likesView.renderLike(newLike);
    } else {
        //remove like
        state.likes.deleteLike(currentID)
        //toggle the button
        likesView.toggleLike(false)

        //update the UI
       likesView.deleteLike(currentID);

    }
    likesView.toggleLikeMenu(state.likes.getNumberOfLikes())

 }


//handle delete and update item events

elements.shopping.addEventListener('click',e=>{
    console.log(e.target)
    const id = e.target.closest('.shopping__item').dataset.itemid;
    if(e.target.matches('.shopping__delete, .shopping__delete *')){
        //delete item from the list
        state.list.deleteItem(id);
        //delete item from the UI
        listView.deleteItem(id);
    } else if (e.target.matches('.shopping__count--value')){
        const value = parseFloat(document.querySelector('.shopping__count--value').value);
        state.list.updateCount(id,value)
    }
})

elements.searchForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    controlSearch();
})

elements.searchResPages.addEventListener('click',e=>{
    const btn = e.target.closest('.btn-inline');
    if(btn){
        const goTo = parseInt(btn.dataset.goto,10);
        searchView.clearResults();
        searchView.renderResults(state.search.result, goTo);
    }
})
/*************
 * Recipe Model
 */
const controlRecipe = async()=>{
    //get ID from the URL
    const id = window.location.hash.replace('#','');
    if(id){
        //prepare the UI for changes
        recipeView.clearRecipe();
        renderLoader(elements.recipe);
        if(state.search) {
            recipeView.highLightSelected(id);
        }
        //create new Recipe object
        state.recipe = new Recipe(id);

        try {

            //get Recipe Data
            await state.recipe.getRecipe();
            state.recipe.parseIngredients();
            //calculate servings and time
            state.recipe.calcTime();
            state.recipe.calcServings();

            //Render The recipe
            clearLoader();
            recipeView.renderRecipe(
                state.recipe,
                state.likes.isLiked(id) 
                )

        } catch(e){
            console.log(e)
            alert("Error in Processing Recipe");
        }
    }
}

['hashchange','load'].forEach(event=>window.addEventListener(event,controlRecipe));


elements.recipe.addEventListener('click',e=>{
    if(e.target.matches('.button-decrease, .button-decrease *')){
        if(state.recipe.serving > 1){
            state.recipe.updateServings('dec')
        }
    } else if (e.target.matches('.button-increase, .button-increase *')){
        state.recipe.updateServings('inc')
    } else if(e.target.matches('.recipe__btn--add, .recipe__btn--add *')){
        controlList();
    } else if(e.target.matches('.recipe__love, .recipe__love *')){
        //control likes
        controlLike()
    }
    //update UI
    recipeView.updateServingsEngredients(state.recipe);
})
