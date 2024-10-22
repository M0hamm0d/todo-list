// for (let i = 0; i < todoList.length; i++) {
//   const html = `
//       <div class="my-to-do">
//           <input onClick='check()' class="input-check" id="${todoList[
//             i
//           ].text.slice(0, 3)}" type="checkbox">
//           <label class="button" for="${todoList[i].text.slice(
//             0,
//             3
//           )}"  id="">${todoList[i].text}</label>
//           <button class="sub-btn" onclick="todoList.splice(${i}, 1); renderTodoList(); sub()">
//               <img src="asset/images/svg/substract.svg" alt="">
//           </button>
//       </div>
//       `;
//   todoListHTML += html;
//   todoNo.innerHTML = `${todoList.length} of ${todoList.length} remaining`;
//   input.value = "";
// }
// document.querySelector(".my").innerHTML = todoListHTML;
