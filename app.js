// ****** select items **********
const addBtn = document.querySelector('.add');
const tasks = document.querySelector('.tasks');
const input = document.querySelector('#add-task');
const clearBtn = document.querySelector('.clr-btn');

// array to store the element and count it
var todos = [];

// ****** event listeners **********
addBtn.addEventListener('click', addItem);

clearBtn.addEventListener('click', clearItems);

// add new task
function addItem(e) {
  e.preventDefault();
  const todoText = input.value;

  if (todoText !== '') {
    const li = document.createElement('li');

    li.classList.add('list');
    li.innerHTML = `<span class="check"><input type="checkbox" /></span><p>
      ${todoText}
      </p><span class="remove"><i class="far fa-trash-alt"></i></span>`;
    // append child
    tasks.appendChild(li);
    input.value = '';

    todos.push(todoText);

    clearBtn.classList.add('show-clrbtn');
    // add event listeners to remove and check buttons;
    const remove = li.querySelector('.remove');
    remove.addEventListener('click', deleteItem);

    const check = li.querySelector('.check');
    check.addEventListener('click', checkItem);
    // count function to find the total tasks left
    count();
  } else {
    alert('you must add a task');
  }
}

// delete a task
function deleteItem(e) {
  const element = e.currentTarget.parentElement;
  console.log(element);
  tasks.removeChild(element);
  todos.pop();
  count();
  if (todos.length == 0) {
    clearBtn.classList.remove('show-clrbtn');
  }
}

// checked a task
function checkItem(e) {
  const element = e.currentTarget.parentElement;
  console.log(element);
  element.classList.toggle('completed');
}

// count the total task
function count() {
  const count = document.querySelector('.num');
  count.innerHTML = todos.length;
}
// clear all tasks
function clearItems() {
  const items = document.querySelectorAll('.list');
  if (items.length > 0) {
    items.forEach(function (item) {
      tasks.removeChild(item);
    });
    clearBtn.classList.remove('show-clrbtn');
    todos = [];
    count();
  } else {
    alert('you must add a task');
  }
}
