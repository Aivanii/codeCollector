'use strict';
const menus = document.querySelectorAll('.ListContainer');
const PrLnBtns = document.querySelectorAll('.ListButton');
for(let i = 0; i < PrLnBtns.length; i++){
    PrLnBtns[i].addEventListener('click', () => {
        PrLnBtns[i].classList.toggle('active')
        if(PrLnBtns[i].classList.contains('active')){
            PrLnBtns[i].setAttribute('aria-expanded', 'true');
            menus[i].setAttribute('aria-hidden', 'false');
            menus[i].style.height = "100%";
            menus[i].style.lineHeight = "1.2";
            menus[i].style.opacity = "1";
        }else{
            PrLnBtns[i].setAttribute('aria-expanded', 'false');
            menus[i].setAttribute('aria-hidden', 'true');
            menus[i].style.height = "0";
            menus[i].style.lineHeight = "0";
            menus[i].style.opacity = "0";
        }
    });
    menus[i].style.height = "0";
    menus[i].style.lineHeight = "0";
    menus[i].style.opacity = "0";
}


