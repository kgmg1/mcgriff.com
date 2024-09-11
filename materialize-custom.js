document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {
        dist: -250,
        duration: 100,
        indicators: true
    });
    setInterval(() => {
        M.Carousel.getInstance(elems[0]).next();
    }, 10000)
});