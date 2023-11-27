document.addEventListener("DOMContentLoaded", function() {
    var myElementElements = document.querySelectorAll('.myElement');

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function showElementsOnScroll() {
        myElementElements.forEach(function(element) {
            if (isElementInViewport(element)) {
                element.classList.add('show');
            }
        });
    }

    showElementsOnScroll();

    window.addEventListener('scroll', function() {
        showElementsOnScroll();
    });
});
