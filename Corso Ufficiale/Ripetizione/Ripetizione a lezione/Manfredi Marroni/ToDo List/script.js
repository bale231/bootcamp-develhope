const todoContainer = document.querySelectorAll('.card');
const input = document.getElementById('input-todo');
const btn = document.getElementById('addTodo');
const ul = document.getElementById('list');
const form = document.querySelector('form');

btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (input.value === "") {
        alert('Inserisci un To-do prima di cliccare!');
        return;
    }
    
    //Create a to-do:
    const newToDo = document.createElement('li');
    
    //Create a checkbox:
    const checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox');
    
    //Create a tag to append input value:
    const valueInput = document.createElement('label')
    valueInput.textContent = input.value;
    
    //Button to delete to-do:
    const remove = document.createElement('button');
    remove.setAttribute('id', 'remove')
    remove.textContent = 'X';
    
    //Appent element to item container:
    newToDo.appendChild(checkbox);
    newToDo.appendChild(valueInput);
    newToDo.appendChild(remove);
    
    //Append list item on list:
    ul.appendChild(newToDo);
    
    //Clean input value after create a list item:
    input.value = "";
    
    //Remove list item on click button:
    remove.addEventListener("click", () => {
        newToDo.remove(newToDo);
    })
})