webpackJsonp([0],{

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registro_registro__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__alumno_alumno__ = __webpack_require__(295);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__registro_registro__["a" /* RegistroPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__alumno_alumno__["a" /* Alumno */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\IONIC-2doParcial\TP_PPS_2C_2017\src\pages\tabs\tabs.html"*/'<ion-tabs [color]="isAndroid ? \'favorite\' : \'dark\'">\n\n  <ion-tab [root]="tab1Root" tabTitle="Inicio" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Sobre" tabIcon="information-circle"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Registro" tabIcon="contacts"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabTitle="Alumnos" tabIcon="contacts"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\IONIC-2doParcial\TP_PPS_2C_2017\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"C:\IONIC-2doParcial\TP_PPS_2C_2017\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      About\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\IONIC-2doParcial\TP_PPS_2C_2017\src\pages\about\about.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object])
], AboutPage);

var _a;
//# sourceMappingURL=about.js.map

/***/ }),

/***/ 196:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 196;

/***/ }),

/***/ 239:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 239;

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Alumno; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(296);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Alumno = (function () {
    function Alumno(navCtrl, af) {
        this.navCtrl = navCtrl;
        this.af = af;
    }
    Alumno.prototype.ngOnInit = function () {
        this.items = this.getCourses('/Alumno/');
    };
    Alumno.prototype.getCourses = function (listPath) {
        return this.af.list(listPath).valueChanges();
    };
    Alumno.prototype.addNewAlumn = function () {
        this.nombreInsertado = this.nombre;
        this.apellidoInsertado = this.apellido;
        this.af.list("/Alumno/").push({
            nombre: this.nombreInsertado,
            apellido: this.apellidoInsertado
        });
        this.nombre = "";
        this.apellido = "";
        this.ngOnInit();
    };
    return Alumno;
}());
Alumno = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-alumno',template:/*ion-inline-start:"C:\IONIC-2doParcial\TP_PPS_2C_2017\src\pages\alumno\alumno.html"*/'<ion-header>\n\n    <ion-navbar  color=\'rosa\'>\n\n      <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n    <ion-title>\n\n      Alumnos\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n\n\n<ion-item>\n\n  <ion-input [(ngModel)]="nombre" placeholder="Ingrese nombre"></ion-input>\n\n</ion-item>\n\n<ion-item>\n\n  <ion-input [(ngModel)]="apellido" placeholder="Ingrese apellido"></ion-input>\n\n</ion-item>\n\n<br>\n\n    <ion-buttons>\n\n      <button full  (click)="addNewAlumn()" ion-button icon-only>\n\n        <ion-icon name="checkmark-circle-outline">Agregar</ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n\n\n<br><br><br><br>\n\n<b><h3>Lista de Alumnos</h3></b>\n\n <ion-list>\n\n\n\n    <ion-item *ngFor="let boca of items | async; let i = index" style="background-color: black; text-align: left">\n\n         <ion-thumbnail item-start>\n\n      <img width="25px" height="25px" src="assets/icono.jpg">\n\n    </ion-thumbnail>\n\n    <h2>{{boca.nombre}}</h2>\n\n    <p> {{boca.apellido}}</p>\n\n    <button ion-button clear item-end>Modificar</button>\n\n    <button ion-button clear item-end>Eliminar</button>\n\n    </ion-item>\n\n</ion-list> \n\n\n\n\n\n\n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\IONIC-2doParcial\TP_PPS_2C_2017\src\pages\alumno\alumno.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
], Alumno);

//# sourceMappingURL=alumno.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tabs_tabs__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_plus__ = __webpack_require__(762);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__registro_registro__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_Rx__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var Login = (function () {
    function Login(loadingCtrl, navCtrl, events, iab, http, navParams, platform, actionsheetCtrl, alertCtrl, facebook, googlePlus) {
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.events = events;
        this.iab = iab;
        this.http = http;
        this.navParams = navParams;
        this.platform = platform;
        this.actionsheetCtrl = actionsheetCtrl;
        this.alertCtrl = alertCtrl;
        this.facebook = facebook;
        this.googlePlus = googlePlus;
        this.listUsuarios = [{ id: 1, email: "administrador@administrador.com", password: "administrador", perfil: "administrador" },
            { id: 2, email: "profesor@profesor.com", password: "profesor", perfil: "profesor" },
            { id: 3, email: "administrativo@administrativo.com", password: "administrativo", perfil: "administrativo" },
            { id: 3, email: "alumno@alumno.com", password: "alumno", perfil: "alumno" }];
        this.usuarioSelecionado = { email: '', password: '' };
    }
    Login.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Login');
    };
    Login.prototype.login = function () {
        var _this = this;
        if (this.usuarioSelecionado.email == '' || this.usuarioSelecionado.password == '') {
            var alert = this.alertCtrl.create({
                title: 'ADVERTENCIA!',
                subTitle: 'Debe completar todos los campos!',
                buttons: ['OK']
            });
            alert.present();
        }
        else {
            __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().signInWithEmailAndPassword(this.usuarioSelecionado.email, this.usuarioSelecionado.password).then(function (ok) {
                var loader = _this.loadingCtrl.create({
                    content: "Espere...",
                    duration: 2600
                });
                loader.present();
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__tabs_tabs__["a" /* TabsPage */]);
            }, function (error) {
                var alert = _this.alertCtrl.create({
                    title: 'ERROR!',
                    subTitle: 'Usuario y/o contraseña incorrectas!',
                    buttons: ['OK']
                });
                alert.present();
            });
        }
    };
    Login.prototype.signInWithFacebook = function () {
        var _this = this;
        if (this.platform.is('cordova')) {
            this.facebook.login(['email', 'public_profile']).then(function (res) {
                var facebookCredential = __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"].FacebookAuthProvider.credential(res.authResponse.accessToken);
                __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().signInWithCredential(facebookCredential).then(function () {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__tabs_tabs__["a" /* TabsPage */]);
                    console.log(facebookCredential);
                }).catch(function (error) {
                    console.log(error);
                    alert("Secundario: " + error);
                });
            }).catch(function (error) {
                alert("Principal: " + error);
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().signInWithPopup(new __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"].FacebookAuthProvider()).then(function (res) {
                var loader = _this.loadingCtrl.create({
                    content: "Espere...",
                    duration: 2600
                });
                loader.present();
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__tabs_tabs__["a" /* TabsPage */]);
            }).catch(function (error) {
                console.log(error);
            });
        }
    };
    /* facebookWeb(): Promise<any> {
       return firebase.auth().signInWithPopup(new firebase.auth.FacebookAuthProvider())
         .then((res) => Promise.resolve);
     }*/
    Login.prototype.githubLogin = function () {
        var s = this;
        var ignorarExit = false;
        return new Promise(function (resolve, reject) {
            s.browser = window.cordova.InAppBrowser.open('http://github.com/login/oauth/authorize?client_id=38e68dbc2d4999af573e&redirect_uri=https://usuarios-1afa4.firebaseapp.com/__/auth/handler', '_blank', 'location=no,clearsessioncache=yes,clearcache=yes');
            s.browser.addEventListener('loaderror', function (event) {
                console.log('loaderror: ', event);
                ignorarExit = true;
                s.browser.removeEventListener("exit", function (event) { });
                s.browser.close();
                var msg = event.message;
                if (event.message == 'net::ERR_NAME_NOT_RESOLVED') {
                    msg = 'Es probable que no tengas Internet. Chequea tu conexión.';
                }
                reject(msg);
            });
            s.browser.addEventListener("loadstart", function (event) {
                console.log('loadstart: ', event.url);
                if ((event.url).indexOf("https://usuarios-1afa4.firebaseapp.com/__/auth/handler") === 0) {
                    ignorarExit = true;
                    s.browser.removeEventListener("exit", function (event) { });
                    s.browser.close();
                    var parts = event.url.split('?code=');
                    s.http.post('https://github.com/login/oauth/access_token', {
                        client_id: '38e68dbc2d4999af573e',
                        client_secret: '9fe1a4366e1dd29754106cfd780b077459b33ef0',
                        code: parts[1]
                    })
                        .map(function (res) { return res.text(); })
                        .subscribe(function (res) {
                        var access_token = '';
                        var parts = res.split('&');
                        for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
                            var part = parts_1[_i];
                            if (part.indexOf('access_token') != -1) {
                                access_token = part.replace('access_token=', '');
                                break;
                            }
                        }
                        if (access_token != '') {
                            console.log(access_token);
                            var credential = __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"].GithubAuthProvider.credential(access_token);
                            __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().signInWithCredential(credential).then(function (result) {
                                console.log("Firebase success: " + JSON.stringify(result));
                                __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('users').set(result.uid, result);
                                resolve(result);
                            }).catch(function (error) {
                                // Handle Error s here.
                                var errorCode = error.code;
                                var errorMessage = error.message;
                                // The email of the user's account used.
                                var email = error.email;
                                // The firebase.auth.AuthCredential type that was used.
                                var credential = error.credential;
                                // ...
                                reject("Error al iniciar sesión: " + errorMessage);
                            });
                        }
                        else {
                            reject("El inicio de sesión con Github no fue autorizado.");
                        }
                    }, function (error) {
                        reject("El inicio de sesión de Github fue cancelado");
                        console.log('post:error: ', error);
                    });
                }
                else {
                    var url = event.url;
                    if (url.indexOf("client_id=38e68dbc2d4999af573e") == -1 && url.indexOf('github.com/session') == -1) {
                        s.browser.close();
                    }
                }
            });
            s.browser.addEventListener("exit", function (event) {
                if (!ignorarExit) {
                    console.log('exit: ', event);
                    reject("El inicio de sesión de Github fue cancelado");
                }
                ignorarExit = false;
            });
        });
    };
    Login.prototype.loginWithGithub = function () {
        var _this = this;
        this.showLoading();
        this.githubLogin().then(function (r) {
            console.log('success: ', r);
        }, function (e) {
            var alert = _this.alertCtrl.create({
                message: e,
                buttons: [{
                        text: "Ok",
                        role: 'cancel'
                    }]
            });
            alert.present();
            _this.loading.dismiss();
        });
    };
    Login.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Iniciando sesión...',
            dismissOnPageChange: true
        });
        return this.loading.present();
    };
    Login.prototype.google = function () {
        var _this = this;
        this.googlePlus.login({
            'webClientId': '548960747107-m3s482qrichiirr9erslo0qdivd9q0gb.apps.googleusercontent.com',
            'offline': true,
        }).then(function (res) {
            var fire = __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"].GoogleAuthProvider.credential(res.idToken);
            __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().signInWithCredential(fire).then(function (suc) {
                var loader = _this.loadingCtrl.create({
                    content: "Espere...",
                    duration: 2600
                });
                loader.present();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__tabs_tabs__["a" /* TabsPage */]);
            }).catch(function (ns) {
                var alert = _this.alertCtrl.create({
                    title: 'ERROR!',
                    subTitle: 'Usuario y/o contraseña incorrectas!',
                    buttons: ['OK']
                });
                alert.present();
            });
        });
    };
    Login.prototype.showAlertError = function (mensaje) {
        var alert = this.alertCtrl.create({
            title: 'ERROR!',
            subTitle: mensaje,
            buttons: ['OK']
        });
        alert.present();
    };
    Login.prototype.registro = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__registro_registro__["a" /* RegistroPage */]);
    };
    return Login;
}());
Login = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"C:\IONIC-2doParcial\TP_PPS_2C_2017\src\pages\login\login.html"*/'<html>\n\n\n\n<head>\n\n  <meta charset="UTF-8">\n\n  <title>Ingrese</title>\n\n</head>\n\n\n\n<body>\n\n  <div class="loginpanel">\n\n    <div class="txt">\n\n      <input id="user" [(ngModel)]="usuarioSelecionado.email" name="email" type="text" placeholder="Correo" />\n\n      <label for="user" class="entypo-user"></label>\n\n    </div>\n\n    <div class="txt">\n\n      <input id="pwd" [(ngModel)]="usuarioSelecionado.password" name="password" type="password" placeholder="Contraseña" />\n\n      <label for="pwd" class="entypo-lock"></label>\n\n    </div>\n\n    <div class="buttons">\n\n      <input type="button" (click)="login()" value="INGRESAR" />\n\n      <input type="button" (click)="registro()" value="Registrarse" />\n\n    </div>\n\n\n\n\n\n    <div class="hr">\n\n      <div></div>\n\n      <div>O con</div>\n\n      <div></div>\n\n    </div>\n\n    \n\n      <ion-item>\n\n        <ion-label>Usuario:</ion-label>\n\n        <ion-select [(ngModel)]="usuarioSelecionado">\n\n          <ion-option *ngFor="let u of listUsuarios" value="u.id" [value]="u">{{u.perfil}}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n    \n\n\n\n    <div class="social">\n\n      <input style="background-color: blue" type="button" (click)="signInWithFacebook()" value="FACEBOOK" />\n\n      <input style="background-color: red" type="button" (click)="google()" value="GOOGLE+" />\n\n      <input style="background-color: black" type="button" (click)="loginWithGithub()" value="GITHUB" />\n\n    </div>\n\n\n\n\n\n  </div>\n\n  <script src=\'http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js\'></script>\n\n  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">\n\n  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>\n\n  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>\n\n</body>\n\n\n\n\n\n</html>'/*ion-inline-end:"C:\IONIC-2doParcial\TP_PPS_2C_2017\src\pages\login\login.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* Events */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__["a" /* InAppBrowser */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__["a" /* InAppBrowser */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_8__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__angular_http__["a" /* Http */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Platform */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__["a" /* Facebook */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__["a" /* Facebook */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_plus__["a" /* GooglePlus */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_plus__["a" /* GooglePlus */]) === "function" && _l || Object])
], Login);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
//# sourceMappingURL=login.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(372);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_registro_registro__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_database__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_auth__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_firebase__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_facebook__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_google_plus__ = __webpack_require__(762);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_in_app_browser__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_http__ = __webpack_require__(348);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















// Initialize Firebase
var config = {
    apiKey: "AIzaSyABU4rSGpe9E5QfiOiAOB8Cxo1rlo6Hb8Q",
    authDomain: "segparcialionic.firebaseapp.com",
    databaseURL: "https://segparcialionic.firebaseio.com",
    projectId: "segparcialionic",
    storageBucket: "",
    messagingSenderId: "548960747107"
};
__WEBPACK_IMPORTED_MODULE_14_firebase___default.a.initializeApp(config);
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_registro_registro__["a" /* RegistroPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* Login */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: []
            }),
            __WEBPACK_IMPORTED_MODULE_11_angularfire2__["a" /* AngularFireModule */].initializeApp(config),
            __WEBPACK_IMPORTED_MODULE_12_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_13_angularfire2_auth__["b" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_18__angular_http__["b" /* HttpModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_registro_registro__["a" /* RegistroPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* Login */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_google_plus__["a" /* GooglePlus */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(335);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* Login */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            // statusBar.styleDefault();
            setTimeout(function () {
                splashScreen.hide();
            }, 100);
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\IONIC-2doParcial\TP_PPS_2C_2017\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\IONIC-2doParcial\TP_PPS_2C_2017\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _c || Object])
], MyApp);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(284);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegistroPage = (function () {
    function RegistroPage(loadingCtrl, navCtrl, af, navParams, platform, actionsheetCtrl, alertCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.af = af;
        this.navParams = navParams;
        this.platform = platform;
        this.actionsheetCtrl = actionsheetCtrl;
        this.alertCtrl = alertCtrl;
        this.usuarioSelecionado = { email: '', password: '', password1: '' };
    }
    RegistroPage.prototype.Registrar = function () {
        var _this = this;
        if (this.ValidaCamposReg()) {
            this.af.auth.createUserWithEmailAndPassword(this.usuarioSelecionado.email, this.usuarioSelecionado.password).then(function (response) {
                _this.AlertMensaje("Bienvenido", "Su perfil a sido guardado con exito!!!");
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
            }).catch(function (error) {
                if (error) {
                    switch (error.code) {
                        case 'INVALID_EMAIL':
                            _this.AlertMensaje("Error!!", 'Email inválido.');
                            break;
                        case 'EMAIL_TAKEN':
                            _this.AlertMensaje("Error!!", 'Este email ya está siendo utilizado.');
                            break;
                        case 'NETWORK_ERROR':
                            _this.AlertMensaje("Error!!", 'Ha ocurrido algún error al intentar conectarse al servidor, vuelva a intentarlo más tarde.');
                            break;
                        default:
                            _this.AlertMensaje("Error!!", 'Email o la contraseña son inválidos.');
                    }
                }
            });
        }
        else {
            this.AlertMensaje("Atencion!!", this.mensaje);
        }
    };
    RegistroPage.prototype.Mensaje = function (numero) {
        if (numero == 1) {
            this.mensaje = "<h2>Debe completar los campos requeridos!.</h2>";
        }
        if (numero == 2) {
            this.mensaje = "<h2>Debe completar los campos email!.</h2>";
        }
        if (numero == 3) {
            this.mensaje = "<h2>Debe completar los campos contraseña!.</h2>";
        }
        if (numero == 4) {
            this.mensaje = "<h2>Las contraseñas no coinciden!.</h2>";
        }
    };
    RegistroPage.prototype.ValidaCamposReg = function () {
        if (this.usuarioSelecionado.email == "" && this.usuarioSelecionado.password == "" && this.usuarioSelecionado.password1 == "") {
            this.Mensaje(1);
            return false;
        }
        if (this.usuarioSelecionado.email == "") {
            this.Mensaje(2);
            return false;
        }
        if (this.usuarioSelecionado.password == "" || this.usuarioSelecionado.password1 == "") {
            this.Mensaje(3);
            return false;
        }
        if (this.usuarioSelecionado.password != this.usuarioSelecionado.password1) {
            this.Mensaje(4);
            return false;
        }
        return true;
    };
    RegistroPage.prototype.AlertMensaje = function (titulo, mens) {
        var ventana = this.alertCtrl.create({
            title: titulo,
            message: mens,
            buttons: [
                {
                    text: "Aceptar",
                    handler: function (data) {
                        console.log('Mensaje de Alerta');
                    }
                }
            ]
        });
        ventana.present(ventana);
    };
    return RegistroPage;
}());
RegistroPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-registro',template:/*ion-inline-start:"C:\IONIC-2doParcial\TP_PPS_2C_2017\src\pages\registro\registro.html"*/'<html>\n\n  \n\n  <head>\n\n    <meta charset="UTF-8">\n\n    <title>Ingrese</title>\n\n  </head>\n\n  \n\n  <body>\n\n    <div class="loginpanel">\n\n      <div class="txt">\n\n        <input id="user" [(ngModel)]="usuarioSelecionado.email" name="email" type="text" placeholder="Correo" required/>\n\n        <label for="user" class="entypo-user"></label>\n\n      </div>\n\n      <div class="txt">\n\n        <input id="pwd" [(ngModel)]="usuarioSelecionado.password" name="password" type="password" placeholder="Contraseña" required/>\n\n        <label for="pwd" class="entypo-lock"></label>\n\n      </div>\n\n      <div class="txt">\n\n          <input id="pwd" [(ngModel)]="usuarioSelecionado.password1" name="password" type="password" placeholder="Repetir Contraseña" required/>\n\n          <label for="pwd" class="entypo-lock"></label>\n\n        </div>\n\n      <div class="buttons">\n\n\n\n        <input type="button" (click)="Registrar()" value="Registrarse" />\n\n      </div>\n\n  \n\n\n\n    </div>\n\n    <script src=\'http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js\'></script>\n\n    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">\n\n    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>\n\n    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>\n\n  </body>\n\n  \n\n  \n\n  </html>'/*ion-inline-end:"C:\IONIC-2doParcial\TP_PPS_2C_2017\src\pages\registro\registro.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Platform */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */]) === "function" && _g || Object])
], RegistroPage);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=registro.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\IONIC-2doParcial\TP_PPS_2C_2017\src\pages\home\home.html"*/'<ion-header>\n\n    <ion-navbar  color=\'favorite\'>\n\n      <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n    <ion-title>Home</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <h2>Welcome to Ionic!</h2>\n\n  <p>\n\n    This starter project comes with simple tabs-based layout for apps\n\n    that are going to primarily use a Tabbed UI.\n\n  </p>\n\n  <p>\n\n    Take a look at the <code>src/pages/</code> directory to add or change tabs,\n\n    update any existing page or create new pages.\n\n  </p>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\IONIC-2doParcial\TP_PPS_2C_2017\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ })

},[367]);
//# sourceMappingURL=main.js.map