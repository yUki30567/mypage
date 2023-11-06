let btn = $('.menu-btn');
let sideMenu = $('.side-menu');
let wall = $('.transparent-wall');
let openClassName = 'open-menu';
let clickClassName = 'click-btn';
let wallClassName = 'wall-active';

// button click section
btn.click(function() {
    sideMenu.toggleClass(openClassName);
    btn.toggleClass(clickClassName);
    wall.toggleClass(wallClassName);
})

// wall click section
wall.click(function() {
    sideMenu.toggleClass(openClassName);
    btn.toggleClass(clickClassName);
    wall.toggleClass(wallClassName);
})

//scroll section
let hideClassName = 'hiden-header';
let previousScroll = 0;
let scrolled = 0;

window.addEventListener('scroll',()=>{
    previousScroll = scrolled;
    scrolled = window.pageYOffset;
    if(!$('#side-menu').hasClass(openClassName)){
        if(scrolled > previousScroll){
            $("header").addClass(hideClassName);
        } else {
            $("header").removeClass(hideClassName);
        }
    }
})