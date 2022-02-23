console.log("Hello world!");

//Grabbing the necessary buttons
const plusBtn = document.querySelector("#plus-btn");
const resetBtn = document.querySelector("#reset-btn");
const minusBtn = document.querySelector("#minus-btn");

//Grabbing the counter text
const counterText = document.querySelector("#counter");

//Grabbing all theme buttons
const themeBtns = document.querySelectorAll(".theme-buttons");

//Writing out the neccessary functions
let count = 0;

function increase() {
    count++; 
    console.log(count);
    counterText.textContent = count;
}

function reset() {
    count = 0;
    console.log(count);
    counterText.textContent = count;
}

function decrease() {
    count--;
    console.log(count);
    counterText.textContent = count;
}

function selectTheme(event) {
    console.log(event.target.textContent);
    let theme = event.target.textContent;
    document.querySelector("body").className = theme;
    document.querySelector("main").className = theme;

    const buttons = document.querySelectorAll("buttons");

    for(let i = 0; i < buttons.length; i++) {
        buttons[i].className = theme;
    };
}

//Add event listner to my elements
plusBtn.addEventListener("click", increase);
resetBtn.addEventListener("click", reset);
minusBtn.addEventListener("click", decrease)

//Add event listeners  to multiple elements using a for loop
for(let i = 0; i< themeBtns.length; i++) {
    themeBtns[i].addEventListener("click", selectTheme);
};

