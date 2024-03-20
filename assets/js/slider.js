$(document).ready(function() {
    var currentSlide = 0;
    var sliderItems = $('.slider-item');

    function showSlide(index) {
        sliderItems.removeClass('active');
        $(sliderItems[index]).addClass('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % sliderItems.length;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 5000);
});