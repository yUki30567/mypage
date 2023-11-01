let hideTarget = $('#side-menu');
let openClasName = 'open-menu';
let hideClassName = 'hiden-header';

let previousScroll = 0;
let scrolled = 0;

window.addEventListener('scroll',()=>{
    previousScroll = scrolled;
    scrolled = window.pageYOffset; 
    if(!hideTarget.hasClass(openClasName)){
        if(scrolled > previousScroll){
            header.addClass(hideClassName);
        } else {
            header.removeClass(hideClassName);
        }
    }
})