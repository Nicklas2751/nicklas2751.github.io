$(document).ready(function () {
  $('a[href*=#]').each(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname &&
      this.hash.replace(/#/, '')) {
      var $targetId = $(this.hash),
        $targetAnchor = $('[name=' + this.hash.slice(1) + ']');
      var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
      if ($target) {
        $(this).click(function () {
          $('html, body').animate({
            scrollTop: $target.offset().top
          }, 1000);
          return false;
        });
      }
    }
  });

  var sections = $('section'),
    nav = $('nav'),
    nav_height = nav.outerHeight();

  $(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();

    sections.each(function () {
      var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        nav.find('a').removeClass('active');
        sections.removeClass('active');

        $(this).addClass('active');
        nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
      }
    });
  });

});