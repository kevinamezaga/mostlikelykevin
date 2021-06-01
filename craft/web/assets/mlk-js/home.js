document.getElementById("web-services-link").addEventListener("mouseover", function () {
    document.getElementById("main-section").style.backgroundImage = "url(assets/img/stylings/code-blurred.jpg)";
    document.getElementById("color-overlay").style.backgroundColor = "rgba(69,119,188,0.25)";

}, false);

document.getElementById("nonprofits-link").addEventListener("mouseover", function () {
    document.getElementById("main-section").style.backgroundImage = "url(assets/img/stylings/nonprofit-safe-streets.jpg)";
    document.getElementById("color-overlay").style.backgroundColor = "rgba(69,119,188,0.75)";

}, false);

document.getElementById("local-gov-link").addEventListener("mouseover", function () {
    document.getElementById("main-section").style.backgroundImage = "url(assets/img/stylings/kevin-at-bcc-blurred.jpg)";
    document.getElementById("color-overlay").style.backgroundColor = "rgba(69,119,188,0.75)";

}, false);

document.getElementById("miami-link").addEventListener("mouseover", function () {
    document.getElementById("main-section").style.backgroundImage = "url(assets/img/stylings/miami-park-west.jpg)";
    document.getElementById("color-overlay").style.backgroundColor = "rgba(69,119,188,0.75)";

}, false);

document.getElementById("web-services-link").addEventListener("mouseout", function () {
    document.getElementById("main-section").style.backgroundImage = "";
    document.getElementById("color-overlay").style.backgroundColor = "";
}, false);

document.getElementById("nonprofits-link").addEventListener("mouseout", function () {
    document.getElementById("main-section").style.backgroundImage = "";
    document.getElementById("color-overlay").style.backgroundColor = "";
}, false);

document.getElementById("local-gov-link").addEventListener("mouseout", function () {
    document.getElementById("main-section").style.backgroundImage = "";
    document.getElementById("color-overlay").style.backgroundColor = "";
}, false);

document.getElementById("miami-link").addEventListener("mouseout", function () {
    document.getElementById("main-section").style.backgroundImage = "";
    document.getElementById("color-overlay").style.backgroundColor = "";
}, false);