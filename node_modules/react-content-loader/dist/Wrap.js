(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react', 'uuid'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'), require('uuid'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.uuid);
        global.Wrap = mod.exports;
    }
})(this, function (exports, _react, _uuid) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _uuid2 = _interopRequireDefault(_uuid);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var Wrap = function Wrap(props) {

        var idClip = _uuid2.default.v1();
        var idGradient = _uuid2.default.v1();

        return _react2.default.createElement(
            'svg',
            { viewBox: '0 0 ' + props.width + ' ' + props.height, version: '1.1', style: props.style, preserveAspectRatio: 'xMidYMid meet' },
            _react2.default.createElement('rect', { style: { fill: 'url(#' + idGradient + ')' }, clipPath: 'url(#' + idClip + ')', x: '0', y: '0', width: props.width, height: props.height }),
            _react2.default.createElement(
                'defs',
                null,
                _react2.default.createElement(
                    'clipPath',
                    { id: '' + idClip },
                    props.children
                ),
                _react2.default.createElement(
                    'linearGradient',
                    { id: '' + idGradient },
                    _react2.default.createElement(
                        'stop',
                        { offset: '0%', stopColor: props.primaryColor },
                        _react2.default.createElement('animate', { attributeName: 'offset', values: '-2; 1', dur: props.speed + 's', repeatCount: 'indefinite' })
                    ),
                    _react2.default.createElement(
                        'stop',
                        { offset: '50%', stopColor: props.secondaryColor },
                        _react2.default.createElement('animate', { attributeName: 'offset', values: '-1.5; 1.5', dur: props.speed + 's', repeatCount: 'indefinite' })
                    ),
                    _react2.default.createElement(
                        'stop',
                        { offset: '100%', stopColor: props.primaryColor },
                        _react2.default.createElement('animate', { attributeName: 'offset', values: '-1; 2', dur: props.speed + 's', repeatCount: 'indefinite' })
                    )
                )
            )
        );
    };

    exports.default = Wrap;
});