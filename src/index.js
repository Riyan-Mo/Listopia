import "./styles.css";
import PageLayout from "./pageLayout.js";
import EventListeners from "./EventListeners";

window.onload = function(){
  const taskArr = [];
  const page = new PageLayout();
  page.createLayout();
  const eve = new EventListeners(taskArr); 
  eve.eventListenProject();
}


