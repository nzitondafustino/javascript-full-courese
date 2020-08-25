//import sass file
import './style.scss';

import DOM from './views/base';
import * as todoView from './views/todo';
import Todos from './models/Todos';

let state = {}

const controllAddTodo = ()=>{
    //get data from UI
    const data = todoView.getValues();
    if(data.todo && data.dueDate && data.status){
        //save into state
        if(!state.todos) state.todos = new Todos();
        const todo = state.todos.addTodo(data.todo, data.dueDate, data.status);
        //clear the inputs
        todoView.clearInputs();
        //update UI
        todoView.renderTodo(todo);
    }
}

DOM.submitButton.addEventListener('click', controllAddTodo)
window.addEventListener('keypress',  e=>{
    if(e.keyCode ===13){
        controllAddTodo();
    }
});

DOM.dataWrapper.addEventListener('click',e=>{
    let id;

    //delete todo from the list
    if(e.target.closest('.delete')){
        //get if from the UI
        id =e.target.closest('.list-container').dataset.todoid;
        //detelte item from state
        state.todos.deleteTodo(id);
        //update the UI
        todoView.deleteTodo(id);

    //edit todo from list
    } else if (e.target.closest('.edit')){
        id =e.target.closest('.list-container').dataset.todoid;
        //get todo
        const todo = state.todos.getTodo(id);
        //activate modal fill data into the field
        todoView.activateEditModal(todo);
    }
})
DOM.body.addEventListener('click',e=>{
    if(e.target.matches('.close, .close *')){
        todoView.hideModal()
    }
})