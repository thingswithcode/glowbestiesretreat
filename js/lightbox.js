/* ============================================
   GALLERY LIGHTBOX
   Every retreat photo on the Experience page — the day-by-day
   agenda shots, the "room to breathe" images and the "Moments"
   grid — becomes one gallery the visitor can click through.
   ============================================ */

(function () {
    'use strict';

    var lightbox = document.getElementById('exp-lightbox');
    if (!lightbox) return;

    // Collected in document order so clicking any photo continues
    // through the whole weekend, top to bottom.
    var images = Array.prototype.slice.call(
        document.querySelectorAll('.exp-agenda-img img, #exp-pause img, #exp-gallery-grid img')
    );
    if (!images.length) return;

    var lightboxImg = lightbox.querySelector('.lightbox-img');
    var closeBtn = lightbox.querySelector('.lightbox-close');
    var prevBtn = lightbox.querySelector('.lightbox-prev');
    var nextBtn = lightbox.querySelector('.lightbox-next');
    var currentIndex = 0;

    function show(index) {
        currentIndex = (index + images.length) % images.length;
        var img = images[currentIndex];
        lightboxImg.src = img.currentSrc || img.src;
        lightboxImg.alt = img.alt;
    }

    function open(index) {
        show(index);
        lightbox.classList.add('is-open');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function close() {
        lightbox.classList.remove('is-open');
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    images.forEach(function (img, index) {
        img.style.cursor = 'zoom-in';
        img.addEventListener('click', function () { open(index); });
    });

    closeBtn.addEventListener('click', close);
    prevBtn.addEventListener('click', function () { show(currentIndex - 1); });
    nextBtn.addEventListener('click', function () { show(currentIndex + 1); });

    lightbox.addEventListener('click', function (e) {
        if (e.target === lightbox) close();
    });

    document.addEventListener('keydown', function (e) {
        if (!lightbox.classList.contains('is-open')) return;
        if (e.key === 'Escape') close();
        if (e.key === 'ArrowLeft') show(currentIndex - 1);
        if (e.key === 'ArrowRight') show(currentIndex + 1);
    });

})();
