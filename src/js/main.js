// const toggleTheme = document.querySelector('.theme')
// const root = document.getElementById('root')
// const deleteBtn = document.querySelectorAll('.delete')
// const li = document.querySelector('.editing')
// console.log(li)
// toggleTheme.addEventListener('click', () => {
//     root.classList.toggle('theme-dark')
// })


// deleteBtn.forEach(deleteBTn => {
//     deleteBTn.addEventListener('click', () => {
//         console.log('error')
//         li.style.animation = 'toLeft ease .3s'
//     })
// })

import {attach} from './store.js'
import app from './component/app.js'

// attach(component, root)
attach(app, document.getElementById('root'))