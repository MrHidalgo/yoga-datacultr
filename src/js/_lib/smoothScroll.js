

/**
 * @name initSmoothScroll
 *
 * @description Smooth transition to anchors to the block.
 */
const initSmoothScroll = (
  btnName = "[anchor-js]",
  animateSpeed = 750
) => {

  $(btnName).on("click", (e) => {

    let linkHref = $(e.currentTarget).attr('data-href'),
      headerHeight = $(".header").outerHeight() || 0,
      topHeightOffset = $(linkHref).offset().top;

    if($(window).width() < 768) {
      $('body, html').animate({
        scrollTop: topHeightOffset
      }, animateSpeed);
    }

  });

};
