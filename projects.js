//import ObjectHandler from '../classes/componentsHandler';
// const objHandlerBase = require("../classes/componentsHandler");
// import ObjectHandler from "./componentsHandler";
const file = document.querySelector("#file");
const imageContainer = document.querySelector(".output");
const container = document.querySelector("#images");
const startGame = document.querySelector("#StartGame");
const lowerLevel = document.querySelector("#lowerLevel");
const increaseLevel = document.querySelector("#increaseLevel");
const curLevelLabel = document.querySelector("#curLevel");
const wonText = document.querySelector("#wonText");






function onClickImageHandler(index) {
    console.log(index);
}

file.addEventListener("change", OnSelected);
startGame.addEventListener("click", StartGame)
lowerLevel.addEventListener("click", () => { IncreaseLevel(false) });
increaseLevel.addEventListener("click", () => { IncreaseLevel(true) });

const imageWidth = 50;
const maxLevel = 10;
const imageWidthPix = "50px";
const usedIndex = [];
const curImages = [];
const curInputImage = [];
const curInputImageEvs = [];
const curUsedImages = [];
let selectedImgs = [-1, -1];
let defaultImg = "../images/back.png";
let gameStarted = false;
let generatedImages = [];
let curLevel = 2;
let total;
let wins;

// var imagesHandler = new ObjectHandler(onClickImageHandler, defaultImg, container, imageWidth, "img");
// var animas = [];

// function AddAnimals(amount) {
//     for (let i = 0; i < amount; i++) {
//         animas.push("../images/presets/animals/animal_" + i + ".jpg");
//     }
// }
// AddAnimals(10);

// imagesHandler.ShowAllSrc(animas);
// imagesHandler.SetAllListeners(true);

CreateGrid();
//Called when ever you add images
function OnSelected() {
    for (let i = 0; i < event.target.files.length; i++) {

        CreateNewInputImage(event.target.files[i]);
    }
    ShowStartBut();
    curUsedImages = curInputImageEvs;
}
//Creates a new image and display it in the input images container
function CreateNewInputImage(e) {
    let image = AddImageTo(imageContainer, curInputImage);
    image.style.height = imageWidthPix;
    image.style.width = imageWidthPix;
    var nImgData = URL.createObjectURL(e);
    image.src = nImgData;

    curInputImageEvs.push(nImgData);
}
//Called to increase or decrease the difficulty
function IncreaseLevel(more) {
    if (more) {
        if (curLevel < maxLevel)
            curLevel++;
    }
    else {
        if (curLevel > 2)
            curLevel--;
    }
    curLevelLabel.innerHTML = curLevel;
    CreateGrid();
}
//Check if the game can start if there are images added
function ShowStartBut() {

    ShowComponent(startGame, curUsedImages.length > 1);
}
//create the grid based on the level of difficulty 
function CreateGrid() {
    ShowStartBut();

    ShowComponent(wonText, false);
    ShowCurImages(false);
    total = curLevel * curLevel;
    let totalWidth = (curLevel * imageWidth) + 10;

    container.style.width = totalWidth;
    container.style.height = totalWidth;
    if (total <= curImages.length) {
        //show only the ones needed
        for (let i = 0; i < total; i++) {
            ShowComponent(curImages[i], true);
        }
        return;
    }
    else {
        //Add more images
        let needed = total - curImages.length;
        ShowCurImages(true);
        for (let i = 0; i < needed; i++) {
            AddImage();
        }
    }
}
//shows or hides all images on the grid
function ShowCurImages(show) {
    curImages.forEach((img) => {
        ShowComponent(img, show);
    })
}
//Adds an image to the grid
function AddImage() {
    var nImage = document.createElement("img");
    nImage.style.width = imageWidth;
    nImage.style.margin = "auto";

    container.appendChild(nImage);
    SetImageToDefault(nImage);
    curImages.push(nImage);
}
//Adds images to the images container
function AddImageTo(theContainer, array) {
    var nImage = document.createElement("img");
    theContainer.appendChild(nImage);
    if (array != null) {
        array.push(nImage);
    }
    return nImage;
}

//Sets the images to the default background
function SetImageToDefault(image) {
    image.src = defaultImg;
}
//controls the visibility of the given component
function ShowComponent(img, show) {
    if (show) {
        img.style.display = "block";
    }
    else {
        img.style.display = "none";
    }
}
//Starts the game hiding all other inputs and generates the images positions
function StartGame() {

    ShowComponent(startGame, false);
    ShowComponent(lowerLevel, false);
    ShowComponent(increaseLevel, false);
    ShowComponent(file, false);

    imgIndex = 0;
    generatedImages.length = [];
    usedIndex.length = [];
    generatedImages.length = total;
    let added = 0;
    let random = 0;
    let curTotal = 0;
    while (curTotal < total) {

        added = 0;
        random = 0;
        while (added < 2) {
            // console.log("imgs : " + imgIndex);
            random = Math.floor(Math.random() * total);
            if (usedIndex.includes(random) == false) {
                usedIndex.push(random);
                generatedImages[random] = curUsedImages[imgIndex];
                added++;
                curTotal++;
                if (added >= 2) {

                    break;
                }
            }
            if (curTotal >= total) {
                break;
            }
        }
        imgIndex++;

        if (imgIndex >= curUsedImages.length) {
            imgIndex = 0;
        }
        if (curTotal >= total) {
            break;
        }
    }
    for (let i = 0; i < curImages.length; i++) {
        SetListeners(curImages[i], true);
    }
    gameStarted = true;
    wins = 0;
}
//Sets a listener to the image so its clickable or not
function SetListeners(img, add) {
    if (add) {
        img.onclick = () => {
            const index = curImages.findIndex(im => im === img);
            OnClicked(index);
        };
    }
    else {
        img.onclick = null;
    }
}
//called when an images is clicked on
function OnClicked(index) {
    if (!gameStarted) {
        return;
    }
    ShowImage(index);
}
//Shows the selected image and calculates if its a match or not
function ShowImage(index) {

    if (index === selectedImgs[0] || index === selectedImgs[1]) {
        return;
    }

    SetImgToImg(curImages[index], generatedImages[index]);

    if (selectedImgs[0] == -1) {
        selectedImgs[0] = index;
    }
    else if (selectedImgs[1] == -1) {
        selectedImgs[1] = index;
    }
    if (selectedImgs[0] != -1 && selectedImgs[1] != -1) {
        setTimeout(() => {
            //Check if selected
            if (generatedImages[selectedImgs[0]] === generatedImages[selectedImgs[1]]) {
                //Remove listener in the match images
                SetListeners(curImages[selectedImgs[0]], false);
                SetListeners(curImages[selectedImgs[1]], false);

                wins++;
                if (wins >= (total / 2)) {
                    ShowComponent(wonText, true);
                }
            }
            else {
                SetImageSrc(curImages[selectedImgs[0]], defaultImg);
                SetImageSrc(curImages[selectedImgs[1]], defaultImg);
            }
            //Reset to non selected
            selectedImgs[0] = -1;
            selectedImgs[1] = -1;
        }, 200);
    }
}
//sets image src
function SetImageSrc(img, src) {
    img.src = src;
}
//Sets image to the given src and sets the correct size
function SetImgToImg(img, src) {
    img.src = src;
    img.style.height = imageWidthPix;
    img.style.width = imageWidthPix;
}