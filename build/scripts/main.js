const searchIcon = document.querySelector('#searchIcon')
const searchBar = document.querySelector('#searchBar')
const men = document.querySelector('#men')
const menuMen = document.querySelector('#menuMen')
const menuIcon = document.querySelector('#menuIcon')
const menu = document.querySelector('#menu')

const navIcons = document.querySelectorAll('.navbar__utility svg');

console.log(navIcons)

searchIcon.addEventListener('click', () => {
    menu.classList.remove('menu-show')
    navIcons.forEach(svg => {
        svg.classList.remove('fill-black')
        svg.classList.add('fill-white')
    });
    searchBar.classList.toggle('search-bar--show')

})

men.addEventListener('click', () => {
    menuMen.classList.toggle('submenu-show')
})

menuIcon.addEventListener('click', () => {
    searchBar.classList.remove('search-bar--show')
    menu.classList.toggle('menu-show')
    navIcons.forEach(svg => {
        svg.classList.toggle('fill-white')
        svg.classList.toggle('fill-black')
    });
})
