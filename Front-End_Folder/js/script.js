const swiper = new Swiper('.swiper', {

    direction: "horizontal",
    loop: true,

    slidesPerView: 3,
    centeredSlides: true,


    pagination: {
        el: '.swiper-pagination',

        dynamicBullets: true,
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


swiper.on('slideNextTransitionStart',() => {
    updateMainBackground()
})


swiper.on('slidePrevTransitionStart',() => {
    updateMainBackground()
})

function updateMainBackground() {
   
    const activeSlide = document.querySelector('.swiper-slide-active')
 
   const mainContainer = document.querySelector('.main-slides')

   

}