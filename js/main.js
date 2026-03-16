/* ============================================
   GLOW BESTIES RETREATS — Main JavaScript
   ============================================ */

(function () {
    'use strict';

    // --- Navbar scroll behavior ---
    var navbar = document.getElementById('navbar');

    function handleNavScroll() {
        if (window.scrollY > 60) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleNavScroll, { passive: true });
    // Run on load in case page is refreshed mid-scroll
    handleNavScroll();

    // --- Hamburger menu ---
    var navToggle = document.querySelector('.nav-toggle');
    var navLinks = document.querySelector('.nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function () {
            var isOpen = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', !isOpen);
            navLinks.classList.toggle('open');

            // Prevent body scroll when menu is open
            if (!isOpen) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });

        // Close mobile menu on link click
        navLinks.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                navToggle.setAttribute('aria-expanded', 'false');
                navLinks.classList.remove('open');
                document.body.style.overflow = '';
            });
        });

        // Close mobile menu on Escape key
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && navLinks.classList.contains('open')) {
                navToggle.setAttribute('aria-expanded', 'false');
                navLinks.classList.remove('open');
                document.body.style.overflow = '';
            }
        });
    }

    // --- Smooth scroll for anchor links ---
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var targetId = this.getAttribute('href');
            if (targetId === '#') return;
            var target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                var offset = window.innerWidth < 769 ? 64 : 80;
                var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top: top, behavior: 'smooth' });
            }
        });
    });

    // --- Hero parallax ---
    var heroBg = document.querySelector('.hero-bg');

    if (heroBg) {
        function handleParallax() {
            if (window.scrollY < window.innerHeight) {
                var translateY = window.scrollY * 0.3;
                heroBg.style.transform = 'translateY(' + translateY + 'px) scale(1.02)';
            }
        }

        window.addEventListener('scroll', handleParallax, { passive: true });
    }

    // --- Scroll fade-in animations ---
    var fadeElements = document.querySelectorAll('.fade-in');

    if (fadeElements.length > 0 && 'IntersectionObserver' in window) {
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.12,
            rootMargin: '0px 0px -60px 0px'
        });

        fadeElements.forEach(function (el) {
            observer.observe(el);
        });
    } else {
        // Fallback: show everything if IntersectionObserver not supported
        fadeElements.forEach(function (el) {
            el.classList.add('visible');
        });
    }

    // --- Hide scroll indicator on scroll ---
    var scrollIndicator = document.querySelector('.hero-scroll-indicator');
    if (scrollIndicator) {
        var indicatorHidden = false;
        window.addEventListener('scroll', function () {
            if (!indicatorHidden && window.scrollY > 100) {
                scrollIndicator.style.opacity = '0';
                scrollIndicator.style.transition = 'opacity 0.6s ease';
                indicatorHidden = true;
            }
        }, { passive: true });
    }

})();
