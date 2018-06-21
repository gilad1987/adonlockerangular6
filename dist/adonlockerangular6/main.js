(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./dashboard/dashboard.module": [
		"./src/app/dashboard/dashboard.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _material_custom_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./material/custom-material.module */ "./src/app/material/custom-material.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/dashboard.module */ "./src/app/dashboard/dashboard.module.ts");
/* harmony import */ var _site_site_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./site/site.module */ "./src/app/site/site.module.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_components_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/components/login/login.component */ "./src/app/dashboard/components/login/login.component.ts");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./routes */ "./src/app/routes.ts");
/* harmony import */ var _services_store_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/store/store */ "./src/app/services/store/store.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/user/user.service */ "./src/app/services/user/user.service.ts");
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
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _dashboard_components_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _auth_auth_module__WEBPACK_IMPORTED_MODULE_7__["AuthModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _material_custom_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
                _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_5__["DashboardModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                _site_site_module__WEBPACK_IMPORTED_MODULE_6__["SiteModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_11__["ROUTES"], {}),
            ],
            providers: [
                _services_store_store__WEBPACK_IMPORTED_MODULE_12__["Store"],
                _services_user_user_service__WEBPACK_IMPORTED_MODULE_14__["UserService"]
            ],
            exports: [],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        return __awaiter(this, void 0, void 0, function () {
            var isLoggedUser, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.authService.isLoggedIn()];
                    case 1:
                        isLoggedUser = _a.sent();
                        if (isLoggedUser) {
                            return [2 /*return*/, true];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        return [3 /*break*/, 3];
                    case 3:
                        this.router.navigate(['login']);
                        return [2 /*return*/, false];
                }
            });
        });
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _token_interceptor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./token-interceptor.service */ "./src/app/auth/token-interceptor.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [
                _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
                _auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _token_interceptor_service__WEBPACK_IMPORTED_MODULE_4__["TokenInterceptorService"],
                    multi: true
                }
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/store/store */ "./src/app/services/store/store.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var AuthService = /** @class */ (function () {
    function AuthService(store, http, router) {
        this.store = store;
        this.http = http;
        this.router = router;
        this.BASE_URL = _angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"] ? 'http://localhost:9091' : 'http://https://devapi.adonlockerrent.co.il';
    }
    Object.defineProperty(AuthService.prototype, "token", {
        get: function () {
            return localStorage.getItem('token');
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.isLoggedIn = function () {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        user = this.store.value.user;
                        if (!(this.token && !user)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.getUser$().toPromise()];
                    case 1:
                        user = _a.sent();
                        _a.label = 2;
                    case 2: return [4 /*yield*/, !!user];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AuthService.prototype.getUser$ = function () {
        var _this = this;
        return this.http
            .get(this.BASE_URL + "/api/users/me")
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (user) { return _this.store.set('user', user); }, function (error) {
            if (error.status === 401) {
                _this.logout();
            }
            return Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error);
        }));
    };
    AuthService.prototype.login = function (email, password) {
        return this.http
            .post(this.BASE_URL + "/auth/local", { email: email, password: password })
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err, caught) { return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err); }));
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('token');
        this.store.set('user', undefined);
        this.router.navigate(['login']);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_store_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/token-interceptor.service.ts":
/*!***************************************************!*\
  !*** ./src/app/auth/token-interceptor.service.ts ***!
  \***************************************************/
/*! exports provided: TokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TokenInterceptorService = /** @class */ (function () {
    function TokenInterceptorService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    TokenInterceptorService.prototype.intercept = function (request, next) {
        var _this = this;
        request = request.clone({
            setHeaders: {
                Authorization: "Bearer " + this.auth.token
            }
        });
        return next.handle(request)
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"] && event.body.token) {
                localStorage.setItem('token', event.body.token);
            }
            return event;
        }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
                if (err.status === 401) {
                    _this.router.navigate(['login']);
                }
            }
        }));
    };
    TokenInterceptorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], TokenInterceptorService);
    return TokenInterceptorService;
}());



/***/ }),

/***/ "./src/app/dashboard/components/inline-edit/inline-edit.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/dashboard/components/inline-edit/inline-edit.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span (click)=\"displayInlineEdit()\" *ngIf=\"!toggleDisplayInlineEdit && !loading\">{{model}}</span>\n\n<mat-spinner [diameter]=\"20\" *ngIf=\"loading\" style=\"margin: 0 auto\"></mat-spinner>\n\n<div *ngIf=\"toggleDisplayInlineEdit && (isField || isTextarea)\">\n    <span [satPopoverAnchorFor]=\"popover\"\n          (click)=\"popover.toggle()\">{{model}}</span>\n\n    <sat-popover\n            #popover\n            hasBackdrop>\n\n        <div class=\"popover-wrapper\">\n            <form [formGroup]=\"form\" (submit)=\"onSubmit()\">\n                <mat-form-field *ngIf=\"isField\">\n                    <input matInput maxLength=\"140\" formControlName=\"formModel\" [placeholder]=\"placeholder\">\n                    <mat-hint align=\"end\">{{f.formModel.value?.length || 0}}/140</mat-hint>\n                </mat-form-field>\n\n                <mat-form-field *ngIf=\"isTextarea\">\n                    <textarea matInput maxLength=\"140\" formControlName=\"formModel\" [placeholder]=\"placeholder\"\n                              [mat-autosize]=\"true\"></textarea>\n                    <mat-hint align=\"end\">{{f.formModel.value?.length || 0}}/140</mat-hint>\n                </mat-form-field>\n\n                <div class=\"actions\">\n                    <button mat-button type=\"submit\" color=\"primary\">שמור</button>\n                    <button mat-button type=\"button\" color=\"primary\" (click)=\"onCancel()\">בטל</button>\n                </div>\n            </form>\n        </div>\n    </sat-popover>\n</div>\n\n<div *ngIf=\"toggleDisplayInlineEdit && isSelect\">\n    <mat-select\n            [value]=\"selected?._id\"\n            (selectionChange)=\"selectionChange($event)\"\n            (openedChange)=\"selectOpenedChange($event)\"\n            #select>\n        <mat-option [value]=\"null\">לא נבחר בית ספר</mat-option>\n        <mat-option *ngFor=\"let school of collection$ | async\" [value]=\"school._id\">\n            {{ school.name }}\n        </mat-option>\n    </mat-select>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/dashboard/components/inline-edit/inline-edit.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/dashboard/components/inline-edit/inline-edit.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".popover-wrapper {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  display: block;\n  background: #f9f9f9;\n  border-radius: 2px;\n  padding: 21px 30px; }\n\n:host {\n  width: 100%;\n  display: block;\n  min-height: 19px; }\n\n:host span {\n  width: 100%;\n  display: block;\n  min-height: 19px;\n  cursor: pointer; }\n\n@media only screen and (max-width: 900px) {\n  :host span {\n    overflow: hidden;\n    width: auto;\n    padding-right: 20px; } }\n"

/***/ }),

/***/ "./src/app/dashboard/components/inline-edit/inline-edit.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/dashboard/components/inline-edit/inline-edit.component.ts ***!
  \***************************************************************************/
/*! exports provided: InlineEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InlineEditComponent", function() { return InlineEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ncstate_sat_popover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ncstate/sat-popover */ "./node_modules/@ncstate/sat-popover/fesm5/ncstate-sat-popover.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InlineEditComponent = /** @class */ (function () {
    function InlineEditComponent() {
        this.model = null;
        this.placeholder = '';
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.loading = false;
        this.toggleDisplayInlineEdit = false;
    }
    Object.defineProperty(InlineEditComponent.prototype, "f", {
        get: function () {
            return this.form.controls;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InlineEditComponent.prototype, "isField", {
        get: function () {
            return this.type === 'field';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InlineEditComponent.prototype, "isTextarea", {
        get: function () {
            return this.type === 'textarea';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InlineEditComponent.prototype, "isSelect", {
        get: function () {
            return this.type === 'select';
        },
        enumerable: true,
        configurable: true
    });
    InlineEditComponent.prototype.ngOnInit = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            formModel: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.model, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ]),
        });
    };
    InlineEditComponent.prototype.onSubmit = function () {
        if (this.popover) {
            this.emitUpdate(this.f.formModel.value);
        }
    };
    InlineEditComponent.prototype.onCancel = function () {
        if (this.popover) {
            this.popover.close();
        }
    };
    InlineEditComponent.prototype.selectOpenedChange = function (isOpen) {
        if (!isOpen) {
            this.toggleDisplayInlineEditable();
        }
    };
    InlineEditComponent.prototype.toggleDisplayInlineEditable = function () {
        this.toggleDisplayInlineEdit = !this.toggleDisplayInlineEdit;
    };
    InlineEditComponent.prototype.displayInlineEdit = function () {
        var _this = this;
        this.toggleDisplayInlineEditable();
        // setTimeout for run open popover after ui element render
        setTimeout(function () {
            if (_this.popover) {
                _this.popover.open();
            }
            if (_this.select) {
                _this.select.open();
            }
        }, 0);
    };
    InlineEditComponent.prototype.selectionChange = function (selected) {
        this.emitUpdate(selected.value);
    };
    InlineEditComponent.prototype.emitUpdate = function (value) {
        if (this.model !== value) {
            this.loading = true;
            this.update.emit(value || null);
        }
        if (this.popover) {
            this.popover.close();
        }
        this.toggleDisplayInlineEditable();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], InlineEditComponent.prototype, "model", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], InlineEditComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], InlineEditComponent.prototype, "placeholder", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('collection'),
        __metadata("design:type", rxjs_index__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], InlineEditComponent.prototype, "collection$", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], InlineEditComponent.prototype, "selected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], InlineEditComponent.prototype, "update", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('popover'),
        __metadata("design:type", _ncstate_sat_popover__WEBPACK_IMPORTED_MODULE_1__["SatPopover"])
    ], InlineEditComponent.prototype, "popover", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('select'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelect"])
    ], InlineEditComponent.prototype, "select", void 0);
    InlineEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-inline-edit',
            template: __webpack_require__(/*! ./inline-edit.component.html */ "./src/app/dashboard/components/inline-edit/inline-edit.component.html"),
            styles: [__webpack_require__(/*! ./inline-edit.component.scss */ "./src/app/dashboard/components/inline-edit/inline-edit.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InlineEditComponent);
    return InlineEditComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/components/login/login.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/dashboard/components/login/login.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body\"></div>\n<div class=\"grad\"></div>\n<div class=\"header\">\n    <div>Adon<span>locker</span></div>\n</div>\n<br>\n<div class=\"login\">\n    <form novalidate [formGroup]=\"form\" (submit)=\"submit()\">\n        <mat-form-field>\n            <input matInput placeholder=\"User name\" formControlName=\"username\">\n            <mat-error *ngIf=\"form.controls.username.invalid && form.controls.username.dirty\">Invalid event username\n            </mat-error>\n            <mat-error *ngIf=\"!form.controls.username.dirty\">Username is required</mat-error>\n        </mat-form-field>\n        <br>\n        <mat-form-field>\n            <input matInput placeholder=\"Password\" formControlName=\"password\">\n            <mat-error *ngIf=\"form.controls.password.invalid && form.controls.password.dirty\">Invalid password\n            </mat-error>\n            <mat-error *ngIf=\"!form.controls.password.dirty\">Password is required</mat-error>\n        </mat-form-field>\n\n        <br>\n\n        <div *ngIf=\"invalidCredentials\">\n            Username or Password is invalid.\n        </div>\n\n        <button  mat-raised-button type=\"submit\" [disabled]=\"formIsInvalid\">Click me!</button>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/components/login/login.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/dashboard/components/login/login.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Exo:100,200,400);\n@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:700,400,300);\nbody {\n  margin: 0;\n  padding: 0;\n  background: #fff;\n  color: #fff;\n  font-family: Arial;\n  font-size: 12px; }\n.body {\n  position: absolute;\n  top: -20px;\n  left: -20px;\n  right: -40px;\n  bottom: -40px;\n  width: auto;\n  height: auto;\n  background-image: url(http://ginva.com/wp-content/uploads/2012/07/city-skyline-wallpapers-008.jpg);\n  background-size: cover;\n  -webkit-filter: blur(5px);\n  z-index: 0; }\n.grad {\n  position: absolute;\n  top: -20px;\n  left: -20px;\n  right: -40px;\n  bottom: -40px;\n  width: auto;\n  height: auto;\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(0, 0, 0, 0)), color-stop(100%, rgba(0, 0, 0, 0.65)));\n  /* Chrome,Safari4+ */\n  z-index: 1;\n  opacity: 0.7; }\n.header {\n  position: absolute;\n  top: calc(50% - 35px);\n  left: calc(50% - 255px);\n  z-index: 2; }\n.header div {\n  float: left;\n  color: #fff;\n  font-family: 'Exo', sans-serif;\n  font-size: 35px;\n  font-weight: 200; }\n.header div span {\n  color: #5379fa !important; }\n.login {\n  position: absolute;\n  top: calc(50% - 75px);\n  left: calc(50% - 50px);\n  height: 150px;\n  width: 350px;\n  padding: 10px;\n  z-index: 2; }\n.login input[type=text] {\n  width: 250px;\n  height: 30px;\n  background: transparent;\n  border: 1px solid rgba(255, 255, 255, 0.6);\n  border-radius: 2px;\n  color: #fff;\n  font-family: 'Exo', sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  padding: 4px; }\n.login input[type=password] {\n  width: 250px;\n  height: 30px;\n  background: transparent;\n  border: 1px solid rgba(255, 255, 255, 0.6);\n  border-radius: 2px;\n  color: #fff;\n  font-family: 'Exo', sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  padding: 4px;\n  margin-top: 10px; }\n.login input[type=button] {\n  width: 260px;\n  height: 35px;\n  background: #fff;\n  border: 1px solid #fff;\n  cursor: pointer;\n  border-radius: 2px;\n  color: #a18d6c;\n  font-family: 'Exo', sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  padding: 6px;\n  margin-top: 10px; }\n.login input[type=button]:hover {\n  opacity: 0.8; }\n.login input[type=button]:active {\n  opacity: 0.6; }\n.login input[type=text]:focus {\n  outline: none;\n  border: 1px solid rgba(255, 255, 255, 0.9); }\n.login input[type=password]:focus {\n  outline: none;\n  border: 1px solid rgba(255, 255, 255, 0.9); }\n.login input[type=button]:focus {\n  outline: none; }\n::-webkit-input-placeholder {\n  color: rgba(255, 255, 255, 0.6); }\n::-moz-input-placeholder {\n  color: rgba(255, 255, 255, 0.6); }\n"

/***/ }),

/***/ "./src/app/dashboard/components/login/login.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/dashboard/components/login/login.component.ts ***!
  \***************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, route, router) {
        this.auth = auth;
        this.route = route;
        this.router = router;
        this.invalidCredentials = false;
    }
    Object.defineProperty(LoginComponent.prototype, "f", {
        get: function () {
            return this.form.controls;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "formIsInvalid", {
        get: function () {
            return this.form.invalid;
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.ngOnInit = function () {
        this.referrer = this.route.snapshot.queryParams['returnUrl'] || '/';
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ]),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])
        });
    };
    LoginComponent.prototype.submit = function () {
        var _this = this;
        if (this.form.invalid) {
            return;
        }
        this.auth
            .login(this.f.username.value, this.f.password.value)
            .subscribe(function (res) {
            _this.router.navigate(['dashboard']);
        }, function (error) {
            if (error.status === 401) {
                _this.invalidCredentials = true;
            }
        });
    };
    LoginComponent.prototype.reset = function () {
        this.form.reset();
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/dashboard/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/dashboard/components/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/containers/dashboard/dashboard.component.css":
/*!************************************************************************!*\
  !*** ./src/app/dashboard/containers/dashboard/dashboard.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/containers/dashboard/dashboard.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/dashboard/containers/dashboard/dashboard.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Hi, {{(user$ | async).fullname}}</h1>\n\n<app-students></app-students>\n"

/***/ }),

/***/ "./src/app/dashboard/containers/dashboard/dashboard.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/dashboard/containers/dashboard/dashboard.component.ts ***!
  \***********************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/user/user.service */ "./src/app/services/user/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(userService) {
        this.userService = userService;
        this.user$ = this.userService.user$;
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/containers/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/containers/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/containers/schools/schools.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/dashboard/containers/schools/schools.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span dir=\"rtl\">\n\n<mat-accordion>\n  <mat-expansion-panel *ngFor=\"let school of schools$ | async\">\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n            <span>\n              {{school.name}}\n            </span>\n\n            <span class=\"details\">\n                <span class=\"column\">\n                    <span class=\"bold\">תפוסה:</span> <span> {{school.used}} </span>מתוך<span> {{school.total}} </span>\n                </span>\n                <span class=\"column\" *ngIf=\"school.city\">\n                    <span class=\"bold\"> | עיר:</span> <span>  {{school.city.name}} </span>\n                </span>\n                <span class=\"column\">\n                    <span class=\"bold\"> | מחיר תא:</span> <span>  {{school.price}} </span>\n                </span>\n                <span class=\"column\">\n                    <span class=\"bold\"> | פקדון:</span> <span>  {{school.deposit_price}} </span>\n                </span>\n                <span class=\"column\">\n                    <span class=\"bold\"> | כתובת:</span> <span>  {{school.address}} </span>\n                </span>\n            </span>\n      </mat-panel-title>\n\n    </mat-expansion-panel-header>\n\n    School data\n  </mat-expansion-panel>\n\n</mat-accordion>\n</span>\n\n"

/***/ }),

/***/ "./src/app/dashboard/containers/schools/schools.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/dashboard/containers/schools/schools.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: flex;\n  flex-direction: column;\n  max-height: 500px;\n  min-width: 300px; }\n\n.mat-table {\n  overflow: auto;\n  max-height: 500px; }\n\n.element-row {\n  position: relative; }\n\n.element-row:not(.expanded) {\n  cursor: pointer; }\n\n.element-row:not(.expanded):hover {\n  background: #f5f5f5; }\n\n.element-row.expanded {\n  border-bottom-color: transparent; }\n\nmat-panel-title {\n  flex-flow: row wrap; }\n\nmat-panel-title .details {\n    flex: 1 100%;\n    font-size: 14px;\n    color: #00000080; }\n\n.bold {\n  font-weight: bold; }\n"

/***/ }),

/***/ "./src/app/dashboard/containers/schools/schools.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/dashboard/containers/schools/schools.component.ts ***!
  \*******************************************************************/
/*! exports provided: SchoolsComponent, ExampleDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolsComponent", function() { return SchoolsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleDataSource", function() { return ExampleDataSource; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/store/store */ "./src/app/services/store/store.ts");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_schools_schools_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/schools/schools.service */ "./src/app/dashboard/services/schools/schools.service.ts");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SchoolsComponent = /** @class */ (function () {
    function SchoolsComponent(store, schoolsService) {
        this.store = store;
        this.schoolsService = schoolsService;
        this.schools$ = this.store.select('schools');
        this.displayedColumns = ['position', 'name', 'weight'];
        this.dataSource = new ExampleDataSource();
        this.isExpansionDetailRow = function (i, row) { return row.hasOwnProperty('detailRow'); };
    }
    SchoolsComponent.prototype.ngOnInit = function () {
        this.schoolsService.get$();
    };
    SchoolsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-schools',
            template: __webpack_require__(/*! ./schools.component.html */ "./src/app/dashboard/containers/schools/schools.component.html"),
            styles: [__webpack_require__(/*! ./schools.component.scss */ "./src/app/dashboard/containers/schools/schools.component.scss")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('detailExpand', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ height: '0px', minHeight: '0', visibility: 'hidden' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ height: '*', visibility: 'visible' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                ]),
            ],
        }),
        __metadata("design:paramtypes", [_services_store_store__WEBPACK_IMPORTED_MODULE_1__["Store"],
            _services_schools_schools_service__WEBPACK_IMPORTED_MODULE_3__["SchoolsService"]])
    ], SchoolsComponent);
    return SchoolsComponent;
}());

var data = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
    { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
    { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
    { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
    { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
    { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
    { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
    { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
    { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
    { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];
/**
 * Data source to provide what data should be rendered in the table. The observable provided
 * in connect should emit exactly the data that should be rendered by the table. If the data is
 * altered, the observable should emit that new set of data on the stream. In our case here,
 * we return a stream that contains only one set of data that doesn't change.
 */
var ExampleDataSource = /** @class */ (function (_super) {
    __extends(ExampleDataSource, _super);
    function ExampleDataSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    ExampleDataSource.prototype.connect = function () {
        var rows = [];
        data.forEach(function (element) { return rows.push(element, { detailRow: true, element: element }); });
        console.log(rows);
        return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_2__["of"])(rows);
    };
    ExampleDataSource.prototype.disconnect = function () {
    };
    return ExampleDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__["DataSource"]));



/***/ }),

/***/ "./src/app/dashboard/containers/students/students.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/dashboard/containers/students/students.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container mat-elevation-z8\" dir=\"rtl\">\n\n    <mat-form-field>\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n    </mat-form-field>\n\n    <div class=\"example-loading-shade\" *ngIf=\"isLoadingResults\">\n        <mat-spinner></mat-spinner>\n    </div>\n\n    <div class=\"example-table-container\">\n\n        <table mat-table [dataSource]=\"dataSource\" class=\"example-table\"\n               matSort matSortActive=\"created\" matSortDisableClear matSortDirection=\"asc\">\n            <!-- Number Column -->\n            <ng-container matColumnDef=\"id\">\n                <th mat-header-cell *matHeaderCellDef>#</th>\n                <td mat-cell *matCellDef=\"let row;\" class='title' data-title=\"id\">{{ row._id }}</td>\n            </ng-container>\n\n            <!-- Title Column -->\n            <ng-container matColumnDef=\"first_name\">\n                <th mat-header-cell *matHeaderCellDef>שם פרטי</th>\n                <td mat-cell *matCellDef=\"let row\" class='title' data-title=\"שם פרטי\">\n\n                    <app-inline-edit [model]=\"row.first_name\" [placeholder]=\" 'שם פרטי' \"\n                                     [type]=\" 'field' \"\n                                     (update)=\"update('first_name',$event,row)\"></app-inline-edit>\n                </td>\n            </ng-container>\n\n            <!-- State Column -->\n            <ng-container matColumnDef=\"last_name\">\n                <th mat-header-cell *matHeaderCellDef>שם משפחה</th>\n                <td mat-cell *matCellDef=\"let row\" class='title' data-title=\"שם משפחה\">\n                    <app-inline-edit [model]=\"row.last_name\" [placeholder]=\" 'שם משפחה' \"\n                                     [type]=\" 'field' \"\n                                     (update)=\"update('last_name',$event,row)\"></app-inline-edit>\n\n\n                </td>\n\n            </ng-container>\n\n            <ng-container matColumnDef=\"school_name\">\n                <th mat-header-cell *matHeaderCellDef>בית ספר</th>\n                <td mat-cell *matCellDef=\"let row\" class='title' data-title=\"בית ספר\">\n                    <span class=\"school-actions\">\n                        <app-inline-edit [model]=\"row.school?.name\"\n                                         [collection]=\"schools$\"\n                                         [selected]=\"row.school\"\n                                         [type]=\" 'select' \"\n                                         (update)=\"update('school_id',$event,row)\"></app-inline-edit>\n                        <a [routerLink]=\"['school',row.school._id]\" *ngIf=\"row.school\"> <i class=\"material-icons\">arrow_back</i> </a>\n                    </span>\n                </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"locker_id\">\n                <th mat-header-cell *matHeaderCellDef>לוקר ID</th>\n                <td mat-cell *matCellDef=\"let row\" class='title' data-title=\"לוקר id\">{{ row.locker ? row.locker._id : ''}}</td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"class\">\n                <th mat-header-cell *matHeaderCellDef>כיתה</th>\n                <td mat-cell *matCellDef=\"let row\" class='title' data-title=\"כיתה\">\n                    <app-inline-edit [model]=\"row.class\" [placeholder]=\" 'כיתה' \"\n                                     [type]=\" 'field' \"\n                                     (update)=\"update('class',$event,row)\"></app-inline-edit>\n                </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"phone_number\">\n                <th mat-header-cell *matHeaderCellDef>טלפון</th>\n                <td mat-cell *matCellDef=\"let row\" class='title' data-title=\"טלפון\">\n                    <app-inline-edit [model]=\"row.phone_number\" [placeholder]=\" 'טלפון' \"\n                                     [type]=\" 'field' \"\n                                     (update)=\"update('phone_number',$event,row)\"></app-inline-edit>\n                </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"email\">\n                <th mat-header-cell *matHeaderCellDef>אימייל</th>\n                <td mat-cell *matCellDef=\"let row\" class='title' data-title=\"אימייל\">\n                    <app-inline-edit [model]=\"row.email\" [placeholder]=\" 'אימייל' \"\n                                     [type]=\" 'field' \"\n                                     (update)=\"update('email',$event,row)\"></app-inline-edit>\n                </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"note\">\n                <th mat-header-cell *matHeaderCellDef>הערות</th>\n                <td mat-cell *matCellDef=\"let row\" class='title' data-title=\"הערות\">\n                    <app-inline-edit [model]=\"row.note\" [placeholder]=\" 'הערות' \"\n                                     [type]=\" 'textarea' \"\n                                     (update)=\"update('note',$event,row)\"></app-inline-edit>\n                </td>\n            </ng-container>\n\n\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns;\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n        </table>\n    </div>\n\n    <mat-paginator [length]=\"(totalStudents$ | async)\" [pageSize]=\"50\" class=\"page\"></mat-paginator>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/containers/students/students.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/dashboard/containers/students/students.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Structure */\n.example-container {\n  position: relative;\n  max-width: 1200px;\n  margin: 0 auto; }\n.example-table-container {\n  position: relative;\n  max-height: 700px;\n  overflow: auto; }\ntable {\n  width: 100%; }\n.example-loading-shade {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 56px;\n  right: 0;\n  background: rgba(0, 0, 0, 0.15);\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n.example-rate-limit-reached {\n  color: #980000;\n  max-width: 360px;\n  text-align: center; }\n/* Column Widths */\n.mat-column-number,\n.mat-column-state {\n  max-width: 64px; }\n.mat-column-created {\n  max-width: 124px; }\n[dir=\"rtl\"] td.mat-cell:last-child,\n[dir=\"rtl\"] td.mat-footer-cell:last-child,\n[dir=\"rtl\"] th.mat-header-cell:last-child {\n  padding-right: 0;\n  padding-left: 24px; }\n[dir=\"rtl\"] td.mat-cell:first-child,\n[dir=\"rtl\"] td.mat-footer-cell:first-child,\n[dir=\"rtl\"] th.mat-header-cell:first-child {\n  padding-right: 24px;\n  padding-left: 0px; }\n[dir=\"rtl\"] th.mat-header-cell {\n  text-align: right; }\ntd.mat-cell,\ntd.mat-footer-cell,\nth.mat-header-cell {\n  padding: 0 10px; }\ntr.mat-header-row th {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1000;\n  background: white; }\ntd.mat-cell,\ntd.mat-footer-cell,\nth.mat-header-cell {\n  max-width: 200px; }\n.mat-cell.cdk-column-school_name {\n  min-width: 150px; }\n.school-actions {\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n@media only screen and (max-width: 900px) {\n  .mat-table {\n    background: #f5f5f5;\n    padding: 20px; }\n  .mat-header-row {\n    display: none; }\n  td.mat-cell, td.mat-footer-cell, th.mat-header-cell {\n    display: block;\n    width: 100%;\n    max-width: 10000px;\n    padding: 10px !important;\n    box-sizing: border-box;\n    min-height: 43px;\n    text-align: left; }\n  tr.mat-footer-row, tr.mat-row {\n    height: auto;\n    display: block;\n    width: 100%;\n    max-width: 10000px;\n    margin: 0 0 26px 0;\n    background-color: #fff;\n    vertical-align: middle;\n    text-align: right;\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.24); }\n  td.title:before {\n    content: attr(data-title);\n    float: right;\n    font-size: inherit;\n    font-weight: 400;\n    color: #757575; } }\n"

/***/ }),

/***/ "./src/app/dashboard/containers/students/students.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/dashboard/containers/students/students.component.ts ***!
  \*********************************************************************/
/*! exports provided: StudentsComponent, ExampleDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsComponent", function() { return StudentsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleDataSource", function() { return ExampleDataSource; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_sudents_students_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/sudents/students.service */ "./src/app/dashboard/services/sudents/students.service.ts");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _services_schools_schools_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/schools/schools.service */ "./src/app/dashboard/services/schools/schools.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
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







var StudentsComponent = /** @class */ (function () {
    function StudentsComponent(schoolsService, studentService) {
        this.schoolsService = schoolsService;
        this.studentService = studentService;
        this.displayedColumns = ['id', 'first_name', 'last_name', 'school_name', 'locker_id', 'class', 'phone_number', 'email', 'note'];
        this.isLoadingResults = true;
        this.isRateLimitReached = false;
        this.totalStudents$ = this.studentService.totalStudents$;
        this.schools$ = this.schoolsService.get$();
    }
    StudentsComponent.prototype.update = function (prop, value, item) {
        var _this = this;
        setTimeout(function () {
            _this.studentService.update(__assign({}, item, (_a = {}, _a[prop] = value, _a)));
            var _a;
        }, 0);
    };
    StudentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSource = new ExampleDataSource(this.studentService.students$);
        // // If the user changes the sort order, reset back to the first page.
        this.sort.sortChange.subscribe(function () { return _this.paginator.pageIndex = 1; });
        Object(rxjs_index__WEBPACK_IMPORTED_MODULE_2__["merge"])(this.paginator.page)
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])({}), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () {
            _this.isLoadingResults = true;
            return _this.studentService.get$(true, _this.paginator.pageIndex + 1);
            // this.exampleDatabase!.getRepoIssues(
            //     this.sort.active, this.sort.direction, this.paginator.pageIndex);
        }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            // Flip flag to show that loading has finished.
            _this.isLoadingResults = false;
            _this.isRateLimitReached = false;
            // this.resultsLength = res.total;
            return res;
        }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err, caught) {
            _this.isLoadingResults = false;
            _this.isRateLimitReached = true;
            return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_2__["of"])(caught);
        })).subscribe();
    };
    StudentsComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        // this.dataSource.filter = filterValue;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], StudentsComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"])
    ], StudentsComponent.prototype, "sort", void 0);
    StudentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-students',
            template: __webpack_require__(/*! ./students.component.html */ "./src/app/dashboard/containers/students/students.component.html"),
            styles: [__webpack_require__(/*! ./students.component.scss */ "./src/app/dashboard/containers/students/students.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_schools_schools_service__WEBPACK_IMPORTED_MODULE_6__["SchoolsService"],
            _services_sudents_students_service__WEBPACK_IMPORTED_MODULE_1__["StudentsService"]])
    ], StudentsComponent);
    return StudentsComponent;
}());

var ExampleDataSource = /** @class */ (function (_super) {
    __extends(ExampleDataSource, _super);
    function ExampleDataSource(students$) {
        var _this = _super.call(this) || this;
        _this.students$ = students$;
        return _this;
    }
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    ExampleDataSource.prototype.connect = function () {
        return this.students$;
    };
    ExampleDataSource.prototype.disconnect = function () {
    };
    return ExampleDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__["DataSource"]));



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _containers_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers/dashboard/dashboard.component */ "./src/app/dashboard/containers/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes */ "./src/app/dashboard/routes.ts");
/* harmony import */ var _containers_schools_schools_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./containers/schools/schools.component */ "./src/app/dashboard/containers/schools/schools.component.ts");
/* harmony import */ var _containers_students_students_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./containers/students/students.component */ "./src/app/dashboard/containers/students/students.component.ts");
/* harmony import */ var _material_custom_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../material/custom-material.module */ "./src/app/material/custom-material.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _components_inline_edit_inline_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/inline-edit/inline-edit.component */ "./src/app/dashboard/components/inline-edit/inline-edit.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _auth_auth_module__WEBPACK_IMPORTED_MODULE_4__["AuthModule"],
                _material_custom_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_routes__WEBPACK_IMPORTED_MODULE_5__["ROUTES"])
            ],
            exports: [
                _containers_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"],
            ],
            declarations: [
                _containers_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"],
                _containers_schools_schools_component__WEBPACK_IMPORTED_MODULE_6__["SchoolsComponent"],
                _containers_students_students_component__WEBPACK_IMPORTED_MODULE_7__["StudentsComponent"],
                _components_inline_edit_inline_edit_component__WEBPACK_IMPORTED_MODULE_10__["InlineEditComponent"],
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/dashboard/routes.ts":
/*!*************************************!*\
  !*** ./src/app/dashboard/routes.ts ***!
  \*************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _containers_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./containers/dashboard/dashboard.component */ "./src/app/dashboard/containers/dashboard/dashboard.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/dashboard/components/login/login.component.ts");
/* harmony import */ var _containers_schools_schools_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/schools/schools.component */ "./src/app/dashboard/containers/schools/schools.component.ts");




var ROUTES = [
    {
        path: 'dashboard',
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
        component: _containers_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"]
    },
    {
        path: 'dashboard/school/:id',
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
        component: _containers_schools_schools_component__WEBPACK_IMPORTED_MODULE_3__["SchoolsComponent"]
    },
    {
        path: 'dashboard/schools',
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
        component: _containers_schools_schools_component__WEBPACK_IMPORTED_MODULE_3__["SchoolsComponent"]
    },
    {
        path: 'login',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    }
];


/***/ }),

/***/ "./src/app/dashboard/services/schools/schools.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/dashboard/services/schools/schools.service.ts ***!
  \***************************************************************/
/*! exports provided: SchoolsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolsService", function() { return SchoolsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/store/store */ "./src/app/services/store/store.ts");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SchoolsService = /** @class */ (function () {
    function SchoolsService(store, http) {
        this.store = store;
        this.http = http;
        this.schools$ = this.store.select('schools');
        this.BASE_URL = _angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"] ? 'http://localhost:9091' : 'http://https://devapi.adonlockerrent.co.il';
    }
    SchoolsService.prototype.get$ = function (force) {
        var _this = this;
        if (force === void 0) { force = false; }
        if (force && this.store.value.schools) {
            return this.schools$;
        }
        this.http.get(this.BASE_URL + "/api/schools")
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (schools) { return _this.store.set('schools', schools); }, function (error) {
            return Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error);
        }))
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err, caught) { return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err); }))
            .subscribe();
        return this.schools$;
    };
    SchoolsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_store_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SchoolsService);
    return SchoolsService;
}());



/***/ }),

/***/ "./src/app/dashboard/services/sudents/students.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/dashboard/services/sudents/students.service.ts ***!
  \****************************************************************/
/*! exports provided: StudentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsService", function() { return StudentsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/store/store */ "./src/app/services/store/store.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var StudentsService = /** @class */ (function () {
    function StudentsService(store, http) {
        this.store = store;
        this.http = http;
        this.students$ = this.store.select('students');
        this.totalStudents$ = new rxjs_index__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        this.BASE_URL = _angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"] ? 'http://localhost:9091' : 'http://https://devapi.adonlockerrent.co.il';
    }
    StudentsService.prototype.get$ = function (force, page) {
        var _this = this;
        if (force === void 0) { force = false; }
        if (page === void 0) { page = 0; }
        if (!force && this.store.value.students && this.store.value.students.length) {
            return this.students$;
        }
        return this.http.get(this.BASE_URL + "/api/students?page=" + page)
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            _this.totalStudents$.next(res.total);
            _this.store.set('students', res.students);
        }, function (error) {
            return Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error);
        })).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res.students;
        }))
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err, caught) { return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err); }));
    };
    StudentsService.prototype.update = function (newStudent) {
        var _this = this;
        return this.http.patch(this.BASE_URL + "/api/students/" + newStudent._id, newStudent)
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            var students = _this.store.value.students.slice().map(function (student) { return student._id === newStudent._id ? res : student; });
            _this.store.set('students', students);
        }, function (error) {
            return Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error);
        }))
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err, caught) { return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err); }))
            .subscribe();
    };
    StudentsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_store_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], StudentsService);
    return StudentsService;
}());



/***/ }),

/***/ "./src/app/material/custom-material.module.ts":
/*!****************************************************!*\
  !*** ./src/app/material/custom-material.module.ts ***!
  \****************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ncstate_sat_popover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ncstate/sat-popover */ "./node_modules/@ncstate/sat-popover/fesm5/ncstate-sat-popover.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTooltipModule"],
                _ncstate_sat_popover__WEBPACK_IMPORTED_MODULE_2__["SatPopoverModule"],
            ],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/routes.ts":
/*!***************************!*\
  !*** ./src/app/routes.ts ***!
  \***************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
var ROUTES = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule',
    }
];


/***/ }),

/***/ "./src/app/services/store/store.ts":
/*!*****************************************!*\
  !*** ./src/app/services/store/store.ts ***!
  \*****************************************/
/*! exports provided: Store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__);
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


var state = {
    user: undefined,
    schools: undefined,
    students: undefined
};
var Store = /** @class */ (function () {
    function Store() {
        this.subject = new rxjs_index__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](state);
        this.store = this.subject.asObservable().pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])());
    }
    Object.defineProperty(Store.prototype, "value", {
        get: function () {
            return this.subject.value;
        },
        enumerable: true,
        configurable: true
    });
    Store.prototype.select = function (name) {
        return this.store.pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (s) { return s[name]; }));
    };
    Store.prototype.set = function (name, state) {
        this.subject.next(__assign({}, this.value, (_a = {}, _a[name] = state, _a)));
        var _a;
    };
    return Store;
}());



/***/ }),

/***/ "./src/app/services/user/user.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/user/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/store */ "./src/app/services/store/store.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(store) {
        this.store = store;
        this.user$ = this.store.select('user');
    }
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_store_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/site/containers/index/index.component.html":
/*!************************************************************!*\
  !*** ./src/app/site/containers/index/index.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  index works!\n</p>\n"

/***/ }),

/***/ "./src/app/site/containers/index/index.component.scss":
/*!************************************************************!*\
  !*** ./src/app/site/containers/index/index.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/site/containers/index/index.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/site/containers/index/index.component.ts ***!
  \**********************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
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

var IndexComponent = /** @class */ (function () {
    function IndexComponent() {
    }
    IndexComponent.prototype.ngOnInit = function () {
    };
    IndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/site/containers/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.scss */ "./src/app/site/containers/index/index.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/site/routes.ts":
/*!********************************!*\
  !*** ./src/app/site/routes.ts ***!
  \********************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _containers_index_index_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./containers/index/index.component */ "./src/app/site/containers/index/index.component.ts");

var ROUTES = [
    {
        path: '',
        component: _containers_index_index_component__WEBPACK_IMPORTED_MODULE_0__["IndexComponent"]
    }
];


/***/ }),

/***/ "./src/app/site/site.module.ts":
/*!*************************************!*\
  !*** ./src/app/site/site.module.ts ***!
  \*************************************/
/*! exports provided: SiteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteModule", function() { return SiteModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _containers_index_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers/index/index.component */ "./src/app/site/containers/index/index.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes */ "./src/app/site/routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SiteModule = /** @class */ (function () {
    function SiteModule() {
    }
    SiteModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_routes__WEBPACK_IMPORTED_MODULE_4__["ROUTES"]),
            ],
            declarations: [_containers_index_index_component__WEBPACK_IMPORTED_MODULE_2__["IndexComponent"]]
        })
    ], SiteModule);
    return SiteModule;
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

module.exports = __webpack_require__(/*! /Applications/XAMPP/xamppfiles/htdocs/adonlockerangular6/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map