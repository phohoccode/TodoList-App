import html from "../lib/core.js";


function header() {
    return html`
        <header class="header">
            <h1 class="title">My todo list</h1>
            <div class="todo-work">
                <input type="text" class="input-todo" placeholder="Task content...">
                <button 
                    title="Add" 
                    class="add"
                    onclick="dispatch('add', document.querySelector('.input-todo').value)"    
                >
                Add task
                </button>
            </div>
            <button title="Change theme" class="theme">
                <div class="light">
                    <i class="fa-light fa-sun-bright"></i>
                </div>
                <div class="dark">
                <i class="fa-light fa-moon"></i>
                </div>
            </button>
        </header>
    `
}

export default header