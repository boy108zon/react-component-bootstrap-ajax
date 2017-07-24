(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react);
        global.Circle = mod.exports;
    }
})(this, function (exports, _react) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var Circle = function Circle(props) {
        var _props$x = props.x,
            x = _props$x === undefined ? 0 : _props$x,
            _props$y = props.y,
            y = _props$y === undefined ? 0 : _props$y,
            _props$radius = props.radius,
            radius = _props$radius === undefined ? 50 : _props$radius;

        return _react2.default.createElement('circle', { cx: x, cy: y, r: radius });
    };

    exports.default = Circle;
});