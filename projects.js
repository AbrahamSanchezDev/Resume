

const file = document.querySelector("#file");
const imageContainer = document.querySelector(".output");
const container = document.querySelector("#images");
const addImageBut = document.querySelector("#addImg");
const startGame = document.querySelector("#StartGame");

const xInput = document.querySelector("#x");
const yInput = document.querySelector("#y");

const imageWidth = 50;
const imageWidthPix = "50px";
file.addEventListener("change", OnSelected);
addImageBut.addEventListener("click", CreateGrid);
startGame.addEventListener("click", StartGame)



const curImages = [];
const curInputImage = [];
const curInputImageEvs = [];
let selectedImgs = [-1, -1];

let gameStarted = false;
let generatedImages = [];
const usedIndex = [];
let defaultImg = "images/back.png";
let total;
let wins;
CreateGrid();
function OnSelected() {
    for (let i = 0; i < event.target.files.length; i++) {

        CreateNewInputImage(event.target.files[i]);
    }
}

function CreateNewInputImage(e) {
    let image = AddImageTo(imageContainer, curInputImage);
    image.style.height = imageWidthPix;
    image.style.width = imageWidthPix;
    var nImgData = URL.createObjectURL(e);
    image.src = nImgData;

    curInputImageEvs.push(nImgData);
    // image.style.display = "none";
    // image.style.display = "block";
}

function CreateGrid() {
    ShowCurImages(false);
    total = xInput.value * yInput.value;
    let totalWidth = (xInput.value * imageWidth) + 10;
    let totalheight = (yInput.value * imageWidth) + 10;
    container.style.width = totalWidth;
    container.style.height = totalheight;
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

function ShowCurImages(show) {
    curImages.forEach((img) => {
        ShowComponent(img, show);
    })
}
function AddImage() {
    var nImage = document.createElement("img");
    nImage.style.width = imageWidth;
    nImage.style.margin = "auto";

    container.appendChild(nImage);
    SetImageToDefault(nImage);
    curImages.push(nImage);

}
function AddImageTo(theContainer, array) {
    var nImage = document.createElement("img");
    theContainer.appendChild(nImage);
    if (array != null) {
        array.push(nImage);
    }
    return nImage;
}
function SetImageToDefault(image) {
    image.src = "images/back.png";
    image.onclick = "OnClicked(image)";
}


function ShowComponent(img, show) {
    if (show) {
        img.style.display = "block";
    }
    else {
        img.style.display = "none";
    }
}

function StartGame() {

    ShowComponent(startGame, false);
    ShowComponent(xInput, false);
    ShowComponent(yInput, false);
    ShowComponent(addImageBut, false);
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
        console.log(imgIndex);

        while (added < 2) {
            // console.log("imgs : " + imgIndex);
            random = Math.floor(Math.random() * total);
            if (usedIndex.includes(random) == false) {
                usedIndex.push(random);
                generatedImages[random] = curInputImageEvs[imgIndex];
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

        if (imgIndex >= curInputImageEvs.length) {
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

function OnClicked(index) {
    if (!gameStarted) {
        console.log("No Game yet");
        return;
    }
    ShowImage(index);
}
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
                    console.log("TOTAL WIN!");
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
function SetImageSrc(img, src) {
    img.src = src;
}
function SetImgToImg(img, src) {
    img.src = src;
    img.style.height = imageWidthPix;
    img.style.width = imageWidthPix;
}
