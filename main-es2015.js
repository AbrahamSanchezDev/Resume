(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\" class=\"intro\">\n  <h1>\n    Abraham Sanchez\n  </h1>\n  Unity 3d ,C# Developer & Video Games Fan\n</div>\n\n<div>\n  <app-nav-control></app-nav-control>\n  <router-outlet></router-outlet>\n</div>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/Input/add-text/add-text.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/Input/add-text/add-text.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"inputForm\" (ngSubmit)=\"onSubmit()\">\n    <input type=\"text\" name=\"myText\" [(ngModel)]=\"myText\" placeholder=\"{{tempPlaceHolder}}\">\n    <input type=\"submit\" value=\"{{addText}}\" class=\"btn\">\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/Input/experience-obj/experience-obj.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/Input/experience-obj/experience-obj.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"expObj\">\n    <!-- Header -->\n    <app-header title=\"Experience Json Creation\"></app-header>\n    <!-- Get the title for the ExpObj -->\n    <div class=\"inputObj\">\n        <label>Title</label>\n        <input type=\"text\" [(ngModel)]=\"expObj.title\">\n    </div>\n    <!-- Get the link that the image will send you to for the ExpObj -->\n    <div class=\"inputObj\">\n        <label>Link</label>\n        <input type=\"text\" [(ngModel)]=\"expObj.link\">\n    </div>\n    <!-- Get the image name with the ending .png,.jpg ,etc based in the path assets/img for the ExpObj -->\n    <div class=\"inputObj\">\n        <label>ImagePath</label>\n        <input type=\"text\" [(ngModel)]=\"expObj.img\">\n    </div>\n    <!-- Multi line area that will be turn in to an array of strings to be used in the expObjDisplay -->\n    <app-multi-line-to-json cssClass=\"expInputArea\" #multiText></app-multi-line-to-json>\n    <!-- Header -->\n    <app-header title=\"Download Experience File\" cssClass=\"smallHeader\"></app-header>\n    <!-- Download the file with the given name as a json -->\n    <app-add-text (addTextData)=\"createExp($event)\" tempText=\"File name...\" addText=\"Download File\"></app-add-text>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/Input/multi-line-to-json/multi-line-to-json.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/Input/multi-line-to-json/multi-line-to-json.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <label>{{title}}</label>\n    <textarea class=\"{{cssClass}}\" name=\"content\" [(ngModel)]=\"content\"></textarea>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/Project/flip-game/flip-game.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/Project/flip-game/flip-game.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flipBody\">\n    <hr>\n    <div class=\"topFlip\">\n        <div class=\"presetsImgs \">\n            <div *ngFor=\"let arg of presetsSelect\" class=\"gameObj\">\n                <button class=\" {{arg.css}}\" (click)=\"onPreset(arg.id)\">\n                </button>\n            </div>\n            <div class=\"gameObj\">\n                <p> Max : 10</p>\n                <br>\n                <input type=\"file\" accept=\"image/*\" name=\"image\" id=\"fileSelector\" multiple=true\n                    (change)=\"onChange($event)\">\n            </div>\n        </div>\n        <div class=\"inputArea gameObj\">\n            Difficulty :\n            <button class=\"smallButtons\" (click)=\"increaseLevel(false)\">-</button>\n            <label class=\"curLevel\">{{curLevel}}</label>\n            <button class=\"smallButtons\" (click)=\"increaseLevel(true)\">+</button>\n        </div>\n        <div>{{displayText}}</div>\n        <button class=\"startBut \" (click)=\"onStartPress()\">{{startText}}</button>\n    </div>\n    <hr>\n    <div class=\"mainCont\">\n        <div class=\"leftFlip\">\n            <h5>Images To Display:</h5>\n            <div class=\"usingImgs\">\n                <div *ngFor=\"let img of loadedImgs\">\n                    <img class=\"{{getCss(img)}}\" src=\"{{getDisplay(img)}}\" alt=\"\">\n                </div>\n            </div>\n        </div>\n\n        <div>\n            <div class=\"grid\">\n                <div>\n                    <app-images-grid-display (onSelected)=\"onSelect($event)\" [curImagesData]=\"gameImgs\">\n                    </app-images-grid-display>\n                </div>\n            </div>\n        </div>\n    </div>\n    <br>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/add-todo/add-todo.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/add-todo/add-todo.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form\" (ngSubmit)=\"onSubmit()\">\n    <input type=\"text\" name=\"title\" [(ngModel)]=\"title\" placeholder=\"{{tempPlaceHolder}}\">\n    <input type=\"submit\" value=\"{{addText}}\" class=\"btn\">\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/display/exp-obj-display/exp-obj-display.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/display/exp-obj-display/exp-obj-display.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"expObj\">\n    <h2> {{expObj.title}}</h2>\n    <a href=\"{{expObj.link}}\" target=\"_blanck\"> <img src=\"{{(imgPath + expObj.img)}}\" class=\"image_1\"></a>\n\n    <p *ngFor=\"let expObj of des\" class=\"expText\"> {{expObj}}</p>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/display/images-grid-display/images-grid-display.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/display/images-grid-display/images-grid-display.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gridParent\">\n    <div class=\"gridObj\">\n        <div *ngFor=\"let img of curImagesData\">\n            <a (click)=\"onSelect(img)\">\n                <img class=\"{{getCss(img)}}\" src=\"{{getDisplay(img)}}\" alt=\"\">\n            </a>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/display/list-display/list-display.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/display/list-display/list-display.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"skills\">\n    <h2 class=\"h2Header\">\n        {{title}}\n    </h2>\n    <hr class=\"hrDotted\">\n    <div class=\"split\"></div>\n    <div class=\"skillsMain\">\n        <div *ngFor=\"let arg of skills\" class=\"skillsObj\">\n            <h4>{{arg.title}} </h4>\n            <ul *ngFor=\"let list of arg.list\">\n                <li [innerHTML]=list> </li>\n            </ul>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/input-area/input-area.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/input-area/input-area.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"textToAdd\">\n    <p class=\"inpuTextObj\">{{ text }}</p>\n    <button (click)=\"onDelete()\" class=\"deleteBut\">X</button>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/intro/intro.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/intro/intro.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>intro works!</p>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/layout/header/header.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/layout/header/header.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"{{cssClass}}\">\n    <h2>{{ title }}</h2>\n</header>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/nav-control/nav-control.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/nav-control/nav-control.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"mainNav\">\n    <a routerLink=\"/\">Resume</a>\n    <a routerLink=\"/projects\">Projects</a>\n</nav>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/projects/projects.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/projects/projects.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <div class=\"infoList projectsInfo\">\n        <p>\n            Projects and Practices for web development\n        </p>\n    </div>\n    <section>\n        <div class=\"projects\">\n            <div class=\"projectSelector \">\n                <h3>Projects:</h3>\n                <div *ngFor=\"let arg of projects\">\n                    <button (click)=\"onSelect(arg)\">\n                        {{arg.title}}\n                    </button>\n                </div>\n            </div>\n\n\n            <div class=\"projectArea\">\n                <div class=\"des\">\n                    <p [innerHtml]=\"description\">\n\n                    </p>\n                </div>\n                <ng-container *ngComponentOutlet=\"componentToLoad\" class=\"project\">\n\n                </ng-container>\n            </div>\n        </div>\n    </section>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/resume-intro/resume-intro.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/resume-intro/resume-intro.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"infoList\">\n    <ul>\n        <li>Email: abraham_gto@hotmail.com</li>\n        <li>Skype: lholykillerl</li>\n        <li>From : Salamanca, Guanajuato in Mexico</li>\n        <li>\n            I'm a single mexican 31 years old.I'm willing to relocate.\n            <br>\n            Some of my good points would be that i'm honest,\n            good-natured,open-minded and determined.\n        </li>\n    </ul>\n</div>\n<div class=\"media\">\n    <a *ngFor=\"let info of contactMedia\" href=\"{{info.link}}\" target=\"_blank\">\n        <img src=\"{{info.src}}\" alt=\"{{info.altText}}\">\n    </a>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/resume/resume.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/resume/resume.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainBg\">\r\n    <app-resume-intro></app-resume-intro>\r\n    <section>\r\n        <div class=\"bg-1\">\r\n            <h2 class=\"h2Header\">Experience</h2>\r\n            <hr class=\"hrDotted\">\r\n            <div class=\"expArea\">\r\n                <app-exp-obj-display *ngFor=\"let expObj of expObjs\" [expObj]=\"expObj\"></app-exp-obj-display>\r\n            </div>\r\n        </div>\r\n    </section>\r\n    <section>\r\n        <app-list-display title=\"Technical Skills\"></app-list-display>\r\n    </section>\r\n    <section>\r\n        <div class=\"summery bg-1\">\r\n            <h3>Summary and Education</h3>\r\n            <p *ngFor=\"let arg of summeryAndEducation\">{{arg}}</p>\r\n        </div>\r\n    </section>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/text-to-json/text-to-json.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/text-to-json/text-to-json.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <app-header title=\"Text To Json\"></app-header>\n    <!-- Adds a input field together with a submit button and listen to the addTextData event -->\n    <app-add-text (addTextData)=\"addData($event)\" tempText=\"Add Text To Json\" addText=\"Add\"></app-add-text>\n    <!-- Generate all the Texts that are in the variable myText -->\n    <app-input-area *ngFor=\"let theText of myText\" [text]=\"theText\" (onDeleteText)=\"deleteTextData($event)\">\n    </app-input-area>\n    <app-header title=\"Download File\" cssClass=\"smallHeader\"></app-header>\n    <app-add-text (addTextData)=\"createJson($event)\" tempText=\"File name...\" addText=\"Download\"></app-add-text>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/todos/todo-item/todo-item.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/todos/todo-item/todo-item.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"setClasses()\">\n    <input (change)=\"onToggle(todo)\" type=\"checkbox\" />\n    <p class=\"theTittle\">{{ todo.title }}</p>\n    <button (click)=\"onDelete(todo)\" class=\"del\">x</button>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/todos/todos.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/todos/todos.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header title=\"Todos\"></app-header>\n<app-add-todo (addTodo)=\"addTodo($event)\" tempText=\"Add TODO....\"></app-add-todo>\n<app-todo-item *ngFor=\"let todo of todos\" [todo]=\"todo\" (deleteTodo)=\"deleteTodo($event)\">\n</app-todo-item>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/resume/resume.component */ "./src/app/components/resume/resume.component.ts");
/* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/projects/projects.component */ "./src/app/components/projects/projects.component.ts");





const routes = [
    { path: '', component: _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_3__["ResumeComponent"] },
    { path: 'projects', component: _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_4__["ProjectsComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Resume';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_intro_intro_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/intro/intro.component */ "./src/app/components/intro/intro.component.ts");
/* harmony import */ var _components_todos_todos_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/todos/todos.component */ "./src/app/components/todos/todos.component.ts");
/* harmony import */ var _components_todos_todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/todos/todo-item/todo-item.component */ "./src/app/components/todos/todo-item/todo-item.component.ts");
/* harmony import */ var _components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/layout/header/header.component */ "./src/app/components/layout/header/header.component.ts");
/* harmony import */ var _components_add_todo_add_todo_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/add-todo/add-todo.component */ "./src/app/components/add-todo/add-todo.component.ts");
/* harmony import */ var _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/resume/resume.component */ "./src/app/components/resume/resume.component.ts");
/* harmony import */ var _components_nav_control_nav_control_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/nav-control/nav-control.component */ "./src/app/components/nav-control/nav-control.component.ts");
/* harmony import */ var _components_input_area_input_area_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/input-area/input-area.component */ "./src/app/components/input-area/input-area.component.ts");
/* harmony import */ var _components_text_to_json_text_to_json_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/text-to-json/text-to-json.component */ "./src/app/components/text-to-json/text-to-json.component.ts");
/* harmony import */ var _components_Input_add_text_add_text_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/Input/add-text/add-text.component */ "./src/app/components/Input/add-text/add-text.component.ts");
/* harmony import */ var _components_Input_multi_line_to_json_multi_line_to_json_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/Input/multi-line-to-json/multi-line-to-json.component */ "./src/app/components/Input/multi-line-to-json/multi-line-to-json.component.ts");
/* harmony import */ var _components_Input_experience_obj_experience_obj_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/Input/experience-obj/experience-obj.component */ "./src/app/components/Input/experience-obj/experience-obj.component.ts");
/* harmony import */ var _components_display_exp_obj_display_exp_obj_display_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/display/exp-obj-display/exp-obj-display.component */ "./src/app/components/display/exp-obj-display/exp-obj-display.component.ts");
/* harmony import */ var _components_resume_intro_resume_intro_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/resume-intro/resume-intro.component */ "./src/app/components/resume-intro/resume-intro.component.ts");
/* harmony import */ var _components_display_list_display_list_display_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/display/list-display/list-display.component */ "./src/app/components/display/list-display/list-display.component.ts");
/* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/projects/projects.component */ "./src/app/components/projects/projects.component.ts");
/* harmony import */ var _components_Project_flip_game_flip_game_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/Project/flip-game/flip-game.component */ "./src/app/components/Project/flip-game/flip-game.component.ts");
/* harmony import */ var _components_display_images_grid_display_images_grid_display_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/display/images-grid-display/images-grid-display.component */ "./src/app/components/display/images-grid-display/images-grid-display.component.ts");

























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _components_intro_intro_component__WEBPACK_IMPORTED_MODULE_7__["IntroComponent"],
            _components_todos_todos_component__WEBPACK_IMPORTED_MODULE_8__["TodosComponent"],
            _components_todos_todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_9__["TodoItemComponent"],
            _components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
            _components_add_todo_add_todo_component__WEBPACK_IMPORTED_MODULE_11__["AddTodoComponent"],
            _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_12__["ResumeComponent"],
            _components_nav_control_nav_control_component__WEBPACK_IMPORTED_MODULE_13__["NavControlComponent"],
            _components_input_area_input_area_component__WEBPACK_IMPORTED_MODULE_14__["InputAreaComponent"],
            _components_text_to_json_text_to_json_component__WEBPACK_IMPORTED_MODULE_15__["TextToJsonComponent"],
            _components_Input_add_text_add_text_component__WEBPACK_IMPORTED_MODULE_16__["AddTextComponent"],
            _components_Input_multi_line_to_json_multi_line_to_json_component__WEBPACK_IMPORTED_MODULE_17__["MultiLineToJsonComponent"],
            _components_Input_experience_obj_experience_obj_component__WEBPACK_IMPORTED_MODULE_18__["ExperienceObjComponent"],
            _components_display_exp_obj_display_exp_obj_display_component__WEBPACK_IMPORTED_MODULE_19__["ExpObjDisplayComponent"],
            _components_resume_intro_resume_intro_component__WEBPACK_IMPORTED_MODULE_20__["ResumeIntroComponent"],
            _components_display_list_display_list_display_component__WEBPACK_IMPORTED_MODULE_21__["ListDisplayComponent"],
            _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_22__["ProjectsComponent"],
            _components_Project_flip_game_flip_game_component__WEBPACK_IMPORTED_MODULE_23__["FlipGameComponent"],
            _components_display_images_grid_display_images_grid_display_component__WEBPACK_IMPORTED_MODULE_24__["ImagesGridDisplayComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
        ],
        entryComponents: [
            _components_todos_todos_component__WEBPACK_IMPORTED_MODULE_8__["TodosComponent"],
            _components_Input_experience_obj_experience_obj_component__WEBPACK_IMPORTED_MODULE_18__["ExperienceObjComponent"],
            _components_text_to_json_text_to_json_component__WEBPACK_IMPORTED_MODULE_15__["TextToJsonComponent"],
            _components_Project_flip_game_flip_game_component__WEBPACK_IMPORTED_MODULE_23__["FlipGameComponent"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/Input/add-text/add-text.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/Input/add-text/add-text.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvSW5wdXQvYWRkLXRleHQvYWRkLXRleHQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/Input/add-text/add-text.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/Input/add-text/add-text.component.ts ***!
  \*****************************************************************/
/*! exports provided: AddTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTextComponent", function() { return AddTextComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AddTextComponent = class AddTextComponent {
    constructor() {
        this.addTextData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.tempPlaceHolder = "Add...";
        this.addText = "Submit";
    }
    ngOnInit() {
    }
    onSubmit() {
        //this would send the content of the input field only if there is a text
        if (this.myText) {
            this.addTextData.emit(this.myText);
            this.myText = null;
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AddTextComponent.prototype, "addTextData", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('tempText'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], AddTextComponent.prototype, "tempPlaceHolder", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('addText'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], AddTextComponent.prototype, "addText", void 0);
AddTextComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-text',
        template: __webpack_require__(/*! raw-loader!./add-text.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/Input/add-text/add-text.component.html"),
        styles: [__webpack_require__(/*! ./add-text.component.css */ "./src/app/components/Input/add-text/add-text.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AddTextComponent);



/***/ }),

/***/ "./src/app/components/Input/experience-obj/experience-obj.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/Input/experience-obj/experience-obj.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".titleHeader{\r\n    text-align: center;\r\n    background-color: #666;\r\n    padding: 1px 5px;\r\n    border-radius: 30px; \r\n   color: #fff;\r\n   display: block;\r\n   margin: 5px 10px;\r\n}\r\n.expObj{\r\n    margin-top: 10px;\r\n    text-align: center;    \r\n}\r\n.inputObj{\r\n    text-align: center;\r\n    background-color: #666;\r\n    padding: 1px 5px;   \r\n    border-radius: 30px;    \r\n    color: #fff;  \r\n    display: block;  \r\n    margin: 5px 10px;\r\n    display: flex;\r\n}\r\n.inputObj label {\r\n    display: flex;\r\n    flex: 0.5;\r\n    padding: 5px;\r\n    \r\n   \r\n   \r\n}\r\n.inputObj input {\r\n    flex: 3;\r\n    display: inline-block;\r\n    margin: 2px 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9JbnB1dC9leHBlcmllbmNlLW9iai9leHBlcmllbmNlLW9iai5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0dBQ3BCLFdBQVc7R0FDWCxjQUFjO0dBQ2QsZ0JBQWdCO0FBQ25CO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCxZQUFZOzs7O0FBSWhCO0FBQ0E7SUFDSSxPQUFPO0lBQ1AscUJBQXFCO0lBQ3JCLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvSW5wdXQvZXhwZXJpZW5jZS1vYmovZXhwZXJpZW5jZS1vYmouY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZUhlYWRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NjY7XHJcbiAgICBwYWRkaW5nOiAxcHggNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDsgXHJcbiAgIGNvbG9yOiAjZmZmO1xyXG4gICBkaXNwbGF5OiBibG9jaztcclxuICAgbWFyZ2luOiA1cHggMTBweDtcclxufVxyXG4uZXhwT2Jqe1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgICAgXHJcbn1cclxuLmlucHV0T2Jqe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY2NjtcclxuICAgIHBhZGRpbmc6IDFweCA1cHg7ICAgXHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4OyAgICBcclxuICAgIGNvbG9yOiAjZmZmOyAgXHJcbiAgICBkaXNwbGF5OiBibG9jazsgIFxyXG4gICAgbWFyZ2luOiA1cHggMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLmlucHV0T2JqIGxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4OiAwLjU7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBcclxuICAgXHJcbiAgIFxyXG59XHJcbi5pbnB1dE9iaiBpbnB1dCB7XHJcbiAgICBmbGV4OiAzO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiAycHggMjBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/Input/experience-obj/experience-obj.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/Input/experience-obj/experience-obj.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ExperienceObjComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceObjComponent", function() { return ExperienceObjComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _multi_line_to_json_multi_line_to_json_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../multi-line-to-json/multi-line-to-json.component */ "./src/app/components/Input/multi-line-to-json/multi-line-to-json.component.ts");
/* harmony import */ var src_app_library_download_tool_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/library/download-tool.service */ "./src/app/library/download-tool.service.ts");
/* harmony import */ var src_app_models_exp_obj_exp_obj_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/exp-obj/exp-obj.module */ "./src/app/models/exp-obj/exp-obj.module.ts");





let ExperienceObjComponent = class ExperienceObjComponent {
    constructor(downloadTool) {
        this.downloadTool = downloadTool;
        this.expObj = new src_app_models_exp_obj_exp_obj_module__WEBPACK_IMPORTED_MODULE_4__["ExpObjModule"]();
    }
    ngOnInit() {
    }
    //Create the ExpObj description and save it as json
    createExp(theText) {
        let theTextInArray = this.multiLineText.generateText();
        this.expObj.description = theTextInArray;
        this.downloadTool.DownloadTextToFileAsJson(this.expObj, theText);
    }
};
ExperienceObjComponent.ctorParameters = () => [
    { type: src_app_library_download_tool_service__WEBPACK_IMPORTED_MODULE_3__["DownloadToolService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('multiText', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _multi_line_to_json_multi_line_to_json_component__WEBPACK_IMPORTED_MODULE_2__["MultiLineToJsonComponent"])
], ExperienceObjComponent.prototype, "multiLineText", void 0);
ExperienceObjComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-experience-obj',
        template: __webpack_require__(/*! raw-loader!./experience-obj.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/Input/experience-obj/experience-obj.component.html"),
        styles: [__webpack_require__(/*! ./experience-obj.component.css */ "./src/app/components/Input/experience-obj/experience-obj.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_library_download_tool_service__WEBPACK_IMPORTED_MODULE_3__["DownloadToolService"]])
], ExperienceObjComponent);



/***/ }),

/***/ "./src/app/components/Input/multi-line-to-json/multi-line-to-json.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/components/Input/multi-line-to-json/multi-line-to-json.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvSW5wdXQvbXVsdGktbGluZS10by1qc29uL211bHRpLWxpbmUtdG8tanNvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/Input/multi-line-to-json/multi-line-to-json.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/Input/multi-line-to-json/multi-line-to-json.component.ts ***!
  \*************************************************************************************/
/*! exports provided: MultiLineToJsonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiLineToJsonComponent", function() { return MultiLineToJsonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MultiLineToJsonComponent = class MultiLineToJsonComponent {
    constructor() {
        this.createText = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.title = "";
        this.cssClass = "";
    }
    ngOnInit() {
    }
    generateText() {
        if (this.content == null || this.content.length == 0) {
            return;
        }
        let textInArray = this.content.split("\n");
        console.log(textInArray);
        return textInArray;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], MultiLineToJsonComponent.prototype, "createText", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], MultiLineToJsonComponent.prototype, "title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], MultiLineToJsonComponent.prototype, "cssClass", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], MultiLineToJsonComponent.prototype, "content", void 0);
MultiLineToJsonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-multi-line-to-json',
        template: __webpack_require__(/*! raw-loader!./multi-line-to-json.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/Input/multi-line-to-json/multi-line-to-json.component.html"),
        styles: [__webpack_require__(/*! ./multi-line-to-json.component.css */ "./src/app/components/Input/multi-line-to-json/multi-line-to-json.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MultiLineToJsonComponent);



/***/ }),

/***/ "./src/app/components/Project/flip-game/flip-game.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/Project/flip-game/flip-game.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gameObj{\r\n    display: var(--gameObjs);\r\n}\r\n.flipBody{\r\n    text-align: center;\r\n    align-content: center;\r\n}\r\n.topFlip{\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: space-around;  \r\n    margin-left: 2px;\r\n    margin-right: 30px;\r\n    width: 100%;    \r\n}\r\n.startBut{\r\n    height: 40px;\r\n    width: 150px;\r\n    background-image: var(--introBg);\r\n    opacity: .9;\r\n    color: #ffffff;\r\n    text-shadow: 2px 2px rgb(15, 15, 15);\r\n    border-radius: 30px;\r\n    font-size: 20px;\r\n    background-size: 100%;\r\n    background-position: 50% 50%;\r\n    margin-top: 5px;\r\n    font-size: 1.5em;\r\n    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\r\n}\r\n.mainCont{\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n}\r\n.leftFlip{\r\n    margin-left: 5px;\r\n    float: left;\r\n    width: 128px;\r\n}\r\n.usingImgs{\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: left;\r\n    width: 128px;\r\n}\r\n.presetsImgs{\r\n\tdisplay: flex;\r\n    flex-wrap: wrap;\r\n\talign-items:left;\r\n    justify-content: left;\r\n}\r\n.defaultImg{\r\n    background-image: var(--defaultImg);\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    display: block;\r\n}\r\n.fileImg{\r\n    background-image: var(--fileImg);\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    display: block;\r\n    width: 64px;\r\n    height: 64px;\r\n    background-color: transparent;\r\n    border: none;\r\n}\r\n.inputArea{\r\n\tjustify-content: center;\r\n\tpadding-bottom: 10px;\t\r\n}\r\n#StartGame{\r\n\tbackground-color: rgb(54, 54, 54);\r\n\tcolor: antiquewhite;\r\n\theight: 30px;\r\n\tmargin : auto;\r\n\tmargin-top: 5px;\r\n\tmargin-bottom: 15px;\r\n\tfont-size: 20px;\r\n}\r\n.smallButtons{\r\n    width: 30px;\r\n    height: 30px\r\n}\r\n.curLevel{\r\n    padding: 5px 10px;\r\n}\r\n.grid{\r\n    width: 100%; \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9Qcm9qZWN0L2ZsaXAtZ2FtZS9mbGlwLWdhbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZiw2QkFBNkI7SUFDN0IsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osZ0NBQWdDO0lBQ2hDLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsb0NBQW9DO0lBQ3BDLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLDRCQUE0QjtJQUM1QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHNFQUFzRTtBQUMxRTtBQUNBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjtBQUNBO0NBQ0MsYUFBYTtJQUNWLGVBQWU7Q0FDbEIsZ0JBQWdCO0lBQ2IscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxtQ0FBbUM7SUFDbkMsc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxnQ0FBZ0M7SUFDaEMsc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QixjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IsWUFBWTtBQUNoQjtBQUNBO0NBQ0MsdUJBQXVCO0NBQ3ZCLG9CQUFvQjtBQUNyQjtBQUNBO0NBQ0MsaUNBQWlDO0NBQ2pDLG1CQUFtQjtDQUNuQixZQUFZO0NBQ1osYUFBYTtDQUNiLGVBQWU7Q0FDZixtQkFBbUI7Q0FDbkIsZUFBZTtBQUNoQjtBQUNBO0lBQ0ksV0FBVztJQUNYO0FBQ0o7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9Qcm9qZWN0L2ZsaXAtZ2FtZS9mbGlwLWdhbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nYW1lT2Jqe1xyXG4gICAgZGlzcGxheTogdmFyKC0tZ2FtZU9ianMpO1xyXG59XHJcbi5mbGlwQm9keXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4udG9wRmxpcHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDsgIFxyXG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgIHdpZHRoOiAxMDAlOyAgICBcclxufVxyXG4uc3RhcnRCdXR7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS1pbnRyb0JnKTtcclxuICAgIG9wYWNpdHk6IC45O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCByZ2IoMTUsIDE1LCAxNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBmb250LWZhbWlseTogSW1wYWN0LCBIYWV0dGVuc2Nod2VpbGVyLCAnQXJpYWwgTmFycm93IEJvbGQnLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5tYWluQ29udHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuLmxlZnRGbGlwe1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDEyOHB4O1xyXG59XHJcbi51c2luZ0ltZ3N7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDEyOHB4O1xyXG59XHJcbi5wcmVzZXRzSW1nc3tcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG5cdGFsaWduLWl0ZW1zOmxlZnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcbn1cclxuLmRlZmF1bHRJbWd7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS1kZWZhdWx0SW1nKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmZpbGVJbWd7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS1maWxlSW1nKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogNjRweDtcclxuICAgIGhlaWdodDogNjRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcbi5pbnB1dEFyZWF7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0cGFkZGluZy1ib3R0b206IDEwcHg7XHRcclxufVxyXG4jU3RhcnRHYW1le1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYig1NCwgNTQsIDU0KTtcclxuXHRjb2xvcjogYW50aXF1ZXdoaXRlO1xyXG5cdGhlaWdodDogMzBweDtcclxuXHRtYXJnaW4gOiBhdXRvO1xyXG5cdG1hcmdpbi10b3A6IDVweDtcclxuXHRtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG5cdGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4uc21hbGxCdXR0b25ze1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHhcclxufVxyXG4uY3VyTGV2ZWx7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxufVxyXG4uZ3JpZHtcclxuICAgIHdpZHRoOiAxMDAlOyBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/Project/flip-game/flip-game.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/Project/flip-game/flip-game.component.ts ***!
  \*********************************************************************/
/*! exports provided: FlipGameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlipGameComponent", function() { return FlipGameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FlipGameComponent = class FlipGameComponent {
    constructor() {
        this.presetsSelect = [
            {
                css: "preset animal_0",
                src: "",
                id: 0
            },
            {
                css: "preset food_0",
                src: "",
                id: 1
            },
            {
                css: "preset monster_0",
                src: "",
                id: 2
            },
            {
                css: "fileImg",
                src: "",
                id: 3
            }
        ];
        //imgs to display
        this.loadedImgs = [];
        //imgs in the grid
        this.gameImgs = [];
        //indexs for the random generated imges
        this.usedIndex = [];
        //current game random generated images
        this.curGameImgs = [];
        //Other imgs
        this.animals = [];
        this.foods = [];
        this.monsters = [];
        this.usersImgs = [];
        //selected indexes  
        this.selectedImgs = [-1, -1];
        this.curLevel = 4;
        this.maxLevel = 7;
        this.imageWidth = 66;
        this.defaultcss = "fileSize";
        this.defaultImg = "assets/img/back.png";
        this.startText = "Start Game!";
        this.displayText = " ";
        this.inGame = false;
        this.wins = 0;
    }
    ngOnInit() {
        //Load default images from the presets
        const maxImgs = 10;
        for (let i = 0; i < maxImgs; i++) {
            this.animals.push({ css: "preset" + " " + "animal_" + i, src: "", id: i });
            this.foods.push({ css: "preset" + " " + "food_" + i, src: "", id: i });
            this.monsters.push({ css: "preset" + " " + "monster_" + i, src: "", id: i });
        }
        this.onPreset(0);
        this.createGrid();
    }
    //On Select an img set the preset or the imgs from the users
    onPreset(id) {
        switch (id) {
            case 0:
                this.loadImgs(this.animals);
                break;
            case 1:
                this.loadImgs(this.foods);
                break;
            case 2:
                this.loadImgs(this.monsters);
                break;
            case 3:
                this.loadImgs(this.usersImgs);
                break;
        }
    }
    //set the given imgs to be display
    loadImgs(imgs) {
        this.loadedImgs = imgs;
    }
    //Get the img src to display
    getDisplay(img) {
        if (img.src != null) {
            return img.src;
        }
        return "";
    }
    //Get the css class to disply
    getCss(img) {
        return img.css;
    }
    //On Selected imgs
    onChange(event) {
        this.usersImgs.length = 0;
        let totalImgs = event.target.files.length;
        if (totalImgs > 10) {
            totalImgs = 10;
        }
        for (let i = 0; i < totalImgs; i++) {
            const reader = new FileReader();
            reader.onload = () => this.addToUsers(reader.result);
            reader.readAsDataURL(event.target.files[i]);
        }
        this.onPreset(3);
    }
    //Add img to the user images
    addToUsers(data) {
        this.usersImgs.push({ css: "fileSize", src: data, id: 0 });
    }
    //Called to increase or decrease the difficulty
    increaseLevel(more) {
        if (more) {
            if (this.curLevel < this.maxLevel)
                this.curLevel++;
        }
        else {
            if (this.curLevel > 2)
                this.curLevel--;
        }
        this.createGrid();
    }
    //Create grid to display
    createGrid() {
        let totalWidth = (this.curLevel * this.imageWidth);
        document.documentElement.style.setProperty('--gridX', totalWidth.toString() + "px");
        document.documentElement.style.setProperty('--gridY', totalWidth.toString() + "px");
        //Set the data to a clean version
        const total = this.curLevel * this.curLevel;
        this.gameImgs.length = 0;
        for (let i = 0; i < total; i++) {
            this.gameImgs.push({ css: "fileSize", src: this.defaultImg, id: i });
        }
    }
    //on selected an img in the grid display the img that was randomly generated
    onSelect(img) {
        if (this.inGame == false) {
            this.showOutput("Start the game first..");
            return;
        }
        const index = img.id;
        //dont select the same img if already selected
        if (index === this.selectedImgs[0] || index === this.selectedImgs[1]) {
            return;
        }
        //its in an already compleded index
        if (this.usedIndex.includes(index)) {
            return;
        }
        //display generated imgs
        img.css = this.curGameImgs[index].css;
        img.src = this.curGameImgs[index].src;
        //set the index that was click to the arrays
        if (this.selectedImgs[0] == -1) {
            this.selectedImgs[0] = index;
        }
        else if (this.selectedImgs[1] == -1) {
            this.selectedImgs[1] = index;
        }
        if (this.selectedImgs[0] != -1 && this.selectedImgs[1] != -1) {
            setTimeout(() => {
                //Check if selected
                if (this.curGameImgs[this.selectedImgs[0]] === this.curGameImgs[this.selectedImgs[1]]) {
                    //couple was completed
                    this.wins++;
                    //add to already finished
                    this.usedIndex.push(this.gameImgs[this.selectedImgs[0]].id);
                    this.usedIndex.push(this.gameImgs[this.selectedImgs[1]].id);
                    //when all couples was found
                    if (this.wins >= (this.curGameImgs.length / 2)) {
                        this.onWin();
                    }
                }
                else {
                    //Reset to default data
                    this.gameImgs[this.selectedImgs[0]].css = this.defaultcss;
                    this.gameImgs[this.selectedImgs[0]].src = this.defaultImg;
                    //Reset to default data
                    this.gameImgs[this.selectedImgs[1]].css = this.defaultcss;
                    this.gameImgs[this.selectedImgs[1]].src = this.defaultImg;
                }
                //Reset to non selected
                this.selectedImgs[0] = -1;
                this.selectedImgs[1] = -1;
            }, 200);
        }
    }
    //When finish the game
    onWin() {
        this.showOutput("Congratulations you won!!!");
        this.startText = "New Game!";
    }
    //On Start Game 
    onStartPress() {
        if (this.inGame) {
            this.inGame = false;
            this.resetGame();
            return;
        }
        // this.displayText = "Game Started!";
        this.showOutput("");
        if (this.loadedImgs.length == 0) {
            this.showOutput("Need to select items to use");
            return;
        }
        this.startText = "Reset Game";
        this.inGame = true;
        this.showGameObjs(!this.inGame);
        this.generateRandomImgs();
        this.wins = 0;
    }
    //show all the game options again
    resetGame() {
        this.showGameObjs(!this.inGame);
        this.startText = "Start Game!";
        this.createGrid();
    }
    //Generate what images will be in the game
    generateRandomImgs() {
        let imgIndex = 0;
        let curTotal = 0;
        const total = this.gameImgs.length;
        this.curGameImgs.length = total;
        let added = 0;
        let random = 0;
        this.usedIndex.length = 0;
        while (curTotal < total) {
            added = 0;
            random = 0;
            while (added < 2) {
                random = Math.floor(Math.random() * total);
                if (this.usedIndex.includes(random) == false) {
                    this.usedIndex.push(random);
                    this.curGameImgs[random] = this.loadedImgs[imgIndex];
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
            if (imgIndex >= this.loadedImgs.length) {
                imgIndex = 0;
            }
            if (curTotal >= total) {
                break;
            }
        }
        this.usedIndex.length = 0;
    }
    //Show instructions to the user
    showOutput(text) {
        this.displayText = text;
    }
    //Show or hide objects that has to do with the game
    showGameObjs(show) {
        if (show) {
            document.documentElement.style.setProperty('--gameObjs', "block");
        }
        else {
            document.documentElement.style.setProperty('--gameObjs', "none");
        }
    }
};
FlipGameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-flip-game',
        template: __webpack_require__(/*! raw-loader!./flip-game.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/Project/flip-game/flip-game.component.html"),
        styles: [__webpack_require__(/*! ./flip-game.component.css */ "./src/app/components/Project/flip-game/flip-game.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FlipGameComponent);



/***/ }),

/***/ "./src/app/components/add-todo/add-todo.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/add-todo/add-todo.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form{\r\n    display: flex;\r\n}\r\n.form input[type='text']{\r\n    flex: 10;\r\n    padding: 5px;\r\n}\r\n.form input[type='submit']{\r\n    flex: 2;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQtdG9kby9hZGQtdG9kby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksUUFBUTtJQUNSLFlBQVk7QUFDaEI7QUFDQTtJQUNJLE9BQU87QUFDWCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLXRvZG8vYWRkLXRvZG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3Jte1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4uZm9ybSBpbnB1dFt0eXBlPSd0ZXh0J117XHJcbiAgICBmbGV4OiAxMDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG4uZm9ybSBpbnB1dFt0eXBlPSdzdWJtaXQnXXtcclxuICAgIGZsZXg6IDI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/add-todo/add-todo.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/add-todo/add-todo.component.ts ***!
  \***********************************************************/
/*! exports provided: AddTodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTodoComponent", function() { return AddTodoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AddTodoComponent = class AddTodoComponent {
    constructor() {
        this.addTodo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.tempPlaceHolder = "Add...";
        this.addText = "Submit";
    }
    ngOnInit() {
    }
    onSubmit() {
        if (this.title) {
            const todo = {
                title: this.title,
                completed: false
            };
            this.addTodo.emit(todo);
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AddTodoComponent.prototype, "addTodo", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('tempText'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], AddTodoComponent.prototype, "tempPlaceHolder", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('addText'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], AddTodoComponent.prototype, "addText", void 0);
AddTodoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-todo',
        template: __webpack_require__(/*! raw-loader!./add-todo.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/add-todo/add-todo.component.html"),
        styles: [__webpack_require__(/*! ./add-todo.component.css */ "./src/app/components/add-todo/add-todo.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AddTodoComponent);



/***/ }),

/***/ "./src/app/components/display/exp-obj-display/exp-obj-display.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/display/exp-obj-display/exp-obj-display.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".expObj {\r\n\tcolor: rgb(235, 235, 235);\r\n\tfont-size: 15px;\r\n\tpadding-top: 5px;\r\n\ttext-align: center;\r\n\tmargin: 3px 5px;\r\n\tbackground-color: #648ecc38;\r\n\tborder: 1px white solid;\r\n\tborder-radius: 15px;\t\r\n}\t\r\n.expObj:hover{\r\n\t-webkit-animation: scaleUp 0.5s;\r\n\t        animation: scaleUp 0.5s; \r\n    -webkit-transform: scale(1.2); \r\n            transform: scale(1.2);\r\n}\t\r\n.expText{\r\n\t-webkit-animation: fadeInText 4s;\r\n\t        animation: fadeInText 4s; \r\n\tmargin: 0 10px;\r\n}\t\r\n.image_1 {\r\n\twidth: 90%;\r\n\theight: 100px;\r\n\t-o-object-fit: contain;\r\n\t   object-fit: contain;\r\n\t -webkit-animation: fadeIn 2s;\r\n\t         animation: fadeIn 2s; \r\n}\t\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kaXNwbGF5L2V4cC1vYmotZGlzcGxheS9leHAtb2JqLWRpc3BsYXkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLHlCQUF5QjtDQUN6QixlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtDQUNsQixlQUFlO0NBQ2YsMkJBQTJCO0NBQzNCLHVCQUF1QjtDQUN2QixtQkFBbUI7QUFDcEI7QUFDQTtDQUNDLCtCQUF1QjtTQUF2Qix1QkFBdUI7SUFDcEIsNkJBQXFCO1lBQXJCLHFCQUFxQjtBQUN6QjtBQUNBO0NBQ0MsZ0NBQXdCO1NBQXhCLHdCQUF3QjtDQUN4QixjQUFjO0FBQ2Y7QUFDQTtDQUNDLFVBQVU7Q0FDVixhQUFhO0NBQ2Isc0JBQW1CO0lBQW5CLG1CQUFtQjtFQUNsQiw0QkFBb0I7VUFBcEIsb0JBQW9CO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kaXNwbGF5L2V4cC1vYmotZGlzcGxheS9leHAtb2JqLWRpc3BsYXkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leHBPYmoge1xyXG5cdGNvbG9yOiByZ2IoMjM1LCAyMzUsIDIzNSk7XHJcblx0Zm9udC1zaXplOiAxNXB4O1xyXG5cdHBhZGRpbmctdG9wOiA1cHg7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdG1hcmdpbjogM3B4IDVweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ4ZWNjMzg7XHJcblx0Ym9yZGVyOiAxcHggd2hpdGUgc29saWQ7XHJcblx0Ym9yZGVyLXJhZGl1czogMTVweDtcdFxyXG59XHRcclxuLmV4cE9iajpob3ZlcntcclxuXHRhbmltYXRpb246IHNjYWxlVXAgMC41czsgXHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbn1cclxuLmV4cFRleHR7XHJcblx0YW5pbWF0aW9uOiBmYWRlSW5UZXh0IDRzOyBcclxuXHRtYXJnaW46IDAgMTBweDtcclxufVxyXG4uaW1hZ2VfMSB7XHJcblx0d2lkdGg6IDkwJTtcclxuXHRoZWlnaHQ6IDEwMHB4O1xyXG5cdG9iamVjdC1maXQ6IGNvbnRhaW47XHJcblx0IGFuaW1hdGlvbjogZmFkZUluIDJzOyBcclxufVx0Il19 */"

/***/ }),

/***/ "./src/app/components/display/exp-obj-display/exp-obj-display.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/display/exp-obj-display/exp-obj-display.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ExpObjDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpObjDisplayComponent", function() { return ExpObjDisplayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_models_exp_obj_exp_obj_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/exp-obj/exp-obj.module */ "./src/app/models/exp-obj/exp-obj.module.ts");



let ExpObjDisplayComponent = class ExpObjDisplayComponent {
    constructor() {
        this.expObj = new src_app_models_exp_obj_exp_obj_module__WEBPACK_IMPORTED_MODULE_2__["ExpObjModule"]();
        this.imgPath = "assets/img/";
    }
    ngOnInit() {
        this.des = this.expObj.description;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_models_exp_obj_exp_obj_module__WEBPACK_IMPORTED_MODULE_2__["ExpObjModule"])
], ExpObjDisplayComponent.prototype, "expObj", void 0);
ExpObjDisplayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-exp-obj-display',
        template: __webpack_require__(/*! raw-loader!./exp-obj-display.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/display/exp-obj-display/exp-obj-display.component.html"),
        styles: [__webpack_require__(/*! ./exp-obj-display.component.css */ "./src/app/components/display/exp-obj-display/exp-obj-display.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ExpObjDisplayComponent);



/***/ }),

/***/ "./src/app/components/display/images-grid-display/images-grid-display.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/components/display/images-grid-display/images-grid-display.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.gridParent{\r\n\tline-height : 1;\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n}\r\n.gridObj{ \r\n\tdisplay: flex;\r\n\tflex-wrap: wrap;\r\n\talign-items:center;\r\n\tjustify-content: center;\r\n\tflex-basis: 10%;\r\n\tmargin: 10px 10px;\r\n\theight: var(--gridX);\r\n\twidth: var(--gridY);\r\n}\r\n.gridObj a {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n}\r\n.gridObj img{\r\n\tcursor: pointer;\r\n\t\r\n}\r\n   \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kaXNwbGF5L2ltYWdlcy1ncmlkLWRpc3BsYXkvaW1hZ2VzLWdyaWQtZGlzcGxheS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtDQUNDLGVBQWU7Q0FDZixTQUFTO0NBQ1QsVUFBVTtBQUNYO0FBQ0E7Q0FDQyxhQUFhO0NBQ2IsZUFBZTtDQUNmLGtCQUFrQjtDQUNsQix1QkFBdUI7Q0FDdkIsZUFBZTtDQUNmLGlCQUFpQjtDQUNqQixvQkFBb0I7Q0FDcEIsbUJBQW1CO0FBQ3BCO0FBQ0E7Q0FDQyxTQUFTO0NBQ1QsVUFBVTtBQUNYO0FBQ0E7Q0FDQyxlQUFlOztBQUVoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGlzcGxheS9pbWFnZXMtZ3JpZC1kaXNwbGF5L2ltYWdlcy1ncmlkLWRpc3BsYXkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uZ3JpZFBhcmVudHtcclxuXHRsaW5lLWhlaWdodCA6IDE7XHJcblx0bWFyZ2luOiAwO1xyXG5cdHBhZGRpbmc6IDA7XHJcbn1cclxuLmdyaWRPYmp7IFxyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC13cmFwOiB3cmFwO1xyXG5cdGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRmbGV4LWJhc2lzOiAxMCU7XHJcblx0bWFyZ2luOiAxMHB4IDEwcHg7XHJcblx0aGVpZ2h0OiB2YXIoLS1ncmlkWCk7XHJcblx0d2lkdGg6IHZhcigtLWdyaWRZKTtcclxufVxyXG4uZ3JpZE9iaiBhIHtcclxuXHRtYXJnaW46IDA7XHJcblx0cGFkZGluZzogMDtcclxufVxyXG4uZ3JpZE9iaiBpbWd7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdFxyXG59XHJcbiAgICJdfQ== */"

/***/ }),

/***/ "./src/app/components/display/images-grid-display/images-grid-display.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/display/images-grid-display/images-grid-display.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ImagesGridDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesGridDisplayComponent", function() { return ImagesGridDisplayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ImagesGridDisplayComponent = class ImagesGridDisplayComponent {
    constructor() {
        this.onSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.curImages = [];
        this.defaultSrc = "";
        this.curImagesData = [
            {
                css: "preset animal_1",
                src: "",
                id: 0
            },
            {
                css: "preset animal_3",
                src: "",
                id: 1
            }
        ];
    }
    ngOnInit() {
    }
    //shows or hides all images on the grid
    ShowCurImages(show) {
        this.curImages.forEach((img) => {
            this.ShowComponent(img, show);
        });
    }
    //Set the src of the object to default
    SetSrcToDefault(index) {
        this.curImages[index].src = this.defaultSrc;
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
    //Sets the sre to the images at the given index
    SetSrcTo(index, src) {
        this.curImages[index].src = src;
    }
    onSelect(img) {
        this.onSelected.emit(img);
    }
    getDisplay(img) {
        return img.src;
    }
    getCss(img) {
        return img.css;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], ImagesGridDisplayComponent.prototype, "onSelected", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("containerObj", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ImagesGridDisplayComponent.prototype, "container", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], ImagesGridDisplayComponent.prototype, "curImagesData", void 0);
ImagesGridDisplayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-images-grid-display',
        template: __webpack_require__(/*! raw-loader!./images-grid-display.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/display/images-grid-display/images-grid-display.component.html"),
        styles: [__webpack_require__(/*! ./images-grid-display.component.css */ "./src/app/components/display/images-grid-display/images-grid-display.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ImagesGridDisplayComponent);



/***/ }),

/***/ "./src/app/components/display/list-display/list-display.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/display/list-display/list-display.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".skills {\r\n\tbackground-color: #648ecc38;\r\n\ttext-align: left;\r\n    padding-top:5px;\t\r\n\tpadding-bottom: 5px;\t\r\n\tborder-radius: 40px;\r\n}\t\r\n.skillsObj{\r\n\t-webkit-animation: fadeInText 3s;\r\n\t        animation: fadeInText 3s; \r\n}\t\r\n.skillsObj:hover{\r\n\t-webkit-animation: scaleUp 0.5s;\r\n\t        animation: scaleUp 0.5s; \r\n    -webkit-transform: scale(1.2); \r\n            transform: scale(1.2);\r\n}\t\r\n.skillsObj h4 {\r\n    margin-bottom: 5px;\r\n    margin-top: 5px;\r\n}\t\r\n.skillsObj ul{ \r\n    margin-left: 30px;\r\n}\t\r\n.split{\r\n\theight: 7px;\r\n\twidth: 100%;\r\n\tbackground-origin: padding-box;\t\r\n}\t\r\n.skillsMain{\t\r\n\tpadding-left: 20px;\r\n\tdisplay: flex;\r\n\tflex-wrap: wrap;\r\n\talign-items: flex-start;\r\n\tjustify-content: space-around;\r\n\t-webkit-animation: fadeIn 1s;\r\n\t        animation: fadeIn 1s; \r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kaXNwbGF5L2xpc3QtZGlzcGxheS9saXN0LWRpc3BsYXkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLDJCQUEyQjtDQUMzQixnQkFBZ0I7SUFDYixlQUFlO0NBQ2xCLG1CQUFtQjtDQUNuQixtQkFBbUI7QUFDcEI7QUFDQTtDQUNDLGdDQUF3QjtTQUF4Qix3QkFBd0I7QUFDekI7QUFDQTtDQUNDLCtCQUF1QjtTQUF2Qix1QkFBdUI7SUFDcEIsNkJBQXFCO1lBQXJCLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0NBQ0MsV0FBVztDQUNYLFdBQVc7Q0FDWCw4QkFBOEI7QUFDL0I7QUFDQTtDQUNDLGtCQUFrQjtDQUNsQixhQUFhO0NBQ2IsZUFBZTtDQUNmLHVCQUF1QjtDQUN2Qiw2QkFBNkI7Q0FDN0IsNEJBQW9CO1NBQXBCLG9CQUFvQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGlzcGxheS9saXN0LWRpc3BsYXkvbGlzdC1kaXNwbGF5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2tpbGxzIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ4ZWNjMzg7XHJcblx0dGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBhZGRpbmctdG9wOjVweDtcdFxyXG5cdHBhZGRpbmctYm90dG9tOiA1cHg7XHRcclxuXHRib3JkZXItcmFkaXVzOiA0MHB4O1xyXG59XHRcclxuLnNraWxsc09iantcclxuXHRhbmltYXRpb246IGZhZGVJblRleHQgM3M7IFxyXG59XHJcbi5za2lsbHNPYmo6aG92ZXJ7XHJcblx0YW5pbWF0aW9uOiBzY2FsZVVwIDAuNXM7IFxyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG59XHJcbi5za2lsbHNPYmogaDQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcbi5za2lsbHNPYmogdWx7IFxyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbn1cclxuLnNwbGl0e1xyXG5cdGhlaWdodDogN3B4O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGJhY2tncm91bmQtb3JpZ2luOiBwYWRkaW5nLWJveDtcdFxyXG59XHJcbi5za2lsbHNNYWlue1x0XHJcblx0cGFkZGluZy1sZWZ0OiAyMHB4O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC13cmFwOiB3cmFwO1xyXG5cdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5cdGFuaW1hdGlvbjogZmFkZUluIDFzOyBcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/display/list-display/list-display.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/display/list-display/list-display.component.ts ***!
  \***************************************************************************/
/*! exports provided: ListDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListDisplayComponent", function() { return ListDisplayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_Data_resume_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/Data/resume-data.service */ "./src/app/services/Data/resume-data.service.ts");



let ListDisplayComponent = class ListDisplayComponent {
    constructor(resumeData) {
        this.resumeData = resumeData;
        this.title = "title";
    }
    ngOnInit() {
        this.skills = this.resumeData.getSkills();
    }
};
ListDisplayComponent.ctorParameters = () => [
    { type: src_app_services_Data_resume_data_service__WEBPACK_IMPORTED_MODULE_2__["ResumeDataService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ListDisplayComponent.prototype, "title", void 0);
ListDisplayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-display',
        template: __webpack_require__(/*! raw-loader!./list-display.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/display/list-display/list-display.component.html"),
        styles: [__webpack_require__(/*! ./list-display.component.css */ "./src/app/components/display/list-display/list-display.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_Data_resume_data_service__WEBPACK_IMPORTED_MODULE_2__["ResumeDataService"]])
], ListDisplayComponent);



/***/ }),

/***/ "./src/app/components/input-area/input-area.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/input-area/input-area.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5wdXQtYXJlYS9pbnB1dC1hcmVhLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/input-area/input-area.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/input-area/input-area.component.ts ***!
  \***************************************************************/
/*! exports provided: InputAreaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputAreaComponent", function() { return InputAreaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let InputAreaComponent = class InputAreaComponent {
    constructor() {
        this.onDeleteText = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.text = "add text...";
    }
    ngOnInit() {
    }
    onDelete() {
        //this would send the content of the input field only if there is a text
        if (this.text) {
            this.onDeleteText.emit(this.text);
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], InputAreaComponent.prototype, "onDeleteText", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], InputAreaComponent.prototype, "text", void 0);
InputAreaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-input-area',
        template: __webpack_require__(/*! raw-loader!./input-area.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/input-area/input-area.component.html"),
        styles: [__webpack_require__(/*! ./input-area.component.css */ "./src/app/components/input-area/input-area.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], InputAreaComponent);



/***/ }),

/***/ "./src/app/components/intro/intro.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/intro/intro.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW50cm8vaW50cm8uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/intro/intro.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/intro/intro.component.ts ***!
  \*****************************************************/
/*! exports provided: IntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroComponent", function() { return IntroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let IntroComponent = class IntroComponent {
    constructor() { }
    ngOnInit() {
    }
};
IntroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-intro',
        template: __webpack_require__(/*! raw-loader!./intro.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/intro/intro.component.html"),
        styles: [__webpack_require__(/*! ./intro.component.css */ "./src/app/components/intro/intro.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], IntroComponent);



/***/ }),

/***/ "./src/app/components/layout/header/header.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/layout/header/header.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header{\r\n    background: #333;\r\n    color: #fff;\r\n    text-align: center;\r\n    padding: 10px;\r\n}\r\n.header a{\r\n    color: #fff;\r\n    text-decoration: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksV0FBVztJQUNYLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGF5b3V0L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzMzO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbi5oZWFkZXIgYXtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/layout/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/layout/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() {
        this.title = 'Title';
        this.cssClass = "header";
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], HeaderComponent.prototype, "title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], HeaderComponent.prototype, "cssClass", void 0);
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/layout/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/layout/header/header.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HeaderComponent);



/***/ }),

/***/ "./src/app/components/nav-control/nav-control.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/nav-control/nav-control.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mainNav{\r\n    background: #333;\r\n    color: #fff;\r\n    text-align: center;\r\n    padding: 10px;\r\n}\r\n.mainNav a{\r\n    color: #fff;\r\n    margin-right: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXYtY29udHJvbC9uYXYtY29udHJvbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2LWNvbnRyb2wvbmF2LWNvbnRyb2wuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluTmF2e1xyXG4gICAgYmFja2dyb3VuZDogIzMzMztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG4ubWFpbk5hdiBhe1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/nav-control/nav-control.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/nav-control/nav-control.component.ts ***!
  \*****************************************************************/
/*! exports provided: NavControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavControlComponent", function() { return NavControlComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavControlComponent = class NavControlComponent {
    constructor() { }
    ngOnInit() {
    }
};
NavControlComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav-control',
        template: __webpack_require__(/*! raw-loader!./nav-control.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/nav-control/nav-control.component.html"),
        styles: [__webpack_require__(/*! ./nav-control.component.css */ "./src/app/components/nav-control/nav-control.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NavControlComponent);



/***/ }),

/***/ "./src/app/components/projects/projects.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/projects/projects.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".projectsInfo{\r\n    text-align: center;\r\n    font-family:  \"San Francisco\",\"Helvetica Neue\",Helvetica,Arial;\r\n     font-size: 20px;\r\n}\r\n.projects{\r\n    height: 100%;\r\n    width: 98%;\r\n    background-color: bisque;\r\n    justify-content:  space-between;\r\n    margin-left: 10px;\r\n}\r\n.projectSelector{\r\n   float: left;\r\n    width: 10%;\r\n    height: 500px;\r\n    bottom: 500px;\r\n    padding-top: 20px;\r\n    margin-top: 10px;\r\n    text-align: center;\r\n    background-color: rgba(37, 37, 37, 0.76);\r\n    border-radius: 30px;\r\n}\r\n.projectSelector button{\r\n    background-image: var(--liBg);\r\n    opacity: .8;\r\n    color: #e2e2e2;\r\n    width: 95%;\r\n    height: 35px;\r\n    background-size: 100%;\r\n    background-position: 50% 50%;\r\n    margin-top: 5px;\r\n}\r\n.projectArea{\r\n    background-color: #4e4e4e4b;\r\n    float: right;\r\n    width: 88%;\r\n    height: 700px;\r\n    left: 12%;    \r\n    margin-right: 1%;   \r\n    border-radius: 30px;\r\n    border: 2px solid rgba(240, 240, 240, 0.534);\r\n}\r\n.des{ \r\n    margin: 10px 10px;\r\n    height: 15%; \r\n    width: 98%;\r\n    text-align: center;\r\n    border-radius: 20px;\r\n    background-color: #4e4e4e4b;\r\n}\r\n.des p{\r\n    position: relative;\r\n    float: left;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n}\r\n.project{\r\n    top: 25%;\r\n    height: 75%;\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLDhEQUE4RDtLQUM3RCxlQUFlO0FBQ3BCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLHdCQUF3QjtJQUN4QiwrQkFBK0I7SUFDL0IsaUJBQWlCO0FBQ3JCO0FBQ0E7R0FDRyxXQUFXO0lBQ1YsVUFBVTtJQUNWLGFBQWE7SUFDYixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsd0NBQXdDO0lBQ3hDLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLFdBQVc7SUFDWCxjQUFjO0lBQ2QsVUFBVTtJQUNWLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsNEJBQTRCO0lBQzVCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osVUFBVTtJQUNWLGFBQWE7SUFDYixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQiw0Q0FBNEM7QUFDaEQ7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFFBQVE7SUFDUixTQUFTO0lBQ1Qsd0NBQWdDO1lBQWhDLGdDQUFnQztBQUNwQztBQUNBO0lBQ0ksUUFBUTtJQUNSLFdBQVc7SUFDWCxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvamVjdHNJbmZve1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICBcIlNhbiBGcmFuY2lzY29cIixcIkhlbHZldGljYSBOZXVlXCIsSGVsdmV0aWNhLEFyaWFsO1xyXG4gICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4ucHJvamVjdHN7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogOTglO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiAgc3BhY2UtYmV0d2VlbjtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcbi5wcm9qZWN0U2VsZWN0b3J7XHJcbiAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDEwJTtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICBib3R0b206IDUwMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzNywgMzcsIDM3LCAwLjc2KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbn1cclxuLnByb2plY3RTZWxlY3RvciBidXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS1saUJnKTtcclxuICAgIG9wYWNpdHk6IC44O1xyXG4gICAgY29sb3I6ICNlMmUyZTI7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG4ucHJvamVjdEFyZWF7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGU0ZTRlNGI7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB3aWR0aDogODglO1xyXG4gICAgaGVpZ2h0OiA3MDBweDtcclxuICAgIGxlZnQ6IDEyJTsgICAgXHJcbiAgICBtYXJnaW4tcmlnaHQ6IDElOyAgIFxyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjQwLCAyNDAsIDI0MCwgMC41MzQpO1xyXG59XHJcbi5kZXN7IFxyXG4gICAgbWFyZ2luOiAxMHB4IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDE1JTsgXHJcbiAgICB3aWR0aDogOTglO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0ZTRlNGU0YjtcclxufVxyXG4uZGVzIHB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbn1cclxuLnByb2plY3R7XHJcbiAgICB0b3A6IDI1JTtcclxuICAgIGhlaWdodDogNzUlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/projects/projects.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/projects/projects.component.ts ***!
  \***********************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_projects_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/projects-data.service */ "./src/app/services/projects-data.service.ts");
/* harmony import */ var _todos_todos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../todos/todos.component */ "./src/app/components/todos/todos.component.ts");




let ProjectsComponent = class ProjectsComponent {
    constructor(projectsData, viewContainerRef, resolver) {
        this.projectsData = projectsData;
        this.viewContainerRef = viewContainerRef;
        this.resolver = resolver;
        this.componentToLoad = _todos_todos_component__WEBPACK_IMPORTED_MODULE_3__["TodosComponent"];
    }
    ngOnInit() {
        this.projects = this.projectsData.getProjects();
        if (this.projects.length > 0) {
            this.onSelect(this.projects[0]);
        }
    }
    onSelect(project) {
        this.description = project.description;
        this.componentToLoad = project.component;
    }
};
ProjectsComponent.ctorParameters = () => [
    { type: src_app_services_projects_data_service__WEBPACK_IMPORTED_MODULE_2__["ProjectsDataService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('container', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"])
], ProjectsComponent.prototype, "entry", void 0);
ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-projects',
        template: __webpack_require__(/*! raw-loader!./projects.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/projects/projects.component.html"),
        styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/components/projects/projects.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_projects_data_service__WEBPACK_IMPORTED_MODULE_2__["ProjectsDataService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]])
], ProjectsComponent);



/***/ }),

/***/ "./src/app/components/resume-intro/resume-intro.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/resume-intro/resume-intro.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVzdW1lLWludHJvL3Jlc3VtZS1pbnRyby5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/resume-intro/resume-intro.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/resume-intro/resume-intro.component.ts ***!
  \*******************************************************************/
/*! exports provided: ResumeIntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeIntroComponent", function() { return ResumeIntroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_Data_resume_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/Data/resume-data.service */ "./src/app/services/Data/resume-data.service.ts");



let ResumeIntroComponent = class ResumeIntroComponent {
    constructor(resumeData) {
        this.resumeData = resumeData;
    }
    ngOnInit() {
        this.contactMedia = this.resumeData.getMediaData();
    }
};
ResumeIntroComponent.ctorParameters = () => [
    { type: src_app_services_Data_resume_data_service__WEBPACK_IMPORTED_MODULE_2__["ResumeDataService"] }
];
ResumeIntroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-resume-intro',
        template: __webpack_require__(/*! raw-loader!./resume-intro.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/resume-intro/resume-intro.component.html"),
        styles: [__webpack_require__(/*! ./resume-intro.component.css */ "./src/app/components/resume-intro/resume-intro.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_Data_resume_data_service__WEBPACK_IMPORTED_MODULE_2__["ResumeDataService"]])
], ResumeIntroComponent);



/***/ }),

/***/ "./src/app/components/resume/resume.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/resume/resume.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mainBg{\r\n    border-radius: 15px;\r\n\tmargin: 1px 35px;\r\n}\t\r\n.skillsMain{\t\r\n\tpadding-left: 20px;\r\n\tdisplay: flex;\r\n\tflex-wrap: wrap;\r\n\talign-items: flex-start;\r\n\tjustify-content: space-around;\r\n\t-webkit-animation: fadeIn 1s;\r\n\t        animation: fadeIn 1s; \r\n}\t\r\n.summery {\r\n\tmargin-top: 10px;\r\n\tborder-radius: 5px;\r\n\ttext-align: center;\r\n\tfont-size: 16px;\r\n\tfont-family: serif;\r\n\tmin-height: 100px;\r\n\tpadding-top: 5px;\r\n}\t\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXN1bWUvcmVzdW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7Q0FDdEIsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxrQkFBa0I7Q0FDbEIsYUFBYTtDQUNiLGVBQWU7Q0FDZix1QkFBdUI7Q0FDdkIsNkJBQTZCO0NBQzdCLDRCQUFvQjtTQUFwQixvQkFBb0I7QUFDckI7QUFDQTtDQUNDLGdCQUFnQjtDQUNoQixrQkFBa0I7Q0FDbEIsa0JBQWtCO0NBQ2xCLGVBQWU7Q0FDZixrQkFBa0I7Q0FDbEIsaUJBQWlCO0NBQ2pCLGdCQUFnQjtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVzdW1lL3Jlc3VtZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5CZ3tcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcblx0bWFyZ2luOiAxcHggMzVweDtcclxufVx0XHJcbi5za2lsbHNNYWlue1x0XHJcblx0cGFkZGluZy1sZWZ0OiAyMHB4O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC13cmFwOiB3cmFwO1xyXG5cdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5cdGFuaW1hdGlvbjogZmFkZUluIDFzOyBcclxufVxyXG4uc3VtbWVyeSB7XHJcblx0bWFyZ2luLXRvcDogMTBweDtcclxuXHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGZvbnQtc2l6ZTogMTZweDtcclxuXHRmb250LWZhbWlseTogc2VyaWY7XHJcblx0bWluLWhlaWdodDogMTAwcHg7XHJcblx0cGFkZGluZy10b3A6IDVweDtcclxufVx0Il19 */"

/***/ }),

/***/ "./src/app/components/resume/resume.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/resume/resume.component.ts ***!
  \*******************************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_Data_resume_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/Data/resume-data.service */ "./src/app/services/Data/resume-data.service.ts");



let ResumeComponent = class ResumeComponent {
    constructor(resumeData) {
        this.resumeData = resumeData;
    }
    ngOnInit() {
        this.resumeData.getExperience();
        this.expObjs = this.resumeData.allExpObjs;
        this.summeryAndEducation = this.resumeData.getSummeryAndEducationText();
    }
};
ResumeComponent.ctorParameters = () => [
    { type: src_app_services_Data_resume_data_service__WEBPACK_IMPORTED_MODULE_2__["ResumeDataService"] }
];
ResumeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-resume',
        template: __webpack_require__(/*! raw-loader!./resume.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/resume/resume.component.html"),
        styles: [__webpack_require__(/*! ./resume.component.css */ "./src/app/components/resume/resume.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_Data_resume_data_service__WEBPACK_IMPORTED_MODULE_2__["ResumeDataService"]])
], ResumeComponent);



/***/ }),

/***/ "./src/app/components/text-to-json/text-to-json.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/text-to-json/text-to-json.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGV4dC10by1qc29uL3RleHQtdG8tanNvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/text-to-json/text-to-json.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/text-to-json/text-to-json.component.ts ***!
  \*******************************************************************/
/*! exports provided: TextToJsonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextToJsonComponent", function() { return TextToJsonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _library_download_tool_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../library/download-tool.service */ "./src/app/library/download-tool.service.ts");



let TextToJsonComponent = class TextToJsonComponent {
    constructor(downloadTool) {
        this.downloadTool = downloadTool;
    }
    ngOnInit() {
        //TODO remove this and get the data from json
        this.myText = [
            "Add this text",
            "And This too!",
            "One More!",
            "And another one!"
        ];
    }
    addData(theText) {
        this.myText.push(theText);
    }
    deleteTextData(theText) {
        this.myText = this.myText.filter(t => t !== theText);
    }
    createJson(fileName) {
        if (this.myText != null && this.myText.length > 0) {
            this.downloadTool.DownloadTextToFileAsJson(this.myText, fileName);
        }
    }
};
TextToJsonComponent.ctorParameters = () => [
    { type: _library_download_tool_service__WEBPACK_IMPORTED_MODULE_2__["DownloadToolService"] }
];
TextToJsonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-text-to-json',
        template: __webpack_require__(/*! raw-loader!./text-to-json.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/text-to-json/text-to-json.component.html"),
        styles: [__webpack_require__(/*! ./text-to-json.component.css */ "./src/app/components/text-to-json/text-to-json.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_library_download_tool_service__WEBPACK_IMPORTED_MODULE_2__["DownloadToolService"]])
], TextToJsonComponent);



/***/ }),

/***/ "./src/app/components/todos/todo-item/todo-item.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/todos/todo-item/todo-item.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".del{\r\n    background: #ff0000;\r\n    color: #fff;\r\n    border: none;\r\n    padding: 5px 9px;\r\n    border-radius: 50%;\r\n    cursor: pointer;\r\n    float: right;\r\n}\r\n.todo{\r\n    background: #5c5c5c;\r\n    padding: 10px;\r\n    border-bottom: 1px #ccc dotted;\r\n}\r\n.isComplete{\r\n    text-decoration: line-through;\r\n}\r\n.theTittle{\r\n    display: inline;\r\n    text-decoration: none;\r\n}\r\n.is-Notcomplete{\r\n    text-decoration: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b2Rvcy90b2RvLWl0ZW0vdG9kby1pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSxlQUFlO0lBQ2YscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RvZG9zL3RvZG8taXRlbS90b2RvLWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZWx7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmYwMDAwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiA1cHggOXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbi50b2Rve1xyXG4gICAgYmFja2dyb3VuZDogIzVjNWM1YztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggI2NjYyBkb3R0ZWQ7XHJcbn1cclxuLmlzQ29tcGxldGV7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxufVxyXG4udGhlVGl0dGxle1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi5pcy1Ob3Rjb21wbGV0ZXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/todos/todo-item/todo-item.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/todos/todo-item/todo-item.component.ts ***!
  \*******************************************************************/
/*! exports provided: TodoItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoItemComponent", function() { return TodoItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_models_Todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/Todo */ "./src/app/models/Todo.ts");



let TodoItemComponent = class TodoItemComponent {
    constructor() {
        this.deleteTodo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    //Set dunamic Classes
    setClasses() {
        let classes = {
            todo: true,
            'isComplete': this.todo.completed
        };
        return classes;
    }
    onToggle(todo) {
        todo.completed = !todo.completed;
    }
    onDelete(todo) {
        this.deleteTodo.emit(todo);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_models_Todo__WEBPACK_IMPORTED_MODULE_2__["Todo"])
], TodoItemComponent.prototype, "todo", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], TodoItemComponent.prototype, "deleteTodo", void 0);
TodoItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-todo-item',
        template: __webpack_require__(/*! raw-loader!./todo-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/todos/todo-item/todo-item.component.html"),
        styles: [__webpack_require__(/*! ./todo-item.component.css */ "./src/app/components/todos/todo-item/todo-item.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TodoItemComponent);



/***/ }),

/***/ "./src/app/components/todos/todos.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/todos/todos.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdG9kb3MvdG9kb3MuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/todos/todos.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/todos/todos.component.ts ***!
  \*****************************************************/
/*! exports provided: TodosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosComponent", function() { return TodosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/todo.service */ "./src/app/services/todo.service.ts");



let TodosComponent = class TodosComponent {
    constructor(todoService) {
        this.todoService = todoService;
    }
    ngOnInit() {
        this.todos = this.todoService.getTodos();
    }
    deleteTodo(todo) {
        this.todos = this.todos.filter((t) => t !== todo);
    }
    addTodo(todo) {
        this.todos.push(todo);
    }
};
TodosComponent.ctorParameters = () => [
    { type: _services_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"] }
];
TodosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-todos',
        template: __webpack_require__(/*! raw-loader!./todos.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/todos/todos.component.html"),
        styles: [__webpack_require__(/*! ./todos.component.css */ "./src/app/components/todos/todos.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"]])
], TodosComponent);



/***/ }),

/***/ "./src/app/library/download-tool.service.ts":
/*!**************************************************!*\
  !*** ./src/app/library/download-tool.service.ts ***!
  \**************************************************/
/*! exports provided: DownloadToolService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadToolService", function() { return DownloadToolService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DownloadToolService = class DownloadToolService {
    constructor() {
        this.a = document.createElement('a');
    }
    DownloadTextToFileAsJson(theText, fileName) {
        if (theText == null) {
            console.log("No Data");
            return;
        }
        var blob = new Blob([JSON.stringify(theText, null, 2)], { type: 'application/json' });
        var url = window.URL.createObjectURL(blob);
        this.a.href = url;
        this.a.download = fileName + '.json';
        this.a.click();
        window.URL.revokeObjectURL(url);
    }
};
DownloadToolService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], DownloadToolService);



/***/ }),

/***/ "./src/app/models/Todo.ts":
/*!********************************!*\
  !*** ./src/app/models/Todo.ts ***!
  \********************************/
/*! exports provided: Todo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Todo", function() { return Todo; });
class Todo {
}


/***/ }),

/***/ "./src/app/models/exp-obj/exp-obj.module.ts":
/*!**************************************************!*\
  !*** ./src/app/models/exp-obj/exp-obj.module.ts ***!
  \**************************************************/
/*! exports provided: ExpObjModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpObjModule", function() { return ExpObjModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let ExpObjModule = class ExpObjModule {
};
ExpObjModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]
    })
], ExpObjModule);



/***/ }),

/***/ "./src/app/services/Data/resume-data.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/Data/resume-data.service.ts ***!
  \******************************************************/
/*! exports provided: ResumeDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeDataService", function() { return ResumeDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _json_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../json-loader.service */ "./src/app/services/json-loader.service.ts");



let ResumeDataService = class ResumeDataService {
    constructor(jsonLoader) {
        this.jsonLoader = jsonLoader;
        this.allExpObjs = [];
        this.allExpNames = [
            "expObj_1.json",
            "expObj_2.json",
            "expObj_3.json"
        ];
        //Skills by list of objs
        this.skills = [
            {
                title: "General:",
                list: [
                    "C#,HTML,CSS,JavaScript",
                    "Unity 3d",
                    "Steam SDK  <br> (Steam Workshop , etc)",
                    "Game Development in general",
                    "Basics knowledge in some <br> productions pipelines for game development"
                ]
            },
            {
                title: "Programing in unity:",
                list: [
                    "Game-play Features",
                    "Mechanic Systems",
                    "Modding Support",
                    "Multi Language Support",
                    "Flexible Ui build at runtime<br>(working on ui mod support)"
                ]
            },
            {
                title: "Unity Editor Tools for:",
                list: [
                    "Speed up workflow in unity",
                    "Manage data",
                    "Handle existing content",
                    "Adding new content",
                    "Multi Language editor tools",
                    "Json creation and editing",
                    "Automatization tools for level design",
                    "Random generated buildings",
                    "Modding support Tools"
                ]
            },
            {
                title: "Game Development Pipelines:",
                list: [
                    "3d modeling <br> (Blender, Maya, Zbrush)",
                    "Texturing <br> (Substance painter , Photoshop, Gimp)",
                    "Rigging and Animation<br>(Blender)"
                ]
            }
        ];
        //Data for the media images with links
        this.contactMedia = [
            {
                link: "https://www.linkedin.com/in/abraham-sanchez-374236102/",
                src: "assets/img/linkedin.png",
                altText: "LinkedIn"
            },
            {
                link: "https://connect.unity.com/u/abraham-sanchez",
                src: "assets/img/unity.jpg",
                altText: "Unity"
            },
            {
                link: "https://www.indiedb.com/games/mobsworlds",
                src: "https://media.indiedb.com/images/global/indiedb.png",
                altText: "IndieDb"
            },
            {
                link: "https://www.facebook.com/MobsWorlds/",
                src: "assets/img/facebook.png",
                altText: "Facebook"
            },
            {
                link: "https://twitter.com/WorldsDev",
                src: "assets/img/twitter.png",
                altText: "Twitter"
            },
            {
                link: "https://store.steampowered.com/app/826930/The_Capture_Worlds/",
                src: "assets/img/steam.png",
                altText: "Steam"
            },
            {
                link: "https://www.youtube.com/channel/UCCS0uX_JDG_3OBPt2jYQsfw",
                src: "assets/img/youtube.png",
                altText: "YouTube"
            }
        ];
        this.summeryAndEducation = [
            "I been learning and working on Unity3d for more than 6 years focusing in programming(c#) for pc games.I been a self-taught person more than 11 years.",
            "-",
            "Right now I'm studying on a government open education system so i can get my Bachelor's Degree , learning Unreal 4 Engine, c++, python and asp.net mvc ,while working in my video game The Capture Worlds.",
            "I also have been learning Japanese in my free time because i would love to visit Japan in the future , i realy like the culture ,its morals and all it has to offer."
        ];
    }
    //Get the Skills
    getSkills() {
        return this.skills;
    }
    //Get Experience
    getExperience() {
        if (this.allExpObjs != null && this.allExpObjs.length > 0) {
            return;
        }
        for (let i = 0; i < this.allExpNames.length; i++) {
            this.getExpObjWithName(this.allExpNames[i]);
        }
    }
    //Get the data from the json loader
    getExpObjWithName(expName) {
        this.jsonLoader.getExpObjs(expName).subscribe(data => {
            this.allExpObjs.push(data);
        });
    }
    //Get Media data from local data
    getMediaData() {
        return this.contactMedia;
    }
    //get education and summery text from local data
    getSummeryAndEducationText() {
        return this.summeryAndEducation;
    }
};
ResumeDataService.ctorParameters = () => [
    { type: _json_loader_service__WEBPACK_IMPORTED_MODULE_2__["JsonLoaderService"] }
];
ResumeDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_json_loader_service__WEBPACK_IMPORTED_MODULE_2__["JsonLoaderService"]])
], ResumeDataService);



/***/ }),

/***/ "./src/app/services/json-loader.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/json-loader.service.ts ***!
  \*************************************************/
/*! exports provided: JsonLoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonLoaderService", function() { return JsonLoaderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let JsonLoaderService = class JsonLoaderService {
    constructor(http) {
        this.http = http;
        this.jsonsPath = "assets/json/";
    }
    getExpObjs(jsonName) {
        var thePath = this.jsonsPath + jsonName;
        return this.http.get(thePath);
    }
};
JsonLoaderService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
JsonLoaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], JsonLoaderService);



/***/ }),

/***/ "./src/app/services/projects-data.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/projects-data.service.ts ***!
  \***************************************************/
/*! exports provided: ProjectsDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsDataService", function() { return ProjectsDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _components_todos_todos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/todos/todos.component */ "./src/app/components/todos/todos.component.ts");
/* harmony import */ var _components_text_to_json_text_to_json_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/text-to-json/text-to-json.component */ "./src/app/components/text-to-json/text-to-json.component.ts");
/* harmony import */ var _components_Input_experience_obj_experience_obj_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Input/experience-obj/experience-obj.component */ "./src/app/components/Input/experience-obj/experience-obj.component.ts");
/* harmony import */ var _components_Project_flip_game_flip_game_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Project/flip-game/flip-game.component */ "./src/app/components/Project/flip-game/flip-game.component.ts");






let ProjectsDataService = class ProjectsDataService {
    constructor() {
        this.projects = [
            {
                title: "Flip Game",
                description: "<h2>Find them All!</h2>(Work in progress)<br> This will be a Concentration (card game) where you have to find pairs and when you find them all you win. <br>You will be able to upload your own images and use them in the game, or select from a list of preset group of images.This is to practice and learn JavaScript,HTML and CSS. <br>Select Images to use ,select the level of difficulty , the Start Game Button will be display when you have at least two (2) images to use. ",
                component: _components_Project_flip_game_flip_game_component__WEBPACK_IMPORTED_MODULE_5__["FlipGameComponent"]
            },
            {
                title: "Todos",
                description: "Simple Todo List where you can add, remove and check if it is completed.",
                component: _components_todos_todos_component__WEBPACK_IMPORTED_MODULE_2__["TodosComponent"]
            },
            {
                title: "Text To Json",
                description: "You can add text to the list and delete them if needed <br> Then you can save them as a json is downloaded with the given name<br> You have to give it a name else you won't be able to download the file",
                component: _components_text_to_json_text_to_json_component__WEBPACK_IMPORTED_MODULE_3__["TextToJsonComponent"]
            },
            {
                title: "Multi Line To Json",
                description: "You can save to json and download it with the given name all the text in multiple lines <br> I used this to create the Experience objects that are in the resume page <br> and loaded the json files that i created with this tool to build the Ui and fill the data.",
                component: _components_Input_experience_obj_experience_obj_component__WEBPACK_IMPORTED_MODULE_4__["ExperienceObjComponent"]
            }
        ];
    }
    getProjects() {
        return this.projects;
    }
};
ProjectsDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ProjectsDataService);



/***/ }),

/***/ "./src/app/services/todo.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/todo.service.ts ***!
  \******************************************/
/*! exports provided: TodoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoService", function() { return TodoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TodoService = class TodoService {
    constructor() { }
    //Get TODO LIst
    getTodos() {
        //Example of a combined text
        const url = `${"dir"}/${"path"}`;
        //TODO get from a local Json file or from json in google drive
        return [
            {
                id: 0,
                title: "Finish TODOs tutorial",
                completed: false
            },
            {
                id: 1,
                title: "Migrate Resume to Angular",
                completed: false
            },
            {
                id: 2,
                title: "Migrate Projects to Angular",
                completed: false
            },
            {
                id: 3,
                title: "Create the text to json component",
                completed: false
            }
        ];
    }
};
TodoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TodoService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\HTML\Angular\Resume\Resume\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map