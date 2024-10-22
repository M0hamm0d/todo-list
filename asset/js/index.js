let input = document.querySelector("#inp");
const toDo = document.querySelector(".to-do");
let addBtn = document.querySelector(".add-btn");
const todoNo = document.querySelector(".todo-no");
const todoContainer = document.querySelector(".todo-container");
let taskCount = 0;
const countValue = document.querySelector(".count-value");
const displayCount = (taskCount) => {
  countValue.innerText = taskCount;
};
function checkValue() {
  addBtn.style.backgroundColor = "#AD1F87";
  if (input.value === "") {
    addBtn.style.backgroundColor = "";
  }
}
let todoList = [];

renderTodoList();
function renderTodoList() {
  todoContainer.innerHTML = "";
  todoList.forEach((task, i) => {
    const html = `
        <div class="my-to-do">
            <input class="input-check" id="${task.text.slice(
              0,
              3
            )}" type="checkbox">
            <label class="button"  id="">${task.text}</label>
            <button class="sub-btn" onclick="todoList.splice(${i}, 1); renderTodoList(); sub()">
                <img src="asset/images/svg/substract.svg" alt="">
            </button>
        </div>
        `;
    todoNo.innerHTML = `${taskCount} of ${todoList.length} remaining`;
    todoContainer.insertAdjacentHTML("beforeend", html);
  });
}

function add() {
  todoList.push({ text: input.value, completed: "false" });
  taskCount++;
  renderTodoList();
  input.value = "";
  checkValue();
}
function myTodo() {
  todoContainer.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("input-check") &&
      !e.target.classList.contains("checked")
    ) {
      e.target.classList.add("checked");
      taskCount--;
      todoNo.innerHTML = `${taskCount} of ${todoList.length} remaining`;
      console.log("checked");
    } else if (e.target.classList.contains("checked")) {
      e.target.classList.remove("checked");
      taskCount++;
      todoNo.innerHTML = `${taskCount} of ${todoList.length} remaining`;
    }
  });
}
myTodo();
function del() {
  todoList = [];
  todoContainer.innerHTML = "";
  taskCount = 0;
  todoNo.innerHTML = `0 of 0 remaining`;
}
function sub() {
  taskCount--;
  todoNo.innerHTML = `${taskCount} of ${todoList.length} remaining`;
}
