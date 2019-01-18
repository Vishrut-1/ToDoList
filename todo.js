//varibels
var inputtask = document.getElementById('inputs');
var btnadd = document.getElementById("btn");

var editbtn = document.getElementById("")
var todo = document.getElementById('ToDo'); //todo task

var cmtdtask = document.getElementById('completed-task'); //completed task




addtask();

function addtask() {

  document.getElementById('btn').addEventListener('click', Add);

}

function Add() {
  const input = document.getElementById('inputs').value;
  document.getElementById('inputs').value = null;
  const category = document.getElementById('category');



  var li = document.createElement('li');
  var temp = document.createElement('input');
  temp.setAttribute('onchange', 'completedtask(this)');
  temp.type = 'checkbox';
  li.appendChild(temp);
  temp = document.createElement('label');
  temp.textContent = input;
  li.appendChild(temp);
  temp = document.createElement('button');
  temp.setAttribute('class', 'edit');
  temp.setAttribute('onclick', 'EditTask(this)');
  temp.textContent = 'Edit';
  li.appendChild(temp);
  temp = document.createElement('button');
  temp.setAttribute('class', 'delete');
  temp.setAttribute('onclick', 'DeleteTask(this)');
  temp.textContent = 'Delete';
  li.appendChild(temp);

  document.getElementById("ToDo").appendChild(li);

  var text = document.getElementById('inputs');
  text.textContent = " ";
  let task = {
    name: input,
    category: category.selectedIndex,
    completed: true
  }
  addTasklocalstorage(task);



}
//adds the input to local storage

function addTasklocalstorage(task) {

  let Tasks = getTasksFromStorage();
  Tasks.push(task);
  console.log(Tasks);

  localStorage.setItem('Tasks', JSON.stringify(Tasks));


}

function getTasksFromStorage() {
  let Task;
  const TaskLS = localStorage.getItem('Tasks');

  if (TaskLS == null) {
    Tasks = [];

  } else {

    Tasks = JSON.parse(TaskLS);
  }
  return Tasks;
}

//printing the data from localstrage

function fetchtask() {

  var Task = JSON.parse(localStorage.getItem('Tasks'));

  var TaskResult = document.getElementById('ToDo');

  //  console.log(Task);
  TaskResult.innerHTML = "";
  Task.forEach(e => {
    //console.log("sadk");
    var li = document.createElement('li');
    var temp = document.createElement('input');
    temp.setAttribute('onchange', 'completedtask(this)');
    //console.log(completedtask);
    temp.type = 'checkbox';
    li.appendChild(temp);
    temp = document.createElement('label');
    temp.textContent = e.name;
    li.appendChild(temp);
    temp = document.createElement('button');
    temp.setAttribute('class', 'edit');
    // editButton.onclick=editTask

    temp.textContent = 'Edit';
    li.appendChild(temp);
    temp = document.createElement('button');
    temp.setAttribute('class', 'delete');
    temp.setAttribute('onclick', 'DeleteTask(this)');
    temp.textContent = 'Delete';
    li.appendChild(temp);

    document.getElementById("ToDo").appendChild(li);

  });

}
var bindTaskEvents = function (taskListItem, checkBoxEventHandler) {

  var editButton = taskListItem.querySelector("button.edit");

 temp.setAttribute('onclick','EditTask(this)');

}

function completedtask(e) {

  let temp = e.parentNode;
  e.parentNode.remove();
  document.getElementById('completed-task').appendChild(temp);


}




// EditTask
  function EditTask(e){
   let temp = e.parentNode;
   
   var x =e.querySelector('input[type=text]');
   var label=e.querySelector("label");

   label.innerText=editInput.value;
   // document.getElementById('edit').addEventListener('click',Edit)
   //document.getElementById("inputs").value = temp.children[0].textContent;
   //document.getElementById("category").selectedIndex =  
  // console.log(temp.children[1].textContent);
  }



//DeleteTask
function DeleteTask(e) {

  let temp = e.parentNode;
  let index = whichChild(temp);
  temp.remove();

  // localStorage.setItem
  var Task = JSON.parse(localStorage.getItem('Tasks'));
  Task.splice(index, 1);
  localStorage.setItem('Tasks', JSON.stringify(Task));

}

function whichChild(elem) {
  var i = 0;
  while ((elem = elem.previousSibling) != null) ++i;
  return i;
}
