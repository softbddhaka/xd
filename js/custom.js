$(function(){

// banner slider
    $('.banner').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll:1,
        arrows:true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1500,
        speed: 500,
        prevArrow:'<i class="fas fa-chevron-left prev"></i>',
        nextArrow:'<i class="fas fa-chevron-right next"></i>'
        
      });

// linker Slider
      $('.linker_slider').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll:1,
        arrows:false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1500,
        speed: 500,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 4
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow:2
            }
          }
        ]
      });


//  card slider two
      $('.card_two_slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll:1,
        arrows:true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 700,
        prevArrow:'<i class="fas fa-chevron-left prevs"></i>',
        nextArrow:'<i class="fas fa-chevron-right nexts"></i>',
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '35px',
              slidesToShow:1
            }
          }
        ]
      });

// notice slider 
$('.notice_slide').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll:1,
  arrows:true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 700,
  prevArrow:'<i class="fas fa-chevron-left Nprevs"></i>',
  nextArrow:'<i class="fas fa-chevron-right Nnexts"></i>',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '35px',
        slidesToShow:1
      }
    }
  ]
});


//  card Slider 
      $('.card_slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll:1,
        arrows:true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1500,
        speed: 500,
        prevArrow:'<i class="fas fa-chevron-left prevs"></i>',
        nextArrow:'<i class="fas fa-chevron-right nexts"></i>',
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '35px',
              slidesToShow:1
            }
          }
        ]
      });


// backto top part 
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

// Scroll to show
$(window).scroll(function(){
  if ($(this).scrollTop() > 500) {
     $('.sidenav').addClass('sidenav_visibale');
  } else {
     $('.sidenav').removeClass('sidenav_visibale');
  }
});

// navbar dropdoen add class
$('.navbar_modal').click(function() {
  $(".navbar_drop").toggleClass('dropdown_show');
});






// counter up 
$('.counter_count').counterUp();



































});