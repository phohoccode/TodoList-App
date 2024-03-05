import html from "../lib/core.js";
import { connect } from "../store.js"

function footer({todos, filters}) {
    let value = ((todos.filter(todo => todo.completed).length / todos.length) * 100).toFixed(1) + '%'

    if (isNaN(value)) {
        value = 0 + '%'
    }
    return html`
    <footer class="footer">
        <span class="text-completed">Task completed</span>
        <div class="progress-bar">
            <div class="progress-bar--completed" style="width: ${value}">
            <span class="number-completed">
                 ${value}
             </span>
            </div>
        </div>
    </footer>
    `
}

export default connect()(footer)
