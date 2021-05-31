const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

todoButton.addEventListener("click" , addTodo);
todoList.addEventListener("click" , deleteCheck);

function addTodo(event){
    event.preventDefault();
const todoDiv = document.createElement('div');
todoDiv.classList.add('todo');

const newTodo = document.createElement('li');
newTodo.classList.add('todo-list');
newTodo.innerHTML=todoInput.value;
todoDiv.appendChild(newTodo); 

const completedButton= document.createElement('button');
completedButton.innerHTML='<i class="fas fa-check-circle"> </i>';
completedButton.classList.add('completed-button');
todoDiv.appendChild(completedButton);

const deleteButton = document.createElement('button');
deleteButton.innerHTML='<i class="fas fa-trash"> </i>';
deleteButton.classList.add('delete-button');
todoDiv.appendChild(deleteButton);

todoList.appendChild(todoDiv);
};

function deleteCheck(e){
    const item=e.target;
    if(item.classList[0] === "delete-button")
    {
        todo= item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener("transitionend", function(){
            todo.remove();
        });
        
    }

    if(item.classList[0] === "completed-button")
    {
        todo= item.parentElement;
        todo.classList.toggle("completed");
    }
};