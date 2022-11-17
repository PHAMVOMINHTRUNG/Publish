const $divScrollTop = $("#divScrollTop");
const halfbrowserHeight = $(document).height() / 2;

function initPage() {
  $divScrollTop.hide();
}

function showScrollToTop() {
  const heightScrollTop = $(window).scrollTop();
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
