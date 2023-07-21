import AddTaskProject from "./AddTaskProject.js";

export default class EventListeners{

  constructor(toDoList){
    this.toDoList = toDoList;
  }

  eventListenProject(){  
    const btn = new AddTaskProject(this.toDoList, "Project");
    btn.renderRightbar(); 
  }

}

