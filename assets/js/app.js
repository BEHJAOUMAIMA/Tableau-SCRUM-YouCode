
 function createTask() {
    const form = document.forms['form'];
    let add = {
      title : form.title.value,
      type  :  form.flexRadioDefault.value,
      priority : form.priority.value,
      status : form.status.value,
      date : form.date.value,
      description :form.description.value,
    }
    tasks.push(add);
    reloadTasks();     
}


function saveTask() {
  createTask();
  document.getElementById('form').reset(); 
}

function editTask(index) {
  console.log(index);

}

function updateTask() {
    
}

function deleteTask(index) {
  tasks.splice(index,1);
  reloadTasks();
}

function reloadTasks() {
    document.getElementById('to-do-tasks').innerHTML = "";
    document.getElementById('doing-tasks').innerHTML = "";
    document.getElementById('done-tasks').innerHTML = "";
    let selectStatus;
    document.getElementById('to-do-tasks-count').innerHTML = 0;
    document.getElementById('doing-tasks-count').innerHTML = 0;
    document.getElementById('done-tasks-count').innerHTML = 0;
    for (let index = 0; index < tasks.length; index++) {
        if (tasks[index].status== 'To Do') {
            selectStatus = document.getElementById('to-do-tasks');
            document.getElementById('to-do-tasks-count').innerHTML++;
        }
        else if(tasks[index].status== 'In Progress'){
            selectStatus = document.getElementById('doing-tasks');
            document.getElementById('doing-tasks-count').innerHTML++;
        }
        else if(tasks[index].status== 'Done'){
            selectStatus = document.getElementById('done-tasks');
            document.getElementById('done-tasks-count').innerHTML++;

        }
        

        selectStatus.innerHTML += `
        <button class="w-100 border-0 d-flex bg-gray-200 border-bottom">
                  <div class="col-1 mt-1">
                    <i class="`
                    +((tasks[index].status == 'To Do')?'fa fa-clock circle'
                    :(tasks[index].status == 'In Progress') ?'fa fa-calendar'
                    :'fa fa-check')+`
                     h4 text-pink"></i>
                  </div>
                  <div class="text-start col-11 mt-1">
                    <div class="fw-bold">
                      ${tasks[index].title}
                    </div>
                    <div class="">
                      <div class="">#${index+1} created in ${tasks[index].date}</div>
                      <div
                        class=""
                        title="${tasks[index].title}"
                      >
                      ${tasks[index].title}
                      </div>
                    </div>
                    <div class="h5">
                      <span class="btn btn-sm btn-primary p-0 px-1">High</span>
                      <span class="btn btn-sm btn-light text-black p-0 px-1">Feature</span>
                      <span type="button" onclick="editTask(${index})" class="btn btn-warning p-0 px-1">Edit</span>
                      <span type="button" onclick="deleteTask(${index})" class="btn btn-danger p-0 px-1">Delete</span>

                    </div>
                  </div>
        </button>
        `;           
    }
}

