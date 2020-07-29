let listCards = document.querySelector('.product-cards-slider__cards-container');
let isDown = false;
let StartX, scrollLeft;
const leftArrow = document.querySelector('#leftArrow');
const rightArrow = document.querySelector('#rightArrow');

listCards.addEventListener('mousedown', (e) => {
    isDown = true;
    StartX = e.pageX - listCards.offsetLeft;
    scrollLeft = listCards.scrollLeft;
});

listCards.addEventListener('mouseleave', () => {
    isDown = false;
});

listCards.addEventListener('mouseup', () => {
    isDown = false;
});

listCards.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - listCards.offsetLeft;
    const walk = x - StartX;
    listCards.scrollLeft = scrollLeft - walk;
});

let nbrCardsInSlider = listCards.children.length;
let cardWidth = document.querySelector('.product-card').offsetWidth;
let cardMargin = 37*2;
let step = cardWidth + cardMargin;

leftArrow.addEventListener('click', () => {
    scrollLeft = listCards.scrollLeft;
    listCards.scrollLeft = scrollLeft - step;

    //rightArrow.children[0].setAttribute('fill', '#111111')
    //leftArrow.children[0].setAttribute('fill', '#cecece')
})

rightArrow.addEventListener('click', () => {
    scrollLeft = listCards.scrollLeft;
    listCards.scrollLeft = scrollLeft + step;

    leftArrow.children[0].setAttribute('fill', '#111111');
    //rightArrow.children[0].setAttribute('fill', '#cecece')
})