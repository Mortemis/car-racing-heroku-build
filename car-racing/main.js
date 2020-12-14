(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/llr/src/car-racing/src/main.ts */"zUnb");


/***/ }),

/***/ "6DKM":
/*!******************************************************!*\
  !*** ./src/app/score-panel/score-panel.component.ts ***!
  \******************************************************/
/*! exports provided: ScorePanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScorePanelComponent", function() { return ScorePanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _game_master_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game-master.service */ "DI4D");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");




class ScorePanelComponent {
    constructor(gm, cookieService) {
        this.gm = gm;
        this.cookieService = cookieService;
        this.score = 0;
        this.highScore = 0;
    }
    ngOnInit() {
        let score = this.cookieService.get('HighScore');
        if (score) {
            this.highScore = +score;
        }
        this.gm.enemyPassed.subscribe(() => {
            this.score += 100;
            if (this.score > this.highScore) {
                this.highScore = this.score;
                this.cookieService.set('HighScore', this.highScore + '', 500000);
            }
        });
        this.gm.gameLost.subscribe(() => {
            this.score = 0;
        });
    }
}
ScorePanelComponent.ɵfac = function ScorePanelComponent_Factory(t) { return new (t || ScorePanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_game_master_service__WEBPACK_IMPORTED_MODULE_1__["GameMasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"])); };
ScorePanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScorePanelComponent, selectors: [["app-score-panel"]], decls: 9, vars: 2, consts: [[1, "game__score-panel"]], template: function ScorePanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Score ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Hi-Score ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.score, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.highScore, "");
    } }, styles: [".game__score-panel[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NvcmUtcGFuZWwvc2NvcmUtcGFuZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvc2NvcmUtcGFuZWwvc2NvcmUtcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2FtZV9fc2NvcmUtcGFuZWwge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScorePanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-score-panel',
                templateUrl: './score-panel.component.html',
                styleUrls: ['./score-panel.component.scss']
            }]
    }], function () { return [{ type: _game_master_service__WEBPACK_IMPORTED_MODULE_1__["GameMasterService"] }, { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] }]; }, null); })();


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

/***/ "DI4D":
/*!****************************************!*\
  !*** ./src/app/game-master.service.ts ***!
  \****************************************/
/*! exports provided: GameMasterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameMasterService", function() { return GameMasterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _enemy_car_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enemy-car.model */ "wA3A");
/* harmony import */ var _sound_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sound.service */ "Z5uY");





class GameMasterService {
    constructor(soundService) {
        this.soundService = soundService;
        this.currentPosition = 'right';
        this.enemies = [];
        this.enemySpawnInterval = 10;
        this.enemySpawnCounter = 0;
        this.tickSpeed = 0;
        this.roadPosition = 3;
        this.gamePaused = false;
        this.gameStopped = true;
        this.gameStarted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.carMoved = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.enemyPassed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); //increase score & increase goal
        this.enemyCollided = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); //decrease hp or lose if hp = 1
        this.gameWon = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.gameLost = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.sfxToggled = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.carImage = [
            [false, true, false],
            [true, true, true],
            [false, true, false],
            [true, false, true]
        ];
        this.enemyPassed.subscribe(() => {
            soundService.playSound(_sound_service__WEBPACK_IMPORTED_MODULE_2__["Sounds"].Pass);
        });
        this.enemyCollided.subscribe(() => {
            this.gamePaused = true;
            this.clearFieldAnimation(19);
            soundService.playSound(_sound_service__WEBPACK_IMPORTED_MODULE_2__["Sounds"].Collide);
        });
        this.gameLost.subscribe(() => {
            this.tickSpeed = 0;
            this.gameStopped = true;
            soundService.playSound(_sound_service__WEBPACK_IMPORTED_MODULE_2__["Sounds"].Lose);
        });
        this.gameWon.subscribe(() => {
            this.gamePaused = true;
            this.clearFieldAnimation(19);
            this.tickSpeed = 0;
            this.gameStopped = true;
            soundService.playSound(_sound_service__WEBPACK_IMPORTED_MODULE_2__["Sounds"].Win);
        });
        this.sfxToggled.subscribe(() => {
            this.soundService.toggleSound();
        });
        this.gameStarted.subscribe(() => {
            this.soundService.playSound(_sound_service__WEBPACK_IMPORTED_MODULE_2__["Sounds"].Start);
        });
    }
    enableDebugMode() {
        this.gameStarted.subscribe(() => console.log('[D] Game started.'));
        this.enemyCollided.subscribe(() => console.log('[D] Enemy collided.'));
        this.enemyPassed.subscribe(() => console.log('[D] Enemy passed.'));
        this.gameWon.subscribe(() => console.log('[D] Game won.'));
        this.gameLost.subscribe(() => console.log('[D] Game lost.'));
        this.sfxToggled.subscribe(() => console.log('[D] SFX toggled.'));
    }
    handleKeyPressed(key) {
        switch (key) {
            case 'ArrowLeft':
            case 'a':
            case 'A':
            case 'ф':
            case 'Ф':
                if (!this.gameStopped && !this.gamePaused)
                    this.carMoved.emit('left');
                break;
            case 'ArrowRight':
            case 'd':
            case 'D':
            case 'в':
            case 'В':
                if (!this.gameStopped && !this.gamePaused)
                    this.carMoved.emit('right');
                break;
            case 'm':
            case 'M':
            case 'ь':
            case 'Ь':
                this.sfxToggled.emit();
                break;
            case ' ':
                if (this.gameStopped) {
                    this.gameStopped = false;
                    this.gameStarted.emit();
                    this.tick();
                }
                break;
        }
    }
    applyCarImage(position) {
        for (let x = 0; x < 3; x++)
            for (let y = 0; y < 4; y++) {
                if (position === 'left' && this.currentPosition === 'right') {
                    // Check for collision
                    if (this.field[x + 2][y + 16] === true) {
                        this.enemyCollided.emit();
                        return;
                    }
                    this.field[x + 5][y + 16] = false; // Clear previous position
                    this.field[x + 2][y + 16] = this.carImage[y][x]; // Render car in new position
                }
                else if (position === 'right' && this.currentPosition === 'left') {
                    // Check for collision
                    if (this.field[x + 5][y + 16] === true) {
                        this.enemyCollided.emit();
                        return;
                    }
                    this.field[x + 2][y + 16] = false; // Clear previous position
                    this.field[x + 5][y + 16] = this.carImage[y][x]; // Render car in new position
                }
            }
        this.currentPosition = position;
    }
    applyEnemyImage(enemy) {
        if (this.field[enemy.xPosition + 1][enemy.yPosition + 4])
            this.enemyCollided.emit();
        else
            for (let x = 0; x < 3; x++)
                for (let y = 0; y < 5; y++) {
                    if (enemy.yPosition + y >= 0 && enemy.yPosition + y < 20) {
                        if (y === 0)
                            this.field[enemy.xPosition + x][enemy.yPosition + y] = false;
                        else
                            this.field[enemy.xPosition + x][enemy.yPosition + y] = _enemy_car_model__WEBPACK_IMPORTED_MODULE_1__["EnemyCar"].image[y - 1][x];
                    }
                }
    }
    applyRoadImage() {
        for (let y = 0; y < 20; y++) {
            if ((y + this.roadPosition) % 4 === 0) {
                this.field[0][y] = false;
                this.field[9][y] = false;
            }
            else {
                this.field[0][y] = true;
                this.field[9][y] = true;
            }
        }
        this.roadPosition--;
        if (this.roadPosition < 0)
            this.roadPosition = 3;
    }
    createEnemy() {
        if (Math.random() > 0.5)
            this.enemies.push(new _enemy_car_model__WEBPACK_IMPORTED_MODULE_1__["EnemyCar"](0));
        else
            this.enemies.push(new _enemy_car_model__WEBPACK_IMPORTED_MODULE_1__["EnemyCar"](1));
    }
    /**
     *
     * @param progress (goal)
     * @returns speed for component
     */
    setTickSpeed(progress) {
        this.tickSpeed = Math.floor(progress / 10) * 10;
        return Math.floor(progress / 10) + 1;
    }
    /**
     * Recursive function
     * @param y start with value of 19
     */
    clearFieldAnimation(y) {
        for (let x = 0; x < 10; x++) {
            this.field[x][y] = true;
        }
        if (y <= 0) {
            setTimeout(this.clearFieldAnimationEnd.bind(this), 50, [y]);
            this.enemies = [];
        }
        else
            setTimeout(this.clearFieldAnimation.bind(this), 50, [y - 1]);
    }
    clearFieldAnimationEnd(y) {
        for (let x = 0; x < 10; x++) {
            this.field[x][y] = false;
        }
        if (y < 19)
            setTimeout(this.clearFieldAnimationEnd.bind(this), 50, [+y + 1]);
        else
            this.onAnimationEnd();
    }
    onAnimationEnd() {
        this.gamePaused = false;
        this.currentPosition = 'right';
        this.applyCarImage('left');
        this.applyRoadImage();
    }
    tick() {
        if (this.gameStopped)
            return;
        if (!this.gamePaused) {
            this.applyRoadImage();
            for (let i = 0; i < this.enemies.length; i++) {
                this.applyEnemyImage(this.enemies[i]);
                this.enemies[i].move();
                if (this.enemies[i].yPosition >= 20) {
                    this.enemies.splice(i, 1);
                    this.enemyPassed.emit();
                    i--;
                }
            }
            this.enemySpawnCounter++;
            if (this.enemySpawnCounter >= this.enemySpawnInterval) {
                this.enemies.push(new _enemy_car_model__WEBPACK_IMPORTED_MODULE_1__["EnemyCar"]((Math.random() > 0.5) ? 1 : 0));
                this.enemySpawnCounter = 0;
            }
        }
        setTimeout(this.tick.bind(this), 100 - this.tickSpeed);
    }
}
GameMasterService.ɵfac = function GameMasterService_Factory(t) { return new (t || GameMasterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_sound_service__WEBPACK_IMPORTED_MODULE_2__["SoundService"])); };
GameMasterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GameMasterService, factory: GameMasterService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameMasterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _sound_service__WEBPACK_IMPORTED_MODULE_2__["SoundService"] }]; }, null); })();


/***/ }),

/***/ "DlGv":
/*!****************************************************!*\
  !*** ./src/app/info-panel/info-panel.component.ts ***!
  \****************************************************/
/*! exports provided: InfoPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoPanelComponent", function() { return InfoPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _game_master_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game-master.service */ "DI4D");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = function (a0) { return { "inactive": a0 }; };
class InfoPanelComponent {
    constructor(gm) {
        this.gm = gm;
        this.speed = 1;
        this.goal = 0;
        this.sfxEnabled = true;
    }
    ngOnInit() {
        this.gm.enemyPassed.subscribe(() => {
            this.goal += 1;
            this.speed = this.gm.setTickSpeed(this.goal);
            if (this.goal >= 50)
                this.gm.gameWon.emit();
        });
        this.gm.gameLost.subscribe(() => {
            this.goal = 0;
            this.speed = 1;
        });
        this.gm.gameWon.subscribe(() => {
            this.goal = 0;
            this.speed = 1;
        });
        this.gm.sfxToggled.subscribe(() => {
            this.sfxEnabled = !this.sfxEnabled;
        });
    }
}
InfoPanelComponent.ɵfac = function InfoPanelComponent_Factory(t) { return new (t || InfoPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_game_master_service__WEBPACK_IMPORTED_MODULE_1__["GameMasterService"])); };
InfoPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InfoPanelComponent, selectors: [["app-info-panel"]], decls: 11, vars: 5, consts: [[1, "game__info-panel"], [3, "ngClass"]], template: function InfoPanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Speed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Goal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "sound");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.speed, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.goal, "/50");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.sfxEnabled === false));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.game__info-panel[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.inactive[_ngcontent-%COMP%] {\n  color: #8f9e99;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsInNyYy9hcHAvaW5mby1wYW5lbC9pbmZvLXBhbmVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FBSUE7RUFDSSxzQkFBQTtBQ0ZKO0FBREE7RUFDSSxrQkFBQTtBQUlKO0FBREE7RUFDSSxjRExhO0FDU2pCIiwiZmlsZSI6InNyYy9hcHAvaW5mby1wYW5lbC9pbmZvLXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuJGNvbG9yLWJnOiAjYTJiNmFiO1xuJGNvbG9yLWluYWN0aXZlOiAjOGY5ZTk5O1xuXG4qIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuIiwiQGltcG9ydCAnLi4vLi4vc3R5bGVzLnNjc3MnO1xuXG4uZ2FtZV9faW5mby1wYW5lbCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW5hY3RpdmUge1xuICAgIGNvbG9yOiAkY29sb3ItaW5hY3RpdmU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfoPanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-info-panel',
                templateUrl: './info-panel.component.html',
                styleUrls: ['./info-panel.component.scss']
            }]
    }], function () { return [{ type: _game_master_service__WEBPACK_IMPORTED_MODULE_1__["GameMasterService"] }]; }, null); })();


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
/* harmony import */ var _game_master_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game-master.service */ "DI4D");
/* harmony import */ var _game_field_game_field_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game-field/game-field.component */ "X/Io");
/* harmony import */ var _score_panel_score_panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./score-panel/score-panel.component */ "6DKM");
/* harmony import */ var _hp_panel_hp_panel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hp-panel/hp-panel.component */ "l9CS");
/* harmony import */ var _info_panel_info_panel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./info-panel/info-panel.component */ "DlGv");







var Descriptions;
(function (Descriptions) {
    Descriptions["Start"] = "Press Space to begin!";
    Descriptions["Win"] = "You win! Press space to continue...";
    Descriptions["Lose"] = "Game over! Press space to restart...";
    Descriptions["Empty"] = " ";
})(Descriptions || (Descriptions = {}));
class AppComponent {
    constructor(gm) {
        this.gm = gm;
        this.title = 'car-racing';
    }
    keyEvent(event) {
        this.gm.handleKeyPressed(event.key);
    }
    ngOnInit() {
        this.description = Descriptions.Start;
        this.gm.gameWon.subscribe(() => {
            this.description = Descriptions.Win;
        });
        this.gm.gameLost.subscribe(() => {
            this.description = Descriptions.Lose;
        });
        this.gm.gameStarted.subscribe(() => {
            this.description = Descriptions.Empty;
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_game_master_service__WEBPACK_IMPORTED_MODULE_1__["GameMasterService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function AppComponent_keydown_HostBindingHandler($event) { return ctx.keyEvent($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 14, vars: 1, consts: [[1, "container"], [1, "game"], [1, "game__sidebar"], [1, "controls"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-game-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-score-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-hp-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-info-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Press M to mute sound");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Arrows or A/D to move car ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.description);
    } }, directives: [_game_field_game_field_component__WEBPACK_IMPORTED_MODULE_2__["GameFieldComponent"], _score_panel_score_panel_component__WEBPACK_IMPORTED_MODULE_3__["ScorePanelComponent"], _hp_panel_hp_panel_component__WEBPACK_IMPORTED_MODULE_4__["HpPanelComponent"], _info_panel_info_panel_component__WEBPACK_IMPORTED_MODULE_5__["InfoPanelComponent"]], styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.game[_ngcontent-%COMP%] {\n  display: flex;\n  border: 3px solid black;\n  background-color: #a2b6ab;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.game__sidebar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: 100%;\n}\n.container[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.controls[_ngcontent-%COMP%] {\n  text-align: center;\n  font: sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FBSUE7RUFDSSxzQkFBQTtBQ0ZKO0FBREE7RUFDSSxhQUFBO0VBRUEsdUJBQUE7RUFDQSx5QkRMTztFQ01QLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtBQUdKO0FBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFFQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxZQUFBO0FBRUo7QUFDQTtFQUNJLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtBQUVKO0FBQ0E7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FBRUoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG4kY29sb3ItYmc6ICNhMmI2YWI7XG4kY29sb3ItaW5hY3RpdmU6ICM4ZjllOTk7XG5cbioge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4iLCJAaW1wb3J0ICcuLi9zdHlsZXMuc2Nzcyc7XG5cbi5nYW1lIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1iZztcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG59XG5cbi5nYW1lX19zaWRlYmFyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG59XG5cbi5jb250cm9scyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQ6IHNhbnMtc2VyaWY7XG59XG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _game_master_service__WEBPACK_IMPORTED_MODULE_1__["GameMasterService"] }]; }, { keyEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:keydown', ['$event']]
        }] }); })();


/***/ }),

/***/ "X/Io":
/*!****************************************************!*\
  !*** ./src/app/game-field/game-field.component.ts ***!
  \****************************************************/
/*! exports provided: GameFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameFieldComponent", function() { return GameFieldComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _game_master_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game-master.service */ "DI4D");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _brick_brick_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./brick/brick.component */ "pXFU");





function GameFieldComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-brick", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const brick_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("active", brick_r4);
} }
function GameFieldComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GameFieldComponent_div_1_div_1_Template, 2, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const brickRow_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", brickRow_r1);
} }
class GameFieldComponent {
    constructor(gm) {
        this.gm = gm;
        this.bricks = [];
        for (let i = 0; i < 10; i++) {
            this.bricks[i] = [];
            for (let j = 0; j < 20; j++) {
                this.bricks[i][j] = false;
            }
        }
    }
    ngOnInit() {
        this.gm.enableDebugMode();
        this.gm.field = this.bricks;
        this.gm.applyCarImage('left');
        this.gm.carMoved.subscribe((position) => {
            this.gm.applyCarImage(position);
        });
        this.gm.createEnemy();
    }
}
GameFieldComponent.ɵfac = function GameFieldComponent_Factory(t) { return new (t || GameFieldComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_game_master_service__WEBPACK_IMPORTED_MODULE_1__["GameMasterService"])); };
GameFieldComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameFieldComponent, selectors: [["app-game-field"]], decls: 2, vars: 1, consts: [[1, "game__field"], [4, "ngFor", "ngForOf"], [3, "active"]], template: function GameFieldComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GameFieldComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.bricks);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _brick_brick_component__WEBPACK_IMPORTED_MODULE_3__["BrickComponent"]], styles: [".game__field[_ngcontent-%COMP%] {\n  display: grid;\n  border: 3px solid black;\n  grid-template-columns: repeat(10, 1fr);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS1maWVsZC9nYW1lLWZpZWxkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0NBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2dhbWUtZmllbGQvZ2FtZS1maWVsZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nYW1lX19maWVsZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameFieldComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-game-field',
                templateUrl: './game-field.component.html',
                styleUrls: ['./game-field.component.scss']
            }]
    }], function () { return [{ type: _game_master_service__WEBPACK_IMPORTED_MODULE_1__["GameMasterService"] }]; }, null); })();


/***/ }),

/***/ "Z5uY":
/*!**********************************!*\
  !*** ./src/app/sound.service.ts ***!
  \**********************************/
/*! exports provided: Sounds, SoundService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sounds", function() { return Sounds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoundService", function() { return SoundService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


var Sounds;
(function (Sounds) {
    Sounds["Collide"] = "../assets/collide.wav";
    Sounds["Lose"] = "../assets/lose.wav";
    Sounds["Win"] = "../assets/win.wav";
    Sounds["Pass"] = "../assets/pass.wav";
    Sounds["Start"] = "../assets/start.wav";
})(Sounds || (Sounds = {}));
class SoundService {
    constructor() {
        this.audio = new Audio();
        this.enabled = true;
        this.audio.volume = 0.15;
    }
    playSound(sound) {
        if (this.enabled) {
            this.audio.src = sound;
            this.audio.load();
            this.audio.play();
        }
    }
    toggleSound() {
        if (this.enabled)
            this.enabled = false;
        else
            this.enabled = true;
    }
}
SoundService.ɵfac = function SoundService_Factory(t) { return new (t || SoundService)(); };
SoundService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SoundService, factory: SoundService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SoundService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _game_field_game_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game-field/game-field.component */ "X/Io");
/* harmony import */ var _game_field_brick_brick_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game-field/brick/brick.component */ "pXFU");
/* harmony import */ var _score_panel_score_panel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./score-panel/score-panel.component */ "6DKM");
/* harmony import */ var _hp_panel_hp_panel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hp-panel/hp-panel.component */ "l9CS");
/* harmony import */ var _info_panel_info_panel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./info-panel/info-panel.component */ "DlGv");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _game_field_game_field_component__WEBPACK_IMPORTED_MODULE_3__["GameFieldComponent"],
        _game_field_brick_brick_component__WEBPACK_IMPORTED_MODULE_4__["BrickComponent"],
        _score_panel_score_panel_component__WEBPACK_IMPORTED_MODULE_5__["ScorePanelComponent"],
        _hp_panel_hp_panel_component__WEBPACK_IMPORTED_MODULE_6__["HpPanelComponent"],
        _info_panel_info_panel_component__WEBPACK_IMPORTED_MODULE_7__["InfoPanelComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _game_field_game_field_component__WEBPACK_IMPORTED_MODULE_3__["GameFieldComponent"],
                    _game_field_brick_brick_component__WEBPACK_IMPORTED_MODULE_4__["BrickComponent"],
                    _score_panel_score_panel_component__WEBPACK_IMPORTED_MODULE_5__["ScorePanelComponent"],
                    _hp_panel_hp_panel_component__WEBPACK_IMPORTED_MODULE_6__["HpPanelComponent"],
                    _info_panel_info_panel_component__WEBPACK_IMPORTED_MODULE_7__["InfoPanelComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
                ],
                providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "l9CS":
/*!************************************************!*\
  !*** ./src/app/hp-panel/hp-panel.component.ts ***!
  \************************************************/
/*! exports provided: HpPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HpPanelComponent", function() { return HpPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _game_master_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game-master.service */ "DI4D");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _game_field_brick_brick_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../game-field/brick/brick.component */ "pXFU");





function HpPanelComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-brick", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const brick_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("active", brick_r4);
} }
function HpPanelComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HpPanelComponent_div_1_div_1_Template, 2, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const brickRow_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", brickRow_r1);
} }
class HpPanelComponent {
    constructor(gm) {
        this.gm = gm;
        this.currentHp = 4;
        this.hpBricks = [];
        for (let i = 0; i < 5; i++) {
            this.hpBricks[i] = [];
            for (let j = 0; j < 4; j++) {
                this.hpBricks[i][j] = false;
            }
        }
    }
    ngOnInit() {
        this.setHp(this.currentHp);
        this.gm.enemyCollided.subscribe(() => {
            this.currentHp--;
            this.setHp(this.currentHp);
            if (this.currentHp <= 0) {
                this.gm.gameLost.emit();
            }
        });
        this.gm.gameLost.subscribe(() => {
            this.currentHp = 4;
            this.setHp(this.currentHp);
        });
    }
    setHp(hp) {
        if (hp >= 0 && hp <= 4) {
            for (let i = 0; i < 4; i++)
                this.hpBricks[i][3] = (i < hp) ? true : false;
        }
    }
}
HpPanelComponent.ɵfac = function HpPanelComponent_Factory(t) { return new (t || HpPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_game_master_service__WEBPACK_IMPORTED_MODULE_1__["GameMasterService"])); };
HpPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HpPanelComponent, selectors: [["app-hp-panel"]], decls: 2, vars: 1, consts: [[1, "game__hp-panel"], [4, "ngFor", "ngForOf"], [3, "active"]], template: function HpPanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HpPanelComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.hpBricks);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _game_field_brick_brick_component__WEBPACK_IMPORTED_MODULE_3__["BrickComponent"]], styles: [".game__hp-panel[_ngcontent-%COMP%] {\n  display: grid;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin-left: -3px;\n  margin-right: -3px;\n  border: 3px solid black;\n  grid-template-columns: repeat(5, 1fr);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaHAtcGFuZWwvaHAtcGFuZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBRUEsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUNBQUE7QUFBSiIsImZpbGUiOiJzcmMvYXBwL2hwLXBhbmVsL2hwLXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdhbWVfX2hwLXBhbmVsIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICBtYXJnaW4tbGVmdDogLTNweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0zcHg7XG4gICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HpPanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-hp-panel',
                templateUrl: './hp-panel.component.html',
                styleUrls: ['./hp-panel.component.scss']
            }]
    }], function () { return [{ type: _game_master_service__WEBPACK_IMPORTED_MODULE_1__["GameMasterService"] }]; }, null); })();


/***/ }),

/***/ "pXFU":
/*!*****************************************************!*\
  !*** ./src/app/game-field/brick/brick.component.ts ***!
  \*****************************************************/
/*! exports provided: BrickComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrickComponent", function() { return BrickComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



const _c0 = function (a0) { return { "brick-inactive": a0 }; };
const _c1 = function (a0) { return { "brick__inner-inactive": a0 }; };
class BrickComponent {
    constructor() {
        this.active = false;
    }
    ngOnInit() {
    }
}
BrickComponent.ɵfac = function BrickComponent_Factory(t) { return new (t || BrickComponent)(); };
BrickComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BrickComponent, selectors: [["app-brick"]], inputs: { active: "active" }, decls: 2, vars: 6, consts: [[1, "brick", 3, "ngClass"], [1, "brick__inner", 3, "ngClass"]], template: function BrickComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.active === false));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, ctx.active === false));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.brick[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  margin: 1px;\n  border: 3px solid black;\n  background: #a2b6ab;\n}\n.brick__inner[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  margin: 2px;\n  background: black;\n}\n.brick-inactive[_ngcontent-%COMP%] {\n  border: 3px solid #8f9e99;\n  background: #a2b6ab;\n}\n.brick__inner-inactive[_ngcontent-%COMP%] {\n  background: #8f9e99;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsInNyYy9hcHAvZ2FtZS1maWVsZC9icmljay9icmljay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQUlBO0VBQ0ksc0JBQUE7QUNGSjtBQUdBO0VBQ0ksV0FMUztFQU1ULFlBTlM7RUFPVCxXQUFBO0VBRUEsdUJBQUE7RUFDQSxtQkRYTztBQ1VYO0FBSUE7RUFDSSxXQWJlO0VBY2YsWUFkZTtFQWVmLFdBQUE7RUFDQSxpQkFBQTtBQURKO0FBSUE7RUFDSSx5QkFBQTtFQUNBLG1CRHZCTztBQ3NCWDtBQUlBO0VBQ0ksbUJEMUJhO0FDeUJqQiIsImZpbGUiOiJzcmMvYXBwL2dhbWUtZmllbGQvYnJpY2svYnJpY2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG4kY29sb3ItYmc6ICNhMmI2YWI7XG4kY29sb3ItaW5hY3RpdmU6ICM4ZjllOTk7XG5cbioge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4iLCJAaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXMuc2Nzcyc7XG5cbiRicmljay1zaXplOiAyNHB4O1xuJGJyaWNrLWlubmVyLXNpemU6IDE0cHg7XG4kYm9yZGVyLXNpemU6IDNweDtcblxuLmJyaWNrIHtcbiAgICB3aWR0aDogJGJyaWNrLXNpemU7XG4gICAgaGVpZ2h0OiAkYnJpY2stc2l6ZTtcbiAgICBtYXJnaW46IDFweDtcbiAgICBcbiAgICBib3JkZXI6ICRib3JkZXItc2l6ZSBzb2xpZCBibGFjaztcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3ItYmc7XG59XG5cbi5icmlja19faW5uZXIge1xuICAgIHdpZHRoOiAkYnJpY2staW5uZXItc2l6ZTtcbiAgICBoZWlnaHQ6ICRicmljay1pbm5lci1zaXplOyAgICBcbiAgICBtYXJnaW46IDJweDtcbiAgICBiYWNrZ3JvdW5kOiBibGFjazsgXG59XG5cbi5icmljay1pbmFjdGl2ZSB7XG4gICAgYm9yZGVyOiAkYm9yZGVyLXNpemUgc29saWQgJGNvbG9yLWluYWN0aXZlO1xuICAgIGJhY2tncm91bmQ6ICRjb2xvci1iZztcbn1cblxuLmJyaWNrX19pbm5lci1pbmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogJGNvbG9yLWluYWN0aXZlO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BrickComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-brick',
                templateUrl: './brick.component.html',
                styleUrls: ['./brick.component.scss']
            }]
    }], function () { return []; }, { active: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "wA3A":
/*!************************************!*\
  !*** ./src/app/enemy-car.model.ts ***!
  \************************************/
/*! exports provided: EnemyCar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnemyCar", function() { return EnemyCar; });
class EnemyCar {
    /**
     * @param position Left = 0, right = 1
     */
    constructor(position) {
        this.yPosition = -4;
        if (position === 0)
            this.xPosition = 2;
        else
            this.xPosition = 5;
    }
    move() {
        this.yPosition += 1;
    }
}
EnemyCar.image = [
    [true, false, true],
    [false, true, false],
    [true, true, true],
    [false, true, false]
];


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