'use strict';

// header load event
let loadId;
const headerElem = document.querySelector('#header');

function loadHeaderHandler() {
  headerElem.classList.add('on');
}

loadId = setTimeout(loadHeaderHandler, 400);

headerElem.addEventListener('load', (event) => {
  clearTimeout(loadId);
});

// winH
(function(){
  const winH = document.querySelectorAll('.winH');
  const footerElem = document.querySelector('#footer');
  const subContElem = document.querySelector('.sub #container')

  function respHeighHandler(){
    const vh = window.innerHeight;
    for( let i = 0; i < winH.length; i++ ){ 
      
      const footerH = footerElem.offsetHeight;
      //console.log(vh);
      
      winH[i].style.height = vh + 'px';
      winH[1].style.height = (vh - footerH) + 'px';  
    }
    if ( subContElem == true ){
      subContElem.style.minHeight = vh + 'px';
    }
  }
  
  window.addEventListener('load', respHeighHandler);
  window.addEventListener('resize', respHeighHandler);
})();

// scroll animate
(function(){
 
  const animateElem = document.querySelectorAll('.animate');

  function animateEventHandler(){
    const eTrigger = window.innerHeight / 2;
    for(let i = 0; i < animateElem.length; i++){
      if(animateElem[i].getBoundingClientRect().top <= eTrigger){
        animateElem[i].classList.add("active");
      }
    }
  //  console.log(eTrigger);
  }

  window.addEventListener('scroll', animateEventHandler);
  window.addEventListener('load', animateEventHandler);
})();

