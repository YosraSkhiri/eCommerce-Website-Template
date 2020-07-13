let images = document.querySelectorAll('.product-display__side-image > img');
let mainProductImage = document.querySelector('.product-display__main-image > img');

images.forEach(img => {
    img.addEventListener('click', ()=> {
        mainProductImage.src = img.src;
    })
})