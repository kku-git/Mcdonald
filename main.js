// 메뉴
document.getElementById("menu-icon").addEventListener("click", function () {
  document
    .getElementsByClassName("under-menu")[0]
    .classList.toggle("show-under");
});

// 캐러셀
$(".first-button").on("click", function () {
  $(".slide-wrapper").css("transform", "translateX(0vw)");
});

$(".second-button").on("click", function () {
  $(".slide-wrapper").css("transform", "translateX(-100vw)");
});

$(".third-button").on("click", function () {
  $(".slide-wrapper").css("transform", "translateX(-200vw)");
});
$(".fourth-button").on("click", function () {
  $(".slide-wrapper").css("transform", "translateX(-300vw)");
});

// 검색창
$(".search-icon").on("click", function () {
  $(".search-container").fadeIn();
  $(".overlay").fadeIn();
});
$(".search-overlay").on("click", function () {
  $(".search-container").fadeOut();
});
