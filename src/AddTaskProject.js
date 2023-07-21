import Project from "./Project.js";

export default class AddTaskProject{

  constructor(_arr, _prop){
    this.arr = _arr;
    this.prop = _prop;
  }

  makeProjectButton(){
    const btn = document.createElement('button');
    btn.textContent = `Add Project`;
    btn.className = "addtaskbtn";
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
    for(const project of this.arr){
      ProjectContainer.appendChild(this.makeProjectTile(project));  
    }
    return ProjectContainer;
  }

  makeProjectTile(_project){
    const projectTile = document.createElement('div');
    projectTile.className = "projectTile";
    const projectName = document.createElement('p');
    projectName.className = `projectName`;
    projectName.textContent = _project.title;
    projectTile.appendChild(projectName);
    _project.tasks?projectTile.appendChild(this.renderTasks(_project.tasks)):"";
    projectTile.appendChild(this.makeAddTaskButton());
    return projectTile;
  }

  makeAddTaskButton(){
    const btn = document.createElement('button');
    btn.className = "addTaskBtn"
    btn.textContent = "Add Task";
    btn.addEventListener('click', ()=>this.addTaskCoverPage("Task"))
    return btn;
  }

  renderTasks(_tasks){
    const task = document.createElement("div");
    task.className = "task";
    console.log(_tasks);
    for(const key of this._tasks){
      const taskDetail = document.createElement('div');
      taskDetail.classList.add("taskDetail");
      taskDetail.textContent = key;
      task.appendChild(taskDetail);
    }
    return task;
  }

  addTask(){
  
  }

  addProject(){
    const name = document.getElementById("title");
    const project = new Project(name.value);
    this.arr.push(project)
    console.log(project);
    this.renderRightbar();
  }

  addTaskCoverPage(_for){
    const coverPage = document.createElement('div');
    coverPage.className = "coverPage";
    coverPage.id = "coverPage";
    coverPage.appendChild(this.commonForm(_for));
    coverPage.appendChild(this.closeButton());
    document.body.append(coverPage);
  }

  addTaskForm(){
    const taskDiv = `
    <div>
    <label for="title">Task Title</label>
    <input id="title" name="title" type="textbox">
    </div>
    <div>
    <label for="date">Task Date</label>
    <input id="date" name="date" type="date">
    </div>
    <div>
    <label for="priority">Priority</label>
    <select>
    <option>Low</option>
    <option>Medium</option>
    <option>High</option>
    <option>Urgent</option>
    </select>
    </div>
    `
    return taskDiv;
  }

  addProjectForm(){
    const projectDiv = `
    <div>
    <label for="title">Task Title</label>
    <input id="title" name="title" type="textbox">
    </div>
    `
    return projectDiv;
  }

  commonForm(_type){
    const form = document.createElement('form');
    form.method = "post";
    form.classList.add("overlayForm");
    form.innerHTML += `<p class="formTitle">Enter details</p>`
    const conditionalForm = _type=="Project"?this.addProjectForm():this.addTaskForm();
    const submitButton = `<button class="formSubmit">Add</button>`
    form.innerHTML += conditionalForm+submitButton;
    form.addEventListener("submit", (e)=>{
      e.preventDefault();
      _type==="Task"?this.addTask():this.addProject();
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

}