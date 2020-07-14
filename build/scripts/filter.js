let productBtn = document.querySelector('#product-typ-btn')
let productTab = document.querySelector('#product-tab')

productBtn.addEventListener('click', () => {
    productTab.classList.toggle('filter-toggle');
    console.log('h')
})