function activateFocus() {
    document.getElementById("input-field").focus();
}
function activateFocus2() {
    document.getElementById("input-field2").focus();
}
function changePageLanguage() {
    let languageValue = document.querySelector("#languages").value;
    if (languageValue === 'english') {
        window.location.href = "/netflix-landing-page/en/index.html";
    }
    else {
        window.location.href = "/netflix-landing-page/index.html";
    }
}