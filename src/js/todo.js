// assign task option
let uid = 0;
const assigned = ["Pay Bills", "Go Shopping"];
const complete = ["See the Doctor"];
let todolist = "<ul id='incomplete-tasks'>";
for (let q = 0; q < assigned.length; q++) {
  todolist +=
    "<li><input type='checkbox' id='taskin' onclick='completed(this)' value='" +
    uid++ +
    "' /><label>" +
    assigned[q] +
    "</label><input type='text' /><button class='edit'>Edit</button><button class='delete'>Delete</button></li>";
}
todolist += "</ul>";
document.getElementById("todotasks").innerHTML = todolist;
let completedList = "<ul id='completed-tasks'>";
for (let w = 0; w < complete.length; w++) {
  completedList +=
    "<li><input type='checkbox' onclick='completed(this)' value=" +
    w +
    " checked /><label>" +
    complete[w] +
    "</label><input type='text' /><button class='edit'>Edit</button><button class='delete'>Delete</button></li>";
}
completedList += "</ul>";
document.getElementById("donetask").innerHTML = completedList;
//-----------------------ADD TASK TO THE LIST-------------------------------
function addtask() {
  var taskName = document.getElementById("new-task").value;
  assigned.push(taskName);
  let todolist = "<ul id='incomplete-tasks'>";
  for (let q = 0; q < assigned.length; q++) {
    todolist +=
      "<li><input type='checkbox' id='taskin' onclick='completed(this)' value='" +
      q +
      "' /><label>" +
      assigned[q] +
      "</label><input type='text' /><button class='edit'>Edit</button><button class='delete'>Delete</button></li>";
  }
  todolist += "</ul>";
  document.getElementById("todotasks").innerHTML = todolist;
}
//-----------------------MARK TASK TO COMPLETE-------------------------------
function completed(obj) {
  if (document.getElementById("taskin").checked === true) {
    var taskid = obj.value;
    complete.push(assigned[taskid]);
  }
  let completedList = "<ul id='completed-tasks'>";
  for (let w = 0; w < complete.length; w++) {
    completedList +=
      "<li><input type='checkbox' onclick='completed(this)' value=" +
      w +
      " checked /><label>" +
      complete[w] +
      "</label><input type='text' /><button class='edit'>Edit</button><button class='delete'>Delete</button></li>";
  }
  completedList += "</ul>";
  document.getElementById("donetask").innerHTML = completedList;
}
