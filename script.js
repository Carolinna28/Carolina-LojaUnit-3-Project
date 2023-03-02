/* Declare variables below to save the different sections (divs) of your story*/
let buttonOne = document.querySelector(".option-one");
let buttonTwo = document.querySelector(".option-two");
let optionOneScreen = document.querySelector(".option-one-screen");
let optionTwoScreen = document.querySelector(".option-two-screen");
let optionOneEnd = document.querySelector(".option-one-end");
let optionTwoEnd = document.querySelector(".option-two-end");
let buttons=document.querySelector(".buttons");
let storyOpening=document.querySelector(".story-opening");
let audio=document.querySelector(".audio");

buttonOne.onclick = function() {
    optionOneScreen.style.display = "block";
    buttons.style.display="none";
    storyOpening.style.display="none";
    
};

buttonTwo.onclick = function() {
    optionTwoScreen.style.display = "block";
    buttons.style.display="none";
    storyOpening.style.display="none";
    
};

optionOneScreen.onclick = function() {
    optionOneEnd.style.display = "block";
    buttons.style.display="none";
    storyOpening.style.display="none";
    optionOneScreen.style.display="none";
};

optionTwoScreen.onclick = function() {
    optionTwoEnd.style.display = "block";
    buttons.style.display="none";
    storyOpening.style.display="none";
    optionTwoScreen.style.display="none";
};

audio.onclick = function() {
    
};