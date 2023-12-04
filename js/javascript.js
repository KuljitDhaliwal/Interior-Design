$(window).scroll(function () { 
    $(".cus-navbar").toggleClass("nav-color", $(this).scrollTop() > 50);
    $(".search-box").toggleClass("search-box-down", $(this).scrollTop() > 50);
});


const ham = document.getElementById('ham');

ham.onclick = function () {
    $(this).toggleClass('active');
    $(".nav-sidebar").toggleClass('active');
    $(".big-main").toggleClass("dark-active");
    $(body).toggleClass(".over");
}
const mainham = document.getElementById('main-ham');
document.onclick = function(e) {
    if (e.target.id !== 'main-ham' && e.target.id !== '') {
        $(".sidebar").removeClass('mainactive');
    }
}
mainham.onclick = function () {
   // $(this).toggleClass('mainactive');
//    $('.main').toggleClass('mainactive');   
    $('.hamburger').toggleClass('mainactive');    
    $('.sidebar').toggleClass('mainactive');
    $(".overall").toggleClass("mainactive");
}

const times = document.getElementById('close-class');
times.onclick = function() {
    // var element = document.getElementById("sidebar");
    // element.classList.remove("sidebar");
    $('.sidebar').toggleClass('mainactive');
    $(".big-main").removeClass("dark-active");
    $(".overall").removeClass("mainactive");
}
const in_sidebar = document.getElementById('in-sidebar');
in_sidebar.onclick = function(){
    $(".nav-sidebar").toggleClass("active");
    $(".big-main").removeClass("dark-active");
    
}
const search = document.getElementById('search');
const search_box = document.getElementById('search-box');
const fa_search = document.querySelector('.fas-search');
const fa_times = document.querySelector('.fa-times');
search.addEventListener('click', () => {
    search_box.classList.toggle("show")
    fa_search.classList.toggle("show")
    fa_times.classList.toggle("show")
})

const drop_icon = document.getElementById('drop-icon-home');
drop_icon.onclick = function () {
    $('.sub-ul-home').toggleClass("down");
    $('.drop-icon-home').toggleClass("down");
};
 

function myrotateFunction() {
    $(".c-lines").toggleClass("rot-c-lines");
    $(".emp-media").toggleClass("emp-ul-height");
}









   