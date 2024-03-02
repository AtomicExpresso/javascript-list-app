const addToDoBtn = document.getElementById('addtodo');
let toDoContainer = document.getElementById('todocontainer');
let toDoContainerTitle = document.getElementById('todocontainer-title');
const deleteItem = document.getElementById('deleteitem');

let inputField = document.getElementById('inputField');
let contentField = document.getElementById('contentfield');

toDoContainer.style.display = 'none';

addToDoBtn.addEventListener('click', function () {
  toDoContainer.classList.remove('deleteitem');
  let paragraph = document.createElement('h2');
  let textcontent = document.createElement('p');
  toDoContainer.style.display = 'flex';
  paragraph.innerText = inputField.value;
  textcontent.innerText = contentField.value;

  toDoContainer.appendChild(paragraph);
  toDoContainer.appendChild(textcontent);

  paragraph.addEventListener('click', function () {
    paragraph.style.textDecoration = 'line-through';
    paragraph.style.color = '#6e6e6e';
    textcontent.style.color = '#6e6e6e';
  });

  paragraph.addEventListener('dblclick', function () {
    toDoContainer.removeChild(paragraph);
    toDoContainer.removeChild(textcontent);
    toDoContainer.style.display = 'none';
  });

  deleteItem.addEventListener('click', function () {
    toDoContainer.removeChild(paragraph);
    toDoContainer.removeChild(textcontent);
    toDoContainer.classList.add('deleteitem');
  });
});
