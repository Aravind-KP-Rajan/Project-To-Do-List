/* Main Idea of JavaScript
1. Save the Data
2.Generate the HTML
3.Make itt interactive
*/

const toDoList = [
  {name:'make atho',
    duedate: '2022-12-22'},
    {name:'read books',
    duedate: '2022-12-22'}]; //1. save the data


renderTodoList();

function renderTodoList(){
  
  let toDoListHTML =''; //accumulating variable

  for(i=0;i<toDoList.length;i++){
    const todoObject = toDoList[i];

    //Destructuring
   /*  const name= todoObject.name;
    const duedate = todoObject.duedate; */

    //below is the shortcut for above two lines, where variable name and property name is same

    const{name, duedate} = todoObject;


    //2.use the data to generate HTML
    const html = `<p>
    ${name} ${duedate}
    <button onclick = "
    toDoList.splice(${i},1);
    renderTodoList();

    
    ">Delete</button>
    </p>`; //generating the HTML
    toDoListHTML+=html; //accumulating the value into the variable
  }
  
  console.log(toDoListHTML);
  
  document.querySelector('.js-todo-list').innerHTML = toDoListHTML;
}

function addTool(){

  const inputElement= document.querySelector('.js-name-input');

  const name = inputElement.value;
  //console.log(name);

  const dateInputElement = document.querySelector('.js-due-date-input');

  const duedate = dateInputElement.value;

  toDoList.push({
    //shorthand property

   /*  name:name,
    duedate:dueDate */
  //below is the shortcut for above using shorthand property
  name,
  duedate});//to add values inside an array

  console.log(toDoList);

  inputElement.value='';

  renderTodoList();
}