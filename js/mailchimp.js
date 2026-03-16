/* ============================================
   MAILCHIMP FORM HANDLER
   ============================================ */

(function () {
    'use strict';

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
    var MAILCHIMP_URL = 'https://YOUR_ACCOUNT.us00.list-manage.com/subscribe/post-json';
    var MAILCHIMP_U = 'YOUR_U_VALUE';
    var MAILCHIMP_ID = 'YOUR_LIST_ID';

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
            showError('Bitte gib eine gültige E-Mail-Adresse ein.');
            return;
        }

        if (!isValidEmail(email)) {
            showError('Bitte gib eine gültige E-Mail-Adresse ein.');
            return;
        }

        if (!consent) {
            showError('Bitte stimme der Datenschutzerklärung zu.');
            return;
        }

        // Submit to Mailchimp via JSONP
        var callbackName = 'mailchimpCallback_' + Date.now();
        var url = MAILCHIMP_URL
            + '?u=' + encodeURIComponent(MAILCHIMP_U)
            + '&id=' + encodeURIComponent(MAILCHIMP_ID)
            + '&EMAIL=' + encodeURIComponent(email)
            + '&FNAME=' + encodeURIComponent(name)
            + '&c=' + callbackName;

        window[callbackName] = function (data) {
            if (data.result === 'success') {
                showSuccess();
            } else if (data.msg && data.msg.indexOf('already subscribed') !== -1) {
                showError('Du bist bereits angemeldet!');
            } else {
                showError('Etwas ist schiefgelaufen. Bitte versuche es erneut.');
            }

            // Cleanup
            delete window[callbackName];
            var script = document.getElementById(callbackName);
            if (script) script.remove();
        };

        var script = document.createElement('script');
        script.id = callbackName;
        script.src = url;
        document.body.appendChild(script);
    });

})();
