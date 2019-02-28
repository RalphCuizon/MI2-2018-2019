;(function() {
    'use strict';

    // wait till DOM is loaded
    window.addEventListener('load', function() {
        // disable HTML5 form validation
        document.getElementById('login__form').setAttribute('novalidate', 'novalidate');

        // intercept document submit
        document.getElementById('login__form').addEventListener('submit', function(e) {
            // halt event
            e.preventDefault();
            e.stopPropagation();
        });

    });
});