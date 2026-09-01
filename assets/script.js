$(function () {
  new Swiper(".bannerSwiper", {
    navigation: {
      nextEl: ".banner-swiper-button-next",
      prevEl: ".banner-swiper-button-prev",
    },
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });

  const $menuToggle = $("#menuToggle");
  const $menuOverlay = $("#menuOverlay");

  $menuToggle.on("click", function () {
    $(this).toggleClass("open");
    $menuOverlay.toggleClass("open");
    $("body").toggleClass("menu-open");
  });

  $menuOverlay.find("a").on("click", function () {
    $menuToggle.removeClass("open");
    $menuOverlay.removeClass("open");
    $("body").removeClass("menu-open");
  });

  $("#themeToggle").on("click", function () {
    $("body").toggleClass("dark-mode");
  });

  const $scrollProgress = $("#scrollProgress");
  $(window).on("scroll", function () {
    const scrollTop = $(window).scrollTop();
    const docHeight = $(document).height() - $(window).height();
    const percent = docHeight > 0 ? Math.round((scrollTop / docHeight) * 100) : 0;
    $scrollProgress.css("--scroll", percent);
    $scrollProgress.find("span").text(percent + "%");
  });

  $(".mouse-cursor-gradient-tracking").on("mouseenter mousemove", function (e) {
    const rect = this.getBoundingClientRect();
    this.style.setProperty("--x", e.clientX - rect.left + "px");
    this.style.setProperty("--y", e.clientY - rect.top + "px");
  });
});
