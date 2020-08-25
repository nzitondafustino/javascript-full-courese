import uniqid from 'uniqid';

export default class {
    constructor(){
        this.items =[]
    }
    addItem(count, unit, ingredient){
        const item = {
            id:uniqid(),
            count,
            unit,
            ingredient
        }
        this.items.push(item)
        return item;
    }
    deleteItem(id){
        //get index of the ietm
        const index = this.items.findIndex(el=>el.id===id);
        //delete item from the array
        this.items.splice(index,1);

    }
    updateCount(id,newCount){
        this.items.find(el=>el.id===id).count = newCount;
    }
}