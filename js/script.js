// slider js
$(document).ready(function () {
  var slider = $('.testimonial-slider');
  if (slider.length > 0) {
    $('.testimonial-slider').slick({
      slidesToShow: 3,
      dots: true,
      arrows: false,
      autoplay: false,
      centerMode: true,
      centerPadding: '0px',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  }

});


// tab functionality
$(function () {
  $(".tabs-content .tab-inner").show();
  $(".tabs-nav li:first-child").addClass("active");

  $(".tabs-nav a").click(function () {
    $(".tabs-nav li").removeClass("active");
    $(this).parent().addClass("active");

    let target = $(this).attr("href");

    if (target === "#all") {
      $(".tabs-content .tab-inner").show();
    } else {
      $(".tabs-content .tab-inner").hide();
      $(target).show();
    }

    return false;
  });
});


// faq
$(document).ready(function () {
  $(".box > .title").on("click", function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this)
        .siblings(".box p")
        .slideUp(200);
      $(".set > a i")
        .removeClass("fa-minus")
        .addClass("fa-plus");
    } else {
      $(".set > a i")
        .removeClass("fa-minus")
        .addClass("fa-plus");
      $(this)
        .find("i")
        .removeClass("fa-plus")
        .addClass("fa-minus");
      $(".box > .title").removeClass("active");
      $(this).addClass("active");
      $(".box p").slideUp(200);
      $(this)
        .siblings(".box p")
        .slideDown(200);
    }
  });
});


//footer
const footer = () => {
  const year = new Date().getFullYear();
  document.getElementById("Footer").innerHTML = year;
}

footer();

//preloader
var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
})       
