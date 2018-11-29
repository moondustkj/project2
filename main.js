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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<div class=\"wrapper bg\">\n\t<nav>\n   <ul>\n     <li><a routerLink = \"/\" class = \"active\" id = \"one\">Home</a></li>\n     <li><a routerLink = \"/services\" id = \"one\">Services</a></li>\n     <li id=\"logo\">L&nbsp;D</li>\n     <li><a routerLink = \"/blog\" id = \"one\">Blog</a></li>\n     <li><a routerLink = \"/contact\" id = \"one\">Contact Us</a></li>\n   </ul>\n </nav>\n <div  [@entry] = 'state'>\n<router-outlet></router-outlet>\n</div>\n</div>\n</html>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Playfair+Display\");\n* {\n  padding: 0;\n  margin: 0; }\nhtml, body {\n  width: 100%;\n  height: 100%; }\n.wrapper {\n  height: 100%;\n  color: #020202; }\nnav {\n  background-color: white; }\nnav ul li {\n    display: inline-block;\n    list-style: none;\n    padding: 10px;\n    margin-left: 90px;\n    font-family: 'Bad Script', cursive;\n    font-weight: bold;\n    font-size: 25px; }\nnav ul a {\n    text-decoration: none;\n    color: #764046; }\nnav ul a::after {\n      content: '';\n      display: block;\n      background-color: #764046;\n      height: 2px;\n      width: 0;\n      transition: all ease-out 0.2s; }\nnav ul a:hover::after {\n      width: 100%; }\n#logo {\n  font-size: 50px;\n  font-family: 'Playfair Display', serif; }\n"

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
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.state = 'open';
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        this.state = 'closed';
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('entry', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        position: 'relative',
                        left: '-1000px'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        position: 'relative',
                        left: '10px'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('open => closed', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('2s')
                    ])
                ])
            ]
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/services.component */ "./src/app/services/services.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blog/blog.component */ "./src/app/blog/blog.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var appRoutes = [
    {
        path: '',
        component: _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
        data: { title: 'Laur Drae & Company' }
    },
    {
        path: 'blog',
        component: _blog_blog_component__WEBPACK_IMPORTED_MODULE_7__["BlogComponent"],
        data: { title: 'Blog' }
    },
    {
        path: 'services',
        component: _services_services_component__WEBPACK_IMPORTED_MODULE_5__["ServicesComponent"],
        data: { title: 'Services' }
    },
    {
        path: 'contact',
        component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"],
        data: { title: 'Contact-Us' }
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _services_services_component__WEBPACK_IMPORTED_MODULE_5__["ServicesComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"],
                _blog_blog_component__WEBPACK_IMPORTED_MODULE_7__["BlogComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/blog/blog.component.html":
/*!******************************************!*\
  !*** ./src/app/blog/blog.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n\t<div class=\"item item1\">\n\t\t<img src=\"https://images.unsplash.com/photo-1519377483941-d4c7ea7ae521?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0797cf41f9f4fd2c1ad83f46e95676f2&auto=format&fit=crop&w=844&q=80\" >\n\t\t\t<h2>Process of Making</h2>\n\t\t\t\n\t</div>\n\t<div class=\"item item2\">\n\t\t<img src=\"https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6354c26fa366d6b456db1d7cf1137c89&auto=format&fit=crop&w=753&q=80\" >\n\t\t<h2>Social Media tricks everyone must know</h2>\n\t</div>\n\t\n\t<div class=\"item item3\">\n\t\t<img src=\"https://images.unsplash.com/photo-1500051638674-ff996a0ec29e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3969f232784b2b43d8bdbef93b603ffe&auto=format&fit=crop&w=792&q=80\">\n\t\t<h2>4 Steps to defining your brand's photography style</h2>\n\t\t\t</div>\n\t<div class=\"item item4\">\n\t\t<img src=\"https://images.unsplash.com/photo-1525250265090-2739a154ffc4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6760d7b9b023b130de716045e4ee4c24&auto=format&fit=crop&w=751&q=80\" >\n\t\t<h2>Companies share how they've built a community around their brand</h2>\n\t\t\t</div>\n\t\t\t<button>Read More....</button>\n</div>"

/***/ }),

/***/ "./src/app/blog/blog.component.scss":
/*!******************************************!*\
  !*** ./src/app/blog/blog.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  border: 2px solid;\n  margin: 20px 15px 0px 15px;\n  padding: 20px;\n  display: flex;\n  flex-wrap: wrap; }\n\n.item {\n  margin: 18px;\n  width: 250px;\n  color: #564E58;\n  font-family: 'Alice', serif;\n  font-style: italic;\n  cursor: pointer; }\n\n.item img {\n    width: 250px;\n    height: 230px;\n    border: 7px solid white;\n    border-radius: 3px; }\n\nbutton {\n  height: 70px;\n  width: 150px;\n  padding: 10px;\n  position: relative;\n  left: 25%;\n  top: 90px;\n  background-color: #BFB48F;\n  font-family: 'Bad Script', cursive;\n  font-size: 25px;\n  outline: none;\n  border-style: none;\n  cursor: pointer; }\n\nbutton:hover {\n    color: #575241; }\n"

/***/ }),

/***/ "./src/app/blog/blog.component.ts":
/*!****************************************!*\
  !*** ./src/app/blog/blog.component.ts ***!
  \****************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlogComponent = /** @class */ (function () {
    function BlogComponent() {
    }
    BlogComponent.prototype.ngOnInit = function () {
    };
    BlogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(/*! ./blog.component.html */ "./src/app/blog/blog.component.html"),
            styles: [__webpack_require__(/*! ./blog.component.scss */ "./src/app/blog/blog.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\" />\n</head>\n<div class=\"wrapper\">\n<h2>Get in touch with us:</h2>\n<span id=\"mail\">E-Mail ID:</span> xoxo@gmail.com<br/>\n<span id=\"adrs\">Address: </span>xyw Appartments, yy lane, x city\n<h2>Also follow us on social media:</h2>\n<div class = \"social-media\">\n\t\t<ul>\n\t\t\t<li><i class=\"fa fa-instagram \"></i></li>\n\t\t\t<li><i class=\"fa fa-facebook-f fa-l\"></i></li>\n\t\t\t<li><i class=\"fa  fa-pinterest-p\"></i></li>\n\t\t\t<li><i class=\"fa  fa-twitter\"></i></li>\n\t\t</ul>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  color: #564E58;\n  font-weight: 550; }\n\n.wrapper {\n  border: 2px solid;\n  margin: 20px 15px 0px 15px;\n  padding: 20px; }\n\nh2 {\n  color: #503B31;\n  font-family: 'Bad Script', cursive; }\n\nspan {\n  font-family: 'Alice', serif;\n  font-weight: 700;\n  color: #252627; }\n\n.social-media li {\n  display: inline;\n  margin-right: 30px;\n  list-style: none; }\n\n.social-media i {\n  color: black; }\n\n.social-media i:hover {\n    color: #7A735C;\n    cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" >\n<a href=\"https://lunapic.com\"><img src=\"https://i.imgur.com/uwYpwSH.png\" border=0></a>\n<div class=\"holder\">\n<div class=\"image\"></div>\n\t<div class=\"blur\"></div>\n\t<div class=\"content\">\n\t\t<p>We are a creative strategy and design studio specializing in the areas of branding, content creation, and social media.\n</p>\n\t</div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  display: flex; }\n\n.image {\n  background-image: url(\"https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=749f8fec9b7cf4a040ae12df54cc7443&auto=format&fit=crop&w=750&q=80\");\n  width: 400px;\n  height: 400px;\n  margin-top: 30px;\n  border-radius: 5px; }\n\n.blur {\n  opacity: 0.6;\n  margin-top: 30px;\n  width: 400px;\n  height: 400px;\n  background-color: #564E58; }\n\n.content {\n  width: 400px;\n  height: 400px;\n  border-radius: 5px;\n  margin-top: 60px; }\n\n.content p {\n    color: #F2EFE9;\n    font-family: 'Playfair Display', serif;\n    padding: 50px 30px 30px 30px;\n    font-size: 30px; }\n\n.holder .image {\n  position: absolute;\n  z-index: 1; }\n\n.holder .blur {\n  position: absolute;\n  z-index: 2; }\n\n.holder .content {\n  position: absolute;\n  z-index: 3; }\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/services/services.component.html":
/*!**************************************************!*\
  !*** ./src/app/services/services.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n\t<h1>services</h1>\n\t<p>For the succes of any brand, product, bussiness online promotion of it is necessary, websites are one of the way to do it. Here at xoxo we create the website that highlights the feature of your brand, product, bussiness.  We understand that branding is so much more than just a logo--nowadays, you need a comprehensive digital strategy to stand out.</p>\n\t<h2>Some Additional Services :</h2>\n\t<ul>\n\t\t<li id=\"one\">Branding</li>\n\t\t<li id=\"two\">Web design</li>\n\t\t<li id=\"one\">Blog Strategy</li>\n\t\t<li id=\"two\">Social Media Strategy</li>\n\t\t<li id=\"one\">Brand Photography</li>\n\t</ul>\n</div>"

/***/ }),

/***/ "./src/app/services/services.component.scss":
/*!**************************************************!*\
  !*** ./src/app/services/services.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  border: 2px solid;\n  margin: 30px 15px 0px 15px;\n  padding: 30px; }\n\nh1 {\n  text-align: center;\n  text-transform: uppercase;\n  color: #705D56;\n  font-family: 'Amiri', serif;\n  font-style: italic; }\n\np {\n  color: #252627;\n  font-family: 'Playfair Display', serif; }\n\nh2 {\n  color: #705D56;\n  font-family: 'Amiri', serif;\n  font-style: italic; }\n\nli {\n  font-size: 25px;\n  font-family: 'Playfair Display', serif; }\n\n#one {\n  color: #7E5920; }\n\n#two {\n  color: #B87D4B; }\n"

/***/ }),

/***/ "./src/app/services/services.component.ts":
/*!************************************************!*\
  !*** ./src/app/services/services.component.ts ***!
  \************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    ServicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(/*! ./services.component.html */ "./src/app/services/services.component.html"),
            styles: [__webpack_require__(/*! ./services.component.scss */ "./src/app/services/services.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ServicesComponent);
    return ServicesComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\hp\Angular Projects\env\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map