
// navbar
$('.nav__trigger').on('click', function (e) {
    e.preventDefault();
    $(this).parent().toggleClass('nav--active');
});

AOS.init({
    duration: 500,
})


// scroll_to_top_btn
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

// preloader
window.onload = function () {
    document.querySelector("#hola").style.display = "none";
}






