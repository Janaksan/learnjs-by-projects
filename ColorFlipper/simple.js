// simple color generator 
const colors = ["#ffcfcf", "#ffb70042", "#05b7ef5e", "#cc00ff36"];

const bodyElement = document.body;
const generateBtn = document.querySelector(".simple-btn");
const title = document.querySelector('.heading')

generateBtn.addEventListener('click', function () {
    const randomNumber = Math.floor(Math.random() * colors.length);
    title.textContent = `Color Flipper [  ${colors[randomNumber]} ]`;
    bodyElement.style.backgroundColor = colors[randomNumber];
})


//hex color generator
const hexColors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const generateHexBtn = document.querySelector(".hex-btn");


generateHexBtn.addEventListener('click', function () {
    let hexColor = "#";

     for (let i = 0; i < 6; i++) {
       hexColor += hexColors[getRandomNumber()];
     }

    bodyElement.style.backgroundColor = hexColor;
     title.textContent = `Color Flipper [  ${hexColor} ]`;
})

function getRandomNumber() {
  return Math.floor(Math.random() * hexColors.length);
}