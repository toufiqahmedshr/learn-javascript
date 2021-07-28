/*
 *Title: To Do App using vanillla JavaScript
 *Description: This JavaScript file has all necessary functions to contriol the To Do app
 *Author: Toufiq Ahmed
 *Date: 25/07/2021
 */
let myTasks = [];

const inputEl = document.querySelector(".input-el");
const addBtn = document.querySelector(".add-btn");
const todoList = document.querySelector(".todo-list");
const checkBtn = document.querySelector(".check-btn");
const deleteBtn = document.querySelector("delete-btn");
const listItem = document.querySelector("#todo-list");

const taskFromLocalStorage = JSON.parse(localStorage.getItem("myTasks"));

if (taskFromLocalStorage) {
  myTasks = taskFromLocalStorage;
  render(myTasks);
}

function render(tasks) {
  let lists = "";

  for (let i = 0; i < tasks.length; i++) {
    const listId = Date.now();
    lists += `
    <center>
    <li class="list-item" id="${listId}">
      <label style="color: black">${tasks[i]}</label>
      <button class="check-btn"><i class="fas fa-check"></i></button>
      <button class="delete-btn">
        <i class="fas fa-trash-alt"></i>
      </button>
    </li>
  </center>
    `;
  }
  listItem.innerHTML = lists;
  console.log(myTasks);
}

addBtn.addEventListener("click", () => {
  myTasks.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myTasks", JSON.stringify(myTasks));
  render(myTasks);
});
