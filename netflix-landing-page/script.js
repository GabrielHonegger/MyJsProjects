function activateFocus() {
    document.getElementById("input-field").focus();
}
function activateFocus2() {
    document.getElementById("input-field2").focus();
}
function changePageLanguage() {
    let pageLang = window.location.href;
    if (pageLang.includes('/netflix-landing-page/index.html') || window.location.href == "") {
        window.location.href = "/netflix-landing-page/en/index.html";
    }
    else {
        window.location.href = "/netflix-landing-page/index.html";
    }
}