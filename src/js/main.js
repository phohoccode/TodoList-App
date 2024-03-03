const toggleTheme = document.querySelector('.theme')
const root = document.getElementById('root')
console.log(toggleTheme)
toggleTheme.addEventListener('click', () => {
    root.classList.toggle('theme-dark')
})