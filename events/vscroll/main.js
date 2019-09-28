(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-basic-scroll></app-basic-scroll>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _basic_scroll_basic_scroll_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./basic-scroll/basic-scroll.component */ "./src/app/basic-scroll/basic-scroll.component.ts");
/* harmony import */ var _infinite_scroll_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./infinite-scroll/infinite-scroll.component */ "./src/app/infinite-scroll/infinite-scroll.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _basic_scroll_basic_scroll_component__WEBPACK_IMPORTED_MODULE_8__["BasicScrollComponent"], _infinite_scroll_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_9__["InfiniteScrollComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp({
                    apiKey: 'AIzaSyBogpc-AUVgVdcgoiWhE4_lKCFzfcbaSaA',
                    authDomain: 'angularfirebase-267db.firebaseapp.com',
                    databaseURL: 'https://angularfirebase-267db.firebaseio.com',
                    projectId: 'angularfirebase-267db'
                }),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestoreModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/basic-scroll/basic-scroll.component.html":
/*!**********************************************************!*\
  !*** ./src/app/basic-scroll/basic-scroll.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<cdk-virtual-scroll-viewport itemSize=\"350\">\r\n\r\n\r\n  <li *cdkVirtualFor=\"let p of people;let i = index;\" class=\"animated slideInRight\">\r\n    <h2>{{ p.emoji }} {{ p.name }}</h2>\r\n    <img [src]=\"'http://lorempixel.com/400/200/sports/' + ((i % 9) + 1)\"/>\r\n    <p> {{ p.bio }} </p>\r\n  </li>\r\n\r\n\r\n</cdk-virtual-scroll-viewport>\r\n"

/***/ }),

/***/ "./src/app/basic-scroll/basic-scroll.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/basic-scroll/basic-scroll.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "cdk-virtual-scroll-viewport {\n  height: 100vh;\n  width: 100vw;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  list-style: none; }\n  cdk-virtual-scroll-viewport li {\n    height: 300px;\n    margin: 10px 0 10px 10px;\n    padding: 10px;\n    background: whitesmoke;\n    box-shadow: 2px 2px 3px rgba(136, 136, 136, 0.2); }\n  cdk-virtual-scroll-viewport::-webkit-scrollbar {\n    width: 1em; }\n  cdk-virtual-scroll-viewport img {\n    width: 85vw; }\n  cdk-virtual-scroll-viewport::-webkit-scrollbar-track {\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3); }\n  cdk-virtual-scroll-viewport::-webkit-scrollbar-thumb {\n    background-color: lightblue; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFzaWMtc2Nyb2xsL0M6XFx3b3JrXFxldmVudHMtMy9zcmNcXGFwcFxcYmFzaWMtc2Nyb2xsXFxiYXNpYy1zY3JvbGwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGNBQWM7RUFDZCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsZ0JBQWdCLEVBQUE7RUFSbEI7SUFVSSxhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYixzQkFBc0I7SUFFdEIsZ0RBQTRDLEVBQUE7RUFmaEQ7SUFrQkksVUFBVSxFQUFBO0VBbEJkO0lBc0JJLFdBQVcsRUFBQTtFQXRCZjtJQTBCSSxvREFBb0QsRUFBQTtFQTFCeEQ7SUE4QkksMkJBQTJCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9iYXNpYy1zY3JvbGwvYmFzaWMtc2Nyb2xsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiY2RrLXZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0IHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGxpIHtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICBtYXJnaW46IDEwcHggMCAxMHB4IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcclxuXHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDNweCByZ2JhKCRjb2xvcjogIzg4ODg4OCwgJGFscGhhOiAwLjIpO1xyXG4gIH1cclxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogMWVtO1xyXG4gIH1cclxuXHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiA4NXZ3O1xyXG4gIH1cclxuXHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICB9XHJcblxyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/basic-scroll/basic-scroll.component.ts":
/*!********************************************************!*\
  !*** ./src/app/basic-scroll/basic-scroll.component.ts ***!
  \********************************************************/
/*! exports provided: BasicScrollComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicScrollComponent", function() { return BasicScrollComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _emojis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../emojis */ "./src/app/emojis.ts");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! faker */ "./node_modules/faker/index.js");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BasicScrollComponent = /** @class */ (function () {
    function BasicScrollComponent() {
        this.people = Array(100)
            .fill(1)
            .map(function (_) {
            return {
                name: faker__WEBPACK_IMPORTED_MODULE_2__["name"].findName(),
                bio: faker__WEBPACK_IMPORTED_MODULE_2__["hacker"].phrase(),
                emoji: Object(_emojis__WEBPACK_IMPORTED_MODULE_1__["emojiRandom"])()
            };
        });
    }
    BasicScrollComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basic-scroll',
            template: __webpack_require__(/*! ./basic-scroll.component.html */ "./src/app/basic-scroll/basic-scroll.component.html"),
            styles: [__webpack_require__(/*! ./basic-scroll.component.scss */ "./src/app/basic-scroll/basic-scroll.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BasicScrollComponent);
    return BasicScrollComponent;
}());



/***/ }),

/***/ "./src/app/emojis.ts":
/*!***************************!*\
  !*** ./src/app/emojis.ts ***!
  \***************************/
/*! exports provided: emojis, emojisArray, emojiRandom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emojis", function() { return emojis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emojisArray", function() { return emojisArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emojiRandom", function() { return emojiRandom; });
var emojis = '😀,😃,😄,😁,😆,😅,😂,🤣,😊,🙂,🙃,😉,😌,😍,😘,😗,😙,😚,😋,😛,😝,😜,🤪,🤨,🧐,🤓,😎,🤩,😏,😒,😞,😔,😟,😕,🙁,😣,😖,😫,😩,😢,😭,😤,😠,😡,🤬,🤯,😳,😱,😨,😰,😥,😓,🤗,🤔,🤭,🤫,🤥,😶,😐,😑,😬,🙄,😯,😦,😧,😮,😲,😴,🤤,😪,😵,🤐,🤢,🤮,🤧,😷,🤒,🤕,🤑,🤠,😈,👿,👹,👺,🤡,💩,👻,💀,👽,👾,🤖,🎃,😺,😸,😹,😻,😼,😽,🙀,😿,😾,🤲,👐,🙌,👏,🤝,👍,👎,👊,✊,🤛,🤞,🤟,🤘,👌,👉,👈,👆,👇,✋,🤚,🖐,🖖,👋,🤙,💪,🖕,🙏';
var emojisArray = emojis.split(',');
var emojiRandom = function () {
    return emojisArray[Math.floor(Math.random() * emojisArray.length)];
};


/***/ }),

/***/ "./src/app/infinite-scroll/infinite-scroll.component.html":
/*!****************************************************************!*\
  !*** ./src/app/infinite-scroll/infinite-scroll.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"infinite | async as people\">\r\n\r\n\r\n  <cdk-virtual-scroll-viewport itemSize=\"100\" (scrolledIndexChange)=\"nextBatch($event, (people[people.length - 1].name))\">\r\n\r\n\r\n    <li *cdkVirtualFor=\"let p of people; let i = index; trackBy: trackByIdx\" class=\"animated lightSpeedIn\">\r\n      <h2>{{ i }}. {{ p.emoji }} {{ p.name }}</h2>\r\n      <img src=\"http://lorempixel.com/640/360\"/>\r\n      <p> {{ p.bio }} </p>\r\n    </li>\r\n\r\n\r\n\r\n    <iframe style=\"margin: 0 auto; display: flex\" *ngIf=\"theEnd\" src=\"https://giphy.com/embed/lD76yTC5zxZPG\" width=\"480\"\r\n      height=\"352\" frameBorder=\"0\" class=\"giphy-embed\" allowFullScreen></iframe>\r\n\r\n  </cdk-virtual-scroll-viewport>\r\n\r\n</ng-container>\r\n"

/***/ }),

/***/ "./src/app/infinite-scroll/infinite-scroll.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/infinite-scroll/infinite-scroll.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "cdk-virtual-scroll-viewport,\nul {\n  height: 100vh;\n  width: 100vw;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  list-style: none; }\n  cdk-virtual-scroll-viewport li,\n  ul li {\n    height: 300px;\n    margin: 10px;\n    padding: 10px;\n    background: whitesmoke;\n    box-shadow: 2px 2px 3px rgba(136, 136, 136, 0.2); }\n  cdk-virtual-scroll-viewport::-webkit-scrollbar,\n  ul::-webkit-scrollbar {\n    width: 1em; }\n  cdk-virtual-scroll-viewport::-webkit-scrollbar-track,\n  ul::-webkit-scrollbar-track {\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3); }\n  cdk-virtual-scroll-viewport::-webkit-scrollbar-thumb,\n  ul::-webkit-scrollbar-thumb {\n    background-color: #eea94f; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5maW5pdGUtc2Nyb2xsL0M6XFx3b3JrXFxldmVudHMtMy9zcmNcXGFwcFxcaW5maW5pdGUtc2Nyb2xsXFxpbmZpbml0ZS1zY3JvbGwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsYUFBYTtFQUNiLFlBQVk7RUFDWixjQUFjO0VBQ2QsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGdCQUFnQixFQUFBO0VBVGxCOztJQVdJLGFBQWE7SUFDYixZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUV0QixnREFBNEMsRUFBQTtFQWhCaEQ7O0lBbUJJLFVBQVUsRUFBQTtFQW5CZDs7SUF1Qkksb0RBQW9ELEVBQUE7RUF2QnhEOztJQTJCSSx5QkFBbUMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2luZmluaXRlLXNjcm9sbC9pbmZpbml0ZS1zY3JvbGwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJjZGstdmlydHVhbC1zY3JvbGwtdmlld3BvcnQsXHJcbnVsIHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGxpIHtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcclxuXHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDNweCByZ2JhKCRjb2xvcjogIzg4ODg4OCwgJGFscGhhOiAwLjIpO1xyXG4gIH1cclxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogMWVtO1xyXG4gIH1cclxuXHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICB9XHJcblxyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDE2OSwgNzkpO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/infinite-scroll/infinite-scroll.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/infinite-scroll/infinite-scroll.component.ts ***!
  \**************************************************************/
/*! exports provided: InfiniteScrollComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfiniteScrollComponent", function() { return InfiniteScrollComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InfiniteScrollComponent = /** @class */ (function () {
    function InfiniteScrollComponent(db) {
        var _this = this;
        this.db = db;
        this.batch = 20;
        this.theEnd = false;
        this.offset = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        var batchMap = this.offset.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["throttleTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (n) { return _this.getBatch(n); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["scan"])(function (acc, batch) {
            return __assign({}, acc, batch);
        }, {}));
        this.infinite = batchMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (v) { return Object.values(v); }));
    }
    InfiniteScrollComponent.prototype.getBatch = function (offset) {
        var _this = this;
        console.log(offset);
        return this.db
            .collection('people', function (ref) {
            return ref
                .orderBy('name')
                .startAfter(offset)
                .limit(_this.batch);
        })
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (arr) { return (arr.length ? null : (_this.theEnd = true)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (arr) {
            return arr.reduce(function (acc, cur) {
                var _a;
                var id = cur.payload.doc.id;
                var data = cur.payload.doc.data();
                return __assign({}, acc, (_a = {}, _a[id] = data, _a));
            }, {});
        }));
    };
    InfiniteScrollComponent.prototype.nextBatch = function (e, offset) {
        if (this.theEnd) {
            return;
        }
        var end = this.viewport.getRenderedRange().end;
        var total = this.viewport.getDataLength();
        console.log(end + ", '>=', " + total);
        if (end === total) {
            this.offset.next(offset);
        }
    };
    InfiniteScrollComponent.prototype.trackByIdx = function (i) {
        return i;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["CdkVirtualScrollViewport"]),
        __metadata("design:type", _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["CdkVirtualScrollViewport"])
    ], InfiniteScrollComponent.prototype, "viewport", void 0);
    InfiniteScrollComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-infinite-scroll',
            template: __webpack_require__(/*! ./infinite-scroll.component.html */ "./src/app/infinite-scroll/infinite-scroll.component.html"),
            styles: [__webpack_require__(/*! ./infinite-scroll.component.scss */ "./src/app/infinite-scroll/infinite-scroll.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], InfiniteScrollComponent);
    return InfiniteScrollComponent;
}());



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
var environment = {
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\work\events-3\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map