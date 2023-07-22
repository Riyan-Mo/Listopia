export default class Project{
  
  tasks = [];
  isComplete = true;

  constructor(_title, _id){
    this.title = _title;
    this.id = _id;
  }
  
}