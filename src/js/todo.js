// assign task option

const assigned = [
  { taskname: "Pay Bills", taskstatus: "assigned" },
  { taskname: "Go Shopping", taskstatus: "assigned" },
  { taskname: "See the Doctor", taskstatus: "completed" },
];
// const complete = ["See the Doctor"];
let todolist = "<ul id='incomplete-tasks'>";
for (let q = 0; q < assigned.length; q++) {
  todolist +=
    "<li><input type='checkbox' id='taskin' onclick='completed(this)' value='" +
    q +
    "' /><label>" +
    assigned[q] +
    "</label><input type='text' id='editassign' value='" +
    q +
    "'/><button class='edit' onclick='edit()'>Edit</button><button class='delete'>Delete</button></li>";
}
todolist += "</ul>";
document.getElementById("todotasks").innerHTML = todolist;
// completed list view-------------------------------------------------
let completedList = "<ul id='completed-tasks'>";
for (let w = 0; w < complete.length; w++) {
  completedList +=
    "<li><input type='checkbox' onclick='completed(this)' value=" +
    w +
    " checked /><label>" +
    complete[w] +
    "</label><input type='text' id='editassign' value='" +
    w +
    "' /><button onclick='edit(this)' value=" +
    w +
    " class='edit'>Edit</button><button class='delete'>Delete</button></li>";
}
completedList += "</ul>";
document.getElementById("donetask").innerHTML = completedList;
//--------------------------operation and tasks-----------------------------//
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
      "</label><input type='text' /><button onclick='edit(this)' value=" +
      q +
      " class='edit'>Edit</button><button class='delete'>Delete</button></li>";
  }
  todolist += "</ul>";
  document.getElementById("todotasks").innerHTML = todolist;
}
//-----------------------EDIT IN ADDED TASKS---------------------------------

//-----------------------MARK TASK TO COMPLETE-------------------------------
function completed(obj) {
  if (document.getElementById("taskin").checked === true) {
    var taskid = obj.value;
    complete.push(assigned[taskid]);
    var s = assigned.indexOf(assigned[taskid]);
    console.log(assigned[s]);
    assigned.splice(s, 1);
    console.log(s);
  }
  for (let p = 0; p < assigned.length; p++) {
    console.log[assigned[p]];
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
