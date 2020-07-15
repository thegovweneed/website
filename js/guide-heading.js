(function ($) {
  $('.guide-txt h2, .guide-txt h3').each(function () {
    if ($(this).attr("id") !== undefined) {
      $(this).append('<span class="header-perm-link-icon"><span class="sr-only perm-link-icon">Permalink</span><i class="fa fa-link"></i></span>');
      $(this).wrap('<a class="header-perm-link" href="#' + $(this).attr("id") + '" title="Permalink"></a>')
    }
  });
}(jQuery));
