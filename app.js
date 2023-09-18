var display = document.querySelector(".display");
var buttons = document.querySelectorAll("button");
var specialChars = ["%", "*", "/", "-", "+", "="];
var output = "";
var newInput = "";
var last = output[output.length - 1];

// var str="5+5-";
// var newInput="5";
// var last= str[str.length -1];
// var arr=["+","-" ,"*","/"];
// if (specialChars.indexOf(last)!==-1 && specialChars.indexOf(newInput) !==-1) {
//     str=str.slice(0,-1) + newInput;    
// }else{
//     str +=newInput;
// }

// Define function to calculate based on button clicked
var calculate = (btnValue) => {
    if (btnValue === "=" && btnValue != "") {
        // if output has '%', replace with '/100' before evaluating
        output = eval(output.replace("%", "/100"));
    } else if (btnValue === "AC") {
        output = ""
    } else if (btnValue === "DEL") {
        //  if del button click the last item remove from charachter from the output
        output = output.toString().slice(0, -1);

    } else if (specialChars.indexOf(last) !== -1 && specialChars.indexOf(newInput) !== -1) {
        output = output.slice(0, -1) + newInput;

    }
    else {
        if (output === "" && specialChars.includes(btnValue)) return
        output += btnValue;

    }
    display.value = output;
}

//  Add event listner to buttons,call calculate () on click.
buttons.forEach((button) => {
    // Button click listner call calculate() with dataset value as argument
    button.addEventListener("click", (e) => calculate(e.target.dataset.value))
}); 