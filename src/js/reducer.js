import storage from "./util/storage.js"

const init = {
    todos: storage.get(),
    filters: {
        active: todo => !todo.completed, 
        completed: todo => todo.completed
    },
    editIndex: null
}

const actions = {
    add({todos}, content) {
        if (content) {
            todos.push({content, completed: false})
            storage.set(todos)
        }
    },
    toggle({todos}, index) {
        const todo = todos[index]
        todo.completed = !todo.completed
        storage.set(todos)
    },
    delete({todos}, index) {
        todos.splice(index, 1)
        storage.set(todos)
    },
    download({todos}, index) {
        const downloadNode = document.createElement('a')
        const value = todos[index].content
        downloadNode.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(value)
        downloadNode.setAttribute('download', `phohoccode.txt`)
        document.body.appendChild(downloadNode)
        downloadNode.click()
        document.body.removeChild(downloadNode)
    },
    startEdit(state, index) {
        state.editIndex = index
    },
    endEdit(state, content) {
        if (state.editIndex !== null) {
            if (content) {
                state.todos[state.editIndex].content = content
                storage.set(state.todos)
            } else {
                this.delete(state, state.editIndex)
            }
            state.editIndex = null
        }
    }
}

export default function reducer(state = init, action, args) {
    actions[action] && actions[action](state, ...args)
    return state
}

