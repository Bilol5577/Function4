const enterNumber = document.getElementById("input");
const sendBtn = document.getElementById("sendBtn");
const plusBtn = document.getElementById("plyusBtn");
const minusBtn = document.getElementById("minusBtn");
const displayNumber = document.getElementById("number");
const colorPicker = document.getElementById("colorPicker");

let currentNumber = 0; 


sendBtn.addEventListener("click", (event) => {
    event.preventDefault(); 
    const inputValue = parseInt(enterNumber.value); 
    if (!isNaN(inputValue)) { 
        currentNumber = inputValue; 
        displayNumber.textContent = currentNumber; 
        enterNumber.value = ""; 
    } else {
        alert("Iltimos, son kiriting!"); 
    }
});


plusBtn.addEventListener("click", () => {
    currentNumber++; 
    displayNumber.textContent = currentNumber; 
});


minusBtn.addEventListener("click", () => {
    currentNumber--; 
    displayNumber.textContent = currentNumber; 
});


colorPicker.addEventListener("input", () => {
    const selectedColor = colorPicker.value; 
    displayNumber.style.color = selectedColor; 
});