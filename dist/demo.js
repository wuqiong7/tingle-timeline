/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Timeline Component Demo for tingle
	 * @author shane.wuq
	 *
	 * Copyright 2014-2015, Tingle Team, Alinw.
	 * All rights reserved.
	 */
	'use strict';
	
	window.FaskClick && FastClick.attach(document.body);
	var Demo = __webpack_require__(1);
	React.render(React.createElement(Demo, null), document.getElementById('TingleDemo'));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Timeline Component Demo for tingle
	 * @author shane.wuq
	 *
	 * Copyright 2014-2015, Tingle Team, Alinw.
	 * All rights reserved.
	 */
	
	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var classnames = __webpack_require__(2);
	
	var Timeline = __webpack_require__(3);
	
	var Demo = (function (_React$Component) {
	    _inherits(Demo, _React$Component);
	
	    function Demo(props) {
	        _classCallCheck(this, Demo);
	
	        _get(Object.getPrototypeOf(Demo.prototype), 'constructor', this).call(this, props);
	        this.state = {
	            data: [{
	                "time": "2015-11-11",
	                "title": "我是标题",
	                "desc": "我是描述，我是描述，我是描述，我是描述"
	            }, {
	                "time": "2015-11-11",
	                "title": "我是标题",
	                "desc": "我是描述，我是描述，我是描述，我是描述"
	            }]
	        };
	    }
	
	    _createClass(Demo, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'div',
	                null,
	                React.createElement(Timeline, { data: this.state.data })
	            );
	        }
	    }]);
	
	    return Demo;
	})(React.Component);
	
	;
	
	module.exports = Demo;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = '';
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes += ' ' + arg;
				} else if (Array.isArray(arg)) {
					classes += ' ' + classNames.apply(null, arg);
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes += ' ' + key;
						}
					}
				}
			}
	
			return classes.substr(1);
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Timeline Component Style for tingle
	 * @author shane.wuq
	 *
	 * Copyright 2014-2015, Tingle Team, Alinw.
	 * All rights reserved.
	 */
	
	'use strict';
	
	module.exports = __webpack_require__(4);

/***/ },
/* 4 */
/***/ function(module, exports) {

	/**
	 * Timeline Component for tingle
	 * @author shane.wuq
	 *
	 * Copyright 2014-2015, Tingle Team, Alinw.
	 * All rights reserved.
	 */
	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Timeline = (function (_React$Component) {
	    _inherits(Timeline, _React$Component);
	
	    function Timeline(props) {
	        _classCallCheck(this, Timeline);
	
	        _get(Object.getPrototypeOf(Timeline.prototype), "constructor", this).call(this, props);
	        this.state = {
	            data: props.data
	        };
	    }
	
	    _createClass(Timeline, [{
	        key: "render",
	        value: function render() {
	            var t = this;
	
	            return React.createElement(
	                "ol",
	                null,
	                t.state.data.map(function (item) {
	                    var y = item.time.slice(0, 4);
	                    y = !isNaN(y) ? y : '';
	                    var m = !isNaN(y) ? item.time.slice(5) : item.time;
	                    return React.createElement(
	                        "li",
	                        null,
	                        React.createElement(
	                            "div",
	                            { className: "tfl-time" },
	                            React.createElement(
	                                "span",
	                                { className: "tFS16" },
	                                m
	                            ),
	                            React.createElement(
	                                "span",
	                                { className: "tFS14" },
	                                y
	                            )
	                        ),
	                        React.createElement(
	                            "div",
	                            { className: "tfl-icon" },
	                            React.createElement("i", null)
	                        ),
	                        React.createElement(
	                            "div",
	                            { className: "tfl-label" },
	                            React.createElement(
	                                "h3",
	                                null,
	                                item.title
	                            ),
	                            React.createElement(
	                                "p",
	                                null,
	                                item.desc
	                            )
	                        )
	                    );
	                })
	            );
	        }
	    }]);
	
	    return Timeline;
	})(React.Component);
	
	Timeline.defaultProps = {
	    data: []
	};
	
	// http://facebook.github.io/react/docs/reusable-components.html
	Timeline.propTypes = {
	    data: React.PropTypes.array
	};
	
	Timeline.displayName = 'Timeline';
	
	module.exports = Timeline;

/***/ }
/******/ ]);
//# sourceMappingURL=demo.js.map