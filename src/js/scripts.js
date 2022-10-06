var taskList = [
  { taskname: "Pay Bills", taskstatus: "assigned" },
  { taskname: "Go Shopping", taskstatus: "assigned" },
  { taskname: "See the Doctor", taskstatus: "completed" },
];
let todolist = "<ul id='incomplete-tasks'>";
for (let index = 0; index < taskList.length; index++) {
  if (taskList[index].taskstatus == "assigned") {
    todolist +=
      "<li><input type='checkbox' id='taskin" +
      index +
      "' onclick='chk_stat(this)' value='" +
      index +
      "' /><label>" +
      taskList[index].taskname +
      "</label><input type='text'/><button class='edit' id='editassign" +
      index +
      "' value='" +
      index +
      "' onclick='edit(this)'>Edit</button><button class='delete' id='delassign" +
      index +
      "' value='" +
      index +
      "' onclick='del(this)'>Delete</button></li>";
    document.getElementById("todotasks").innerHTML = todolist;
  }
  var completedList = "<ul id='completed-tasks'>";
  for (let index = 0; index < taskList.length; index++) {
    if (taskList[index].taskstatus == "completed") {
      completedList +=
        "<li><input type='checkbox' id='taskin" +
        index +
        "' onclick='chk_stat(this)' value='" +
        index +
        "' /><label>" +
        taskList[index].taskname +
        "</label><input type='text'/><button class='edit' id='editassign" +
        index +
        "' value='" +
        index +
        "' onclick='edit(this)'>Edit</button><button class='delete' id='delassign" +
        index +
        "' value='" +
        index +
        "' onclick='del(this)'>Delete</button></li>";
    }
  }
  completedList += "</ul>";
  document.getElementById("donetask").innerHTML = completedList;
}
//add new task-----------------------------------------------------------------
function addtask() {
  var newtask = document.getElementById("new-task").value;
  var newtaskDetails = { taskname: newtask, taskstatus: "assigned" };
  taskList.push(newtaskDetails);
  let todolist = "<ul id='incomplete-tasks'>";
  for (let index = 0; index < taskList.length; index++) {
    if (taskList[index].taskstatus == "assigned") {
      todolist +=
        "<li><input type='checkbox' id='taskin" +
        index +
        "' onclick='chk_stat(this)' value='" +
        index +
        "' /><label>" +
        taskList[index].taskname +
        "</label><input type='text'/><button class='edit' id='editassign" +
        index +
        "' value='" +
        index +
        "' onclick='edit(this)'>Edit</button><button class='delete' id='delassign" +
        index +
        "' value='" +
        index +
        "' onclick='del(this)'>Delete</button></li>";
      document.getElementById("todotasks").innerHTML = todolist;
    }
    var completedList = "<ul id='completed-tasks'>";
    for (let index = 0; index < taskList.length; index++) {
      if (taskList[index].taskstatus == "completed") {
        completedList +=
          "<li><input type='checkbox' id='taskin" +
          index +
          "' onclick='chk_stat(this)' value='" +
          index +
          "' /><label>" +
          taskList[index].taskname +
          "</label><input type='text'/><button class='edit' id='editassign" +
          index +
          "' value='" +
          index +
          "' onclick='edit(this)'>Edit</button><button class='delete' id='delassign" +
          index +
          "' value='" +
          index +
          "' onclick='del(this)'>Delete</button></li>";
      }
    }
    completedList += "</ul>";
    document.getElementById("donetask").innerHTML = completedList;
  }
}
// mark as complete or incomplete------------------------------------------------------------
function chk_stat(obj) {
  var chk_index = obj.id;

  if (document.getElementById(chk_index).checked == true) {
    var vals = obj.value;
    if (taskList[vals].taskstatus == "assigned") {
      taskList[vals].taskstatus = "completed";
    } else {
      taskList[vals].taskstatus = "assigned";
    }
    let todolist = "<ul id='incomplete-tasks'>";
    for (let index = 0; index < taskList.length; index++) {
      if (taskList[index].taskstatus == "assigned") {
        todolist +=
          "<li><input type='checkbox' id='taskin" +
          index +
          "' onclick='chk_stat(this)' value='" +
          index +
          "' /><label>" +
          taskList[index].taskname +
          "</label><input type='text'/><button class='edit' id='editassign" +
          index +
          "' value='" +
          index +
          "' onclick='edit(this)'>Edit</button><button class='delete' id='delassign" +
          index +
          "' value='" +
          index +
          "' onclick='del(this)'>Delete</button></li>";
        document.getElementById("todotasks").innerHTML = todolist;
      }
      var completedList = "<ul id='completed-tasks'>";
      for (let index = 0; index < taskList.length; index++) {
        if (taskList[index].taskstatus == "completed") {
          completedList +=
            "<li><input type='checkbox' id='taskin" +
            index +
            "' onclick='chk_stat(this)' value='" +
            index +
            "' /><label>" +
            taskList[index].taskname +
            "</label><input type='text'/><button class='edit' id='editassign" +
            index +
            "' value='" +
            index +
            "' onclick='edit(this)'>Edit</button><button class='delete' id='delassign" +
            index +
            "' value='" +
            index +
            "' onclick='del(this)'>Delete</button></li>";
        }
      }
      completedList += "</ul>";
      document.getElementById("donetask").innerHTML = completedList;
    }
  }
}
//on edit click----------------------------------------------
var toedit_arr = [];
function edit(obj) {
  var edit_id = obj.id;
  document.getElementById("new-task").value = taskList[obj.value].taskname;
  document.getElementById("btnAdd").style.display = "none";
  document.getElementById("btnEdit").style.display = "";
  var toedit = {
    tname: taskList[obj.value].taskname,
    tstatus: taskList[obj.value].taskstatus,
    tindex: obj.value,
  };
  if (toedit_arr.length > 0) {
    toedit_arr.splice(0, toedit_arr.length);
    toedit_arr.push(toedit);
  } else {
    toedit_arr.push(toedit);
  }
  console.log(toedit_arr);
  taskList.splice(obj.value, 1);
  let todolist = "<ul id='incomplete-tasks'>";
  for (let index = 0; index < taskList.length; index++) {
    if (taskList[index].taskstatus == "assigned") {
      todolist +=
        "<li><input type='checkbox' id='taskin" +
        index +
        "' onclick='chk_stat(this)' value='" +
        index +
        "' /><label>" +
        taskList[index].taskname +
        "</label><input type='text'/><button class='edit' id='editassign" +
        index +
        "' value='" +
        index +
        "' onclick='edit(this)'>Edit</button><button class='delete' id='delassign" +
        index +
        "' value='" +
        index +
        "' onclick='del(this)'>Delete</button></li>";
      document.getElementById("todotasks").innerHTML = todolist;
    }
    var completedList = "<ul id='completed-tasks'>";
    for (let index = 0; index < taskList.length; index++) {
      if (taskList[index].taskstatus == "completed") {
        completedList +=
          "<li><input type='checkbox' id='taskin" +
          index +
          "' onclick='chk_stat(this)' value='" +
          index +
          "' /><label>" +
          taskList[index].taskname +
          "</label><input type='text'/><button class='edit' id='editassign" +
          index +
          "' value='" +
          index +
          "' onclick='edit(this)'>Edit</button><button class='delete' id='delassign" +
          index +
          "' value='" +
          index +
          "' onclick='del(this)'>Delete</button></li>";
      }
    }
    completedList += "</ul>";
    document.getElementById("donetask").innerHTML = completedList;
  }
}
function edittask() {
  var taskUpd = document.getElementById("new-task").value;
  for (a = 0; a < toedit_arr.length; a++) {
    var oldind = toedit_arr[a].tindex;
    var tstat = toedit_arr[a].tstatus;
    var values = { taskname: taskUpd, taskstatus: tstat };
    taskList.splice(oldind, 0, values);
    let todolist = "<ul id='incomplete-tasks'>";
    for (let index = 0; index < taskList.length; index++) {
      if (taskList[index].taskstatus == "assigned") {
        todolist +=
          "<li><input type='checkbox' id='taskin" +
          index +
          "' onclick='chk_stat(this)' value='" +
          index +
          "' /><label>" +
          taskList[index].taskname +
          "</label><input type='text'/><button class='edit' id='editassign" +
          index +
          "' value='" +
          index +
          "' onclick='edit(this)'>Edit</button><button class='delete' id='delassign" +
          index +
          "' value='" +
          index +
          "' onclick='del(this)'>Delete</button></li>";
        document.getElementById("todotasks").innerHTML = todolist;
        document.getElementById("btnAdd").style.display = "";
        document.getElementById("btnEdit").style.display = "none";
        document.getElementById("new-task").style.display = "";
      }
      var completedList = "<ul id='completed-tasks'>";
      for (let index = 0; index < taskList.length; index++) {
        if (taskList[index].taskstatus == "completed") {
          completedList +=
            "<li><input type='checkbox' id='taskin" +
            index +
            "' onclick='chk_stat(this)' value='" +
            index +
            "' /><label>" +
            taskList[index].taskname +
            "</label><input type='text'/><button class='edit' id='editassign" +
            index +
            "' value='" +
            index +
            "' onclick='edit(this)'>Edit</button><button class='delete' id='delassign" +
            index +
            "' value='" +
            index +
            "' onclick='del(this)'>Delete</button></li>";
        }
      }
      completedList += "</ul>";
      document.getElementById("donetask").innerHTML = completedList;
    }
  }
}
//delete task
function del(obj) {
  var edit_id = obj.id;
  taskList.splice(obj.value, 1);
  let todolist = "<ul id='incomplete-tasks'>";
  for (let index = 0; index < taskList.length; index++) {
    if (taskList[index].taskstatus == "assigned") {
      todolist +=
        "<li><input type='checkbox' id='taskin" +
        index +
        "' onclick='chk_stat(this)' value='" +
        index +
        "' /><label>" +
        taskList[index].taskname +
        "</label><input type='text'/><button class='edit' id='editassign" +
        index +
        "' value='" +
        index +
        "' onclick='edit(this)'>Edit</button><button class='delete' id='delassign" +
        index +
        "' value='" +
        index +
        "' onclick='del(this)'>Delete</button></li>";
      document.getElementById("todotasks").innerHTML = todolist;
    }
    var completedList = "<ul id='completed-tasks'>";
    for (let index = 0; index < taskList.length; index++) {
      if (taskList[index].taskstatus == "completed") {
        completedList +=
          "<li><input type='checkbox' id='taskin" +
          index +
          "' onclick='chk_stat(this)' value='" +
          index +
          "' /><label>" +
          taskList[index].taskname +
          "</label><input type='text'/><button class='edit' id='editassign" +
          index +
          "' value='" +
          index +
          "' onclick='edit(this)'>Edit</button><button class='delete' id='delassign" +
          index +
          "' value='" +
          index +
          "' onclick='del(this)'>Delete</button></li>";
      }
    }
    completedList += "</ul>";
    document.getElementById("donetask").innerHTML = completedList;
  }
}
