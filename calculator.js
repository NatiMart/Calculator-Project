let screen = document.querySelector(".screen");
console.log(screen);

let buttonArray = document.querySelectorAll("button");
console.log(buttonArray);

let currentText = "";

let memoryText = '';





function addAlllisteners(param) {
    for (let i = 0; i < param.length; i++) {
        if(param[i].innerHTML === "="){
            param[i].addEventListener('click', equal) 
        } else if (param[i].innerHTML === "M+") {
            param[i].addEventListener("click", save)
        } else if (param[i].innerHTML === "M-") {
            param[i].addEventListener("click", remove)
        } else if (param[i].innerHTML === "MCR") {
            param[i].addEventListener("click", recall)
        } else if (param[i].innerHTML === "ON/C") {
            param[i].addEventListener("click", clear)
        } else {
            param[i].addEventListener('click', change);

        } 
        
    }
       
}


addAlllisteners(buttonArray);

function change(param) {
    if (param === undefined) {
        screen.innerHTML = 'Do Math';
    } else {
    
    currentText = currentText + param.target.innerHTML;
    screen.innerHTML = currentText;
    }

}



function add(param) {
    let nums = param.split("+");
    let sum = parseInt(nums[0])+parseInt(nums[1]);
    currentText = sum
    screen.innerHTML = currentText
}
function subtract(param) {
    let nums = param.split("-");
    let sum = parseInt(nums[0])-parseInt(nums[1]);
    currentText = sum
    screen.innerHTML = currentText
}
function multiply(param) {
    let nums = param.split("x");
    let sum = parseInt(nums[0])*parseInt(nums[1]);
    currentText = sum
    screen.innerHTML = currentText
}
function divide(param) {
    let nums = param.split("÷");
    let sum = parseInt(nums[0])/parseInt(nums[1]);
    currentText = sum
    screen.innerHTML = currentText
}

function equal() {
   
    currentText = screen.innerHTML
    if(currentText.indexOf("+")>-1){
        add(currentText)
    } else  if(currentText.indexOf("-")>-1){
        subtract(currentText)
    }  else  if(currentText.indexOf("x")>-1){
        multiply(currentText)
    } else  if(currentText.indexOf("÷")>-1){
        divide(currentText)
    }
    currentText = ''
}
function save(){
   memoryText = screen.innerHTML;
    
}
function remove(){
    memoryText = "";

}
function recall(){
   screen.innerHTML += memoryText;
   currentText += memoryText;

}
function clear(){
    screen.innerHTML = '';
    currentText = '';
}

                        