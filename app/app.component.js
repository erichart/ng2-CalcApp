"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.formula = '';
    }
    AppComponent.prototype.append = function (element) {
        this.formula += element;
    };
    AppComponent.prototype.clearEntry = function () {
        if (this.formula != '') {
            this.formula = this.formula.slice(0, -1);
        }
    };
    AppComponent.prototype.clear = function () {
        this.formula = '';
    };
    AppComponent.prototype.evaluate = function () {
        try {
            this.formula = eval(this.formula);
        }
        catch (e) {
            this.formula = 'Invalid equation: Press \'C\' to enter a new equation.';
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app/app.component.html',
        styleUrls: ['./app/app.component.css']
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map