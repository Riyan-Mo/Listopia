export default class PageLayout{
  
  createLayout(){
    document.body.innerHTML = `
    <div class="container">
    
    <div class="hero-title">Listopia</div>
    
    <div class="sidebar">
    <div id="projects">Projects⚙️</div>
    <div id="tasks">Tasks⚪</div>
    <div id="complete">Completed✅</div>
    </div>

    <div class="rightbar"></div>

    </div>`;
  }

}  