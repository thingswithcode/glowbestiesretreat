/* ============================================
   COOKIE CONSENT + GOOGLE ANALYTICS (GDPR)
   Google Analytics is only loaded after the visitor
   explicitly accepts. Decline = nothing is loaded.
   ============================================ */

(function () {
    'use strict';

    var GA_ID = 'G-M0R04XHDNV';
    var STORAGE_KEY = 'gb-cookie-consent';

    // Language: follow the site's language toggle (defaults to English).
    var stored = (localStorage.getItem('lang') || document.documentElement.lang || 'en');
    var lang = stored.indexOf('de') === 0 ? 'de' : 'en';
    var t = {
        en: {
            msg: 'We use analytics cookies to understand how our site is used — only if you agree.',
            accept: 'Accept',
            decline: 'Decline',
            link: 'Privacy Policy'
        },
        de: {
            msg: 'Wir nutzen Analyse-Cookies, um zu verstehen, wie unsere Seite genutzt wird — nur mit deiner Zustimmung.',
            accept: 'Akzeptieren',
            decline: 'Ablehnen',
            link: 'Datenschutz'
        }
    }[lang];

    function loadGA() {
        var s = document.createElement('script');
        s.async = true;
        s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
        document.head.appendChild(s);
        window.dataLayer = window.dataLayer || [];
        function gtag() { window.dataLayer.push(arguments); }
        window.gtag = gtag;
        gtag('js', new Date());
        gtag('config', GA_ID);
    }

    var choice = localStorage.getItem(STORAGE_KEY);
    if (choice === 'granted') { loadGA(); return; }
    if (choice === 'denied') { return; }

    // ── No decision yet: show the banner ──
    var style = document.createElement('style');
    style.textContent = [
        '.gb-consent{position:fixed;left:16px;right:16px;bottom:16px;z-index:2000;max-width:560px;margin:0 auto;',
        'background:#FBF8F4;color:#3A3531;border:1px solid rgba(58,53,49,0.12);border-radius:12px;',
        'box-shadow:0 12px 40px rgba(58,53,49,0.18);padding:20px 22px;',
        "font-family:'Jost','Helvetica Neue',Arial,sans-serif;font-size:14px;line-height:1.6;}",
        '.gb-consent p{margin:0 0 14px;}',
        '.gb-consent a{color:#B5635A;text-decoration:underline;}',
        '.gb-consent-actions{display:flex;gap:10px;flex-wrap:wrap;}',
        '.gb-consent button{font-family:inherit;font-size:13px;letter-spacing:0.03em;cursor:pointer;',
        'padding:11px 22px;border-radius:40px;border:1px solid #B5635A;transition:opacity .2s ease;}',
        '.gb-consent button:hover{opacity:0.85;}',
        '.gb-consent-accept{background:#B5635A;color:#fff;}',
        '.gb-consent-decline{background:transparent;color:#B5635A;}',
        '@media(max-width:480px){.gb-consent-actions button{flex:1;}}'
    ].join('');
    document.head.appendChild(style);

    var banner = document.createElement('div');
    banner.className = 'gb-consent';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-label', 'Cookie');
    banner.innerHTML =
        '<p>' + t.msg + ' <a href="/datenschutz.html">' + t.link + '</a></p>' +
        '<div class="gb-consent-actions">' +
        '<button type="button" class="gb-consent-accept">' + t.accept + '</button>' +
        '<button type="button" class="gb-consent-decline">' + t.decline + '</button>' +
        '</div>';

    function mount() {
        document.body.appendChild(banner);
        banner.querySelector('.gb-consent-accept').addEventListener('click', function () {
            localStorage.setItem(STORAGE_KEY, 'granted');
            loadGA();
            banner.remove();
        });
        banner.querySelector('.gb-consent-decline').addEventListener('click', function () {
            localStorage.setItem(STORAGE_KEY, 'denied');
            banner.remove();
        });
    }

    if (document.body) { mount(); }
    else { document.addEventListener('DOMContentLoaded', mount); }

})();
