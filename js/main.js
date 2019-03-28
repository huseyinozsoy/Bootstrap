$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 400) {
        $(".fixed-top").addClass("change-fix-top");
    } else {
        $(".fixed-top").removeClass("change-fix-top");
    }
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});