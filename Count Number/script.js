const increase = document.getElementById("increase")
const decrease = document.getElementById("decrease")
const reset = document.getElementById("reset")
const myInput = document.getElementById("myInput")
let count = 0;

// For Increment  Count

increase.onclick = function (){
    count++;
    myInput.textContent = count;
}

// For Decrement Count

decrease.onclick = function (){
    count--;
    myInput.textContent = count;
}

// For Reset Count to 0

reset.onclick = function (){
    count = 0;
    myInput.textContent = count;
}