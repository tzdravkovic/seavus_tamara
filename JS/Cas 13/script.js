const clickMeBtn = document.getElementById('clickMeBtn')

function sayHallo() {
    console.log('Hello World')
}


function printWin() {
    console.log('Im the WINNER')
}

// clickMeBtn.onclick = function() {
//     console.log('I was clicked by the trainer')
// }

// clickMeBtn.onclick = sayHallo

clickMeBtn.onclick = printWin


const nameBtn = document.querySelector('#nameBtn')

function printFullName() {
    console.log('Jelena je kliknula na dugme')
}

console.log(nameBtn)

nameBtn.addEventListener('click', printFullName)
nameBtn.addEventListener('mouseenter', sayHallo)
nameBtn.addEventListener('mouseleave', printWin)


const usernameInput = document.getElementById("username");
const errorMsgEl = document.querySelector(".error-msg");
 
errorMsgEl.style.color = "red";
 
console.log(usernameInput, errorMsgEl);
 
function inputGreeting(event) {
  console.log(`This is the target element value ${event.target.value}`);
  // How to access an html inputs value
  console.log(`This is the input's value: ${usernameInput.value}`);
 
  console.log(`Hello from ${usernameInput.value}!`);
  usernameInput.value = "";
}
 
// usernameInput.addEventListener("blur", inputGreeting);
 
function validateUsernameLength(minLength) {
  if (usernameInput.value.length < minLength) {
    errorMsgEl.textContent = "Username too short, please try again";
  } else {
    errorMsgEl.textContent = "";
  }
}
 
usernameInput.addEventListener("blur", function () {
  // We can write whatever we need here
  console.log("i am printed from an anonymous function");
  validateUsernameLength(6);
});