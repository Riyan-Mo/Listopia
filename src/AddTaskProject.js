import Project from "./Project.js";
import Todo from "./ToDo.js";

export default class AddTaskProject{

  constructor(_arr, _prop){
    this.arr = _arr;
    this.prop = _prop;
  }

  makeProjectButton(){
    const btn = document.createElement('button');
    btn.textContent = `Add Project`;
    btn.className = "addProjectbtn";
    btn.addEventListener("click", ()=>this.addTaskCoverPage("Project"));
    return btn;
  }

  showNoTasks(){
    const noTaskDiv = document.createElement("div");
    const noTaskPara = document.createElement("p");
    let noTaskParaContent = `There are no current ${this.prop}`
    noTaskPara.textContent = noTaskParaContent;
    noTaskPara.classList.add("notask-para");
    noTaskDiv.className = "noTaskDiv";
    noTaskDiv.appendChild(noTaskPara);
    return noTaskDiv;
  }

  renderRightbar(){
    const [rightbar] = document.getElementsByClassName("rightbar");
    localStorage.setItem("Projects", JSON.stringify(this.arr));
    rightbar.innerHTML = "";
    rightbar.appendChild(this.makeProjectButton());
    if(this.arr.length === 0){
      rightbar.appendChild(this.showNoTasks());
    }
    else{
      rightbar.appendChild(this.renderProject());
    }
  }

  renderProject(){
    const ProjectContainer = document.createElement('div');
    ProjectContainer.className = "ProjectContainer";
    for(let i = 0; i<this.arr.length; i++){
      ProjectContainer.appendChild(this.makeProjectTile(this.arr[i]));  
    }
    return ProjectContainer;
  }

  makeAddTaskButton(){
    const btn = document.createElement('button');
    btn.className = "addTaskBtn"
    btn.textContent = "Add Task";
    btn.addEventListener('click', (e)=>{
      const parent = e.target.parentNode;
      this.addTaskCoverPage("Task", parent)
    })
    return btn;
  }

  makeProjectTile(_project){
    const projectTile = document.createElement('div');
    projectTile.className = "projectTile";
    projectTile.setAttribute("data-id", _project.id);
    const projectName = document.createElement('p');
    projectName.className = `projectName`;
    projectName.textContent = _project.title;
    projectTile.appendChild(projectName);
    projectTile.appendChild(this.makeAddTaskButton());
    projectTile.appendChild(this.makeDeletebtn("Project"));
    _project.tasks.length!==0?projectTile.appendChild(this.renderTasks(_project.tasks)):"";
    return projectTile;
  }

  renderTasks(_tasks){
    const taskDiv = document.createElement('div');
    taskDiv.classList.add("taskDiv");
    for(let i = 0; i<_tasks.length; i++){
      const task = document.createElement("div");
      task.className = "task";
      for(const key in _tasks[i]){
        const taskDetail = document.createElement('p');
        taskDetail.classList.add("taskDetail");
        if(key!=="id"&&key!=="isComplete"&&key!=="parentId"){
          taskDetail.textContent = _tasks[i][key];
          task.appendChild(taskDetail);
        }
        else if(key==="isComplete"){
          _tasks[i][key]?task.classList.add("complete"):task.classList.remove("complete");
        }
      }
      task.setAttribute('data-id', _tasks[i].id);
      task.setAttribute('data-parentid', _tasks[i].parentId);
      task.appendChild(this.makeMarkCompletebtn());
      task.appendChild(this.makeDeletebtn("Task"));
      taskDiv.appendChild(task);
    }
    return taskDiv;
  }

  makeMarkCompletebtn(){
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Done";
    deleteBtn.classList.add("changeBtn", "green");
    deleteBtn.addEventListener("click", ()=>{
      const parentId = deleteBtn.parentNode.getAttribute("data-parentid");
      const selfId = deleteBtn.parentNode.getAttribute("data-id");
      for(let i = 0; i<this.arr.length; i++){
          if(this.arr[i].id === parentId){
            for(let j = 0; j<this.arr[i].tasks.length; j++){
              if(this.arr[i].tasks[j].id === selfId){
                this.arr[i].tasks[j].isComplete=!this.arr[i].tasks[j].isComplete;
              }
            }
          }
      }
      this.renderRightbar();
    })
    return deleteBtn;
  }

  makeDeletebtn(_type){
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("changeBtn", "red");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener('click', ()=>{  
      if(_type==="Task"){
        const parentId = deleteBtn.parentNode.getAttribute("data-parentid");
        const selfId =  deleteBtn.parentNode.getAttribute("data-id");
        for(let i = 0; i<this.arr.length; i++){
            if(this.arr[i].id === parentId){
              for(let j = 0; j<this.arr[i].tasks.length; j++){
                if(this.arr[i].tasks[j].id === selfId){
                  this.arr[i].tasks.splice(j, 1);
                }
              }
            }
        }
      }
      else{
        const selfId = deleteBtn.parentNode.getAttribute("data-id");
          for(let i = 0; i<this.arr.length; i++){
            if(this.arr[i].id === selfId){
              this.arr.splice(i, 1);
            }
          }
      }
      this.renderRightbar();
    })
    return deleteBtn;
  }

  makeTask(){
    const title = document.getElementById('title').value;
    const date = document.getElementById("date").value;
    const priority = document.getElementById("priority").value;
    const id = this.idGenerator();
    const task = new Todo(title, date, priority, id);
    return task;
  }

  addTaskToArr(parent){
    const task = this.makeTask();
    const parentId = parent.getAttribute("data-id");
    task.parentId = parentId;
    for(let i = 0; i<this.arr.length; i++){
      if(this.arr[i].id===parentId){
        this.arr[i].tasks.push(task);
      }
    }
    this.renderRightbar();
  }

  addProject(){
    const name = document.getElementById("title");
    const project = new Project(name.value, this.idGenerator());
    this.arr.push(project)
    this.renderRightbar();
  }

  addTaskCoverPage(_for, parent=""){
    const coverPage = document.createElement('div');
    coverPage.className = "coverPage";
    coverPage.id = "coverPage";
    coverPage.appendChild(this.commonForm(_for, parent));
    coverPage.appendChild(this.closeButton());
    document.body.append(coverPage);
  }

  addTaskForm(){
    const taskForm = `
    <div>
    <label for="title">Task Title</label>
    <input id="title" name="title" type="textbox" required>
    </div>
    <div>
    <label for="date">Task Date</label>
    <input id="date" name="date" type="date" required>
    </div>
    <div>
    <label for="priority">Priority</label>
    <select id="priority" required>
    <option>Low</option>
    <option>Medium</option>
    <option>High</option>
    <option>Urgent</option>
    </select>
    </div>
    `
    return taskForm;
  }

  addProjectForm(){
    const projectDiv = `
    <div>
    <label for="title">Project Title</label>
    <input id="title" name="title" type="textbox" required>
    </div>
    `
    return projectDiv;
  }

  commonForm(_type, parent=""){
    const form = document.createElement('form');
    form.method = "post";
    form.classList.add("overlayForm");
    form.innerHTML += `<p class="formTitle">Enter details</p>`
    const conditionalForm = _type=="Project"?this.addProjectForm():this.addTaskForm();
    const submitButton = `<button class="formSubmit">Add</button>`
    form.innerHTML += conditionalForm+submitButton;
    form.addEventListener("submit", (e)=>{
      e.preventDefault();
      _type==="Task"?this.addTaskToArr(parent):this.addProject();
      const parentNode = document.getElementById("coverPage");
      document.body.removeChild(parentNode);
    });
    return form;
  }

  closeButton(){
    const closeBtn = document.createElement("button");
    closeBtn.type = "button";
    closeBtn.addEventListener("click", ()=>{
    document.body.removeChild(document.getElementById('coverPage'))
  })
    closeBtn.textContent = "X";
    closeBtn.classList.add("closeBtn");
    return closeBtn;
  }

  idGenerator(){
    const alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
    let id = "";
    id+= alphabets[Math.floor(Math.random()* 4)];
    for(let i = 0; i<7; i++){
      id += Math.floor(Math.random() * 10);
    }
    return id;
  }

}