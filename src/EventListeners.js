import AddTaskProject from "./AddTaskProject.js";

export default class EventListeners{

  constructor(toDoList){
    this.toDoList = toDoList;
  }

  eventListenProject(){  
    const projectsTile = document.getElementById("projects");
    const btn = new AddTaskProject(this.toDoList, "Project");
    projectsTile.addEventListener("click", ()=>btn.renderTasks());
  }
   
  loadFunction(){
      const projectsTile = document.getElementById("projects");
      this.eventListenProject();
      this.eventListenTasks();
      this.eventListenComplete();
      projectsTile.click();    
  }

  eventListenTasks(){  
    const tasksTile = document.getElementById("tasks");
    const btn = new AddTaskProject(this.toDoList, "Task");
    tasksTile.addEventListener("click", ()=>btn.renderTasks());
  }

  eventListenComplete(){  
    const completeTile = document.getElementById("complete");
    const btn = new AddTaskProject(this.toDoList, "completed");
    completeTile.addEventListener("click", ()=>btn.renderTasks());
  }

}

