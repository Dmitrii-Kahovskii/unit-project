$(document).ready(function(){
    // находим блок с слайдами
    const owl = $("#clients-slider");
    // запускаем карусель
    owl.owlCarousel({
        items:1,
        loop: true,
    });
    // находим кастомные кнопки вперед,назад
 const prev = $(`#sliderPrew`);
 const next = $(`#sliderNext`);
// клик назад и прокрутка карусели
 prev.click(function(){
     owl.trigger(`prev.owl.carousel`)
 })

//  клик на кнопку вперед и прокрутка карусели
 next.click(function(){
     owl.trigger(`next.owl.carousel`)
 })
  });

// //   код пример
// var owl = $('.owl-carousel');
// owl.owlCarousel();
// // Go to the next item
// $('.customNextBtn').click(function() {
//     owl.trigger('next.owl.carousel');
// })
// // Go to the previous item
// $('.customPrevBtn').click(function() {
//     // With optional speed parameter
//     // Parameters has to be in square bracket '[]'
//     owl.trigger('prev.owl.carousel', [300]);
// })