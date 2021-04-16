window.onload = function () {
    var submitbtn = document.querySelector("form > button");
    submitbtn.onclick = main;
};
function main() {
    alert("submitbtn was clicked");
}
