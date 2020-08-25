import DOM from './base';

export const getValues =()=>{
    return {
        todo:DOM.submitInput.value,
        dueDate:DOM.submitDate.value,
        status:DOM.submitStatus.value
    }
}
export const clearInputs = ()=>{
    todo:DOM.submitInput.value="";
    dueDate:DOM.submitDate.value="";
    status:DOM.submitStatus.value="0";
    DOM.submitInput.focus();
}
export const renderTodo = (todo)=>{
    const markUp = `
                    <div class="list-container" data-todoid=${todo.id}>
                        <div class="name">
                            ${todo.todo}
                        </div>
                        <div class="due-date">
                            ${todo.dueDate}
                        </div>
                        <div class="status">
                            <i class="${todo.status==="1"?"ongoing":"done"}">${todo.status==="1"?"Ongoing":"Ended"}</i>
                            <svg class="icon delete">
                                <use href="icon-fonts/sprite.svg#icon-trash"></use>
                            </svg>
                            <svg class="icon edit">
                                <use href="icon-fonts/sprite.svg#icon-edit"></use>
                            </svg>
                        </div>
                    </div>`
    DOM.dataWrapper.insertAdjacentHTML('beforeend', markUp);
}
export const deleteTodo = (id)=>{
 const el = document.querySelector(`[data-todoid="${id}"]`);
 el.parentNode.removeChild(el);
}
export const activateEditModal = (todo)=>{
    const markUp = `
                    <div class="modal-container" data-todamid=${todo.id}>
                        <div class="modal">
                           <div class="close">x</div>
                            <h2 class="heading-2">Edit Todo</h2>
                            <input type="hidden" id="hidden" value="${todo.id}" >
                            <input type="text" class="input modal__input" id="input" value="${todo.todo}" placeholder="Todo Name">
                            <input type="date" class="date modal__date" id="date" value="${todo.dueDate}" >
                            <select name="status" id="status" class="status-d modal__status">
                                <option>Status</option>
                                <option ${todo.status==="1"?'selected':''} value="1">Ongoing</option>
                                <option ${todo.status==="2"?'selected':''} value="2">Ended</option>
                            </select>
                            <input type="button" class="btn modal__btn" id="btn-edit" value="Edit">
                        </div>
                    </div>`
 DOM.body.insertAdjacentHTML('afterbegin',markUp);
}

export const hideModal = ()=>{
    const modal = document.querySelector('.modal-container');
    modal.parentNode.removeChild(modal);
}