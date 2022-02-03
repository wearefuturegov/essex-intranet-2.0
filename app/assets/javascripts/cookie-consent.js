$(document).ready(function () {

/**
 * options for this site
 */
var cookieOptions = {
    cookieName: "ecc-intranet-cookie"
}

/**
 * What scripts to load when we want them
 */
var cookieCallback = () => {
    (function(w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({
            'gtm.start': new Date().getTime(),
            event: 'gtm.js'
        });
        var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s),
            dl = l != 'dataLayer' ? '&l=' + l : '';
        j.async = true;
        j.src =
            'https://www.googletagmanager.com/gtm.js?id=' + i + dl + '&gtm_auth=kt9B04ibr3lt13mxSd48pg&gtm_preview=env-3&gtm_cookies_win=x';
        f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', 'GTM-MFVZS8F');
}

var cookieButtons = document.querySelectorAll("[data-accept-cookie]");

for (let i = 0; i < cookieButtons.length; i++) {
    cookieButtons[i].addEventListener("click", function (e) {
        var target = e.target;
        var accepted = (target.getAttribute('data-accept-cookie') == 'true');
        dismiss(accepted);
    });
}

function hideCookieBanner() {
    if (document.getElementById("cookie-banner") != null) {
        document.getElementById("cookie-banner").style.display = "none";
    }
}

function showCookieBanner() {
    if (document.getElementById("cookie-banner") != null) {
        document.getElementById("cookie-banner").style.display = "block";
    }
}

function dismiss(accepted) {
    var cookie = '';
    var date = new Date();
    // Cookie is valid 1 year
    date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000));
    if (accepted === true) {
        cookie = {
            "bannerDismissed": true,
            "cookiesAccepted": true
        };
        document.cookie = ""
            .concat(cookieOptions.cookieName, "=")
            .concat(JSON.stringify(cookie), ";expires=")
            .concat(date.toUTCString(), ";path=/");
        location.reload(); // reload to load the cookiesss
    } else {
        cookie = {
            "bannerDismissed": true,
            "cookiesAccepted": false
        };
        document.cookie = ""
            .concat(cookieOptions.cookieName, "=")
            .concat(JSON.stringify(cookie), ";expires=")
            .concat(date.toUTCString(), ";path=/");
        hideCookieBanner();
    }
}


function checkCookie() {
    // on every page load run this.
    var myCookie = getCookie(cookieOptions.cookieName);
    if (myCookie == null) {
        // no cookie - show banner
        showCookieBanner();
    } else {
        // we have cookie		
        var cookiesAccepted = JSON.parse(myCookie).cookiesAccepted;
        var bannerDismissed = JSON.parse(myCookie).bannerDismissed;

        // banner already dismissed - hide the banner
        if (!bannerDismissed) {
            hideCookieBanner();
        }

        if (cookiesAccepted) {
            // we've accepted cookies so load all the things
            loadAnalytics();
        }

    }
}

function getCookie(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    } else {
        begin += 2;
        var end = document.cookie.indexOf(";", begin);
        if (end == -1) {
            end = dc.length;
        }
    }

    return decodeURI(dc.substring(begin + prefix.length, end));
}



function loadAnalytics() {
    console.log('loadAnalytics');
    try {
        cookieCallback();   
    } catch (error) {
        throw new Error(`You didn't include a callback function`)
    }
   
}


checkCookie()


})



