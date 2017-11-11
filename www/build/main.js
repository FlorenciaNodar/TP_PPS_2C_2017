webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__asistencia_modal_asistencia_modal__ = __webpack_require__(289);
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
    function HomePage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
    }
    HomePage.prototype.presentModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__asistencia_modal_asistencia_modal__["a" /* AsistenciaModalPage */]);
        modal.present();
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Repo_Git\TP_PPS_2C_2017\src\pages\home\home.html"*/'<ion-header>\n\n    <ion-navbar  color=\'favorite\'>\n\n      <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n    <ion-title>Home</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<<<<<<< Updated upstream\n\n<ion-content padding align="center">\n\n  <button ion-button (click)="presentModal()" class="boton">Tomar Asistencia</button>\n\n  \n\n=======\n\n<ion-content padding>\n\n  <h2>Welcome to Ionic!</h2>\n\n  <p>\n\n    This starter project comes with simple tabs-based layout for apps\n\n    that are going to primarily use a Tabbed UI.\n\n  </p>\n\n  <p>\n\n    Take a look at the <code>src/pages/</code> directory to add or change tabs,\n\n    update any existing page or create new pages.\n\n  </p>\n\n>>>>>>> Stashed changes\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Repo_Git\TP_PPS_2C_2017\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EncuestaHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_encuesta_data_encuesta_data__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__encuesta_encuesta__ = __webpack_require__(346);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EncuestaHomePage = (function () {
    function EncuestaHomePage(navCtrl, navParams, eDataProvider, modalCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.eDataProvider = eDataProvider;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.encuestas = this.eDataProvider.getEncuestas();
        this.encuestas.forEach(function (e) {
            console.log(e);
        });
    }
    EncuestaHomePage.prototype.enviarEncuesta = function (e) {
        var _this = this;
        console.log(e);
        e.enviada = true;
        this.enviarEncuestaFB(e).then(function (res) {
            _this.showAlerOK("La encuesta se envio exitosamente");
        });
    };
    EncuestaHomePage.prototype.enviarEncuestaFB = function (e) {
        return this.eDataProvider.enviarEncuestaGuardadaFB(e);
    };
    EncuestaHomePage.prototype.generarEncuesta = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__encuesta_encuesta__["a" /* EncuestaPage */]);
    };
    EncuestaHomePage.prototype.eliminarEncuesta = function (encuesta) {
        console.log(encuesta.$key);
        this.eDataProvider.eliminarEncuesta(encuesta);
    };
    EncuestaHomePage.prototype.showAlerOK = function (mensaje) {
        var alert = this.alertCtrl.create({
            title: 'Info',
            subTitle: mensaje,
            buttons: ['OK']
        });
        alert.present();
    };
    EncuestaHomePage.prototype.showAlertError = function (mensaje) {
        var alert = this.alertCtrl.create({
            title: 'ERROR!',
            subTitle: mensaje,
            buttons: ['OK']
        });
        alert.present();
    };
    return EncuestaHomePage;
}());
EncuestaHomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-encuesta-home',template:/*ion-inline-start:"C:\Repo_Git\TP_PPS_2C_2017\src\pages\encuesta-home\encuesta-home.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Encuestas</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <button ion-button (click)="generarEncuesta()">\n    <ion-icon name="clipboard"></ion-icon> Nueva Encuesta</button>\n\n  <div *ngFor="let e of encuestas | async; let i = index">\n    <ion-card>\n      <ion-card-header (click)="e.isOpen = !e.isOpen">\n        <ion-icon name="trash" style="float:right;" (click)="eliminarEncuesta(e)"></ion-icon>\n        <button ion-button *ngIf="!e.enviada" style="float:right;" class="btnEnv btnChico" (click)="enviarEncuesta(e)">\n          <ion-icon name="send"></ion-icon>\n        </button>\n\n        <div style="color : rgb(26, 18, 92)">{{e.nombreEncuesta}}</div>\n      </ion-card-header>\n\n      <ion-card-content [hidden]="e.isOpen">\n        <div *ngFor="let pregunta of e.preguntas; let i = index">\n          <ion-item>\n            <ion-label style="color : rgb(85, 158, 218)">*{{pregunta.texto}}</ion-label>\n          </ion-item>\n        </div>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </div>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Repo_Git\TP_PPS_2C_2017\src\pages\encuesta-home\encuesta-home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_encuesta_data_encuesta_data__["a" /* EncuestaDataProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], EncuestaHomePage);

//# sourceMappingURL=encuesta-home.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(359);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserData = (function () {
    function UserData(events, storage) {
        this.events = events;
        this.storage = storage;
        this.HAS_LOGGED_IN = 'hasLoggedIn';
    }
    UserData.prototype.login = function (username) {
        this.storage.set(this.HAS_LOGGED_IN, true);
        this.setUsername(username);
        this.events.publish('user:login');
    };
    ;
    UserData.prototype.signup = function (username) {
        this.storage.set(this.HAS_LOGGED_IN, true);
        this.setUsername(username);
        this.events.publish('user:signup');
    };
    ;
    UserData.prototype.logout = function () {
        this.storage.remove(this.HAS_LOGGED_IN);
        this.storage.remove('username');
        this.events.publish('user:logout');
    };
    ;
    UserData.prototype.setUsername = function (username) {
        this.storage.set('username', username);
    };
    ;
    UserData.prototype.getUsername = function () {
        return this.storage.get('username').then(function (value) {
            return value;
        });
    };
    ;
    UserData.prototype.hasLoggedIn = function () {
        return this.storage.get(this.HAS_LOGGED_IN).then(function (value) {
            return value === true;
        });
    };
    ;
    return UserData;
}());
UserData = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* Events */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
], UserData);

//# sourceMappingURL=userdata.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alumno_alumno__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__encuesta_home_encuesta_home__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__admProf_admProf__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__codigoAlumnos_codigoAlumnos__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__listas_listas__ = __webpack_require__(354);
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
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__alumno_alumno__["a" /* Alumno */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__encuesta_home_encuesta_home__["a" /* EncuestaHomePage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__admProf_admProf__["a" /* AdmProf */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_6__listas_listas__["a" /* ListasPage */];
        this.tab6Root = __WEBPACK_IMPORTED_MODULE_5__codigoAlumnos_codigoAlumnos__["a" /* CodigoAlumnos */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Repo_Git\TP_PPS_2C_2017\src\pages\tabs\tabs.html"*/'<ion-tabs [color]="isAndroid ? \'favorite\' : \'dark\'">\n\n<<<<<<< Updated upstream\n\n\n\n  <ion-tab [root]="tab1Root" tabTitle="Inicio" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Alumno" tabIcon="school"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Encuesta" tabIcon="clipboard"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabTitle="Admin/Prof" tabIcon="ribbon"></ion-tab>\n\n  <ion-tab [root]="tab5Root" tabTitle="Listas" tabIcon="clipboard"></ion-tab>\n\n  <ion-tab [root]="tab6Root" tabTitle="QR Alumnos" tabIcon="barcode"></ion-tab>\n\n=======\n\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Registro" tabIcon="contacts"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabTitle="Encuesta" tabIcon="ios-document"></ion-tab>\n\n>>>>>>> Stashed changes\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Repo_Git\TP_PPS_2C_2017\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Alumno; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nuevoAlumno_nuevoAlumno__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editarAlumno_editarAlumno__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database_deprecated__ = __webpack_require__(27);
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
    function Alumno(navCtrl, af, modalCtrl) {
        this.navCtrl = navCtrl;
        this.af = af;
        this.modalCtrl = modalCtrl;
        this.items = af.list('/Alumno/');
    }
    Alumno.prototype.ngOnInit = function () {
    };
    Alumno.prototype.delete = function (boca) {
        this.af.list('/Alumno/').remove(boca.$key);
        this.ngOnInit();
    };
    Alumno.prototype.presentModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__nuevoAlumno_nuevoAlumno__["a" /* nuevoAlumno */]);
        modal.present();
    };
    Alumno.prototype.modify = function (boca) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__editarAlumno_editarAlumno__["a" /* editarAlumno */], { lista: boca });
        modal.present();
    };
    return Alumno;
}());
Alumno = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-alumno',template:/*ion-inline-start:"C:\Repo_Git\TP_PPS_2C_2017\src\pages\alumno\alumno.html"*/'<ion-content padding>\n\n       <button ion-button block (click)="presentModal()"> <ion-icon name="add">    Nuevo Alumno</ion-icon></button>\n\n\n\n<br><br><br>\n\n<b><h4 style="text-align: center">Lista de Alumnos</h4></b>\n\n <ion-list>\n\n\n\n<ion-item *ngFor="let boca of items | async; let i = index" style=" text-align: left">\n\n<ion-thumbnail item-start style="margin:12px 0px 0px" >\n\n<img style="width: 50px;height:50px;"  src="assets/icono.jpg">\n\n</ion-thumbnail>\n\n<h2 style="color: black">{{boca.nombre}}</h2>\n\n<p style="color: black"> {{boca.apellido}}</p>\n\n <button  style="color: black" ion-button clear item-end icon-only (click)="modify(boca)">\n\n  <ion-icon name="create" ></ion-icon>\n\n</button>\n\n <button  style="color: black" ion-button clear item-end icon-only (click)="delete(boca)">\n\n  <ion-icon name="trash"></ion-icon>\n\n</button>\n\n    \n\n    </ion-item>\n\n</ion-list> \n\n\n\n\n\n\n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Repo_Git\TP_PPS_2C_2017\src\pages\alumno\alumno.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database_deprecated__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
], Alumno);

//# sourceMappingURL=alumno.js.map

/***/ }),

/***/ 201:
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
webpackEmptyAsyncContext.id = 201;

/***/ }),

/***/ 244:
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
webpackEmptyAsyncContext.id = 244;

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsistenciaModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_asistencia_data_asistencia_data__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AsistenciaModalPage = (function () {
    function AsistenciaModalPage(navCtrl, navParams, viewCtrl, asisProvider, alertCtrl, datePipeCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.asisProvider = asisProvider;
        this.alertCtrl = alertCtrl;
        this.datePipeCtrl = datePipeCtrl;
        this.alumnosAsistencia = [];
    }
    AsistenciaModalPage.prototype.ionViewDidLoad = function () {
        this.aulas = this.asisProvider.getAulas();
    };
    AsistenciaModalPage.prototype.getMateriasPorAulaSeleccionada = function () {
        this.materias = this.asisProvider.getMateriasPorAula(this.aulaSelected.nombre);
    };
    AsistenciaModalPage.prototype.getAlumnosRelacionAulaMateria = function () {
        this.alumnos = this.asisProvider.getAlumnosRelacionAulaMateria(this.aulaSelected.nombre, this.materiaSelected.descripcion);
    };
    AsistenciaModalPage.prototype.asistencia = function (alumno) {
        var estaIncluido = this.alumnosAsistencia.indexOf(alumno);
        alumno.asistencia = alumno.asistencia;
        if (estaIncluido != -1) {
            this.alumnosAsistencia.forEach(function (a) {
                if (a == alumno) {
                    a.asistencia = alumno.asistencia;
                }
            });
        }
        else {
            this.alumnosAsistencia.push(alumno);
        }
        this.alumnosAsistencia.forEach(function (a) {
            console.log(a);
        });
    };
    AsistenciaModalPage.prototype.ejecutar = function () {
        if (this.alumnosAsistencia.length > 0) {
            var alumnosFinal_1 = [];
            this.alumnosAsistencia.forEach(function (alumno) {
                var alumnoNew = { nombre: '', apellido: '', asistio: false };
                alumnoNew.nombre = alumno.nombre;
                alumnoNew.apellido = alumno.apellido;
                alumnoNew.asistio = alumno.asistencia;
                alumnosFinal_1.push(alumnoNew);
            });
            var datePipe = this.datePipeCtrl.transform(Date.now(), 'dd-MM-yyyy');
            this.asisProvider.guardarRegistroAsistenciaDelDia(this.aulaSelected.nombre, this.materiaSelected.descripcion, datePipe, alumnosFinal_1);
        }
        this.viewCtrl.dismiss();
    };
    AsistenciaModalPage.prototype.cancelar = function () {
        this.viewCtrl.dismiss();
    };
    AsistenciaModalPage.prototype.showAlertError = function (mensaje) {
        var alert = this.alertCtrl.create({
            title: 'ERROR!',
            subTitle: mensaje,
            buttons: ['OK']
        });
        alert.present();
    };
    AsistenciaModalPage.prototype.showAlerOK = function (mensaje) {
        var alert = this.alertCtrl.create({
            title: 'Info',
            subTitle: mensaje,
            buttons: ['OK']
        });
        alert.present();
    };
    return AsistenciaModalPage;
}());
AsistenciaModalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-asistencia-modal',template:/*ion-inline-start:"C:\Repo_Git\TP_PPS_2C_2017\src\pages\asistencia-modal\asistencia-modal.html"*/'<ion-content padding>\n  <ion-item>\n    <ion-label style="color : rgb(85, 158, 218)">Seleccione Aula y Materia</ion-label>\n  </ion-item>\n  <br>\n  <ion-item>\n    <ion-label style="color : rgb(85, 158, 218)">Aulas</ion-label>\n    <ion-select [(ngModel)]="aulaSelected" (ngModelChange)="getMateriasPorAulaSeleccionada()">\n      <ion-option *ngFor="let a of aulas | async; let i = index" value="a.nombre" [value]="a">{{a.nombre}}</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item>\n    <ion-label style="color : rgb(85, 158, 218)">Materias</ion-label>\n    <ion-select [(ngModel)]="materiaSelected" [disabled]="!aulaSelected" (ngModelChange)="getAlumnosRelacionAulaMateria()">\n      <ion-option *ngFor="let m of materias | async ; let i = index" value="m.descripcion" [value]="m">{{m.descripcion}}</ion-option>\n    </ion-select>\n  </ion-item>\n  <br>\n  <br>\n\n  <ion-list>\n    <ion-list-header *ngIf="alumnos" style="color : rgb(85, 158, 218)">\n        <ion-label style="color : rgb(85, 158, 218); float:right;"><h2>Alumnos</h2></ion-label>\n    </ion-list-header>\n\n    <ion-item *ngFor="let alumno of alumnos | async ; let i = index">\n      <ion-label style="color : rgb(85, 158, 218)">{{ alumno.nombre }} {{ alumno.apellido}}</ion-label>\n      <ion-checkbox [(ngModel)]="alumno.asistencia" (click)="asistencia(alumno)" value="alumno.asistencia"></ion-checkbox>\n    </ion-item>\n  </ion-list>\n\n  <button ion-button (click)="cancelar()">Cancelar</button>\n\n  <button ion-button (click)="ejecutar()" style="float:right;" class="btnEnv" [disabled]="!alumnos">Listo</button>\n\n</ion-content>'/*ion-inline-end:"C:\Repo_Git\TP_PPS_2C_2017\src\pages\asistencia-modal\asistencia-modal.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_asistencia_data_asistencia_data__["a" /* AsistenciDataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["d" /* DatePipe */]])
], AsistenciaModalPage);

//# sourceMappingURL=asistencia-modal.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsistenciDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AsistenciDataProvider = (function () {
    function AsistenciDataProvider(afDB) {
        this.afDB = afDB;
    }
    AsistenciDataProvider.prototype.getAulas = function () {
        return this.afDB.list('Aulas/');
    };
    AsistenciDataProvider.prototype.getMaterias = function () {
        return this.afDB.list('Materias/4A');
    };
    AsistenciDataProvider.prototype.getMateriasPorAula = function (aulaSeleccionada) {
        return this.afDB.list('Materias/' + aulaSeleccionada);
    };
    AsistenciDataProvider.prototype.getAlumnosRelacionAulaMateria = function (aulaSeleccionada, materia) {
        return this.afDB.list('Alumnos/' + aulaSeleccionada + '/' + materia);
    };
    AsistenciDataProvider.prototype.guardarRegistroAsistenciaDelDia = function (aulaSeleccionada, materia, datePipe, listaAlumnos) {
        return this.afDB.database.ref('HistoricoAsistencias/' + aulaSeleccionada + '/' + materia + '/' + datePipe).push(listaAlumnos);
    };
    return AsistenciDataProvider;
}());
AsistenciDataProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__["a" /* AngularFireDatabase */]])
], AsistenciDataProvider);

//# sourceMappingURL=asistencia-data.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return nuevoAlumno; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database_deprecated__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var nuevoAlumno = (function () {
    function nuevoAlumno(formbuilder, navCtrl, alertCtrl, af, modalCtrl, viewCtrl) {
        this.formbuilder = formbuilder;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.af = af;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.options = [
            {
                "name": "Femenino"
            },
            {
                "name": "Masculino"
            }
        ];
        this.nome = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]();
        this.ape = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]();
        this.ma = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]();
        this.sexo1 = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]();
        this.fecha1 = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]();
        this.dni1 = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]();
        this.rForm = formbuilder.group({
            'nome': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].maxLength(25)])],
            'ape': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].maxLength(25)])],
            'ma': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].email])],
            'sexo1': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required],
            'fecha1': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required],
            'dni1': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].maxLength(11)])]
        });
    }
    nuevoAlumno.prototype.ngOnInit = function () {
    };
    nuevoAlumno.prototype.onChange = function () {
        this.sexo = this.sexos.name;
    };
    nuevoAlumno.prototype.addNewAlumn = function () {
        this.nombreInsertado = this.nombre;
        this.apellidoInsertado = this.apellido;
        this.fechaInsertado = this.fecha;
        this.mailInsertado = this.mail;
        this.sexoInsertado = this.sexo;
        this.dniInsertado = this.dni;
        if (this.nombreInsertado == "" || this.nombreInsertado == undefined || this.dniInsertado == "" || this.dniInsertado == undefined || this.fechaInsertado == undefined || this.apellidoInsertado == undefined || this.apellidoInsertado == "" || this.sexoInsertado == undefined || this.sexoInsertado == "" || this.mailInsertado == undefined || this.mailInsertado == "" || this.fechaInsertado == "") {
            var alert_1 = this.alertCtrl.create({
                title: 'ADVERTENCIA!',
                subTitle: 'Debe ingresar todos los campos!',
                buttons: ['OK']
            });
            alert_1.present();
        }
        else {
            this.af.list("/Alumno/").push({
                nombre: this.nombreInsertado,
                apellido: this.apellidoInsertado,
                fechaNacimiento: this.fechaInsertado,
                sexo: this.sexoInsertado,
                dni: this.dniInsertado,
                mail: this.mailInsertado
            });
            this.nombre = "";
            this.apellido = "";
            this.fecha = "";
            this.mail = "";
            this.sexo = "";
            this.dni = "";
            this.ngOnInit();
        }
    };
    nuevoAlumno.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return nuevoAlumno;
}());
nuevoAlumno = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-nuevoAlumno',template:/*ion-inline-start:"C:\Repo_Git\TP_PPS_2C_2017\src\pages\nuevoAlumno\nuevoAlumno.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n    <ion-title>\n\n      ALTA ALUMNOS\n\n    </ion-title>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="dismiss()">\n\n        <span ion-text color="primary" showWhen="ios,androd,windows">Cancelar</span>\n\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n<form [formGroup]="rForm">\n\n  <ion-list>\n\n    <ion-item>\n\n    <ion-input type="text"    [formControl]="rForm.controls.nome" [(ngModel)]="nombre" placeholder="Ingrese nombre"></ion-input>\n\n    </ion-item>\n\n     <ion-item>\n\n    <ion-input type="text"  [formControl]="rForm.controls.ape"  [(ngModel)]="apellido" placeholder="Ingrese apellido"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n    <ion-input type="number"  [formControl]="rForm.controls.dni1" [(ngModel)]="dni" placeholder="Ingrese DNI"></ion-input>\n\n    </ion-item>\n\n     <ion-item>\n\n    <ion-label>Fecha de Nacimiento</ion-label>\n\n    <ion-datetime displayFormat="DD MMM YYYY" doneText="Aceptar" cancelText="Cancelar"  [formControl]="rForm.controls.fecha1" [(ngModel)]="fecha"></ion-datetime>\n\n    </ion-item> \n\n    <ion-item>\n\n    <ion-input type="text"  [formControl]="rForm.controls.ma" [(ngModel)]="mail" placeholder="Ingrese correo"></ion-input>\n\n    </ion-item>\n\n     <ion-item>\n\n    <ion-label>Seleccione un sexo</ion-label>\n\n    <ion-select cancelText="Cancelar"  [formControl]="rForm.controls.sexo1"   [(ngModel)]="sexos" (ionChange)="onChange();">\n\n    <ion-option [value]="item" *ngFor="let item of options">{{item.name}}</ion-option> \n\n    </ion-select> \n\n    </ion-item>  \n\n  </ion-list>\n\n\n\n</form>\n\n\n\n\n\n<br>\n\n    <ion-buttons>\n\n      <button full [disabled]="rForm.invalid" (click)="addNewAlumn()" ion-button icon-only>\n\n        <ion-icon name="checkmark-circle-outline"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n</ion-content>'/*ion-inline-end:"C:\Repo_Git\TP_PPS_2C_2017\src\pages\nuevoAlumno\nuevoAlumno.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database_deprecated__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ViewController */]])
], nuevoAlumno);

//# sourceMappingURL=nuevoAlumno.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return editarAlumno; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_deprecated__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var editarAlumno = (function () {
    function editarAlumno(formbuilder, navCtrl, af, modalCtrl, navParams, viewCtrl) {
        this.formbuilder = formbuilder;
        this.navCtrl = navCtrl;
        this.af = af;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.options = [
            {
                "name": "Femenino"
            },
            {
                "name": "Masculino"
            }
        ];
        var datos = this.navParams.get('lista');
        this.lista = datos;
        this.sexos = this.lista.sexo;
        this.nome = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]();
        this.ape = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]();
        this.ma = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]();
        this.sexo1 = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]();
        this.fecha1 = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]();
        this.dni1 = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]();
        this.rForm = formbuilder.group({
            'nome': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].maxLength(25)])],
            'ape': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].maxLength(25)])],
            'ma': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].email])],
            'sexo1': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required],
            'fecha1': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required],
            'dni1': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].maxLength(11)])]
        });
    }
    editarAlumno.prototype.ngOnInit = function () {
    };
    editarAlumno.prototype.onChange = function () {
        this.sexo = this.lista.sexo;
    };
    editarAlumno.prototype.modify = function (lista) {
        __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.database().ref('/Alumno/' + lista.$key).set({
            nombre: lista.nombre,
            apellido: lista.apellido,
            dni: lista.dni,
            mail: lista.mail,
            fechaNacimiento: lista.fechaNacimiento,
            sexo: lista.sexo
        });
        this.ngOnInit();
        this.dismiss();
    };
    editarAlumno.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return editarAlumno;
}());
editarAlumno = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-editarAlumno',template:/*ion-inline-start:"C:\Repo_Git\TP_PPS_2C_2017\src\pages\editarAlumno\editarAlumno.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n    <ion-title>\n\n      EDITAR ALUMNO\n\n    </ion-title>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="dismiss()">\n\n        <span ion-text color="primary" showWhen="ios,androd,windows">Cancelar</span>\n\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n<form [formGroup]="rForm">\n\n  <ion-list>\n\n<ion-item>\n\n    <ion-input type="text"  [formControl]="rForm.controls.nome" [(ngModel)]="lista.nombre" placeholder="Ingrese nombre"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n    <ion-input type="text" [formControl]="rForm.controls.ape"  [(ngModel)]="lista.apellido" placeholder="Ingrese apellido"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n    <ion-input type="number" [formControl]="rForm.controls.dni1" [(ngModel)]="lista.dni" placeholder="Ingrese DNI"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n    <ion-label>Fecha de Nacimiento</ion-label>\n\n    <ion-datetime displayFormat="DD MMM YYYY" doneText="Aceptar"   [formControl]="rForm.controls.fecha1" cancelText="Cancelar" [(ngModel)]="lista.fechaNacimiento"></ion-datetime>\n\n    </ion-item>\n\n    <ion-item>\n\n    <ion-input type="text"  [formControl]="rForm.controls.ma" [(ngModel)]="lista.mail" placeholder="Ingrese correo"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n    <ion-label>Seleccione un sexo</ion-label>\n\n    <ion-select cancelText="Cancelar" [formControl]="rForm.controls.sexo1"   [(ngModel)]="lista.sexo" (ionChange)="onChange();">\n\n    <ion-option  *ngFor="let item of options">{{item.name}}</ion-option> \n\n    </ion-select> \n\n    </ion-item>\n\n</ion-list>\n\n\n\n</form>\n\n<br>\n\n    <ion-buttons>\n\n      <button full [disabled]="rForm.invalid"  (click)="modify(lista)" ion-button icon-only>\n\n        <ion-icon name="checkmark-circle-outline"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n</ion-content>'/*ion-inline-end:"C:\Repo_Git\TP_PPS_2C_2017\src\pages\editarAlumno\editarAlumno.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_deprecated__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
], editarAlumno);

//# sourceMappingURL=editarAlumno.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EncuestaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_deprecated__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__encuesta_enviar_encuesta_enviar__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_encuesta_data_encuesta_data__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EncuestaPage = (function () {
    function EncuestaPage(navCtrl, navParams, afDB, alertCtrl, afAuth, modalCtrl, eDataProvider, formBuilder) {
        //this.creadorDelaEncuesta = this.getUser();
        //console.log(this.creadorDelaEncuesta);   
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afDB = afDB;
        this.alertCtrl = alertCtrl;
        this.afAuth = afAuth;
        this.modalCtrl = modalCtrl;
        this.eDataProvider = eDataProvider;
        this.formBuilder = formBuilder;
        this.encuesta = { autor: '', enviada: false, preguntas: [{}], destinatarios: [{}], fechaIngreso: '', fechaEgreso: '' };
        this.opcionesSelect = [{ valor: '1' }, { valor: '2' }, { valor: '3' }];
        this.creadorDelaEncuesta = '';
        this.myForm = formBuilder.group({
            nombreEncuesta: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].required])],
            fechaIngreso: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].required])],
            fechaEgreso: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].required])],
            preguntaTexto: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].required])],
            tipoRespuesta: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].required])],
            cantidadOpciones: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].required])],
            opciones: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].required])],
        });
    }
    EncuestaPage.prototype.getUser = function () {
        return this.afAuth.auth.currentUser.email;
    };
    EncuestaPage.prototype.trackByIndex = function (index, value) {
        return index;
    };
    EncuestaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EncuestaPage');
        console.log(this.encuesta);
    };
    EncuestaPage.prototype.siguiente = function () {
        if (this.encuesta.fechaEgreso <= this.encuesta.fechaIngreso) {
            this.showAlertError("La fecha de egreso debe ser mayor a la fecha de ingreso");
        }
        else {
            var jsonEncuesta = { encuesta: this.encuesta };
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__encuesta_enviar_encuesta_enviar__["a" /* EncuestaEnviarPage */], jsonEncuesta);
        }
    };
    EncuestaPage.prototype.agregarPregunta = function () {
        // this.encuesta.preguntas.push({texto:''});
        this.encuesta.preguntas.push({ isOpen: false });
    };
    EncuestaPage.prototype.tipoRespuestaSelected = function (pregunta) {
        if (pregunta.tipoRespuesta == 'OPINION') {
            pregunta.opciones = [];
        }
        else if (pregunta.tipoRespuesta == 'SI-NO') {
            pregunta.opciones = [];
        }
    };
    EncuestaPage.prototype.generarItemsOpciones = function (pregunta) {
        console.log(JSON.stringify(pregunta));
        pregunta.opciones = [];
        for (var i = 1; i <= pregunta.cantidadOpciones; i++) {
            pregunta.opciones.push("");
        }
    };
    EncuestaPage.prototype.eliminarPregunta = function (pregunta) {
        var preguntasAux = [];
        this.encuesta.preguntas.forEach(function (preguntaItem) {
            if (preguntaItem != pregunta) {
                preguntasAux.push(preguntaItem);
            }
        });
        this.encuesta.preguntas = preguntasAux;
    };
    EncuestaPage.prototype.showAlertError = function (mensaje) {
        var alert = this.alertCtrl.create({
            title: 'ERROR!',
            subTitle: mensaje,
            buttons: ['OK']
        });
        alert.present();
    };
    EncuestaPage.prototype.showAlerOK = function (mensaje) {
        var alert = this.alertCtrl.create({
            title: 'Info',
            subTitle: mensaje,
            buttons: ['OK']
        });
        alert.present();
    };
    return EncuestaPage;
}());
EncuestaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-encuesta',template:/*ion-inline-start:"C:\Repo_Git\TP_PPS_2C_2017\src\pages\encuesta\encuesta.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Nueva Encuesta</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="fondo">\n\n\n\n  <ion-fab top right edge>\n\n    <button ion-fab mini>\n\n      <ion-icon name="add"></ion-icon>\n\n    </button>\n\n    <ion-fab-list>\n\n      <button ion-fab (click)="agregarPregunta()">\n\n        <ion-icon name="md-help"></ion-icon>\n\n      </button>\n\n    </ion-fab-list>\n\n  </ion-fab>\n\n\n\n  <div [formGroup]="myForm">\n\n    <!-- AGREGO EL NOMBRE DE LA ENCUESTA -->\n\n    <ion-card>\n\n      <ion-card-header>\n\n        <div style="color : rgb(26, 18, 92)">Datos:</div>\n\n      </ion-card-header>\n\n      <ion-card-content>\n\n        <ion-item>\n\n          <ion-input formControlName="nombreEncuesta" type="text" placeholder="Nombre de la Encuesta" [(ngModel)]="encuesta.nombreEncuesta"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label style="color : rgb(85, 158, 218)">Fecha Ingreso</ion-label>\n\n          <ion-datetime formControlName="fechaIngreso" displayFormat="MM/DD/YYYY" [(ngModel)]="encuesta.fechaIngreso" placeholder="dia/mes/año"></ion-datetime>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label style="color : rgb(85, 158, 218)">Fecha Egreso</ion-label>\n\n          <ion-datetime formControlName="fechaEgreso" displayFormat="MM/DD/YYYY" [(ngModel)]="encuesta.fechaEgreso" placeholder="dia/mes/año"></ion-datetime>\n\n        </ion-item>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n    <!-- AGREGO LOS CAMPOS DE LA PREGUNTA -->\n\n    <div *ngFor="let pregunta of encuesta.preguntas; let i = index">\n\n      <ion-card>\n\n        <ion-card-header (click)="pregunta.isOpen = !pregunta.isOpen">\n\n          <ion-icon name="trash" style="float:right;" (click)="eliminarPregunta(pregunta)"></ion-icon>\n\n          <div style="color : rgb(26, 18, 92)">Pregunta {{i+1}}</div>\n\n        </ion-card-header>\n\n\n\n        <ion-card-content [hidden]="pregunta.isOpen">\n\n          <ion-item>\n\n            <ion-input formControlName="preguntaTexto" placeholder="Ingrese la pregunta" type="text" [(ngModel)]="pregunta.texto"></ion-input>\n\n          </ion-item>\n\n          <br>\n\n          <div style="color : rgb(26, 18, 92)">\n\n            <h2>Tipo de respuesta:</h2>\n\n          </div>\n\n\n\n          <ion-list formControlName="tipoRespuesta" radio-group  [(ngModel)]="pregunta.tipoRespuesta">\n\n\n\n            <ion-item>\n\n              <ion-label style="color : rgb(85, 158, 218)">Opinion</ion-label>\n\n              <ion-radio value="OPINION" (click)="tipoRespuestaSelected(pregunta)"></ion-radio>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n              <ion-label style="color : rgb(85, 158, 218)">si/no</ion-label>\n\n              <ion-radio value="SI-NO" (click)="tipoRespuestaSelected(pregunta)"></ion-radio>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n              <ion-label style="color : rgb(85, 158, 218)">Opciones</ion-label>\n\n              <ion-radio value="OPCIONES"></ion-radio>\n\n            </ion-item>\n\n\n\n            <ion-item [hidden]="pregunta.tipoRespuesta != \'OPCIONES\'">\n\n              <ion-label style="color : rgb(85, 158, 218)">Mis Opciones</ion-label>\n\n              <ion-select formControlName="cantidadOpciones" [(ngModel)]="pregunta.cantidadOpciones" (ngModelChange)="generarItemsOpciones(pregunta)">\n\n                <ion-option *ngFor="let op of opcionesSelect">{{op.valor}}</ion-option>\n\n              </ion-select>\n\n            </ion-item>\n\n\n\n            <ion-item [hidden]="pregunta.tipoRespuesta != \'OPCIONES\'">\n\n              <ion-item *ngFor="let itemOp of pregunta.opciones; let i = index; trackBy:trackByIndex">\n\n                <ion-label style="color : rgb(85, 158, 218)">{{i+1}}-</ion-label>\n\n                <ion-input formControlName="opciones" type="text" [(ngModel)]="pregunta.opciones[i]"></ion-input>\n\n              </ion-item>\n\n            </ion-item>\n\n\n\n          </ion-list>\n\n\n\n        </ion-card-content>\n\n      </ion-card>\n\n    </div>\n\n  </div>\n\n    <!--<button ion-button  (click)="guardarEncuesta()" round><ion-icon  name="md-archive"></ion-icon></button>-->\n\n    <button ion-button style="float:right;" class="btnEnv" (click)="siguiente()" round [disabled]="myForm.invalid">Siguiente</button>\n\n  \n\n</ion-content>'/*ion-inline-end:"C:\Repo_Git\TP_PPS_2C_2017\src\pages\encuesta\encuesta.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_deprecated__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_5__providers_encuesta_data_encuesta_data__["a" /* EncuestaDataProvider */], __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */]])
], EncuestaPage);

//# sourceMappingURL=encuesta.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EncuestaEnviarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_deprecated__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_encuesta_data_encuesta_data__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__encuesta_detalle_encuesta_detalle__ = __webpack_require__(348);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EncuestaEnviarPage = (function () {
    function EncuestaEnviarPage(navCtrl, navParams, viewCtrl, afDB, alertCtrl, eDataProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.afDB = afDB;
        this.alertCtrl = alertCtrl;
        this.eDataProvider = eDataProvider;
        this.encuesta = { enviada: false, destinatarios: [{}] };
        this.aulas = [{ descripcion: '4A' }, { descripcion: '4B' }, { descripcion: '4C' }, { descripcion: '4D' }];
        this.destinatarios = [];
        this.inhabilitar = true;
        console.log(this.destinatarios);
    }
    EncuestaEnviarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EncuestaEnviarPage');
        this.encuesta = this.navParams.get('encuesta');
        console.log(this.encuesta);
    };
    EncuestaEnviarPage.prototype.siguiente = function () {
        this.encuesta.destinatarios = this.destinatarios;
        var jsonEncuesta = { encuesta: this.encuesta };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__encuesta_detalle_encuesta_detalle__["a" /* EncuestaDetallePage */], jsonEncuesta);
    };
    EncuestaEnviarPage.prototype.verificarDestinatarios = function () {
        if (this.destinatarios.length > 0) {
            this.inhabilitar = false;
            return false;
        }
        return true;
    };
    return EncuestaEnviarPage;
}());
EncuestaEnviarPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-encuesta-enviar',template:/*ion-inline-start:"C:\Repo_Git\TP_PPS_2C_2017\src\pages\encuesta-enviar\encuesta-enviar.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Destinatarios</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-item>\n    <ion-label style="color : rgb(85, 158, 218)">Aulas</ion-label>\n    <ion-select [(ngModel)]="destinatarios" multiple="true">\n      <ion-option *ngFor="let a of aulas" value="a.descripcion" [value]="a">{{a.descripcion}}</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <br>\n\n  <ion-item>\n    <div style="color : rgb(26, 18, 92)">Destinatarios:</div>\n  </ion-item>\n\n  <ion-item *ngFor="let d of destinatarios">\n    <div style="color : rgb(26, 18, 92)">{{d.descripcion}}</div>\n  </ion-item>\n\n  <br><br>\n  <!--<button ion-button (click)="cerrarModal()">Guardar</button>-->\n\n  <!--<button ion-button (click)="mostrarDestinatarios()">mostrarOP</button>-->\n\n  <button ion-button (click)="siguiente()" style="float:right;" class="btnEnv" round  [disabled]="verificarDestinatarios()">Siguiente</button>\n\n</ion-content>'/*ion-inline-end:"C:\Repo_Git\TP_PPS_2C_2017\src\pages\encuesta-enviar\encuesta-enviar.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_deprecated__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_encuesta_data_encuesta_data__["a" /* EncuestaDataProvider */]])
], EncuestaEnviarPage);

//# sourceMappingURL=encuesta-enviar.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EncuestaDetallePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_encuesta_data_encuesta_data__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__encuesta_home_encuesta_home__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EncuestaDetallePage = (function () {
    function EncuestaDetallePage(navCtrl, navParams, eDataProvider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.eDataProvider = eDataProvider;
        this.alertCtrl = alertCtrl;
        this.encuesta = { enviada: false };
    }
    EncuestaDetallePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EncuestaDetallePage');
        this.encuesta = this.navParams.get('encuesta');
        console.log(this.encuesta);
    };
    EncuestaDetallePage.prototype.enviarEncuesta = function () {
        var _this = this;
        this.enviarNewEncuestaYGuardar().then(function (res) {
            _this.showAlerOK("La encuesta se envio exitosamente");
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__encuesta_home_encuesta_home__["a" /* EncuestaHomePage */]);
        });
    };
    EncuestaDetallePage.prototype.enviarNewEncuestaYGuardar = function () {
        this.encuesta.enviada = true;
        return this.eDataProvider.saveEncuestaInFB(this.encuesta);
    };
    EncuestaDetallePage.prototype.guardarEncuesta = function () {
        var _this = this;
        //this.encuesta.autor = this.creadorDelaEncuesta;
        this.encuesta.enviada = false;
        this.saveEncuestaInFB().then(function (res) {
            _this.showAlerOK("La encuesta se guardo exitosamente");
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__encuesta_home_encuesta_home__["a" /* EncuestaHomePage */]);
        });
    };
    EncuestaDetallePage.prototype.saveEncuestaInFB = function () {
        return this.eDataProvider.saveEncuestaInFB(this.encuesta);
    };
    EncuestaDetallePage.prototype.showAlerOK = function (mensaje) {
        var alert = this.alertCtrl.create({
            title: 'Info',
            subTitle: mensaje,
            buttons: ['OK']
        });
        alert.present();
    };
    EncuestaDetallePage.prototype.showAlertError = function (mensaje) {
        var alert = this.alertCtrl.create({
            title: 'ERROR!',
            subTitle: mensaje,
            buttons: ['OK']
        });
        alert.present();
    };
    return EncuestaDetallePage;
}());
EncuestaDetallePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-encuesta-detalle',template:/*ion-inline-start:"C:\Repo_Git\TP_PPS_2C_2017\src\pages\encuesta-detalle\encuesta-detalle.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Detalle de la Encuesta</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-label style="color : rgb(85, 158, 218)">{{encuesta.nombreEncuesta}}</ion-label>\n    </ion-card-header>\n\n    <ion-card-content>\n      <ion-label style="color : rgb(85, 158, 218)">Preguntas:</ion-label>\n      <ion-item *ngFor="let p of encuesta.preguntas; let i = index">\n        <ion-label style="color : rgb(128, 153, 173)">{{i+1}}-{{ p.texto}}</ion-label>\n      </ion-item>\n\n      <ion-label style="color : rgb(85, 158, 218)">Destinatarios:</ion-label>\n      <ion-item *ngFor="let d of encuesta.destinatarios; let i = index">\n        <ion-label style="color : rgb(128, 153, 173)">{{d.descripcion}}</ion-label>\n      </ion-item>\n\n    </ion-card-content>\n  </ion-card>\n\n  <button ion-button  (click)="guardarEncuesta()" round><ion-icon  name="md-archive"></ion-icon></button>\n  <button ion-button style="float:right;" class="btnEnv" (click)="enviarEncuesta()" round>Enviar</button>\n  \n\n</ion-content>\n'/*ion-inline-end:"C:\Repo_Git\TP_PPS_2C_2017\src\pages\encuesta-detalle\encuesta-detalle.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_encuesta_data_encuesta_data__["a" /* EncuestaDataProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], EncuestaDetallePage);

//# sourceMappingURL=encuesta-detalle.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdmProf; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nuevoAdmProf_nuevoAdmProf__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editarAdmProf_editarAdmProf__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database_deprecated__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdmProf = (function () {
    function AdmProf(navCtrl, af, modalCtrl) {
        this.navCtrl = navCtrl;
        this.af = af;
        this.modalCtrl = modalCtrl;
        this.itemsAdm = af.list('/Administrativos/');
        this.itemsProf = af.list('/Profesores/');
        this.pet = "puppies";
    }
    AdmProf.prototype.ngOnInit = function () {
    };
    AdmProf.prototype.presentModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__nuevoAdmProf_nuevoAdmProf__["a" /* nuevoAdmProf */]);
        modal.present();
    };
    AdmProf.prototype.deleteProf = function (boca) {
        this.af.list('/Profesores/').remove(boca.$key);
        this.ngOnInit();
    };
    AdmProf.prototype.delete = function (boca) {
        this.af.list('/Administrativos/').remove(boca.$key);
        this.ngOnInit();
    };
    AdmProf.prototype.modifyProf = function (boca) {
        var puesto = "PROFESOR";
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__editarAdmProf_editarAdmProf__["a" /* editarAdmProf */], { lista: boca, puestoPersona: puesto });
        modal.present();
    };
    AdmProf.prototype.modify = function (boca) {
        var puesto = "ADMINISTRATIVO";
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__editarAdmProf_editarAdmProf__["a" /* editarAdmProf */], { lista: boca, puestoPersona: puesto });
        modal.present();
    };
    return AdmProf;
}());
AdmProf = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-admProf',template:/*ion-inline-start:"C:\Repo_Git\TP_PPS_2C_2017\src\pages\admProf\admProf.html"*/'<ion-content padding>\n\n       <button ion-button block (click)="presentModal()"> <ion-icon name="add">  Alta</ion-icon></button>\n\n\n\n<br><br><br>\n\n<b><h4 style="text-align: center">Listas</h4></b>\n\n\n\n<div padding>\n\n  <ion-segment [(ngModel)]="pet">\n\n    <ion-segment-button value="puppies">\n\n      Administrativos\n\n    </ion-segment-button>\n\n    <ion-segment-button value="kittens">\n\n      Profesores\n\n    </ion-segment-button>\n\n  </ion-segment>\n\n</div>\n\n\n\n<div [ngSwitch]="pet">\n\n  <ion-list *ngSwitchCase="\'puppies\'">\n\n   \n\n<ion-item *ngFor="let boca of itemsAdm | async; let i = index" style=" text-align: left">\n\n<ion-thumbnail item-start style="margin:12px 0px 0px" >\n\n<img style="width: 50px;height:50px;"  src="assets/icono.jpg">\n\n</ion-thumbnail>\n\n<h2 style="color: black">{{boca.nombre}}</h2>\n\n<p style="color: black"> {{boca.apellido}}</p>\n\n <button  style="color: black" ion-button clear item-end icon-only (click)="modify(boca)">\n\n  <ion-icon name="create" ></ion-icon>\n\n</button>\n\n <button  style="color: black" ion-button clear item-end icon-only (click)="delete(boca)">\n\n  <ion-icon name="trash"></ion-icon>\n\n</button>\n\n    \n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <ion-list *ngSwitchCase="\'kittens\'">\n\n    \n\n<ion-item *ngFor="let boca of itemsProf | async; let i = index" style=" text-align: left">\n\n<ion-thumbnail item-start style="margin:12px 0px 0px" >\n\n<img style="width: 50px;height:50px;"  src="assets/icono.jpg">\n\n</ion-thumbnail>\n\n<h2 style="color: black">{{boca.nombre}}</h2>\n\n<p style="color: black"> {{boca.apellido}}</p>\n\n <button  style="color: black" ion-button clear item-end icon-only (click)="modifyProf(boca)">\n\n  <ion-icon name="create" ></ion-icon>\n\n</button>\n\n <button  style="color: black" ion-button clear item-end icon-only (click)="deleteProf(boca)">\n\n  <ion-icon name="trash"></ion-icon>\n\n</button>\n\n    \n\n    </ion-item>\n\n  </ion-list>\n\n</div>\n\n\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Repo_Git\TP_PPS_2C_2017\src\pages\admProf\admProf.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database_deprecated__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
], AdmProf);

//# sourceMappingURL=admProf.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return nuevoAdmProf; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database_deprecated__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var nuevoAdmProf = (function () {
    function nuevoAdmProf(formbuilder, navCtrl, alertCtrl, af, modalCtrl, viewCtrl) {
        this.formbuilder = formbuilder;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.af = af;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.options = [
            {
                "name": "Femenino"
            },
            {
                "name": "Masculino"
            }
        ];
        this.options1 = [
            {
                "name": "Administrativos"
            },
            {
                "name": "Profesores"
            }
        ];
        this.nome = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]();
        this.ape = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]();
        this.ma = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]();
        this.sexo1 = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]();
        this.fecha1 = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]();
        this.alta1 = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]();
        this.dni1 = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]();
        this.rForm = formbuilder.group({
            'nome': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].maxLength(25)])],
            'ape': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].maxLength(25)])],
            'ma': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].email])],
            'sexo1': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required],
            'alta1': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required],
            'fecha1': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required],
            'dni1': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].maxLength(11)])]
        });
    }
    nuevoAdmProf.prototype.ngOnInit = function () {
    };
    nuevoAdmProf.prototype.onChange = function () {
        this.sexo = this.sexos.name;
    };
    nuevoAdmProf.prototype.onChangeTwo = function () {
        this.alta = this.altas.name;
    };
    nuevoAdmProf.prototype.addNewAlumn = function () {
        this.nombreInsertado = this.nombre;
        this.apellidoInsertado = this.apellido;
        this.fechaInsertado = this.fecha;
        this.mailInsertado = this.mail;
        this.sexoInsertado = this.sexo;
        this.dniInsertado = this.dni;
        if (this.nombreInsertado == "" || this.nombreInsertado == undefined || this.dniInsertado == "" || this.dniInsertado == undefined || this.fechaInsertado == undefined || this.apellidoInsertado == undefined || this.apellidoInsertado == "" || this.sexoInsertado == undefined || this.sexoInsertado == "" || this.mailInsertado == undefined || this.mailInsertado == "" || this.fechaInsertado == "") {
            var alert_1 = this.alertCtrl.create({
                title: 'ADVERTENCIA!',
                subTitle: 'Debe ingresar todos los campos!',
                buttons: ['OK']
            });
            alert_1.present();
        }
        else {
            if (this.alta == "Administrativos") {
                this.af.list("/Administrativos/").push({
                    nombre: this.nombreInsertado,
                    apellido: this.apellidoInsertado,
                    fechaNacimiento: this.fechaInsertado,
                    sexo: this.sexoInsertado,
                    dni: this.dniInsertado,
                    mail: this.mailInsertado
                });
            }
            else {
                this.af.list("/Profesores/").push({
                    nombre: this.nombreInsertado,
                    apellido: this.apellidoInsertado,
                    fechaNacimiento: this.fechaInsertado,
                    sexo: this.sexoInsertado,
                    dni: this.dniInsertado,
                    mail: this.mailInsertado
                });
            }
            this.nombre = "";
            this.apellido = "";
            this.fecha = "";
            this.mail = "";
            this.sexo = "";
            this.dni = "";
            this.alta = "";
            this.ngOnInit();
        }
    };
    nuevoAdmProf.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return nuevoAdmProf;
}());
nuevoAdmProf = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-nuevoAdmProf',template:/*ion-inline-start:"C:\Repo_Git\TP_PPS_2C_2017\src\pages\nuevoAdmProf\nuevoAdmProf.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n    <ion-title>\n\n      ALTA\n\n    </ion-title>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="dismiss()">\n\n        <span ion-text color="primary" showWhen="ios,androd,windows">Cancelar</span>\n\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n<form [formGroup]="rForm">\n\n  <ion-list>\n\n     <ion-item>\n\n    <ion-label>Seleccione a quien dar alta</ion-label>\n\n    <ion-select cancelText="Cancelar"  [formControl]="rForm.controls.alta1"   [(ngModel)]="altas" (ionChange)="onChangeTwo();">\n\n    <ion-option [value]="item" *ngFor="let item of options1">{{item.name}}</ion-option> \n\n    </ion-select> \n\n     </ion-item>\n\n\n\n    <ion-item>\n\n    <ion-input type="text"    [formControl]="rForm.controls.nome" [(ngModel)]="nombre" placeholder="Ingrese nombre"></ion-input>\n\n    </ion-item>\n\n     <ion-item>\n\n    <ion-input type="text"  [formControl]="rForm.controls.ape"  [(ngModel)]="apellido" placeholder="Ingrese apellido"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n    <ion-input type="number"  [formControl]="rForm.controls.dni1" [(ngModel)]="dni" placeholder="Ingrese DNI"></ion-input>\n\n    </ion-item>\n\n     <ion-item>\n\n    <ion-label>Fecha de Nacimiento</ion-label>\n\n    <ion-datetime displayFormat="DD MMM YYYY" doneText="Aceptar" cancelText="Cancelar"  [formControl]="rForm.controls.fecha1" [(ngModel)]="fecha"></ion-datetime>\n\n    </ion-item> \n\n    <ion-item>\n\n    <ion-input type="text"  [formControl]="rForm.controls.ma" [(ngModel)]="mail" placeholder="Ingrese correo"></ion-input>\n\n    </ion-item>\n\n     <ion-item>\n\n    <ion-label>Seleccione un sexo</ion-label>\n\n    <ion-select cancelText="Cancelar"  [formControl]="rForm.controls.sexo1"   [(ngModel)]="sexos" (ionChange)="onChange();">\n\n    <ion-option [value]="item" *ngFor="let item of options">{{item.name}}</ion-option> \n\n    </ion-select> \n\n    </ion-item>  \n\n  </ion-list>\n\n\n\n</form>\n\n\n\n\n\n<br>\n\n    <ion-buttons>\n\n      <button full [disabled]="rForm.invalid" (click)="addNewAlumn()" ion-button icon-only>\n\n        <ion-icon name="checkmark-circle-outline"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n</ion-content>'/*ion-inline-end:"C:\Repo_Git\TP_PPS_2C_2017\src\pages\nuevoAdmProf\nuevoAdmProf.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database_deprecated__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ViewController */]])
], nuevoAdmProf);

//# sourceMappingURL=nuevoAdmProf.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return editarAdmProf; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_deprecated__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var editarAdmProf = (function () {
    function editarAdmProf(formbuilder, navCtrl, af, modalCtrl, navParams, viewCtrl) {
        this.formbuilder = formbuilder;
        this.navCtrl = navCtrl;
        this.af = af;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.options = [
            {
                "name": "Femenino"
            },
            {
                "name": "Masculino"
            }
        ];
        var datos = this.navParams.get('lista');
        var puestoPersona = this.navParams.get('puestoPersona');
        this.lista = datos;
        this.puesto = puestoPersona;
        this.sexos = this.lista.sexo;
        this.nome = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]();
        this.ape = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]();
        this.ma = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]();
        this.sexo1 = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]();
        this.fecha1 = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]();
        this.dni1 = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]();
        this.rForm = formbuilder.group({
            'nome': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].maxLength(25)])],
            'ape': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].maxLength(25)])],
            'ma': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].email])],
            'sexo1': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required],
            'fecha1': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required],
            'dni1': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].maxLength(11)])]
        });
    }
    editarAdmProf.prototype.ngOnInit = function () {
    };
    editarAdmProf.prototype.onChange = function () {
        this.sexo = this.lista.sexo;
    };
    editarAdmProf.prototype.modify = function (lista) {
        if (this.puesto == "ADMINISTRATIVO") {
            __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.database().ref('/Administrativos/' + lista.$key).set({
                nombre: lista.nombre,
                apellido: lista.apellido,
                dni: lista.dni,
                mail: lista.mail,
                fechaNacimiento: lista.fechaNacimiento,
                sexo: lista.sexo
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.database().ref('/Profesores/' + lista.$key).set({
                nombre: lista.nombre,
                apellido: lista.apellido,
                dni: lista.dni,
                mail: lista.mail,
                fechaNacimiento: lista.fechaNacimiento,
                sexo: lista.sexo
            });
        }
        this.ngOnInit();
        this.dismiss();
    };
    editarAdmProf.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return editarAdmProf;
}());
editarAdmProf = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-editarAdmProf',template:/*ion-inline-start:"C:\Repo_Git\TP_PPS_2C_2017\src\pages\editarAdmProf\editarAdmProf.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n    <ion-title>\n\n      EDITAR {{puesto}}\n\n    </ion-title>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="dismiss()">\n\n        <span ion-text color="primary" showWhen="ios,androd,windows">Cancelar</span>\n\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n<form [formGroup]="rForm">\n\n  <ion-list>\n\n<ion-item>\n\n    <ion-input type="text"  [formControl]="rForm.controls.nome" [(ngModel)]="lista.nombre" placeholder="Ingrese nombre"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n    <ion-input type="text" [formControl]="rForm.controls.ape"  [(ngModel)]="lista.apellido" placeholder="Ingrese apellido"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n    <ion-input type="number" [formControl]="rForm.controls.dni1" [(ngModel)]="lista.dni" placeholder="Ingrese DNI"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n    <ion-label>Fecha de Nacimiento</ion-label>\n\n    <ion-datetime displayFormat="DD MMM YYYY" doneText="Aceptar"   [formControl]="rForm.controls.fecha1" cancelText="Cancelar" [(ngModel)]="lista.fechaNacimiento"></ion-datetime>\n\n    </ion-item>\n\n    <ion-item>\n\n    <ion-input type="text"  [formControl]="rForm.controls.ma" [(ngModel)]="lista.mail" placeholder="Ingrese correo"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n    <ion-label>Seleccione un sexo</ion-label>\n\n    <ion-select cancelText="Cancelar" [formControl]="rForm.controls.sexo1"   [(ngModel)]="lista.sexo" (ionChange)="onChange();">\n\n    <ion-option  *ngFor="let item of options">{{item.name}}</ion-option> \n\n    </ion-select> \n\n    </ion-item>\n\n</ion-list>\n\n\n\n</form>\n\n<br>\n\n    <ion-buttons>\n\n      <button full [disabled]="rForm.invalid"  (click)="modify(lista)" ion-button icon-only>\n\n        <ion-icon name="checkmark-circle-outline"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n</ion-content>'/*ion-inline-end:"C:\Repo_Git\TP_PPS_2C_2017\src\pages\editarAdmProf\editarAdmProf.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_deprecated__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
], editarAdmProf);

//# sourceMappingURL=editarAdmProf.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CodigoAlumnos; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_deprecated__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__ = __webpack_require__(353);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CodigoAlumnos = (function () {
    function CodigoAlumnos(barcodeScanner, navCtrl, af, modalCtrl) {
        // this.items = af.list('/Materias/');
        this.barcodeScanner = barcodeScanner;
        this.navCtrl = navCtrl;
        this.af = af;
        this.modalCtrl = modalCtrl;
        this.qrData = "Aula: 3C - Materias: Laboratorio 3, Programación 3, Matemática I, Base de Datos" +
            "  Aula: 4C - Materias: Laboratorio 4, Programación 4, Investigación Operativa";
        this.createdCode = null;
        this.scannedCode = null;
        // this.ref = firebase.database().ref('/Materias/').child('3C').child('lab3');
        // this.createdCode = this.items.$ref;
        this.createCode();
        console.log(this.createdCode);
    }
    CodigoAlumnos.prototype.createCode = function () {
        this.createdCode = this.qrData;
    };
    CodigoAlumnos.prototype.ngOnInit = function () {
    };
    CodigoAlumnos.prototype.scanCode = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            _this.scannedCode = barcodeData.text;
        }, function (err) {
            console.log('Error: ', err);
        });
    };
    return CodigoAlumnos;
}());
CodigoAlumnos = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-codigoAlumnos',template:/*ion-inline-start:"C:\Repo_Git\TP_PPS_2C_2017\src\pages\codigoAlumnos\codigoAlumnos.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      QR para alumnos\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n \n\n<ion-content padding>\n\n  <!-- <ion-item>\n\n    <ion-input type="text" placeholder="MY QR Code data" [(ngModel)]="qrData">\n\n    </ion-input>\n\n  </ion-item> -->\n\n  <!-- <button ion-button full icon-left (click)="createCode()"><ion-icon name="barcode"></ion-icon>Create Code</button> -->\n\n  <button ion-button full icon-left (click)="scanCode()" color="primary"><ion-icon name="qr-scanner"></ion-icon>Escanear Código</button>\n\n \n\n <ion-card *ngIf="createdCode">\n\n    <ngx-qrcode [qrc-value]="createdCode"></ngx-qrcode>\n\n    <!-- <ion-card-content>\n\n      <p>Value: {{ createdCode }}</p>\n\n    </ion-card-content>-->\n\n  </ion-card> \n\n \n\n  <ion-card *ngIf="scannedCode">\n\n    <ion-card-content>\n\n      {{ scannedCode }}\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Repo_Git\TP_PPS_2C_2017\src\pages\codigoAlumnos\codigoAlumnos.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_deprecated__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
], CodigoAlumnos);

//# sourceMappingURL=codigoAlumnos.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(186);
throw new Error("Cannot find module \"papaparse\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database_deprecated__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListasPage = (function () {
    function ListasPage(navCtrl, http, af, alertCtrl) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.af = af;
        this.alertCtrl = alertCtrl;
        this.csvData = [];
        this.readCsvData();
        this.lista = af.list('/listas/');
    }
    ListasPage.prototype.readCsvData = function () {
        var _this = this;
        //this.archivo = "PPS -4A-2c2017";
        if (this.archivo != null) {
            this.http.get('assets/archivos/' + this.archivo)
                .subscribe(function (data) { return _this.extractData(data); }, function (err) { return _this.handleError(err); });
        }
    };
    ListasPage.prototype.extractData = function (res) {
        var csvData = res['_body'] || '';
        var parsedData = __WEBPACK_IMPORTED_MODULE_3_papaparse__["parse"](csvData).data;
        this.csvData = parsedData;
        console.log('respuesta ', this.csvData);
    };
    ListasPage.prototype.downloadCSV = function () {
        var csv = __WEBPACK_IMPORTED_MODULE_3_papaparse__["unparse"](this.csvData);
        var blob = new Blob([csv]);
        var a = window.document.createElement("a");
        a.href = window.URL.createObjectURL(blob);
        a.download = "newdata.csv";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };
    ListasPage.prototype.handleError = function (err) {
        console.log('Error ', err);
    };
    ListasPage.prototype.trackByFn = function (index, item) {
        return index;
    };
    ListasPage.prototype.guardarLista = function () {
        var _this = this;
        this.af.list("/listas/").set(this.archivo, this.csvData).then(function (response) {
            _this.AlertMensaje("Éxito!", "Se guardó con éxito!!");
        }).catch(function (error) {
            _this.AlertMensaje("Error", error);
        });
    };
    ListasPage.prototype.AlertMensaje = function (titulo, mens) {
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
    ListasPage.prototype.elegirArchivos = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle('Elegir archivo');
        alert.addInput({
            type: 'radio',
            label: 'PPS -4A-2c2017',
            value: 'PPS -4A-2c2017',
            checked: true
        });
        alert.addInput({
            type: 'radio',
            label: 'PPS-4b-2c2017',
            value: 'PPS-4b-2c2017'
        });
        alert.addButton('Cancel');
        alert.addButton({
            text: 'Ok',
            handler: function (data) {
                console.log('Radio data:', data);
                _this.testRadioOpen = false;
                _this.testRadioResult = data;
                ;
                if (data) {
                    switch (data) {
                        case 'PPS -4A-2c2017':
                            _this.archivo = 'PPS -4A-2c2017.csv';
                            _this.readCsvData();
                            break;
                        case 'PPS-4b-2c2017':
                            _this.archivo = 'PPS-4b-2c2017.csv';
                            _this.readCsvData();
                            break;
                    }
                }
            }
        });
        alert.present().then(function () {
            _this.testRadioOpen = true;
        });
    };
    return ListasPage;
}());
ListasPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-listas',template:/*ion-inline-start:"C:\Repo_Git\TP_PPS_2C_2017\src\pages\listas\listas.html"*/'<ion-header>\n\n  <ion-navbar color=\'favorite\'> \n\n   \n\n    <ion-buttons start>\n\n      <button ion-button icon-only (click)="elegirArchivos()">\n\n          <ion-icon name="add"></ion-icon>\n\n        </button>\n\n    </ion-buttons>\n\n    <ion-title>\n\n      CSV Data\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="downloadCSV()">\n\n          <ion-icon name="download"></ion-icon>\n\n        </button>\n\n        <button ion-button icon-only (click)="guardarLista()">\n\n          <ion-icon name="cloud-upload"></ion-icon>\n\n        </button>\n\n    </ion-buttons >\n\n  </ion-navbar>\n\n</ion-header>\n\n \n\n<ion-content padding>\n\n  <p *ngIf="archivo == null">Presiona el botón + para elegir un archivo</p>\n\n  <ion-scroll scrollX="true" scrollY="true" class="data-scroll">\n\n    <table border="1" class="data-table" style="overflow-x:auto;">\n\n    \n\n      <th *ngIf="archivo != null">Legajo</th>\n\n      <th *ngIf="archivo != null">Nombre y apellido</th>\n\n      <th *ngIf="archivo != null">Horario</th>\n\n      <tr *ngFor="let row of csvData; let i = index">\n\n          <td *ngFor="let data of row; let j = index; trackBy: trackByFn">\n\n            <ion-input type="text" [(ngModel)]="csvData[i][j]"></ion-input>\n\n          </td>\n\n        </tr>\n\n    </table>\n\n  </ion-scroll>\n\n</ion-content>'/*ion-inline-end:"C:\Repo_Git\TP_PPS_2C_2017\src\pages\listas\listas.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database_deprecated__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], ListasPage);

//# sourceMappingURL=listas.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tabs_tabs__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_plus__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__registro_registro__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_Rx__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_userdata_userdata__ = __webpack_require__(115);
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
    function Login(loadingCtrl, navCtrl, events, iab, http, userData, navParams, platform, actionsheetCtrl, alertCtrl, facebook, googlePlus) {
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.events = events;
        this.iab = iab;
        this.http = http;
        this.userData = userData;
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
            var alert_1 = this.alertCtrl.create({
                title: 'ADVERTENCIA!',
                subTitle: 'Debe completar todos los campos!',
                buttons: ['OK']
            });
            alert_1.present();
        }
        else {
            __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().signInWithEmailAndPassword(this.usuarioSelecionado.email, this.usuarioSelecionado.password).then(function (ok) {
                var loader = _this.loadingCtrl.create({
                    content: "Espere...",
                    duration: 2600
                });
                _this.userData.login(_this.usuarioSelecionado.email);
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
        selector: 'page-login',template:/*ion-inline-start:"C:\Repo_Git\TP_PPS_2C_2017\src\pages\login\login.html"*/'<html>\n\n\n\n<head>\n\n  <meta charset="UTF-8">\n\n  <title>Ingrese</title>\n\n</head>\n\n\n\n<body>\n\n  <div class="loginpanel">\n\n    <div class="txt">\n\n      <input id="user" [(ngModel)]="usuarioSelecionado.email" name="email" type="text" placeholder="Correo" />\n\n      <label for="user" class="entypo-user"></label>\n\n    </div>\n\n    <div class="txt">\n\n      <input id="pwd" [(ngModel)]="usuarioSelecionado.password" name="password" type="password" placeholder="Contraseña" />\n\n      <label for="pwd" class="entypo-lock"></label>\n\n    </div>\n\n    <div class="buttons">\n\n      <input type="button" (click)="login()" value="INGRESAR" />\n\n      <input type="button" (click)="registro()" value="Registrarse" />\n\n    </div>\n\n\n\n\n\n    <div class="hr">\n\n      <div></div>\n\n      <div>O con</div>\n\n      <div></div>\n\n    </div>\n\n    \n\n      <ion-item>\n\n        <ion-label>Usuario:</ion-label>\n\n        <ion-select [(ngModel)]="usuarioSelecionado">\n\n          <ion-option *ngFor="let u of listUsuarios" value="u.id" [value]="u">{{u.perfil}}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n    \n\n\n\n    <div class="social">\n\n      <input style="background-color: blue" type="button" (click)="signInWithFacebook()" value="FACEBOOK" />\n\n      <input style="background-color: red" type="button" (click)="google()" value="GOOGLE+" />\n\n      <input style="background-color: black" type="button" (click)="loginWithGithub()" value="GITHUB" />\n\n    </div>\n\n\n\n\n\n  </div>\n\n  <script src=\'http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js\'></script>\n\n  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">\n\n  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>\n\n  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>\n\n</body>\n\n\n\n\n\n</html>'/*ion-inline-end:"C:\Repo_Git\TP_PPS_2C_2017\src\pages\login\login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_8__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_10__providers_userdata_userdata__["a" /* UserData */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_plus__["a" /* GooglePlus */]])
], Login);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_userdata_userdata__ = __webpack_require__(115);
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
    function RegistroPage(loadingCtrl, navCtrl, af, navParams, platform, actionsheetCtrl, alertCtrl, userData) {
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.af = af;
        this.navParams = navParams;
        this.platform = platform;
        this.actionsheetCtrl = actionsheetCtrl;
        this.alertCtrl = alertCtrl;
        this.userData = userData;
        this.usuarioSelecionado = { email: '', password: '', password1: '' };
    }
    RegistroPage.prototype.Registrar = function () {
        var _this = this;
        if (this.ValidaCamposReg()) {
            this.af.auth.createUserWithEmailAndPassword(this.usuarioSelecionado.email, this.usuarioSelecionado.password).then(function (response) {
                _this.AlertMensaje("Bienvenido", "Su perfil a sido guardado con exito!!!");
                _this.userData.signup(_this.usuarioSelecionado.email);
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
        selector: 'page-registro',template:/*ion-inline-start:"C:\Repo_Git\TP_PPS_2C_2017\src\pages\registro\registro.html"*/'<html>\n\n  \n\n  <head>\n\n    <meta charset="UTF-8">\n\n    <title>Ingrese</title>\n\n  </head>\n\n  \n\n  <body>\n\n    <div class="loginpanel">\n\n      <div class="txt">\n\n        <input id="user" [(ngModel)]="usuarioSelecionado.email" name="email" type="text" placeholder="Correo" required/>\n\n        <label for="user" class="entypo-user"></label>\n\n      </div>\n\n      <div class="txt">\n\n        <input id="pwd" [(ngModel)]="usuarioSelecionado.password" name="password" type="password" placeholder="Contraseña" required/>\n\n        <label for="pwd" class="entypo-lock"></label>\n\n      </div>\n\n      <div class="txt">\n\n          <input id="pwd" [(ngModel)]="usuarioSelecionado.password1" name="password" type="password" placeholder="Repetir Contraseña" required/>\n\n          <label for="pwd" class="entypo-lock"></label>\n\n        </div>\n\n      <div class="buttons">\n\n\n\n        <input type="button" (click)="Registrar()" value="Registrarse" />\n\n      </div>\n\n  \n\n\n\n    </div>\n\n    <script src=\'http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js\'></script>\n\n    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">\n\n    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>\n\n    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>\n\n  </body>\n\n  \n\n  \n\n  </html>'/*ion-inline-end:"C:\Repo_Git\TP_PPS_2C_2017\src\pages\registro\registro.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_userdata_userdata__["a" /* UserData */]])
], RegistroPage);

//# sourceMappingURL=registro.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(390);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(781);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_registro_registro__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_alumno_alumno__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_encuesta_encuesta__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_nuevoAlumno_nuevoAlumno__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_editarAlumno_editarAlumno__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_admProf_admProf__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_nuevoAdmProf_nuevoAdmProf__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_editarAdmProf_editarAdmProf__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_listas_listas__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_codigoAlumnos_codigoAlumnos__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_splash_screen__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angularfire2__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_angularfire2_database_deprecated__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_angularfire2_auth__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_firebase__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_facebook__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_google_plus__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_in_app_browser__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__angular_http__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_userdata_userdata__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_storage__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_encuesta_data_encuesta_data__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_encuesta_home_encuesta_home__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_encuesta_enviar_encuesta_enviar__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_asistencia_modal_asistencia_modal__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__providers_asistencia_data_asistencia_data__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_encuesta_detalle_encuesta_detalle__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__angular_common__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__ionic_native_barcode_scanner__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38_ngx_qrcode2__ = __webpack_require__(782);
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
__WEBPACK_IMPORTED_MODULE_23_firebase___default.a.initializeApp(config);
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
            __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* Login */],
            __WEBPACK_IMPORTED_MODULE_9__pages_alumno_alumno__["a" /* Alumno */],
            __WEBPACK_IMPORTED_MODULE_10__pages_encuesta_encuesta__["a" /* EncuestaPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_encuesta_home_encuesta_home__["a" /* EncuestaHomePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_nuevoAlumno_nuevoAlumno__["a" /* nuevoAlumno */],
            __WEBPACK_IMPORTED_MODULE_12__pages_editarAlumno_editarAlumno__["a" /* editarAlumno */],
            __WEBPACK_IMPORTED_MODULE_32__pages_encuesta_enviar_encuesta_enviar__["a" /* EncuestaEnviarPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_asistencia_modal_asistencia_modal__["a" /* AsistenciaModalPage */],
            __WEBPACK_IMPORTED_MODULE_35__pages_encuesta_detalle_encuesta_detalle__["a" /* EncuestaDetallePage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_admProf_admProf__["a" /* AdmProf */],
            __WEBPACK_IMPORTED_MODULE_14__pages_nuevoAdmProf_nuevoAdmProf__["a" /* nuevoAdmProf */],
            __WEBPACK_IMPORTED_MODULE_15__pages_editarAdmProf_editarAdmProf__["a" /* editarAdmProf */],
            __WEBPACK_IMPORTED_MODULE_16__pages_listas_listas__["a" /* ListasPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_codigoAlumnos_codigoAlumnos__["a" /* CodigoAlumnos */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_20_angularfire2__["a" /* AngularFireModule */].initializeApp(config),
            __WEBPACK_IMPORTED_MODULE_21_angularfire2_database_deprecated__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_22_angularfire2_auth__["b" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_27__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_38_ngx_qrcode2__["a" /* NgxQRCodeModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { component: __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */], name: 'Inicio', segment: 'inicio' },
                    { component: __WEBPACK_IMPORTED_MODULE_9__pages_alumno_alumno__["a" /* Alumno */], name: 'Alumno', segment: 'alumno' },
                    { component: __WEBPACK_IMPORTED_MODULE_31__pages_encuesta_home_encuesta_home__["a" /* EncuestaHomePage */], name: 'Encuesta', segment: 'encuesta' }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_29__ionic_storage__["a" /* IonicStorageModule */].forRoot()
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_registro_registro__["a" /* RegistroPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* Login */],
            __WEBPACK_IMPORTED_MODULE_9__pages_alumno_alumno__["a" /* Alumno */],
            __WEBPACK_IMPORTED_MODULE_10__pages_encuesta_encuesta__["a" /* EncuestaPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_encuesta_home_encuesta_home__["a" /* EncuestaHomePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_nuevoAlumno_nuevoAlumno__["a" /* nuevoAlumno */],
            __WEBPACK_IMPORTED_MODULE_12__pages_editarAlumno_editarAlumno__["a" /* editarAlumno */],
            __WEBPACK_IMPORTED_MODULE_32__pages_encuesta_enviar_encuesta_enviar__["a" /* EncuestaEnviarPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_asistencia_modal_asistencia_modal__["a" /* AsistenciaModalPage */],
            __WEBPACK_IMPORTED_MODULE_35__pages_encuesta_detalle_encuesta_detalle__["a" /* EncuestaDetallePage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_admProf_admProf__["a" /* AdmProf */],
            __WEBPACK_IMPORTED_MODULE_14__pages_nuevoAdmProf_nuevoAdmProf__["a" /* nuevoAdmProf */],
            __WEBPACK_IMPORTED_MODULE_15__pages_editarAdmProf_editarAdmProf__["a" /* editarAdmProf */],
            __WEBPACK_IMPORTED_MODULE_16__pages_listas_listas__["a" /* ListasPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_codigoAlumnos_codigoAlumnos__["a" /* CodigoAlumnos */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_19__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_24__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_26__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_25__ionic_native_google_plus__["a" /* GooglePlus */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_28__providers_userdata_userdata__["a" /* UserData */],
            __WEBPACK_IMPORTED_MODULE_30__providers_encuesta_data_encuesta_data__["a" /* EncuestaDataProvider */],
            __WEBPACK_IMPORTED_MODULE_34__providers_asistencia_data_asistencia_data__["a" /* AsistenciDataProvider */],
            __WEBPACK_IMPORTED_MODULE_36__angular_common__["d" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_37__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_userdata_userdata__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_alumno_alumno__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_encuesta_home_encuesta_home__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//Vistas





var MyApp = (function () {
    function MyApp(platform, menu, statusBar, events, userData, splashScreen) {
        var _this = this;
        this.platform = platform;
        this.menu = menu;
        this.statusBar = statusBar;
        this.events = events;
        this.userData = userData;
        this.splashScreen = splashScreen;
        this.isAppInitialized = false;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* Login */];
        this.pages = [
            { title: 'Inicio', name: 'TabsPage', component: __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */], index: 0, icon: 'pie' },
            { title: 'Alumno', name: 'TabsPage', component: __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_8__pages_alumno_alumno__["a" /* Alumno */], index: 1, icon: 'school' },
            { title: 'Encuesta', name: 'TabsPage', component: __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_9__pages_encuesta_home_encuesta_home__["a" /* EncuestaHomePage */], index: 2, icon: 'clipboard' }
        ];
        this.pagesLog = [
            { title: 'Logout', name: 'Login', component: __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* Login */], icon: 'log-out', logsOut: true }
        ];
        // qué elementos del menú deben estar ocultos según el estado de inicio de sesión actual 
        this.userData.hasLoggedIn().then(function (hasLoggedIn) {
            _this.enableMenu(hasLoggedIn === true);
        });
        this.enableMenu(false);
        this.listenToLoginEvents();
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            //this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.listenToLoginEvents = function () {
        var _this = this;
        this.events.subscribe('user:login', function () {
            _this.enableMenu(true);
        });
        this.events.subscribe('user:signup', function () {
            _this.enableMenu(true);
        });
        this.events.subscribe('user:logout', function () {
            _this.enableMenu(false);
        });
    };
    MyApp.prototype.enableMenu = function (loggedIn) {
        //this.menu.enable(!loggedIn, 'loggedInMenu');
        this.menu.enable(loggedIn, 'loggedOutMenu');
    };
    MyApp.prototype.openPage = function (page) {
        this.menu.close();
        var params = {};
        if (page.index) {
            params = { tabIndex: page.index };
        }
        if (this.nav.getActiveChildNavs().length && page.index != undefined) {
            this.nav.getActiveChildNavs()[0].select(page.index);
            console.log("LLego");
        }
        else {
            this.nav.setRoot(page.name, params).catch(function (err) {
                console.log(err);
            });
        }
        if (page.logsOut === true) {
            console.log("Logout");
            this.userData.logout();
        }
    };
    MyApp.prototype.isActive = function (page) {
        var childNav = this.nav.getActiveChildNavs()[0];
        // Tabs are a special case because they have their own navigation
        if (childNav) {
            if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
                return 'primary';
            }
            return;
        }
        if (this.nav.getActive() && this.nav.getActive().name === page.name) {
            return 'primary';
        }
        return;
    };
    MyApp.prototype.ngOnInit = function () {
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]) === "function" && _a || Object)
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Repo_Git\TP_PPS_2C_2017\src\app\app.html"*/'<ion-split-pane>\n\n    \n\n      <!-- logged out menu -->\n\n      <ion-menu id="loggedOutMenu" [content]="content" type="overlay">\n\n    \n\n        <ion-header>\n\n          <ion-toolbar color=\'dark\'>\n\n            <ion-title>Menu</ion-title>\n\n          </ion-toolbar>\n\n        </ion-header>\n\n      \n\n        <ion-content class="outer-content" style="background-color: black;">\n\n          <div class="sidemenu-header">\n\n            <img src="./assets/img/avatar.jpg"/>\n\n          </div>\n\n          <ion-list>\n\n    \n\n            <button id="boton" ion-item menuClose *ngFor="let p of pages" (click)="openPage(p)">\n\n              <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n\n              {{p.title}}\n\n            </button>\n\n          </ion-list>\n\n    \n\n          <ion-list>\n\n\n\n            <ion-list-header color=\'favorite\'>\n\n              Cuenta Activa\n\n            </ion-list-header>\n\n            <button id="boton1" ion-item menuClose *ngFor="let p of pagesLog" (click)="openPage(p)" color="danger">\n\n              <ion-icon id="icon" item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n\n              {{p.title}}\n\n            </button>\n\n          </ion-list>\n\n    \n\n          <ion-list>\n\n            <ion-list-header color=\'favorite\'>\n\n              Otras\n\n            </ion-list-header>\n\n            \n\n          </ion-list>\n\n        </ion-content>\n\n    \n\n      </ion-menu>\n\n    \n\n      <!-- logged in menu -->\n\n    <!--  <ion-menu id="loggedInMenu" [content]="content">\n\n    \n\n        <ion-header>\n\n          <ion-toolbar>\n\n            <ion-title>Menu</ion-title>\n\n          </ion-toolbar>\n\n        </ion-header>\n\n    \n\n        <ion-content class="outer-content">\n\n    \n\n          <ion-list>\n\n            <ion-list-header>\n\n              Navigate\n\n            </ion-list-header>\n\n            <button ion-item menuClose *ngFor="let p of appPages" (click)="openPage(p)">\n\n              <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n\n              {{p.title}}\n\n            </button>\n\n          </ion-list>\n\n    \n\n          <ion-list>\n\n            <ion-list-header>\n\n              Account\n\n            </ion-list-header>\n\n            <button ion-item menuClose *ngFor="let p of loggedInPages" (click)="openPage(p)">\n\n              <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n\n              {{p.title}}\n\n            </button>\n\n          </ion-list>\n\n    \n\n          <ion-list>\n\n            <ion-list-header>\n\n              Tutorial\n\n            </ion-list-header>\n\n            <button ion-item menuClose (click)="openTutorial()">\n\n              <ion-icon item-start name="hammer"></ion-icon>\n\n              Show Tutorial\n\n            </button>\n\n          </ion-list>\n\n    \n\n        </ion-content>\n\n    \n\n      </ion-menu>\n\n    -->\n\n      <!-- main navigation -->\n\n      <ion-nav [root]="rootPage" #content swipeBackEnabled="false" main></ion-nav>\n\n      \n\n    </ion-split-pane>\n\n    \n\n  '/*ion-inline-end:"C:\Repo_Git\TP_PPS_2C_2017\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__providers_userdata_userdata__["a" /* UserData */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__providers_userdata_userdata__["a" /* UserData */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _g || Object])
], MyApp);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 781:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AboutPage = (function () {
    function AboutPage() {
    }
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"C:\Repo_Git\TP_PPS_2C_2017\src\pages\about\about.html"*/'<ion-header>\n\n    <ion-navbar  color=\'rosa\'>\n\n      <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n    <ion-title>\n\n      About\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Repo_Git\TP_PPS_2C_2017\src\pages\about\about.html"*/
    })
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EncuestaDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_deprecated__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { AngularFireDatabase } from 'angularfire2/database';


var EncuestaDataProvider = (function () {
    function EncuestaDataProvider(afAuth, afDB) {
        this.afAuth = afAuth;
        this.afDB = afDB;
        console.log('Hello EncuestaDataProvider Provider');
    }
    EncuestaDataProvider.prototype.getEncuestas = function () {
        return this.afDB.list('Encuestas/');
    };
    EncuestaDataProvider.prototype.saveEncuestaInFB = function (encuesta) {
        return this.afDB.database.ref('Encuestas/').push(encuesta);
    };
    EncuestaDataProvider.prototype.enviarEncuestaGuardadaFB = function (encuesta) {
        return __WEBPACK_IMPORTED_MODULE_3_firebase_app__["database"]().ref('Encuestas/' + encuesta.$key).update(encuesta);
    };
    EncuestaDataProvider.prototype.eliminarEncuesta = function (encuesta) {
        return this.afDB.database.ref('Encuestas/' + encuesta.$key).remove();
    };
    return EncuestaDataProvider;
}());
EncuestaDataProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_deprecated__["a" /* AngularFireDatabase */]])
], EncuestaDataProvider);

//# sourceMappingURL=encuesta-data.js.map

/***/ })

},[385]);
//# sourceMappingURL=main.js.map