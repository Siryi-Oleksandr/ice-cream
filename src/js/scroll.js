// Скрол Героя

$(document).ready(function () {
  $('#menu').on('click', 'a', function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('.body,html').animate({ scrollTop: top }, 1500);
  });
});

// Скрол Хедеру

$(document).ready(function () {
  $('#header-nav').on('click', 'a', function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('.body,html').animate({ scrollTop: top }, 1500);
  });
});
