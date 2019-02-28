;(function () {
    "use strict";

    window.addEventListener('load',function() {
        // code wordt uitgevoerd na het laden van de pagina
        document.getElementById('btnLogin').addEventListener('click', function () {
            // toon de loginmodal
            document.getElementById('loginmodal').classList.remove('loginmodal--verborgen');
        });

        document.getElementById('btnCancel').addEventListener('click', function () {
            // toon de loginmodal
            document.getElementById('loginmodal').classList.add('loginmodal--verborgen');
        });
    });

})();