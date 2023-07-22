export default class ToDo{

  parentId = "";

  constructor(_title, _dueDate, _priority, _id){
    this.title = _title;
    this.dueDate = _dueDate;
    this.priority = _priority;
    this.id = _id;
    this.isComplete = false;
  }
}