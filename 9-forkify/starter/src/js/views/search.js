import {elements} from './base';


export const getInput =()=> elements.searchInput.value;

export const clearInput = ()=>{
    elements.searchInput.value = "";
}

export const limitRecipeTitle = (title, limit=17)=>{
    const newTitle = [];
    if(title.length > limit){
        title.split(' ').reduce((acc,cur)=>{
            if(acc + cur.length <= limit){
                newTitle.push(cur);
            }
            return acc + cur.length;
        }, 0)
        return `${newTitle.join(' ')} ...`
    }
    return title;
}

export const clearResults = ()=>{
    elements.searchResultList.innerHTML = "";
    elements.searchResPages.innerHTML ="";
}

const renderRecipe = recipe =>{
    const markUp = `
                    <li>
                    <a class="results__link" href="#${recipe.recipe_id}">
                        <figure class="results__fig">
                            <img src="${recipe.image_url}" alt="${recipe.title}">
                        </figure>
                        <div class="results__data">
                            <h4 class="results__name">${limitRecipeTitle(recipe.title)}</h4>
                            <p class="results__author">${recipe.publisher}</p>
                        </div>
                    </a>
                </li>`
    elements.searchResultList.insertAdjacentHTML('beforeend',markUp);
}

const createButton = (page, type)=> `
                                    <button class="btn-inline results__btn--${type}" data-goto=${type==='prev'? (page-1):(page + 1)}>
                                        <span>Page ${type==='prev'? (page-1):(page + 1)}</span>    
                                        <svg class="search__icon">
                                            <use href="img/icons.svg#icon-triangle-${type==='prev'?'left':'right'}"></use>
                                        </svg>
                                    </button>`

const renderButtons = (page, numResult, resPerPage)=>{
    let button;
    const pages = Math.ceil(numResult/resPerPage)

    if(page ===1 && pages > 1){
        button = createButton(page,'next');
    } else if(page > 1 && page < pages){
        button = `
                ${ button = createButton(page,'prev')}
                ${ button = createButton(page,'next')}
        `
    } else if( page === pages && pages > 1 ){
        button = createButton(page,'prev');
    }
    elements.searchResPages.insertAdjacentHTML('afterbegin',button);
}

export const renderResults = (recipes, page=2, recipePerPage=10)=>{
    const start = (page-1) * recipePerPage;
    const end = page * recipePerPage;
    recipes.slice(start,end).forEach(renderRecipe);

    // render buttons
    renderButtons(page, recipes.length, recipePerPage);
}