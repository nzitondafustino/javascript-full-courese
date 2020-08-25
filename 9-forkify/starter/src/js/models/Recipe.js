import axios from 'axios';

export default class {
    constructor(id){
        this.id = id;
    }
    async getRecipe(){
        try {
            const res = await axios(`https://forkify-api.herokuapp.com/api/get?rId=${this.id}`);
            this.title = res.data.recipe.title;
            this.author = res.data.recipe.publisher;
            this.img = res.data.recipe.image_url;
            this.url = res.data.recipe.source_url;
            this.ingredients = res.data.recipe.ingredients;
        } catch(e){
            alert('Something went wrong')
        }

    }
    calcTime(){
        //assuming that 3 ingredients taka 15minutes
        const numIngredients = this.ingredients.length;
        const period = Math.ceil(numIngredients/3);
        this.time = period * 15;
    }
    calcServings(){
        this.serving = 4;
    }
    parseIngredients(){
        const unitsLong = ['tablespoons','tablespoon','teaspoons','teaspoon','ounces','ounce','cups','pounds'];
        const unitsShort =['tbsp','tbsp','tsp','tsp','oz','oz','cup','pound'];
        const units = [...unitsShort,'Kg','g'];
        const newIngredients = this.ingredients.map((el,i) => {
            let ingredient = el.toLowerCase();
            unitsLong.forEach((unit,i)=>{
                //unifor unit
                ingredient = ingredient.replace(unit,unitsShort[i]);
                //remove paranteses
                ingredient = ingredient.replace(/ *\([^)]*\) */g, ' ');
            })
                //parse unit into count
                const arrayIng = ingredient.split(' ');
                const unitIndex = arrayIng.findIndex(el2=>{
                    return units.includes(el2);
                })

                let obj = {}

                if(unitIndex > -1){
                    const arrCount = arrayIng.slice(0,unitIndex);
                    let count;
                    if(arrCount.length === 1){

                        count = eval(arrayIng[0].replace('-','+'));

                    } else {
                        count = eval(arrCount.join('+'));
                    }
                    obj = {
                        count,
                        unit:arrayIng[unitIndex],
                        ingredient:arrayIng.slice(unitIndex+1).join(' ')
                    }

                } else if(parseInt(arrayIng[0])){

                    obj = {
                        count:arrayIng[0],
                        unit:'',
                        ingredient:arrayIng.slice(1).join(' ')
                    }

                } else if(unitIndex ===-1){
                    obj = {
                        count:1,
                        unit:'',
                        ingredient
                    }
                }
                return obj;
        });
        this.ingredients = newIngredients;
    }
    updateServings(type){
        const newServing = type ==='dec'?this.serving-1:this.serving+1;

        this.ingredients.forEach(ingredient=>{
            ingredient.count *= (newServing/this.serving);
        })
        this.serving = newServing;
    }
}