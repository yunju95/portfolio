'use strict';

(function(){
  // load event
  let timeId;
  const mvElem = document.querySelector('.mvWrap');

  function loadEventHandler() {
    mvElem.classList.add('on');
  }

  timeId = setTimeout(loadEventHandler, 400);

  mvElem.addEventListener('load', (event) => {
    clearTimeout(timeId);
  });


  const mvtxtWrap = document.querySelector('.mv_txt');
  const mvtxtElem = document.querySelectorAll('.mv_txt > strong');
  const mousePos = { x: 0, y: 0 };
//  console.log(mvtxtElem);

  mvtxtWrap.addEventListener('mousemove', function (e) {
    mousePos.x = -1 + (e.clientX / window.innerWidth) * 2;
    mousePos.y = 1 - (e.clientY / window.innerHeight) * 2;

    for(let i = 0; i < mvtxtElem.length; i++){
      mvtxtElem[i].style.transform = 'rotateX(' + (mousePos.y * 30) + 'deg) rotateY(' + (mousePos.x * 30) + 'deg)';
    }
  });

  
  
// work slider
  const workSlider = new Swiper('.work_slider', {
    loop: true,
    navigation: {
      nextEl: '.work-slider-arr .next',
      prevEl: '.work-slider-arr .prev',
    },
    slidesPerView: 1,
    spaceBetween: 12,
    breakpoints: {
      767: {
        slidesPerView: 2,
        spaceBetween: 26,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 36,
      },
    }
  });


})();


