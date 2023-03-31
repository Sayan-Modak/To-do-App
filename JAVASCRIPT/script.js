let todos = [];

const todosList = document.getElementById('todos');
const todoInput = document.getElementById('textInput');
const inputBtn = document.getElementById('add');
const showenterTodo = document.getElementById('showenterTodo');
const enterTodo = document.getElementById('enterTodo');

function showTodoInput(){
    enterTodo.style.display = 'block';
}

showenterTodo.addEventListener('click', showTodoInput);

function addTodo(e){
    e.preventDefault();
    let textValue = todoInput.value;
    todos.push(textValue);
    todosList.innerHTML = '';
    renderTodos();
    todoInput.value = '';
    enterTodo.style.display = 'none';
}
inputBtn.addEventListener('click', addTodo);

function deleteTodo(index){
    
    todos = todos.filter((todo, i) => {
    
    
        return i === index ? false : true;
    })

    todosList.innerHTML = '';
    renderTodos();
}

function editTodo(index){

    const currElement = document.querySelector(`#todos div:nth-child(${index + 1}) p`).innerText
    const spliceText = currElement.slice(3);
    console.log(spliceText);
    deleteTodo();
    showTodoInput();
    todoInput.value = spliceText;
}


function renderTodos(){
  
   todos.forEach((todo, i) => {


        let currHTML = todosList.innerHTML; 
        let newHTML = (
                `<div class="todoItem">
                    <p>${i+1}. ${todo}</p>
                    <div class="actions">
                    <i onclick="editTodo(${i})" class="fa-solid fa-pen"></i>
                        <i onclick="deleteTodo(${i})" class="fa-solid fa-trash"></i>
                    </div>
                </div>`
            )

            let ammendHTML = currHTML + newHTML;
            todosList.innerHTML = ammendHTML;
    })
}
renderTodos();