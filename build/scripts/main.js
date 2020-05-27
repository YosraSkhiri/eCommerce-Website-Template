const searchIcon = document.querySelector('#searchIcon')
const searchBar = document.querySelector('#searchBar')
const men = document.querySelector('#men')
const menuMen = document.querySelector('#menuMen')
const menuIcon = document.querySelector('#menuIcon')
const menu = document.querySelector('#menu')

searchIcon.addEventListener('click', () => {
    menu.classList.remove('menu-show')
    searchBar.classList.toggle('search-bar--show')
})

men.addEventListener('click', () => {
    menuMen.classList.toggle('submenu-show')
})

menuIcon.addEventListener('click', () => {
    searchBar.classList.remove('search-bar--show')
    menu.classList.toggle('menu-show')
})
