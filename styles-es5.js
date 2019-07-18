(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, ":root{\n\t--bodyBg : url('header-bg.jpg');\n\t--introBg : url('bg_3.jpg');\n\t--liBg : url('button_3.png');\n\t--mainBg : url('bg_7.png');\n\t--infoListBg : url('pattern.png');\n\t--selected : url('button_5.png');\n    --projectsBg : url('bg_7_3.png');\n\n    --spriteSheet : url('spritesheet.png');\n    --defaultImg : url('back.png');\n    --fileImg : url('fileIcon.png');    \n\n    --gridX : 150px;\n    --gridY: 200px;\n    --sizeX : 64px;\n    --sizeY : 64px;\n\n    --gameObjs : block; \n}\n/* You can add global styles to this file, and also import other style files */\n*{\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\nbody{\n    background-image: var(--bodyBg);\n    font-family: Arial, Helvetica, sans-serif;\n    line-height: 1.4;\n    color: rgb(235, 235, 235);\n\tfont-size: 14px;\n}\na{\n    color: #333;\n    text-decoration: none;\n}\n.container{\n    padding: 0 1rem;\n}\n.btn{\n    display: inline-block;\n    border: none;\n    background-color: #555;\n    padding: 7px 20px;\n    cursor: pointer;\n}\n.btn:hover{\n    background: #666;\n}\n.intro {\n\tbackground-image: var(--introBg);\n\tbackground-size: cover;\n\tbackground-repeat: no-repeat;\n\tbackground-position: 50% 50%;\n\tbackground-origin: content-box;\n\tmin-height: 50px;\n\tline-height: 1.7em;\n\ttext-align: center;\n\tfont-family: cursive;\n\tfont-size: 100%;\n\t-webkit-text-decoration: orange;\n\t        text-decoration: orange;\n    color: white;\n    padding: 5px 0px ;\n}\n.intro h1{\n    padding-bottom: 5px;\n}\n.infoList {\n\tborder: 1px white solid;\n\tborder-radius: 15px;\n\tcolor: #f6efe8;\n\tmargin: 5px 10%;\n    background-image: var(--infoListBg);\n    padding: 10px 0px;\n}\n.blackBg{\n    background-image: var(--infoListBg);\n    color: #f6efe8;\n    border-radius: 15px;\n    border: 1px white solid;\n}\n.infoList ul {\n    text-align: center;\n    list-style: none;\n}\n.media {\n    text-align: center;\n}\n.media img {\n    width: 27px;\n    height: 27px;\n}\n.titleName {\n\tpadding-top: 15px;\n}\n.deleteBut{\n    background: #ff0000;\n    color: #fff;\n    border: none;\n    padding: 3px 7px;    \n    border-radius: 50%;\n    cursor: pointer;\n    float: right;\n}\n.inpuTextObj{  \n    display: inline;\n}\n.singleLine{\n    display: inline;\n    text-decoration: none;\n}\n.textToAdd{\n    background: rgb(77, 77, 77);\n    padding: 5px;\n    border-bottom: 1px #ccc dotted;\n}\n.inputForm{\n    display: flex;\n}\n.inputForm input[type='text']{\n    flex: 10;\n    padding: 5px;\n}\n.inputForm input[type='submit']{\n    flex: 2;\n    color:#f4f4f4;\n}\n.smallHeader{\n    background: rgb(12, 71, 148);\n    color: #f4f4f4;\n    text-align: center;\n    border-radius: 30px;\n     margin: 5px 10%;\n}\n.smallHeader a{\n    color: #fff;\n    text-decoration: none;\n}\n.expInputArea{\n    height: 150px;\n    width: 98%;\n    resize: none;\n}\n.expArea {\n\tborder-radius: 5px;\n\ttext-align: left;\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tjustify-content: space-around;\n}\n@-webkit-keyframes fadeIn{\n\tfrom{\n\t\topacity: 0;\n\t\twidth: 25%;\n\t}\n\tto{\n \t\topacity: 1; \n\t\twidth: 100%;\n\t}\n}\n@keyframes fadeIn{\n\tfrom{\n\t\topacity: 0;\n\t\twidth: 25%;\n\t}\n\tto{\n \t\topacity: 1; \n\t\twidth: 100%;\n\t}\n}\n@-webkit-keyframes scaleUp{\n\tfrom{\n\t\t-webkit-transform: scale(1);\n\t\t        transform: scale(1);\n\t}\n\tto{\n        -webkit-transform: scale(1.2);\n                transform: scale(1.2);\n\t}\n}\n@keyframes scaleUp{\n\tfrom{\n\t\t-webkit-transform: scale(1);\n\t\t        transform: scale(1);\n\t}\n\tto{\n        -webkit-transform: scale(1.2);\n                transform: scale(1.2);\n\t}\n}\n@-webkit-keyframes fadeInText{\n\tfrom{\n\t\topacity: 0.1;\n\t}\n\tto{\n \t\topacity: 1; \n\t}\n}\n@keyframes fadeInText{\n\tfrom{\n\t\topacity: 0.1;\n\t}\n\tto{\n \t\topacity: 1; \n\t}\n}\n.h2Header{\n    padding-top: 10px;\n    text-align: center;\n\tcolor: beige;\n\tfont-size: 13px;\n}\n.hrDotted{\n\tborder: 1px dotted rgba(175, 175, 175, 0.534);\n}\n.bg-1 {\n\tbackground-color: #347dec36;\n\tborder-radius: 40px;\n}\n.toCenter{\n    text-align: center;\n    justify-content: center;\n   margin: auto;\n}\n.preset {\n    background-image: var(--spriteSheet);\n    background-repeat: no-repeat;\n    display: block;\n    background-color: transparent;\n    border: none;\n}\n.fileSize{\n    width: 64px;\n    height: 64px;\n}\n.animal_0 {\n    width: var(--sizeX);\n    height: var(--sizeY);\n    background-position: -5px -5px;\n}\n.midScale{\n    -webkit-transform: scale(.6);\n            transform: scale(.6);\n}\n.animal_1 {\n    width: var(--sizeX);\n    height: var(--sizeY);\n    background-position: -79px -5px;\n}\n.animal_2 {\n    width: var(--sizeX);\n    height: var(--sizeY);\n    background-position: -153px -5px;\n}\n.animal_3 {\n    width: var(--sizeX);\n    height: var(--sizeY);\n    background-position: -227px -5px;\n}\n.animal_4 {\n    width: var(--sizeX);\n    height: var(--sizeY);\n    background-position: -301px -5px;\n}\n.animal_5 {\n    width: var(--sizeX);\n    height: var(--sizeY);\n    background-position: -5px -79px;\n}\n.animal_6 {\n    width: var(--sizeX);\n    height: var(--sizeY);\n    background-position: -79px -79px;\n}\n.animal_7 {\n    width: var(--sizeX);\n    height: var(--sizeY);\n    background-position: -153px -79px;\n}\n.animal_8 {\n    width: var(--sizeX);\n    height: var(--sizeY);\n    background-position: -227px -79px;\n}\n.animal_9 {\n    width: var(--sizeX);\n    height: var(--sizeY);\n    background-position: -301px -79px;\n}\n.food_0 {\n    width: var(--sizeX);\n    height: var(--sizeY);\n    background-position: -5px -153px;\n}\n.food_1 {\n    width: var(--sizeX);\n    height: var(--sizeY);\n    background-position: -79px -153px;\n}\n.food_2 {\n    width: var(--sizeX);\n    height: var(--sizeY);\n    background-position: -153px -153px;\n}\n.food_3 {\n    width: var(--sizeX);\n    height: var(--sizeY);\n    background-position: -227px -153px;\n}\n.food_4 {\n    width: var(--sizeX);\n    height: var(--sizeY);\n    background-position: -301px -153px;\n}\n.food_5 {\n    width: var(--sizeX);\n    height: var(--sizeY);\n    background-position: -5px -227px;\n}\n.food_6 {\n    width: var(--sizeX);\n    height: var(--sizeY);\n    background-position: -79px -227px;\n}\n.food_7 {\n    width: var(--sizeX);\n    height: var(--sizeY);\n    background-position: -153px -227px;\n}\n.food_8 {\n    width: var(--sizeX);\n    height: var(--sizeY);\n    background-position: -227px -227px;\n}\n.food_9 {\n    width: var(--sizeX);\n    height: var(--sizeY);\n    background-position: -301px -227px;\n}\n.monster_0 {\n    width: var(--sizeX);\n    height: var(--sizeY);\n    background-position: -5px -301px;\n}\n.monster_1 {\n    width: var(--sizeX);\n    height: var(--sizeY);\n    background-position: -79px -301px;\n}\n.monster_2 {\n    width: var(--sizeX);\n    height: var(--sizeY);\n    background-position: -153px -301px;\n}\n.monster_3 {\n    width: var(--sizeX);\n    height: var(--sizeY);\n    background-position: -227px -301px;\n}\n.monster_4 {\n    width: var(--sizeX);\n    height: var(--sizeY);\n    background-position: -301px -301px;\n}\n.monster_5 {\n    width: var(--sizeX);\n    height: var(--sizeY);\n    background-position: -375px -5px;\n}\n.monster_6 {\n    width: var(--sizeX);\n    height: var(--sizeY);\n    background-position: -375px -79px;\n}\n.monster_7 {\n    width: var(--sizeX);\n    height: var(--sizeY);\n    background-position: -375px -153px;\n}\n.monster_8 {\n    width: var(--sizeX);\n    height: var(--sizeY);\n    background-position: -375px -227px;\n}\n.monster_9 {\n    width: var(--sizeX);\n    height: var(--sizeY);\n    background-position: -375px -301px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,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Q0FBa0M7QUFDdEM7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsa0NBQWtDO0FBQ3RDIiwiZmlsZSI6InNyYy9zdHlsZXMuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOnJvb3R7XG5cdC0tYm9keUJnIDogdXJsKFwiYXNzZXRzL2ltZy9oZWFkZXItYmcuanBnXCIpO1xuXHQtLWludHJvQmcgOiB1cmwoJ2Fzc2V0cy9pbWcvYmdfMy5qcGcnKTtcblx0LS1saUJnIDogdXJsKCdhc3NldHMvaW1nL2J1dHRvbl8zLnBuZycpO1xuXHQtLW1haW5CZyA6IHVybCgnYXNzZXRzL2ltZy9iZ183LnBuZycpO1xuXHQtLWluZm9MaXN0QmcgOiB1cmwoJ2Fzc2V0cy9pbWcvcGF0dGVybi5wbmcnKTtcblx0LS1zZWxlY3RlZCA6IHVybCgnYXNzZXRzL2ltZy9idXR0b25fNS5wbmcnKTtcbiAgICAtLXByb2plY3RzQmcgOiB1cmwoJ2Fzc2V0cy9pbWcvYmdfN18zLnBuZycpO1xuXG4gICAgLS1zcHJpdGVTaGVldCA6IHVybCgnYXNzZXRzL2ltZy9wcmVzZXRzL3Nwcml0ZXNoZWV0LnBuZycpO1xuICAgIC0tZGVmYXVsdEltZyA6IHVybCgnYXNzZXRzL2ltZy9iYWNrLnBuZycpO1xuICAgIC0tZmlsZUltZyA6IHVybCgnYXNzZXRzL2ltZy9maWxlSWNvbi5wbmcnKTsgICAgXG5cbiAgICAtLWdyaWRYIDogMTUwcHg7XG4gICAgLS1ncmlkWTogMjAwcHg7XG4gICAgLS1zaXplWCA6IDY0cHg7XG4gICAgLS1zaXplWSA6IDY0cHg7XG5cbiAgICAtLWdhbWVPYmpzIDogYmxvY2s7IFxufVxuLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuKntcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuYm9keXtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS1ib2R5QmcpO1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgY29sb3I6IHJnYigyMzUsIDIzNSwgMjM1KTtcblx0Zm9udC1zaXplOiAxNHB4O1xufVxuYXtcbiAgICBjb2xvcjogIzMzMztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uY29udGFpbmVye1xuICAgIHBhZGRpbmc6IDAgMXJlbTtcbn1cbi5idG57XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xuICAgIHBhZGRpbmc6IDdweCAyMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5idG46aG92ZXJ7XG4gICAgYmFja2dyb3VuZDogIzY2Njtcbn1cbi5pbnRybyB7XG5cdGJhY2tncm91bmQtaW1hZ2U6IHZhcigtLWludHJvQmcpO1xuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuXHRiYWNrZ3JvdW5kLW9yaWdpbjogY29udGVudC1ib3g7XG5cdG1pbi1oZWlnaHQ6IDUwcHg7XG5cdGxpbmUtaGVpZ2h0OiAxLjdlbTtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRmb250LWZhbWlseTogY3Vyc2l2ZTtcblx0Zm9udC1zaXplOiAxMDAlO1xuXHR0ZXh0LWRlY29yYXRpb246IG9yYW5nZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogNXB4IDBweCA7XG59XG4uaW50cm8gaDF7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cbi5pbmZvTGlzdCB7XG5cdGJvcmRlcjogMXB4IHdoaXRlIHNvbGlkO1xuXHRib3JkZXItcmFkaXVzOiAxNXB4O1xuXHRjb2xvcjogI2Y2ZWZlODtcblx0bWFyZ2luOiA1cHggMTAlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHZhcigtLWluZm9MaXN0QmcpO1xuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xufVxuLmJsYWNrQmd7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdmFyKC0taW5mb0xpc3RCZyk7XG4gICAgY29sb3I6ICNmNmVmZTg7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBib3JkZXI6IDFweCB3aGl0ZSBzb2xpZDtcbn1cdCAgXG4uaW5mb0xpc3QgdWwge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xufVxuLm1lZGlhIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XHQgIFxuLm1lZGlhIGltZyB7XG4gICAgd2lkdGg6IDI3cHg7XG4gICAgaGVpZ2h0OiAyN3B4O1xufVx0XG4udGl0bGVOYW1lIHtcblx0cGFkZGluZy10b3A6IDE1cHg7XG59XHQgXG4uZGVsZXRlQnV0e1xuICAgIGJhY2tncm91bmQ6ICNmZjAwMDA7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDNweCA3cHg7ICAgIFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuLmlucHVUZXh0T2JqeyAgXG4gICAgZGlzcGxheTogaW5saW5lO1xufVxuLnNpbmdsZUxpbmV7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi50ZXh0VG9BZGR7XG4gICAgYmFja2dyb3VuZDogcmdiKDc3LCA3NywgNzcpO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggI2NjYyBkb3R0ZWQ7XG59XG4uaW5wdXRGb3Jte1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG4uaW5wdXRGb3JtIGlucHV0W3R5cGU9J3RleHQnXXtcbiAgICBmbGV4OiAxMDtcbiAgICBwYWRkaW5nOiA1cHg7XG59XG4uaW5wdXRGb3JtIGlucHV0W3R5cGU9J3N1Ym1pdCdde1xuICAgIGZsZXg6IDI7XG4gICAgY29sb3I6I2Y0ZjRmNDtcbn1cbi5zbWFsbEhlYWRlcntcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTIsIDcxLCAxNDgpO1xuICAgIGNvbG9yOiAjZjRmNGY0O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgICBtYXJnaW46IDVweCAxMCU7XG59XG4uc21hbGxIZWFkZXIgYXtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uZXhwSW5wdXRBcmVhe1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgd2lkdGg6IDk4JTtcbiAgICByZXNpemU6IG5vbmU7XG59XG4uZXhwQXJlYSB7XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcblx0dGV4dC1hbGlnbjogbGVmdDtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC13cmFwOiB3cmFwO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cdFx0IFxuQGtleWZyYW1lcyBmYWRlSW57XG5cdGZyb217XG5cdFx0b3BhY2l0eTogMDtcblx0XHR3aWR0aDogMjUlO1xuXHR9XG5cdHRve1xuIFx0XHRvcGFjaXR5OiAxOyBcblx0XHR3aWR0aDogMTAwJTtcblx0fVxufVxuQGtleWZyYW1lcyBzY2FsZVVwe1xuXHRmcm9te1xuXHRcdHRyYW5zZm9ybTogc2NhbGUoMSk7XG5cdH1cblx0dG97XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcblx0fVxufVxuQGtleWZyYW1lcyBmYWRlSW5UZXh0e1xuXHRmcm9te1xuXHRcdG9wYWNpdHk6IDAuMTtcblx0fVxuXHR0b3tcbiBcdFx0b3BhY2l0eTogMTsgXG5cdH1cbn1cbi5oMkhlYWRlcntcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGNvbG9yOiBiZWlnZTtcblx0Zm9udC1zaXplOiAxM3B4O1xufSBcbi5ockRvdHRlZHtcblx0Ym9yZGVyOiAxcHggZG90dGVkIHJnYmEoMTc1LCAxNzUsIDE3NSwgMC41MzQpO1xufVxuLmJnLTEge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ3ZGVjMzY7XG5cdGJvcmRlci1yYWRpdXM6IDQwcHg7XG59XHRcbi50b0NlbnRlcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICBtYXJnaW46IGF1dG87XG59XG5cbi5wcmVzZXQge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHZhcigtLXNwcml0ZVNoZWV0KTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogbm9uZTtcbn1cbi5maWxlU2l6ZXtcbiAgICB3aWR0aDogNjRweDtcbiAgICBoZWlnaHQ6IDY0cHg7XG59XG4uYW5pbWFsXzAge1xuICAgIHdpZHRoOiB2YXIoLS1zaXplWCk7XG4gICAgaGVpZ2h0OiB2YXIoLS1zaXplWSk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTVweCAtNXB4O1xufVxuLm1pZFNjYWxle1xuICAgIHRyYW5zZm9ybTogc2NhbGUoLjYpO1xufVxuLmFuaW1hbF8xIHtcbiAgICB3aWR0aDogdmFyKC0tc2l6ZVgpO1xuICAgIGhlaWdodDogdmFyKC0tc2l6ZVkpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC03OXB4IC01cHg7XG59XG4uYW5pbWFsXzIge1xuICAgIHdpZHRoOiB2YXIoLS1zaXplWCk7XG4gICAgaGVpZ2h0OiB2YXIoLS1zaXplWSk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE1M3B4IC01cHg7XG59XG4uYW5pbWFsXzMge1xuICAgIHdpZHRoOiB2YXIoLS1zaXplWCk7XG4gICAgaGVpZ2h0OiB2YXIoLS1zaXplWSk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIyN3B4IC01cHg7XG59XG4uYW5pbWFsXzQge1xuICAgIHdpZHRoOiB2YXIoLS1zaXplWCk7XG4gICAgaGVpZ2h0OiB2YXIoLS1zaXplWSk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTMwMXB4IC01cHg7XG59XG4uYW5pbWFsXzUge1xuICAgIHdpZHRoOiB2YXIoLS1zaXplWCk7XG4gICAgaGVpZ2h0OiB2YXIoLS1zaXplWSk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTVweCAtNzlweDtcbn1cbi5hbmltYWxfNiB7XG4gICAgd2lkdGg6IHZhcigtLXNpemVYKTtcbiAgICBoZWlnaHQ6IHZhcigtLXNpemVZKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNzlweCAtNzlweDtcbn1cbi5hbmltYWxfNyB7XG4gICAgd2lkdGg6IHZhcigtLXNpemVYKTtcbiAgICBoZWlnaHQ6IHZhcigtLXNpemVZKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTUzcHggLTc5cHg7XG59XG4uYW5pbWFsXzgge1xuICAgIHdpZHRoOiB2YXIoLS1zaXplWCk7XG4gICAgaGVpZ2h0OiB2YXIoLS1zaXplWSk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIyN3B4IC03OXB4O1xufVxuLmFuaW1hbF85IHtcbiAgICB3aWR0aDogdmFyKC0tc2l6ZVgpO1xuICAgIGhlaWdodDogdmFyKC0tc2l6ZVkpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0zMDFweCAtNzlweDtcbn1cblxuLmZvb2RfMCB7XG4gICAgd2lkdGg6IHZhcigtLXNpemVYKTtcbiAgICBoZWlnaHQ6IHZhcigtLXNpemVZKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNXB4IC0xNTNweDtcbn1cbi5mb29kXzEge1xuICAgIHdpZHRoOiB2YXIoLS1zaXplWCk7XG4gICAgaGVpZ2h0OiB2YXIoLS1zaXplWSk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTc5cHggLTE1M3B4O1xufVxuLmZvb2RfMiB7XG4gICAgd2lkdGg6IHZhcigtLXNpemVYKTtcbiAgICBoZWlnaHQ6IHZhcigtLXNpemVZKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTUzcHggLTE1M3B4O1xufVxuLmZvb2RfMyB7XG4gICAgd2lkdGg6IHZhcigtLXNpemVYKTtcbiAgICBoZWlnaHQ6IHZhcigtLXNpemVZKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjI3cHggLTE1M3B4O1xufVxuLmZvb2RfNCB7XG4gICAgd2lkdGg6IHZhcigtLXNpemVYKTtcbiAgICBoZWlnaHQ6IHZhcigtLXNpemVZKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzAxcHggLTE1M3B4O1xufVxuLmZvb2RfNSB7XG4gICAgd2lkdGg6IHZhcigtLXNpemVYKTtcbiAgICBoZWlnaHQ6IHZhcigtLXNpemVZKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNXB4IC0yMjdweDtcbn1cbi5mb29kXzYge1xuICAgIHdpZHRoOiB2YXIoLS1zaXplWCk7XG4gICAgaGVpZ2h0OiB2YXIoLS1zaXplWSk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTc5cHggLTIyN3B4O1xufVxuLmZvb2RfNyB7XG4gICAgd2lkdGg6IHZhcigtLXNpemVYKTtcbiAgICBoZWlnaHQ6IHZhcigtLXNpemVZKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTUzcHggLTIyN3B4O1xufVxuLmZvb2RfOCB7XG4gICAgd2lkdGg6IHZhcigtLXNpemVYKTtcbiAgICBoZWlnaHQ6IHZhcigtLXNpemVZKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjI3cHggLTIyN3B4O1xufVxuLmZvb2RfOSB7XG4gICAgd2lkdGg6IHZhcigtLXNpemVYKTtcbiAgICBoZWlnaHQ6IHZhcigtLXNpemVZKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzAxcHggLTIyN3B4O1xufVxuLm1vbnN0ZXJfMCB7XG4gICAgd2lkdGg6IHZhcigtLXNpemVYKTtcbiAgICBoZWlnaHQ6IHZhcigtLXNpemVZKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNXB4IC0zMDFweDtcbn1cbi5tb25zdGVyXzEge1xuICAgIHdpZHRoOiB2YXIoLS1zaXplWCk7XG4gICAgaGVpZ2h0OiB2YXIoLS1zaXplWSk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTc5cHggLTMwMXB4O1xufVxuLm1vbnN0ZXJfMiB7XG4gICAgd2lkdGg6IHZhcigtLXNpemVYKTtcbiAgICBoZWlnaHQ6IHZhcigtLXNpemVZKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTUzcHggLTMwMXB4O1xufVxuLm1vbnN0ZXJfMyB7XG4gICAgd2lkdGg6IHZhcigtLXNpemVYKTtcbiAgICBoZWlnaHQ6IHZhcigtLXNpemVZKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjI3cHggLTMwMXB4O1xufVxuLm1vbnN0ZXJfNCB7XG4gICAgd2lkdGg6IHZhcigtLXNpemVYKTtcbiAgICBoZWlnaHQ6IHZhcigtLXNpemVZKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzAxcHggLTMwMXB4O1xufVxuLm1vbnN0ZXJfNSB7XG4gICAgd2lkdGg6IHZhcigtLXNpemVYKTtcbiAgICBoZWlnaHQ6IHZhcigtLXNpemVZKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzc1cHggLTVweDtcbn1cbi5tb25zdGVyXzYge1xuICAgIHdpZHRoOiB2YXIoLS1zaXplWCk7XG4gICAgaGVpZ2h0OiB2YXIoLS1zaXplWSk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTM3NXB4IC03OXB4O1xufVxuLm1vbnN0ZXJfNyB7XG4gICAgd2lkdGg6IHZhcigtLXNpemVYKTtcbiAgICBoZWlnaHQ6IHZhcigtLXNpemVZKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzc1cHggLTE1M3B4O1xufVxuLm1vbnN0ZXJfOCB7XG4gICAgd2lkdGg6IHZhcigtLXNpemVYKTtcbiAgICBoZWlnaHQ6IHZhcigtLXNpemVZKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzc1cHggLTIyN3B4O1xufVxuLm1vbnN0ZXJfOSB7XG4gICAgd2lkdGg6IHZhcigtLXNpemVYKTtcbiAgICBoZWlnaHQ6IHZhcigtLXNpemVZKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzc1cHggLTMwMXB4O1xufVxuIl19 */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\HTML\Angular\Resume\Resume\src\styles.css */"./src/styles.css");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles-es5.js.map