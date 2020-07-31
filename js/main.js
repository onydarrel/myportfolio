/*
* --------------------------- Main Js File -----------------------------
Template Name : Velixs - Personal Portfolio Template
Author        : Seniman Koding
Version       : 1.0
Copyright     : 2019
* ----------------------------------------------------------------------
*/

/*
* ----------------------------------------------------------------------

01. Smooth Scroll
02. Navbar
03. Skil Progres
04. Portfolio
05. Slider Testimonial
06. Scroll To Top
07. Preloader
*/



$(document).ready(function(){

    /* Smooth Scroll */
    $("a").on('click', function(event) {

        if (this.hash !== "") {
          event.preventDefault();

          var hash = this.hash;

          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
    
            window.location.hash = hash;
          });
        } 
    });
    /* End Smooth Scroll */


	/* Navbar ( Change Background & Logo )  */
    $(window).on("scroll",function () {

        var bodyScroll = $(window).scrollTop(),
            navbar = $(".navbar"),
            navbarCollapse = $(".navbar-collapse");
            navbarBrand = $(".navbar-brand");

        if(bodyScroll > 100){
            navbar.addClass("nav-scroll");
            navbarCollapse.addClass("nav-collapse");
            navbarBrand.addClass("nav-brand");

        }else{
            navbar.removeClass("nav-scroll");
            navbarCollapse.removeClass("nav-collapse");
            navbarBrand.removeClass("nav-brand");
        }
    });


        // close navbar-collapse when a  clicked
        $(".navbar-nav a").on('click', function () {
            $(".navbar-collapse").removeClass("show");
        });

    /* End Navbar */


    /* Skil Progres */
    $(window).on('scroll', function () {
        $(".skill-item-progress .progres").each(function () {
            var bottom_of_object = 
            $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = 
            $(window).scrollTop() + $(window).height();
            var myVal = $(this).attr('data-value');
            if(bottom_of_window > bottom_of_object) {
                $(this).css({
                  width : myVal
                });
            }
        });
    });
    /* End Skil Progres */

    
    /* Portfolio */
    $('.zoom-img').magnificPopup({
            delegate: 'a',
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    /* Portfolio */
     
   
   /* Slider Testimonial */
    var testimonial = $(".carousel-testimonial");
    testimonial.owlCarousel({
        items: 4,
        margin: 10,
        dots: true,
        autoplay: true,
        loop: true,
        responsiveClass: true,
        responsive: {
            0: {items: 1}, 
            500: {items: 1}, 
            1000: {items: 1}, 
            1200: {items: 1}
            }
    });
    /* End Slider Testimonial */

     
});