let input = document.querySelector('#inp');
const toDo = document.querySelector('.to-do');
let addBtn = document.querySelector('.add-btn');
const todoNo = document.querySelector('.todo-no')
const todoContainer = document.querySelector('.todo-container');
let my = document.querySelector('.my')
function checkValue() {
    addBtn.style.backgroundColor = '#AD1F87'
    if (!input.value){
        addBtn.style.backgroundColor = ''
    }
}
let todoList = [];

// const checkbox = document.querySelector('.input-check');
// function check() {
//     if (checkbox.checked === true){
//         checkbox.checked = false
//         console.log('false'); 
//     } else {
//         checkbox.checked = true;
//         console.log('true'); 
//     }
// };

renderTodoList();
function renderTodoList() {
    let todoListHTML = ''
    for (let i = 0; i < todoList.length; i++) {
        const html = `
        <div class="my-to-do">
            <input onclick="check()" class="input-check" id="${todoList[i].slice(0, 3)}" type="checkbox">
            <label class="button" for="${todoList[i].slice(0, 3)}"  id="">${todoList[i]}</label>
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
function check() {
    //let innerText = document.querySelector('.button').innerHTML
    let myTodo = document.getElementsByClassName('my-to-do')
    for (let i = 0; i < myTodo.length; i++) {
        const element = myTodo[i].children[0];
        console.log(element);
        if (element.checked === true){
            //element.checked = false
            console.log('true'); 
        } else if (element.checked === false) {
            //element.checked = true;
            //el.style.textDecoration = 'line-through'
            console.log('false'); 
        }
    }
};

function del() {
    todoList = [];
    document.querySelector('.my').innerHTML = '';
    todoNo.innerHTML = `0 of 0 remaining`
};
function sub() {
    todoNo.innerHTML = `${todoList.length} of ${todoList.length} remaining`
};


