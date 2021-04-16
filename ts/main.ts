window.onload = function() {
    let submitbtn = <HTMLElement>document.querySelector("form > button");
    submitbtn.onclick = main;
}

function main():void {
    alert("submitbtn was clicked");
}