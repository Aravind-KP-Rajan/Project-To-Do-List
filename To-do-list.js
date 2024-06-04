/* Main Idea of JavaScript
1. Save the Data
2.Generate the HTML
3.Make itt interactive
*/

const toDoList = ['make atho', 'read books']; //1. save the data


renderTodoList();

function renderTodoList(){
  
  let toDoListHTML =''; //accumulating variable
  
  for(i=0;i<toDoList.length;i++){
    const todo = toDoList[i];
    //2.use the data to generate HTML
    const html = `<p>${todo}</p>`; //generating the HTML
    toDoListHTML+=html; //accumulating the value into the variable
  }
  
  console.log(toDoListHTML);
  
  document.querySelector('.js-todo-list').innerHTML = toDoListHTML;
}

function addTool(){

  const inputElement= document.querySelector('.js-name-input');

  const name = inputElement.value;
  //console.log(name);

  toDoList.push(name);//to add values inside an array

  console.log(toDoList);

  inputElement.value='';

  renderTodoList();
}