//open- en dichtklappen van hamburger
const menu = document.querySelector("ul");
const hamburger = document.querySelector(".hamburger");

const toggleMenu = () => {
    if(menu.className == "open") {
       //shrink the menu
       menu.className = "closed";   
    }
    else {
        //expand the menu
        menu.className = "open"; 
    }
};

hamburger.addEventListener("click", toggleMenu);


//kleuren-menu
const bodyColor = document.querySelector("body");
const homeButton = document.querySelector("#home");
const redButton = document.querySelector('#red');
const orangeButton = document.querySelector('#orange');
const yellowButton = document.querySelector('#yellow');
const greenButton = document.querySelector('#green');
const blueButton = document.querySelector('#blue');

//events per kleur-button: remove previous background-color, add button-color as background-color, close menu
const removePreviousColor = () => {
    bodyColor.classList.remove("beige-background");
    bodyColor.classList.remove("red-background");
    bodyColor.classList.remove("orange-background");
    bodyColor.classList.remove("yellow-background");
    bodyColor.classList.remove("green-background");
    bodyColor.classList.remove("blue-background");
}

const changeToNewColor = (color) => {
    removePreviousColor();
    bodyColor.classList.add(color);
    toggleMenu();
}

homeButton.addEventListener('click', () => {changeToNewColor("beige-background")});
redButton.addEventListener('click', () => {changeToNewColor("red-background")});
orangeButton.addEventListener('click', () => {changeToNewColor("orange-background")});
yellowButton.addEventListener('click', () => {changeToNewColor("yellow-background")});
greenButton.addEventListener('click', () => {changeToNewColor("green-background")});
blueButton.addEventListener('click', () => {changeToNewColor("blue-background")});
