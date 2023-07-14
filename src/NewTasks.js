export default class NewTasks{

  constructor(_arr, _prop){
    this.arr = _arr;
    this.prop = _prop;
  }

  makeButton(){
    const todoBtn = document.createElement("button");
    todoBtn.classList.add("addtaskbtn");
    todoBtn.textContent = `Add ${this.prop}`;
    todoBtn.addEventListener('click', function(){
      
    })
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
  
  }

  // addTaskCoverPage(){
  //   const coverPage = document.createElement('div');
  //   coverPage.className = "coverPage";
  //   const form = this.addTaskForm();
  //   coverPage.appendChild(form);
  //   return coverPage;
  // }

  // addTaskForm(){
  //   const form = document.createElement('form');
  //   form.classList.add("overlayForm");
  //   form.innerHTML = `<div></div>`
  //   form.method = "post";
  // }

  // addTaskToArr(){

  // }

}