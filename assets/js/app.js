function btnAddTask() {
  document.getElementById("save").style.display="block";
  document.getElementById("update").style.display="none";
}
function createTask() {
  const form = document.forms["form"];
  let add = {
    title: form.title.value,
    type: form.flexRadioDefault.value,
    priority: form.priority.value,
    status: form.status.value,
    date: form.date.value,
    description: form.description.value,
  };
  tasks.push(add);
  reloadTasks(); 
}
function saveTask() {
  createTask();
  document.getElementById("form").reset();
  
}
function editTask(index) {
  
  form.title.value = tasks[index].title;
  form.flexRadioDefault.value = tasks[index].type;
  form.priority.value = tasks[index].priority;
  form.status.value = tasks[index].status;
  form.date.value = tasks[index].date;
  form.description.value = tasks[index].description;
  form.id.value = index;
  document.getElementById("save").style.display ="none";
  document.getElementById("update").style.display ="block";
}
function updateTask() {
  let index = form.id.value;
  tasks[index].title = form.title.value;
  tasks[index].type = form.flexRadioDefault.value;
  tasks[index].priority = form.priority.value;
  tasks[index].status = form.status.value;
  tasks[index].date = form.date.value;
  tasks[index].description = form.description.value;
  reloadTasks();
}

function deleteTask(index) {
  if (confirm("Do you want to delete ?") == true) {
    tasks.splice(index, 1);
    reloadTasks();
  } else {
    return;
  }
}
function reloadTasks() {
  document.getElementById("to-do-tasks").innerHTML = "";
  document.getElementById("doing-tasks").innerHTML = "";
  document.getElementById("done-tasks").innerHTML = "";
  let selectStatus;
  document.getElementById("to-do-tasks-count").innerHTML = 0;
  document.getElementById("doing-tasks-count").innerHTML = 0;
  document.getElementById("done-tasks-count").innerHTML = 0;
  for (let index = 0; index < tasks.length; index++) {
    if (tasks[index].status == "To Do") {
      selectStatus = document.getElementById("to-do-tasks");
      document.getElementById("to-do-tasks-count").innerHTML++;
    } else if (tasks[index].status == "In Progress") {
      selectStatus = document.getElementById("doing-tasks");
      document.getElementById("doing-tasks-count").innerHTML++;
    } else if (tasks[index].status == "Done") {
      selectStatus = document.getElementById("done-tasks");
      document.getElementById("done-tasks-count").innerHTML++;
    }
    selectStatus.innerHTML +=
      `
          <button class="w-100 border-0 d-flex bg-gray-200 border-bottom">
            <div class="col-1 mt-1">
              <i class="` +
      (tasks[index].status == "To Do" ? "fa fa-clock circle" : tasks[index].status == "In Progress" ? "fa fa-calendar" : "fa fa-check") +` h4 text-pink"></i>
          </div>
            <div class="text-start col-11 mt-1">
              <div class="fw-bold">
                ${tasks[index].title}
              </div>
              <div class="">
                <div class="">#${index + 1} created in ${tasks[index].date}</div>
                  <div class="text-truncate" style="max-width:18rem" title="${tasks[index].description}">
                    ${tasks[index].description}
                  </div>
              </div>
              <div class="h5 d-flex m">
                <span class="btn btn-sm btn-primary me-2  p-0 px-3">${tasks[index].priority}</span>
                <span class="btn btn-sm btn-light text-black me-2 p-0 px-3">${tasks[index].type}</span>
                <span type="button" onclick="editTask(${index})" class="btn btn-secondary me-2 p-0 px-3" data-bs-toggle="modal" data-bs-target="#modal" data-bs-whatever="@fat">Edit</span>
                <span type="button" onclick="deleteTask(${index})" class="btn btn-danger me-2 p-0 px-3">Delete</span>
              </div>
          </div>
        </button>
        `;
  }
}