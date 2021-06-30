$('.nav__trigger').on('click', function (e) {
    e.preventDefault();
    $(this).parent().toggleClass('nav--active');
});

AOS.init({
    duration: 500,
})

var btn = $('#go_top_button');

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});