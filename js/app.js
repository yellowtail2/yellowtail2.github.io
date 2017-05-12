$(function() {
  $('.work').on('click', function() {
    event.preventDefault();
    const $clicked = $(this);
    const $active  = $('.work.active');
    if ($active.length > 0) {
      $active.removeClass('active');
      $('#' + $active.data('target')).hide(function() {
        $clicked.addClass('active');
        $('#' + $clicked.data('target')).show();
      });
    } else {
      $clicked.addClass('active');
      $('#' + $clicked.data('target')).show();
    }
  });
});
