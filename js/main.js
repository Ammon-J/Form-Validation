window.onload = function () {
    var submitbtn = document.querySelector("form > button");
    submitbtn.onclick = main;
};
function main() {
    validateTxtInput("first-name", "First name is required");
    validateTxtInput("last-name", "Last name is required");
}
function validateTxtInput(id, errorMsg) {
    var txtBox = document.getElementById(id);
    var txtBoxValue = txtBox.value;
    if (txtBoxValue == "") {
        var errorSpan = txtBox.nextElementSibling;
        errorSpan.innerText = errorMsg;
        return false;
    }
    return true;
}
