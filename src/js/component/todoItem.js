import html from "../lib/core.js";
import { connect } from "../store.js";

function todoItem({todo, index, editIndex}) {
    return html`
        <li class="${editIndex === index && 'editing'}">
            <div class="view">
                <div class="view-left">
                    <input 
                        type="checkbox" 
                        class="toggle"
                        ${todo.completed && 'checked'}
                        onclick="dispatch('toggle', ${index})"
                    >
                    </input>
                    <p class="content">${todo.content}</p>
                </div>
                <div class="actions">
                    <button 
                        class="action download"
                        onclick="dispatch('download', ${index})"
                    >
                        <i class="fa-light fa-arrow-down-to-line"></i>
                    </button>
                    <button
                         class="action edit"
                         onclick="dispatch('startEdit', ${index})"
                    >    
                        <i class="fa-light fa-pen"></i>
                    </button>
                    <button 
                        class="action delete"
                        onclick="dispatch('delete', ${index})"
                    >
                        <i class="fa-light fa-trash-can"></i>
                    </button>
                </div>
            </div>
            <div class="container-edit">
                <input 
                    type="text" 
                    class="input-edit" 
                    value="${todo.content}">
                <button 
                    class="save"
                    onclick="dispatch('endEdit', document.querySelector('.input-edit').value)"
                >
                    Save
                </button>
            </div>
        </li>
    `
}

export default connect()(todoItem)