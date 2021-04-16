window.onload = function() {
    let submitbtn = <HTMLElement>document.querySelector("form > button");
    submitbtn.onclick = main;
}

function main():void {
    validateTxtInput("first-name", "First name is required");
    validateTxtInput("last-name", "Last name is required");
}

/**
 * 
 * @param id id The id of the <input type="txt"> to validate
 * @param errorMsg errMsg The message to display is the sibling span of the textbox
 * @returns Returns true if the texbox with the given id has some text inside it
 */
function validateTxtInput(id:string, errorMsg:string):boolean {
    let txtBox = <HTMLInputElement>document.getElementById(id);
    let txtBoxValue = txtBox.value;

    if (txtBoxValue == "") {
        let errorSpan = <HTMLSpanElement>txtBox.nextElementSibling;
        errorSpan.innerText = errorMsg;
        return false;
    }
    return true;
}
