import Project from "./Project.js";

export default class AddTaskProject{

  constructor(_arr, _prop){
    this.arr = _arr;
    this.prop = _prop;
  }

  makeButton(){
    const todoBtn = document.createElement("button");
    todoBtn.classList.add("addtaskbtn");
    todoBtn.textContent = `Add ${this.prop}`;
    todoBtn.addEventListener('click', () => this.addTaskCoverPage())
    return todoBtn;
  }

  showNoTasks(){
    const noTaskPara = document.createElement("p");
    let noTaskParaContent = `There are no current ${this.prop}`
    this.prop==="completed"?noTaskParaContent="No tasks completed":""; 
    noTaskPara.textContent = noTaskParaContent;
    noTaskPara.classList.add("notask-para");
    return noTaskPara;
  }

  renderTasks(){
    const [rightbar] = document.getElementsByClassName("rightbar");
    rightbar.innerHTML = "";
    if(this.arr.length === 0 && this.prop!=="completed"){
      rightbar.appendChild(this.showNoTasks());
      rightbar.appendChild(this.makeButton());
    }
    else if(this.prop==="completed"){
      rightbar.appendChild(this.showNoTasks());
    }
    else if(this.arr.length>0){
      for(const children in this.arr){
        const child = document.createElement('p');
        child.textContent = children.title;
        rightbar.appendChild(child);
    }
  }

  }

  addTaskCoverPage(){
    const coverPage = document.createElement('div');
    coverPage.className = "coverPage";
    coverPage.id = "coverPage";
    const form = this.commonForm();
    coverPage.append(this.closeButton());
    coverPage.appendChild(form);
    document.body.append(coverPage);
  }

  addTaskForm(){
    const taskDiv = `
    <div>
    <label for="title">${this.prop} Title</label>
    <input id="title" name="title" type="textbox">
    </div>
    <div>
    <label for="date">${this.prop} Date</label>
    <input id="date" name="date" type="date">
    </div>
    `
    return taskDiv;
  }

  addProjectForm(){
    const projectDiv = `
    <div>
    <label for="title">${this.prop} Title</label>
    <input id="title" name="title" type="textbox">
    </div>
    `
    return projectDiv;
  }

  commonForm(){
    const form = document.createElement('form');
    form.method = "post";
    form.classList.add("overlayForm");
    form.innerHTML += `<p class="formTitle">Enter details</p>`
    const conditionalForm = this.prop==="Project"?this.addProjectForm():this.addTaskForm();
    const submitButton = `<button class="formSubmit">Add</button>`
    form.innerHTML += conditionalForm+submitButton;
    form.addEventListener("submit", (e)=>{
      e.preventDefault();
      this.prop==="Task"?this.addTaskToArr():this.addProjectToArr();
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

  addTaskToArr(){
  
  }

  addProjectToArr(){
    const title = document.getElementById("title");
    const project = new Project(title.value);
    this.arr.push(project);
    console.log(this.arr)
  }

}