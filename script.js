const myObserver = new IntersectionObserver((entries) => {
    entries.forEach( (entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('show')
        }
    })
})
const elements = document.querySelectorAll('.hidden')

elements.forEach((element) => myObserver.observe(element) )




const carousel = document.querySelector(".carousel");
const arrowBtns = document.querySelectorAll(".wrapper i");
const firstCarWidth = carousel.querySelector(".card").offsetWidth;
const carouselChildrens = [...carousel.children];

arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id === "left" ? -firstCarWidth : firstCarWidth;
    })
});

let cardPerView = Math.round(carousel.offsetWidth / firstCarWidth);

carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

carouselChildrens.slice(0, cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

const infiniteScroll = () => {
    // se o carrosel for ate o fim volta para o começo
    if(carousel.scrollLeft === 0){
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
    } 
    
    else if(Math.ceil(carousel.scrollLeft)=== carousel.scrollWidth - carousel.offsetWidth){
        carousel.scrollLeft = carousel.offsetWidth;
    }
}

carousel.addEventListener("scroll", infiniteScroll);



