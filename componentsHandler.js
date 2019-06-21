export class ObjectHandler {

    curImages = [];

    defaultSrc = "";
    container;
    imageWidth = 50
    objType = "img";
    //Needs to be a function that takes a index
    onClick = () => { };

    constructor(onClick, defaultSrc, container, imageWidth, objType) {
        this.onClick = onClick;
        this.defaultSrc = defaultSrc;
        this.container = container;
        this.imageWidth = imageWidth;
        this.objType = objType;
    }
    //Show the needed amount of images
    ShowImages(total) {
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
    ShowAllSrc(allSrc) {
        this.ShowImages(allSrc.length);
        for (let i = 0; i < allSrc.length; i++) {

            this.SetSrcTo(i, allSrc[i]);
        }
    }
    //Adds an image to the curImages
    AddImage() {
        var nImage = document.createElement(objType);
        nImage.style.width = imageWidth;
        nImage.style.margin = "auto";
        nImage.src = this.defaultSrc;
        container.appendChild(nImage);
        curImages.push(nImage);
        return nImage;
    }
    //Sets or Remove the listener to all the objects in the list
    SetAllListeners(add) {
        curImages.forEach(img => {
            this.SetListeners(img, add);
        })
    }
    //Sets a listener to the image so its clickable or not
    SetListeners(img, add) {
        if (add) {
            img.onclick = () => {
                const index = curImages.findIndex(im => im === img);
                this.onClick(index);
            };
        }
        else {
            img.onclick = null;
        }
    }
    //Remove the listener from the object in the list
    RemoveListenerFrom(index) {
        this.curImages[index].onclick = null;
    }
    //Set the src of the object to default
    SetSrcToDefault(index) {
        this.curImages[index].src = defaultSrc;
    }
    //Sets the sre to the images at the given index
    SetSrcTo(index, src) {
        this.curImages[index].src = src;
    }
    //controls the visibility of the given component
    ShowComponent(img, show) {
        if (show) {
            img.style.display = "block";
        }
        else {
            img.style.display = "none";
        }
    }
}
