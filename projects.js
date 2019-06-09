

const file2 = document.querySelector("#file");
const imageContainer = document.querySelector(".output");
const container = document.querySelector("#images");
const addImageBut = document.querySelector("#addImg");

const xInput = document.querySelector("#x");
const yInput = document.querySelector("#y");

const imageWidth = 50;
const imageWidthPix = "50px";
file2.addEventListener("change", OnSelected);
addImageBut.addEventListener("click", CreateGrid);

const curImages = [];
const curInputImage = [];
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
    image.src = URL.createObjectURL(e);

    // image.style.display = "none";
    // image.style.display = "block";
}

function CreateGrid() {
    ShowCurImages(false);
    let total = xInput.value * yInput.value;
    let totalWidth = xInput.value * imageWidth;
    let totalheight = yInput.value * imageWidth;
    container.style.width = totalWidth;
    container.style.height = totalheight;
    if (total <= curImages.length) {
        //show only the ones needed
        for (let i = 0; i < total; i++) {
            ShowImg(curImages[i], true);
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
        ShowImg(img, show);
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
    SetImageToDefault(nImage);
    if (array != null) {
        curImages.push(nImage);
    }
    return nImage;
}
function SetImageToDefault(image) {
    image.src = "images/back.png";
}

function ShowImg(img, show) {
    if (show) {
        img.style.display = "block";
    }
    else {
        img.style.display = "none";
    }
}
