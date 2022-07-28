//starts header
let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

menu.onclick =()=> {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('akramone');
}

// end header










//starts search form

document.querySelector('#search-icon').onclick = ()=>{
    document.querySelector('#search-form').classList.toggle('akramtwo');
}

window.onscroll = ()=>{
    menu.classList.remove('fa-temes');
    navbar.classList.remove('akramone');

}

 document.querySelector('#close').onclick = () =>{
     document.querySelector('#search-form').classList.remove('akramtwo')
 }





 var swiper = new Swiper(".home-slider", {
   spaceBetween: 30,
   centeredSlides: true,
   autoplay: {
     delay: 2500,
     disableOnInteraction: false,
   },
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   loop:true,
 });


 //end search form




//  review section 
//  review section 
//  review section 
//  review section 
//  review section 
//  review section 
//  review section 

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop:true,
  breakpoints:{
    0: {
      slidesPerView: 1
    },
    640: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3
    },
    1024: {
      slidesPerView: 4
    },
  }
});













 