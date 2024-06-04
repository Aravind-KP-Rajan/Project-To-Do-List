const toDoList = [];

function addTool(){

  const inputElement= document.querySelector('.js-name-input');

  const name = inputElement.value;
  //console.log(name);

  toDoList.push(name);//to add values inside an array

  console.log(toDoList);

  inputElement.value='';
}