(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/gurdeepsingh/Desktop/ngtest/think-design/src/main.ts */"zUnb");


/***/ }),

/***/ "2MiI":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function HeaderComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.nameOfHeader);
} }
class HeaderComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], inputs: { nameOfHeader: "nameOfHeader" }, decls: 3, vars: 1, consts: [[1, "h-d"], [4, "ngIf"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HeaderComponent_span_2_Template, 2, 1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nameOfHeader);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".h-d[_ngcontent-%COMP%] {\n\tbackground-color: #07639d;\n\tcolor: whitesmoke;\n}\nh1[_ngcontent-%COMP%] {\n\tpadding: 20px 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MseUJBQXlCO0NBQ3pCLGlCQUFpQjtBQUNsQjtBQUNBO0NBQ0Msa0JBQWtCO0FBQ25CIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmgtZCB7XG5cdGJhY2tncm91bmQtY29sb3I6ICMwNzYzOWQ7XG5cdGNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuaDEge1xuXHRwYWRkaW5nOiAyMHB4IDIwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return []; }, { nameOfHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "3E3F":
/*!******************************************!*\
  !*** ./src/app/services/load.service.ts ***!
  \******************************************/
/*! exports provided: LoadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadService", function() { return LoadService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class LoadService {
    constructor(http) {
        this.http = http;
    }
    loadPageConfiguration() {
        const url = '../../assets/mock/load.json';
        return this.http.get(url);
    }
}
LoadService.ɵfac = function LoadService_Factory(t) { return new (t || LoadService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
LoadService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoadService, factory: LoadService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "AytR":
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

/***/ "Izvb":
/*!**********************************!*\
  !*** ./src/app/model/content.ts ***!
  \**********************************/
/*! exports provided: Content */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return Content; });
class Content {
}


/***/ }),

/***/ "L4tg":
/*!***************************************************!*\
  !*** ./src/app/components/wide/wide.component.ts ***!
  \***************************************************/
/*! exports provided: WideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WideComponent", function() { return WideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function WideComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r1.data.ctaUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.data.ctaLabel);
} }
function WideComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WideComponent_div_0_div_3_Template, 3, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.data.content, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.data && ctx_r0.data.ctaLabel && ctx_r0.data.ctaUrl);
} }
class WideComponent {
    constructor() { }
    ngOnInit() {
    }
}
WideComponent.ɵfac = function WideComponent_Factory(t) { return new (t || WideComponent)(); };
WideComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WideComponent, selectors: [["app-wide"]], inputs: { data: "data" }, decls: 1, vars: 1, consts: [["class", "sm-d card-d image-d background-i", 4, "ngIf"], [1, "sm-d", "card-d", "image-d", "background-i"], [1, "p-i-d"], [4, "ngIf"], [1, "btn", "btn-primary", "button", 3, "href"]], template: function WideComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WideComponent_div_0_Template, 4, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data && ctx.data.content);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".card-d[_ngcontent-%COMP%] {\n\tbackground-color: #f2f2f2;\n}\n\n.sm-d[_ngcontent-%COMP%] {\n\tborder: 1px solid rgb(231, 226, 226);\n\ttransition: box-shadow .3s;\n\tborder-radius: 5px;\n\tpadding: 20px 20px 20px 20px;\n\twidth: 100%;\n\t\n\tcolor: black;\n}\n\n.sm-d[_ngcontent-%COMP%]:hover {\n\tbox-shadow: 0 0 11px rgba(33,33,33,.2); \n}\n\n.background-i[_ngcontent-%COMP%] {\n\tbackground: #c2bbb1 url('abstract.jpg') center center no-repeat;\n\tbackground-size: cover;\n\t\n\tpadding: 100px 0;\n}\n\n.image-d[_ngcontent-%COMP%] {\n\tposition: relative;\n}\n\n.p-i-d[_ngcontent-%COMP%] {\n\t\tposition: absolute;\n\t\tbottom: 7%;\n\t\tleft: 10%;\n\t\tcolor: #FFF;\n\t\theight: 70%;\n\t\twidth: 35%;\n\t\t\n\t\tbackground-color: #f2f2f2;\n\t\tcolor:#07639d;;\n\t\tpadding: 15px 20px;\n}\n\n@media screen and (max-width: 500px) {\n\t.p-i-d[_ngcontent-%COMP%] {\n\t\tdisplay: none;\n\t}\n}\n\n@media screen and (max-width: 1200) {\n\t.p-i-d[_ngcontent-%COMP%] {\n\t\theight: 80%;\n\t\twidth: 50%;\n\t}\n}\n\n@media screen and (max-width: 768px) {\n\t.p-i-d[_ngcontent-%COMP%] {\n\t\theight: 80%;\n\t\twidth: 50%;\n\t}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpZGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLHlCQUF5QjtBQUMxQjs7QUFFQTtDQUNDLG9DQUFvQztDQUNwQywwQkFBMEI7Q0FDMUIsa0JBQWtCO0NBQ2xCLDRCQUE0QjtDQUM1QixXQUFXOztDQUVYLFlBQVk7QUFDYjs7QUFDQTtDQUNDLHNDQUFzQztBQUN2Qzs7QUFFQTtDQUNDLCtEQUFzRjtDQUN0RixzQkFBc0I7Q0FDdEIsd0JBQXdCO0NBQ3hCLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGtCQUFrQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsU0FBUztFQUNULFdBQVc7RUFDWCxXQUFXO0VBQ1gsVUFBVTtFQUNWLDBDQUEwQztFQUMxQyx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtDQUNDO0VBQ0MsYUFBYTtDQUNkO0FBQ0Q7O0FBRUE7Q0FDQztFQUNDLFdBQVc7RUFDWCxVQUFVO0NBQ1g7QUFDRDs7QUFFQTtDQUNDO0VBQ0MsV0FBVztFQUNYLFVBQVU7Q0FDWDtBQUNEIiwiZmlsZSI6IndpZGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWQge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xufVxuXG4uc20tZCB7XG5cdGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMzEsIDIyNiwgMjI2KTtcblx0dHJhbnNpdGlvbjogYm94LXNoYWRvdyAuM3M7XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcblx0cGFkZGluZzogMjBweCAyMHB4IDIwcHggMjBweDtcblx0d2lkdGg6IDEwMCU7XG5cdFxuXHRjb2xvcjogYmxhY2s7XG59XG4uc20tZDpob3ZlciB7XG5cdGJveC1zaGFkb3c6IDAgMCAxMXB4IHJnYmEoMzMsMzMsMzMsLjIpOyBcbn1cblxuLmJhY2tncm91bmQtaSB7XG5cdGJhY2tncm91bmQ6ICNjMmJiYjEgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9hYnN0cmFjdC5qcGdcIikgY2VudGVyIGNlbnRlciBuby1yZXBlYXQ7XG5cdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cblx0cGFkZGluZzogMTAwcHggMDtcbn1cblxuLmltYWdlLWQge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5wLWktZCB7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdGJvdHRvbTogNyU7XG5cdFx0bGVmdDogMTAlO1xuXHRcdGNvbG9yOiAjRkZGO1xuXHRcdGhlaWdodDogNzAlO1xuXHRcdHdpZHRoOiAzNSU7XG5cdFx0LyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuNjUpOyAqL1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG5cdFx0Y29sb3I6IzA3NjM5ZDs7XG5cdFx0cGFkZGluZzogMTVweCAyMHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuXHQucC1pLWQge1xuXHRcdGRpc3BsYXk6IG5vbmU7XG5cdH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMCkge1xuXHQucC1pLWQge1xuXHRcdGhlaWdodDogODAlO1xuXHRcdHdpZHRoOiA1MCU7XG5cdH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcblx0LnAtaS1kIHtcblx0XHRoZWlnaHQ6IDgwJTtcblx0XHR3aWR0aDogNTAlO1xuXHR9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WideComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-wide',
                templateUrl: './wide.component.html',
                styleUrls: ['./wide.component.css']
            }]
    }], function () { return []; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 2, vars: 0, consts: [[1, "f-d"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, blanditiis, reiciendis itaque ullam quos sint et nesciunt eum nostrum dolorem facere asperiores totam cupiditate dicta voluptatibus amet doloribus? Blanditiis, dolorem. \u00A9 2020.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".f-d[_ngcontent-%COMP%] {\n\tbackground-color: #07639d;\n\tcolor: whitesmoke;\n\tpadding: 20px 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MseUJBQXlCO0NBQ3pCLGlCQUFpQjtDQUNqQixrQkFBa0I7QUFDbkIiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZi1kIHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzA3NjM5ZDtcblx0Y29sb3I6IHdoaXRlc21va2U7XG5cdHBhZGRpbmc6IDIwcHggMjBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Qdfz":
/*!*************************************************************!*\
  !*** ./src/app/components/xtrasmall/xtrasmall.component.ts ***!
  \*************************************************************/
/*! exports provided: XtrasmallComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XtrasmallComponent", function() { return XtrasmallComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function XtrasmallComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.content.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r0.content.ctaUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.content.ctaLabel);
} }
class XtrasmallComponent {
    constructor() { }
    ngOnInit() {
        this.content = this.data;
    }
}
XtrasmallComponent.ɵfac = function XtrasmallComponent_Factory(t) { return new (t || XtrasmallComponent)(); };
XtrasmallComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: XtrasmallComponent, selectors: [["app-xtrasmall"]], inputs: { data: "data" }, decls: 1, vars: 1, consts: [[4, "ngIf"], ["alt", "Funds finances", 1, "img", 3, "src"], [2, "text-align", "center"], [3, "href"]], template: function XtrasmallComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, XtrasmallComponent_div_0_Template, 5, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.content && ctx.content.ctaUrl && ctx.content.ctaLabel && ctx.content.imageUrl);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["img[_ngcontent-%COMP%] {\n  display: block;\n  margin-left: auto;\n\tmargin-right: auto;\n\twidth: 70%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInh0cmFzbWFsbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtDQUNsQixrQkFBa0I7Q0FDbEIsVUFBVTtBQUNYIiwiZmlsZSI6Inh0cmFzbWFsbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuXHRtYXJnaW4tcmlnaHQ6IGF1dG87XG5cdHdpZHRoOiA3MCU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](XtrasmallComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-xtrasmall',
                templateUrl: './xtrasmall.component.html',
                styleUrls: ['./xtrasmall.component.css']
            }]
    }], function () { return []; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _model_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/content */ "Izvb");
/* harmony import */ var _services_tdfacade_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/tdfacade.service */ "aQ2j");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _components_wide_wide_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/wide/wide.component */ "L4tg");
/* harmony import */ var _components_small_small_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/small/small.component */ "Z7v8");
/* harmony import */ var _components_xtrasmall_xtrasmall_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/xtrasmall/xtrasmall.component */ "Qdfz");










function AppComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-wide", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r0.firstWide[0]);
} }
function AppComponent_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-small", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const section_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", section_r5);
} }
function AppComponent_div_3_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.thirdSplit[0].title);
} }
function AppComponent_div_3_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-xtrasmall", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const section_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", section_r7);
} }
function AppComponent_div_3_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_3_div_5_div_1_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.thirdSplit);
} }
function AppComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_3_div_1_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_div_3_div_4_Template, 3, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_div_3_div_5_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.secondSplit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.thirdSplit && ctx_r1.thirdSplit.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.thirdSplit && ctx_r1.thirdSplit.length === 4);
} }
class AppComponent {
    /**
     *
     * @param tdfacadeService
     */
    constructor(tdfacadeService) {
        this.tdfacadeService = tdfacadeService;
        this.content = new _model_content__WEBPACK_IMPORTED_MODULE_1__["Content"]();
    }
    ngOnInit() {
        const observer = {
            next: (response) => {
                this.headerName = response.nav.home.header.title;
                this.firstWide = this.getFirst(response);
                this.secondSplit = this.getSecond(response);
                this.thirdSplit = this.getThird(response);
                console.log('this.secondSplit', this.secondSplit);
            },
            error: (error) => {
            },
            complete: () => {
            }
        };
        this.tdfacadeService.loadPageConfiguration().subscribe(observer);
        this.content.title = 'Lorem ipsum';
        this.content.content = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus explicabo ab exercitationem fuga deleniti, tempore dolore inventore deserunt dolores voluptatibus eligendi quis totam mollitia blanditiis. Vel at distinctio accusantium tenetur.';
        this.content.c2a = 'https://www.google.com';
        this.content.c2aValue = 'Go Google';
        this.content.imageUrl = '../assets/images/accounting.jpg';
    }
    /**
     *
     * @param response
     */
    getFirst(response) {
        let card = [];
        if (response && response.nav && response.nav.home &&
            response.nav.home.sections && response.nav.home.sections.first &&
            response.nav.home.sections.first.length > 0) {
            card = response.nav.home.sections.first;
        }
        return card;
    }
    getSecond(response) {
        let cards = [];
        if (response && response.nav && response.nav.home &&
            response.nav.home.sections && response.nav.home.sections.second &&
            response.nav.home.sections.second.length > 0) {
            cards = response.nav.home.sections.second;
        }
        return cards;
    }
    getThird(response) {
        let cards = [];
        if (response && response.nav && response.nav.home &&
            response.nav.home.sections && response.nav.home.sections.third &&
            response.nav.home.sections.third.length > 0) {
            cards = response.nav.home.sections.third;
        }
        return cards;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_tdfacade_service__WEBPACK_IMPORTED_MODULE_2__["TdfacadeService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 3, consts: [[3, "nameOfHeader"], [1, "row", 2, "width", "101.5%"], ["class", "col-xs-12 col-md-12 pd-b-20", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "col-xs-12", "col-md-12", "pd-b-20"], [3, "data"], [1, "row"], ["class", "col-md-6 col-xs-12 pd-b-20", 4, "ngFor", "ngForOf"], [1, "row", "row-d"], [1, "row", "d-100"], ["class", "col-xs-12 xs-l d-100", 4, "ngIf"], [1, "col-md-6", "col-xs-12", "pd-b-20"], [1, "col-xs-12", "xs-l", "d-100"], [1, "title-d"], ["class", "col-md-3 col-xs-12", 4, "ngFor", "ngForOf"], [1, "col-md-3", "col-xs-12"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_div_3_Template, 6, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nameOfHeader", ctx.headerName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.firstWide && ctx.firstWide.length === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.secondSplit && ctx.secondSplit.length === 2);
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _components_wide_wide_component__WEBPACK_IMPORTED_MODULE_6__["WideComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _components_small_small_component__WEBPACK_IMPORTED_MODULE_7__["SmallComponent"], _components_xtrasmall_xtrasmall_component__WEBPACK_IMPORTED_MODULE_8__["XtrasmallComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _services_tdfacade_service__WEBPACK_IMPORTED_MODULE_2__["TdfacadeService"] }]; }, null); })();


/***/ }),

/***/ "Z7v8":
/*!*****************************************************!*\
  !*** ./src/app/components/small/small.component.ts ***!
  \*****************************************************/
/*! exports provided: SmallComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmallComponent", function() { return SmallComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function SmallComponent_div_0_div_5_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.content.content);
} }
function SmallComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SmallComponent_div_0_div_5_div_3_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.content.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.content && ctx_r1.content.content);
} }
function SmallComponent_div_0_div_6_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r4.content.ctaUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.content.ctaLabel);
} }
function SmallComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SmallComponent_div_0_div_6_a_1_Template, 2, 2, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.content && ctx_r2.content.ctaLabel);
} }
function SmallComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SmallComponent_div_0_div_5_Template, 4, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SmallComponent_div_0_div_6_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.content.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.content && ctx_r0.content.imageUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.content && ctx_r0.content.ctaUrl && ctx_r0.content.ctaLabel);
} }
class SmallComponent {
    constructor() {
    }
    ngOnInit() {
        this.content = this.data;
    }
}
SmallComponent.ɵfac = function SmallComponent_Factory(t) { return new (t || SmallComponent)(); };
SmallComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SmallComponent, selectors: [["app-small"]], inputs: { data: "data" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "sm-d", "card-d"], [1, "title-d"], ["class", "row", 4, "ngIf"], ["class", "d-100", 4, "ngIf"], [1, "row"], [1, "col-sm-6"], ["alt", "On Track", 1, "img-d", 3, "src"], ["class", "col-sm-6 content-d", 4, "ngIf"], [1, "col-sm-6", "content-d"], [1, "d-100"], ["class", "btn btn-primary mobile-d button", 3, "href", 4, "ngIf"], [1, "btn", "btn-primary", "mobile-d", "button", 3, "href"]], template: function SmallComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SmallComponent_div_0_Template, 7, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.content);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".title-d[_ngcontent-%COMP%] {\n\tcolor: #07639d;\n}\n.sm-d[_ngcontent-%COMP%] {\n\tborder: 1px solid rgb(231, 226, 226);\n\ttransition: box-shadow .3s;\n\tborder-radius: 5px;\n\tpadding: 20px 20px 20px 20px;\n\twidth: 100%;\n\t\n\tcolor: black;\n}\n.sm-d[_ngcontent-%COMP%]:hover {\n\tbox-shadow: 0 0 11px rgba(33,33,33,.2); \n}\n.card-d[_ngcontent-%COMP%] {\n\tbackground-color: #f2f2f2;\n}\n.img-d[_ngcontent-%COMP%] {\n\tborder-radius: 30px;\n\tbackground-size: cover;\n\ttext-align: center;\n\tpadding: 10px 0;\n\twidth: 100%;\n\theight: auto;\n}\n.content-d[_ngcontent-%COMP%] {\n\t\n\t\n\theight: auto;\n\tpadding: 10px 10px 10px 10px;\n}\n.mobile-d[_ngcontent-%COMP%] {\n\tpadding: 2px 2px 2px 2px;\n}\n@media screen and (max-width: 767px) {\n\t.sm-d[_ngcontent-%COMP%] {\n\t\tpadding: 20px 10px 20px 10px;\n\t}\n\t.content-d[_ngcontent-%COMP%] {\n\t\tpadding: 10px 10px 10px 10px;\n\t}\n}\n@media screen and (max-width: 500px) {\n\t.sm-d[_ngcontent-%COMP%] {\n\t\tpadding: 20px 10px 20px 10px;\n\t}\n\t.mobile-d[_ngcontent-%COMP%] {\n\t\twidth: 100%;\n\t}\n\t.content-d[_ngcontent-%COMP%] {\n\t\tpadding: 10px 10px 10px 10px;\n\t}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNtYWxsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLG9DQUFvQztDQUNwQywwQkFBMEI7Q0FDMUIsa0JBQWtCO0NBQ2xCLDRCQUE0QjtDQUM1QixXQUFXOztDQUVYLFlBQVk7QUFDYjtBQUNBO0NBQ0Msc0NBQXNDO0FBQ3ZDO0FBRUE7Q0FDQyx5QkFBeUI7QUFDMUI7QUFFQTtDQUNDLG1CQUFtQjtDQUNuQixzQkFBc0I7Q0FDdEIsa0JBQWtCO0NBQ2xCLGVBQWU7Q0FDZixXQUFXO0NBQ1gsWUFBWTtBQUNiO0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIsaUJBQWlCO0NBQ2pCLFlBQVk7Q0FDWiw0QkFBNEI7QUFDN0I7QUFFQTtDQUNDLHdCQUF3QjtBQUN6QjtBQUVBO0NBQ0M7RUFDQyw0QkFBNEI7Q0FDN0I7Q0FDQTtFQUNDLDRCQUE0QjtDQUM3QjtBQUNEO0FBRUE7Q0FDQztFQUNDLDRCQUE0QjtDQUM3QjtDQUNBO0VBQ0MsV0FBVztDQUNaO0NBQ0E7RUFDQyw0QkFBNEI7Q0FDN0I7QUFDRCIsImZpbGUiOiJzbWFsbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlLWQge1xuXHRjb2xvcjogIzA3NjM5ZDtcbn1cbi5zbS1kIHtcblx0Ym9yZGVyOiAxcHggc29saWQgcmdiKDIzMSwgMjI2LCAyMjYpO1xuXHR0cmFuc2l0aW9uOiBib3gtc2hhZG93IC4zcztcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xuXHRwYWRkaW5nOiAyMHB4IDIwcHggMjBweCAyMHB4O1xuXHR3aWR0aDogMTAwJTtcblx0XG5cdGNvbG9yOiBibGFjaztcbn1cbi5zbS1kOmhvdmVyIHtcblx0Ym94LXNoYWRvdzogMCAwIDExcHggcmdiYSgzMywzMywzMywuMik7IFxufVxuXG4uY2FyZC1kIHtcblx0YmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbn1cblxuLmltZy1kIHtcblx0Ym9yZGVyLXJhZGl1czogMzBweDtcblx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRwYWRkaW5nOiAxMHB4IDA7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IGF1dG87XG59XG5cbi5jb250ZW50LWQge1xuXHQvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xuXHQvKiB3aWR0aDogNjAlOyAgKi9cblx0aGVpZ2h0OiBhdXRvO1xuXHRwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxMHB4O1xufVxuXG4ubW9iaWxlLWQge1xuXHRwYWRkaW5nOiAycHggMnB4IDJweCAycHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG5cdC5zbS1kIHtcblx0XHRwYWRkaW5nOiAyMHB4IDEwcHggMjBweCAxMHB4O1xuXHR9XG5cdC5jb250ZW50LWQge1xuXHRcdHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDEwcHg7XG5cdH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcblx0LnNtLWQge1xuXHRcdHBhZGRpbmc6IDIwcHggMTBweCAyMHB4IDEwcHg7XG5cdH1cblx0Lm1vYmlsZS1kIHtcblx0XHR3aWR0aDogMTAwJTtcblx0fVxuXHQuY29udGVudC1kIHtcblx0XHRwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxMHB4O1xuXHR9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SmallComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-small',
                templateUrl: './small.component.html',
                styleUrls: ['./small.component.css']
            }]
    }], function () { return []; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _interceptor_token_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./interceptor/token.interceptor */ "uDJi");
/* harmony import */ var _components_small_small_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/small/small.component */ "Z7v8");
/* harmony import */ var _components_wide_wide_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/wide/wide.component */ "L4tg");
/* harmony import */ var _components_xtrasmall_xtrasmall_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/xtrasmall/xtrasmall.component */ "Qdfz");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _services_tdfacade_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/tdfacade.service */ "aQ2j");















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
            useClass: _interceptor_token_interceptor__WEBPACK_IMPORTED_MODULE_7__["TokenInterceptor"],
            multi: true },
        _services_tdfacade_service__WEBPACK_IMPORTED_MODULE_12__["TdfacadeService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
        _components_small_small_component__WEBPACK_IMPORTED_MODULE_8__["SmallComponent"],
        _components_wide_wide_component__WEBPACK_IMPORTED_MODULE_9__["WideComponent"],
        _components_xtrasmall_xtrasmall_component__WEBPACK_IMPORTED_MODULE_10__["XtrasmallComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                    _components_small_small_component__WEBPACK_IMPORTED_MODULE_8__["SmallComponent"],
                    _components_wide_wide_component__WEBPACK_IMPORTED_MODULE_9__["WideComponent"],
                    _components_xtrasmall_xtrasmall_component__WEBPACK_IMPORTED_MODULE_10__["XtrasmallComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
                ],
                providers: [
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
                        useClass: _interceptor_token_interceptor__WEBPACK_IMPORTED_MODULE_7__["TokenInterceptor"],
                        multi: true },
                    _services_tdfacade_service__WEBPACK_IMPORTED_MODULE_12__["TdfacadeService"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "aQ2j":
/*!**********************************************!*\
  !*** ./src/app/services/tdfacade.service.ts ***!
  \**********************************************/
/*! exports provided: TdfacadeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TdfacadeService", function() { return TdfacadeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _load_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./load.service */ "3E3F");



class TdfacadeService {
    constructor(loadService) {
        this.loadService = loadService;
    }
    loadPageConfiguration() {
        return this.loadService.loadPageConfiguration();
    }
}
TdfacadeService.ɵfac = function TdfacadeService_Factory(t) { return new (t || TdfacadeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_load_service__WEBPACK_IMPORTED_MODULE_1__["LoadService"])); };
TdfacadeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TdfacadeService, factory: TdfacadeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TdfacadeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _load_service__WEBPACK_IMPORTED_MODULE_1__["LoadService"] }]; }, null); })();


/***/ }),

/***/ "uDJi":
/*!**************************************************!*\
  !*** ./src/app/interceptor/token.interceptor.ts ***!
  \**************************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TokenInterceptor {
    constructor() { }
    intercept(request, next) {
        request = request.clone({
            setHeaders: {
                Authorization: 'Token '
            }
        });
        return next.handle(request);
    }
}
TokenInterceptor.ɵfac = function TokenInterceptor_Factory(t) { return new (t || TokenInterceptor)(); };
TokenInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TokenInterceptor, factory: TokenInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map