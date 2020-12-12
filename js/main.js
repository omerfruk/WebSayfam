$(function () {
  $('a[href*="#"]:not([href="#"])').click(function () {
    if (
      Location.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            srollTop: target.offset().top,
          },
          1500
        );
        return false;
      }
    }
  });
});
