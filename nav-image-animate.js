
$(document).on('mouseenter', '.nav_links_link.image-animate', function () {

  // Remove first (in case it's already applied)
  $('.nav_dropdown_image_left').removeClass('is-left');
  $('.nav_dropdown_image_right').removeClass('is-right');

  // Re-add class after a tiny delay so the animation can restart
  setTimeout(function() {
    $('.nav_dropdown_image_left').addClass('is-left');
    $('.nav_dropdown_image_right').addClass('is-right');
  }, 10);

});

$(document).on('mouseleave', '.nav_links_link.image-animate', function () {
  // Optional: remove class on leaving
  $('.nav_dropdown_image_left').removeClass('is-left');
  $('.nav_dropdown_image_right').removeClass('is-right');
});

