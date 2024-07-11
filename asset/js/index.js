let input = document.querySelector('#inp');
const toDo = document.querySelector('.to-do');
let addBtn = document.querySelector('.add-btn');
const todoNo = document.querySelector('.todo-no')
const todoContainer = document.querySelector('.todo-container');
const check = document.querySelector('#check')
function checkValue() {
    addBtn.style.backgroundColor = '#AD1F87'
    if (!input.value){
        addBtn.style.backgroundColor = ''
    }
}
let todoList = [];

renderTodoList()
function renderTodoList(){
    let todoListHTML = ''
    for (let i = 0; i < todoList.length; i++) {
        const todo = todoList[i];
        const html = `
        <div class="my-to-do">
            <input id="check" type="checkbox">
            <label for="">${todo}</label>
            <button class="sub-btn" onclick="todoList.splice(${i}, 1); renderTodoList(); sub()">
                <img src="asset/images/svg/substract.svg" alt="">
            </button>
        </div>
        `;
        todoListHTML+= html;
        todoNo.innerHTML = `${todoList.length} of ${todoList.length} remaining`
        input.value = '';
    }
    document.querySelector('.my').innerHTML = todoListHTML;
}
function add() {
    todoList.push(input.value);
    renderTodoList();
};
function del() {
    todoList = [];
    document.querySelector('.my').innerHTML = '';
    todoNo.innerHTML = `0 of 0 remaining`
};
function sub() {
    todoNo.innerHTML = `${todoList.length} of ${todoList.length} remaining`
};


