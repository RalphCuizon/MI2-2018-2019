;
(function () {
    "use strict";

    let validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    window.addEventListener('load', function () {
        // code wordt uitgevoerd na het laden van de pagina
        document.getElementById('btnLogin').addEventListener('click', function () {
            // toon de loginmodal
            document.getElementById('loginmodal').classList.remove('loginmodal--verborgen');
        });

        document.getElementById('btnCancel').addEventListener('click', function () {
            // verbergen de loginmodal
            document.getElementById('loginmodal').classList.add('loginmodal--verborgen');
        });

        document
            .getElementById("login__form")
            .setAttribute("novalidate", "novalidate");

        // intercept document submit
        document
            .getElementById("login__form")
            .addEventListener("submit", function (e) {
                // halt event
                e.preventDefault();
                e.stopPropagation();

                // form checking
                let allOk = true;

                // error messages shortcuts
                let errUname = document.getElementById("errUname");
                let errPass = document.getElementById("errPass");

                // input shortcuts
                let inpUname = document.getElementById("inpUname");
                let inpPass = document.getElementById("inpPass");

                // hide all error messages
                let errMessages = document.querySelectorAll(".formerror");
                for (let i = 0; i < errMessages.length; i++) {
                    errMessages[i].style.display = "none";
                }

                // check email
                if (inpUname.value == "") {
                    allOk = false;
                    errUname.innerHTML = "gelieve een email in te vullen";
                    errUname.style.display = "block";
                } else {
                    // controleer of een email is
                    if (!validateEmail(inpUname.value)) {
                        allOk = false;
                        errUname.innerHTML = "Dit is geen geldig adres.";
                        errUname.style.display = "block";
                    }
                }

                // check zip
                if (inpPass.value == "") {
                    allOk = false;
                    errPass.innerHTML = "gelieve een passwoord in te vullen";
                    errPass.style.display = "block";
                } else {
                    // lengte moet 8 tekens.
                    if (inpPass.value.length < 8) {
                        allOk = false;
                        errPass.innerHTML = "gelieve 8 tekens te schrijven.";
                        errPass.style.display = "block";
                    }
                }

                // draw conclusion
                if (allOk) {
                    console.log("all ok");
                    document.getElementById('loginmodal').classList.add('loginmodal--verborgen');
                } else {
                    console.log("form contains errors");
                }
            });

        // aliases
        let thumbs = document.querySelectorAll('.main__thumbs figure');
        let large = document.querySelector('#large__figure');
        let photo = large.querySelector('img');
        let caption = large.querySelector('.large__title');

        // attach click events to thumbnails
        for (let i = 0; i < thumbs.length; i++) {
            let thumb = thumbs[i];
            let link = thumb.querySelector('a');
            let img = thumb.querySelector('img');
            link.addEventListener('click', function (e) {
                // prevent default link action
                e.preventDefault();
                // show image
                photo.src = link.href;
                photo.alt = img.alt;
                // change active state
                document.querySelector('.main__thumbs .active').classList.remove('active');
                thumb.classList.add('active');

                caption.innerHTML = thumb.getAttribute(img.alt);
            });
        }

    });

})();