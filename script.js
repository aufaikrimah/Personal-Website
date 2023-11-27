

// document.addEventListener("DOMContentLoaded", function() {
//     // Ambil semua elemen dengan class 'myElement'
//     var myElementElements = document.querySelectorAll('.myElement');

//     // Tambahkan class 'show' pada setiap elemen dengan delay bertahap
//     myElementElements.forEach(function(element, index) {
//         setTimeout(function() {
//             element.classList.add('show');
//         }, index * 200); // 200 milidetik (0.2 detik) delay antara setiap elemen
//     });
// });

document.addEventListener("DOMContentLoaded", function() {
    // Ambil semua elemen dengan class 'myElement'
    var myElementElements = document.querySelectorAll('.myElement');

    // Fungsi untuk mengecek apakah elemen sudah terlihat di viewport
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Fungsi untuk menambahkan class 'show' pada elemen yang terlihat
    function showElementsOnScroll() {
        myElementElements.forEach(function(element) {
            if (isElementInViewport(element)) {
                element.classList.add('show');
            }
        });
    }

    // Tambahkan class 'show' pada elemen yang terlihat saat halaman dimuat
    showElementsOnScroll();

    // Tambahkan event listener untuk memantau peristiwa scroll
    window.addEventListener('scroll', function() {
        showElementsOnScroll();
    });
});
