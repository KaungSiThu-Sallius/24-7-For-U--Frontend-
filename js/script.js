$('.nav__trigger').on('click', function (e) {
    e.preventDefault();
    $(this).parent().toggleClass('nav--active');
});

AOS.init({
    duration: 500,
})



btn = $('#go_top_button');;

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
}

function topFunction() {

    $('html, body').animate({ scrollTop: 0 }, '300');
    document.documentElement.scrollTop = 0;
}