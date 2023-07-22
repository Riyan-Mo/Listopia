import "./styles.css";
import PageLayout from "./pageLayout.js";
import AddTaskProject from "./AddTaskProject.js";

window.onload = function(){
  const taskArr = JSON.parse(localStorage.getItem("Projects"))||[];
  const page = new PageLayout();
  page.createLayout();
  const btn = new AddTaskProject(taskArr, "Project");
  btn.renderRightbar(); 
}


