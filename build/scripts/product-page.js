let images = document.querySelectorAll('.product-display__side-image > img');
let mainProductImage = document.querySelector('.product-display__main-image > img');

let btnDescription = document.querySelector('#product-description-btn');
let btnReviews = document.querySelector('#product-reviews-btn');

let tabDescription = document.querySelector('#product-description');
let tabReviews = document.querySelector('#product-reviews');


images.forEach(img => {
    img.addEventListener('click', ()=> {
        mainProductImage.src = img.src;
    })
})

btnDescription.addEventListener('click', () => {
    tabDescription.style='display: flex;';
    tabReviews.style='display: none;';

    btnDescription.classList.remove('btn__tab--inactive');
    btnDescription.classList.add('btn__tab--active');
    btnReviews.classList.add('btn__tab--inactive');

})

btnReviews.addEventListener('click', () => {
    tabReviews.style='display: grid;';
    tabDescription.style='display: none;';

    btnReviews.classList.remove('btn__tab--inactive');
    btnReviews.classList.add('btn__tab--active');
    btnDescription.classList.add('btn__tab--inactive');
})