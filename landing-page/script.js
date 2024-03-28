function activateFocus() {
    document.getElementById("input-field").focus();
}
function activateFocus2() {
    document.getElementById("input-field2").focus();
}
function changePageLanguage() {
    let languageValue = document.querySelector("#languages").value;
    if (languageValue === 'english') {
        window.location.href = "/landing-page/en/";
    }
    else {
        window.location.href = "/landing-page/";
    }
}