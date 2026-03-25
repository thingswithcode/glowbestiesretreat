/* ============================================
   GLOW BESTIES RETREATS — Main JavaScript
   ============================================ */

(function () {
    'use strict';

    /* --------------------------------------------------
       1. Nav scroll — add/remove .scrolled on #navbar
    -------------------------------------------------- */
    var navbar = document.getElementById('navbar');

    function onNavScroll() {
        if (window.scrollY > 60) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', onNavScroll, { passive: true });
    // Apply immediately in case page is reloaded while already scrolled
    onNavScroll();


    /* --------------------------------------------------
       3. Smooth scroll for anchor links
          Account for navbar height as offset
    -------------------------------------------------- */
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var href = this.getAttribute('href');
            if (href === '#') return;
            var target = document.querySelector(href);
            if (!target) return;
            e.preventDefault();
            var navbarHeight = navbar ? navbar.offsetHeight : 0;
            var top = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
            window.scrollTo({ top: top, behavior: 'smooth' });
        });
    });


    /* --------------------------------------------------
       4. Hero parallax — subtle translateY on .hero-bg
          Only applied while scrollY < window.innerHeight
    -------------------------------------------------- */
    var heroBg = document.querySelector('.hero-bg');

    if (heroBg) {
        function onParallaxScroll() {
            if (window.scrollY < window.innerHeight) {
                var offset = window.scrollY * 0.3;
                heroBg.style.transform = 'translateY(' + offset + 'px) scale(1.02)';
            }
        }

        window.addEventListener('scroll', onParallaxScroll, { passive: true });
    }


    /* --------------------------------------------------
       5. Fade-in animations via IntersectionObserver
          Adds .visible when element enters viewport
          Unobserves after triggering
          Fallback: add .visible immediately if API absent
    -------------------------------------------------- */
    var fadeElements = document.querySelectorAll('.fade-in');

    if (fadeElements.length > 0) {
        if ('IntersectionObserver' in window) {
            var fadeObserver = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        fadeObserver.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.12,
                rootMargin: '0px 0px -60px 0px'
            });

            fadeElements.forEach(function (el) {
                fadeObserver.observe(el);
            });
        } else {
            // Fallback for browsers without IntersectionObserver
            fadeElements.forEach(function (el) {
                el.classList.add('visible');
            });
        }
    }


    /* --------------------------------------------------
       6. Scroll indicator — hide .hero-scroll-indicator
          after scrolling past 100 px
    -------------------------------------------------- */
    var scrollIndicator = document.querySelector('.hero-scroll-indicator');

    if (scrollIndicator) {
        var indicatorHidden = false;

        window.addEventListener('scroll', function () {
            if (!indicatorHidden && window.scrollY > 100) {
                scrollIndicator.style.transition = 'opacity 0.6s ease';
                scrollIndicator.style.opacity = '0';
                indicatorHidden = true;
            }
        }, { passive: true });
    }

}());
