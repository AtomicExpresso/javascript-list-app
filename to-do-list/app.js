const mainContent = document.getElementById('main-content');
const addToDoBtn = document.getElementById('addtodo');
let toDoContainer = document.getElementById('todocontainer');
let toDoContainerTitle = document.getElementById('todocontainer-title');
let deleteItem = document.getElementsByClassName('deleteitem');

let inputField = document.getElementById('inputField');
let contentField = document.getElementById('contentfield');

toDoContainer.style.display = 'flex';

let tasks = () => {
  let listcontainer = document.createElement('div');
  let listImgContainer = document.createElement('div');
  let listIconContainer = document.createElement('div');
  let listImg = document.createElement('img');
  let listImgTwo = document.createElement('img');
  let paragraph = document.createElement('h2');
  let textcontent = document.createElement('p');

  listImg.src = './images/trash.svg';
  listImg.classList.add('deleteitem');
  listImgTwo.src = './images/edit.svg';

  listImgContainer.classList.add('list-row');
  listIconContainer.classList.add('list-icon-row');
  toDoContainer.classList.add('todocontainer');

  paragraph.innerText = inputField.value;
  textcontent.innerText = contentField.value;

  toDoContainer.appendChild(listcontainer);

  listImgContainer.appendChild(paragraph);
  listImgContainer.appendChild(listIconContainer);

  listIconContainer.appendChild(listImgTwo);
  listIconContainer.appendChild(listImg);

  listcontainer.appendChild(listImgContainer);
  listcontainer.appendChild(textcontent);

  paragraph.addEventListener('click', function () {
    paragraph.style.textDecoration = 'line-through';
    paragraph.style.color = '#6e6e6e';
    textcontent.style.color = '#6e6e6e';
  });

  paragraph.addEventListener('dblclick', function () {
    toDoContainer.removeChild(listcontainer);
  });

  localStorage.setItem('data', toDoContainer.innerHTML);

  listImg.addEventListener('click', function () {
    listcontainer.classList.add('deleteitem-animation');

    setTimeout(function () {
      toDoContainer.removeChild(listcontainer);
    }, 500);
  });
};

