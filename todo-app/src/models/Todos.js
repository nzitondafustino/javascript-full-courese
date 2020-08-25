import uniqid  from 'uniqid';

export default class {
    constructor(){
        this.todos = []
    }
    addTodo(td,dueDate,status){
     const todo = {
         id:uniqid(),
         todo:td,
         dueDate:dueDate,
         status:status
     }
     this.todos.push(todo)
     return todo;
    }
    deleteTodo(id){
        const index = this.todos.findIndex(todo=> todo.id === id);
        this.todos.splice(index,1);
    }
    getTodo(id){
        return this.todos.find(todo=>todo.id === id);
    }
    updateTodo(id,NWtd,NWdueDate,NWstatus){
        let todo = this.todos.find(todo=>todo.id === id);
        todo.todo = NWtd;
        todo.dueDate = NWdueDate;
        todo.status = NWstatus;
    }
    
}