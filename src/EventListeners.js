import NewTasks from "./NewTasks.js";

export default class EventListeners{

  constructor(toDoList){
    this.toDoList = toDoList;
  }

  eventListenProject(){  
    const projectsTile = document.getElementById("projects");
    const btn = new NewTasks(this.toDoList, "Projects");
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
    const btn = new NewTasks(this.toDoList, "Tasks");
    tasksTile.addEventListener("click", ()=>btn.renderTasks());
  }

  eventListenComplete(){  
    const completeTile = document.getElementById("complete");
    const btn = new NewTasks(this.toDoList, "completed");
    completeTile.addEventListener("click", ()=>btn.renderTasks());
  }

}

