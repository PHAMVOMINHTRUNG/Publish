var $divScrollTop = $("#divScrollTop");
var halfbrowserHeight = $(document).height() / 2;
var swiper = new Swiper(".mySwiper", {
  effect: "fade",
  grabCursor: true,
  centeredSlides: true,
  mousewheel: true,
  keyboard: true,
  navigation: {
    prevEl: ".swiper-button-next",
    nextEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
});

function initPage() {
  $divScrollTop.hide();
}

function showScrollToTop() {
  var heightScrollTop = $(window).scrollTop();
  if (heightScrollTop > halfbrowserHeight) {
    $divScrollTop.show();
  } else {
    $divScrollTop.hide();
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

$(window).scroll(showScrollToTop);
$(window).init(initPage);
$divScrollTop.click(scrollToTop);
