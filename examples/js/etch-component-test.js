// etch-component-test v1.0.0 https://github.com/viewdir/etch-component-test#readme
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.etchComponentTest = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MyComponents;
(function (MyComponents) {
    var EtchComponent = (function (_super) {
        __extends(EtchComponent, _super);
        function EtchComponent(options) {
            _super.call(this, options);
            this._init();
            this._resize();
        }
        EtchComponent.prototype.test = function () {
            this._emit(EtchComponent.Events.TEST, [1, 2, 'three']);
        };
        EtchComponent.prototype._init = function () {
            var success = _super.prototype._init.call(this);
            if (!success) {
                console.error("Component failed to initialise");
            }
            this.canvas = new Canvas();
            this.canvas.style.backgroundColor = '#FFF';
            this.canvas.width = 150;
            this.canvas.height = 150;
            this.main = new MyComponents.Main();
            this.main.init(this.canvas);
            return success;
        };
        EtchComponent.prototype._getDefaultOptions = function () {
            return {};
        };
        EtchComponent.prototype._resize = function () {
        };
        return EtchComponent;
    }(_Components.BaseComponent));
    MyComponents.EtchComponent = EtchComponent;
})(MyComponents || (MyComponents = {}));
var MyComponents;
(function (MyComponents) {
    var EtchComponent;
    (function (EtchComponent) {
        var Events = (function () {
            function Events() {
            }
            Events.TEST = 'test';
            return Events;
        }());
        EtchComponent.Events = Events;
    })(EtchComponent = MyComponents.EtchComponent || (MyComponents.EtchComponent = {}));
})(MyComponents || (MyComponents = {}));
(function (w) {
    if (!w.MyComponents) {
        w.MyComponents = MyComponents;
    }
    else {
        w.MyComponents.EtchComponent = MyComponents.EtchComponent;
    }
})(window);



var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MyComponents;
(function (MyComponents) {
    var Main = (function (_super) {
        __extends(Main, _super);
        function Main(maxDelta) {
            _super.call(this, maxDelta);
        }
        Main.prototype.setup = function () {
            _super.prototype.setup.call(this);
        };
        Main.prototype.draw = function () {
            this.ctx.fillStyle = "#FF0000";
            this.ctx.fillRect(0, 0, 150, 150);
        };
        return Main;
    }(etch.drawing.Stage));
    MyComponents.Main = Main;
})(MyComponents || (MyComponents = {}));

},{}]},{},[1])(1)
});