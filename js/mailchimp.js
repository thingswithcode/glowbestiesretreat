/* ============================================
   MAILCHIMP FORM HANDLER
   ============================================ */

(function () {
    'use strict';

    var strings = {
        en: {
            sending: 'Sending...',
            submit: 'Join the Retreat',
            errorEmail: 'Please enter a valid email address.',
            errorConsent: 'Please agree to the privacy policy.',
            errorConnection: 'Connection failed. Please try again.',
            errorSubscribed: 'You are already subscribed!',
            errorGeneric: 'Something went wrong. Please try again.'
        },
        de: {
            sending: 'Wird gesendet...',
            submit: 'Zum Retreat anmelden',
            errorEmail: 'Bitte gib eine gültige E-Mail-Adresse ein.',
            errorConsent: 'Bitte stimme der Datenschutzerklärung zu.',
            errorConnection: 'Verbindung fehlgeschlagen. Bitte versuche es erneut.',
            errorSubscribed: 'Du bist bereits angemeldet!',
            errorGeneric: 'Etwas ist schiefgelaufen. Bitte versuche es erneut.'
        }
    };

    function t(key) {
        var lang = document.documentElement.lang || 'en';
        return (strings[lang] && strings[lang][key]) || strings.en[key];
    }

    var form = document.getElementById('signup-form');
    var successEl = document.getElementById('signup-success');
    var emailError = document.getElementById('email-error');

    if (!form) return;

    // ==============================================
    // MAILCHIMP CONFIGURATION
    // Replace these values with your actual Mailchimp details.
    // To find them: Mailchimp > Audience > Signup forms > Embedded forms
    // Copy the form action URL and extract the values.
    // ==============================================
    var MAILCHIMP_URL = 'https://gmail.us12.list-manage.com/subscribe/post';
    var MAILCHIMP_U = 'cc3b82a425357b3fc1bb38910';
    var MAILCHIMP_ID = 'f24cdf1cc1';

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function showError(message) {
        emailError.textContent = message;
        emailError.style.opacity = '0';
        emailError.style.transform = 'translateY(-4px)';
        // Trigger reflow for animation
        void emailError.offsetWidth;
        emailError.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        emailError.style.opacity = '1';
        emailError.style.transform = 'translateY(0)';
    }

    function clearError() {
        emailError.textContent = '';
    }

    function showSuccess() {
        form.style.opacity = '0';
        form.style.transform = 'translateY(-10px)';
        form.style.transition = 'opacity 0.4s ease, transform 0.4s ease';

        setTimeout(function () {
            form.hidden = true;
            successEl.hidden = false;
            successEl.style.opacity = '0';
            successEl.style.transform = 'translateY(10px)';
            // Trigger reflow
            void successEl.offsetWidth;
            successEl.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            successEl.style.opacity = '1';
            successEl.style.transform = 'translateY(0)';
        }, 400);
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        clearError();

        var name = form.querySelector('#signup-name').value.trim();
        var email = form.querySelector('#signup-email').value.trim();
        var consent = form.querySelector('#signup-consent').checked;

        // Validation
        if (!email) {
            showError(t('errorEmail'));
            return;
        }

        if (!isValidEmail(email)) {
            showError(t('errorEmail'));
            return;
        }

        if (!consent) {
            showError(t('errorConsent'));
            return;
        }

        // Disable button while submitting
        var submitBtn = form.querySelector('.btn-submit');
        submitBtn.disabled = true;
        submitBtn.textContent = t('sending');

        // Submit to Mailchimp via JSONP
        var callbackName = 'mailchimpCallback_' + Date.now();
        var url = MAILCHIMP_URL
            + '?u=' + encodeURIComponent(MAILCHIMP_U)
            + '&id=' + encodeURIComponent(MAILCHIMP_ID)
            + '&EMAIL=' + encodeURIComponent(email)
            + '&FNAME=' + encodeURIComponent(name)
            + '&c=' + callbackName;

        // Timeout if Mailchimp doesn't respond within 10s
        var timeout = setTimeout(function () {
            cleanup();
            submitBtn.disabled = false;
            submitBtn.textContent = t('submit');
            showError(t('errorConnection'));
        }, 10000);

        function cleanup() {
            clearTimeout(timeout);
            delete window[callbackName];
            var s = document.getElementById(callbackName);
            if (s) s.remove();
        }

        window[callbackName] = function (data) {
            cleanup();
            if (data.result === 'success') {
                showSuccess();
            } else if (data.msg && data.msg.indexOf('already subscribed') !== -1) {
                submitBtn.disabled = false;
                submitBtn.textContent = t('submit');
                showError(t('errorSubscribed'));
            } else {
                submitBtn.disabled = false;
                submitBtn.textContent = t('submit');
                showError(t('errorGeneric'));
            }
        };

        var script = document.createElement('script');
        script.id = callbackName;
        script.src = url;
        script.onerror = function () {
            cleanup();
            submitBtn.disabled = false;
            submitBtn.textContent = t('submit');
            showError(t('errorConnection'));
        };
        document.body.appendChild(script);
    });

})();
