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
            var _this = this;
            var success = _super.prototype._init.call(this);
            if (!success) {
                console.error("Component failed to initialise");
            }
            this.canvas = new Canvas();
            this.canvas.style.backgroundColor = '#333';
            this.canvas.width = 750;
            this.canvas.height = 750;
            this.main = new MyComponents.Main();
            this.main.init(this.canvas);
            this.main.shapeCompleted.on(function (s, svg) {
                _this._emit(EtchComponent.Events.SHAPECOMPLETED, [svg]);
            }, this);
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
            Events.SHAPECOMPLETED = 'shapeCompleted';
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
    // declare var shapes = [];
    var Main = (function (_super) {
        __extends(Main, _super);
        function Main(maxDelta) {
            _super.call(this, maxDelta);
            this.drawmode = false;
            this.shapeCompleted = new nullstone.Event(); // svg of completed shape
        }
        Main.prototype.setup = function () {
            var _this = this;
            _super.prototype.setup.call(this);
            this.shapes = [];
            this.currentPos = { x: 0, y: 0 };
            this.position = null;
            this.stage.mousePos.x = 0;
            this.stage.mousePos.y = 0;
            this.canvas.htmlElement.addEventListener('mousedown', function (e) {
                _this.mousePos = _this.stage.mousePos.clone();
                console.log('mouseX: ', _this.mousePos.x, ' mouseY: ', _this.mousePos.y);
                _this.toggleDrawMode();
                if (_this.drawmode) {
                    // set the anchor point on first click
                    _this.currentPos.x = _this.mousePos.x;
                    _this.currentPos.y = _this.mousePos.y;
                }
                else {
                    // finish the shape on second click and store it.
                    _this.rectangle = new Path2D();
                    _this.rectangle.rect(_this.currentPos.x, _this.currentPos.y, _this.mousePos.x - _this.currentPos.x, _this.mousePos.y - _this.currentPos.y);
                    _this.shapeCompleted.raise(_this, "foobar"); // publish event
                    _this.shapes.push(_this.rectangle);
                }
            }, false);
        };
        Main.prototype.toggleDrawMode = function () {
            this.drawmode = !this.drawmode;
        };
        Main.prototype.update = function () {
            // redraw the shape in each frame as the mouse moves
            this.rectangle = new Path2D();
            this.rectangle.rect(this.currentPos.x, this.currentPos.y, this.mousePos.x - this.currentPos.x, this.mousePos.y - this.currentPos.y);
        };
        Main.prototype.draw = function () {
            this.ctx.strokeStyle = "#FF0000";
            for (var i = 0; i < this.shapes.length; i++) {
                var myShape = this.shapes[i];
                this.ctx.stroke(myShape);
            }
            if (this.drawmode) {
                this.ctx.stroke(this.rectangle);
            }
        };
        return Main;
    }(etch.drawing.Stage));
    MyComponents.Main = Main;
})(MyComponents || (MyComponents = {}));

},{}]},{},[1])(1)
});