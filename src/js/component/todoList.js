import html from "../lib/core.js";
import todoItem from "../component/todoItem.js";
import {connect} from "../store.js"

function todoList({todos}) {
    return html`
    <section class="main">
        <h2 class="sub-title">Task</h2>
        <ul class="todo-list">
            ${todos.map((todo, index) => todoItem({todo, index}))}
        </ul>
    </section>
    `
}

export default connect()(todoList)