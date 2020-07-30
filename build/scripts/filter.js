let productBtn = document.querySelectorAll('.product-typ-btn-js');
let productTab = document.querySelectorAll('.product-tab-js');
let productTabArrows = document.querySelectorAll('.filter-title-arrow');

productBtn.forEach((element, index) => {
    element.addEventListener('click', () => {
        productTabArrows[index].classList.toggle('rotate');
        if(productTab[index].style.display === "none"){
            productTab[index].style.display = "block";
            setTimeout(function() {
                productTab[index].classList.toggle('filter-toggle');
            }, 100);
        } else {
            productTab[index].classList.toggle('filter-toggle');
            setTimeout(function() {
                productTab[index].style.display = "none";
            }, 500);
        }
    });
});
