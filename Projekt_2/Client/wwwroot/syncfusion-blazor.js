/*!
 * filename: syncfusion-blazor.js
 *     version : 20.1.61
 *     Copyright Syncfusion Inc. 2001 - 2022. All rights reserved.
 *     Use of this code is subject to the terms of our license.
 *     A copy of the current license can be obtained at any time by e-mailing
 *     licensing@syncfusion.com. Any infringement will be prosecuted under
 *     applicable laws.
 */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./crg-resources/20.1.61/crg/bundle.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./crg-resources/20.1.61/crg/bundle.js":
/*!*********************************************!*\
  !*** ./crg-resources/20.1.61/crg/bundle.js ***!
  \*********************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resources_20_1_61_Scripts_base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../resources/20.1.61/Scripts/base.js */ "./resources/20.1.61/Scripts/base.js");
/* harmony import */ var _resources_20_1_61_Scripts_base_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_resources_20_1_61_Scripts_base_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _resources_20_1_61_Scripts_syncfusion_blazor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../resources/20.1.61/Scripts/syncfusion-blazor.js */ "./resources/20.1.61/Scripts/syncfusion-blazor.js");
/* harmony import */ var _resources_20_1_61_Scripts_syncfusion_blazor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_resources_20_1_61_Scripts_syncfusion_blazor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _resources_20_1_61_Scripts_svgbase_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../resources/20.1.61/Scripts/svgbase.js */ "./resources/20.1.61/Scripts/svgbase.js");
/* harmony import */ var _resources_20_1_61_Scripts_svgbase_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_resources_20_1_61_Scripts_svgbase_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _resources_20_1_61_Scripts_sf_svg_export_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../resources/20.1.61/Scripts/sf-svg-export.js */ "./resources/20.1.61/Scripts/sf-svg-export.js");
/* harmony import */ var _resources_20_1_61_Scripts_sf_svg_export_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_resources_20_1_61_Scripts_sf_svg_export_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _resources_20_1_61_Scripts_navigationsbase_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../resources/20.1.61/Scripts/navigationsbase.js */ "./resources/20.1.61/Scripts/navigationsbase.js");
/* harmony import */ var _resources_20_1_61_Scripts_navigationsbase_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_resources_20_1_61_Scripts_navigationsbase_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _resources_20_1_61_Scripts_popup_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../resources/20.1.61/Scripts/popup.js */ "./resources/20.1.61/Scripts/popup.js");
/* harmony import */ var _resources_20_1_61_Scripts_popup_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_resources_20_1_61_Scripts_popup_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _resources_20_1_61_Scripts_popupsbase_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../resources/20.1.61/Scripts/popupsbase.js */ "./resources/20.1.61/Scripts/popupsbase.js");
/* harmony import */ var _resources_20_1_61_Scripts_popupsbase_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_resources_20_1_61_Scripts_popupsbase_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _resources_20_1_61_Scripts_sf_daterangepicker_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../resources/20.1.61/Scripts/sf-daterangepicker.js */ "./resources/20.1.61/Scripts/sf-daterangepicker.js");
/* harmony import */ var _resources_20_1_61_Scripts_sf_daterangepicker_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_resources_20_1_61_Scripts_sf_daterangepicker_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _resources_20_1_61_Scripts_sf_drop_down_button_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../resources/20.1.61/Scripts/sf-drop-down-button.js */ "./resources/20.1.61/Scripts/sf-drop-down-button.js");
/* harmony import */ var _resources_20_1_61_Scripts_sf_drop_down_button_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_resources_20_1_61_Scripts_sf_drop_down_button_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _resources_20_1_61_Scripts_sf_textbox_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../../resources/20.1.61/Scripts/sf-textbox.js */ "./resources/20.1.61/Scripts/sf-textbox.js");
/* harmony import */ var _resources_20_1_61_Scripts_sf_textbox_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_resources_20_1_61_Scripts_sf_textbox_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _resources_20_1_61_Scripts_sf_toolbar_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../../resources/20.1.61/Scripts/sf-toolbar.js */ "./resources/20.1.61/Scripts/sf-toolbar.js");
/* harmony import */ var _resources_20_1_61_Scripts_sf_toolbar_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_resources_20_1_61_Scripts_sf_toolbar_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _resources_20_1_61_Scripts_splitbuttonsbase_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../../resources/20.1.61/Scripts/splitbuttonsbase.js */ "./resources/20.1.61/Scripts/splitbuttonsbase.js");
/* harmony import */ var _resources_20_1_61_Scripts_splitbuttonsbase_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_resources_20_1_61_Scripts_splitbuttonsbase_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _resources_20_1_61_Scripts_sf_chart_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../../../resources/20.1.61/Scripts/sf-chart.js */ "./resources/20.1.61/Scripts/sf-chart.js");
/* harmony import */ var _resources_20_1_61_Scripts_sf_chart_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_resources_20_1_61_Scripts_sf_chart_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _resources_20_1_61_Scripts_sf_range_navigator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../../../resources/20.1.61/Scripts/sf-range-navigator.js */ "./resources/20.1.61/Scripts/sf-range-navigator.js");
/* harmony import */ var _resources_20_1_61_Scripts_sf_range_navigator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_resources_20_1_61_Scripts_sf_range_navigator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _resources_20_1_61_Scripts_sf_stock_chart_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./../../../resources/20.1.61/Scripts/sf-stock-chart.js */ "./resources/20.1.61/Scripts/sf-stock-chart.js");
/* harmony import */ var _resources_20_1_61_Scripts_sf_stock_chart_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_resources_20_1_61_Scripts_sf_stock_chart_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _resources_20_1_61_Scripts_sf_spinner_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./../../../resources/20.1.61/Scripts/sf-spinner.js */ "./resources/20.1.61/Scripts/sf-spinner.js");
/* harmony import */ var _resources_20_1_61_Scripts_sf_spinner_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_resources_20_1_61_Scripts_sf_spinner_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _resources_20_1_61_Scripts_sf_dropdownlist_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./../../../resources/20.1.61/Scripts/sf-dropdownlist.js */ "./resources/20.1.61/Scripts/sf-dropdownlist.js");
/* harmony import */ var _resources_20_1_61_Scripts_sf_dropdownlist_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_resources_20_1_61_Scripts_sf_dropdownlist_js__WEBPACK_IMPORTED_MODULE_16__);



















/***/ }),

/***/ "./resources/20.1.61/Scripts/base.js":
/*!*******************************************!*\
  !*** ./resources/20.1.61/Scripts/base.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.sf = window.sf || {};
window.sf.base = (function (exports) {
'use strict';

var instances = 'ej2_instances';
var uid = 0;
var isBlazorPlatform = false;
/**
 * Function to check whether the platform is blazor or not.
 *
 * @returns {void} result
 * @private
 */
function disableBlazorMode() {
    isBlazorPlatform = false;
}
/**
 * Create Instance from constructor function with desired parameters.
 *
 * @param {Function} classFunction - Class function to which need to create instance
 * @param {any[]} params - Parameters need to passed while creating instance
 * @returns {any} ?
 * @private
 */
// eslint-disable-next-line
function createInstance(classFunction, params) {
    var arrayParam = params;
    arrayParam.unshift(undefined);
    return new (Function.prototype.bind.apply(classFunction, arrayParam));
}
/**
 * To run a callback function immediately after the browser has completed other operations.
 *
 * @param {Function} handler - callback function to be triggered.
 * @returns {Function} ?
 * @private
 */
function setImmediate(handler) {
    var unbind;
    // eslint-disable-next-line
    var num = new Uint16Array(5);
    var intCrypto = window.msCrypto || window.crypto;
    intCrypto.getRandomValues(num);
    var secret = 'ej2' + combineArray(num);
    // eslint-disable-next-line
    var messageHandler = function (event) {
        if (event.source === window && typeof event.data === 'string' && event.data.length <= 32 && event.data === secret) {
            handler();
            unbind();
        }
    };
    window.addEventListener('message', messageHandler, false);
    window.postMessage(secret, '*');
    return unbind = function () {
        window.removeEventListener('message', messageHandler);
        handler = messageHandler = secret = undefined;
    };
}
/**
 * To get nameSpace value from the desired object.
 *
 * @param {string} nameSpace - String value to the get the inner object
 * @param {any} obj - Object to get the inner object value.
 * @returns {any} ?
 * @private
 */
// eslint-disable-next-line
function getValue(nameSpace, obj) {
    // eslint-disable-next-line
    var value = obj;
    var splits = nameSpace.replace(/\[/g, '.').replace(/\]/g, '').split('.');
    for (var i = 0; i < splits.length && !isUndefined(value); i++) {
        value = value[splits[i]];
    }
    return value;
}
/**
 * To set value for the nameSpace in desired object.
 *
 * @param {string} nameSpace - String value to the get the inner object
 * @param {any} value - Value that you need to set.
 * @param {any} obj - Object to get the inner object value.
 * @returns {any} ?
 * @private
 */
// eslint-disable-next-line
function setValue(nameSpace, value, obj) {
    var keys = nameSpace.replace(/\[/g, '.').replace(/\]/g, '').split('.');
    // eslint-disable-next-line
    var start = obj || {};
    // eslint-disable-next-line
    var fromObj = start;
    var i;
    var length = keys.length;
    var key;
    for (i = 0; i < length; i++) {
        key = keys[i];
        if (i + 1 === length) {
            fromObj[key] = value === undefined ? {} : value;
        }
        else if (isNullOrUndefined(fromObj[key])) {
            fromObj[key] = {};
        }
        fromObj = fromObj[key];
    }
    return start;
}
/**
 * Delete an item from Object
 *
 * @param {any} obj - Object in which we need to delete an item.
 * @param {string} key - String value to the get the inner object
 * @returns {void} ?
 * @private
 */
// eslint-disable-next-line
function deleteObject(obj, key) {
    delete obj[key];
}
/**
 *@private
 */
var containerObject = typeof window !== "undefined" ? window : {};
/**
 * Check weather the given argument is only object.
 *
 * @param {any} obj - Object which is need to check.
 * @returns {boolean} ?
 * @private
 */
// eslint-disable-next-line
function isObject(obj) {
    var objCon = {};
    return (!isNullOrUndefined(obj) && obj.constructor === objCon.constructor);
}
/**
 * To get enum value by giving the string.
 *
 * @param {any} enumObject - Enum object.
 * @param {string} enumValue - Enum value to be searched
 * @returns {any} ?
 * @private
 */
// eslint-disable-next-line
function getEnumValue(enumObject, enumValue) {
    // eslint-disable-next-line
    return enumObject[enumValue];
}
/**
 * Merge the source object into destination object.
 *
 * @param {any} source - source object which is going to merge with destination object
 * @param {any} destination - object need to be merged
 * @returns {void} ?
 * @private
 */
function merge(source, destination) {
    if (!isNullOrUndefined(destination)) {
        var temrObj = source;
        var tempProp = destination;
        var keys = Object.keys(destination);
        var deepmerge = 'deepMerge';
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            if (!isNullOrUndefined(temrObj[deepmerge]) && (temrObj[deepmerge].indexOf(key) !== -1) &&
                (isObject(tempProp[key]) || Array.isArray(tempProp[key]))) {
                extend(temrObj[key], temrObj[key], tempProp[key], true);
            }
            else {
                temrObj[key] = tempProp[key];
            }
        }
    }
}
/**
 * Extend the two object with newer one.
 *
 * @param {any} copied - Resultant object after merged
 * @param {Object} first - First object need to merge
 * @param {Object} second - Second object need to merge
 * @param {boolean} deep ?
 * @returns {Object} ?
 * @private
 */
function extend(copied, first, second, deep) {
    var result = copied && typeof copied === 'object' ? copied : {};
    var length = arguments.length;
    if (deep) {
        length = length - 1;
    }
    var _loop_1 = function (i) {
        // eslint-disable-next-line
        if (!arguments_1[i]) {
            return "continue";
        }
        // eslint-disable-next-line
        var obj1 = arguments_1[i];
        Object.keys(obj1).forEach(function (key) {
            var src = result[key];
            var copy = obj1[key];
            var clone;
            var isArrayChanged = Array.isArray(copy) && Array.isArray(src) && (copy.length !== src.length);
            // eslint-disable-next-line
            var blazorEventExtend = isBlazor() ? (!(src instanceof Event) && !isArrayChanged) : true;
            if (deep && blazorEventExtend && (isObject(copy) || Array.isArray(copy))) {
                if (isObject(copy)) {
                    clone = src ? src : {};
                    // eslint-disable-next-line
                    if (Array.isArray(clone) && clone.hasOwnProperty('isComplexArray')) {
                        extend(clone, {}, copy, deep);
                    }
                    else {
                        result[key] = extend(clone, {}, copy, deep);
                    }
                }
                else {
                    /* istanbul ignore next */
                    clone = isBlazor() ? src && Object.keys(copy).length : src ? src : [];
                    result[key] = extend([], clone, copy, deep);
                }
            }
            else {
                result[key] = copy;
            }
        });
    };
    var arguments_1 = arguments;
    for (var i = 1; i < length; i++) {
        _loop_1(i);
    }
    return result;
}
/**
 * To check whether the object is null or undefined.
 *
 * @param {Object} value - To check the object is null or undefined
 * @returns {boolean} ?
 * @private
 */
function isNullOrUndefined(value) {
    return value === undefined || value === null;
}
/**
 * To check whether the object is undefined.
 *
 * @param {Object} value - To check the object is undefined
 * @returns {boolean} ?
 * @private
 */
function isUndefined(value) {
    return ('undefined' === typeof value);
}
/**
 * To return the generated unique name
 *
 * @param {string} definedName - To concatenate the unique id to provided name
 * @returns {string} ?
 * @private
 */
function getUniqueID(definedName) {
    return definedName + '_' + uid++;
}
/**
 * It limits the rate at which a function can fire. The function will fire only once every provided second instead of as quickly.
 *
 * @param {Function} eventFunction - Specifies the function to run when the event occurs
 * @param {number} delay - A number that specifies the milliseconds for function delay call option
 * @returns {Function} ?
 * @private
 */
function debounce(eventFunction, delay) {
    // eslint-disable-next-line
    var out;
    return function () {
        var _this = this;
        // eslint-disable-next-line
        var args = arguments;
        var later = function () {
            out = null;
            return eventFunction.apply(_this, args);
        };
        clearTimeout(out);
        out = setTimeout(later, delay);
    };
}
/**
 * To convert the object to string for query url
 *
 * @param  {Object} data ?
 * @returns {string} ?
 * @private
 */
// eslint-disable-next-line
function queryParams(data) {
    var array = [];
    var keys = Object.keys(data);
    for (var _i = 0, keys_2 = keys; _i < keys_2.length; _i++) {
        var key = keys_2[_i];
        array.push(encodeURIComponent(key) + '=' + encodeURIComponent('' + data[key]));
    }
    return array.join('&');
}
/**
 * To check whether the given array contains object.
 *
 * @param {any} value - Specifies the T type array to be checked.
 * @returns {boolean} ?
 * @private
 */
function isObjectArray(value) {
    var parser = Object.prototype.toString;
    if (parser.call(value) === '[object Array]') {
        if (parser.call(value[0]) === '[object Object]') {
            return true;
        }
    }
    return false;
}
/**
 * To check whether the  child element is descendant to parent element or parent and child are same element.
 *
 * @param {Element} child - Specifies the child element to compare with parent.
 * @param {Element} parent - Specifies the parent element.
 * @returns {boolean} ?
 * @private
 */
function compareElementParent(child, parent) {
    var node = child;
    if (node === parent) {
        return true;
    }
    else if (node === document || !node) {
        return false;
    }
    else {
        return compareElementParent(node.parentNode, parent);
    }
}
/**
 * To throw custom error message.
 *
 * @param {string} message - Specifies the error message to be thrown.
 * @returns {void} ?
 * @private
 */
function throwError(message) {
    try {
        throw new Error(message);
    }
    catch (e) {
        // eslint-disable-next-line
        throw e.message + '\n' + e.stack;
    }
}
/**
 * This function is used to print given element
 *
 * @param {Element} element - Specifies the print content element.
 * @param {Window} printWindow - Specifies the print window.
 * @returns {Window} ?
 * @private
 */
function print(element, printWindow) {
    var div = document.createElement('div');
    var links = [].slice.call(document.getElementsByTagName('head')[0].querySelectorAll('base, link, style'));
    var blinks = [].slice.call(document.getElementsByTagName('body')[0].querySelectorAll('link, style'));
    if (blinks.length) {
        for (var l = 0, len = blinks.length; l < len; l++) {
            links.push(blinks[l]);
        }
    }
    var reference = '';
    if (isNullOrUndefined(printWindow)) {
        printWindow = window.open('', 'print', 'height=452,width=1024,tabbar=no');
    }
    div.appendChild(element.cloneNode(true));
    for (var i = 0, len = links.length; i < len; i++) {
        reference += links[i].outerHTML;
    }
    printWindow.document.write('<!DOCTYPE html> <html><head>' + reference + '</head><body>' + div.innerHTML +
        '<script> (function() { window.ready = true; })(); </script>' + '</body></html>');
    printWindow.document.close();
    printWindow.focus();
    // eslint-disable-next-line
    var interval = setInterval(function () {
        if (printWindow.ready) {
            printWindow.print();
            printWindow.close();
            clearInterval(interval);
        }
    }, 500);
    return printWindow;
}
/**
 * Function to normalize the units applied to the element.
 *
 * @param {number|string} value ?
 * @returns {string} result
 * @private
 */
function formatUnit(value) {
    var result = value + '';
    if (result.match(/auto|cm|mm|in|px|pt|pc|%|em|ex|ch|rem|vw|vh|vmin|vmax/)) {
        return result;
    }
    return result + 'px';
}
/**
 * Function to check whether the platform is blazor or not.
 *
 * @returns {void} result
 * @private
 */
function enableBlazorMode() {
    isBlazorPlatform = true;
}
/**
 * Function to check whether the platform is blazor or not.
 *
 * @returns {boolean} result
 * @private
 */
function isBlazor() {
    return isBlazorPlatform;
}
/**
 * Function to convert xPath to DOM element in blazor platform
 *
 * @returns {HTMLElement} result
 * @param {HTMLElement | object} element ?
 * @private
 */
function getElement(element) {
    var xPath = 'xPath';
    if (!(element instanceof Node) && isBlazor() && !isNullOrUndefined(element[xPath])) {
        return document.evaluate(element[xPath], document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    }
    return element;
}
/**
 * Function to fetch the Instances of a HTML element for the given component.
 *
 * @param {string | HTMLElement} element ?
 * @param {any} component ?
 * @returns {Object} ?
 * @private
 */
// eslint-disable-next-line
function getInstance(element, component) {
    // eslint-disable-next-line
    var elem = (typeof (element) === 'string') ? document.querySelector(element) : element;
    if (elem[instances]) {
        for (var _i = 0, _a = elem[instances]; _i < _a.length; _i++) {
            var inst = _a[_i];
            if (inst instanceof component) {
                return inst;
            }
        }
    }
    return null;
}
/**
 * Function to add instances for the given element.
 *
 * @param {string | HTMLElement} element ?
 * @param {Object} instance ?
 * @returns {void} ?
 * @private
 */
function addInstance(element, instance) {
    // eslint-disable-next-line
    var elem = (typeof (element) === 'string') ? document.querySelector(element) : element;
    if (elem[instances]) {
        elem[instances].push(instance);
    }
    else {
        elem[instances] = [instance];
    }
}
/**
 * Function to generate the unique id.
 *
 * @returns {any} ?
 * @private
 */
// eslint-disable-next-line
function uniqueID() {
    if ((typeof window) === 'undefined') {
        return;
    }
    // eslint-disable-next-line
    var num = new Uint16Array(5);
    var intCrypto = window.msCrypto || window.crypto;
    return intCrypto.getRandomValues(num);
}
/**
 *
 * @param {Int16Array} num ?
 * @returns {string} ?
 */
function combineArray(num) {
    var ret = '';
    for (var i = 0; i < 5; i++) {
        ret += (i ? ',' : '') + num[i];
    }
    return ret;
}

/**
 * Parser
 */
var defaultNumberingSystem = {
    'latn': {
        '_digits': '0123456789',
        '_type': 'numeric'
    }
};
var defaultNumberSymbols = {
    'decimal': '.',
    'group': ',',
    'percentSign': '%',
    'plusSign': '+',
    'minusSign': '-',
    'infinity': '∞',
    'nan': 'NaN',
    'exponential': 'E'
};
var latnNumberSystem = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
/**
 * Interface for parser base
 *
 * @private
 */
var ParserBase = /** @class */ (function () {
    function ParserBase() {
    }
    /**
     * Returns the cldr object for the culture specifies
     *
     * @param {Object} obj - Specifies the object from which culture object to be acquired.
     * @param {string} cName - Specifies the culture name.
     * @returns {Object} ?
     */
    ParserBase.getMainObject = function (obj, cName) {
        var value = isBlazor() ? cName : 'main.' + cName;
        return getValue(value, obj);
    };
    /**
     * Returns the numbering system object from given cldr data.
     *
     * @param {Object} obj - Specifies the object from which number system is acquired.
     * @returns {Object} ?
     */
    ParserBase.getNumberingSystem = function (obj) {
        return getValue('supplemental.numberingSystems', obj) || this.numberingSystems;
    };
    /**
     * Returns the reverse of given object keys or keys specified.
     *
     * @param {Object} prop - Specifies the object to be reversed.
     * @param {number[]} keys - Optional parameter specifies the custom keyList for reversal.
     * @returns {Object} ?
     */
    ParserBase.reverseObject = function (prop, keys) {
        var propKeys = keys || Object.keys(prop);
        var res = {};
        for (var _i = 0, propKeys_1 = propKeys; _i < propKeys_1.length; _i++) {
            var key = propKeys_1[_i];
            // eslint-disable-next-line
            if (!res.hasOwnProperty(prop[key])) {
                // eslint-disable-next-line
                res[prop[key]] = key;
            }
        }
        return res;
    };
    /**
     * Returns the symbol regex by skipping the escape sequence.
     *
     * @param {string[]} props - Specifies the array values to be skipped.
     * @returns {RegExp} ?
     */
    ParserBase.getSymbolRegex = function (props) {
        var regexStr = props.map(function (str) {
            return str.replace(/([.*+?^=!:${}()|[\]/\\])/g, '\\$1');
        }).join('|');
        return new RegExp(regexStr, 'g');
    };
    /**
     *
     * @param {Object} prop ?
     * @returns {Object} ?
     */
    ParserBase.getSymbolMatch = function (prop) {
        var matchKeys = Object.keys(defaultNumberSymbols);
        var ret = {};
        for (var _i = 0, matchKeys_1 = matchKeys; _i < matchKeys_1.length; _i++) {
            var key = matchKeys_1[_i];
            // eslint-disable-next-line
            ret[prop[key]] = defaultNumberSymbols[key];
        }
        return ret;
    };
    /**
     * Returns regex string for provided value
     *
     * @param {string} val ?
     * @returns {string} ?
     */
    ParserBase.constructRegex = function (val) {
        var len = val.length;
        var ret = '';
        for (var i = 0; i < len; i++) {
            if (i !== len - 1) {
                ret += val[i] + '|';
            }
            else {
                ret += val[i];
            }
        }
        return ret;
    };
    /**
     * Returns the replaced value of matching regex and obj mapper.
     *
     * @param {string} value - Specifies the  values to be replaced.
     * @param {RegExp} regex - Specifies the  regex to search.
     * @param {Object} obj - Specifies the  object matcher to be replace value parts.
     * @returns {string} ?
     */
    ParserBase.convertValueParts = function (value, regex, obj) {
        return value.replace(regex, function (str) {
            // eslint-disable-next-line
            return obj[str];
        });
    };
    /**
     * Returns default numbering system object for formatting from cldr data
     *
     * @param {Object} obj ?
     * @returns {NumericObject} ?
     */
    ParserBase.getDefaultNumberingSystem = function (obj) {
        var ret = {};
        ret.obj = getValue('numbers', obj);
        ret.nSystem = getValue('defaultNumberingSystem', ret.obj);
        return ret;
    };
    /**
     * Returns the replaced value of matching regex and obj mapper.
     *
     * @param {Object} curObj ?
     * @param {Object} numberSystem ?
     * @param {boolean} needSymbols ?
     * @param {boolean} blazorMode ?
     * @returns {Object} ?
     */
    ParserBase.getCurrentNumericOptions = function (curObj, numberSystem, needSymbols, blazorMode) {
        var ret = {};
        var cur = this.getDefaultNumberingSystem(curObj);
        if (!isUndefined(cur.nSystem) || blazorMode) {
            var digits = blazorMode ? getValue('obj.mapperDigits', cur) : getValue(cur.nSystem + '._digits', numberSystem);
            if (!isUndefined(digits)) {
                ret.numericPair = this.reverseObject(digits, latnNumberSystem);
                ret.numberParseRegex = new RegExp(this.constructRegex(digits), 'g');
                ret.numericRegex = '[' + digits[0] + '-' + digits[9] + ']';
                if (needSymbols) {
                    ret.numericRegex = digits[0] + '-' + digits[9];
                    ret.symbolNumberSystem = getValue(blazorMode ? 'numberSymbols' : 'symbols-numberSystem-' + cur.nSystem, cur.obj);
                    ret.symbolMatch = this.getSymbolMatch(ret.symbolNumberSystem);
                    ret.numberSystem = cur.nSystem;
                }
            }
        }
        return ret;
    };
    /**
     * Returns number mapper object for the provided cldr data
     *
     * @param {Object} curObj ?
     * @param {Object} numberSystem ?
     * @param {boolean} isNumber ?
     * @returns {NumberMapper} ?
     */
    // eslint-disable-next-line
    ParserBase.getNumberMapper = function (curObj, numberSystem, isNumber) {
        var ret = { mapper: {} };
        var cur = this.getDefaultNumberingSystem(curObj);
        if (!isUndefined(cur.nSystem)) {
            ret.numberSystem = cur.nSystem;
            ret.numberSymbols = getValue('symbols-numberSystem-' + cur.nSystem, cur.obj);
            ret.timeSeparator = getValue('timeSeparator', ret.numberSymbols);
            var digits = getValue(cur.nSystem + '._digits', numberSystem);
            if (!isUndefined(digits)) {
                for (var _i = 0, latnNumberSystem_1 = latnNumberSystem; _i < latnNumberSystem_1.length; _i++) {
                    var i = latnNumberSystem_1[_i];
                    // eslint-disable-next-line
                    ret.mapper[i] = digits[i];
                }
            }
        }
        return ret;
    };
    ParserBase.nPair = 'numericPair';
    ParserBase.nRegex = 'numericRegex';
    ParserBase.numberingSystems = defaultNumberingSystem;
    return ParserBase;
}());
/**
 * @private
 */
var blazorCurrencyData = {
    'DJF': 'Fdj',
    'ERN': 'Nfk',
    'ETB': 'Br',
    'NAD': '$',
    'ZAR': 'R',
    'XAF': 'FCFA',
    'GHS': 'GH₵',
    'XDR': 'XDR',
    'AED': 'د.إ.‏',
    'BHD': 'د.ب.‏',
    'DZD': 'د.ج.‏',
    'EGP': 'ج.م.‏',
    'ILS': '₪',
    'IQD': 'د.ع.‏',
    'JOD': 'د.ا.‏',
    'KMF': 'CF',
    'KWD': 'د.ك.‏',
    'LBP': 'ل.ل.‏',
    'LYD': 'د.ل.‏',
    'MAD': 'د.م.‏',
    'MRU': 'أ.م.',
    'OMR': 'ر.ع.‏',
    'QAR': 'ر.ق.‏',
    'SAR': 'ر.س.‏',
    'SDG': 'ج.س.',
    'SOS': 'S',
    'SSP': '£',
    'SYP': 'ل.س.‏',
    'TND': 'د.ت.‏',
    'YER': 'ر.ي.‏',
    'CLP': '$',
    'INR': '₹',
    'TZS': 'TSh',
    'EUR': '€',
    'AZN': '₼',
    'RUB': '₽',
    'BYN': 'Br',
    'ZMW': 'K',
    'BGN': 'лв.',
    'NGN': '₦',
    'XOF': 'CFA',
    'BDT': '৳',
    'CNY': '¥',
    'BAM': 'КМ',
    'UGX': 'USh',
    'USD': '$',
    'CZK': 'Kč',
    'GBP': '£',
    'DKK': 'kr.',
    'KES': 'Ksh',
    'CHF': 'CHF',
    'MVR': 'ރ.',
    'BTN': 'Nu.',
    'XCD': 'EC$',
    'AUD': '$',
    'BBD': '$',
    'BIF': 'FBu',
    'BMD': '$',
    'BSD': '$',
    'BWP': 'P',
    'BZD': '$',
    'CAD': '$',
    'NZD': '$',
    'FJD': '$',
    'FKP': '£',
    'GIP': '£',
    'GMD': 'D',
    'GYD': '$',
    'HKD': '$',
    'IDR': 'Rp',
    'JMD': '$',
    'KYD': '$',
    'LRD': '$',
    'MGA': 'Ar',
    'MOP': 'MOP$',
    'MUR': 'Rs',
    'MWK': 'MK',
    'MYR': 'RM',
    'PGK': 'K',
    'PHP': '₱',
    'PKR': 'Rs',
    'RWF': 'RF',
    'SBD': '$',
    'SCR': 'SR',
    'SEK': 'kr',
    'SGD': '$',
    'SHP': '£',
    'SLL': 'Le',
    'ANG': 'NAf.',
    'SZL': 'E',
    'TOP': 'T$',
    'TTD': '$',
    'VUV': 'VT',
    'WST': 'WS$',
    'ARS': '$',
    'BOB': 'Bs',
    'BRL': 'R$',
    'COP': '$',
    'CRC': '₡',
    'CUP': '$',
    'DOP': '$',
    'GTQ': 'Q',
    'HNL': 'L',
    'MXN': '$',
    'NIO': 'C$',
    'PAB': 'B/.',
    'PEN': 'S/',
    'PYG': '₲',
    'UYU': '$',
    'VES': 'Bs.S',
    'IRR': 'ريال',
    'GNF': 'FG',
    'CDF': 'FC',
    'HTG': 'G',
    'XPF': 'FCFP',
    'HRK': 'kn',
    'HUF': 'Ft',
    'AMD': '֏',
    'ISK': 'kr',
    'JPY': '¥',
    'GEL': '₾',
    'CVE': '​',
    'KZT': '₸',
    'KHR': '៛',
    'KPW': '₩',
    'KRW': '₩',
    'KGS': 'сом',
    'AOA': 'Kz',
    'LAK': '₭',
    'MZN': 'MTn',
    'MKD': 'ден',
    'MNT': '₮',
    'BND': '$',
    'MMK': 'K',
    'NOK': 'kr',
    'NPR': 'रु',
    'AWG': 'Afl.',
    'SRD': '$',
    'PLN': 'zł',
    'AFN': '؋',
    'STN': 'Db',
    'MDL': 'L',
    'RON': 'lei',
    'UAH': '₴',
    'LKR': 'රු.',
    'ALL': 'Lekë',
    'RSD': 'дин.',
    'TJS': 'смн',
    'THB': '฿',
    'TMT': 'm.',
    'TRY': '₺',
    'UZS': 'сўм',
    'VND': '₫',
    'TWD': 'NT$'
};
/**
 *
 * @param {string} currencyCode ?
 * @returns {string} ?
 */
function getBlazorCurrencySymbol(currencyCode) {
    return getValue(currencyCode || '', blazorCurrencyData);
}

/***
 * Hijri parser
 */
// eslint-disable-next-line

(function (HijriParser) {
    var dateCorrection = [28607, 28636, 28665, 28695, 28724, 28754, 28783, 28813, 28843, 28872, 28901, 28931, 28960, 28990,
        29019, 29049, 29078, 29108, 29137, 29167, 29196, 29226, 29255, 29285, 29315, 29345, 29375, 29404, 29434, 29463, 29492, 29522,
        29551, 29580, 29610, 29640, 29669, 29699, 29729, 29759, 29788, 29818, 29847, 29876, 29906, 29935, 29964, 29994, 30023, 30053,
        30082, 30112, 30141, 30171, 30200, 30230, 30259, 30289, 30318, 30348, 30378, 30408, 30437, 30467, 30496, 30526, 30555, 30585,
        30614, 30644, 30673, 30703, 30732, 30762, 30791, 30821, 30850, 30880, 30909, 30939, 30968, 30998, 31027, 31057, 31086, 31116,
        31145, 31175, 31204, 31234, 31263, 31293, 31322, 31352, 31381, 31411, 31441, 31471, 31500, 31530, 31559, 31589, 31618, 31648,
        31676, 31706, 31736, 31766, 31795, 31825, 31854, 31884, 31913, 31943, 31972, 32002, 32031, 32061, 32090, 32120, 32150, 32180,
        32209, 32239, 32268, 32298, 32327, 32357, 32386, 32416, 32445, 32475, 32504, 32534, 32563, 32593, 32622, 32652, 32681, 32711,
        32740, 32770, 32799, 32829, 32858, 32888, 32917, 32947, 32976, 33006, 33035, 33065, 33094, 33124, 33153, 33183, 33213, 33243,
        33272, 33302, 33331, 33361, 33390, 33420, 33450, 33479, 33509, 33539, 33568, 33598, 33627, 33657, 33686, 33716, 33745, 33775,
        33804, 33834, 33863, 33893, 33922, 33952, 33981, 34011, 34040, 34069, 34099, 34128, 34158, 34187, 34217, 34247, 34277, 34306,
        34336, 34365, 34395, 34424, 34454, 34483, 34512, 34542, 34571, 34601, 34631, 34660, 34690, 34719, 34749, 34778, 34808, 34837,
        34867, 34896, 34926, 34955, 34985, 35015, 35044, 35074, 35103, 35133, 35162, 35192, 35222, 35251, 35280, 35310, 35340, 35370,
        35399, 35429, 35458, 35488, 35517, 35547, 35576, 35605, 35635, 35665, 35694, 35723, 35753, 35782, 35811, 35841, 35871, 35901,
        35930, 35960, 35989, 36019, 36048, 36078, 36107, 36136, 36166, 36195, 36225, 36254, 36284, 36314, 36343, 36373, 36403, 36433,
        36462, 36492, 36521, 36551, 36580, 36610, 36639, 36669, 36698, 36728, 36757, 36786, 36816, 36845, 36875, 36904, 36934, 36963,
        36993, 37022, 37052, 37081, 37111, 37141, 37170, 37200, 37229, 37259, 37288, 37318, 37347, 37377, 37406, 37436, 37465, 37495,
        37524, 37554, 37584, 37613, 37643, 37672, 37701, 37731, 37760, 37790, 37819, 37849, 37878, 37908, 37938, 37967, 37997, 38027,
        38056, 38085, 38115, 38144, 38174, 38203, 38233, 38262, 38292, 38322, 38351, 38381, 38410, 38440, 38469, 38499, 38528, 38558,
        38587, 38617, 38646, 38676, 38705, 38735, 38764, 38794, 38823, 38853, 38882, 38912, 38941, 38971, 39001, 39030, 39059, 39089,
        39118, 39148, 39178, 39208, 39237, 39267, 39297, 39326, 39355, 39385, 39414, 39444, 39473, 39503, 39532, 39562, 39592, 39621,
        39650, 39680, 39709, 39739, 39768, 39798, 39827, 39857, 39886, 39916, 39946, 39975, 40005, 40035, 40064, 40094, 40123, 40153,
        40182, 40212, 40241, 40271, 40300, 40330, 40359, 40389, 40418, 40448, 40477, 40507, 40536, 40566, 40595, 40625, 40655, 40685,
        40714, 40744, 40773, 40803, 40832, 40862, 40892, 40921, 40951, 40980, 41009, 41039, 41068, 41098, 41127, 41157, 41186, 41216,
        41245, 41275, 41304, 41334, 41364, 41393, 41422, 41452, 41481, 41511, 41540, 41570, 41599, 41629, 41658, 41688, 41718, 41748,
        41777, 41807, 41836, 41865, 41894, 41924, 41953, 41983, 42012, 42042, 42072, 42102, 42131, 42161, 42190, 42220, 42249, 42279,
        42308, 42337, 42367, 42397, 42426, 42456, 42485, 42515, 42545, 42574, 42604, 42633, 42662, 42692, 42721, 42751, 42780, 42810,
        42839, 42869, 42899, 42929, 42958, 42988, 43017, 43046, 43076, 43105, 43135, 43164, 43194, 43223, 43253, 43283, 43312, 43342,
        43371, 43401, 43430, 43460, 43489, 43519, 43548, 43578, 43607, 43637, 43666, 43696, 43726, 43755, 43785, 43814, 43844, 43873,
        43903, 43932, 43962, 43991, 44021, 44050, 44080, 44109, 44139, 44169, 44198, 44228, 44258, 44287, 44317, 44346, 44375, 44405,
        44434, 44464, 44493, 44523, 44553, 44582, 44612, 44641, 44671, 44700, 44730, 44759, 44788, 44818, 44847, 44877, 44906, 44936,
        44966, 44996, 45025, 45055, 45084, 45114, 45143, 45172, 45202, 45231, 45261, 45290, 45320, 45350, 45380, 45409, 45439, 45468,
        45498, 45527, 45556, 45586, 45615, 45644, 45674, 45704, 45733, 45763, 45793, 45823, 45852, 45882, 45911, 45940, 45970, 45999,
        46028, 46058, 46088, 46117, 46147, 46177, 46206, 46236, 46265, 46295, 46324, 46354, 46383, 46413, 46442, 46472, 46501, 46531,
        46560, 46590, 46620, 46649, 46679, 46708, 46738, 46767, 46797, 46826, 46856, 46885, 46915, 46944, 46974, 47003, 47033, 47063,
        47092, 47122, 47151, 47181, 47210, 47240, 47269, 47298, 47328, 47357, 47387, 47417, 47446, 47476, 47506, 47535, 47565, 47594,
        47624, 47653, 47682, 47712, 47741, 47771, 47800, 47830, 47860, 47890, 47919, 47949, 47978, 48008, 48037, 48066, 48096, 48125,
        48155, 48184, 48214, 48244, 48273, 48303, 48333, 48362, 48392, 48421, 48450, 48480, 48509, 48538, 48568, 48598, 48627, 48657,
        48687, 48717, 48746, 48776, 48805, 48834, 48864, 48893, 48922, 48952, 48982, 49011, 49041, 49071, 49100, 49130, 49160, 49189,
        49218, 49248, 49277, 49306, 49336, 49365, 49395, 49425, 49455, 49484, 49514, 49543, 49573, 49602, 49632, 49661, 49690, 49720,
        49749, 49779, 49809, 49838, 49868, 49898, 49927, 49957, 49986, 50016, 50045, 50075, 50104, 50133, 50163, 50192, 50222, 50252,
        50281, 50311, 50340, 50370, 50400, 50429, 50459, 50488, 50518, 50547, 50576, 50606, 50635, 50665, 50694, 50724, 50754, 50784,
        50813, 50843, 50872, 50902, 50931, 50960, 50990, 51019, 51049, 51078, 51108, 51138, 51167, 51197, 51227, 51256, 51286, 51315,
        51345, 51374, 51403, 51433, 51462, 51492, 51522, 51552, 51582, 51611, 51641, 51670, 51699, 51729, 51758, 51787, 51816, 51846,
        51876, 51906, 51936, 51965, 51995, 52025, 52054, 52083, 52113, 52142, 52171, 52200, 52230, 52260, 52290, 52319, 52349, 52379,
        52408, 52438, 52467, 52497, 52526, 52555, 52585, 52614, 52644, 52673, 52703, 52733, 52762, 52792, 52822, 52851, 52881, 52910,
        52939, 52969, 52998, 53028, 53057, 53087, 53116, 53146, 53176, 53205, 53235, 53264, 53294, 53324, 53353, 53383, 53412, 53441,
        53471, 53500, 53530, 53559, 53589, 53619, 53648, 53678, 53708, 53737, 53767, 53796, 53825, 53855, 53884, 53913, 53943, 53973,
        54003, 54032, 54062, 54092, 54121, 54151, 54180, 54209, 54239, 54268, 54297, 54327, 54357, 54387, 54416, 54446, 54476, 54505,
        54535, 54564, 54593, 54623, 54652, 54681, 54711, 54741, 54770, 54800, 54830, 54859, 54889, 54919, 54948, 54977, 55007, 55036,
        55066, 55095, 55125, 55154, 55184, 55213, 55243, 55273, 55302, 55332, 55361, 55391, 55420, 55450, 55479, 55508, 55538, 55567,
        55597, 55627, 55657, 55686, 55716, 55745, 55775, 55804, 55834, 55863, 55892, 55922, 55951, 55981, 56011, 56040, 56070, 56100,
        56129, 56159, 56188, 56218, 56247, 56276, 56306, 56335, 56365, 56394, 56424, 56454, 56483, 56513, 56543, 56572, 56601, 56631,
        56660, 56690, 56719, 56749, 56778, 56808, 56837, 56867, 56897, 56926, 56956, 56985, 57015, 57044, 57074, 57103, 57133, 57162,
        57192, 57221, 57251, 57280, 57310, 57340, 57369, 57399, 57429, 57458, 57487, 57517, 57546, 57576, 57605, 57634, 57664, 57694,
        57723, 57753, 57783, 57813, 57842, 57871, 57901, 57930, 57959, 57989, 58018, 58048, 58077, 58107, 58137, 58167, 58196, 58226,
        58255, 58285, 58314, 58343, 58373, 58402, 58432, 58461, 58491, 58521, 58551, 58580, 58610, 58639, 58669, 58698, 58727, 58757,
        58786, 58816, 58845, 58875, 58905, 58934, 58964, 58994, 59023, 59053, 59082, 59111, 59141, 59170, 59200, 59229, 59259, 59288,
        59318, 59348, 59377, 59407, 59436, 59466, 59495, 59525, 59554, 59584, 59613, 59643, 59672, 59702, 59731, 59761, 59791, 59820,
        59850, 59879, 59909, 59939, 59968, 59997, 60027, 60056, 60086, 60115, 60145, 60174, 60204, 60234, 60264, 60293, 60323, 60352,
        60381, 60411, 60440, 60469, 60499, 60528, 60558, 60588, 60618, 60648, 60677, 60707, 60736, 60765, 60795, 60824, 60853, 60883,
        60912, 60942, 60972, 61002, 61031, 61061, 61090, 61120, 61149, 61179, 61208, 61237, 61267, 61296, 61326, 61356, 61385, 61415,
        61445, 61474, 61504, 61533, 61563, 61592, 61621, 61651, 61680, 61710, 61739, 61769, 61799, 61828, 61858, 61888, 61917, 61947,
        61976, 62006, 62035, 62064, 62094, 62123, 62153, 62182, 62212, 62242, 62271, 62301, 62331, 62360, 62390, 62419, 62448, 62478,
        62507, 62537, 62566, 62596, 62625, 62655, 62685, 62715, 62744, 62774, 62803, 62832, 62862, 62891, 62921, 62950, 62980, 63009,
        63039, 63069, 63099, 63128, 63157, 63187, 63216, 63246, 63275, 63305, 63334, 63363, 63393, 63423, 63453, 63482, 63512, 63541,
        63571, 63600, 63630, 63659, 63689, 63718, 63747, 63777, 63807, 63836, 63866, 63895, 63925, 63955, 63984, 64014, 64043, 64073,
        64102, 64131, 64161, 64190, 64220, 64249, 64279, 64309, 64339, 64368, 64398, 64427, 64457, 64486, 64515, 64545, 64574, 64603,
        64633, 64663, 64692, 64722, 64752, 64782, 64811, 64841, 64870, 64899, 64929, 64958, 64987, 65017, 65047, 65076, 65106, 65136,
        65166, 65195, 65225, 65254, 65283, 65313, 65342, 65371, 65401, 65431, 65460, 65490, 65520, 65549, 65579, 65608, 65638, 65667,
        65697, 65726, 65755, 65785, 65815, 65844, 65874, 65903, 65933, 65963, 65992, 66022, 66051, 66081, 66110, 66140, 66169, 66199,
        66228, 66258, 66287, 66317, 66346, 66376, 66405, 66435, 66465, 66494, 66524, 66553, 66583, 66612, 66641, 66671, 66700, 66730,
        66760, 66789, 66819, 66849, 66878, 66908, 66937, 66967, 66996, 67025, 67055, 67084, 67114, 67143, 67173, 67203, 67233, 67262,
        67292, 67321, 67351, 67380, 67409, 67439, 67468, 67497, 67527, 67557, 67587, 67617, 67646, 67676, 67705, 67735, 67764, 67793,
        67823, 67852, 67882, 67911, 67941, 67971, 68000, 68030, 68060, 68089, 68119, 68148, 68177, 68207, 68236, 68266, 68295, 68325,
        68354, 68384, 68414, 68443, 68473, 68502, 68532, 68561, 68591, 68620, 68650, 68679, 68708, 68738, 68768, 68797, 68827, 68857,
        68886, 68916, 68946, 68975, 69004, 69034, 69063, 69092, 69122, 69152, 69181, 69211, 69240, 69270, 69300, 69330, 69359, 69388,
        69418, 69447, 69476, 69506, 69535, 69565, 69595, 69624, 69654, 69684, 69713, 69743, 69772, 69802, 69831, 69861, 69890, 69919,
        69949, 69978, 70008, 70038, 70067, 70097, 70126, 70156, 70186, 70215, 70245, 70274, 70303, 70333, 70362, 70392, 70421, 70451,
        70481, 70510, 70540, 70570, 70599, 70629, 70658, 70687, 70717, 70746, 70776, 70805, 70835, 70864, 70894, 70924, 70954, 70983,
        71013, 71042, 71071, 71101, 71130, 71159, 71189, 71218, 71248, 71278, 71308, 71337, 71367, 71397, 71426, 71455, 71485, 71514,
        71543, 71573, 71602, 71632, 71662, 71691, 71721, 71751, 71781, 71810, 71839, 71869, 71898, 71927, 71957, 71986, 72016, 72046,
        72075, 72105, 72135, 72164, 72194, 72223, 72253, 72282, 72311, 72341, 72370, 72400, 72429, 72459, 72489, 72518, 72548, 72577,
        72607, 72637, 72666, 72695, 72725, 72754, 72784, 72813, 72843, 72872, 72902, 72931, 72961, 72991, 73020, 73050, 73080, 73109,
        73139, 73168, 73197, 73227, 73256, 73286, 73315, 73345, 73375, 73404, 73434, 73464, 73493, 73523, 73552, 73581, 73611, 73640,
        73669, 73699, 73729, 73758, 73788, 73818, 73848, 73877, 73907, 73936, 73965, 73995, 74024, 74053, 74083, 74113, 74142, 74172,
        74202, 74231, 74261, 74291, 74320, 74349, 74379, 74408, 74437, 74467, 74497, 74526, 74556, 74586, 74615, 74645, 74675, 74704,
        74733, 74763, 74792, 74822, 74851, 74881, 74910, 74940, 74969, 74999, 75029, 75058, 75088, 75117, 75147, 75176, 75206, 75235,
        75264, 75294, 75323, 75353, 75383, 75412, 75442, 75472, 75501, 75531, 75560, 75590, 75619, 75648, 75678, 75707, 75737, 75766,
        75796, 75826, 75856, 75885, 75915, 75944, 75974, 76003, 76032, 76062, 76091, 76121, 76150, 76180, 76210, 76239, 76269, 76299,
        76328, 76358, 76387, 76416, 76446, 76475, 76505, 76534, 76564, 76593, 76623, 76653, 76682, 76712, 76741, 76771, 76801, 76830,
        76859, 76889, 76918, 76948, 76977, 77007, 77036, 77066, 77096, 77125, 77155, 77185, 77214, 77243, 77273, 77302, 77332, 77361,
        77390, 77420, 77450, 77479, 77509, 77539, 77569, 77598, 77627, 77657, 77686, 77715, 77745, 77774, 77804, 77833, 77863, 77893,
        77923, 77952, 77982, 78011, 78041, 78070, 78099, 78129, 78158, 78188, 78217, 78247, 78277, 78307, 78336, 78366, 78395, 78425,
        78454, 78483, 78513, 78542, 78572, 78601, 78631, 78661, 78690, 78720, 78750, 78779, 78808, 78838, 78867, 78897, 78926, 78956,
        78985, 79015, 79044, 79074, 79104, 79133, 79163, 79192, 79222, 79251, 79281, 79310, 79340, 79369, 79399, 79428, 79458, 79487,
        79517, 79546, 79576, 79606, 79635, 79665, 79695, 79724, 79753, 79783, 79812, 79841, 79871, 79900, 79930, 79960, 79990
    ];
    /**
     *
     * @param {Date} gDate ?
     * @returns {Object} ?
     */
    function getHijriDate(gDate) {
        var day = gDate.getDate();
        var month = gDate.getMonth();
        var year = gDate.getFullYear();
        var tMonth = month + 1;
        var tYear = year;
        if (tMonth < 3) {
            tYear -= 1;
            tMonth += 12;
        }
        var yPrefix = Math.floor(tYear / 100.);
        var julilanOffset = yPrefix - Math.floor(yPrefix / 4.) - 2;
        var julianNumber = Math.floor(365.25 * (tYear + 4716)) + Math.floor(30.6001 * (tMonth + 1)) + day - julilanOffset - 1524;
        yPrefix = Math.floor((julianNumber - 1867216.25) / 36524.25);
        julilanOffset = yPrefix - Math.floor(yPrefix / 4.) + 1;
        var b = julianNumber + julilanOffset + 1524;
        var c = Math.floor((b - 122.1) / 365.25);
        var d = Math.floor(365.25 * c);
        var tempMonth = Math.floor((b - d) / 30.6001);
        day = (b - d) - Math.floor(30.6001 * tempMonth);
        month = Math.floor((b - d) / 20.6001);
        if (month > 13) {
            c += 1;
            month -= 12;
        }
        month -= 1;
        year = c - 4716;
        var modifiedJulianDate = julianNumber - 2400000;
        // date calculation for year after 2077
        var iyear = 10631. / 30.;
        var z = julianNumber - 1948084;
        var cyc = Math.floor(z / 10631.);
        z = z - 10631 * cyc;
        var j = Math.floor((z - 0.1335) / iyear);
        var iy = 30 * cyc + j;
        z = z - Math.floor(j * iyear + 0.1335);
        var im = Math.floor((z + 28.5001) / 29.5);
        /* istanbul ignore next */
        if (im === 13) {
            im = 12;
        }
        var tempDay = z - Math.floor(29.5001 * im - 29);
        var i = 0;
        for (; i < dateCorrection.length; i++) {
            if (dateCorrection[i] > modifiedJulianDate) {
                break;
            }
        }
        var iln = i + 16260;
        var ii = Math.floor((iln - 1) / 12);
        var hYear = ii + 1;
        var hmonth = iln - 12 * ii;
        var hDate = modifiedJulianDate - dateCorrection[i - 1] + 1;
        if ((hDate + '').length > 2) {
            hDate = tempDay;
            hmonth = im;
            hYear = iy;
        }
        return { year: hYear, month: hmonth, date: hDate };
    }
    HijriParser.getHijriDate = getHijriDate;
    /**
     *
     * @param {number} year ?
     * @param {number} month ?
     * @param {number} day ?
     * @returns {Date} ?
     */
    function toGregorian(year, month, day) {
        var iy = year;
        var im = month;
        var id = day;
        var ii = iy - 1;
        var iln = (ii * 12) + 1 + (im - 1);
        var i = iln - 16260;
        var mcjdn = id + dateCorrection[i - 1] - 1;
        var julianDate = mcjdn + 2400000;
        var z = Math.floor(julianDate + 0.5);
        var a = Math.floor((z - 1867216.25) / 36524.25);
        a = z + 1 + a - Math.floor(a / 4);
        var b = a + 1524;
        var c = Math.floor((b - 122.1) / 365.25);
        var d = Math.floor(365.25 * c);
        var e = Math.floor((b - d) / 30.6001);
        var gDay = b - d - Math.floor(e * 30.6001);
        var gMonth = e - (e > 13.5 ? 13 : 1);
        var gYear = c - (gMonth > 2.5 ? 4716 : 4715);
        /* istanbul ignore next */
        if (gYear <= 0) {
            gMonth--;
        } // No year zero
        return new Date(gYear + '/' + (gMonth) + '/' + gDay);
    }
    HijriParser.toGregorian = toGregorian;
})(exports.HijriParser || (exports.HijriParser = {}));

var abbreviateRegexGlobal = /\/MMMMM|MMMM|MMM|a|LLLL|LLL|EEEEE|EEEE|E|K|cccc|ccc|WW|W|G+|z+/gi;
var standalone = 'stand-alone';
var weekdayKey = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

var timeSetter = {
    m: 'getMinutes',
    h: 'getHours',
    H: 'getHours',
    s: 'getSeconds',
    d: 'getDate',
    f: 'getMilliseconds'
};
var datePartMatcher = {
    'M': 'month',
    'd': 'day',
    'E': 'weekday',
    'c': 'weekday',
    'y': 'year',
    'm': 'minute',
    'h': 'hour',
    'H': 'hour',
    's': 'second',
    'L': 'month',
    'a': 'designator',
    'z': 'timeZone',
    'Z': 'timeZone',
    'G': 'era',
    'f': 'milliseconds'
};
var timeSeparator = 'timeSeparator';
/* tslint:disable no-any */
/**
 * Date Format is a framework provides support for date formatting.
 *
 * @private
 */
var DateFormat = /** @class */ (function () {
    function DateFormat() {
    }
    /**
     * Returns the formatter function for given skeleton.
     *
     * @param {string} culture -  Specifies the culture name to be which formatting.
     * @param {DateFormatOptions} option - Specific the format in which date  will format.
     * @param {Object} cldr - Specifies the global cldr data collection.
     * @returns {Function} ?
     */
    DateFormat.dateFormat = function (culture, option, cldr) {
        var _this = this;
        var dependable = exports.IntlBase.getDependables(cldr, culture, option.calendar);
        var numObject = getValue('parserObject.numbers', dependable);
        var dateObject = dependable.dateObject;
        var formatOptions = { isIslamic: exports.IntlBase.islamicRegex.test(option.calendar) };
        if (isBlazor() && option.isServerRendered) {
            option = exports.IntlBase.compareBlazorDateFormats(option, culture);
        }
        var resPattern = option.format ||
            exports.IntlBase.getResultantPattern(option.skeleton, dependable.dateObject, option.type, false, isBlazor() ? culture : '');
        formatOptions.dateSeperator = isBlazor() ? getValue('dateSeperator', dateObject) : exports.IntlBase.getDateSeparator(dependable.dateObject);
        if (isUndefined(resPattern)) {
            throwError('Format options or type given must be invalid');
        }
        else {
            resPattern = exports.IntlBase.ConvertDateToWeekFormat(resPattern);
            if (isBlazor()) {
                resPattern = resPattern.replace(/tt/, 'a');
            }
            formatOptions.pattern = resPattern;
            formatOptions.numMapper = isBlazor() ?
                extend({}, numObject) : ParserBase.getNumberMapper(dependable.parserObject, ParserBase.getNumberingSystem(cldr));
            var patternMatch = resPattern.match(abbreviateRegexGlobal) || [];
            for (var _i = 0, patternMatch_1 = patternMatch; _i < patternMatch_1.length; _i++) {
                var str = patternMatch_1[_i];
                var len = str.length;
                var char = str[0];
                if (char === 'K') {
                    char = 'h';
                }
                switch (char) {
                    case 'E':
                    case 'c':
                        if (isBlazor()) {
                            // eslint-disable-next-line
                            formatOptions.weekday = getValue('days.' + exports.IntlBase.monthIndex[len], dateObject);
                        }
                        else {
                            // eslint-disable-next-line
                            formatOptions.weekday = dependable.dateObject[exports.IntlBase.days][standalone][exports.IntlBase.monthIndex[len]];
                        }
                        break;
                    case 'M':
                    case 'L':
                        if (isBlazor()) {
                            // eslint-disable-next-line
                            formatOptions.month = getValue('months.' + exports.IntlBase.monthIndex[len], dateObject);
                        }
                        else {
                            // eslint-disable-next-line
                            formatOptions.month = dependable.dateObject[exports.IntlBase.month][standalone][exports.IntlBase.monthIndex[len]];
                        }
                        break;
                    case 'a':
                        formatOptions.designator = isBlazor() ?
                            getValue('dayPeriods', dateObject) : getValue('dayPeriods.format.wide', dateObject);
                        break;
                    case 'G':
                        // eslint-disable-next-line
                        var eText = (len <= 3) ? 'eraAbbr' : (len === 4) ? 'eraNames' : 'eraNarrow';
                        formatOptions.era = isBlazor() ? getValue('eras', dateObject) : getValue('eras.' + eText, dependable.dateObject);
                        break;
                    case 'z':
                        formatOptions.timeZone = getValue('dates.timeZoneNames', dependable.parserObject);
                        break;
                }
            }
        }
        return function (value) {
            if (isNaN(value.getDate())) {
                return null;
            }
            return _this.intDateFormatter(value, formatOptions);
        };
    };
    /**
     * Returns formatted date string based on options passed.
     *
     * @param {Date} value ?
     * @param {FormatOptions} options ?
     * @returns {string} ?
     */
    DateFormat.intDateFormatter = function (value, options) {
        var pattern = options.pattern;
        var ret = '';
        var matches = pattern.match(exports.IntlBase.dateParseRegex);
        var dObject = this.getCurrentDateValue(value, options.isIslamic);
        for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
            var match = matches_1[_i];
            var length_1 = match.length;
            var char = match[0];
            if (char === 'K') {
                char = 'h';
            }
            var curval = void 0;
            var curvalstr = '';
            var isNumber = void 0;
            var processNumber = void 0;
            var curstr = '';
            switch (char) {
                case 'M':
                case 'L':
                    curval = dObject.month;
                    if (length_1 > 2) {
                        // eslint-disable-next-line
                        ret += options.month[curval];
                    }
                    else {
                        isNumber = true;
                    }
                    break;
                case 'E':
                case 'c':
                    // eslint-disable-next-line
                    ret += options.weekday[weekdayKey[value.getDay()]];
                    break;
                case 'H':
                case 'h':
                case 'm':
                case 's':
                case 'd':
                case 'f':
                    isNumber = true;
                    if (char === 'd') {
                        curval = dObject.date;
                    }
                    else if (char === 'f') {
                        isNumber = false;
                        processNumber = true;
                        // eslint-disable-next-line
                        curvalstr = value[timeSetter[char]]().toString();
                        curvalstr = curvalstr.substring(0, length_1);
                        var curlength = curvalstr.length;
                        if (length_1 !== curlength) {
                            if (length_1 > 3) {
                                continue;
                            }
                            for (var i = 0; i < length_1 - curlength; i++) {
                                curvalstr = '0' + curvalstr.toString();
                            }
                        }
                        curstr += curvalstr;
                    }
                    else {
                        // eslint-disable-next-line
                        curval = value[timeSetter[char]]();
                    }
                    if (char === 'h') {
                        curval = curval % 12 || 12;
                    }
                    break;
                case 'y':
                    processNumber = true;
                    curstr += dObject.year;
                    if (length_1 === 2) {
                        curstr = curstr.substr(curstr.length - 2);
                    }
                    break;
                case 'a':
                    // eslint-disable-next-line
                    var desig = value.getHours() < 12 ? 'am' : 'pm';
                    // eslint-disable-next-line
                    ret += options.designator[desig];
                    break;
                case 'G':
                    // eslint-disable-next-line
                    var dec = value.getFullYear() < 0 ? 0 : 1;
                    // eslint-disable-next-line
                    var retu = options.era[dec];
                    if (isNullOrUndefined(retu)) {
                        // eslint-disable-next-line
                        retu = options.era[dec ? 0 : 1];
                    }
                    ret += retu || '';
                    break;
                case '\'':
                    ret += (match === '\'\'') ? '\'' : match.replace(/'/g, '');
                    break;
                case 'z':
                    // eslint-disable-next-line
                    var timezone = value.getTimezoneOffset();
                    // eslint-disable-next-line
                    var pattern_1 = (length_1 < 4) ? '+H;-H' : options.timeZone.hourFormat;
                    pattern_1 = pattern_1.replace(/:/g, options.numMapper.timeSeparator);
                    if (timezone === 0) {
                        ret += options.timeZone.gmtZeroFormat;
                    }
                    else {
                        processNumber = true;
                        curstr = this.getTimeZoneValue(timezone, pattern_1);
                    }
                    curstr = options.timeZone.gmtFormat.replace(/\{0\}/, curstr);
                    break;
                case ':':
                    // eslint-disable-next-line
                    ret += options.numMapper.numberSymbols[timeSeparator];
                    break;
                case '/':
                    ret += options.dateSeperator;
                    break;
                case 'W':
                    isNumber = true;
                    curval = exports.IntlBase.getWeekOfYear(value);
                    break;
                default:
                    ret += match;
            }
            if (isNumber) {
                processNumber = true;
                curstr = this.checkTwodigitNumber(curval, length_1);
            }
            if (processNumber) {
                ret += ParserBase.convertValueParts(curstr, exports.IntlBase.latnParseRegex, options.numMapper.mapper);
            }
        }
        return ret;
    };
    DateFormat.getCurrentDateValue = function (value, isIslamic) {
        if (isIslamic) {
            return exports.HijriParser.getHijriDate(value);
        }
        return { year: value.getFullYear(), month: value.getMonth() + 1, date: value.getDate() };
    };
    /**
     * Returns two digit numbers for given value and length
     *
     * @param {number} val ?
     * @param {number} len ?
     * @returns {string} ?
     */
    DateFormat.checkTwodigitNumber = function (val, len) {
        var ret = val + '';
        if (len === 2 && ret.length !== 2) {
            return '0' + ret;
        }
        return ret;
    };
    /**
     * Returns the value of the Time Zone.
     *
     * @param {number} tVal ?
     * @param {string} pattern ?
     * @returns {string} ?
     * @private
     */
    DateFormat.getTimeZoneValue = function (tVal, pattern) {
        var _this = this;
        var splt = pattern.split(';');
        var curPattern = splt[tVal > 0 ? 1 : 0];
        var no = Math.abs(tVal);
        return curPattern = curPattern.replace(/HH?|mm/g, function (str) {
            var len = str.length;
            var ishour = str.indexOf('H') !== -1;
            return _this.checkTwodigitNumber(Math.floor(ishour ? (no / 60) : (no % 60)), len);
        });
    };
    return DateFormat;
}());

var errorText = {
    'ms': 'minimumSignificantDigits',
    'ls': 'maximumSignificantDigits',
    'mf': 'minimumFractionDigits',
    'lf': 'maximumFractionDigits',
};
var percentSign = 'percentSign';
var minusSign = 'minusSign';
var mapper$1 = ['infinity', 'nan', 'group', 'decimal', 'exponential'];
/**
 * Module for number formatting.
 *
 * @private
 */
var NumberFormat = /** @class */ (function () {
    function NumberFormat() {
    }
    /**
     * Returns the formatter function for given skeleton.
     *
     * @param {string} culture -  Specifies the culture name to be which formatting.
     * @param {NumberFormatOptions} option - Specific the format in which number  will format.
     * @param {Object} cldr - Specifies the global cldr data collection.
     * @returns {Function} ?
     */
    NumberFormat.numberFormatter = function (culture, option, cldr) {
        var _this = this;
        var fOptions = extend({}, option);
        var cOptions = {};
        var dOptions = {};
        var symbolPattern;
        var dependable = exports.IntlBase.getDependables(cldr, culture, '', true);
        var numObject = dependable.numericObject;
        dOptions.numberMapper = isBlazor() ? extend({}, numObject) :
            ParserBase.getNumberMapper(dependable.parserObject, ParserBase.getNumberingSystem(cldr), true);
        dOptions.currencySymbol = isBlazor() ? getValue('currencySymbol', numObject) : exports.IntlBase.getCurrencySymbol(dependable.numericObject, fOptions.currency || exports.defaultCurrencyCode, option.altSymbol);
        /* eslint-disable  @typescript-eslint/no-explicit-any */
        dOptions.percentSymbol = isBlazor() ? getValue('numberSymbols.percentSign', numObject) :
            dOptions.numberMapper.numberSymbols[percentSign];
        dOptions.minusSymbol = isBlazor() ? getValue('numberSymbols.minusSign', numObject) :
            dOptions.numberMapper.numberSymbols[minusSign];
        var symbols = dOptions.numberMapper.numberSymbols;
        if ((option.format) && !(exports.IntlBase.formatRegex.test(option.format))) {
            cOptions = exports.IntlBase.customFormat(option.format, dOptions, dependable.numericObject);
        }
        else {
            extend(fOptions, exports.IntlBase.getProperNumericSkeleton(option.format || 'N'));
            fOptions.isCurrency = fOptions.type === 'currency';
            fOptions.isPercent = fOptions.type === 'percent';
            if (!isBlazor()) {
                symbolPattern = exports.IntlBase.getSymbolPattern(fOptions.type, dOptions.numberMapper.numberSystem, dependable.numericObject, fOptions.isAccount);
            }
            fOptions.groupOne = this.checkValueRange(fOptions.maximumSignificantDigits, fOptions.minimumSignificantDigits, true);
            this.checkValueRange(fOptions.maximumFractionDigits, fOptions.minimumFractionDigits, false, true);
            if (!isUndefined(fOptions.fractionDigits)) {
                fOptions.minimumFractionDigits = fOptions.maximumFractionDigits = fOptions.fractionDigits;
            }
            if (isUndefined(fOptions.useGrouping)) {
                fOptions.useGrouping = true;
            }
            if (fOptions.isCurrency && !isBlazor()) {
                symbolPattern = symbolPattern.replace(/\u00A4/g, exports.IntlBase.defaultCurrency);
            }
            if (!isBlazor()) {
                var split = symbolPattern.split(';');
                cOptions.nData = exports.IntlBase.getFormatData(split[1] || '-' + split[0], true, dOptions.currencySymbol);
                cOptions.pData = exports.IntlBase.getFormatData(split[0], false, dOptions.currencySymbol);
                if (fOptions.useGrouping) {
                    fOptions.groupSeparator = symbols[mapper$1[2]];
                    fOptions.groupData = this.getGroupingDetails(split[0]);
                }
            }
            else {
                cOptions.nData = extend({}, {}, getValue(fOptions.type + 'nData', numObject));
                cOptions.pData = extend({}, {}, getValue(fOptions.type + 'pData', numObject));
                if (fOptions.type === 'currency' && option.currency) {
                    exports.IntlBase.replaceBlazorCurrency([cOptions.pData, cOptions.nData], dOptions.currencySymbol, option.currency);
                }
            }
            var minFrac = isUndefined(fOptions.minimumFractionDigits);
            if (minFrac) {
                fOptions.minimumFractionDigits = cOptions.nData.minimumFraction;
            }
            if (isUndefined(fOptions.maximumFractionDigits)) {
                var mval = cOptions.nData.maximumFraction;
                fOptions.maximumFractionDigits = isUndefined(mval) && fOptions.isPercent ? 0 : mval;
            }
            var mfrac = fOptions.minimumFractionDigits;
            var lfrac = fOptions.maximumFractionDigits;
            if (!isUndefined(mfrac) && !isUndefined(lfrac)) {
                if (mfrac > lfrac) {
                    fOptions.maximumFractionDigits = mfrac;
                }
            }
        }
        extend(cOptions.nData, fOptions);
        extend(cOptions.pData, fOptions);
        return function (value) {
            if (isNaN(value)) {
                return symbols[mapper$1[1]];
            }
            else if (!isFinite(value)) {
                return symbols[mapper$1[0]];
            }
            return _this.intNumberFormatter(value, cOptions, dOptions);
        };
    };
    /**
     * Returns grouping details for the pattern provided
     *
     * @param {string} pattern ?
     * @returns {GroupDetails} ?
     */
    NumberFormat.getGroupingDetails = function (pattern) {
        var ret = {};
        var match = pattern.match(exports.IntlBase.negativeDataRegex);
        if (match && match[4]) {
            var pattern_1 = match[4];
            var p = pattern_1.lastIndexOf(',');
            if (p !== -1) {
                var temp = pattern_1.split('.')[0];
                ret.primary = (temp.length - p) - 1;
                var s = pattern_1.lastIndexOf(',', p - 1);
                if (s !== -1) {
                    ret.secondary = p - 1 - s;
                }
            }
        }
        return ret;
    };
    /**
     * Returns if the provided integer range is valid.
     *
     * @param {number} val1 ?
     * @param {number} val2 ?
     * @param {boolean} checkbothExist ?
     * @param {boolean} isFraction ?
     * @returns {boolean} ?
     */
    NumberFormat.checkValueRange = function (val1, val2, checkbothExist, isFraction) {
        var decide = isFraction ? 'f' : 's';
        var dint = 0;
        var str1 = errorText['l' + decide];
        // eslint-disable-next-line
        var str2 = errorText['m' + decide];
        if (!isUndefined(val1)) {
            this.checkRange(val1, str1, isFraction);
            dint++;
        }
        if (!isUndefined(val2)) {
            this.checkRange(val2, str2, isFraction);
            dint++;
        }
        if (dint === 2) {
            if (val1 < val2) {
                throwError(str2 + 'specified must be less than the' + str1);
            }
            else {
                return true;
            }
        }
        else if (checkbothExist && dint === 1) {
            throwError('Both' + str2 + 'and' + str2 + 'must be present');
        }
        return false;
    };
    /**
     * Check if the provided fraction range is valid
     *
     * @param {number} val ?
     * @param {string} text ?
     * @param {boolean} isFraction ?
     * @returns {void} ?
     */
    NumberFormat.checkRange = function (val, text, isFraction) {
        var range = isFraction ? [0, 20] : [1, 21];
        if (val < range[0] || val > range[1]) {
            throwError(text + 'value must be within the range' + range[0] + 'to' + range[1]);
        }
    };
    /**
     * Returns formatted numeric string for provided formatting options
     *
     * @param {number} value ?
     * @param {base.GenericFormatOptions} fOptions ?
     * @param {CommonOptions} dOptions ?
     * @returns {string} ?
     */
    NumberFormat.intNumberFormatter = function (value, fOptions, dOptions) {
        var curData;
        if (isUndefined(fOptions.nData.type)) {
            return undefined;
        }
        else {
            if (value < 0) {
                value = value * -1;
                curData = fOptions.nData;
            }
            else if (value === 0) {
                curData = fOptions.zeroData || fOptions.pData;
            }
            else {
                curData = fOptions.pData;
            }
            var fValue = '';
            if (curData.isPercent) {
                value = value * 100;
            }
            if (curData.groupOne) {
                fValue = this.processSignificantDigits(value, curData.minimumSignificantDigits, curData.maximumSignificantDigits);
            }
            else {
                fValue = this.processFraction(value, curData.minimumFractionDigits, curData.maximumFractionDigits);
                if (curData.minimumIntegerDigits) {
                    fValue = this.processMinimumIntegers(fValue, curData.minimumIntegerDigits);
                }
            }
            if (curData.type === 'scientific') {
                fValue = value.toExponential(curData.maximumFractionDigits);
                fValue = fValue.replace('e', dOptions.numberMapper.numberSymbols[mapper$1[4]]);
            }
            fValue = fValue.replace('.', dOptions.numberMapper.numberSymbols[mapper$1[3]]);
            if (curData.useGrouping) {
                /* eslint-disable  @typescript-eslint/no-explicit-any */
                fValue = this.groupNumbers(fValue, curData.groupData.primary, curData.groupSeparator || ',', dOptions.numberMapper.numberSymbols[mapper$1[3]] || '.', curData.groupData.secondary);
            }
            fValue = ParserBase.convertValueParts(fValue, exports.IntlBase.latnParseRegex, dOptions.numberMapper.mapper);
            if (curData.nlead === 'N/A') {
                return curData.nlead;
            }
            else {
                return curData.nlead + fValue + curData.nend;
            }
        }
    };
    /**
     * Returns significant digits processed numeric string
     *
     * @param {number} value ?
     * @param {number} min ?
     * @param {number} max ?
     * @returns {string} ?
     */
    NumberFormat.processSignificantDigits = function (value, min, max) {
        var temp = value + '';
        var tn;
        var length = temp.length;
        if (length < min) {
            return value.toPrecision(min);
        }
        else {
            temp = value.toPrecision(max);
            tn = +temp;
            return tn + '';
        }
    };
    /**
     * Returns grouped numeric string
     *
     * @param {string} val ?
     * @param {number} level1 ?
     * @param {string} sep ?
     * @param {string} decimalSymbol ?
     * @param {number} level2 ?
     * @returns {string} ?
     */
    NumberFormat.groupNumbers = function (val, level1, sep, decimalSymbol, level2) {
        var flag = !isNullOrUndefined(level2) && level2 !== 0;
        var split = val.split(decimalSymbol);
        var prefix = split[0];
        var length = prefix.length;
        var str = '';
        while (length > level1) {
            str = prefix.slice(length - level1, length) + (str.length ?
                (sep + str) : '');
            length -= level1;
            if (flag) {
                level1 = level2;
                flag = false;
            }
        }
        split[0] = prefix.slice(0, length) + (str.length ? sep : '') + str;
        return split.join(decimalSymbol);
    };
    /**
     * Returns fraction processed numeric string
     *
     * @param {number} value ?
     * @param {number} min ?
     * @param {number} max ?
     * @returns {string} ?
     */
    NumberFormat.processFraction = function (value, min, max) {
        var temp = (value + '').split('.')[1];
        var length = temp ? temp.length : 0;
        if (min && length < min) {
            var ret = '';
            if (length === 0) {
                ret = value.toFixed(min);
            }
            else {
                ret += value;
                for (var j = 0; j < min - length; j++) {
                    ret += '0';
                }
                return ret;
            }
            return value.toFixed(min);
        }
        else if (!isNullOrUndefined(max) && (length > max || max === 0)) {
            return value.toFixed(max);
        }
        return value + '';
    };
    /**
     * Returns integer processed numeric string
     *
     * @param {string} value ?
     * @param {number} min ?
     * @returns {string} ?
     */
    NumberFormat.processMinimumIntegers = function (value, min) {
        var temp = value.split('.');
        var lead = temp[0];
        var len = lead.length;
        if (len < min) {
            for (var i = 0; i < min - len; i++) {
                lead = '0' + lead;
            }
            temp[0] = lead;
        }
        return temp.join('.');
    };
    return NumberFormat;
}());

var standalone$1 = 'stand-alone';
var latnRegex = /^[0-9]*$/;
var timeSetter$1 = {
    minute: 'setMinutes',
    hour: 'setHours',
    second: 'setSeconds',
    day: 'setDate',
    month: 'setMonth',
    milliseconds: 'setMilliseconds'
};
var month = 'months';
/* tslint:disable no-any */
/**
 * Date Parser.
 *
 * @private
 */
var DateParser = /** @class */ (function () {
    function DateParser() {
    }
    /**
     * Returns the parser function for given skeleton.
     *
     * @param {string} culture -  Specifies the culture name to be which formatting.
     * @param {DateFormatOptions} option - Specific the format in which string date  will be parsed.
     * @param {Object} cldr - Specifies the global cldr data collection.
     * @returns {Function} ?
     */
    DateParser.dateParser = function (culture, option, cldr) {
        var _this = this;
        var dependable = exports.IntlBase.getDependables(cldr, culture, option.calendar);
        var numOptions = ParserBase.getCurrentNumericOptions(dependable.parserObject, ParserBase.getNumberingSystem(cldr), false, isBlazor());
        var parseOptions = {};
        if (isBlazor() && option.isServerRendered) {
            option = exports.IntlBase.compareBlazorDateFormats(option, culture);
        }
        var resPattern = option.format ||
            exports.IntlBase.getResultantPattern(option.skeleton, dependable.dateObject, option.type, false, isBlazor() ? culture : '');
        var regexString = '';
        var hourOnly;
        if (isUndefined(resPattern)) {
            throwError('Format options or type given must be invalid');
        }
        else {
            resPattern = exports.IntlBase.ConvertDateToWeekFormat(resPattern);
            parseOptions = { isIslamic: exports.IntlBase.islamicRegex.test(option.calendar), pattern: resPattern, evalposition: {}, culture: culture };
            var patternMatch = resPattern.match(exports.IntlBase.dateParseRegex) || [];
            var length_1 = patternMatch.length;
            var gmtCorrection = 0;
            var zCorrectTemp = 0;
            var isgmtTraversed = false;
            var nRegx = numOptions.numericRegex;
            // eslint-disable-next-line
            var numMapper = isBlazor() ? dependable.parserObject.numbers :
                ParserBase.getNumberMapper(dependable.parserObject, ParserBase.getNumberingSystem(cldr));
            for (var i = 0; i < length_1; i++) {
                var str = patternMatch[i];
                var len = str.length;
                var char = (str[0] === 'K') ? 'h' : str[0];
                var isNumber = void 0;
                var canUpdate = void 0;
                // eslint-disable-next-line
                var charKey = datePartMatcher[char];
                var optional = (len === 2) ? '' : '?';
                if (isgmtTraversed) {
                    gmtCorrection = zCorrectTemp;
                    isgmtTraversed = false;
                }
                switch (char) {
                    case 'E':
                    case 'c':
                        // eslint-disable-next-line
                        var weekData = void 0;
                        if (isBlazor()) {
                            // eslint-disable-next-line
                            weekData = getValue('days.' + exports.IntlBase.monthIndex[len], dependable.dateObject);
                        }
                        else {
                            // eslint-disable-next-line
                            weekData = dependable.dateObject[exports.IntlBase.days][standalone$1][exports.IntlBase.monthIndex[len]];
                        }
                        // eslint-disable-next-line
                        var weekObject = ParserBase.reverseObject(weekData);
                        // tslint:enable
                        regexString += '(' + Object.keys(weekObject).join('|') + ')';
                        break;
                    case 'M':
                    case 'L':
                    case 'd':
                    case 'm':
                    case 's':
                    case 'h':
                    case 'H':
                    case 'f':
                        canUpdate = true;
                        if ((char === 'M' || char === 'L') && len > 2) {
                            var monthData = void 0;
                            if (isBlazor()) {
                                // eslint-disable-next-line
                                monthData = getValue('months.' + exports.IntlBase.monthIndex[len], dependable.dateObject);
                            }
                            else {
                                // eslint-disable-next-line
                                monthData = dependable.dateObject[month][standalone$1][exports.IntlBase.monthIndex[len]];
                            }
                            // eslint-disable-next-line
                            parseOptions[charKey] = ParserBase.reverseObject(monthData);
                            // eslint-disable-next-line
                            regexString += '(' + Object.keys(parseOptions[charKey]).join('|') + ')';
                        }
                        else if (char === 'f') {
                            if (len > 3) {
                                continue;
                            }
                            isNumber = true;
                            regexString += '(' + nRegx + nRegx + '?' + nRegx + '?' + ')';
                        }
                        else {
                            isNumber = true;
                            regexString += '(' + nRegx + nRegx + optional + ')';
                        }
                        if (char === 'h') {
                            parseOptions.hour12 = true;
                        }
                        break;
                    case 'W':
                        // eslint-disable-next-line
                        var opt = len === 1 ? '?' : '';
                        regexString += '(' + nRegx + opt + nRegx + ')';
                        break;
                    case 'y':
                        canUpdate = isNumber = true;
                        if (len === 2) {
                            regexString += '(' + nRegx + nRegx + ')';
                        }
                        else {
                            regexString += '(' + nRegx + '{' + len + ',})';
                        }
                        break;
                    case 'a':
                        canUpdate = true;
                        // eslint-disable-next-line
                        var periodValur = isBlazor() ?
                            getValue('dayPeriods', dependable.dateObject) :
                            getValue('dayPeriods.format.wide', dependable.dateObject);
                        // eslint-disable-next-line
                        parseOptions[charKey] = ParserBase.reverseObject(periodValur);
                        // eslint-disable-next-line
                        regexString += '(' + Object.keys(parseOptions[charKey]).join('|') + ')';
                        break;
                    case 'G':
                        canUpdate = true;
                        // eslint-disable-next-line
                        var eText = (len <= 3) ? 'eraAbbr' : (len === 4) ? 'eraNames' : 'eraNarrow';
                        // eslint-disable-next-line
                        parseOptions[charKey] = ParserBase.reverseObject(isBlazor() ?
                            getValue('eras', dependable.dateObject) : getValue('eras.' + eText, dependable.dateObject));
                        // eslint-disable-next-line
                        regexString += '(' + Object.keys(parseOptions[charKey]).join('|') + '?)';
                        break;
                    case 'z':
                        // eslint-disable-next-line
                        var tval = new Date().getTimezoneOffset();
                        canUpdate = (tval !== 0);
                        // eslint-disable-next-line
                        parseOptions[charKey] = getValue('dates.timeZoneNames', dependable.parserObject);
                        // eslint-disable-next-line
                        var tzone = parseOptions[charKey];
                        hourOnly = (len < 4);
                        // eslint-disable-next-line
                        var hpattern = hourOnly ? '+H;-H' : tzone.hourFormat;
                        hpattern = hpattern.replace(/:/g, numMapper.timeSeparator);
                        regexString += '(' + this.parseTimeZoneRegx(hpattern, tzone, nRegx) + ')?';
                        isgmtTraversed = true;
                        zCorrectTemp = hourOnly ? 6 : 12;
                        break;
                    case '\'':
                        // eslint-disable-next-line
                        var iString = str.replace(/'/g, '');
                        regexString += '(' + iString + ')?';
                        break;
                    default:
                        regexString += '([\\D])';
                        break;
                }
                if (canUpdate) {
                    parseOptions.evalposition[charKey] = { isNumber: isNumber, pos: i + 1 + gmtCorrection, hourOnly: hourOnly };
                }
                if (i === length_1 - 1 && !isNullOrUndefined(regexString)) {
                    parseOptions.parserRegex = new RegExp('^' + regexString + '$', 'i');
                }
            }
        }
        return function (value) {
            var parsedDateParts = _this.internalDateParse(value, parseOptions, numOptions);
            if (isNullOrUndefined(parsedDateParts) || !Object.keys(parsedDateParts).length) {
                return null;
            }
            if (parseOptions.isIslamic) {
                var dobj = {};
                var tYear = parsedDateParts.year;
                var tDate = parsedDateParts.day;
                var tMonth = parsedDateParts.month;
                var ystrig = tYear ? (tYear + '') : '';
                var is2DigitYear = (ystrig.length === 2);
                if (!tYear || !tMonth || !tDate || is2DigitYear) {
                    dobj = exports.HijriParser.getHijriDate(new Date());
                }
                if (is2DigitYear) {
                    tYear = parseInt((dobj.year + '').slice(0, 2) + ystrig, 10);
                }
                // tslint:disable-next-line
                var dateObject = exports.HijriParser.toGregorian(tYear || dobj.year, tMonth || dobj.month, tDate || dobj.date);
                parsedDateParts.year = dateObject.getFullYear();
                parsedDateParts.month = dateObject.getMonth() + 1;
                parsedDateParts.day = dateObject.getDate();
            }
            return _this.getDateObject(parsedDateParts);
        };
    };
    /* tslint:disable */
    /**
     * Returns date object for provided date options
     *
     * @param {DateParts} options ?
     * @param {Date} value ?
     * @returns {Date} ?
     */
    DateParser.getDateObject = function (options, value) {
        var res = value || new Date();
        res.setMilliseconds(0);
        var tKeys = ['hour', 'minute', 'second', 'milliseconds', 'month', 'day'];
        var y = options.year;
        var desig = options.designator;
        var tzone = options.timeZone;
        if (!isUndefined(y)) {
            var len = (y + '').length;
            if (len <= 2) {
                var century = Math.floor(res.getFullYear() / 100) * 100;
                y += century;
            }
            res.setFullYear(y);
        }
        for (var _i = 0, tKeys_1 = tKeys; _i < tKeys_1.length; _i++) {
            var key = tKeys_1[_i];
            // eslint-disable-next-line
            var tValue = options[key];
            if (isUndefined(tValue) && key === 'day') {
                res.setDate(1);
            }
            if (!isUndefined(tValue)) {
                if (key === 'month') {
                    tValue -= 1;
                    if (tValue < 0 || tValue > 11) {
                        return new Date('invalid');
                    }
                    var pDate = res.getDate();
                    res.setDate(1);
                    // eslint-disable-next-line
                    res[timeSetter$1[key]](tValue);
                    var lDate = new Date(res.getFullYear(), tValue + 1, 0).getDate();
                    res.setDate(pDate < lDate ? pDate : lDate);
                }
                else {
                    if (key === 'day') {
                        var lastDay = new Date(res.getFullYear(), res.getMonth() + 1, 0).getDate();
                        if ((tValue < 1 || tValue > lastDay)) {
                            return null;
                        }
                    }
                    // eslint-disable-next-line
                    res[timeSetter$1[key]](tValue);
                }
            }
        }
        if (!isUndefined(desig)) {
            var hour = res.getHours();
            if (desig === 'pm') {
                res.setHours(hour + (hour === 12 ? 0 : 12));
            }
            else if (hour === 12) {
                res.setHours(0);
            }
        }
        if (!isUndefined(tzone)) {
            var tzValue = tzone - res.getTimezoneOffset();
            if (tzValue !== 0) {
                res.setMinutes(res.getMinutes() + tzValue);
            }
        }
        return res;
    };
    /**
     * Returns date parsing options for provided value along with parse and numeric options
     *
     * @param {string} value ?
     * @param {ParseOptions} parseOptions ?
     * @param {NumericOptions} num ?
     * @returns {DateParts} ?
     */
    DateParser.internalDateParse = function (value, parseOptions, num) {
        var matches = value.match(parseOptions.parserRegex);
        var retOptions = { 'hour': 0, 'minute': 0, 'second': 0 };
        if (isNullOrUndefined(matches)) {
            return null;
        }
        else {
            var props = Object.keys(parseOptions.evalposition);
            for (var _i = 0, props_1 = props; _i < props_1.length; _i++) {
                var prop = props_1[_i];
                var curObject = parseOptions.evalposition[prop];
                var matchString = matches[curObject.pos];
                if (curObject.isNumber) {
                    // eslint-disable-next-line
                    retOptions[prop] = this.internalNumberParser(matchString, num);
                }
                else {
                    if (prop === 'timeZone' && !isUndefined(matchString)) {
                        var pos = curObject.pos;
                        var val = void 0;
                        var tmatch = matches[pos + 1];
                        var flag = !isUndefined(tmatch);
                        if (curObject.hourOnly) {
                            val = this.getZoneValue(flag, tmatch, matches[pos + 4], num) * 60;
                        }
                        else {
                            val = this.getZoneValue(flag, tmatch, matches[pos + 7], num) * 60;
                            val += this.getZoneValue(flag, matches[pos + 4], matches[pos + 10], num);
                        }
                        if (!isNullOrUndefined(val)) {
                            retOptions[prop] = val;
                        }
                    }
                    else {
                        // eslint-disable-next-line
                        matchString = ((prop === 'month') && (!parseOptions.isIslamic) && (parseOptions.culture === 'en' || parseOptions.culture === 'en-GB' || parseOptions.culture === 'en-US'))
                            ? matchString[0].toUpperCase() + matchString.substring(1).toLowerCase() : matchString;
                        // eslint-disable-next-line
                        retOptions[prop] = parseOptions[prop][matchString];
                    }
                }
            }
            if (parseOptions.hour12) {
                retOptions.hour12 = true;
            }
        }
        return retOptions;
    };
    /**
     * Returns parsed number for provided Numeric string and Numeric Options
     *
     * @param {string} value ?
     * @param {NumericOptions} option ?
     * @returns {number} ?
     */
    DateParser.internalNumberParser = function (value, option) {
        value = ParserBase.convertValueParts(value, option.numberParseRegex, option.numericPair);
        if (latnRegex.test(value)) {
            return +value;
        }
        return null;
    };
    /**
     * Returns parsed time zone RegExp for provided hour format and time zone
     *
     * @param {string} hourFormat ?
     * @param {base.TimeZoneOptions} tZone ?
     * @param {string} nRegex ?
     * @returns {string} ?
     */
    DateParser.parseTimeZoneRegx = function (hourFormat, tZone, nRegex) {
        var pattern = tZone.gmtFormat;
        var ret;
        var cRegex = '(' + nRegex + ')' + '(' + nRegex + ')';
        var splitStr;
        ret = hourFormat.replace('+', '\\+');
        if (hourFormat.indexOf('HH') !== -1) {
            ret = ret.replace(/HH|mm/g, '(' + cRegex + ')');
        }
        else {
            ret = ret.replace(/H|m/g, '(' + cRegex + '?)');
        }
        // eslint-disable-next-line
        splitStr = (ret.split(';').map(function (str) {
            return pattern.replace('{0}', str);
        }));
        ret = splitStr.join('|') + '|' + tZone.gmtZeroFormat;
        return ret;
    };
    /**
     * Returns zone based value.
     *
     * @param {boolean} flag ?
     * @param {string} val1 ?
     * @param {string} val2 ?
     * @param {NumericOptions} num ?
     * @returns {number} ?
     */
    DateParser.getZoneValue = function (flag, val1, val2, num) {
        var ival = flag ? val1 : val2;
        if (!ival) {
            return 0;
        }
        var value = this.internalNumberParser(ival, num);
        if (flag) {
            return -value;
        }
        return value;
    };
    return DateParser;
}());

var parseRegex = /^([^0-9]*)(([0-9,]*[0-9]+)(\.[0-9]+)?)([Ee][+-]?[0-9]+)?([^0-9]*)$/;
var groupRegex = /,/g;
var keys = ['minusSign', 'infinity'];
/**
 * Module for Number Parser.
 *
 * @private
 */
var NumberParser = /** @class */ (function () {
    function NumberParser() {
    }
    /**
     * Returns the parser function for given skeleton.
     *
     * @param {string} culture -  Specifies the culture name to be which formatting.
     * @param {NumberFormatOptions} option - Specific the format in which number  will parsed.
     * @param {Object} cldr - Specifies the global cldr data collection.
     * @returns {Function} ?
     */
    NumberParser.numberParser = function (culture, option, cldr) {
        var _this = this;
        var dependable = exports.IntlBase.getDependables(cldr, culture, '', true);
        var parseOptions = { custom: true };
        var numOptions;
        if ((exports.IntlBase.formatRegex.test(option.format)) || !(option.format)) {
            extend(parseOptions, exports.IntlBase.getProperNumericSkeleton(option.format || 'N'));
            parseOptions.custom = false;
            if (!parseOptions.fractionDigits) {
                if (option.maximumFractionDigits) {
                    parseOptions.maximumFractionDigits = option.maximumFractionDigits;
                }
            }
        }
        else {
            extend(parseOptions, exports.IntlBase.customFormat(option.format, null, null));
        }
        var numbers = getValue('numbers', dependable.parserObject);
        // eslint-disable-next-line
        numOptions = ParserBase.getCurrentNumericOptions(dependable.parserObject, ParserBase.getNumberingSystem(cldr), true, isBlazor());
        parseOptions.symbolRegex = ParserBase.getSymbolRegex(Object.keys(numOptions.symbolMatch));
        // eslint-disable-next-line
        parseOptions.infinity = numOptions.symbolNumberSystem[keys[1]];
        var symbolpattern;
        if (!isBlazor()) {
            symbolpattern = exports.IntlBase.getSymbolPattern(parseOptions.type, numOptions.numberSystem, dependable.numericObject, parseOptions.isAccount);
            if (symbolpattern) {
                symbolpattern = symbolpattern.replace(/\u00A4/g, exports.IntlBase.defaultCurrency);
                var split = symbolpattern.split(';');
                parseOptions.nData = exports.IntlBase.getFormatData(split[1] || '-' + split[0], true, '');
                parseOptions.pData = exports.IntlBase.getFormatData(split[0], true, '');
            }
        }
        else {
            parseOptions.nData = extend({}, {}, getValue(parseOptions.type + 'nData', numbers));
            parseOptions.pData = extend({}, {}, getValue(parseOptions.type + 'pData', numbers));
            if (parseOptions.type === 'currency' && option.currency) {
                exports.IntlBase.replaceBlazorCurrency([parseOptions.pData, parseOptions.nData], getValue('currencySymbol', numbers), option.currency);
            }
        }
        return function (value) {
            return _this.getParsedNumber(value, parseOptions, numOptions);
        };
    };
    /**
     * Returns parsed number for the provided formatting options
     *
     * @param {string} value ?
     * @param {NumericParts} options ?
     * @param {NumericOptions} numOptions ?
     * @returns {number} ?
     */
    NumberParser.getParsedNumber = function (value, options, numOptions) {
        var isNegative;
        var isPercent;
        var tempValue;
        var lead;
        var end;
        var ret;
        if (value.indexOf(options.infinity) !== -1) {
            return Infinity;
        }
        else {
            value = ParserBase.convertValueParts(value, options.symbolRegex, numOptions.symbolMatch);
            value = ParserBase.convertValueParts(value, numOptions.numberParseRegex, numOptions.numericPair);
            value = value.indexOf('-') !== -1 ? value.replace('-.', '-0.') : value;
            if (value.indexOf('.') === 0) {
                value = '0' + value;
            }
            var matches = value.match(parseRegex);
            if (isNullOrUndefined(matches)) {
                return NaN;
            }
            lead = matches[1];
            tempValue = matches[2];
            var exponent = matches[5];
            end = matches[6];
            isNegative = options.custom ? ((lead === options.nData.nlead) && (end === options.nData.nend)) :
                ((lead.indexOf(options.nData.nlead) !== -1) && (end.indexOf(options.nData.nend) !== -1));
            isPercent = isNegative ?
                options.nData.isPercent :
                options.pData.isPercent;
            tempValue = tempValue.replace(groupRegex, '');
            if (exponent) {
                tempValue += exponent;
            }
            ret = +tempValue;
            if (options.type === 'percent' || isPercent) {
                ret = ret / 100;
            }
            if (options.custom || options.fractionDigits) {
                ret = parseFloat(ret.toFixed(options.custom ?
                    (isNegative ? options.nData.maximumFractionDigits : options.pData.maximumFractionDigits) : options.fractionDigits));
            }
            if (options.maximumFractionDigits) {
                ret = this.convertMaxFracDigits(tempValue, options, ret, isNegative);
            }
            if (isNegative) {
                ret *= -1;
            }
            return ret;
        }
    };
    NumberParser.convertMaxFracDigits = function (value, options, ret, isNegative) {
        var decimalSplitValue = value.split('.');
        if (decimalSplitValue[1] && decimalSplitValue[1].length > options.maximumFractionDigits) {
            ret = +(ret.toFixed(options.custom ?
                (isNegative ? options.nData.maximumFractionDigits : options.pData.maximumFractionDigits) : options.maximumFractionDigits));
        }
        return ret;
    };
    return NumberParser;
}());

var Observer = /** @class */ (function () {
    function Observer(context) {
        this.ranArray = [];
        this.boundedEvents = {};
        if (isNullOrUndefined(context)) {
            return;
        }
        this.context = context;
    }
    /**
     * To attach handler for given property in current context.
     *
     * @param {string} property - specifies the name of the event.
     * @param {Function} handler - Specifies the handler function to be called while event notified.
     * @param {Object} context - Specifies the context binded to the handler.
     * @param {string} id - specifies the random generated id.
     * @returns {void}
     */
    Observer.prototype.on = function (property, handler, context, id) {
        if (isNullOrUndefined(handler)) {
            return;
        }
        var cntxt = context || this.context;
        if (this.notExist(property)) {
            this.boundedEvents[property] = [{ handler: handler, context: cntxt }];
            return;
        }
        if (!isNullOrUndefined(id)) {
            if (this.ranArray.indexOf(id) === -1) {
                this.ranArray.push(id);
                this.boundedEvents[property].push({ handler: handler, context: cntxt, id: id });
            }
        }
        else if (!this.isHandlerPresent(this.boundedEvents[property], handler)) {
            this.boundedEvents[property].push({ handler: handler, context: cntxt });
        }
    };
    /**
     * To remove handlers from a event attached using on() function.
     *
     * @param {string} property - specifies the name of the event.
     * @param {Function} handler - Optional argument specifies the handler function to be called while event notified.
     * @param {string} id - specifies the random generated id.
     * @returns {void} ?
     */
    Observer.prototype.off = function (property, handler, id) {
        if (this.notExist(property)) {
            return;
        }
        var curObject = getValue(property, this.boundedEvents);
        if (handler) {
            for (var i = 0; i < curObject.length; i++) {
                if (id) {
                    if (curObject[i].id === id) {
                        curObject.splice(i, 1);
                        var indexLocation = this.ranArray.indexOf(id);
                        if (indexLocation !== -1) {
                            this.ranArray.splice(indexLocation, 1);
                        }
                        break;
                    }
                }
                else if (handler === curObject[i].handler) {
                    curObject.splice(i, 1);
                    break;
                }
            }
        }
        else {
            delete this.boundedEvents[property];
        }
    };
    /**
     * To notify the handlers in the specified event.
     *
     * @param {string} property - Specifies the event to be notify.
     * @param {Object} argument - Additional parameters to pass while calling the handler.
     * @param {Function} successHandler - this function will invoke after event successfully triggered
     * @param {Function} errorHandler - this function will invoke after event if it was failure to call.
     * @returns {void} ?
     */
    Observer.prototype.notify = function (property, argument, successHandler, errorHandler) {
        if (this.notExist(property)) {
            if (successHandler) {
                successHandler.call(this, argument);
            }
            return;
        }
        if (argument) {
            argument.name = property;
        }
        var blazor = 'Blazor';
        var curObject = getValue(property, this.boundedEvents).slice(0);
        if (window[blazor]) {
            return this.blazorCallback(curObject, argument, successHandler, errorHandler, 0);
        }
        else {
            for (var _i = 0, curObject_1 = curObject; _i < curObject_1.length; _i++) {
                var cur = curObject_1[_i];
                cur.handler.call(cur.context, argument);
            }
            if (successHandler) {
                successHandler.call(this, argument);
            }
        }
    };
    Observer.prototype.blazorCallback = function (objs, argument, successHandler, errorHandler, index) {
        var _this = this;
        var isTrigger = index === objs.length - 1;
        if (index < objs.length) {
            var obj_1 = objs[index];
            var promise = obj_1.handler.call(obj_1.context, argument);
            if (promise && typeof promise.then === 'function') {
                if (!successHandler) {
                    return promise;
                }
                promise.then(function (data) {
                    data = typeof data === 'string' && _this.isJson(data) ? JSON.parse(data, _this.dateReviver) : data;
                    extend(argument, argument, data, true);
                    if (successHandler && isTrigger) {
                        successHandler.call(obj_1.context, argument);
                    }
                    else {
                        return _this.blazorCallback(objs, argument, successHandler, errorHandler, index + 1);
                    }
                }).catch(function (data) {
                    if (errorHandler) {
                        errorHandler.call(obj_1.context, typeof data === 'string' &&
                            _this.isJson(data) ? JSON.parse(data, _this.dateReviver) : data);
                    }
                });
            }
            else if (successHandler && isTrigger) {
                successHandler.call(obj_1.context, argument);
            }
            else {
                return this.blazorCallback(objs, argument, successHandler, errorHandler, index + 1);
            }
        }
    };
    // eslint-disable-next-line
    Observer.prototype.dateReviver = function (key, value) {
        var dPattern = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/;
        if (isBlazor && typeof value === 'string' && value.match(dPattern) !== null) {
            return (new Date(value));
        }
        return (value);
    };
    Observer.prototype.isJson = function (value) {
        try {
            JSON.parse(value);
        }
        catch (e) {
            return false;
        }
        return true;
    };
    /**
     * To destroy handlers in the event
     *
     * @returns {void} ?
     */
    Observer.prototype.destroy = function () {
        this.boundedEvents = this.context = undefined;
    };
    /**
     * Returns if the property exists.
     *
     * @param {string} prop ?
     * @returns {boolean} ?
     */
    Observer.prototype.notExist = function (prop) {
        // eslint-disable-next-line
        return this.boundedEvents.hasOwnProperty(prop) === false || this.boundedEvents[prop].length <= 0;
    };
    /**
     * Returns if the handler is present.
     *
     * @param {BoundOptions[]} boundedEvents ?
     * @param {Function} handler ?
     * @returns {boolean} ?
     */
    Observer.prototype.isHandlerPresent = function (boundedEvents, handler) {
        for (var _i = 0, boundedEvents_1 = boundedEvents; _i < boundedEvents_1.length; _i++) {
            var cur = boundedEvents_1[_i];
            if (cur.handler === handler) {
                return true;
            }
        }
        return false;
    };
    return Observer;
}());

/**
 * Specifies the observer used for external change detection.
 */
var onIntlChange = new Observer();
/**
 * Specifies the default rtl status for EJ2 components.
 */
exports.rightToLeft = false;
/**
 * Specifies the CLDR data loaded for internationalization functionalities.
 *
 * @private
 */
var cldrData = {};
/**
 * Specifies the default culture value to be considered.
 *
 * @private
 */
exports.defaultCulture = 'en-US';
/**
 * Specifies default currency code to be considered
 *
 * @private
 */
exports.defaultCurrencyCode = 'USD';
var mapper = ['numericObject', 'dateObject'];
/**
 * Internationalization class provides support to parse and format the number and date object to the desired format.
 * ```typescript
 * // To set the culture globally
 * setCulture('en-GB');
 *
 * // To set currency code globally
 * setCurrencyCode('EUR');
 *
 * //Load cldr data
 * loadCldr(gregorainData);
 * loadCldr(timeZoneData);
 * loadCldr(numbersData);
 * loadCldr(numberSystemData);
 *
 * // To use formatter in component side
 * let Intl:Internationalization = new Internationalization();
 *
 * // Date formatting
 * let dateFormatter: Function = Intl.getDateFormat({skeleton:'long',type:'dateTime'});
 * dateFormatter(new Date('11/2/2016'));
 * dateFormatter(new Date('25/2/2030'));
 * Intl.formatDate(new Date(),{skeleton:'E'});
 *
 * //Number formatting
 * let numberFormatter: Function = Intl.getNumberFormat({skeleton:'C5'})
 * numberFormatter(24563334);
 * Intl.formatNumber(123123,{skeleton:'p2'});
 *
 * // Date parser
 * let dateParser: Function = Intl.getDateParser({skeleton:'short',type:'time'});
 * dateParser('10:30 PM');
 * Intl.parseDate('10',{skeleton:'H'});
 * ```
 */
var Internationalization = /** @class */ (function () {
    function Internationalization(cultureName) {
        if (cultureName) {
            this.culture = cultureName;
        }
    }
    /**
     * Returns the format function for given options.
     *
     * @param {DateFormatOptions} options - Specifies the format options in which the format function will return.
     * @returns {Function} ?
     */
    Internationalization.prototype.getDateFormat = function (options) {
        return DateFormat.dateFormat(this.getCulture(), options || { type: 'date', skeleton: 'short' }, cldrData);
    };
    /**
     * Returns the format function for given options.
     *
     * @param {NumberFormatOptions} options - Specifies the format options in which the format function will return.
     * @returns {Function} ?
     */
    Internationalization.prototype.getNumberFormat = function (options) {
        if (options && !options.currency) {
            options.currency = exports.defaultCurrencyCode;
        }
        if (isBlazor() && options && !options.format) {
            options.minimumFractionDigits = 0;
        }
        return NumberFormat.numberFormatter(this.getCulture(), options || {}, cldrData);
    };
    /**
     * Returns the parser function for given options.
     *
     * @param {DateFormatOptions} options - Specifies the format options in which the parser function will return.
     * @returns {Function} ?
     */
    Internationalization.prototype.getDateParser = function (options) {
        return DateParser.dateParser(this.getCulture(), options || { skeleton: 'short', type: 'date' }, cldrData);
    };
    /**
     * Returns the parser function for given options.
     *
     * @param {NumberFormatOptions} options - Specifies the format options in which the parser function will return.
     * @returns {Function} ?
     */
    Internationalization.prototype.getNumberParser = function (options) {
        if (isBlazor() && options && !options.format) {
            options.minimumFractionDigits = 0;
        }
        return NumberParser.numberParser(this.getCulture(), options || { format: 'N' }, cldrData);
    };
    /**
     * Returns the formatted string based on format options.
     *
     * @param {number} value - Specifies the number to format.
     * @param {NumberFormatOptions} option - Specifies the format options in which the number will be formatted.
     * @returns {string} ?
     */
    Internationalization.prototype.formatNumber = function (value, option) {
        return this.getNumberFormat(option)(value);
    };
    /**
     * Returns the formatted date string based on format options.
     *
     * @param {Date} value - Specifies the number to format.
     * @param {DateFormatOptions} option - Specifies the format options in which the number will be formatted.
     * @returns {string} ?
     */
    Internationalization.prototype.formatDate = function (value, option) {
        return this.getDateFormat(option)(value);
    };
    /**
     * Returns the date object for given date string and options.
     *
     * @param {string} value - Specifies the string to parse.
     * @param {DateFormatOptions} option - Specifies the parse options in which the date string will be parsed.
     * @returns {Date} ?
     */
    Internationalization.prototype.parseDate = function (value, option) {
        return this.getDateParser(option)(value);
    };
    /**
     * Returns the number object from the given string value and options.
     *
     * @param {string} value - Specifies the string to parse.
     * @param {NumberFormatOptions} option - Specifies the parse options in which the  string number  will be parsed.
     * @returns {number} ?
     */
    Internationalization.prototype.parseNumber = function (value, option) {
        return this.getNumberParser(option)(value);
    };
    /**
     * Returns Native Date Time Pattern
     *
     * @param {DateFormatOptions} option - Specifies the parse options for resultant date time pattern.
     * @param {boolean} isExcelFormat - Specifies format value to be converted to excel pattern.
     * @returns {string} ?
     * @private
     */
    Internationalization.prototype.getDatePattern = function (option, isExcelFormat) {
        return exports.IntlBase.getActualDateTimeFormat(this.getCulture(), option, cldrData, isExcelFormat);
    };
    /**
     * Returns Native Number Pattern
     *
     * @param {NumberFormatOptions} option - Specifies the parse options for resultant number pattern.
     * @param {boolean} isExcel ?
     * @returns {string} ?
     * @private
     */
    Internationalization.prototype.getNumberPattern = function (option, isExcel) {
        return exports.IntlBase.getActualNumberFormat(this.getCulture(), option, cldrData, isExcel);
    };
    /**
     * Returns the First Day of the Week
     *
     * @returns {number} ?
     */
    Internationalization.prototype.getFirstDayOfWeek = function () {
        return exports.IntlBase.getWeekData(this.getCulture(), cldrData);
    };
    /**
     * Returns the culture
     *
     * @returns {string} ?
     */
    Internationalization.prototype.getCulture = function () {
        return this.culture || exports.defaultCulture;
    };
    return Internationalization;
}());
/**
 * Set the default culture to all EJ2 components
 *
 * @param {string} cultureName - Specifies the culture name to be set as default culture.
 * @returns {void} ?
 */
function setCulture(cultureName) {
    exports.defaultCulture = cultureName;
    onIntlChange.notify('notifyExternalChange', { 'locale': exports.defaultCulture });
}
/**
 * Set the default currency code to all EJ2 components
 *
 * @param {string} currencyCode Specifies the culture name to be set as default culture.
 * @returns {void} ?
 */
function setCurrencyCode(currencyCode) {
    exports.defaultCurrencyCode = currencyCode;
    onIntlChange.notify('notifyExternalChange', { 'currencyCode': exports.defaultCurrencyCode });
}
/**
 * Load the CLDR data into context
 *
 * @param {Object[]} data Specifies the CLDR data's to be used for formatting and parser.
 * @returns {void} ?
 */
function loadCldr() {
    var data = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        data[_i] = arguments[_i];
    }
    for (var _a = 0, data_1 = data; _a < data_1.length; _a++) {
        var obj = data_1[_a];
        extend(cldrData, obj, {}, true);
    }
}
/**
 * To enable or disable RTL functionality for all components globally.
 *
 * @param {boolean} status - Optional argument Specifies the status value to enable or disable rtl option.
 * @returns {void} ?
 */
function enableRtl(status) {
    if (status === void 0) { status = true; }
    exports.rightToLeft = status;
    onIntlChange.notify('notifyExternalChange', { enableRtl: exports.rightToLeft });
}
/**
 * To get the numeric CLDR object for given culture
 *
 * @param {string} locale - Specifies the locale for which numericObject to be returned.
 * @param {string} type ?
 * @returns {Object} ?
 * @ignore
 * @private
 */
function getNumericObject(locale, type) {
    // eslint-disable-next-line
    var numObject = exports.IntlBase.getDependables(cldrData, locale, '', true)[mapper[0]];
    // eslint-disable-next-line
    var dateObject = exports.IntlBase.getDependables(cldrData, locale, '')[mapper[1]];
    var numSystem = getValue('defaultNumberingSystem', numObject);
    var symbPattern = isBlazor() ? getValue('numberSymbols', numObject) : getValue('symbols-numberSystem-' + numSystem, numObject);
    var pattern = exports.IntlBase.getSymbolPattern(type || 'decimal', numSystem, numObject, false);
    return extend(symbPattern, exports.IntlBase.getFormatData(pattern, true, '', true), { 'dateSeparator': exports.IntlBase.getDateSeparator(dateObject) });
}
/**
 * To get the numeric CLDR  number base object for given culture
 *
 * @param {string} locale - Specifies the locale for which numericObject to be returned.
 * @param {string} currency - Specifies the currency for which numericObject to be returned.
 * @returns {string} ?
 * @ignore
 * @private
 */
function getNumberDependable(locale, currency) {
    // eslint-disable-next-line
    var numObject = exports.IntlBase.getDependables(cldrData, locale, '', true);
    // eslint-disable-next-line
    return exports.IntlBase.getCurrencySymbol(numObject.numericObject, currency);
}
/**
 * To get the default date CLDR object.
 *
 * @param {string} mode ?
 * @returns {Object} ?
 * @ignore
 * @private
 */
function getDefaultDateObject(mode) {
    // eslint-disable-next-line
    return exports.IntlBase.getDependables(cldrData, '', mode, false)[mapper[1]];
}

var blazorCultureFormats = {
    'en-US': {
        'd': 'M/d/y',
        'D': 'EEEE, MMMM d, y',
        'f': 'EEEE, MMMM d, y h:mm a',
        'F': 'EEEE, MMMM d, y h:mm:s a',
        'g': 'M/d/y h:mm a',
        'G': 'M/d/yyyy h:mm:ss tt',
        'm': 'MMMM d',
        'M': 'MMMM d',
        'r': 'ddd, dd MMM yyyy HH\':\'mm\':\'ss \'GMT\'',
        'R': 'ddd, dd MMM yyyy HH\':\'mm\':\'ss \'GMT\'',
        's': 'yyyy\'-\'MM\'-\'dd\'T\'HH\':\'mm\':\'ss',
        't': 'h:mm tt',
        'T': 'h:m:s tt',
        'u': 'yyyy\'-\'MM\'-\'dd HH\':\'mm\':\'ss\'Z\'',
        'U': 'dddd, MMMM d, yyyy h:mm:ss tt',
        'y': 'MMMM yyyy',
        'Y': 'MMMM yyyy'
    }
};
/**
 * Date base common constants and function for date parser and formatter.
 */
// eslint-disable-next-line

(function (IntlBase) {
    // tslint:disable-next-line:max-line-length
    IntlBase.negativeDataRegex = /^(('[^']+'|''|[^*#@0,.E])*)(\*.)?((([#,]*[0,]*0+)(\.0*[0-9]*#*)?)|([#,]*@+#*))(E\+?0+)?(('[^']+'|''|[^*#@0,.E])*)$/;
    IntlBase.customRegex = /^(('[^']+'|''|[^*#@0,.])*)(\*.)?((([0#,]*[0,]*[0#]*[0#\ ]*)(\.[0#]*)?)|([#,]*@+#*))(E\+?0+)?(('[^']+'|''|[^*#@0,.E])*)$/;
    IntlBase.latnParseRegex = /0|1|2|3|4|5|6|7|8|9/g;
    var fractionRegex = /[0-9]/g;
    IntlBase.defaultCurrency = '$';
    var mapper = ['infinity', 'nan', 'group', 'decimal'];
    var patternRegex = /G|M|L|H|c|'| a|yy|y|EEEE|E/g;
    var patternMatch = {
        'G': '',
        'M': 'm',
        'L': 'm',
        'H': 'h',
        'c': 'd',
        '\'': '"',
        ' a': ' AM/PM',
        'yy': 'yy',
        'y': 'yyyy',
        'EEEE': 'dddd',
        'E': 'ddd'
    };
    IntlBase.dateConverterMapper = /dddd|ddd/ig;
    var defaultFirstDay = 'sun';
    IntlBase.islamicRegex = /^islamic/;
    var firstDayMapper = {
        'sun': 0,
        'mon': 1,
        'tue': 2,
        'wed': 3,
        'thu': 4,
        'fri': 5,
        'sat': 6
    };
    IntlBase.formatRegex = /(^[ncpae]{1})([0-1]?[0-9]|20)?$/i;
    IntlBase.currencyFormatRegex = /(^[ca]{1})([0-1]?[0-9]|20)?$/i;
    IntlBase.curWithoutNumberRegex = /(c|a)$/ig;
    var typeMapper = {
        '$': 'isCurrency',
        '%': 'isPercent',
        '-': 'isNegative',
        0: 'nlead',
        1: 'nend'
    };
    IntlBase.dateParseRegex = /([a-z])\1*|'([^']|'')+'|''|./gi;
    IntlBase.basicPatterns = ['short', 'medium', 'long', 'full'];
    /* tslint:disable:quotemark */
    IntlBase.defaultObject = {
        'dates': {
            'calendars': {
                'gregorian': {
                    'months': {
                        'stand-alone': {
                            'abbreviated': {
                                '1': 'Jan',
                                '2': 'Feb',
                                '3': 'Mar',
                                '4': 'Apr',
                                '5': 'May',
                                '6': 'Jun',
                                '7': 'Jul',
                                '8': 'Aug',
                                '9': 'Sep',
                                '10': 'Oct',
                                '11': 'Nov',
                                '12': 'Dec'
                            },
                            'narrow': {
                                '1': 'J',
                                '2': 'F',
                                '3': 'M',
                                '4': 'A',
                                '5': 'M',
                                '6': 'J',
                                '7': 'J',
                                '8': 'A',
                                '9': 'S',
                                '10': 'O',
                                '11': 'N',
                                '12': 'D'
                            },
                            'wide': {
                                '1': 'January',
                                '2': 'February',
                                '3': 'March',
                                '4': 'April',
                                '5': 'May',
                                '6': 'June',
                                '7': 'July',
                                '8': 'August',
                                '9': 'September',
                                '10': 'October',
                                '11': 'November',
                                '12': 'December'
                            }
                        }
                    },
                    'days': {
                        'stand-alone': {
                            'abbreviated': {
                                'sun': 'Sun',
                                'mon': 'Mon',
                                'tue': 'Tue',
                                'wed': 'Wed',
                                'thu': 'Thu',
                                'fri': 'Fri',
                                'sat': 'Sat'
                            },
                            'narrow': {
                                'sun': 'S',
                                'mon': 'M',
                                'tue': 'T',
                                'wed': 'W',
                                'thu': 'T',
                                'fri': 'F',
                                'sat': 'S'
                            },
                            'short': {
                                'sun': 'Su',
                                'mon': 'Mo',
                                'tue': 'Tu',
                                'wed': 'We',
                                'thu': 'Th',
                                'fri': 'Fr',
                                'sat': 'Sa'
                            },
                            'wide': {
                                'sun': 'Sunday',
                                'mon': 'Monday',
                                'tue': 'Tuesday',
                                'wed': 'Wednesday',
                                'thu': 'Thursday',
                                'fri': 'Friday',
                                'sat': 'Saturday'
                            }
                        }
                    },
                    'dayPeriods': {
                        'format': {
                            'wide': {
                                'am': 'AM',
                                'pm': 'PM'
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '0': 'Before Christ',
                            '0-alt-variant': 'Before Common Era',
                            '1': 'Anno Domini',
                            '1-alt-variant': 'Common Era'
                        },
                        'eraAbbr': {
                            '0': 'BC',
                            '0-alt-variant': 'BCE',
                            '1': 'AD',
                            '1-alt-variant': 'CE'
                        },
                        'eraNarrow': {
                            '0': 'B',
                            '0-alt-variant': 'BCE',
                            '1': 'A',
                            '1-alt-variant': 'CE'
                        }
                    },
                    'dateFormats': {
                        'full': 'EEEE, MMMM d, y',
                        'long': 'MMMM d, y',
                        'medium': 'MMM d, y',
                        'short': 'M/d/yy'
                    },
                    'timeFormats': {
                        'full': 'h:mm:ss a zzzz',
                        'long': 'h:mm:ss a z',
                        'medium': 'h:mm:ss a',
                        'short': 'h:mm a'
                    },
                    'dateTimeFormats': {
                        'full': '{1} \'at\' {0}',
                        'long': '{1} \'at\' {0}',
                        'medium': '{1}, {0}',
                        'short': '{1}, {0}',
                        'availableFormats': {
                            'd': 'd',
                            'E': 'ccc',
                            'Ed': 'd E',
                            'Ehm': 'E h:mm a',
                            'EHm': 'E HH:mm',
                            'Ehms': 'E h:mm:ss a',
                            'EHms': 'E HH:mm:ss',
                            'Gy': 'y G',
                            'GyMMM': 'MMM y G',
                            'GyMMMd': 'MMM d, y G',
                            'GyMMMEd': 'E, MMM d, y G',
                            'h': 'h a',
                            'H': 'HH',
                            'hm': 'h:mm a',
                            'Hm': 'HH:mm',
                            'hms': 'h:mm:ss a',
                            'Hms': 'HH:mm:ss',
                            'hmsv': 'h:mm:ss a v',
                            'Hmsv': 'HH:mm:ss v',
                            'hmv': 'h:mm a v',
                            'Hmv': 'HH:mm v',
                            'M': 'L',
                            'Md': 'M/d',
                            'MEd': 'E, M/d',
                            'MMM': 'LLL',
                            'MMMd': 'MMM d',
                            'MMMEd': 'E, MMM d',
                            'MMMMd': 'MMMM d',
                            'ms': 'mm:ss',
                            'y': 'y',
                            'yM': 'M/y',
                            'yMd': 'M/d/y',
                            'yMEd': 'E, M/d/y',
                            'yMMM': 'MMM y',
                            'yMMMd': 'MMM d, y',
                            'yMMMEd': 'E, MMM d, y',
                            'yMMMM': 'MMMM y'
                        }
                    }
                },
                'islamic': {
                    'months': {
                        'stand-alone': {
                            'abbreviated': {
                                '1': 'Muh.',
                                '2': 'Saf.',
                                '3': 'Rab. I',
                                '4': 'Rab. II',
                                '5': 'Jum. I',
                                '6': 'Jum. II',
                                '7': 'Raj.',
                                '8': 'Sha.',
                                '9': 'Ram.',
                                '10': 'Shaw.',
                                '11': 'Dhuʻl-Q.',
                                '12': 'Dhuʻl-H.'
                            },
                            'narrow': {
                                '1': '1',
                                '2': '2',
                                '3': '3',
                                '4': '4',
                                '5': '5',
                                '6': '6',
                                '7': '7',
                                '8': '8',
                                '9': '9',
                                '10': '10',
                                '11': '11',
                                '12': '12'
                            },
                            'wide': {
                                '1': 'Muharram',
                                '2': 'Safar',
                                '3': 'Rabiʻ I',
                                '4': 'Rabiʻ II',
                                '5': 'Jumada I',
                                '6': 'Jumada II',
                                '7': 'Rajab',
                                '8': 'Shaʻban',
                                '9': 'Ramadan',
                                '10': 'Shawwal',
                                '11': 'Dhuʻl-Qiʻdah',
                                '12': 'Dhuʻl-Hijjah'
                            }
                        }
                    },
                    'days': {
                        'stand-alone': {
                            'abbreviated': {
                                'sun': 'Sun',
                                'mon': 'Mon',
                                'tue': 'Tue',
                                'wed': 'Wed',
                                'thu': 'Thu',
                                'fri': 'Fri',
                                'sat': 'Sat'
                            },
                            'narrow': {
                                'sun': 'S',
                                'mon': 'M',
                                'tue': 'T',
                                'wed': 'W',
                                'thu': 'T',
                                'fri': 'F',
                                'sat': 'S'
                            },
                            'short': {
                                'sun': 'Su',
                                'mon': 'Mo',
                                'tue': 'Tu',
                                'wed': 'We',
                                'thu': 'Th',
                                'fri': 'Fr',
                                'sat': 'Sa'
                            },
                            'wide': {
                                'sun': 'Sunday',
                                'mon': 'Monday',
                                'tue': 'Tuesday',
                                'wed': 'Wednesday',
                                'thu': 'Thursday',
                                'fri': 'Friday',
                                'sat': 'Saturday'
                            }
                        }
                    },
                    'dayPeriods': {
                        'format': {
                            'wide': {
                                'am': 'AM',
                                'pm': 'PM'
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '0': 'AH'
                        },
                        'eraAbbr': {
                            '0': 'AH'
                        },
                        'eraNarrow': {
                            '0': 'AH'
                        }
                    },
                    'dateFormats': {
                        'full': 'EEEE, MMMM d, y G',
                        'long': 'MMMM d, y G',
                        'medium': 'MMM d, y G',
                        'short': 'M/d/y GGGGG'
                    },
                    'timeFormats': {
                        'full': 'h:mm:ss a zzzz',
                        'long': 'h:mm:ss a z',
                        'medium': 'h:mm:ss a',
                        'short': 'h:mm a'
                    },
                    'dateTimeFormats': {
                        'full': '{1} \'at\' {0}',
                        'long': '{1} \'at\' {0}',
                        'medium': '{1}, {0}',
                        'short': '{1}, {0}',
                        'availableFormats': {
                            'd': 'd',
                            'E': 'ccc',
                            'Ed': 'd E',
                            'Ehm': 'E h:mm a',
                            'EHm': 'E HH:mm',
                            'Ehms': 'E h:mm:ss a',
                            'EHms': 'E HH:mm:ss',
                            'Gy': 'y G',
                            'GyMMM': 'MMM y G',
                            'GyMMMd': 'MMM d, y G',
                            'GyMMMEd': 'E, MMM d, y G',
                            'h': 'h a',
                            'H': 'HH',
                            'hm': 'h:mm a',
                            'Hm': 'HH:mm',
                            'hms': 'h:mm:ss a',
                            'Hms': 'HH:mm:ss',
                            'M': 'L',
                            'Md': 'M/d',
                            'MEd': 'E, M/d',
                            'MMM': 'LLL',
                            'MMMd': 'MMM d',
                            'MMMEd': 'E, MMM d',
                            'MMMMd': 'MMMM d',
                            'ms': 'mm:ss',
                            'y': 'y G',
                            'yyyy': 'y G',
                            'yyyyM': 'M/y GGGGG',
                            'yyyyMd': 'M/d/y GGGGG',
                            'yyyyMEd': 'E, M/d/y GGGGG',
                            'yyyyMMM': 'MMM y G',
                            'yyyyMMMd': 'MMM d, y G',
                            'yyyyMMMEd': 'E, MMM d, y G',
                            'yyyyMMMM': 'MMMM y G',
                            'yyyyQQQ': 'QQQ y G',
                            'yyyyQQQQ': 'QQQQ y G'
                        }
                    }
                }
            },
            'timeZoneNames': {
                'hourFormat': '+HH:mm;-HH:mm',
                'gmtFormat': 'GMT{0}',
                'gmtZeroFormat': 'GMT'
            }
        },
        'numbers': {
            'currencies': {
                'USD': {
                    'displayName': 'US Dollar',
                    'symbol': '$',
                    'symbol-alt-narrow': '$'
                },
                'EUR': {
                    'displayName': 'Euro',
                    'symbol': '€',
                    'symbol-alt-narrow': '€'
                },
                'GBP': {
                    'displayName': 'British Pound',
                    'symbol-alt-narrow': '£'
                }
            },
            'defaultNumberingSystem': 'latn',
            'minimumGroupingDigits': '1',
            'symbols-numberSystem-latn': {
                'decimal': '.',
                'group': ',',
                'list': ';',
                'percentSign': '%',
                'plusSign': '+',
                'minusSign': '-',
                'exponential': 'E',
                'superscriptingExponent': '×',
                'perMille': '‰',
                'infinity': '∞',
                'nan': 'NaN',
                'timeSeparator': ':'
            },
            'decimalFormats-numberSystem-latn': {
                'standard': '#,##0.###'
            },
            'percentFormats-numberSystem-latn': {
                'standard': '#,##0%'
            },
            'currencyFormats-numberSystem-latn': {
                'standard': '¤#,##0.00',
                'accounting': '¤#,##0.00;(¤#,##0.00)'
            },
            'scientificFormats-numberSystem-latn': {
                'standard': '#E0'
            }
        }
    };
    IntlBase.blazorDefaultObject = {
        'numbers': {
            'mapper': {
                '0': '0',
                '1': '1',
                '2': '2',
                '3': '3',
                '4': '4',
                '5': '5',
                '6': '6',
                '7': '7',
                '8': '8',
                '9': '9'
            },
            'mapperDigits': '0123456789',
            'numberSymbols': {
                'decimal': '.',
                'group': ',',
                'plusSign': '+',
                'minusSign': '-',
                'percentSign': '%',
                'nan': 'NaN',
                'timeSeparator': ':',
                'infinity': '∞'
            },
            'timeSeparator': ':',
            'currencySymbol': '$',
            'currencypData': {
                'nlead': '$',
                'nend': '',
                'groupSeparator': ',',
                'groupData': {
                    'primary': 3
                },
                'maximumFraction': 2,
                'minimumFraction': 2
            },
            'percentpData': {
                'nlead': '',
                'nend': '%',
                'groupSeparator': ',',
                'groupData': {
                    'primary': 3
                },
                'maximumFraction': 2,
                'minimumFraction': 2
            },
            'percentnData': {
                'nlead': '-',
                'nend': '%',
                'groupSeparator': ',',
                'groupData': {
                    'primary': 3
                },
                'maximumFraction': 2,
                'minimumFraction': 2
            },
            'currencynData': {
                'nlead': '($',
                'nend': ')',
                'groupSeparator': ',',
                'groupData': {
                    'primary': 3
                },
                'maximumFraction': 2,
                'minimumFraction': 2
            },
            'decimalnData': {
                'nlead': '-',
                'nend': '',
                'groupData': {
                    'primary': 3
                },
                'maximumFraction': 2,
                'minimumFraction': 2
            },
            'decimalpData': {
                'nlead': '',
                'nend': '',
                'groupData': {
                    'primary': 3
                },
                'maximumFraction': 2,
                'minimumFraction': 2
            }
        },
        'dates': {
            'dayPeriods': {
                'am': 'AM',
                'pm': 'PM'
            },
            'dateSeperator': '/',
            'days': {
                'abbreviated': {
                    'sun': 'Sun',
                    'mon': 'Mon',
                    'tue': 'Tue',
                    'wed': 'Wed',
                    'thu': 'Thu',
                    'fri': 'Fri',
                    'sat': 'Sat'
                },
                'short': {
                    'sun': 'Su',
                    'mon': 'Mo',
                    'tue': 'Tu',
                    'wed': 'We',
                    'thu': 'Th',
                    'fri': 'Fr',
                    'sat': 'Sa'
                },
                'wide': {
                    'sun': 'Sunday',
                    'mon': 'Monday',
                    'tue': 'Tuesday',
                    'wed': 'Wednesday',
                    'thu': 'Thursday',
                    'fri': 'Friday',
                    'sat': 'Saturday'
                }
            },
            'months': {
                'abbreviated': {
                    '1': 'Jan',
                    '2': 'Feb',
                    '3': 'Mar',
                    '4': 'Apr',
                    '5': 'May',
                    '6': 'Jun',
                    '7': 'Jul',
                    '8': 'Aug',
                    '9': 'Sep',
                    '10': 'Oct',
                    '11': 'Nov',
                    '12': 'Dec'
                },
                'wide': {
                    '1': 'January',
                    '2': 'February',
                    '3': 'March',
                    '4': 'April',
                    '5': 'May',
                    '6': 'June',
                    '7': 'July',
                    '8': 'August',
                    '9': 'September',
                    '10': 'October',
                    '11': 'November',
                    '12': 'December'
                }
            },
            'eras': {
                '1': 'AD'
            }
        }
    };
    /* tslint:enable:quotemark */
    IntlBase.monthIndex = {
        3: 'abbreviated',
        4: 'wide',
        5: 'narrow',
        1: 'abbreviated'
    };
    /**
     *
     */
    IntlBase.month = 'months';
    IntlBase.days = 'days';
    /**
     * Default numerber Object
     */
    IntlBase.patternMatcher = {
        C: 'currency',
        P: 'percent',
        N: 'decimal',
        A: 'currency',
        E: 'scientific'
    };
    /**
     * Returns the resultant pattern based on the skeleton, dateObject and the type provided
     *
     * @private
     * @param {string} skeleton ?
     * @param {Object} dateObject ?
     * @param {string} type ?
     * @param {boolean} isIslamic ?
     * @param {string} blazorCulture ?
     * @returns {string} ?
     */
    function getResultantPattern(skeleton, dateObject, type, isIslamic, blazorCulture) {
        var resPattern;
        var iType = type || 'date';
        if (blazorCulture) {
            resPattern = compareBlazorDateFormats({ skeleton: skeleton }, blazorCulture).format ||
                compareBlazorDateFormats({ skeleton: 'd' }, 'en-US').format;
        }
        else {
            if (IntlBase.basicPatterns.indexOf(skeleton) !== -1) {
                resPattern = getValue(iType + 'Formats.' + skeleton, dateObject);
                if (iType === 'dateTime') {
                    var dPattern = getValue('dateFormats.' + skeleton, dateObject);
                    var tPattern = getValue('timeFormats.' + skeleton, dateObject);
                    resPattern = resPattern.replace('{1}', dPattern).replace('{0}', tPattern);
                }
            }
            else {
                resPattern = getValue('dateTimeFormats.availableFormats.' + skeleton, dateObject);
            }
            if (isUndefined(resPattern) && skeleton === 'yMd') {
                resPattern = 'M/d/y';
            }
        }
        return resPattern;
    }
    IntlBase.getResultantPattern = getResultantPattern;
    /**
     * Returns the dependable object for provided cldr data and culture
     *
     * @private
     * @param {Object} cldr ?
     * @param {string} culture ?
     * @param {string} mode ?
     * @param {boolean} isNumber ?
     * @returns {any} ?
     */
    function getDependables(cldr, culture, mode, isNumber) {
        var ret = {};
        var calendartype = mode || 'gregorian';
        ret.parserObject = ParserBase.getMainObject(cldr, culture) || (isBlazor() ? IntlBase.blazorDefaultObject : IntlBase.defaultObject);
        if (isNumber) {
            ret.numericObject = getValue('numbers', ret.parserObject);
        }
        else {
            var dateString = isBlazor() ? 'dates' : ('dates.calendars.' + calendartype);
            ret.dateObject = getValue(dateString, ret.parserObject);
        }
        return ret;
    }
    IntlBase.getDependables = getDependables;
    /**
     * Returns the symbol pattern for provided parameters
     *
     * @private
     * @param {string} type ?
     * @param {string} numSystem ?
     * @param {Object} obj ?
     * @param {boolean} isAccount ?
     * @returns {string} ?
     */
    function getSymbolPattern(type, numSystem, obj, isAccount) {
        return getValue(type + 'Formats-numberSystem-' +
            numSystem + (isAccount ? '.accounting' : '.standard'), obj) || (isAccount ? getValue(type + 'Formats-numberSystem-' +
            numSystem + '.standard', obj) : '');
    }
    IntlBase.getSymbolPattern = getSymbolPattern;
    /**
     *
     * @param {string} format ?
     * @returns {string} ?
     */
    function ConvertDateToWeekFormat(format) {
        var convertMapper = format.match(IntlBase.dateConverterMapper);
        if (convertMapper && isBlazor()) {
            var tempString = convertMapper[0].length === 3 ? 'EEE' : 'EEEE';
            return format.replace(IntlBase.dateConverterMapper, tempString);
        }
        return format;
    }
    IntlBase.ConvertDateToWeekFormat = ConvertDateToWeekFormat;
    /**
     *
     * @param {DateFormatOptions} formatOptions ?
     * @param {string} culture ?
     * @returns {DateFormatOptions} ?
     */
    function compareBlazorDateFormats(formatOptions, culture) {
        var format = formatOptions.format || formatOptions.skeleton;
        var curFormatMapper = getValue((culture || 'en-US') + '.' + format, blazorCultureFormats);
        if (!curFormatMapper) {
            curFormatMapper = getValue('en-US.' + format, blazorCultureFormats);
        }
        if (curFormatMapper) {
            curFormatMapper = ConvertDateToWeekFormat(curFormatMapper);
            formatOptions.format = curFormatMapper.replace(/tt/, 'a');
        }
        return formatOptions;
    }
    IntlBase.compareBlazorDateFormats = compareBlazorDateFormats;
    /**
     * Returns proper numeric skeleton
     *
     * @private
     * @param {string} skeleton ?
     * @returns {any} ?
     */
    function getProperNumericSkeleton(skeleton) {
        var matches = skeleton.match(IntlBase.formatRegex);
        var ret = {};
        var pattern = matches[1].toUpperCase();
        ret.isAccount = (pattern === 'A');
        // eslint-disable-next-line
        ret.type = IntlBase.patternMatcher[pattern];
        if (skeleton.length > 1) {
            ret.fractionDigits = parseInt(matches[2], 10);
        }
        return ret;
    }
    IntlBase.getProperNumericSkeleton = getProperNumericSkeleton;
    /**
     * Returns format data for number formatting like minimum fraction, maximum fraction, etc..,
     *
     * @private
     * @param {string} pattern ?
     * @param {boolean} needFraction ?
     * @param {string} cSymbol ?
     * @param {boolean} fractionOnly ?
     * @returns {any} ?
     */
    function getFormatData(pattern, needFraction, cSymbol, fractionOnly) {
        var nData = fractionOnly ? {} : { nlead: '', nend: '' };
        var match = pattern.match(IntlBase.customRegex);
        if (match) {
            if (!fractionOnly) {
                nData.nlead = changeCurrencySymbol(match[1], cSymbol);
                nData.nend = changeCurrencySymbol(match[10], cSymbol);
                nData.groupPattern = match[4];
            }
            var fraction = match[7];
            if (fraction && needFraction) {
                var fmatch = fraction.match(fractionRegex);
                if (!isNullOrUndefined(fmatch)) {
                    nData.minimumFraction = fmatch.length;
                }
                else {
                    nData.minimumFraction = 0;
                }
                nData.maximumFraction = fraction.length - 1;
            }
        }
        return nData;
    }
    IntlBase.getFormatData = getFormatData;
    /**
     * Changes currency symbol
     *
     * @private
     * @param {string} val ?
     * @param {string} sym ?
     * @returns {string} ?
     */
    function changeCurrencySymbol(val, sym) {
        if (val) {
            return val.replace(IntlBase.defaultCurrency, sym);
        }
        return '';
    }
    IntlBase.changeCurrencySymbol = changeCurrencySymbol;
    /**
     * Returns currency symbol based on currency code ?
     *
     * @private
     * @param {Object} numericObject ?
     * @param {string} currencyCode ?
     * @param {string} altSymbol ?
     * @returns {string} ?
     */
    function getCurrencySymbol(numericObject, currencyCode, altSymbol) {
        var symbol = altSymbol ? ('.' + altSymbol) : '.symbol';
        var getCurrency = getValue('currencies.' + currencyCode + symbol, numericObject) ||
            getValue('currencies.' + currencyCode + '.symbol-alt-narrow', numericObject) || '$';
        return getCurrency;
    }
    IntlBase.getCurrencySymbol = getCurrencySymbol;
    /**
     * Returns formatting options for custom number format
     *
     * @private
     * @param {string} format ?
     * @param {CommonOptions} dOptions ?
     * @param {any} obj ?
     * @returns {any} ?
     */
    function customFormat(format, dOptions, obj) {
        var options = {};
        var formatSplit = format.split(';');
        var data = ['pData', 'nData', 'zeroData'];
        for (var i = 0; i < formatSplit.length; i++) {
            // eslint-disable-next-line
            options[data[i]] = customNumberFormat(formatSplit[i], dOptions, obj);
        }
        if (isNullOrUndefined(options.nData)) {
            options.nData = extend({}, options.pData);
            options.nData.nlead = isNullOrUndefined(dOptions) ? '-' + options.nData.nlead : dOptions.minusSymbol + options.nData.nlead;
        }
        return options;
    }
    IntlBase.customFormat = customFormat;
    /**
     * Returns custom formatting options
     *
     * @private
     * @param {string} format ?
     * @param {CommonOptions} dOptions ?
     * @param {Object} numObject ?
     * @returns {any} ?
     */
    function customNumberFormat(format, dOptions, numObject) {
        var cOptions = { type: 'decimal', minimumFractionDigits: 0, maximumFractionDigits: 0 };
        var pattern = format.match(IntlBase.customRegex);
        if (isNullOrUndefined(pattern) || (pattern[5] === '' && format !== 'N/A')) {
            cOptions.type = undefined;
            return cOptions;
        }
        cOptions.nlead = pattern[1];
        cOptions.nend = pattern[10];
        var integerPart = pattern[6];
        var spaceCapture = integerPart.match(/\ $/g) ? true : false;
        var spaceGrouping = integerPart.replace(/\ $/g, '').indexOf(' ') !== -1;
        cOptions.useGrouping = integerPart.indexOf(',') !== -1 || spaceGrouping;
        integerPart = integerPart.replace(/,/g, '');
        var fractionPart = pattern[7];
        if (integerPart.indexOf('0') !== -1) {
            cOptions.minimumIntegerDigits = integerPart.length - integerPart.indexOf('0');
        }
        if (!isNullOrUndefined(fractionPart)) {
            cOptions.minimumFractionDigits = fractionPart.lastIndexOf('0');
            cOptions.maximumFractionDigits = fractionPart.lastIndexOf('#');
            if (cOptions.minimumFractionDigits === -1) {
                cOptions.minimumFractionDigits = 0;
            }
            if (cOptions.maximumFractionDigits === -1 || cOptions.maximumFractionDigits < cOptions.minimumFractionDigits) {
                cOptions.maximumFractionDigits = cOptions.minimumFractionDigits;
            }
        }
        if (!isNullOrUndefined(dOptions)) {
            extend(cOptions, isCurrencyPercent([cOptions.nlead, cOptions.nend], '$', dOptions.currencySymbol));
            if (!cOptions.isCurrency) {
                extend(cOptions, isCurrencyPercent([cOptions.nlead, cOptions.nend], '%', dOptions.percentSymbol));
            }
        }
        else {
            extend(cOptions, isCurrencyPercent([cOptions.nlead, cOptions.nend], '%', '%'));
        }
        if (!isNullOrUndefined(numObject)) {
            var symbolPattern = getSymbolPattern(cOptions.type, dOptions.numberMapper.numberSystem, numObject, false);
            if (cOptions.useGrouping) {
                // eslint-disable-next-line
                cOptions.groupSeparator = spaceGrouping ? ' ' : dOptions.numberMapper.numberSymbols[mapper[2]];
                cOptions.groupData = NumberFormat.getGroupingDetails(symbolPattern.split(';')[0]);
            }
            cOptions.nlead = cOptions.nlead.replace(/'/g, '');
            cOptions.nend = spaceCapture ? ' ' + cOptions.nend.replace(/'/g, '') : cOptions.nend.replace(/'/g, '');
        }
        return cOptions;
    }
    IntlBase.customNumberFormat = customNumberFormat;
    /**
     * Returns formatting options for currency or percent type
     *
     * @private
     * @param {string[]} parts ?
     * @param {string} actual ?
     * @param {string} symbol ?
     * @returns {any} ?
     */
    function isCurrencyPercent(parts, actual, symbol) {
        var options = { nlead: parts[0], nend: parts[1] };
        for (var i = 0; i < 2; i++) {
            var part = parts[i];
            var loc = part.indexOf(actual);
            if ((loc !== -1) && ((loc < part.indexOf('\'')) || (loc > part.lastIndexOf('\'')))) {
                // eslint-disable-next-line
                options[typeMapper[i]] = part.substr(0, loc) + symbol + part.substr(loc + 1);
                // eslint-disable-next-line
                options[typeMapper[actual]] = true;
                options.type = options.isCurrency ? 'currency' : 'percent';
                break;
            }
        }
        return options;
    }
    IntlBase.isCurrencyPercent = isCurrencyPercent;
    /**
     * Returns culture based date separator
     *
     * @private
     * @param {Object} dateObj ?
     * @returns {string} ?
     */
    function getDateSeparator(dateObj) {
        var value = (getValue('dateFormats.short', dateObj) || '').match(/[d‏M‏]([^d‏M])[d‏M‏]/i);
        return value ? value[1] : '/';
    }
    IntlBase.getDateSeparator = getDateSeparator;
    /**
     * Returns Native Date Time pattern
     *
     * @private
     * @param {string} culture ?
     * @param {DateFormatOptions} options ?
     * @param {Object} cldr ?
     * @param {boolean} isExcelFormat ?
     * @returns {string} ?
     */
    function getActualDateTimeFormat(culture, options, cldr, isExcelFormat) {
        var dependable = getDependables(cldr, culture, options.calendar);
        if (isBlazor()) {
            options = compareBlazorDateFormats(options, culture);
        }
        var actualPattern = options.format || getResultantPattern(options.skeleton, dependable.dateObject, options.type);
        if (isExcelFormat) {
            actualPattern = actualPattern.replace(patternRegex, function (pattern) {
                // eslint-disable-next-line
                return patternMatch[pattern];
            });
            if (actualPattern.indexOf('z') !== -1) {
                var tLength = actualPattern.match(/z/g).length;
                var timeZonePattern = void 0;
                var options_1 = { 'timeZone': {} };
                options_1.numMapper = ParserBase.getNumberMapper(dependable.parserObject, ParserBase.getNumberingSystem(cldr));
                options_1.timeZone = getValue('dates.timeZoneNames', dependable.parserObject);
                var value = new Date();
                var timezone = value.getTimezoneOffset();
                var pattern = (tLength < 4) ? '+H;-H' : options_1.timeZone.hourFormat;
                pattern = pattern.replace(/:/g, options_1.numMapper.timeSeparator);
                if (timezone === 0) {
                    timeZonePattern = options_1.timeZone.gmtZeroFormat;
                }
                else {
                    timeZonePattern = DateFormat.getTimeZoneValue(timezone, pattern);
                    timeZonePattern = options_1.timeZone.gmtFormat.replace(/\{0\}/, timeZonePattern);
                }
                actualPattern = actualPattern.replace(/[z]+/, '"' + timeZonePattern + '"');
            }
            actualPattern = actualPattern.replace(/ $/, '');
        }
        return actualPattern;
    }
    IntlBase.getActualDateTimeFormat = getActualDateTimeFormat;
    /**
     *
     * @param {string} actual ?
     * @param {any} option ?
     * @returns {any} ?
     */
    // eslint-disable-next-line
    function processSymbol(actual, option) {
        if (actual.indexOf(',') !== -1) {
            // eslint-disable-next-line
            var split = actual.split(',');
            actual = (split[0] + getValue('numberMapper.numberSymbols.group', option) +
                split[1].replace('.', getValue('numberMapper.numberSymbols.decimal', option)));
        }
        else {
            actual = actual.replace('.', getValue('numberMapper.numberSymbols.decimal', option));
        }
        return actual;
    }
    /**
     * Returns Native Number pattern
     *
     * @private
     * @param {string} culture ?
     * @param {NumberFormatOptions} options ?
     * @param {Object} cldr ?
     * @param {boolean} isExcel ?
     * @returns {string} ?
     */
    function getActualNumberFormat(culture, options, cldr, isExcel) {
        var dependable = getDependables(cldr, culture, '', true);
        var parseOptions = { custom: true };
        var numrericObject = dependable.numericObject;
        var minFrac;
        var curObj = {};
        var curMatch = (options.format || '').match(IntlBase.currencyFormatRegex);
        var type = IntlBase.formatRegex.test(options.format) ? getProperNumericSkeleton(options.format || 'N') : {};
        var dOptions = {};
        if (curMatch) {
            dOptions.numberMapper = isBlazor() ?
                extend({}, dependable.numericObject) :
                ParserBase.getNumberMapper(dependable.parserObject, ParserBase.getNumberingSystem(cldr), true);
            var curCode = isBlazor() ? getValue('currencySymbol', dependable.numericObject) :
                getCurrencySymbol(dependable.numericObject, options.currency || exports.defaultCurrencyCode, options.altSymbol);
            var symbolPattern = getSymbolPattern('currency', dOptions.numberMapper.numberSystem, dependable.numericObject, (/a/i).test(options.format));
            symbolPattern = symbolPattern.replace(/\u00A4/g, curCode);
            var split = symbolPattern.split(';');
            curObj.hasNegativePattern = isBlazor() ? true : (split.length > 1);
            curObj.nData = isBlazor() ? getValue(type.type + 'nData', numrericObject) :
                getFormatData(split[1] || '-' + split[0], true, curCode);
            curObj.pData = isBlazor() ? getValue(type.type + 'pData', numrericObject) :
                getFormatData(split[0], false, curCode);
            if (!curMatch[2] && !options.minimumFractionDigits && !options.maximumFractionDigits) {
                minFrac = getFormatData(symbolPattern.split(';')[0], true, '', true).minimumFraction;
            }
        }
        var actualPattern;
        if ((IntlBase.formatRegex.test(options.format)) || !(options.format)) {
            extend(parseOptions, getProperNumericSkeleton(options.format || 'N'));
            parseOptions.custom = false;
            actualPattern = '###0';
            if (parseOptions.fractionDigits || options.minimumFractionDigits || options.maximumFractionDigits || minFrac) {
                var defaultMinimum = 0;
                if (parseOptions.fractionDigits) {
                    options.minimumFractionDigits = options.maximumFractionDigits = parseOptions.fractionDigits;
                }
                actualPattern = fractionDigitsPattern(actualPattern, minFrac || parseOptions.fractionDigits ||
                    options.minimumFractionDigits || defaultMinimum, options.maximumFractionDigits || defaultMinimum);
            }
            if (options.minimumIntegerDigits) {
                actualPattern = minimumIntegerPattern(actualPattern, options.minimumIntegerDigits);
            }
            if (options.useGrouping) {
                actualPattern = groupingPattern(actualPattern);
            }
            if (parseOptions.type === 'currency' || (parseOptions.type && isBlazor())) {
                if (isBlazor() && parseOptions.type !== 'currency') {
                    curObj.pData = getValue(parseOptions.type + 'pData', numrericObject);
                    curObj.nData = getValue(parseOptions.type + 'nData', numrericObject);
                }
                var cPattern = actualPattern;
                actualPattern = curObj.pData.nlead + cPattern + curObj.pData.nend;
                if (curObj.hasNegativePattern || isBlazor()) {
                    actualPattern += ';' + curObj.nData.nlead + cPattern + curObj.nData.nend;
                }
            }
            if (parseOptions.type === 'percent' && !isBlazor()) {
                actualPattern += ' %';
            }
        }
        else {
            actualPattern = options.format.replace(/'/g, '"');
        }
        if (Object.keys(dOptions).length > 0) {
            actualPattern = !isExcel ? processSymbol(actualPattern, dOptions) : actualPattern;
        }
        return actualPattern;
    }
    IntlBase.getActualNumberFormat = getActualNumberFormat;
    /**
     *
     * @param {string} pattern ?
     * @param {number} minDigits ?
     * @param {number} maxDigits ?
     * @returns {string} ?
     */
    function fractionDigitsPattern(pattern, minDigits, maxDigits) {
        pattern += '.';
        for (var a = 0; a < minDigits; a++) {
            pattern += '0';
        }
        if (minDigits < maxDigits) {
            var diff = maxDigits - minDigits;
            for (var b = 0; b < diff; b++) {
                pattern += '#';
            }
        }
        return pattern;
    }
    IntlBase.fractionDigitsPattern = fractionDigitsPattern;
    /**
     *
     * @param {string} pattern ?
     * @param {number} digits ?
     * @returns {string} ?
     */
    function minimumIntegerPattern(pattern, digits) {
        var temp = pattern.split('.');
        var integer = '';
        for (var x = 0; x < digits; x++) {
            integer += '0';
        }
        return temp[1] ? (integer + '.' + temp[1]) : integer;
    }
    IntlBase.minimumIntegerPattern = minimumIntegerPattern;
    /**
     *
     * @param {string} pattern ?
     * @returns {string} ?
     */
    function groupingPattern(pattern) {
        var temp = pattern.split('.');
        var integer = temp[0];
        var no = 3 - integer.length % 3;
        var hash = (no && no === 1) ? '#' : (no === 2 ? '##' : '');
        integer = hash + integer;
        pattern = '';
        for (var x = integer.length - 1; x > 0; x = x - 3) {
            pattern = ',' + integer[x - 2] + integer[x - 1] + integer[x] + pattern;
        }
        pattern = pattern.slice(1);
        return temp[1] ? (pattern + '.' + temp[1]) : pattern;
    }
    IntlBase.groupingPattern = groupingPattern;
    /**
     *
     * @param {string} culture ?
     * @param {Object} cldr ?
     * @returns {number} ?
     */
    function getWeekData(culture, cldr) {
        var firstDay = defaultFirstDay;
        var mapper = getValue('supplemental.weekData.firstDay', cldr);
        var iCulture = culture;
        if ((/en-/).test(iCulture)) {
            iCulture = iCulture.slice(3);
        }
        iCulture = iCulture.slice(0, 2).toUpperCase() + iCulture.substr(2);
        if (mapper) {
            firstDay = mapper[iCulture] || mapper[iCulture.slice(0, 2)] || defaultFirstDay;
        }
        return firstDayMapper[firstDay];
    }
    IntlBase.getWeekData = getWeekData;
    /**
     * @private
     * @param {any} pData ?
     * @param {string} aCurrency ?
     * @param {string} rCurrency ?
     * @returns {void} ?
     */
    function replaceBlazorCurrency(pData, aCurrency, rCurrency) {
        var iCurrency = getBlazorCurrencySymbol(rCurrency);
        if (aCurrency !== iCurrency) {
            for (var _i = 0, pData_1 = pData; _i < pData_1.length; _i++) {
                var data = pData_1[_i];
                data.nend = data.nend.replace(aCurrency, iCurrency);
                data.nlead = data.nlead.replace(aCurrency, iCurrency);
            }
        }
    }
    IntlBase.replaceBlazorCurrency = replaceBlazorCurrency;
    /**
     * @private
     * @param {Date} date ?
     * @returns {number} ?
     */
    function getWeekOfYear(date) {
        var newYear = new Date(date.getFullYear(), 0, 1);
        var day = newYear.getDay();
        var weeknum;
        day = (day >= 0 ? day : day + 7);
        var daynum = Math.floor((date.getTime() - newYear.getTime() -
            (date.getTimezoneOffset() - newYear.getTimezoneOffset()) * 60000) / 86400000) + 1;
        if (day < 4) {
            weeknum = Math.floor((daynum + day - 1) / 7) + 1;
            if (weeknum > 52) {
                var nYear = new Date(date.getFullYear() + 1, 0, 1);
                var nday = nYear.getDay();
                nday = nday >= 0 ? nday : nday + 7;
                weeknum = nday < 4 ? 1 : 53;
            }
        }
        else {
            weeknum = Math.floor((daynum + day - 1) / 7);
        }
        return weeknum;
    }
    IntlBase.getWeekOfYear = getWeekOfYear;
})(exports.IntlBase || (exports.IntlBase = {}));

var headerRegex = /^(.*?):[ \t]*([^\r\n]*)$/gm;
var defaultType = 'GET';
/**
 * Ajax class provides ability to make asynchronous HTTP request to the server
 * ```typescript
 *   var ajax = new Ajax("index.html", "GET", true);
 *   ajax.send().then(
 *               function (value) {
 *                   console.log(value);
 *               },
 *               function (reason) {
 *                   console.log(reason);
 *               });
 * ```
 */
var Ajax = /** @class */ (function () {
    /**
     * Constructor for Ajax class
     *
     * @param  {string|Object} options ?
     * @param  {string} type ?
     * @param  {boolean} async ?
     * @returns defaultType any
     */
    function Ajax(options, type, async, contentType) {
        /**
         * A boolean value indicating whether the request should be sent asynchronous or not.
         *
         * @default true
         */
        this.mode = true;
        /**
         * A boolean value indicating whether to ignore the promise reject.
         *
         * @private
         * @default true
         */
        this.emitError = true;
        this.options = {};
        if (typeof options === 'string') {
            this.url = options;
            this.type = type ? type.toUpperCase() : defaultType;
            this.mode = !isNullOrUndefined(async) ? async : true;
        }
        else if (typeof options === 'object') {
            this.options = options;
            merge(this, this.options);
        }
        this.type = this.type ? this.type.toUpperCase() : defaultType;
        this.contentType = (this.contentType !== undefined) ? this.contentType : contentType;
    }
    /**
     *
     * Send the request to server.
     *
     * @param {any} data - To send the user data
     * @return {Promise} ?
     */
    Ajax.prototype.send = function (data) {
        var _this = this;
        this.data = isNullOrUndefined(data) ? this.data : data;
        var eventArgs = {
            cancel: false,
            httpRequest: null
        };
        var promise = new Promise(function (resolve, reject) {
            _this.httpRequest = new XMLHttpRequest();
            _this.httpRequest.onreadystatechange = function () { _this.stateChange(resolve, reject); };
            if (!isNullOrUndefined(_this.onLoad)) {
                _this.httpRequest.onload = _this.onLoad;
            }
            if (!isNullOrUndefined(_this.onProgress)) {
                _this.httpRequest.onprogress = _this.onProgress;
            }
            /* istanbul ignore next */
            if (!isNullOrUndefined(_this.onAbort)) {
                _this.httpRequest.onabort = _this.onAbort;
            }
            /* istanbul ignore next */
            if (!isNullOrUndefined(_this.onError)) {
                _this.httpRequest.onerror = _this.onError;
            }
            //** Upload Events **/
            /* istanbul ignore next */
            if (!isNullOrUndefined(_this.onUploadProgress)) {
                _this.httpRequest.upload.onprogress = _this.onUploadProgress;
            }
            _this.httpRequest.open(_this.type, _this.url, _this.mode);
            // Set default headers
            if (!isNullOrUndefined(_this.data) && _this.contentType !== null) {
                _this.httpRequest.setRequestHeader('Content-Type', _this.contentType || 'application/json; charset=utf-8');
            }
            if (_this.beforeSend) {
                eventArgs.httpRequest = _this.httpRequest;
                _this.beforeSend(eventArgs);
            }
            if (!eventArgs.cancel) {
                _this.httpRequest.send(!isNullOrUndefined(_this.data) ? _this.data : null);
            }
        });
        return promise;
    };
    Ajax.prototype.successHandler = function (data) {
        if (this.onSuccess) {
            this.onSuccess(data, this);
        }
        return data;
    };
    Ajax.prototype.failureHandler = function (reason) {
        if (this.onFailure) {
            this.onFailure(this.httpRequest);
        }
        return reason;
    };
    Ajax.prototype.stateChange = function (resolve, reject) {
        var data = this.httpRequest.responseText;
        if (this.dataType && this.dataType.toLowerCase() === 'json') {
            if (data === '') {
                data = undefined;
            }
            else {
                try {
                    data = JSON.parse(data);
                }
                catch (error) {
                    // no exception handle
                }
            }
        }
        if (this.httpRequest.readyState === 4) {
            //success range should be 200 to 299
            if ((this.httpRequest.status >= 200 && this.httpRequest.status <= 299) || this.httpRequest.status === 304) {
                resolve(this.successHandler(data));
            }
            else {
                if (this.emitError) {
                    reject(new Error(this.failureHandler(this.httpRequest.statusText)));
                }
                else {
                    resolve();
                }
            }
        }
    };
    /**
     * To get the response header from XMLHttpRequest
     *
     * @param  {string} key Key to search in the response header
     * @returns {string} ?
     */
    Ajax.prototype.getResponseHeader = function (key) {
        var responseHeaders;
        var header;
        // eslint-disable-next-line
        responseHeaders = {};
        var headers = headerRegex.exec(this.httpRequest.getAllResponseHeaders());
        while (headers) {
            responseHeaders[headers[1].toLowerCase()] = headers[2];
            headers = headerRegex.exec(this.httpRequest.getAllResponseHeaders());
        }
        // eslint-disable-next-line
        header = responseHeaders[key.toLowerCase()];
        return isNullOrUndefined(header) ? null : header;
    };
    return Ajax;
}());

var REGX_MOBILE = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|mobile/i;
var REGX_IE = /msie|trident/i;
var REGX_IE11 = /Trident\/7\./;
var REGX_IOS = /(ipad|iphone|ipod touch)/i;
var REGX_IOS7 = /(ipad|iphone|ipod touch);.*os 7_\d|(ipad|iphone|ipod touch);.*os 8_\d/i;
var REGX_ANDROID = /android/i;
var REGX_WINDOWS = /trident|windows phone|edge/i;
var REGX_VERSION = /(version)[ /]([\w.]+)/i;
var REGX_BROWSER = {
    OPERA: /(opera|opr)(?:.*version|)[ /]([\w.]+)/i,
    EDGE: /(edge)(?:.*version|)[ /]([\w.]+)/i,
    CHROME: /(chrome|crios)[ /]([\w.]+)/i,
    PANTHOMEJS: /(phantomjs)[ /]([\w.]+)/i,
    SAFARI: /(safari)[ /]([\w.]+)/i,
    WEBKIT: /(webkit)[ /]([\w.]+)/i,
    MSIE: /(msie|trident) ([\w.]+)/i,
    MOZILLA: /(mozilla)(?:.*? rv:([\w.]+)|)/i
};
/* istanbul ignore else  */
if (typeof window !== 'undefined') {
    window.browserDetails = window.browserDetails || {};
}
/**
 * Get configuration details for Browser
 *
 * @private
 */
var Browser = /** @class */ (function () {
    function Browser() {
    }
    Browser.extractBrowserDetail = function () {
        var browserInfo = { culture: {} };
        var keys = Object.keys(REGX_BROWSER);
        var clientInfo = [];
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            clientInfo = Browser.userAgent.match(REGX_BROWSER[key]);
            if (clientInfo) {
                browserInfo.name = (clientInfo[1].toLowerCase() === 'opr' ? 'opera' : clientInfo[1].toLowerCase());
                browserInfo.name = (clientInfo[1].toLowerCase() === 'crios' ? 'chrome' : browserInfo.name);
                browserInfo.version = clientInfo[2];
                browserInfo.culture.name = browserInfo.culture.language = navigator.language;
                // eslint-disable-next-line
                if (!!Browser.userAgent.match(REGX_IE11)) {
                    browserInfo.name = 'msie';
                    break;
                }
                var version = Browser.userAgent.match(REGX_VERSION);
                if (browserInfo.name === 'safari' && version) {
                    browserInfo.version = version[2];
                }
                break;
            }
        }
        return browserInfo;
    };
    /**
     * To get events from the browser
     *
     * @param {string} event - type of event triggered.
     * @returns {boolean}
     */
    Browser.getEvent = function (event) {
        // eslint-disable-next-line
        var events = {
            start: {
                isPointer: 'pointerdown', isTouch: 'touchstart', isDevice: 'mousedown'
            },
            move: {
                isPointer: 'pointermove', isTouch: 'touchmove', isDevice: 'mousemove'
            },
            end: {
                isPointer: 'pointerup', isTouch: 'touchend', isDevice: 'mouseup'
            },
            cancel: {
                isPointer: 'pointercancel', isTouch: 'touchcancel', isDevice: 'mouseleave'
            }
        };
        return (Browser.isPointer ? events[event].isPointer :
            (Browser.isTouch ? events[event].isTouch + (!Browser.isDevice ? ' ' + events[event].isDevice : '')
                : events[event].isDevice));
    };
    /**
     * To get the Touch start event from browser
     *
     * @returns {string}
     */
    Browser.getTouchStartEvent = function () {
        return Browser.getEvent('start');
    };
    /**
     * To get the Touch end event from browser
     *
     * @returns {string}
     */
    Browser.getTouchEndEvent = function () {
        return Browser.getEvent('end');
    };
    /**
     * To get the Touch move event from browser
     *
     * @returns {string}
     */
    Browser.getTouchMoveEvent = function () {
        return Browser.getEvent('move');
    };
    /**
     * To cancel the touch event from browser
     *
     * @returns {string}
     */
    Browser.getTouchCancelEvent = function () {
        return Browser.getEvent('cancel');
    };
    /**
     * To get the value based on provided key and regX
     *
     * @param {string} key ?
     * @param {RegExp} regX ?
     * @returns {Object} ?
     */
    Browser.getValue = function (key, regX) {
        var browserDetails = window.browserDetails;
        if (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1 && Browser.isTouch === true) {
            browserDetails['isIos'] = true;
            browserDetails['isDevice'] = true;
            browserDetails['isTouch'] = true;
            browserDetails['isPointer'] = true;
        }
        if ('undefined' === typeof browserDetails[key]) {
            return browserDetails[key] = regX.test(Browser.userAgent);
        }
        return browserDetails[key];
    };
    Object.defineProperty(Browser, "userAgent", {
        get: function () {
            return Browser.uA;
        },
        //Properties
        /**
         * Property specifies the userAgent of the browser. Default userAgent value is based on the browser.
         * Also we can set our own userAgent.
         *
         * @param {string} uA ?
         */
        set: function (uA) {
            Browser.uA = uA;
            window.browserDetails = {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "info", {
        //Read Only Properties
        /**
         * Property is to get the browser information like Name, Version and Language
         *
         * @returns {BrowserInfo} ?
         */
        get: function () {
            if (isUndefined(window.browserDetails.info)) {
                return window.browserDetails.info = Browser.extractBrowserDetail();
            }
            return window.browserDetails.info;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isIE", {
        /**
         * Property is to get whether the userAgent is based IE.
         *
         * @returns {boolean} ?
         */
        get: function () {
            return Browser.getValue('isIE', REGX_IE);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isTouch", {
        /**
         * Property is to get whether the browser has touch support.
         *
         * @returns {boolean} ?
         */
        get: function () {
            if (isUndefined(window.browserDetails.isTouch)) {
                return (window.browserDetails.isTouch =
                    ('ontouchstart' in window.navigator) ||
                        (window &&
                            window.navigator &&
                            (window.navigator.maxTouchPoints > 0)) || ('ontouchstart' in window));
            }
            return window.browserDetails.isTouch;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isPointer", {
        /**
         * Property is to get whether the browser has Pointer support.
         *
         * @returns {boolean} ?
         */
        get: function () {
            if (isUndefined(window.browserDetails.isPointer)) {
                return window.browserDetails.isPointer = ('pointerEnabled' in window.navigator);
            }
            return window.browserDetails.isPointer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isMSPointer", {
        /**
         * Property is to get whether the browser has MSPointer support.
         *
         * @returns {boolean} ?
         */
        get: function () {
            if (isUndefined(window.browserDetails.isMSPointer)) {
                return window.browserDetails.isMSPointer = ('msPointerEnabled' in window.navigator);
            }
            return window.browserDetails.isMSPointer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isDevice", {
        /**
         * Property is to get whether the userAgent is device based.
         *
         * @returns {boolean} ?
         */
        get: function () {
            return Browser.getValue('isDevice', REGX_MOBILE);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isIos", {
        /**
         * Property is to get whether the userAgent is IOS.
         *
         * @returns {boolean} ?
         */
        get: function () {
            return Browser.getValue('isIos', REGX_IOS);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isIos7", {
        /**
         * Property is to get whether the userAgent is Ios7.
         *
         * @returns {boolean} ?
         */
        get: function () {
            return Browser.getValue('isIos7', REGX_IOS7);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isAndroid", {
        /**
         * Property is to get whether the userAgent is Android.
         *
         * @returns {boolean} ?
         */
        get: function () {
            return Browser.getValue('isAndroid', REGX_ANDROID);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isWebView", {
        /**
         * Property is to identify whether application ran in web view.
         *
         * @returns {boolean} ?
         */
        get: function () {
            if (isUndefined(window.browserDetails.isWebView)) {
                window.browserDetails.isWebView = !(isUndefined(window.cordova) && isUndefined(window.PhoneGap)
                    && isUndefined(window.phonegap) && window.forge !== 'object');
                return window.browserDetails.isWebView;
            }
            return window.browserDetails.isWebView;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isWindows", {
        /**
         * Property is to get whether the userAgent is Windows.
         *
         * @returns {boolean} ?
         */
        get: function () {
            return Browser.getValue('isWindows', REGX_WINDOWS);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "touchStartEvent", {
        /**
         * Property is to get the touch start event. It returns event name based on browser.
         *
         * @returns {string} ?
         */
        get: function () {
            if (isUndefined(window.browserDetails.touchStartEvent)) {
                return window.browserDetails.touchStartEvent = Browser.getTouchStartEvent();
            }
            return window.browserDetails.touchStartEvent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "touchMoveEvent", {
        /**
         * Property is to get the touch move event. It returns event name based on browser.
         *
         * @returns {string} ?
         */
        get: function () {
            if (isUndefined(window.browserDetails.touchMoveEvent)) {
                return window.browserDetails.touchMoveEvent = Browser.getTouchMoveEvent();
            }
            return window.browserDetails.touchMoveEvent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "touchEndEvent", {
        /**
         * Property is to get the touch end event. It returns event name based on browser.
         *
         * @returns {string} ?
         */
        get: function () {
            if (isUndefined(window.browserDetails.touchEndEvent)) {
                return window.browserDetails.touchEndEvent = Browser.getTouchEndEvent();
            }
            return window.browserDetails.touchEndEvent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "touchCancelEvent", {
        /**
         * Property is to cancel the touch end event.
         *
         * @returns {string} ?
         */
        get: function () {
            if (isUndefined(window.browserDetails.touchCancelEvent)) {
                return window.browserDetails.touchCancelEvent = Browser.getTouchCancelEvent();
            }
            return window.browserDetails.touchCancelEvent;
        },
        enumerable: true,
        configurable: true
    });
    /* istanbul ignore next */
    Browser.uA = typeof navigator !== 'undefined' ? navigator.userAgent : '';
    return Browser;
}());

/**
 * EventHandler class provides option to add, remove, clear and trigger events to a HTML DOM element
 * ```html
 * <div id="Eventdiv">  </div>
 * <script>
 *   let node: HTMLElement = document.querySelector("#Eventdiv");
 *   EventHandler.addEventListener(node, "click", function(){
 *       // click handler function code
 *   });
 *   EventHandler.addEventListener(node, "onmouseover", function(){
 *       // mouseover handler function code
 *   });
 *   EventHandler.removeEventListener(node, "click", function(){
 *       // click handler function code
 *   });
 *   eventObj.clearEvents();
 * </script>
 * ```
 */
var EventHandler = /** @class */ (function () {
    function EventHandler() {
    }
    // to get the event data based on element
    EventHandler.addOrGetEventData = function (element) {
        if ('__eventList' in element) {
            return element.__eventList.events;
        }
        else {
            element.__eventList = {};
            return element.__eventList.events = [];
        }
    };
    /**
     * Add an event to the specified DOM element.
     *
     * @param {any} element - Target HTML DOM element
     * @param {string} eventName - A string that specifies the name of the event
     * @param {Function} listener - Specifies the function to run when the event occurs
     * @param {Object} bindTo - A object that binds 'this' variable in the event handler
     * @param {number} intDebounce - Specifies at what interval given event listener should be triggered.
     * @returns {Function} ?
     */
    EventHandler.add = function (element, eventName, listener, bindTo, intDebounce) {
        var eventData = EventHandler.addOrGetEventData(element);
        var debounceListener;
        if (intDebounce) {
            debounceListener = debounce(listener, intDebounce);
        }
        else {
            debounceListener = listener;
        }
        if (bindTo) {
            debounceListener = debounceListener.bind(bindTo);
        }
        var event = eventName.split(' ');
        for (var i = 0; i < event.length; i++) {
            eventData.push({
                name: event[i],
                listener: listener,
                debounce: debounceListener
            });
            if (Browser.isIE) {
                element.addEventListener(event[i], debounceListener);
            }
            else {
                element.addEventListener(event[i], debounceListener, { passive: false });
            }
        }
        return debounceListener;
    };
    /**
     * Remove an event listener that has been attached before.
     *
     * @param {any} element - Specifies the target html element to remove the event
     * @param {string} eventName - A string that specifies the name of the event to remove
     * @param {Function} listener - Specifies the function to remove
     * @returns {void} ?
     */
    EventHandler.remove = function (element, eventName, listener) {
        var eventData = EventHandler.addOrGetEventData(element);
        var event = eventName.split(' ');
        var _loop_1 = function (j) {
            var index = -1;
            var debounceListener;
            if (eventData && eventData.length !== 0) {
                eventData.some(function (x, i) {
                    return x.name === event[j] && x.listener === listener ?
                        (index = i, debounceListener = x.debounce, true) : false;
                });
            }
            if (index !== -1) {
                eventData.splice(index, 1);
            }
            if (debounceListener) {
                element.removeEventListener(event[j], debounceListener);
            }
        };
        for (var j = 0; j < event.length; j++) {
            _loop_1(j);
        }
    };
    /**
     * Clear all the event listeners that has been previously attached to the element.
     *
     * @param {any} element - Specifies the target html element to clear the events
     * @returns {void} ?
     */
    EventHandler.clearEvents = function (element) {
        var eventData;
        var copyData;
        // eslint-disable-next-line
        eventData = EventHandler.addOrGetEventData(element);
        // eslint-disable-next-line
        copyData = extend([], copyData, eventData);
        for (var i = 0; i < copyData.length; i++) {
            element.removeEventListener(copyData[i].name, copyData[i].debounce);
            eventData.shift();
        }
    };
    /**
     * Trigger particular event of the element.
     *
     * @param {any} element - Specifies the target html element to trigger the events
     * @param {string} eventName - Specifies the event to trigger for the specified element.
     * Can be a custom event, or any of the standard events.
     * @param {any} eventProp - Additional parameters to pass on to the event properties
     * @returns {void} ?
     */
    EventHandler.trigger = function (element, eventName, eventProp) {
        var eventData = EventHandler.addOrGetEventData(element);
        for (var _i = 0, eventData_1 = eventData; _i < eventData_1.length; _i++) {
            var event_1 = eventData_1[_i];
            if (event_1.name === eventName) {
                event_1.debounce.call(this, eventProp);
            }
        }
    };
    return EventHandler;
}());

/**
 * Functions related to dom operations.
 */
var SVG_REG = /^svg|^path|^g/;
/**
 * Function to create Html element.
 *
 * @param {string} tagName - Name of the tag, id and class names.
 * @param {ElementProperties} properties - Object to set properties in the element.
 * @param {ElementProperties} properties.id - To set the id to the created element.
 * @param {ElementProperties} properties.className - To add classes to the element.
 * @param {ElementProperties} properties.innerHTML - To set the innerHTML to element.
 * @param {ElementProperties} properties.styles - To set the some custom styles to element.
 * @param {ElementProperties} properties.attrs - To set the attributes to element.
 * @returns {any} ?
 * @private
 */
function createElement(tagName, properties) {
    var element = (SVG_REG.test(tagName) ? document.createElementNS('http://www.w3.org/2000/svg', tagName) : document.createElement(tagName));
    if (typeof (properties) === 'undefined') {
        return element;
    }
    element.innerHTML = (properties.innerHTML ? properties.innerHTML : '');
    if (properties.className !== undefined) {
        element.className = properties.className;
    }
    if (properties.id !== undefined) {
        element.id = properties.id;
    }
    if (properties.styles !== undefined) {
        element.setAttribute('style', properties.styles);
    }
    if (properties.attrs !== undefined) {
        attributes(element, properties.attrs);
    }
    return element;
}
/**
 * The function used to add the classes to array of elements
 *
 * @param  {Element[]|NodeList} elements - An array of elements that need to add a list of classes
 * @param  {string|string[]} classes - String or array of string that need to add an individual element as a class
 * @returns {any} .
 * @private
 */
function addClass(elements, classes) {
    var classList = getClassList(classes);
    for (var _i = 0, _a = elements; _i < _a.length; _i++) {
        var ele = _a[_i];
        for (var _b = 0, classList_1 = classList; _b < classList_1.length; _b++) {
            var className = classList_1[_b];
            if (isObject(ele)) {
                var curClass = getValue('attributes.className', ele);
                if (isNullOrUndefined(curClass)) {
                    setValue('attributes.className', className, ele);
                }
                else if (!new RegExp('\\b' + className + '\\b', 'i').test(curClass)) {
                    setValue('attributes.className', curClass + ' ' + className, ele);
                }
            }
            else {
                if (!ele.classList.contains(className)) {
                    ele.classList.add(className);
                }
            }
        }
    }
    return elements;
}
/**
 * The function used to add the classes to array of elements
 *
 * @param  {Element[]|NodeList} elements - An array of elements that need to remove a list of classes
 * @param  {string|string[]} classes - String or array of string that need to add an individual element as a class
 * @returns {any} .
 * @private
 */
function removeClass(elements, classes) {
    var classList = getClassList(classes);
    for (var _i = 0, _a = elements; _i < _a.length; _i++) {
        var ele = _a[_i];
        var flag = isObject(ele);
        var canRemove = flag ? getValue('attributes.className', ele) : ele.className !== '';
        if (canRemove) {
            for (var _b = 0, classList_2 = classList; _b < classList_2.length; _b++) {
                var className = classList_2[_b];
                if (flag) {
                    var classes_1 = getValue('attributes.className', ele);
                    var classArr = classes_1.split(' ');
                    var index = classArr.indexOf(className);
                    if (index !== -1) {
                        classArr.splice(index, 1);
                    }
                    setValue('attributes.className', classArr.join(' '), ele);
                }
                else {
                    ele.classList.remove(className);
                }
            }
        }
    }
    return elements;
}
/**
 * The function used to get classlist.
 *
 * @param  {string | string[]} classes - An element the need to check visibility
 * @returns {string[]} ?
 * @private
 */
function getClassList(classes) {
    var classList = [];
    if (typeof classes === 'string') {
        classList.push(classes);
    }
    else {
        classList = classes;
    }
    return classList;
}
/**
 * The function used to check element is visible or not.
 *
 * @param  {Element|Node} element - An element the need to check visibility
 * @returns {boolean} ?
 * @private
 */
function isVisible(element) {
    var ele = element;
    return (ele.style.visibility === '' && ele.offsetWidth > 0);
}
/**
 * The function used to insert an array of elements into a first of the element.
 *
 * @param  {Element[]|NodeList} fromElements - An array of elements that need to prepend.
 * @param  {Element} toElement - An element that is going to prepend.
 * @param {boolean} isEval - ?
 * @returns {Element[] | NodeList} ?
 * @private
 */
function prepend(fromElements, toElement, isEval) {
    var docFrag = document.createDocumentFragment();
    for (var _i = 0, _a = fromElements; _i < _a.length; _i++) {
        var ele = _a[_i];
        docFrag.appendChild(ele);
    }
    toElement.insertBefore(docFrag, toElement.firstElementChild);
    if (isEval) {
        executeScript(toElement);
    }
    return fromElements;
}
/**
 * The function used to insert an array of elements into last of the element.
 *
 * @param  {Element[]|NodeList} fromElements - An array of elements that need to append.
 * @param  {Element} toElement - An element that is going to prepend.
 * @param {boolean} isEval - ?
 * @returns {Element[] | NodeList} ?
 * @private
 */
function append(fromElements, toElement, isEval) {
    var docFrag = document.createDocumentFragment();
    for (var _i = 0, _a = fromElements; _i < _a.length; _i++) {
        var ele = _a[_i];
        docFrag.appendChild(ele);
    }
    toElement.appendChild(docFrag);
    if (isEval) {
        executeScript(toElement);
    }
    return fromElements;
}
/**
 * The function is used to evaluate script from Ajax request
 *
 * @param {Element} ele - An element is going to evaluate the script
 * @returns {void} ?
 */
function executeScript(ele) {
    var eleArray = ele.querySelectorAll('script');
    eleArray.forEach(function (element) {
        var script = document.createElement('script');
        script.text = element.innerHTML;
        document.head.appendChild(script);
        detach(script);
    });
}
/**
 * The function used to remove the element from parentnode
 *
 * @param  {Element|Node|HTMLElement} element - An element that is going to detach from the Dom
 * @returns {any} ?
 * @private
 */
// eslint-disable-next-line
function detach(element) {
    var parentNode = element.parentNode;
    if (parentNode) {
        return parentNode.removeChild(element);
    }
}
/**
 * The function used to remove the element from Dom also clear the bounded events
 *
 * @param  {Element|Node|HTMLElement} element - An element remove from the Dom
 * @returns {void} ?
 * @private
 */
function remove(element) {
    var parentNode = element.parentNode;
    EventHandler.clearEvents(element);
    parentNode.removeChild(element);
}
/**
 * The function helps to set multiple attributes to an element
 *
 * @param  {Element|Node} element - An element that need to set attributes.
 * @param  {string} attributes - JSON Object that is going to as attributes.
 * @returns {Element} ?
 * @private
 */
// eslint-disable-next-line
function attributes(element, attributes) {
    var keys = Object.keys(attributes);
    var ele = element;
    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
        var key = keys_1[_i];
        if (isObject(ele)) {
            var iKey = key;
            if (key === 'tabindex') {
                iKey = 'tabIndex';
            }
            ele.attributes[iKey] = attributes[key];
        }
        else {
            ele.setAttribute(key, attributes[key]);
        }
    }
    return ele;
}
/**
 * The function selects the element from giving context.
 *
 * @param  {string} selector - Selector string need fetch element
 * @param  {Document|Element} context - It is an optional type, That specifies a Dom context.
 * @param {boolean} needsVDOM ?
 * @returns {any} ?
 * @private
 */
// eslint-disable-next-line
function select(selector, context, needsVDOM) {
    if (context === void 0) { context = document; }
    selector = querySelectId(selector);
    return context.querySelector(selector);
}
/**
 * The function selects an array of element from the given context.
 *
 * @param  {string} selector - Selector string need fetch element
 * @param  {Document|Element} context - It is an optional type, That specifies a Dom context.
 * @param {boolean} needsVDOM ?
 * @returns {HTMLElement[]} ?
 * @private
 */
// eslint-disable-next-line
function selectAll(selector, context, needsVDOM) {
    if (context === void 0) { context = document; }
    selector = querySelectId(selector);
    var nodeList = context.querySelectorAll(selector);
    return nodeList;
}
/**
 * The function selects an id of element from the given context.
 *
 * @param  {string} selector - Selector string need fetch element
 * @returns {string} ?
 * @private
 */
function querySelectId(selector) {
    var charRegex = /(!|"|\$|%|&|'|\(|\)|\*|\/|:|;|<|=|\?|@|\]|\^|`|{|}|\||\+|~)/g;
    if (selector.match(/#[0-9]/g) || selector.match(charRegex)) {
        var idList = selector.split(',');
        for (var i = 0; i < idList.length; i++) {
            var list = idList[i].split(' ');
            for (var j = 0; j < list.length; j++) {
                if (list[j].indexOf('#') > -1) {
                    if (!list[j].match(/\[.*\]/)) {
                        var splitId = list[j].split('#');
                        if (splitId[1].match(/^\d/) || splitId[1].match(charRegex)) {
                            var setId = list[j].split('.');
                            setId[0] = setId[0].replace(/#/, '[id=\'') + '\']';
                            list[j] = setId.join('.');
                        }
                    }
                }
            }
            idList[i] = list.join(' ');
        }
        return idList.join(',');
    }
    return selector;
}
/**
 * Returns single closest parent element based on class selector.
 *
 * @param  {Element} element - An element that need to find the closest element.
 * @param  {string} selector - A classSelector of closest element.
 * @returns {Element} ?
 * @private
 */
function closest(element, selector) {
    var el = element;
    if (typeof el.closest === 'function') {
        return el.closest(selector);
    }
    while (el && el.nodeType === 1) {
        if (matches(el, selector)) {
            return el;
        }
        el = el.parentNode;
    }
    return null;
}
/**
 * Returns all sibling elements of the given element.
 *
 * @param  {Element|Node} element - An element that need to get siblings.
 * @returns {Element[]} ?
 * @private
 */
function siblings(element) {
    var siblings = [];
    var childNodes = Array.prototype.slice.call(element.parentNode.childNodes);
    for (var _i = 0, childNodes_1 = childNodes; _i < childNodes_1.length; _i++) {
        var curNode = childNodes_1[_i];
        if (curNode.nodeType === Node.ELEMENT_NODE && element !== curNode) {
            siblings.push(curNode);
        }
    }
    return siblings;
}
/**
 * set the value if not exist. Otherwise set the existing value
 *
 * @param  {HTMLElement} element - An element to which we need to set value.
 * @param  {string} property - Property need to get or set.
 * @param  {string} value - value need to set.
 * @returns {string} ?
 * @private
 */
function getAttributeOrDefault(element, property, value) {
    var attrVal;
    var isObj = isObject(element);
    if (isObj) {
        attrVal = getValue('attributes.' + property, element);
    }
    else {
        attrVal = element.getAttribute(property);
    }
    if (isNullOrUndefined(attrVal) && value) {
        if (!isObj) {
            element.setAttribute(property, value.toString());
        }
        else {
            element.attributes[property] = value;
        }
        attrVal = value;
    }
    return attrVal;
}
/**
 * Set the style attributes to Html element.
 *
 * @param {HTMLElement} element - Element which we want to set attributes
 * @param {any} attrs - Set the given attributes to element
 * @returns {void} ?
 * @private
 */
function setStyleAttribute(element, attrs) {
    if (attrs !== undefined) {
        Object.keys(attrs).forEach(function (key) {
            // eslint-disable-next-line
            element.style[key] = attrs[key];
        });
    }
}
/**
 * Method for add and remove classes to a dom element.
 *
 * @param {Element} element - Element for add and remove classes
 * @param {string[]} addClasses - List of classes need to be add to the element
 * @param {string[]} removeClasses - List of classes need to be remove from the element
 * @returns {void} ?
 * @private
 */
function classList(element, addClasses, removeClasses) {
    addClass([element], addClasses);
    removeClass([element], removeClasses);
}
/**
 * Method to check whether the element matches the given selector.
 *
 * @param {Element} element - Element to compare with the selector.
 * @param {string} selector - String selector which element will satisfy.
 * @returns {void} ?
 * @private
 */
function matches(element, selector) {
    // eslint-disable-next-line
    var matches = element.matches || element.msMatchesSelector || element.webkitMatchesSelector;
    if (matches) {
        return matches.call(element, selector);
    }
    else {
        return [].indexOf.call(document.querySelectorAll(selector), element) !== -1;
    }
}
/**
 * Method to get the html text from DOM.
 *
 * @param {HTMLElement} ele - Element to compare with the selector.
 * @param {string} innerHTML - String selector which element will satisfy.
 * @returns {void} ?
 * @private
 */
function includeInnerHTML(ele, innerHTML) {
    ele.innerHTML = innerHTML;
}
/**
 * Method to get the containsclass.
 *
 * @param {HTMLElement} ele - Element to compare with the selector.
 * @param {string} className - String selector which element will satisfy.
 * @returns {any} ?
 * @private
 */
// eslint-disable-next-line
function containsClass(ele, className) {
    if (isObject(ele)) {
        // eslint-disable-next-line
        return new RegExp('\\b' + className + '\\b', 'i').test(ele.attributes.className);
    }
    else {
        return ele.classList.contains(className);
    }
}
/**
 * Method to check whether the element matches the given selector.
 *
 * @param {Object} element - Element to compare with the selector.
 * @param {boolean} deep ?
 * @returns {any} ?
 * @private
 */
// eslint-disable-next-line
function cloneNode(element, deep) {
    if (isObject(element)) {
        if (deep) {
            return extend({}, {}, element, true);
        }
    }
    else {
        return element.cloneNode(deep);
    }
}

var isColEName = new RegExp(']');
/* tslint:enable:no-any */
/**
 * Base library module is common module for Framework modules like touch,keyboard and etc.,
 *
 * @private
 */
var Base = /** @class */ (function () {
    /**
     * Base constructor accept options and element
     *
     * @param {Object} options ?
     * @param {string} element ?
     */
    function Base(options, element) {
        this.isRendered = false;
        this.isComplexArraySetter = false;
        this.isServerRendered = false;
        this.allowServerDataBinding = true;
        this.isProtectedOnChange = true;
        this.properties = {};
        this.changedProperties = {};
        this.oldProperties = {};
        this.bulkChanges = {};
        this.refreshing = false;
        this.ignoreCollectionWatch = false;
        // eslint-disable-next-line
        this.finalUpdate = function () { };
        this.childChangedProperties = {};
        this.modelObserver = new Observer(this);
        if (!isUndefined(element)) {
            if ('string' === typeof (element)) {
                this.element = document.querySelector(element);
            }
            else {
                this.element = element;
            }
            if (!isNullOrUndefined(this.element)) {
                this.isProtectedOnChange = false;
                this.addInstance();
            }
        }
        if (!isUndefined(options)) {
            this.setProperties(options, true);
        }
        this.isDestroyed = false;
    }
    /** Property base section */
    /**
     * Function used to set bunch of property at a time.
     *
     * @private
     * @param  {Object} prop - JSON object which holds components properties.
     * @param  {boolean} muteOnChange ? - Specifies to true when we set properties.
     * @returns {void} ?
     */
    Base.prototype.setProperties = function (prop, muteOnChange) {
        var prevDetection = this.isProtectedOnChange;
        this.isProtectedOnChange = !!muteOnChange;
        merge(this, prop);
        if (muteOnChange !== true) {
            merge(this.changedProperties, prop);
            this.dataBind();
        }
        else if (isBlazor() && this.isRendered) {
            this.serverDataBind(prop);
        }
        this.finalUpdate();
        this.changedProperties = {};
        this.oldProperties = {};
        this.isProtectedOnChange = prevDetection;
    };
    /**
     * Calls for child element data bind
     *
     * @param {Object} obj ?
     * @param {Object} parent ?
     * @returns {void} ?
     */
    // tslint:disable-next-line:no-any
    Base.callChildDataBind = function (obj, parent) {
        var keys = Object.keys(obj);
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            if (parent[key] instanceof Array) {
                for (var _a = 0, _b = parent[key]; _a < _b.length; _a++) {
                    var obj_1 = _b[_a];
                    if (obj_1.dataBind !== undefined) {
                        obj_1.dataBind();
                    }
                }
            }
            else {
                parent[key].dataBind();
            }
        }
    };
    Base.prototype.clearChanges = function () {
        this.finalUpdate();
        this.changedProperties = {};
        this.oldProperties = {};
        this.childChangedProperties = {};
    };
    /**
     * Bind property changes immediately to components
     *
     * @returns {void} ?
     */
    Base.prototype.dataBind = function () {
        Base.callChildDataBind(this.childChangedProperties, this);
        if (Object.getOwnPropertyNames(this.changedProperties).length) {
            var prevDetection = this.isProtectedOnChange;
            var newChanges = this.changedProperties;
            var oldChanges = this.oldProperties;
            this.clearChanges();
            this.isProtectedOnChange = true;
            this.onPropertyChanged(newChanges, oldChanges);
            this.isProtectedOnChange = prevDetection;
        }
    };
    /* tslint:disable:no-any */
    Base.prototype.serverDataBind = function (newChanges) {
        if (!isBlazor()) {
            return;
        }
        newChanges = newChanges ? newChanges : {};
        extend(this.bulkChanges, {}, newChanges, true);
        var sfBlazor = 'sfBlazor';
        if (this.allowServerDataBinding && window[sfBlazor].updateModel) {
            window[sfBlazor].updateModel(this);
            this.bulkChanges = {};
        }
    };
    /* tslint:enable:no-any */
    Base.prototype.saveChanges = function (key, newValue, oldValue) {
        if (isBlazor()) {
            // tslint:disable-next-line:no-any
            var newChanges = {};
            newChanges[key] = newValue;
            this.serverDataBind(newChanges);
        }
        if (this.isProtectedOnChange) {
            return;
        }
        this.oldProperties[key] = oldValue;
        this.changedProperties[key] = newValue;
        this.finalUpdate();
        this.finalUpdate = setImmediate(this.dataBind.bind(this));
    };
    /** Event Base Section */
    /**
     * Adds the handler to the given event listener.
     *
     * @param {string} eventName - A String that specifies the name of the event
     * @param {Function} handler - Specifies the call to run when the event occurs.
     * @returns {void} ?
     */
    Base.prototype.addEventListener = function (eventName, handler) {
        this.modelObserver.on(eventName, handler);
    };
    /**
     * Removes the handler from the given event listener.
     *
     * @param {string} eventName - A String that specifies the name of the event to remove
     * @param {Function} handler - Specifies the function to remove
     * @returns {void} ?
     */
    Base.prototype.removeEventListener = function (eventName, handler) {
        this.modelObserver.off(eventName, handler);
    };
    /**
     * Triggers the handlers in the specified event.
     *
     * @private
     * @param {string} eventName - Specifies the event to trigger for the specified component properties.
     * Can be a custom event, or any of the standard events.
     * @param {Event} eventProp - Additional parameters to pass on to the event properties
     * @param {Function} successHandler - this function will invoke after event successfully triggered
     * @param {Function} errorHandler - this function will invoke after event if it failured to call.
     * @returns {void} ?
     */
    Base.prototype.trigger = function (eventName, eventProp, successHandler, errorHandler) {
        var _this = this;
        if (this.isDestroyed !== true) {
            var prevDetection = this.isProtectedOnChange;
            this.isProtectedOnChange = false;
            var data = this.modelObserver.notify(eventName, eventProp, successHandler, errorHandler);
            if (isColEName.test(eventName)) {
                var handler = getValue(eventName, this);
                if (handler) {
                    var blazor = 'Blazor';
                    if (window[blazor]) {
                        var promise = handler.call(this, eventProp);
                        if (promise && typeof promise.then === 'function') {
                            if (!successHandler) {
                                data = promise;
                            }
                            else {
                                promise.then(function (data) {
                                    if (successHandler) {
                                        data = typeof data === 'string' && _this.modelObserver.isJson(data) ?
                                            JSON.parse(data) : data;
                                        successHandler.call(_this, data);
                                    }
                                }).catch(function (data) {
                                    if (errorHandler) {
                                        data = typeof data === 'string' && _this.modelObserver.isJson(data) ? JSON.parse(data) : data;
                                        errorHandler.call(_this, data);
                                    }
                                });
                            }
                        }
                        else if (successHandler) {
                            successHandler.call(this, eventProp);
                        }
                    }
                    else {
                        handler.call(this, eventProp);
                        if (successHandler) {
                            successHandler.call(this, eventProp);
                        }
                    }
                }
                else if (successHandler) {
                    successHandler.call(this, eventProp);
                }
            }
            this.isProtectedOnChange = prevDetection;
            return data;
        }
    };
    /**
     * To maintain instance in base class
     *
     * @returns {void} ?
     */
    Base.prototype.addInstance = function () {
        // Add module class to the root element
        var moduleClass = 'e-' + this.getModuleName().toLowerCase();
        addClass([this.element], ['e-lib', moduleClass]);
        if (!isNullOrUndefined(this.element.ej2_instances)) {
            this.element.ej2_instances.push(this);
        }
        else {
            setValue('ej2_instances', [this], this.element);
        }
    };
    /**
     * To remove the instance from the element
     *
     * @returns {void} ?
     */
    Base.prototype.destroy = function () {
        var _this = this;
        // eslint-disable-next-line
        this.element.ej2_instances =
            this.element.ej2_instances.filter(function (i) { return i !== _this; });
        removeClass([this.element], ['e-' + this.getModuleName()]);
        if (this.element.ej2_instances.length === 0) {
            // Remove module class from the root element
            removeClass([this.element], ['e-lib']);
        }
        this.clearChanges();
        this.modelObserver.destroy();
        this.isDestroyed = true;
    };
    return Base;
}());
/**
 * Global function to get the component instance from the rendered element.
 *
 * @param {HTMLElement} elem Specifies the HTMLElement or element id string.
 * @param {string} comp Specifies the component module name or Component.
 * @returns {any} ?
 */
// tslint:disable-next-line:no-any
function getComponent(elem, comp) {
    var instance;
    var i;
    var ele = typeof elem === 'string' ? document.getElementById(elem) : elem;
    for (i = 0; i < ele.ej2_instances.length; i++) {
        instance = ele.ej2_instances[i];
        if (typeof comp === 'string') {
            var compName = instance.getModuleName();
            if (comp === compName) {
                return instance;
            }
        }
        else {
            // tslint:disable-next-line:no-any
            if (instance instanceof comp) {
                return instance;
            }
        }
    }
    return undefined;
}
/**
 * Function to remove the child instances.
 *
 * @param {HTMLElement} element ?
 * @return {void}
 * @private
 */
// tslint:disable-next-line:no-any
function removeChildInstance(element) {
    // tslint:disable-next-line:no-any
    var childEle = [].slice.call(element.getElementsByClassName('e-control'));
    for (var i = 0; i < childEle.length; i++) {
        var compName = childEle[i].classList[1].split('e-')[1];
        // tslint:disable-next-line:no-any
        var compInstance = getComponent(childEle[i], compName);
        if (!isUndefined(compInstance)) {
            compInstance.destroy();
        }
    }
}

/**
 * Returns the Class Object
 *
 * @param {ClassObject} instance - instance of ClassObject
 * @param {string} curKey - key of the current instance
 * @param {Object} defaultValue - default Value
 * @param {Object[]} type ?
 * @returns {ClassObject} ?
 */
// eslint-disable-next-line
function getObject(instance, curKey, defaultValue, type) {
    // eslint-disable-next-line
    if (!instance.properties.hasOwnProperty(curKey) || !(instance.properties[curKey] instanceof type)) {
        instance.properties[curKey] = createInstance(type, [instance, curKey, defaultValue]);
    }
    return instance.properties[curKey];
}
/**
 * Returns object array
 *
 * @param {ClassObject} instance ?
 * @param {string} curKey ?
 * @param {Object[]} defaultValue ?
 * @param {Object} type ?
 * @param {boolean} isSetter ?
 * @param {boolean} isFactory ?
 * @returns {Object[]} ?
 */
// eslint-disable-next-line
function getObjectArray(instance, curKey, defaultValue, type, isSetter, isFactory) {
    var result = [];
    var len = defaultValue ? defaultValue.length : 0;
    for (var i = 0; i < len; i++) {
        var curType = type;
        if (isFactory) {
            curType = type(defaultValue[i], instance);
        }
        if (isSetter) {
            var inst = createInstance(curType, [instance, curKey, {}, true]);
            inst.setProperties(defaultValue[i], true);
            result.push(inst);
        }
        else {
            result.push(createInstance(curType, [instance, curKey, defaultValue[i], false]));
        }
    }
    return result;
}
/**
 * Returns the properties of the object
 *
 * @param {Object} defaultValue ?
 * @param {string} curKey ?
 * @returns {void} ?
 */
function propertyGetter(defaultValue, curKey) {
    return function () {
        // eslint-disable-next-line
        if (!this.properties.hasOwnProperty(curKey)) {
            this.properties[curKey] = defaultValue;
        }
        return this.properties[curKey];
    };
}
/**
 * Set the properties for the object
 *
 * @param {Object} defaultValue ?
 * @param {string} curKey ?
 * @returns {void} ?
 */
function propertySetter(defaultValue, curKey) {
    return function (newValue) {
        if (this.properties[curKey] !== newValue) {
            // eslint-disable-next-line
            var oldVal = this.properties.hasOwnProperty(curKey) ? this.properties[curKey] : defaultValue;
            this.saveChanges(curKey, newValue, oldVal);
            this.properties[curKey] = newValue;
        }
    };
}
/**
 * Returns complex objects
 *
 * @param {Object} defaultValue ?
 * @param {string} curKey ?
 * @param {Object[]} type ?
 * @returns {void} ?
 */
// eslint-disable-next-line
function complexGetter(defaultValue, curKey, type) {
    return function () {
        return getObject(this, curKey, defaultValue, type);
    };
}
/**
 * Sets complex objects
 *
 * @param {Object} defaultValue ?
 * @param {string} curKey ?
 * @param {Object[]} type ?
 * @returns {void} ?
 */
function complexSetter(defaultValue, curKey, type) {
    return function (newValue) {
        getObject(this, curKey, defaultValue, type).setProperties(newValue);
    };
}
/**
 *
 * @param {Object} defaultValue ?
 * @param {string} curKey ?
 * @param {FunctionConstructor} type ?
 * @returns {void} ?
 */
// eslint-disable-next-line
function complexFactoryGetter(defaultValue, curKey, type) {
    return function () {
        var curType = type({});
        // eslint-disable-next-line
        if (this.properties.hasOwnProperty(curKey)) {
            return this.properties[curKey];
        }
        else {
            return getObject(this, curKey, defaultValue, curType);
        }
    };
}
/**
 *
 * @param {Object} defaultValue ?
 * @param {string} curKey ?
 * @param {Object[]} type ?
 * @returns {void} ?
 */
function complexFactorySetter(defaultValue, curKey, type) {
    return function (newValue) {
        var curType = type(newValue, this);
        getObject(this, curKey, defaultValue, curType).setProperties(newValue);
    };
}
/**
 *
 * @param {Object[]} defaultValue ?
 * @param {string} curKey ?
 * @param {Object[]} type ?
 * @returns {void} ?
 */
function complexArrayGetter(defaultValue, curKey, type) {
    return function () {
        var _this = this;
        // eslint-disable-next-line
        if (!this.properties.hasOwnProperty(curKey)) {
            var defCollection = getObjectArray(this, curKey, defaultValue, type, false);
            this.properties[curKey] = defCollection;
        }
        var ignore = ((this.controlParent !== undefined && this.controlParent.ignoreCollectionWatch)
            || this.ignoreCollectionWatch);
        // eslint-disable-next-line
        if (!this.properties[curKey].hasOwnProperty('push') && !ignore) {
            ['push', 'pop'].forEach(function (extendFunc) {
                var descriptor = {
                    value: complexArrayDefinedCallback(extendFunc, curKey, type, _this.properties[curKey]).bind(_this),
                    configurable: true
                };
                Object.defineProperty(_this.properties[curKey], extendFunc, descriptor);
            });
        }
        // eslint-disable-next-line
        if (!this.properties[curKey].hasOwnProperty('isComplexArray')) {
            Object.defineProperty(this.properties[curKey], 'isComplexArray', { value: true });
        }
        return this.properties[curKey];
    };
}
/**
 *
 * @param {Object[]} defaultValue ?
 * @param {string} curKey ?
 * @param {Object[]} type ?
 * @returns {void} ?
 */
function complexArraySetter(defaultValue, curKey, type) {
    return function (newValue) {
        this.isComplexArraySetter = true;
        var oldValueCollection = getObjectArray(this, curKey, defaultValue, type, false);
        var newValCollection = getObjectArray(this, curKey, newValue, type, true);
        this.isComplexArraySetter = false;
        this.saveChanges(curKey, newValCollection, oldValueCollection);
        this.properties[curKey] = newValCollection;
    };
}
/**
 *
 * @param {Object[]} defaultValue ?
 * @param {string} curKey ?
 * @param {Object[]} type ?
 * @returns {void} ?
 */
function complexArrayFactorySetter(defaultValue, curKey, type) {
    return function (newValue) {
        // eslint-disable-next-line
        var oldValueCollection = this.properties.hasOwnProperty(curKey) ? this.properties[curKey] : defaultValue;
        var newValCollection = getObjectArray(this, curKey, newValue, type, true, true);
        this.saveChanges(curKey, newValCollection, oldValueCollection);
        this.properties[curKey] = newValCollection;
    };
}
/**
 *
 * @param {Object[]} defaultValue ?
 * @param {string} curKey ?
 * @param {FunctionConstructor} type ?
 * @returns {void} ?
 */
function complexArrayFactoryGetter(defaultValue, curKey, type) {
    return function () {
        var curType = type({});
        // eslint-disable-next-line
        if (!this.properties.hasOwnProperty(curKey)) {
            var defCollection = getObjectArray(this, curKey, defaultValue, curType, false);
            this.properties[curKey] = defCollection;
        }
        return this.properties[curKey];
    };
}
/**
 *
 * @param {string} dFunc ?
 * @param {string} curKey ?
 * @param {Object} type ?
 * @param {Object} prop ?
 * @returns {Object} ?
 */
function complexArrayDefinedCallback(dFunc, curKey, type, prop) {
    /* tslint:disable no-function-expression */
    return function () {
        var newValue = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newValue[_i] = arguments[_i];
        }
        var keyString = this.propName ? this.getParentKey() + '.' + curKey + '-' : curKey + '-';
        switch (dFunc) {
            case 'push':
                for (var i = 0; i < newValue.length; i++) {
                    Array.prototype[dFunc].apply(prop, [newValue[i]]);
                    var model_1 = getArrayModel(keyString + (prop.length - 1), newValue[i], !this.controlParent, dFunc);
                    this.serverDataBind(model_1, newValue[i], false, dFunc);
                }
                break;
            case 'pop':
                Array.prototype[dFunc].apply(prop);
                // eslint-disable-next-line
                var model = getArrayModel(keyString + prop.length, null, !this.controlParent, dFunc);
                this.serverDataBind(model, { ejsAction: 'pop' }, false, dFunc);
                break;
        }
        return prop;
    };
}
/**
 *
 * @param {string} keyString ?
 * @param {Object} value ?
 * @param {boolean} isControlParent ?
 * @param {string} arrayFunction ?
 * @returns {Object} ?
 */
function getArrayModel(keyString, value, isControlParent, arrayFunction) {
    var modelObject = keyString;
    if (isControlParent) {
        modelObject = {};
        modelObject[keyString] = value;
        if (value && typeof value === 'object') {
            var action = 'ejsAction';
            modelObject[keyString][action] = arrayFunction;
        }
    }
    return modelObject;
}
// eslint-disable-next-line
/**
 * Method used to create property. General syntax below.
 *
 * @param {Object} defaultValue - Specifies the default value of property.
 * @returns {PropertyDecorator} ?
 * ```
 * @Property('TypeScript')
 * propertyName: Type;
 * ```
 * @private
 */
function Property(defaultValue) {
    return function (target, key) {
        var propertyDescriptor = {
            set: propertySetter(defaultValue, key),
            get: propertyGetter(defaultValue, key),
            enumerable: true,
            configurable: true
        };
        //new property creation
        Object.defineProperty(target, key, propertyDescriptor);
        addPropertyCollection(target, key, 'prop', defaultValue);
    };
}
/**
 * Method used to create complex property. General syntax below.
 *
 * @param  {any} defaultValue - Specifies the default value of property.
 * @param  {Function} type - Specifies the class type of complex object.
 * @returns {PropertyDecorator} ?
 * ```
 * @Complex<Type>({},Type)
 * propertyName: Type;
 * ```
 * @private
 */
function Complex(defaultValue, type) {
    return function (target, key) {
        var propertyDescriptor = {
            set: complexSetter(defaultValue, key, type),
            get: complexGetter(defaultValue, key, type),
            enumerable: true,
            configurable: true
        };
        //new property creation
        Object.defineProperty(target, key, propertyDescriptor);
        addPropertyCollection(target, key, 'complexProp', defaultValue, type);
    };
}
/**
 * Method used to create complex Factory property. General syntax below.
 *
 * @param  {Function} type - Specifies the class factory type of complex object.
 * @returns {PropertyDecorator} ?
 * ```
 * @ComplexFactory(defaultType, factoryFunction)
 * propertyName: Type1 | Type2;
 * ```
 * @private
 */
function ComplexFactory(type) {
    return function (target, key) {
        var propertyDescriptor = {
            set: complexFactorySetter({}, key, type),
            get: complexFactoryGetter({}, key, type),
            enumerable: true,
            configurable: true
        };
        //new property creation
        Object.defineProperty(target, key, propertyDescriptor);
        addPropertyCollection(target, key, 'complexProp', {}, type);
    };
}
/**
 * Method used to create complex array property. General syntax below.
 *
 * @param  {any} defaultValue - Specifies the default value of property.
 * @param  {Function} type - Specifies the class type of complex object.
 * @returns {PropertyDecorator} ?
 * ```
 * @Collection([], Type);
 * propertyName: Type;
 * ```
 * @private
 */
function Collection(defaultValue, type) {
    return function (target, key) {
        var propertyDescriptor = {
            set: complexArraySetter(defaultValue, key, type),
            get: complexArrayGetter(defaultValue, key, type),
            enumerable: true,
            configurable: true
        };
        //new property creation
        Object.defineProperty(target, key, propertyDescriptor);
        addPropertyCollection(target, key, 'colProp', defaultValue, type);
    };
}
/**
 * Method used to create complex factory array property. General syntax below.
 *
 * @param  {Function} type - Specifies the class type of complex object.
 * @returns {PropertyCollectionInfo} ?
 * ```
 * @Collection([], Type);
 * propertyName: Type;
 * ```
 * @private
 */
function CollectionFactory(type) {
    return function (target, key) {
        var propertyDescriptor = {
            set: complexArrayFactorySetter([], key, type),
            get: complexArrayFactoryGetter([], key, type),
            enumerable: true,
            configurable: true
        };
        //new property creation
        Object.defineProperty(target, key, propertyDescriptor);
        addPropertyCollection(target, key, 'colProp', {}, type);
    };
}
/**
 * Method used to create event property. General syntax below.
 *
 * @returns {PropertyDecorator} ?
 * ```
 * @Event(()=>{return true;})
 * ```
 * @private
 */
function Event$1() {
    return function (target, key) {
        var eventDescriptor = {
            set: function (newValue) {
                var oldValue = this.properties[key];
                if (oldValue !== newValue) {
                    var finalContext = getParentContext(this, key);
                    if (isUndefined(oldValue) === false) {
                        finalContext.context.removeEventListener(finalContext.prefix, oldValue);
                    }
                    finalContext.context.addEventListener(finalContext.prefix, newValue);
                    this.properties[key] = newValue;
                }
            },
            get: propertyGetter(undefined, key),
            enumerable: true,
            configurable: true
        };
        Object.defineProperty(target, key, eventDescriptor);
        addPropertyCollection(target, key, 'event');
    };
}
/**
 * NotifyPropertyChanges is triggers the call back when the property has been changed.
 *
 * @param {Function} classConstructor ?
 * @returns {void} ?
 * ```
 *  @NotifyPropertyChanges
 * class DemoClass implements INotifyPropertyChanged {
 *
 *     @Property()
 *     property1: string;
 *
 *     dataBind: () => void;
 *
 *     constructor() { }
 *
 *     onPropertyChanged(newProp: any, oldProp: any) {
 *         // Called when property changed
 *     }
 * }
 * ```
 * @private
 */
// eslint-disable-next-line
function NotifyPropertyChanges(classConstructor) {
    /** Need to code */
}
/**
 * Method  used to create the builderObject for the target component.
 *
 * @param {BuildInfo} target ?
 * @param {string} key ?
 * @param {string} propertyType ?
 * @param {Object} defaultValue ?
 * @param {Function} type ?
 * @returns {void} ?
 * @private
 */
function addPropertyCollection(target, key, propertyType, defaultValue, type) {
    if (isUndefined(target.propList)) {
        target.propList = {
            props: [],
            complexProps: [],
            colProps: [],
            events: [],
            propNames: [],
            complexPropNames: [],
            colPropNames: [],
            eventNames: []
        };
    }
    // eslint-disable-next-line
    target.propList[propertyType + 's'].push({
        propertyName: key,
        defaultValue: defaultValue,
        type: type
    });
    // eslint-disable-next-line
    target.propList[propertyType + 'Names'].push(key);
}
/**
 * Returns an object containing the builder properties
 *
 * @param {Function} component ?
 * @returns {Object} ?
 * @private
 */
function getBuilderProperties(component) {
    if (isUndefined(component.prototype.builderObject)) {
        component.prototype.builderObject = {
            properties: {}, propCollections: [], add: function () {
                this.isPropertyArray = true;
                this.propCollections.push(extend({}, this.properties, {}));
            }
        };
        var rex = /complex/;
        for (var _i = 0, _a = Object.keys(component.prototype.propList); _i < _a.length; _i++) {
            var key = _a[_i];
            var _loop_1 = function (prop) {
                if (rex.test(key)) {
                    component.prototype.builderObject[prop.propertyName] = function (value) {
                        var childType = {};
                        merge(childType, getBuilderProperties(prop.type));
                        value(childType);
                        var tempValue;
                        if (!childType.isPropertyArray) {
                            tempValue = extend({}, childType.properties, {});
                        }
                        else {
                            tempValue = childType.propCollections;
                        }
                        this.properties[prop.propertyName] = tempValue;
                        childType.properties = {};
                        childType.propCollections = [];
                        childType.isPropertyArray = false;
                        return this;
                    };
                }
                else {
                    component.prototype.builderObject[prop.propertyName] = function (value) {
                        this.properties[prop.propertyName] = value;
                        return this;
                    };
                }
            };
            for (var _b = 0, _c = component.prototype.propList[key]; _b < _c.length; _b++) {
                var prop = _c[_b];
                _loop_1(prop);
            }
        }
    }
    return component.prototype.builderObject;
}
/**
 * Method used to create builder for the components
 *
 * @param {any} component -specifies the target component for which builder to be created.
 * @returns {Object} ?
 * @private
 */
function CreateBuilder(component) {
    var builderFunction = function (element) {
        this.element = element;
        return this;
    };
    var instanceFunction = function (element) {
        // eslint-disable-next-line
        if (!builderFunction.prototype.hasOwnProperty('create')) {
            builderFunction.prototype = getBuilderProperties(component);
            builderFunction.prototype.create = function () {
                var temp = extend({}, {}, this.properties);
                this.properties = {};
                return new component(temp, this.element);
            };
        }
        return new builderFunction(element);
    };
    return instanceFunction;
}
/**
 * Returns parent options for the object
 *
 * @param {Object} context ?
 * @param {string} prefix ?
 * @returns {ParentOption} ?
 * @private
 */
function getParentContext(context, prefix) {
    // eslint-disable-next-line
    if (context.hasOwnProperty('parentObj') === false) {
        return { context: context, prefix: prefix };
    }
    else {
        var curText = getValue('propName', context);
        if (curText) {
            prefix = curText + '-' + prefix;
        }
        return getParentContext(getValue('parentObj', context), prefix);
    }
}

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
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
/**
 * The Animation framework provide options to animate the html DOM elements
 * ```typescript
 *   let animeObject = new Animation({
 *      name: 'SlideLeftIn',
 *      duration: 1000
 *   });
 *   animeObject.animate('#anime1');
 *   animeObject.animate('#anime2', { duration: 500 });
 * ```
 */
var Animation = /** @class */ (function (_super) {
    __extends(Animation, _super);
    function Animation(options) {
        var _this = _super.call(this, options, undefined) || this;
        /**
         * @private
         */
        _this.easing = {
            ease: 'cubic-bezier(0.250, 0.100, 0.250, 1.000)',
            linear: 'cubic-bezier(0.250, 0.250, 0.750, 0.750)',
            easeIn: 'cubic-bezier(0.420, 0.000, 1.000, 1.000)',
            easeOut: 'cubic-bezier(0.000, 0.000, 0.580, 1.000)',
            easeInOut: 'cubic-bezier(0.420, 0.000, 0.580, 1.000)',
            elasticInOut: 'cubic-bezier(0.5,-0.58,0.38,1.81)',
            elasticIn: 'cubic-bezier(0.17,0.67,0.59,1.81)',
            elasticOut: 'cubic-bezier(0.7,-0.75,0.99,1.01)'
        };
        return _this;
    }
    Animation_1 = Animation;
    /**
     * Applies animation to the current element.
     *
     * @param {string | HTMLElement} element - Element which needs to be animated.
     * @param {AnimationModel} options - Overriding default animation settings.
     * @returns {void} ?
     */
    Animation.prototype.animate = function (element, options) {
        options = !options ? {} : options;
        var model = this.getModel(options);
        if (typeof element === 'string') {
            var elements = Array.prototype.slice.call(selectAll(element, document));
            for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
                var element_1 = elements_1[_i];
                model.element = element_1;
                Animation_1.delayAnimation(model);
            }
        }
        else {
            model.element = element;
            Animation_1.delayAnimation(model);
        }
    };
    /**
     * Stop the animation effect on animated element.
     *
     * @param {HTMLElement} element - Element which needs to be stop the animation.
     * @param {AnimationOptions} model - Handling the animation model at stop function.
     * @return {void}
     */
    Animation.stop = function (element, model) {
        element.style.animation = '';
        element.removeAttribute('e-animate');
        var animationId = element.getAttribute('e-animation-id');
        if (animationId) {
            var frameId = parseInt(animationId, 10);
            cancelAnimationFrame(frameId);
            element.removeAttribute('e-animation-id');
        }
        if (model && model.end) {
            model.end.call(this, model);
        }
    };
    /**
     * Set delay to animation element
     *
     * @param {AnimationModel} model ?
     * @returns {void}
     */
    Animation.delayAnimation = function (model) {
        if (model.delay) {
            setTimeout(function () { Animation_1.applyAnimation(model); }, model.delay);
        }
        else {
            Animation_1.applyAnimation(model);
        }
    };
    /**
     * Triggers animation
     *
     * @param {AnimationModel} model ?
     * @returns {void}
     */
    Animation.applyAnimation = function (model) {
        var _this = this;
        model.timeStamp = 0;
        var step = 0;
        var timerId = 0;
        var prevTimeStamp = 0;
        var duration = model.duration;
        model.element.setAttribute('e-animate', 'true');
        var startAnimation = function (timeStamp) {
            try {
                if (timeStamp) {
                    // let step: number = model.timeStamp = timeStamp - startTime;
                    /** phantomjs workaround for timestamp fix */
                    prevTimeStamp = prevTimeStamp === 0 ? timeStamp : prevTimeStamp;
                    model.timeStamp = (timeStamp + model.timeStamp) - prevTimeStamp;
                    prevTimeStamp = timeStamp;
                    /** phantomjs workaround end */
                    // trigger animation begin event
                    if (!step && model.begin) {
                        model.begin.call(_this, model);
                    }
                    step = step + 1;
                    var avg = model.timeStamp / step;
                    if (model.timeStamp < duration && model.timeStamp + avg < duration && model.element.getAttribute('e-animate')) {
                        // apply animation effect to the current element
                        model.element.style.animation = model.name + ' ' + model.duration + 'ms ' + model.timingFunction;
                        if (model.progress) {
                            model.progress.call(_this, model);
                        }
                        // repeat requestAnimationFrame
                        requestAnimationFrame(startAnimation);
                    }
                    else {
                        // clear requestAnimationFrame
                        cancelAnimationFrame(timerId);
                        model.element.removeAttribute('e-animation-id');
                        model.element.removeAttribute('e-animate');
                        model.element.style.animation = '';
                        if (model.end) {
                            model.end.call(_this, model);
                        }
                    }
                }
                else {
                    //startTime = performance.now();
                    // set initial requestAnimationFrame
                    timerId = requestAnimationFrame(startAnimation);
                    model.element.setAttribute('e-animation-id', timerId.toString());
                }
            }
            catch (e) {
                cancelAnimationFrame(timerId);
                model.element.removeAttribute('e-animation-id');
                if (model.fail) {
                    model.fail.call(_this, e);
                }
            }
        };
        startAnimation();
    };
    /**
     * Returns Animation Model
     *
     * @param {AnimationModel} options ?
     * @returns {AnimationModel} ?
     */
    Animation.prototype.getModel = function (options) {
        return {
            name: options.name || this.name,
            delay: options.delay || this.delay,
            duration: (options.duration !== undefined ? options.duration : this.duration),
            begin: options.begin || this.begin,
            end: options.end || this.end,
            fail: options.fail || this.fail,
            progress: options.progress || this.progress,
            timingFunction: this.easing[options.timingFunction] ? this.easing[options.timingFunction] :
                (options.timingFunction || this.easing[this.timingFunction])
        };
    };
    /**
     * @private
     * @param {AnimationModel} newProp ?
     * @param {AnimationModel} oldProp ?
     * @returns {void} ?
     */
    // eslint-disable-next-line
    Animation.prototype.onPropertyChanged = function (newProp, oldProp) {
        // no code needed
    };
    /**
     * Returns module name as animation
     *
     * @private
     * @returns {void} ?
     */
    Animation.prototype.getModuleName = function () {
        return 'animation';
    };
    /**
     *
     * @private
     * @returns {void} ?
     */
    Animation.prototype.destroy = function () {
        //Override base destroy;
    };
    var Animation_1;
    __decorate([
        Property('FadeIn')
    ], Animation.prototype, "name", void 0);
    __decorate([
        Property(400)
    ], Animation.prototype, "duration", void 0);
    __decorate([
        Property('ease')
    ], Animation.prototype, "timingFunction", void 0);
    __decorate([
        Property(0)
    ], Animation.prototype, "delay", void 0);
    __decorate([
        Event$1()
    ], Animation.prototype, "progress", void 0);
    __decorate([
        Event$1()
    ], Animation.prototype, "begin", void 0);
    __decorate([
        Event$1()
    ], Animation.prototype, "end", void 0);
    __decorate([
        Event$1()
    ], Animation.prototype, "fail", void 0);
    Animation = Animation_1 = __decorate([
        NotifyPropertyChanges
    ], Animation);
    return Animation;
}(Base));
/**
 * Ripple provides material theme's wave effect when an element is clicked
 * ```html
 * <div id='ripple'></div>
 * <script>
 *   rippleEffect(document.getElementById('ripple'));
 * </script>
 * ```
 *
 * @private
 * @param {HTMLElement} element - Target element
 * @param {RippleOptions} rippleOptions - Ripple options .
 * @param {Function} done .
 * @returns {void} .
 */
function rippleEffect(element, rippleOptions, done) {
    var rippleModel = getRippleModel(rippleOptions);
    if (rippleModel.rippleFlag === false || (rippleModel.rippleFlag === undefined && !exports.isRippleEnabled)) {
        return (function () { });
    }
    element.setAttribute('data-ripple', 'true');
    EventHandler.add(element, 'mousedown', rippleHandler, { parent: element, rippleOptions: rippleModel });
    EventHandler.add(element, 'mouseup', rippleUpHandler, { parent: element, rippleOptions: rippleModel, done: done });
    EventHandler.add(element, 'mouseleave', rippleLeaveHandler, { parent: element, rippleOptions: rippleModel });
    if (Browser.isPointer) {
        EventHandler.add(element, 'transitionend', rippleLeaveHandler, { parent: element, rippleOptions: rippleModel });
    }
    return (function () {
        element.removeAttribute('data-ripple');
        EventHandler.remove(element, 'mousedown', rippleHandler);
        EventHandler.remove(element, 'mouseup', rippleUpHandler);
        EventHandler.remove(element, 'mouseleave', rippleLeaveHandler);
        EventHandler.remove(element, 'transitionend', rippleLeaveHandler);
    });
}
/**
 * Handler for ripple model
 *
 * @param {RippleOptions} rippleOptions ?
 * @returns {RippleOptions} ?
 */
function getRippleModel(rippleOptions) {
    var rippleModel = {
        selector: rippleOptions && rippleOptions.selector ? rippleOptions.selector : null,
        ignore: rippleOptions && rippleOptions.ignore ? rippleOptions.ignore : null,
        rippleFlag: rippleOptions && rippleOptions.rippleFlag,
        isCenterRipple: rippleOptions && rippleOptions.isCenterRipple,
        duration: rippleOptions && rippleOptions.duration ? rippleOptions.duration : 350
    };
    return rippleModel;
}
/**
 * Handler for ripple event
 *
 * @param {MouseEvent} e ?
 * @returns {void} ?
 * @private
 */
function rippleHandler(e) {
    var target = (e.target);
    var selector = this.rippleOptions.selector;
    var element = selector ? closest(target, selector) : target;
    if (!element || (this.rippleOptions && closest(target, this.rippleOptions.ignore))) {
        return;
    }
    var offset = element.getBoundingClientRect();
    var offsetX = e.pageX - document.body.scrollLeft;
    var offsetY = e.pageY - ((!document.body.scrollTop && document.documentElement) ?
        document.documentElement.scrollTop : document.body.scrollTop);
    var pageX = Math.max(Math.abs(offsetX - offset.left), Math.abs(offsetX - offset.right));
    var pageY = Math.max(Math.abs(offsetY - offset.top), Math.abs(offsetY - offset.bottom));
    var radius = Math.sqrt(pageX * pageX + pageY * pageY);
    var diameter = radius * 2 + 'px';
    var x = offsetX - offset.left - radius;
    var y = offsetY - offset.top - radius;
    if (this.rippleOptions && this.rippleOptions.isCenterRipple) {
        x = 0;
        y = 0;
        diameter = '100%';
    }
    element.classList.add('e-ripple');
    var duration = this.rippleOptions.duration.toString();
    var styles = 'width: ' + diameter + ';height: ' + diameter + ';left: ' + x + 'px;top: ' + y + 'px;' +
        'transition-duration: ' + duration + 'ms;';
    var rippleElement = createElement('div', { className: 'e-ripple-element', styles: styles });
    element.appendChild(rippleElement);
    window.getComputedStyle(rippleElement).getPropertyValue('opacity');
    rippleElement.style.transform = 'scale(1)';
    if (element !== this.parent) {
        EventHandler.add(element, 'mouseleave', rippleLeaveHandler, { parent: this.parent, rippleOptions: this.rippleOptions });
    }
}
/**
 * Handler for ripple element mouse up event
 *
 * @param {MouseEvent} e ?
 * @returns {void} ?
 * @private
 */
function rippleUpHandler(e) {
    removeRipple(e, this);
}
/**
 * Handler for ripple element mouse move event
 *
 * @param {MouseEvent} e ?
 * @returns {void} ?
 * @private
 */
function rippleLeaveHandler(e) {
    removeRipple(e, this);
}
/**
 * Handler for removing ripple element
 *
 * @param {MouseEvent} e ?
 * @param {RippleArgs} eventArgs ?
 * @returns {void} ?
 * @private
 */
function removeRipple(e, eventArgs) {
    var duration = eventArgs.rippleOptions.duration;
    var target = (e.target);
    var selector = eventArgs.rippleOptions.selector;
    var element = selector ? closest(target, selector) : target;
    if (!element || (element && element.className.indexOf('e-ripple') === -1)) {
        return;
    }
    var rippleElements = selectAll('.e-ripple-element', element);
    var rippleElement = rippleElements[rippleElements.length - 1];
    if (rippleElement) {
        rippleElement.style.opacity = '0.5';
    }
    if (eventArgs.parent !== element) {
        EventHandler.remove(element, 'mouseleave', rippleLeaveHandler);
    }
    /* tslint:disable:align */
    setTimeout(function () {
        if (rippleElement && rippleElement.parentNode) {
            rippleElement.parentNode.removeChild(rippleElement);
        }
        if (!element.getElementsByClassName('e-ripple-element').length) {
            element.classList.remove('e-ripple');
        }
        if (eventArgs.done) {
            eventArgs.done(e);
        }
    }, duration);
}
exports.isRippleEnabled = false;
/**
 * Animation Module provides support to enable ripple effect functionality to Essential JS 2 components.
 *
 * @param {boolean} isRipple Specifies the boolean value to enable or disable ripple effect.
 * @returns {boolean} ?
 */
function enableRipple(isRipple) {
    exports.isRippleEnabled = isRipple;
    return exports.isRippleEnabled;
}

/**
 * Module loading operations
 */
var MODULE_SUFFIX = 'Module';
var ModuleLoader = /** @class */ (function () {
    function ModuleLoader(parent) {
        this.loadedModules = [];
        this.parent = parent;
    }
    /**
     * Inject required modules in component library
     *
     * @returns {void} ?
     * @param {ModuleDeclaration[]} requiredModules - Array of modules to be required
     * @param {Function[]} moduleList - Array of modules to be injected from sample side
     */
    ModuleLoader.prototype.inject = function (requiredModules, moduleList) {
        var reqLength = requiredModules.length;
        if (reqLength === 0) {
            this.clean();
            return;
        }
        if (this.loadedModules.length) {
            this.clearUnusedModule(requiredModules);
        }
        for (var i = 0; i < reqLength; i++) {
            var modl = requiredModules[i];
            for (var _i = 0, moduleList_1 = moduleList; _i < moduleList_1.length; _i++) {
                var module = moduleList_1[_i];
                var modName = modl.member;
                if (module.prototype.getModuleName() === modl.member && !this.isModuleLoaded(modName)) {
                    var moduleObject = createInstance(module, modl.args);
                    var memberName = this.getMemberName(modName);
                    if (modl.isProperty) {
                        setValue(memberName, module, this.parent);
                    }
                    else {
                        setValue(memberName, moduleObject, this.parent);
                    }
                    var loadedModule = modl;
                    loadedModule.member = memberName;
                    this.loadedModules.push(loadedModule);
                }
            }
        }
    };
    /**
     * To remove the created object while destroying the control
     *
     * @returns {void}
     */
    ModuleLoader.prototype.clean = function () {
        for (var _i = 0, _a = this.loadedModules; _i < _a.length; _i++) {
            var modules = _a[_i];
            if (!modules.isProperty) {
                getValue(modules.member, this.parent).destroy();
            }
        }
        this.loadedModules = [];
    };
    /**
     * Removes all unused modules
     *
     * @param {ModuleDeclaration[]} moduleList ?
     * @returns {void} ?
     */
    ModuleLoader.prototype.clearUnusedModule = function (moduleList) {
        var _this = this;
        var usedModules = moduleList.map(function (arg) { return _this.getMemberName(arg.member); });
        var removableModule = this.loadedModules.filter(function (module) {
            return usedModules.indexOf(module.member) === -1;
        });
        for (var _i = 0, removableModule_1 = removableModule; _i < removableModule_1.length; _i++) {
            var mod = removableModule_1[_i];
            if (!mod.isProperty) {
                getValue(mod.member, this.parent).destroy();
            }
            this.loadedModules.splice(this.loadedModules.indexOf(mod), 1);
            deleteObject(this.parent, mod.member);
        }
    };
    /**
     * To get the name of the member.
     *
     * @param {string} name ?
     * @returns {string} ?
     */
    ModuleLoader.prototype.getMemberName = function (name) {
        return name[0].toLowerCase() + name.substring(1) + MODULE_SUFFIX;
    };
    /**
     * Returns boolean based on whether the module specified is loaded or not
     *
     * @param {string} modName ?
     * @returns {boolean} ?
     */
    ModuleLoader.prototype.isModuleLoaded = function (modName) {
        for (var _i = 0, _a = this.loadedModules; _i < _a.length; _i++) {
            var mod = _a[_i];
            if (mod.member === this.getMemberName(modName)) {
                return true;
            }
        }
        return false;
    };
    return ModuleLoader;
}());

/**
 * To detect the changes for inner properties.
 *
 * @private
 */
var ChildProperty = /** @class */ (function () {
    function ChildProperty(parent, propName, defaultValue, isArray) {
        this.isComplexArraySetter = false;
        this.properties = {};
        this.changedProperties = {};
        this.childChangedProperties = {};
        this.oldProperties = {};
        // eslint-disable-next-line
        this.finalUpdate = function () { };
        this.callChildDataBind = getValue('callChildDataBind', Base);
        this.parentObj = parent;
        this.controlParent = this.parentObj.controlParent || this.parentObj;
        this.propName = propName;
        this.isParentArray = isArray;
        this.setProperties(defaultValue, true);
    }
    /**
     * Updates the property changes
     *
     * @param {boolean} val ?
     * @param {string} propName ?
     * @returns {void} ?
     */
    ChildProperty.prototype.updateChange = function (val, propName) {
        if (val === true) {
            this.parentObj.childChangedProperties[propName] = val;
        }
        else {
            delete this.parentObj.childChangedProperties[propName];
        }
        if (this.parentObj.updateChange) {
            this.parentObj.updateChange(val, this.parentObj.propName);
        }
    };
    /**
     * Updates time out duration
     *
     * @returns {void} ?
     */
    ChildProperty.prototype.updateTimeOut = function () {
        if (this.parentObj.updateTimeOut) {
            this.parentObj.finalUpdate();
            this.parentObj.updateTimeOut();
        }
        else {
            var changeTime_1 = setTimeout(this.parentObj.dataBind.bind(this.parentObj));
            var clearUpdate = function () {
                clearTimeout(changeTime_1);
            };
            this.finalUpdate = clearUpdate;
        }
    };
    /**
     * Clears changed properties
     *
     * @returns {void} ?
     */
    ChildProperty.prototype.clearChanges = function () {
        this.finalUpdate();
        this.updateChange(false, this.propName);
        this.oldProperties = {};
        this.changedProperties = {};
    };
    /**
     * Set property changes
     *
     * @param {Object} prop ?
     * @param {boolean} muteOnChange ?
     * @returns {void} ?
     */
    ChildProperty.prototype.setProperties = function (prop, muteOnChange) {
        if (muteOnChange === true) {
            merge(this, prop);
            this.updateChange(false, this.propName);
            this.clearChanges();
        }
        else {
            merge(this, prop);
        }
    };
    /**
     * Binds data
     *
     * @returns {void} ?
     */
    ChildProperty.prototype.dataBind = function () {
        this.callChildDataBind(this.childChangedProperties, this);
        if (this.isParentArray) {
            var curIndex = this.parentObj[this.propName].indexOf(this);
            if (Object.keys(this.changedProperties).length) {
                setValue(this.propName + '.' + curIndex, this.changedProperties, this.parentObj.changedProperties);
                setValue(this.propName + '.' + curIndex, this.oldProperties, this.parentObj.oldProperties);
            }
        }
        else {
            this.parentObj.changedProperties[this.propName] = this.changedProperties;
            this.parentObj.oldProperties[this.propName] = this.oldProperties;
        }
        this.clearChanges();
    };
    /**
     * Saves changes to newer values
     *
     * @param {string} key ?
     * @param {Object} newValue ?
     * @param {Object} oldValue ?
     * @param {boolean} restrictServerDataBind ?
     * @returns {void} ?
     */
    ChildProperty.prototype.saveChanges = function (key, newValue, oldValue, restrictServerDataBind) {
        if (this.controlParent.isProtectedOnChange) {
            return;
        }
        if (!restrictServerDataBind) {
            this.serverDataBind(key, newValue, true);
        }
        this.oldProperties[key] = oldValue;
        this.changedProperties[key] = newValue;
        this.updateChange(true, this.propName);
        this.finalUpdate();
        this.updateTimeOut();
    };
    ChildProperty.prototype.serverDataBind = function (key, value, isSaveChanges, action) {
        if (isBlazor() && !this.parentObj.isComplexArraySetter) {
            var parent_1;
            var newChanges = {};
            var parentKey = isSaveChanges ? this.getParentKey(true) + '.' + key : key;
            /* istanbul ignore else  */
            if (parentKey.indexOf('.') !== -1) {
                var complexKeys = parentKey.split('.');
                parent_1 = newChanges;
                for (var i = 0; i < complexKeys.length; i++) {
                    var isFinal = i === complexKeys.length - 1;
                    parent_1[complexKeys[i]] = isFinal ? value : {};
                    parent_1 = isFinal ? parent_1 : parent_1[complexKeys[i]];
                }
            }
            else {
                newChanges[parentKey] = {};
                parent_1 = newChanges[parentKey];
                newChanges[parentKey][key] = value;
            }
            /* istanbul ignore next */
            if (this.isParentArray) {
                var actionProperty = 'ejsAction';
                parent_1[actionProperty] = action ? action : 'none';
            }
            this.controlParent.serverDataBind(newChanges);
        }
    };
    ChildProperty.prototype.getParentKey = function (isSaveChanges) {
        // eslint-disable-next-line
        var index = '';
        var propName = this.propName;
        /* istanbul ignore next */
        if (this.isParentArray) {
            index = this.parentObj[this.propName].indexOf(this);
            var valueLength = this.parentObj[this.propName].length;
            valueLength = isSaveChanges ? valueLength : (valueLength > 0 ? valueLength - 1 : 0);
            index = index !== -1 ? '-' + index : '-' + valueLength;
            propName = propName + index;
        }
        if (this.controlParent !== this.parentObj) {
            propName = this.parentObj.getParentKey() + '.' + this.propName + index;
        }
        return propName;
    };
    return ChildProperty;
}());

var bypassKey = [115, 121, 110, 99, 102, 117, 115, 105,
    111, 110, 46, 105, 115, 76, 105, 99, 86, 97, 108,
    105, 100, 97, 116, 101, 100];
/**
 * License validation module
 * @private
 */
var LicenseValidator = /** @class */ (function () {
    function LicenseValidator(key) {
        this.isValidated = false;
        this.version = '20.1';
        this.platform = /JavaScript|ASPNET|ASPNETCORE|ASPNETMVC|FileFormats/i;
        this.errors = {
            noLicense: 'This application was built using a trial version of Syncfusion Essential Studio.' +
                ' Please include a valid license to permanently remove this license validation message.' +
                ' You can also obtain a free 30 day evaluation license to temporarily remove this message ' +
                'during the evaluation period. Please refer to this <a style="color:yellow;text-decoration:none;"' +
                'href="https://help.syncfusion.com/common/essential-studio/licensing">help topic</a> for more information.',
            trailExpired: 'Your Syncfusion trial license has expired. Please refer to this ' +
                '<a style="color:yellow;text-decoration:none;"' +
                'href="https://help.syncfusion.com/common/essential-studio/licensing/licensing-errors#trial-expired">help topic</a> for more information.',
            versionMismatched: 'The included Syncfusion license (v##LicenseVersion) is invalid for version ' +
                '##Requireversion. Please refer to this <a style="color:yellow;text-decoration:none;" ' +
                'href="https://help.syncfusion.com/es/licensing/version-mismatch/">help topic</a> for more information.',
            platformMismatched: 'The included Syncfusion license is invalid (Platform mismatch). Please refer' +
                ' to this <a style="color:yellow;text-decoration:none;" ' +
                'href="https://help.syncfusion.com/common/essential-studio/licensing/licensing-errors#platform-mismatch">help topic</a> for more information.',
            invalidKey: 'The included Syncfusion license is invalid. Please refer to this ' +
                '<a style="color:yellow;text-decoration:none;" ' +
                'href="https://help.syncfusion.com/common/essential-studio/licensing/licensing-errors#invalid-key">help topic</a> for more information.'
        };
        /**
         * To manage licensing operation.
         */
        this.manager = (function () {
            var licKey = null;
            function set(key) { licKey = key; }
            function get() { return licKey; }
            return {
                setKey: set,
                getKey: get
            };
        })();
        this.manager.setKey(key);
    }
    /**
     * To validate the provided license key.
     */
    LicenseValidator.prototype.validate = function () {
        if (!this.isValidated && (containerObject && !getValue(convertToChar(bypassKey), containerObject) && !getValue('Blazor', containerObject))) {
            var validateMsg = void 0;
            if (this.manager && this.manager.getKey()) {
                var result = this.getInfoFromKey();
                if (result && result.length) {
                    for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
                        var res = result_1[_i];
                        if (!this.platform.test(res.platform) || res.invalidPlatform) {
                            validateMsg = this.errors.platformMismatched;
                        }
                        else if (res.version.indexOf(this.version) === -1) {
                            validateMsg = this.errors.versionMismatched;
                            validateMsg = validateMsg.replace('##LicenseVersion', res.version);
                            validateMsg = validateMsg.replace('##Requireversion', this.version + '.x');
                        }
                        else if (res.expiryDate) {
                            var expDate = new Date(res.expiryDate);
                            var currDate = new Date();
                            if (expDate !== currDate && expDate < currDate) {
                                validateMsg = this.errors.trailExpired;
                            }
                            else {
                                break;
                            }
                        }
                    }
                }
                else {
                    validateMsg = this.errors.invalidKey;
                }
            }
            else {
                validateMsg = this.errors.noLicense;
            }
            if (validateMsg && typeof document !== "undefined" && !isNullOrUndefined(document)) {
                var errorDiv = createElement('div', {
                    innerHTML: validateMsg +
                        '<span style="position:absolute;right: 10px;top:27%;cursor:pointer;"' +
                        'onClick=this.parentElement.remove();>' +
                        '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">' +
                        '<line x1="5" y1="5" x2="15" y2="15" stroke="yellow" stroke-width="2.5" ' +
                        'stroke-miterlimit="10" stroke-linecap="round"></line><line x1="15" y1="5" ' +
                        'x2="5" y2="15" stroke="yellow" stroke-width="2.5" stroke-linecap="round" ' +
                        'stroke-miterlimit="10"></line></svg></span>',
                    styles: 'position:fixed;top:0;left:0;right:0;font-family:"Segoe UI";font-size:16px;' +
                        'background:repeating-linear-gradient(45deg,#d70f0f,#d70f0f 10px,#e12121 10px,#e12121 17px);' +
                        'color:#ffffff;z-index:999999999;text-align:center;padding:10px 50px 10px 25px;'
                });
                errorDiv.setAttribute('id', 'js-licensing');
                document.body.appendChild(errorDiv);
            }
            this.isValidated = true;
            setValue(convertToChar(bypassKey), this.isValidated, containerObject);
        }
    };
    LicenseValidator.prototype.getDecryptedData = function (key) {
        try {
            return atob(key);
        }
        catch (error) {
            return '';
        }
    };
    /**
     * Get license information from key.
     */
    LicenseValidator.prototype.getInfoFromKey = function () {
        try {
            var licKey = this.manager.getKey();
            var licKeySplit = licKey.split(';');
            var pkey = [5439488, 7929856, 5111808, 6488064, 4587520, 7667712, 5439488,
                6881280, 5177344, 7208960, 4194304, 4456448, 6619136, 7733248, 5242880, 7077888,
                6356992, 7602176, 4587520, 7274496, 7471104, 7143424];
            var decryptedStr = [];
            var resultArray = [];
            var invalidPlatform = false;
            for (var _i = 0, licKeySplit_1 = licKeySplit; _i < licKeySplit_1.length; _i++) {
                var lKey = licKeySplit_1[_i];
                var decodeStr = this.getDecryptedData(lKey);
                if (!decodeStr) {
                    continue;
                }
                var k = 0;
                var buffr = '';
                for (var i = 0; i < decodeStr.length; i++, k++) {
                    if (k === pkey.length) {
                        k = 0;
                    }
                    var c = decodeStr.charCodeAt(i);
                    buffr += String.fromCharCode(c ^ (pkey[k] >> 16));
                }
                if (this.platform.test(buffr)) {
                    decryptedStr = buffr.split(';');
                    invalidPlatform = false;
                    // checked the length to verify the key in proper strucutre
                    if (decryptedStr.length > 3) {
                        resultArray.push({ platform: decryptedStr[0],
                            version: decryptedStr[1],
                            expiryDate: decryptedStr[2] });
                    }
                }
                else if (buffr && buffr.split(';').length > 3) {
                    invalidPlatform = true;
                }
            }
            if (invalidPlatform && !resultArray.length) {
                return [{ invalidPlatform: invalidPlatform }];
            }
            else {
                return resultArray.length ? resultArray : null;
            }
        }
        catch (error) {
            return null;
        }
    };
    return LicenseValidator;
}());
var licenseValidator = new LicenseValidator();
function convertToChar(cArr) {
    var ret = '';
    for (var _i = 0, cArr_1 = cArr; _i < cArr_1.length; _i++) {
        var arr = cArr_1[_i];
        ret += String.fromCharCode(arr);
    }
    return ret;
}
/**
 * To set license key.
 * @param {string} key - license key
 */
function registerLicense(key) {
    licenseValidator = new LicenseValidator(key);
}
var validateLicense = function (key) {
    if (key) {
        registerLicense(key);
    }
    licenseValidator.validate();
};
var getVersion = function () {
    return licenseValidator.version;
};

var __extends$1 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var componentCount = 0;
var lastPageID;
var lastHistoryLen = 0;
exports.versionBasedStatePersistence = false;
/**
 * To enable or disable version based statePersistence functionality for all components globally.
 *
 * @param {boolean} status - Optional argument Specifies the status value to enable or disable versionBasedStatePersistence option.
 * @returns {void}
 */
function enableVersionBasedPersistence(status) {
    exports.versionBasedStatePersistence = status;
}
/**
 * Base class for all Essential JavaScript components
 */
var Component = /** @class */ (function (_super) {
    __extends$1(Component, _super);
    /**
     * Initialize the constructor for component base
     *
     * @param {Object} options ?
     * @param {string} selector ?
     */
    function Component(options, selector) {
        var _this = _super.call(this, options, selector) || this;
        _this.randomId = uniqueID();
        /**
         * string template option for Blazor template rendering
         *
         * @private
         */
        _this.isStringTemplate = false;
        _this.needsID = false;
        _this.isReactHybrid = false;
        if (isNullOrUndefined(_this.enableRtl)) {
            _this.setProperties({ 'enableRtl': exports.rightToLeft }, true);
        }
        if (isNullOrUndefined(_this.locale)) {
            _this.setProperties({ 'locale': exports.defaultCulture }, true);
        }
        _this.moduleLoader = new ModuleLoader(_this);
        _this.localObserver = new Observer(_this);
        // tslint:disable-next-line:no-function-constructor-with-string-args
        onIntlChange.on('notifyExternalChange', _this.detectFunction, _this, _this.randomId);
        if (typeof window !== "undefined" && typeof document !== "undefined") {
            validateLicense();
        }
        if (!isUndefined(selector)) {
            _this.appendTo();
        }
        return _this;
    }
    Component.prototype.requiredModules = function () {
        return [];
    };
    /**
     * Destroys the sub modules while destroying the widget
     *
     * @returns {void} ?
     */
    Component.prototype.destroy = function () {
        if (this.isDestroyed) {
            return;
        }
        if (this.enablePersistence) {
            this.setPersistData();
        }
        this.localObserver.destroy();
        if (this.refreshing) {
            return;
        }
        removeClass([this.element], ['e-control']);
        this.trigger('destroyed', { cancel: false });
        _super.prototype.destroy.call(this);
        this.moduleLoader.clean();
        onIntlChange.off('notifyExternalChange', this.detectFunction, this.randomId);
    };
    /**
     * Applies all the pending property changes and render the component again.
     *
     * @returns {void} ?
     */
    Component.prototype.refresh = function () {
        this.refreshing = true;
        this.moduleLoader.clean();
        this.destroy();
        this.clearChanges();
        this.localObserver = new Observer(this);
        this.preRender();
        this.injectModules();
        this.render();
        this.refreshing = false;
    };
    Component.prototype.accessMount = function () {
        if (this.mount && !this.isReactHybrid) {
            this.mount();
        }
    };
    /**
     * Returns the route element of the component
     *
     * @returns {HTMLElement} ?
     */
    Component.prototype.getRootElement = function () {
        if (this.isReactHybrid) {
            // eslint-disable-next-line
            return this.actualElement;
        }
        else {
            return this.element;
        }
    };
    /**
     * Returns the persistence data for component
     *
     * @returns {any} ?
     */
    // eslint-disable-next-line
    Component.prototype.getLocalData = function () {
        var eleId = this.getModuleName() + this.element.id;
        if (exports.versionBasedStatePersistence) {
            return window.localStorage.getItem(eleId + this.ej2StatePersistenceVersion);
        }
        else {
            return window.localStorage.getItem(eleId);
        }
    };
    /**
     * Appends the control within the given HTML element
     *
     * @param {string | HTMLElement} selector - Target element where control needs to be appended
     * @returns {void} ?
     */
    Component.prototype.appendTo = function (selector) {
        if (!isNullOrUndefined(selector) && typeof (selector) === 'string') {
            this.element = select(selector, document);
        }
        else if (!isNullOrUndefined(selector)) {
            this.element = selector;
        }
        if (!isNullOrUndefined(this.element)) {
            var moduleClass = 'e-' + this.getModuleName().toLowerCase();
            addClass([this.element], ['e-control', moduleClass]);
            this.isProtectedOnChange = false;
            if (this.needsID && !this.element.id) {
                this.element.id = this.getUniqueID(this.getModuleName());
            }
            if (this.enablePersistence) {
                this.mergePersistData();
                window.addEventListener('unload', this.setPersistData.bind(this));
            }
            var inst = getValue('ej2_instances', this.element);
            if (!inst || inst.indexOf(this) === -1) {
                _super.prototype.addInstance.call(this);
            }
            this.preRender();
            this.injectModules();
            this.render();
            if (!this.mount) {
                this.trigger('created');
            }
            else {
                this.accessMount();
            }
        }
    };
    /**
     * It is used to process the post rendering functionalities to a component.
     *
     * @param {Node} wrapperElement ?
     * @returns {void} ?
     */
    Component.prototype.renderComplete = function (wrapperElement) {
        if (isBlazor()) {
            var sfBlazor = 'sfBlazor';
            // eslint-disable-next-line
            window[sfBlazor].renderComplete(this.element, wrapperElement);
        }
        this.isRendered = true;
    };
    /**
     * When invoked, applies the pending property changes immediately to the component.
     *
     * @returns {void} ?
     */
    Component.prototype.dataBind = function () {
        this.injectModules();
        _super.prototype.dataBind.call(this);
    };
    /**
     * Attach one or more  event handler to the current component context.
     * It is used for internal handling event internally within the component only.
     *
     * @param {BoundOptions[]| string} event - It is  optional type either to  Set the collection of event list or the eventName.
     * @param {Function} handler - optional parameter Specifies the handler to run when the event occurs
     * @param {Object} context - optional parameter Specifies the context to be bind in the handler.
     * @returns {void} ?
     * @private
     */
    Component.prototype.on = function (event, handler, context) {
        if (typeof event === 'string') {
            this.localObserver.on(event, handler, context);
        }
        else {
            for (var _i = 0, event_1 = event; _i < event_1.length; _i++) {
                var arg = event_1[_i];
                this.localObserver.on(arg.event, arg.handler, arg.context);
            }
        }
    };
    /**
     * To remove one or more event handler that has been attached with the on() method.
     *
     * @param {BoundOptions[]| string} event - It is  optional type either to  Set the collection of event list or the eventName.
     * @param {Function} handler - optional parameter Specifies the function to run when the event occurs
     * @returns {void} ?
     * @private
     */
    Component.prototype.off = function (event, handler) {
        if (typeof event === 'string') {
            this.localObserver.off(event, handler);
        }
        else {
            for (var _i = 0, event_2 = event; _i < event_2.length; _i++) {
                var arg = event_2[_i];
                this.localObserver.off(arg.event, arg.handler);
            }
        }
    };
    /**
     * To notify the handlers in the specified event.
     *
     * @param {string} property - Specifies the event to be notify.
     * @param {Object} argument - Additional parameters to pass while calling the handler.
     * @returns {void} ?
     * @private
     */
    Component.prototype.notify = function (property, argument) {
        if (this.isDestroyed !== true) {
            this.localObserver.notify(property, argument);
        }
    };
    /**
     * Get injected modules
     *
     * @returns {Function} ?
     * @private
     */
    Component.prototype.getInjectedModules = function () {
        return this.injectedModules;
    };
    /**
     * Dynamically injects the required modules to the component.
     *
     * @param {Function} moduleList ?
     * @returns {void} ?
     */
    Component.Inject = function () {
        var moduleList = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            moduleList[_i] = arguments[_i];
        }
        if (!this.prototype.injectedModules) {
            this.prototype.injectedModules = [];
        }
        for (var i = 0; i < moduleList.length; i++) {
            if (this.prototype.injectedModules.indexOf(moduleList[i]) === -1) {
                this.prototype.injectedModules.push(moduleList[i]);
            }
        }
    };
    /**
     * This is a instance method to create an element.
     *
     * @param {string} tagName ?
     * @param {ElementProperties} prop ?
     * @param {boolean} isVDOM ?
     * @returns {any} ?
     * @private
     */
    // eslint-disable-next-line
    Component.prototype.createElement = function (tagName, prop, isVDOM) {
        return createElement(tagName, prop);
    };
    /**
     *
     * @param {Function} handler - handler to be triggered after state Updated.
     * @param {any} argument - Arguments to be passed to caller.
     * @returns {void} .
     * @private
     */
    // eslint-disable-next-line
    Component.prototype.triggerStateChange = function (handler, argument) {
        if (this.isReactHybrid) {
            // eslint-disable-next-line
            this.setState();
            this.currentContext = { calls: handler, args: argument };
        }
    };
    // tslint: enable: no-any
    Component.prototype.injectModules = function () {
        if (this.injectedModules && this.injectedModules.length) {
            this.moduleLoader.inject(this.requiredModules(), this.injectedModules);
        }
    };
    Component.prototype.detectFunction = function (args) {
        var prop = Object.keys(args);
        if (prop.length) {
            this[prop[0]] = args[prop[0]];
        }
    };
    Component.prototype.mergePersistData = function () {
        var data;
        if (exports.versionBasedStatePersistence) {
            data = window.localStorage.getItem(this.getModuleName() + this.element.id + this.ej2StatePersistenceVersion);
        }
        else {
            data = window.localStorage.getItem(this.getModuleName() + this.element.id);
        }
        if (!(isNullOrUndefined(data) || (data === ''))) {
            this.setProperties(JSON.parse(data), true);
        }
    };
    Component.prototype.setPersistData = function () {
        if (!this.isDestroyed) {
            if (exports.versionBasedStatePersistence) {
                window.localStorage.setItem(this.getModuleName() +
                    this.element.id + this.ej2StatePersistenceVersion, this.getPersistData());
            }
            else {
                window.localStorage.setItem(this.getModuleName() + this.element.id, this.getPersistData());
            }
        }
    };
    //tslint:disable-next-line
    Component.prototype.renderReactTemplates = function () {
        //No Code
    };
    // eslint-disable-next-line
    Component.prototype.clearTemplate = function (templateName, index) {
        //No Code
    };
    Component.prototype.getUniqueID = function (definedName) {
        if (this.isHistoryChanged()) {
            componentCount = 0;
        }
        lastPageID = this.pageID(location.href);
        lastHistoryLen = history.length;
        return definedName + '_' + lastPageID + '_' + componentCount++;
    };
    Component.prototype.pageID = function (url) {
        var hash = 0;
        if (url.length === 0) {
            return hash;
        }
        for (var i = 0; i < url.length; i++) {
            var char = url.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // Convert to 32bit integer
        }
        return Math.abs(hash);
    };
    Component.prototype.isHistoryChanged = function () {
        return lastPageID !== this.pageID(location.href) || lastHistoryLen !== history.length;
    };
    Component.prototype.addOnPersist = function (options) {
        var _this = this;
        var persistObj = {};
        for (var _i = 0, options_1 = options; _i < options_1.length; _i++) {
            var key = options_1[_i];
            var objValue = void 0;
            // eslint-disable-next-line
            objValue = getValue(key, this);
            if (!isUndefined(objValue)) {
                setValue(key, this.getActualProperties(objValue), persistObj);
            }
        }
        return JSON.stringify(persistObj, function (key, value) {
            return _this.getActualProperties(value);
        });
    };
    Component.prototype.getActualProperties = function (obj) {
        if (obj instanceof ChildProperty) {
            return getValue('properties', obj);
        }
        else {
            return obj;
        }
    };
    Component.prototype.ignoreOnPersist = function (options) {
        return JSON.stringify(this.iterateJsonProperties(this.properties, options));
    };
    Component.prototype.iterateJsonProperties = function (obj, ignoreList) {
        var newObj = {};
        var _loop_1 = function (key) {
            if (ignoreList.indexOf(key) === -1) {
                // eslint-disable-next-line
                var value = obj[key];
                if (typeof value === 'object' && !(value instanceof Array)) {
                    var newList = ignoreList.filter(function (str) {
                        return new RegExp(key + '.').test(str);
                    }).map(function (str) {
                        return str.replace(key + '.', '');
                    });
                    newObj[key] = this_1.iterateJsonProperties(this_1.getActualProperties(value), newList);
                }
                else {
                    newObj[key] = value;
                }
            }
        };
        var this_1 = this;
        for (var _i = 0, _a = Object.keys(obj); _i < _a.length; _i++) {
            var key = _a[_i];
            _loop_1(key);
        }
        return newObj;
    };
    __decorate$1([
        Property(false)
    ], Component.prototype, "enablePersistence", void 0);
    __decorate$1([
        Property()
    ], Component.prototype, "enableRtl", void 0);
    __decorate$1([
        Property()
    ], Component.prototype, "locale", void 0);
    Component = __decorate$1([
        NotifyPropertyChanges
    ], Component);
    return Component;
}(Base));
//Function handling for page navigation detection
/* istanbul ignore next */
(function () {
    if (typeof window !== 'undefined') {
        window.addEventListener('popstate', 
        /* istanbul ignore next */
        function () {
            componentCount = 0;
        });
    }
})();

var __extends$2 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var defaultPosition = { left: 0, top: 0, bottom: 0, right: 0 };
var isDraggedObject = { isDragged: false };
/**
 * Specifies the position coordinates
 */
var Position = /** @class */ (function (_super) {
    __extends$2(Position, _super);
    function Position() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate$2([
        Property(0)
    ], Position.prototype, "left", void 0);
    __decorate$2([
        Property(0)
    ], Position.prototype, "top", void 0);
    return Position;
}(ChildProperty));
/**
 * Draggable Module provides support to enable draggable functionality in Dom Elements.
 * ```html
 * <div id='drag'>Draggable</div>
 * <script>
 * var ele = document.getElementById('drag');
 * var drag:Draggable = new Draggable(ele,{
 *     clone:false,
 *     drag: function(e) {
 *      //drag handler code.
 *      },
 *     handle:'.class'
 * });
 * </script>
 * ```
 */
var Draggable = /** @class */ (function (_super) {
    __extends$2(Draggable, _super);
    function Draggable(element, options) {
        var _this = _super.call(this, options, element) || this;
        _this.dragLimit = Draggable_1.getDefaultPosition();
        _this.borderWidth = Draggable_1.getDefaultPosition();
        _this.padding = Draggable_1.getDefaultPosition();
        _this.diffX = 0;
        _this.prevLeft = 0;
        _this.prevTop = 0;
        _this.dragProcessStarted = false;
        /* tslint:disable no-any */
        _this.eleTop = 0;
        _this.tapHoldTimer = 0;
        _this.externalInitialize = false;
        _this.diffY = 0;
        _this.parentScrollX = 0;
        _this.parentScrollY = 0;
        _this.droppables = {};
        _this.bind();
        return _this;
    }
    Draggable_1 = Draggable;
    Draggable.prototype.bind = function () {
        this.toggleEvents();
        if (Browser.isIE) {
            addClass([this.element], 'e-block-touch');
        }
        this.droppables[this.scope] = {};
    };
    Draggable.getDefaultPosition = function () {
        return extend({}, defaultPosition);
    };
    Draggable.prototype.toggleEvents = function (isUnWire) {
        var ele;
        if (!isUndefined(this.handle)) {
            ele = select(this.handle, this.element);
        }
        var handler = (this.enableTapHold && Browser.isDevice && Browser.isTouch) ? this.mobileInitialize : this.initialize;
        if (isUnWire) {
            EventHandler.remove(ele || this.element, Browser.touchStartEvent, handler);
        }
        else {
            EventHandler.add(ele || this.element, Browser.touchStartEvent, handler, this);
        }
    };
    /* istanbul ignore next */
    Draggable.prototype.mobileInitialize = function (evt) {
        var _this = this;
        var target = evt.currentTarget;
        this.tapHoldTimer = setTimeout(function () {
            _this.externalInitialize = true;
            _this.removeTapholdTimer();
            _this.initialize(evt, target);
        }, this.tapHoldThreshold);
        EventHandler.add(document, Browser.touchMoveEvent, this.removeTapholdTimer, this);
        EventHandler.add(document, Browser.touchEndEvent, this.removeTapholdTimer, this);
    };
    /* istanbul ignore next */
    Draggable.prototype.removeTapholdTimer = function () {
        clearTimeout(this.tapHoldTimer);
        EventHandler.remove(document, Browser.touchMoveEvent, this.removeTapholdTimer);
        EventHandler.remove(document, Browser.touchEndEvent, this.removeTapholdTimer);
    };
    /* istanbul ignore next */
    Draggable.prototype.getScrollableParent = function (element, axis) {
        var scroll = { 'vertical': 'scrollHeight', 'horizontal': 'scrollWidth' };
        var client = { 'vertical': 'clientHeight', 'horizontal': 'clientWidth' };
        if (isNullOrUndefined(element)) {
            return null;
        }
        if (element[scroll[axis]] > element[client[axis]]) {
            if (axis === 'vertical' ? element.scrollTop > 0 : element.scrollLeft > 0) {
                if (axis === 'vertical') {
                    this.parentScrollY = this.parentScrollY +
                        (this.parentScrollY === 0 ? element.scrollTop : element.scrollTop - this.parentScrollY);
                    this.tempScrollHeight = element.scrollHeight;
                }
                else {
                    this.parentScrollX = this.parentScrollX +
                        (this.parentScrollX === 0 ? element.scrollLeft : element.scrollLeft - this.parentScrollX);
                    this.tempScrollWidth = element.scrollWidth;
                }
                if (!isNullOrUndefined(element)) {
                    return this.getScrollableParent(element.parentNode, axis);
                }
                else {
                    return element;
                }
            }
            else {
                return this.getScrollableParent(element.parentNode, axis);
            }
        }
        else {
            return this.getScrollableParent(element.parentNode, axis);
        }
    };
    Draggable.prototype.getScrollableValues = function () {
        this.parentScrollX = 0;
        this.parentScrollY = 0;
        var isModalDialog = this.element.classList.contains('e-dialog') && this.element.classList.contains('e-dlg-modal');
        var verticalScrollParent = this.getScrollableParent(this.element.parentNode, 'vertical');
        var horizontalScrollParent = this.getScrollableParent(this.element.parentNode, 'horizontal');
    };
    Draggable.prototype.initialize = function (evt, curTarget) {
        this.currentStateTarget = evt.target;
        if (this.isDragStarted()) {
            return;
        }
        else {
            this.isDragStarted(true);
            this.externalInitialize = false;
        }
        this.target = (evt.currentTarget || curTarget);
        this.dragProcessStarted = false;
        if (this.abort) {
            /* tslint:disable no-any */
            var abortSelectors = this.abort;
            if (typeof abortSelectors === 'string') {
                abortSelectors = [abortSelectors];
            }
            for (var i = 0; i < abortSelectors.length; i++) {
                if (!isNullOrUndefined(closest(evt.target, abortSelectors[i]))) {
                    /* istanbul ignore next */
                    if (this.isDragStarted()) {
                        this.isDragStarted(true);
                    }
                    return;
                }
            }
        }
        if (this.preventDefault && !isUndefined(evt.changedTouches) && evt.type !== 'touchstart') {
            evt.preventDefault();
        }
        this.element.setAttribute('aria-grabbed', 'true');
        var intCoord = this.getCoordinates(evt);
        this.initialPosition = { x: intCoord.pageX, y: intCoord.pageY };
        if (!this.clone) {
            var pos = this.element.getBoundingClientRect();
            this.getScrollableValues();
            if (evt.clientX === evt.pageX) {
                this.parentScrollX = 0;
            }
            if (evt.clientY === evt.pageY) {
                this.parentScrollY = 0;
            }
            this.relativeXPosition = intCoord.pageX - (pos.left + this.parentScrollX);
            this.relativeYPosition = intCoord.pageY - (pos.top + this.parentScrollY);
        }
        if (this.externalInitialize) {
            this.intDragStart(evt);
        }
        else {
            EventHandler.add(document, Browser.touchMoveEvent, this.intDragStart, this);
            EventHandler.add(document, Browser.touchEndEvent, this.intDestroy, this);
        }
        this.toggleEvents(true);
        if (evt.type !== 'touchstart' && this.isPreventSelect) {
            document.body.classList.add('e-prevent-select');
        }
        this.externalInitialize = false;
        EventHandler.trigger(document.documentElement, Browser.touchStartEvent, evt);
    };
    Draggable.prototype.intDragStart = function (evt) {
        this.removeTapholdTimer();
        var isChangeTouch = !isUndefined(evt.changedTouches);
        if (isChangeTouch && (evt.changedTouches.length !== 1)) {
            return;
        }
        if (isChangeTouch) {
            evt.preventDefault();
        }
        var intCordinate = this.getCoordinates(evt);
        var pos;
        var styleProp = getComputedStyle(this.element);
        this.margin = {
            left: parseInt(styleProp.marginLeft, 10),
            top: parseInt(styleProp.marginTop, 10),
            right: parseInt(styleProp.marginRight, 10),
            bottom: parseInt(styleProp.marginBottom, 10),
        };
        var element = this.element;
        if (this.clone && this.dragTarget) {
            var intClosest = closest(evt.target, this.dragTarget);
            if (!isNullOrUndefined(intClosest)) {
                element = intClosest;
            }
        }
        /* istanbul ignore next */
        if (this.isReplaceDragEle) {
            element = this.currentStateCheck(evt.target, element);
        }
        this.offset = this.calculateParentPosition(element);
        this.position = this.getMousePosition(evt, this.isDragScroll);
        var x = this.initialPosition.x - intCordinate.pageX;
        var y = this.initialPosition.y - intCordinate.pageY;
        var distance = Math.sqrt((x * x) + (y * y));
        if ((distance >= this.distance || this.externalInitialize)) {
            var ele = this.getHelperElement(evt);
            if (!ele || isNullOrUndefined(ele)) {
                return;
            }
            var dragTargetElement = this.helperElement = ele;
            this.parentClientRect = this.calculateParentPosition(dragTargetElement.offsetParent);
            if (this.dragStart) {
                var curTarget = this.getProperTargetElement(evt);
                var args = {
                    event: evt,
                    element: element,
                    target: curTarget,
                    bindEvents: isBlazor() ? this.bindDragEvents.bind(this) : null,
                    dragElement: dragTargetElement
                };
                this.trigger('dragStart', args);
            }
            if (this.dragArea) {
                this.setDragArea();
            }
            else {
                this.dragLimit = { left: 0, right: 0, bottom: 0, top: 0 };
                this.borderWidth = { top: 0, left: 0 };
            }
            pos = { left: this.position.left - this.parentClientRect.left, top: this.position.top - this.parentClientRect.top };
            if (this.clone && !this.enableTailMode) {
                this.diffX = this.position.left - this.offset.left;
                this.diffY = this.position.top - this.offset.top;
            }
            this.getScrollableValues();
            // when drag element has margin-top
            var styles = getComputedStyle(element);
            var marginTop = parseFloat(styles.marginTop);
            /* istanbul ignore next */
            if (this.clone && marginTop !== 0) {
                pos.top += marginTop;
            }
            this.eleTop = !isNaN(parseFloat(styles.top)) ? parseFloat(styles.top) - this.offset.top : 0;
            /* istanbul ignore next */
            // if (this.eleTop > 0) {
            //     pos.top += this.eleTop;
            // }
            if (this.enableScrollHandler && !this.clone) {
                pos.top -= this.parentScrollY;
                pos.left -= this.parentScrollX;
            }
            var posValue = this.getProcessedPositionValue({
                top: (pos.top - this.diffY) + 'px',
                left: (pos.left - this.diffX) + 'px'
            });
            this.dragElePosition = { top: pos.top, left: pos.left };
            setStyleAttribute(dragTargetElement, this.getDragPosition({ position: 'absolute', left: posValue.left, top: posValue.top }));
            EventHandler.remove(document, Browser.touchMoveEvent, this.intDragStart);
            EventHandler.remove(document, Browser.touchEndEvent, this.intDestroy);
            if (!isBlazor()) {
                this.bindDragEvents(dragTargetElement);
            }
        }
    };
    Draggable.prototype.bindDragEvents = function (dragTargetElement) {
        if (isVisible(dragTargetElement)) {
            EventHandler.add(document, Browser.touchMoveEvent, this.intDrag, this);
            EventHandler.add(document, Browser.touchEndEvent, this.intDragStop, this);
            this.setGlobalDroppables(false, this.element, dragTargetElement);
        }
        else {
            this.toggleEvents();
            document.body.classList.remove('e-prevent-select');
        }
    };
    Draggable.prototype.elementInViewport = function (el) {
        this.top = el.offsetTop;
        this.left = el.offsetLeft;
        this.width = el.offsetWidth;
        this.height = el.offsetHeight;
        while (el.offsetParent) {
            el = el.offsetParent;
            this.top += el.offsetTop;
            this.left += el.offsetLeft;
        }
        return (this.top >= window.pageYOffset &&
            this.left >= window.pageXOffset &&
            (this.top + this.height) <= (window.pageYOffset + window.innerHeight) &&
            (this.left + this.width) <= (window.pageXOffset + window.innerWidth));
    };
    Draggable.prototype.getProcessedPositionValue = function (value) {
        if (this.queryPositionInfo) {
            return this.queryPositionInfo(value);
        }
        return value;
    };
    Draggable.prototype.calculateParentPosition = function (ele) {
        if (isNullOrUndefined(ele)) {
            return { left: 0, top: 0 };
        }
        var rect = ele.getBoundingClientRect();
        var style = getComputedStyle(ele);
        return {
            left: (rect.left + window.pageXOffset) - parseInt(style.marginLeft, 10),
            top: (rect.top + window.pageYOffset) - parseInt(style.marginTop, 10)
        };
    };
    // tslint:disable-next-line:max-func-body-length
    Draggable.prototype.intDrag = function (evt) {
        if (!isUndefined(evt.changedTouches) && (evt.changedTouches.length !== 1)) {
            return;
        }
        if (this.clone && evt.changedTouches && Browser.isDevice && Browser.isTouch) {
            evt.preventDefault();
        }
        var left;
        var top;
        this.position = this.getMousePosition(evt, this.isDragScroll);
        var docHeight = this.getDocumentWidthHeight('Height');
        if (docHeight < this.position.top) {
            this.position.top = docHeight;
        }
        var docWidth = this.getDocumentWidthHeight('Width');
        if (docWidth < this.position.left) {
            this.position.left = docWidth;
        }
        if (this.drag) {
            var curTarget = this.getProperTargetElement(evt);
            this.trigger('drag', { event: evt, element: this.element, target: curTarget });
        }
        var eleObj = this.checkTargetElement(evt);
        if (eleObj.target && eleObj.instance) {
            /* tslint:disable no-any */
            var flag = true;
            if (this.hoverObject) {
                if (this.hoverObject.instance !== eleObj.instance) {
                    this.triggerOutFunction(evt, eleObj);
                }
                else {
                    flag = false;
                }
            }
            if (flag) {
                eleObj.instance.dragData[this.scope] = this.droppables[this.scope];
                eleObj.instance.intOver(evt, eleObj.target);
                this.hoverObject = eleObj;
            }
        }
        else if (this.hoverObject) {
            this.triggerOutFunction(evt, eleObj);
        }
        var helperElement = this.droppables[this.scope].helper;
        this.parentClientRect = this.calculateParentPosition(this.helperElement.offsetParent);
        var tLeft = this.parentClientRect.left;
        var tTop = this.parentClientRect.top;
        var intCoord = this.getCoordinates(evt);
        var pagex = intCoord.pageX;
        var pagey = intCoord.pageY;
        var dLeft = this.position.left - this.diffX;
        var dTop = this.position.top - this.diffY;
        var styles = getComputedStyle(helperElement);
        if (this.dragArea) {
            if (this.pageX !== pagex || this.skipDistanceCheck) {
                var helperWidth = helperElement.offsetWidth + (parseFloat(styles.marginLeft)
                    + parseFloat(styles.marginRight));
                if (this.dragLimit.left > dLeft && dLeft > 0) {
                    left = this.dragLimit.left;
                }
                else if (this.dragLimit.right + window.pageXOffset < dLeft + helperWidth && dLeft > 0) {
                    left = dLeft - (dLeft - this.dragLimit.right) + window.pageXOffset - helperWidth;
                }
                else {
                    left = dLeft < 0 ? this.dragLimit.left : dLeft;
                }
            }
            if (this.pageY !== pagey || this.skipDistanceCheck) {
                var helperHeight = helperElement.offsetHeight + (parseFloat(styles.marginTop)
                    + parseFloat(styles.marginBottom));
                if (this.dragLimit.top > dTop && dTop > 0) {
                    top = this.dragLimit.top;
                }
                else if (this.dragLimit.bottom + window.pageYOffset < dTop + helperHeight && dTop > 0) {
                    top = dTop - (dTop - this.dragLimit.bottom) + window.pageYOffset - helperHeight;
                }
                else {
                    top = dTop < 0 ? this.dragLimit.top : dTop;
                }
            }
        }
        else {
            left = dLeft;
            top = dTop;
        }
        var iTop = tTop + this.borderWidth.top;
        var iLeft = tLeft + this.borderWidth.left;
        if (this.dragProcessStarted) {
            if (isNullOrUndefined(top)) {
                top = this.prevTop;
            }
            if (isNullOrUndefined(left)) {
                left = this.prevLeft;
            }
        }
        var draEleTop;
        var draEleLeft;
        if (this.dragArea) {
            this.dragLimit.top = this.clone ? this.dragLimit.top : 0;
            draEleTop = (top - iTop) < 0 ? this.dragLimit.top : (top - iTop);
            draEleLeft = (left - iLeft) < 0 ? this.dragElePosition.left : (left - iLeft);
        }
        else {
            draEleTop = top - iTop;
            draEleLeft = left - iLeft;
        }
        var marginTop = parseFloat(getComputedStyle(this.element).marginTop);
        // when drag-element has margin-top
        /* istanbul ignore next */
        if (marginTop > 0) {
            if (this.clone) {
                draEleTop += marginTop;
                if (dTop < 0) {
                    if ((marginTop + dTop) >= 0) {
                        draEleTop = marginTop + dTop;
                    }
                    else {
                        draEleTop -= marginTop;
                    }
                }
                draEleTop = (this.dragLimit.bottom < draEleTop) ? this.dragLimit.bottom : draEleTop;
            }
            if ((top - iTop) < 0) {
                if (dTop + marginTop + (helperElement.offsetHeight - iTop) >= 0) {
                    var tempDraEleTop = this.dragLimit.top + dTop - iTop;
                    if ((tempDraEleTop + marginTop + iTop) < 0) {
                        draEleTop -= marginTop + iTop;
                    }
                    else {
                        draEleTop = tempDraEleTop;
                    }
                }
                else {
                    draEleTop -= marginTop + iTop;
                }
            }
        }
        /* istanbul ignore next */
        // if(this.eleTop > 0) {
        //      draEleTop += this.eleTop;
        // }
        if (this.enableScrollHandler && !this.clone) {
            draEleTop -= this.parentScrollY;
            draEleLeft -= this.parentScrollX;
        }
        if (this.helperElement.classList.contains('e-treeview')) {
            var body = document.body;
            var html = document.documentElement;
            var tempHeight = Math.max(body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
            var tempWidth = Math.max(body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth);
            if (draEleTop > tempHeight) {
                draEleTop = tempHeight;
            }
            if (draEleLeft > tempWidth) {
                draEleLeft = tempWidth;
            }
        }
        var dragValue = this.getProcessedPositionValue({ top: draEleTop + 'px', left: draEleLeft + 'px' });
        setStyleAttribute(helperElement, this.getDragPosition(dragValue));
        if (!this.elementInViewport(helperElement) && this.enableAutoScroll) {
            this.helperElement.scrollIntoView();
        }
        this.dragProcessStarted = true;
        this.prevLeft = left;
        this.prevTop = top;
        this.position.left = left;
        this.position.top = top;
        this.pageX = pagex;
        this.pageY = pagey;
    };
    Draggable.prototype.triggerOutFunction = function (evt, eleObj) {
        this.hoverObject.instance.intOut(evt, eleObj.target);
        this.hoverObject.instance.dragData[this.scope] = null;
        this.hoverObject = null;
    };
    Draggable.prototype.getDragPosition = function (dragValue) {
        var temp = extend({}, dragValue);
        if (this.axis) {
            if (this.axis === 'x') {
                delete temp.top;
            }
            else if (this.axis === 'y') {
                delete temp.left;
            }
        }
        return temp;
    };
    Draggable.prototype.getDocumentWidthHeight = function (str) {
        var docBody = document.body;
        var docEle = document.documentElement;
        var returnValue = Math.max(docBody['scroll' + str], docEle['scroll' + str], docBody['offset' + str], docEle['offset' + str], docEle['client' + str]);
        return returnValue;
    };
    Draggable.prototype.intDragStop = function (evt) {
        this.dragProcessStarted = false;
        if (!isUndefined(evt.changedTouches) && (evt.changedTouches.length !== 1)) {
            return;
        }
        var type = ['touchend', 'pointerup', 'mouseup'];
        if (type.indexOf(evt.type) !== -1) {
            if (this.dragStop) {
                var curTarget = this.getProperTargetElement(evt);
                this.trigger('dragStop', { event: evt, element: this.element, target: curTarget, helper: this.helperElement });
            }
            this.intDestroy(evt);
        }
        else {
            this.element.setAttribute('aria-grabbed', 'false');
        }
        var eleObj = this.checkTargetElement(evt);
        if (eleObj.target && eleObj.instance) {
            eleObj.instance.dragStopCalled = true;
            eleObj.instance.dragData[this.scope] = this.droppables[this.scope];
            eleObj.instance.intDrop(evt, eleObj.target);
        }
        this.setGlobalDroppables(true);
        document.body.classList.remove('e-prevent-select');
    };
    /**
     * @private
     */
    Draggable.prototype.intDestroy = function (evt) {
        this.dragProcessStarted = false;
        this.toggleEvents();
        document.body.classList.remove('e-prevent-select');
        this.element.setAttribute('aria-grabbed', 'false');
        EventHandler.remove(document, Browser.touchMoveEvent, this.intDragStart);
        EventHandler.remove(document, Browser.touchEndEvent, this.intDragStop);
        EventHandler.remove(document, Browser.touchEndEvent, this.intDestroy);
        EventHandler.remove(document, Browser.touchMoveEvent, this.intDrag);
        if (this.isDragStarted()) {
            this.isDragStarted(true);
        }
    };
    // triggers when property changed
    Draggable.prototype.onPropertyChanged = function (newProp, oldProp) {
        //No Code to handle
    };
    Draggable.prototype.getModuleName = function () {
        return 'draggable';
    };
    Draggable.prototype.isDragStarted = function (change) {
        if (change) {
            isDraggedObject.isDragged = !isDraggedObject.isDragged;
        }
        return isDraggedObject.isDragged;
    };
    Draggable.prototype.setDragArea = function () {
        var eleWidthBound;
        var eleHeightBound;
        var top = 0;
        var left = 0;
        var ele;
        var type = typeof this.dragArea;
        if (type === 'string') {
            ele = select(this.dragArea);
        }
        else {
            ele = this.dragArea;
        }
        if (ele) {
            var elementArea = ele.getBoundingClientRect();
            eleWidthBound = ele.scrollWidth ? ele.scrollWidth : elementArea.right - elementArea.left;
            eleHeightBound = ele.scrollHeight ? ele.scrollHeight : elementArea.bottom - elementArea.top;
            var keys = ['Top', 'Left', 'Bottom', 'Right'];
            var styles = getComputedStyle(ele);
            for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                var tborder = styles['border' + key + 'Width'];
                var tpadding = styles['padding' + key];
                var lowerKey = key.toLowerCase();
                this.borderWidth[lowerKey] = isNaN(parseFloat(tborder)) ? 0 : parseFloat(tborder);
                this.padding[lowerKey] = isNaN(parseFloat(tpadding)) ? 0 : parseFloat(tpadding);
            }
            top = elementArea.top;
            left = elementArea.left;
            this.dragLimit.left = left + this.borderWidth.left + this.padding.left;
            this.dragLimit.top = ele.offsetTop + this.borderWidth.top + this.padding.top;
            this.dragLimit.right = left + eleWidthBound - (this.borderWidth.right + this.padding.right);
            this.dragLimit.bottom = top + eleHeightBound - (this.borderWidth.bottom + this.padding.bottom);
        }
    };
    Draggable.prototype.getProperTargetElement = function (evt) {
        var intCoord = this.getCoordinates(evt);
        var ele;
        var prevStyle = this.helperElement.style.pointerEvents || '';
        if (compareElementParent(evt.target, this.helperElement) || evt.type.indexOf('touch') !== -1) {
            this.helperElement.style.pointerEvents = 'none';
            ele = document.elementFromPoint(intCoord.clientX, intCoord.clientY);
            this.helperElement.style.pointerEvents = prevStyle;
        }
        else {
            ele = evt.target;
        }
        return ele;
    };
    /* istanbul ignore next */
    Draggable.prototype.currentStateCheck = function (ele, oldEle) {
        var elem;
        if (!isNullOrUndefined(this.currentStateTarget) && this.currentStateTarget !== ele) {
            elem = this.currentStateTarget;
        }
        else {
            elem = !isNullOrUndefined(oldEle) ? oldEle : ele;
        }
        return elem;
    };
    Draggable.prototype.getMousePosition = function (evt, isdragscroll) {
        /* tslint:disable no-any */
        var dragEle = evt.srcElement !== undefined ? evt.srcElement : evt.target;
        var intCoord = this.getCoordinates(evt);
        var pageX;
        var pageY;
        var isOffsetParent = isNullOrUndefined(dragEle.offsetParent);
        /* istanbul ignore next */
        if (isdragscroll) {
            pageX = this.clone ? intCoord.pageX :
                (intCoord.pageX + (isOffsetParent ? 0 : dragEle.offsetParent.scrollLeft)) - this.relativeXPosition;
            pageY = this.clone ? intCoord.pageY :
                (intCoord.pageY + (isOffsetParent ? 0 : dragEle.offsetParent.scrollTop)) - this.relativeYPosition;
        }
        else {
            pageX = this.clone ? intCoord.pageX : (intCoord.pageX + window.pageXOffset) - this.relativeXPosition;
            pageY = this.clone ? intCoord.pageY : (intCoord.pageY + window.pageYOffset) - this.relativeYPosition;
        }
        return {
            left: pageX - (this.margin.left + this.cursorAt.left),
            top: pageY - (this.margin.top + this.cursorAt.top)
        };
    };
    Draggable.prototype.getCoordinates = function (evt) {
        if (evt.type.indexOf('touch') > -1) {
            return evt.changedTouches[0];
        }
        return evt;
    };
    Draggable.prototype.getHelperElement = function (evt) {
        var element;
        if (this.clone) {
            if (this.helper) {
                element = this.helper({ sender: evt, element: this.target });
            }
            else {
                element = createElement('div', { className: 'e-drag-helper e-block-touch', innerHTML: 'Draggable' });
                document.body.appendChild(element);
            }
        }
        else {
            element = this.element;
        }
        return element;
    };
    Draggable.prototype.setGlobalDroppables = function (reset, drag, helper) {
        this.droppables[this.scope] = reset ? null : {
            draggable: drag,
            helper: helper,
            draggedElement: this.element
        };
    };
    Draggable.prototype.checkTargetElement = function (evt) {
        var target = this.getProperTargetElement(evt);
        var dropIns = this.getDropInstance(target);
        if (!dropIns && target && !isNullOrUndefined(target.parentNode)) {
            var parent_1 = closest(target.parentNode, '.e-droppable') || target.parentElement;
            if (parent_1) {
                dropIns = this.getDropInstance(parent_1);
            }
        }
        return { target: target, instance: dropIns };
    };
    Draggable.prototype.getDropInstance = function (ele) {
        var name = 'getModuleName';
        var drop;
        var eleInst = ele && ele.ej2_instances;
        if (eleInst) {
            for (var _i = 0, eleInst_1 = eleInst; _i < eleInst_1.length; _i++) {
                var inst = eleInst_1[_i];
                if (inst[name]() === 'droppable') {
                    drop = inst;
                    break;
                }
            }
        }
        return drop;
    };
    Draggable.prototype.destroy = function () {
        this.toggleEvents(true);
        _super.prototype.destroy.call(this);
    };
    var Draggable_1;
    __decorate$2([
        Complex({}, Position)
    ], Draggable.prototype, "cursorAt", void 0);
    __decorate$2([
        Property(true)
    ], Draggable.prototype, "clone", void 0);
    __decorate$2([
        Property()
    ], Draggable.prototype, "dragArea", void 0);
    __decorate$2([
        Property()
    ], Draggable.prototype, "isDragScroll", void 0);
    __decorate$2([
        Property()
    ], Draggable.prototype, "isReplaceDragEle", void 0);
    __decorate$2([
        Property(true)
    ], Draggable.prototype, "isPreventSelect", void 0);
    __decorate$2([
        Event$1()
    ], Draggable.prototype, "drag", void 0);
    __decorate$2([
        Event$1()
    ], Draggable.prototype, "dragStart", void 0);
    __decorate$2([
        Event$1()
    ], Draggable.prototype, "dragStop", void 0);
    __decorate$2([
        Property(1)
    ], Draggable.prototype, "distance", void 0);
    __decorate$2([
        Property()
    ], Draggable.prototype, "handle", void 0);
    __decorate$2([
        Property()
    ], Draggable.prototype, "abort", void 0);
    __decorate$2([
        Property()
    ], Draggable.prototype, "helper", void 0);
    __decorate$2([
        Property('default')
    ], Draggable.prototype, "scope", void 0);
    __decorate$2([
        Property('')
    ], Draggable.prototype, "dragTarget", void 0);
    __decorate$2([
        Property()
    ], Draggable.prototype, "axis", void 0);
    __decorate$2([
        Property()
    ], Draggable.prototype, "queryPositionInfo", void 0);
    __decorate$2([
        Property(false)
    ], Draggable.prototype, "enableTailMode", void 0);
    __decorate$2([
        Property(false)
    ], Draggable.prototype, "skipDistanceCheck", void 0);
    __decorate$2([
        Property(true)
    ], Draggable.prototype, "preventDefault", void 0);
    __decorate$2([
        Property(false)
    ], Draggable.prototype, "enableAutoScroll", void 0);
    __decorate$2([
        Property(false)
    ], Draggable.prototype, "enableTapHold", void 0);
    __decorate$2([
        Property(750)
    ], Draggable.prototype, "tapHoldThreshold", void 0);
    __decorate$2([
        Property(false)
    ], Draggable.prototype, "enableScrollHandler", void 0);
    Draggable = Draggable_1 = __decorate$2([
        NotifyPropertyChanges
    ], Draggable);
    return Draggable;
}(Base));

var __extends$3 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$3 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Droppable Module provides support to enable droppable functionality in Dom Elements.
 * ```html
 * <div id='drop'>Droppable</div>
 * <script>
 * let ele:HTMLElement = document.getElementById('drop');
 * var drag:Droppable = new Droppable(ele,{
 *     accept:'.drop',
 *     drop: function(e) {
 *      //drop handler code.
 *     }
 * });
 * </script>
 * ```
 */
var Droppable = /** @class */ (function (_super) {
    __extends$3(Droppable, _super);
    function Droppable(element, options) {
        var _this = _super.call(this, options, element) || this;
        _this.mouseOver = false;
        _this.dragData = {};
        _this.dragStopCalled = false;
        _this.bind();
        return _this;
    }
    Droppable.prototype.bind = function () {
        this.wireEvents();
    };
    Droppable.prototype.wireEvents = function () {
        EventHandler.add(this.element, Browser.touchEndEvent, this.intDrop, this);
    };
    // triggers when property changed
    // eslint-disable-next-line
    Droppable.prototype.onPropertyChanged = function (newProp, oldProp) {
        //No Code to handle
    };
    Droppable.prototype.getModuleName = function () {
        return 'droppable';
    };
    Droppable.prototype.intOver = function (event, element) {
        if (!this.mouseOver) {
            var drag = this.dragData[this.scope];
            this.trigger('over', { event: event, target: element, dragData: drag });
            this.mouseOver = true;
        }
    };
    Droppable.prototype.intOut = function (event, element) {
        if (this.mouseOver) {
            this.trigger('out', { evt: event, target: element });
            this.mouseOver = false;
        }
    };
    Droppable.prototype.intDrop = function (evt, element) {
        if (!this.dragStopCalled) {
            return;
        }
        else {
            this.dragStopCalled = false;
        }
        var accept = true;
        var drag = this.dragData[this.scope];
        var isDrag = drag ? (drag.helper && isVisible(drag.helper)) : false;
        var area;
        if (isDrag) {
            area = this.isDropArea(evt, drag.helper, element);
            if (this.accept) {
                accept = matches(drag.helper, this.accept);
            }
        }
        if (isDrag && this.drop && area.canDrop && accept) {
            this.trigger('drop', { event: evt, target: area.target, droppedElement: drag.helper, dragData: drag });
        }
        this.mouseOver = false;
    };
    Droppable.prototype.isDropArea = function (evt, helper, element) {
        var area = { canDrop: true, target: element || evt.target };
        var isTouch = evt.type === 'touchend';
        if (isTouch || area.target === helper) {
            helper.style.display = 'none';
            var coord = isTouch ? (evt.changedTouches[0]) : evt;
            var ele = document.elementFromPoint(coord.clientX, coord.clientY);
            area.canDrop = false;
            area.canDrop = compareElementParent(ele, this.element);
            if (area.canDrop) {
                area.target = ele;
            }
            helper.style.display = '';
        }
        return area;
    };
    Droppable.prototype.destroy = function () {
        EventHandler.remove(this.element, Browser.touchEndEvent, this.intDrop);
        _super.prototype.destroy.call(this);
    };
    __decorate$3([
        Property()
    ], Droppable.prototype, "accept", void 0);
    __decorate$3([
        Property('default')
    ], Droppable.prototype, "scope", void 0);
    __decorate$3([
        Event$1()
    ], Droppable.prototype, "drop", void 0);
    __decorate$3([
        Event$1()
    ], Droppable.prototype, "over", void 0);
    __decorate$3([
        Event$1()
    ], Droppable.prototype, "out", void 0);
    Droppable = __decorate$3([
        NotifyPropertyChanges
    ], Droppable);
    return Droppable;
}(Base));

var __extends$4 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$4 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var keyCode = {
    'backspace': 8,
    'tab': 9,
    'enter': 13,
    'shift': 16,
    'control': 17,
    'alt': 18,
    'pause': 19,
    'capslock': 20,
    'space': 32,
    'escape': 27,
    'pageup': 33,
    'pagedown': 34,
    'end': 35,
    'home': 36,
    'leftarrow': 37,
    'uparrow': 38,
    'rightarrow': 39,
    'downarrow': 40,
    'insert': 45,
    'delete': 46,
    'f1': 112,
    'f2': 113,
    'f3': 114,
    'f4': 115,
    'f5': 116,
    'f6': 117,
    'f7': 118,
    'f8': 119,
    'f9': 120,
    'f10': 121,
    'f11': 122,
    'f12': 123,
    'semicolon': 186,
    'plus': 187,
    'comma': 188,
    'minus': 189,
    'dot': 190,
    'forwardslash': 191,
    'graveaccent': 192,
    'openbracket': 219,
    'backslash': 220,
    'closebracket': 221,
    'singlequote': 222
};
/**
 * KeyboardEvents class enables you to bind key action desired key combinations for ex., Ctrl+A, Delete, Alt+Space etc.
 * ```html
 * <div id='testEle'>  </div>;
 * <script>
 *   let node: HTMLElement = document.querySelector('#testEle');
 *   let kbInstance = new KeyboardEvents({
 *       element: node,
 *       keyConfigs:{ selectAll : 'ctrl+a' },
 *       keyAction: function (e:KeyboardEvent, action:string) {
 *           // handler function code
 *       }
 *   });
 * </script>
 * ```
 */
var KeyboardEvents = /** @class */ (function (_super) {
    __extends$4(KeyboardEvents, _super);
    /**
     * Initializes the KeyboardEvents
     *
     * @param {HTMLElement} element ?
     * @param {KeyboardEventsModel} options ?
     */
    function KeyboardEvents(element, options) {
        var _this = _super.call(this, options, element) || this;
        /**
         * To handle a key press event returns null
         *
         * @param {KeyboardEventArgs} e ?
         * @returns {void} ?
         */
        _this.keyPressHandler = function (e) {
            var isAltKey = e.altKey;
            var isCtrlKey = e.ctrlKey;
            var isShiftKey = e.shiftKey;
            var curkeyCode = e.which;
            var keys = Object.keys(_this.keyConfigs);
            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                var key = keys_1[_i];
                var configCollection = _this.keyConfigs[key].split(',');
                for (var _a = 0, configCollection_1 = configCollection; _a < configCollection_1.length; _a++) {
                    var rconfig = configCollection_1[_a];
                    var rKeyObj = KeyboardEvents_1.getKeyConfigData(rconfig.trim());
                    if (isAltKey === rKeyObj.altKey && isCtrlKey === rKeyObj.ctrlKey &&
                        isShiftKey === rKeyObj.shiftKey && curkeyCode === rKeyObj.keyCode) {
                        e.action = key;
                        if (_this.keyAction) {
                            _this.keyAction(e);
                        }
                    }
                }
            }
        };
        _this.bind();
        return _this;
    }
    KeyboardEvents_1 = KeyboardEvents;
    /**
     * Unwire bound events and destroy the instance.
     *
     * @returns {void} ?
     */
    KeyboardEvents.prototype.destroy = function () {
        this.unwireEvents();
        _super.prototype.destroy.call(this);
    };
    /**
     * Function can be used to specify certain action if a property is changed
     *
     * @param {KeyboardEventsModel} newProp ?
     * @param {KeyboardEventsModel} oldProp ?
     * @returns {void} ?
     * @private
     */
    // eslint-disable-next-line
    KeyboardEvents.prototype.onPropertyChanged = function (newProp, oldProp) {
        // No code are needed
    };
    KeyboardEvents.prototype.bind = function () {
        this.wireEvents();
    };
    /**
     * To get the module name, returns 'keyboard'.
     *
     * @returns {string} ?
     * @private
     */
    KeyboardEvents.prototype.getModuleName = function () {
        return 'keyboard';
    };
    /**
     * Wiring event handlers to events
     *
     * @returns {void} ?
     * @private
     */
    KeyboardEvents.prototype.wireEvents = function () {
        this.element.addEventListener(this.eventName, this.keyPressHandler);
    };
    /**
     * Unwiring event handlers to events
     *
     * @returns {void} ?
     * @private
     */
    KeyboardEvents.prototype.unwireEvents = function () {
        this.element.removeEventListener(this.eventName, this.keyPressHandler);
    };
    /**
     * To get the key configuration data
     *
     * @param {string} config - configuration data
     * @returns {KeyData} ?
     */
    KeyboardEvents.getKeyConfigData = function (config) {
        if (config in this.configCache) {
            return this.configCache[config];
        }
        var keys = config.toLowerCase().split('+');
        var keyData = {
            altKey: (keys.indexOf('alt') !== -1 ? true : false),
            ctrlKey: (keys.indexOf('ctrl') !== -1 ? true : false),
            shiftKey: (keys.indexOf('shift') !== -1 ? true : false),
            keyCode: null
        };
        if (keys[keys.length - 1].length > 1 && !!Number(keys[keys.length - 1])) {
            keyData.keyCode = Number(keys[keys.length - 1]);
        }
        else {
            keyData.keyCode = KeyboardEvents_1.getKeyCode(keys[keys.length - 1]);
        }
        KeyboardEvents_1.configCache[config] = keyData;
        return keyData;
    };
    // Return the keycode value as string
    KeyboardEvents.getKeyCode = function (keyVal) {
        return keyCode[keyVal] || keyVal.toUpperCase().charCodeAt(0);
    };
    var KeyboardEvents_1;
    KeyboardEvents.configCache = {};
    __decorate$4([
        Property({})
    ], KeyboardEvents.prototype, "keyConfigs", void 0);
    __decorate$4([
        Property('keyup')
    ], KeyboardEvents.prototype, "eventName", void 0);
    __decorate$4([
        Event$1()
    ], KeyboardEvents.prototype, "keyAction", void 0);
    KeyboardEvents = KeyboardEvents_1 = __decorate$4([
        NotifyPropertyChanges
    ], KeyboardEvents);
    return KeyboardEvents;
}(Base));

/**
 * L10n modules provides localized text for different culture.
 * ```typescript
 * import {setCulture} from '@syncfusion/ts-base-library';
 * //load global locale object common for all components.
 * L10n.load({
 *    'fr-BE': {
 *       'button': {
 *            'check': 'vérifié'
 *        }
 *    }
 * });
 * //set globale default locale culture.
 * setCulture('fr-BE');
 * let instance: L10n = new L10n('button', {
 *    check: 'checked'
 * });
 * //Get locale text for current property.
 * instance.getConstant('check');
 * //Change locale culture in a component.
 * instance.setLocale('en-US');
 * ```
 */
var L10n = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {string} controlName ?
     * @param {Object} localeStrings ?
     * @param {string} locale ?
     */
    function L10n(controlName, localeStrings, locale) {
        this.controlName = controlName;
        this.localeStrings = localeStrings;
        this.setLocale(locale || exports.defaultCulture);
    }
    /**
     * Sets the locale text
     *
     * @param {string} locale ?
     * @returns {void} ?
     */
    L10n.prototype.setLocale = function (locale) {
        var intLocale = this.intGetControlConstant(L10n.locale, locale);
        this.currentLocale = intLocale || this.localeStrings;
    };
    /**
     * Sets the global locale for all components.
     *
     * @param {Object} localeObject - specifies the localeObject to be set as global locale.
     * @returns {void} ?
     */
    L10n.load = function (localeObject) {
        this.locale = extend(this.locale, localeObject, {}, true);
    };
    /**
     * Returns current locale text for the property based on the culture name and control name.
     *
     * @param {string} prop - specifies the property for which localize text to be returned.
     * @returns {string} ?
     */
    L10n.prototype.getConstant = function (prop) {
        // Removed conditional operator because this method does not return correct value when passing 0 as value in localization
        if (!isNullOrUndefined(this.currentLocale[prop])) {
            return this.currentLocale[prop];
        }
        else {
            return this.localeStrings[prop] || '';
        }
    };
    /**
     * Returns the control constant object for current object and the locale specified.
     *
     * @param {Object} curObject ?
     * @param {string} locale ?
     * @returns {Object} ?
     */
    L10n.prototype.intGetControlConstant = function (curObject, locale) {
        if ((curObject)[locale]) {
            return (curObject)[locale][this.controlName];
        }
        return null;
    };
    L10n.locale = {};
    return L10n;
}());

var __extends$5 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$5 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * SwipeSettings is a framework module that provides support to handle swipe event like swipe up, swipe right, etc..,
 */
var SwipeSettings = /** @class */ (function (_super) {
    __extends$5(SwipeSettings, _super);
    function SwipeSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate$5([
        Property(50)
    ], SwipeSettings.prototype, "swipeThresholdDistance", void 0);
    return SwipeSettings;
}(ChildProperty));
var swipeRegex = /(Up|Down)/;
/**
 * Touch class provides support to handle the touch event like tap, double tap, tap hold, etc..,
 * ```typescript
 *    let node: HTMLElement;
 * let touchObj: Touch = new Touch({
 *    element: node,
 *    tap: function (e) {
 *        // tap handler function code
 *    }
 *    tapHold: function (e) {
 *        // tap hold handler function code
 *    }
 *    scroll: function (e) {
 *        // scroll handler function code
 *    }
 *    swipe: function (e) {
 *        // swipe handler function code
 *    }
 * });
 * ```
 */
var Touch = /** @class */ (function (_super) {
    __extends$5(Touch, _super);
    /* End-Properties */
    function Touch(element, options) {
        var _this = _super.call(this, options, element) || this;
        _this.touchAction = true;
        _this.tapCount = 0;
        /**
         *
         * @param {MouseEventArgs | TouchEventArgs} evt ?
         * @returns {void} ?
         */
        _this.startEvent = function (evt) {
            if (_this.touchAction === true) {
                var point = _this.updateChangeTouches(evt);
                if (evt.changedTouches !== undefined) {
                    _this.touchAction = false;
                }
                _this.isTouchMoved = false;
                _this.movedDirection = '';
                _this.startPoint = _this.lastMovedPoint = { clientX: point.clientX, clientY: point.clientY };
                _this.startEventData = point;
                _this.hScrollLocked = _this.vScrollLocked = false;
                _this.tStampStart = Date.now();
                _this.timeOutTapHold = setTimeout(function () { _this.tapHoldEvent(evt); }, _this.tapHoldThreshold);
                EventHandler.add(_this.element, Browser.touchMoveEvent, _this.moveEvent, _this);
                EventHandler.add(_this.element, Browser.touchEndEvent, _this.endEvent, _this);
                EventHandler.add(_this.element, Browser.touchCancelEvent, _this.cancelEvent, _this);
            }
        };
        /**
         *
         * @param {MouseEventArgs | TouchEventArgs} evt ?
         * @returns {void} ?
         */
        _this.moveEvent = function (evt) {
            var point = _this.updateChangeTouches(evt);
            _this.movedPoint = point;
            _this.isTouchMoved = !(point.clientX === _this.startPoint.clientX && point.clientY === _this.startPoint.clientY);
            var eScrollArgs = {};
            if (_this.isTouchMoved) {
                clearTimeout(_this.timeOutTapHold);
                _this.calcScrollPoints(evt);
                var scrollArg = {
                    startEvents: _this.startEventData,
                    originalEvent: evt, startX: _this.startPoint.clientX,
                    startY: _this.startPoint.clientY, distanceX: _this.distanceX,
                    distanceY: _this.distanceY, scrollDirection: _this.scrollDirection,
                    velocity: _this.getVelocity(point)
                };
                eScrollArgs = extend(eScrollArgs, {}, scrollArg);
                _this.trigger('scroll', eScrollArgs);
                _this.lastMovedPoint = { clientX: point.clientX, clientY: point.clientY };
            }
        };
        /**
         *
         * @param {MouseEventArgs | TouchEventArgs} evt ?
         * @returns {void} ?
         */
        _this.cancelEvent = function (evt) {
            clearTimeout(_this.timeOutTapHold);
            clearTimeout(_this.timeOutTap);
            _this.tapCount = 0;
            _this.swipeFn(evt);
            EventHandler.remove(_this.element, Browser.touchCancelEvent, _this.cancelEvent);
        };
        /**
         *
         * @param {MouseEventArgs | TouchEventArgs} evt ?
         * @returns {void} ?
         */
        _this.endEvent = function (evt) {
            _this.swipeFn(evt);
            if (!_this.isTouchMoved) {
                if (typeof _this.tap === 'function') {
                    _this.trigger('tap', { originalEvent: evt, tapCount: ++_this.tapCount });
                    _this.timeOutTap = setTimeout(function () {
                        _this.tapCount = 0;
                    }, _this.tapThreshold);
                }
            }
            _this.modeclear();
        };
        /**
         *
         * @param {MouseEventArgs | TouchEventArgs} evt ?
         * @returns {void} ?
         */
        _this.swipeFn = function (evt) {
            clearTimeout(_this.timeOutTapHold);
            clearTimeout(_this.timeOutTap);
            var point = _this.updateChangeTouches(evt);
            var diffX = point.clientX - _this.startPoint.clientX;
            var diffY = point.clientY - _this.startPoint.clientY;
            diffX = Math.floor(diffX < 0 ? -1 * diffX : diffX);
            diffY = Math.floor(diffY < 0 ? -1 * diffY : diffX);
            _this.isTouchMoved = diffX > 1 || diffY > 1;
            _this.endPoint = point;
            _this.calcPoints(evt);
            var swipeArgs = {
                originalEvent: evt,
                startEvents: _this.startEventData,
                startX: _this.startPoint.clientX,
                startY: _this.startPoint.clientY,
                distanceX: _this.distanceX, distanceY: _this.distanceY, swipeDirection: _this.movedDirection,
                velocity: _this.getVelocity(point)
            };
            if (_this.isTouchMoved) {
                var eSwipeArgs = void 0;
                var tDistance = _this.swipeSettings.swipeThresholdDistance;
                // eslint-disable-next-line
                eSwipeArgs = extend(eSwipeArgs, _this.defaultArgs, swipeArgs);
                var canTrigger = false;
                var ele = _this.element;
                var scrollBool = _this.isScrollable(ele);
                var moved = swipeRegex.test(_this.movedDirection);
                if ((tDistance < _this.distanceX && !moved) || (tDistance < _this.distanceY && moved)) {
                    if (!scrollBool) {
                        canTrigger = true;
                    }
                    else {
                        canTrigger = _this.checkSwipe(ele, moved);
                    }
                }
                if (canTrigger) {
                    _this.trigger('swipe', eSwipeArgs);
                }
            }
            _this.modeclear();
        };
        _this.modeclear = function () {
            _this.modeClear = setTimeout(function () {
                _this.touchAction = true;
            }, (typeof _this.tap !== 'function' ? 0 : 20));
            _this.lastTapTime = new Date().getTime();
            EventHandler.remove(_this.element, Browser.touchMoveEvent, _this.moveEvent);
            EventHandler.remove(_this.element, Browser.touchEndEvent, _this.endEvent);
            EventHandler.remove(_this.element, Browser.touchCancelEvent, _this.cancelEvent);
        };
        _this.bind();
        return _this;
    }
    // triggers when property changed
    /**
     *
     * @private
     * @param {TouchModel} newProp ?
     * @param {TouchModel} oldProp ?
     * @returns {void} ?
     */
    // eslint-disable-next-line
    Touch.prototype.onPropertyChanged = function (newProp, oldProp) {
        //No Code to handle
    };
    Touch.prototype.bind = function () {
        this.wireEvents();
        if (Browser.isIE) {
            this.element.classList.add('e-block-touch');
        }
    };
    /**
     * To destroy the touch instance.
     *
     * @returns {void}
     */
    Touch.prototype.destroy = function () {
        this.unwireEvents();
        _super.prototype.destroy.call(this);
    };
    // Need to changes the event binding once we updated the event handler.
    Touch.prototype.wireEvents = function () {
        EventHandler.add(this.element, Browser.touchStartEvent, this.startEvent, this);
    };
    Touch.prototype.unwireEvents = function () {
        EventHandler.remove(this.element, Browser.touchStartEvent, this.startEvent);
    };
    /**
     * Returns module name as touch
     *
     * @returns {string} ?
     * @private
     */
    Touch.prototype.getModuleName = function () {
        return 'touch';
    };
    /**
     * Returns if the HTML element is Scrollable.
     *
     * @param {HTMLElement} element - HTML Element to check if Scrollable.
     * @returns {boolean} ?
     */
    Touch.prototype.isScrollable = function (element) {
        var eleStyle = getComputedStyle(element);
        var style = eleStyle.overflow + eleStyle.overflowX + eleStyle.overflowY;
        if ((/(auto|scroll)/).test(style)) {
            return true;
        }
        return false;
    };
    /**
     *
     * @param {MouseEventArgs | TouchEventArgs} evt ?
     * @returns {void} ?
     */
    Touch.prototype.tapHoldEvent = function (evt) {
        this.tapCount = 0;
        this.touchAction = true;
        var eTapArgs;
        EventHandler.remove(this.element, Browser.touchMoveEvent, this.moveEvent);
        EventHandler.remove(this.element, Browser.touchEndEvent, this.endEvent);
        // eslint-disable-next-line
        eTapArgs = { originalEvent: evt };
        this.trigger('tapHold', eTapArgs);
        EventHandler.remove(this.element, Browser.touchCancelEvent, this.cancelEvent);
    };
    Touch.prototype.calcPoints = function (evt) {
        var point = this.updateChangeTouches(evt);
        this.defaultArgs = { originalEvent: evt };
        this.distanceX = Math.abs((Math.abs(point.clientX) - Math.abs(this.startPoint.clientX)));
        this.distanceY = Math.abs((Math.abs(point.clientY) - Math.abs(this.startPoint.clientY)));
        if (this.distanceX > this.distanceY) {
            this.movedDirection = (point.clientX > this.startPoint.clientX) ? 'Right' : 'Left';
        }
        else {
            this.movedDirection = (point.clientY < this.startPoint.clientY) ? 'Up' : 'Down';
        }
    };
    Touch.prototype.calcScrollPoints = function (evt) {
        var point = this.updateChangeTouches(evt);
        this.defaultArgs = { originalEvent: evt };
        this.distanceX = Math.abs((Math.abs(point.clientX) - Math.abs(this.lastMovedPoint.clientX)));
        this.distanceY = Math.abs((Math.abs(point.clientY) - Math.abs(this.lastMovedPoint.clientY)));
        if ((this.distanceX > this.distanceY || this.hScrollLocked === true) && this.vScrollLocked === false) {
            this.scrollDirection = (point.clientX > this.lastMovedPoint.clientX) ? 'Right' : 'Left';
            this.hScrollLocked = true;
        }
        else {
            this.scrollDirection = (point.clientY < this.lastMovedPoint.clientY) ? 'Up' : 'Down';
            this.vScrollLocked = true;
        }
    };
    Touch.prototype.getVelocity = function (pnt) {
        var newX = pnt.clientX;
        var newY = pnt.clientY;
        var newT = Date.now();
        var xDist = newX - this.startPoint.clientX;
        var yDist = newY - this.startPoint.clientX;
        var interval = newT - this.tStampStart;
        return Math.sqrt(xDist * xDist + yDist * yDist) / interval;
    };
    // eslint-disable-next-line
    Touch.prototype.checkSwipe = function (ele, flag) {
        var keys = ['scroll', 'offset'];
        var temp = flag ? ['Height', 'Top'] : ['Width', 'Left'];
        if ((ele[keys[0] + temp[0]] <= ele[keys[1] + temp[0]])) {
            return true;
        }
        return (ele[keys[0] + temp[1]] === 0) ||
            (ele[keys[1] + temp[0]] + ele[keys[0] + temp[1]] >= ele[keys[0] + temp[0]]);
    };
    Touch.prototype.updateChangeTouches = function (evt) {
        var point = evt.changedTouches && evt.changedTouches.length !== 0 ? evt.changedTouches[0] : evt;
        return point;
    };
    __decorate$5([
        Event$1()
    ], Touch.prototype, "tap", void 0);
    __decorate$5([
        Event$1()
    ], Touch.prototype, "tapHold", void 0);
    __decorate$5([
        Event$1()
    ], Touch.prototype, "swipe", void 0);
    __decorate$5([
        Event$1()
    ], Touch.prototype, "scroll", void 0);
    __decorate$5([
        Property(350)
    ], Touch.prototype, "tapThreshold", void 0);
    __decorate$5([
        Property(750)
    ], Touch.prototype, "tapHoldThreshold", void 0);
    __decorate$5([
        Complex({}, SwipeSettings)
    ], Touch.prototype, "swipeSettings", void 0);
    Touch = __decorate$5([
        NotifyPropertyChanges
    ], Touch);
    return Touch;
}(Base));

/**
 * Template Engine
 */
var LINES = new RegExp('\\n|\\r|\\s\\s+', 'g');
var QUOTES = new RegExp(/'|"/g);
var IF_STMT = new RegExp('if ?\\(');
var ELSEIF_STMT = new RegExp('else if ?\\(');
var ELSE_STMT = new RegExp('else');
var FOR_STMT = new RegExp('for ?\\(');
var IF_OR_FOR = new RegExp('(/if|/for)');
var CALL_FUNCTION = new RegExp('\\((.*)\\)', '');
var NOT_NUMBER = new RegExp('^[0-9]+$', 'g');
var WORD = new RegExp('[\\w"\'.\\s+]+', 'g');
var DBL_QUOTED_STR = new RegExp('"(.*?)"', 'g');
var WORDIF = new RegExp('[\\w"\'@#$.\\s-+]+', 'g');
var exp = new RegExp('\\${([^}]*)}', 'g');
// let cachedTemplate: Object = {};
var ARR_OBJ = /^\..*/gm;
var SINGLE_SLASH = /\\/gi;
var DOUBLE_SLASH = /\\\\/gi;
var WORDFUNC = new RegExp('[\\w"\'@#$.\\s+]+', 'g');
var WINDOWFUNC = /\window\./gm;
/**
 * The function to set regular expression for template expression string.
 *
 * @param {RegExp} value - Value expression.
 * @returns {RegExp} ?
 * @private
 */

// /**
//  * To render the template string from the given data.
//  * @param  {string} template - String Template.
//  * @param  {Object[]|JSON} data - DataSource for the template.
//  * @param  {Object} helper? - custom helper object.
//  */
// export function template(template: string, data: JSON, helper?: Object): string {
//     let hash: string = hashCode(template);
//     let tmpl: Function;
//     if (!cachedTemplate[hash]) {
//         tmpl = cachedTemplate[hash] = compile(template, helper);
//     } else {
//         tmpl = cachedTemplate[hash];
//     }
//     return tmpl(data);
// }
/**
 * Compile the template string into template function.
 *
 * @param {string} template - The template string which is going to convert.
 * @param {Object} helper - Helper functions as an object.
 * @param {boolean} ignorePrefix ?
 * @returns {string} ?
 * @private
 */
function compile$1(template, helper, ignorePrefix) {
    var argName = 'data';
    var evalExpResult = evalExp(template, argName, helper, ignorePrefix);
    var condtion = "var valueRegEx = (/value=\\'([A-Za-z0-9 _]*)((.)([\\w)(!-;?-\u25A0\\s]+)['])/g);\n    var hrefRegex = (/(?:href)([\\s='\"./]+)([\\w-./?=&\\\\#\"]+)((.)([\\w)(!-;/?-\u25A0\\s]+)['])/g);\n    if(str.match(valueRegEx)){\n        var check = str.match(valueRegEx);\n        var str1 = str;\n        for (var i=0; i < check.length; i++) {\n            var check1 = str.match(valueRegEx)[i].split('value=')[1];\n            var change = check1.match(/^'/) !== null ? check1.replace(/^'/, '\"') : check1;\n            change =change.match(/.$/)[0] === '\\'' ? change.replace(/.$/,'\"') : change;\n            str1 = str1.replace(check1, change);\n        }\n        str = str.replace(str, str1);\n    }\n    else if (str.match(/(?:href='')/) === null) {\n        if(str.match(hrefRegex)) {\n            var check = str.match(hrefRegex);\n            var str1 = str;\n            for (var i=0; i < check.length; i++) {\n                var check1 = str.match(hrefRegex)[i].split('href=')[1];\n                if (check1) {\n                    var change = check1.match(/^'/) !== null ? check1.replace(/^'/, '\"') : check1;\n                    change =change.match(/.$/)[0] === '\\'' ? change.replace(/.$/,'\"') : change;\n                    str1 = str1.replace(check1, change);\n                }\n            }\n            str = str.replace(str, str1);\n        }\n    }\n    ";
    var fnCode = "var str=\"" + evalExpResult + "\";" + condtion + " return str;";
    var fn = new Function(argName, fnCode);
    return fn.bind(helper);
}
/** function used to evaluate the function expression
 *
 * @param {string} str ?
 * @param {string} nameSpace ?
 * @param {Object} helper ?
 * @param {boolean} ignorePrefix ?
 * @returns {string} ?
 */
function evalExp(str, nameSpace, helper, ignorePrefix) {
    var varCOunt = 0;
    /**
     * Variable containing Local Keys
     */
    var localKeys = [];
    var isClass = str.match(/class="([^"]+|)\s{2}/g);
    var singleSpace = '';
    if (isClass) {
        isClass.forEach(function (value) {
            singleSpace = value.replace(/\s\s+/g, ' ');
            str = str.replace(value, singleSpace);
        });
    }
    return str.replace(LINES, '').replace(DBL_QUOTED_STR, '\'$1\'').replace(exp, 
    // eslint-disable-next-line
    function (match, cnt, offset, matchStr) {
        var SPECIAL_CHAR = /@|#|\$/gm;
        var matches = cnt.match(CALL_FUNCTION);
        // matches to detect any function calls
        if (matches) {
            var rlStr = matches[1];
            if (ELSEIF_STMT.test(cnt)) {
                //handling else-if condition
                cnt = '";} ' + cnt.replace(matches[1], rlStr.replace(WORD, function (str) {
                    str = str.trim();
                    return addNameSpace(str, !(QUOTES.test(str)) && (localKeys.indexOf(str) === -1), nameSpace, localKeys, ignorePrefix);
                })) + '{ \n str = str + "';
            }
            else if (IF_STMT.test(cnt)) {
                //handling if condition
                cnt = '"; ' + cnt.replace(matches[1], rlStr.replace(WORDIF, function (strs) {
                    return HandleSpecialCharArrObj(strs, nameSpace, localKeys, ignorePrefix);
                })) + '{ \n str = str + "';
            }
            else if (FOR_STMT.test(cnt)) {
                //handling for condition
                var rlStr_1 = matches[1].split(' of ');
                // replace for each into actual JavaScript
                // eslint-disable-next-line
                cnt = '"; ' + cnt.replace(matches[1], function (mtc) {
                    localKeys.push(rlStr_1[0]);
                    localKeys.push(rlStr_1[0] + 'Index');
                    varCOunt = varCOunt + 1;
                    // tslint:disable-next-line
                    return 'var i' + varCOunt + '=0; i' + varCOunt + ' < ' + addNameSpace(rlStr_1[1], true, nameSpace, localKeys, ignorePrefix) + '.length; i' + varCOunt + '++';
                }) + '{ \n ' + rlStr_1[0] + '= ' + addNameSpace(rlStr_1[1], true, nameSpace, localKeys, ignorePrefix)
                    + '[i' + varCOunt + ']; \n var ' + rlStr_1[0] + 'Index=i' + varCOunt + '; \n str = str + "';
            }
            else {
                //helper function handling
                var fnStr = cnt.split('(');
                // eslint-disable-next-line
                var fNameSpace = (helper && helper.hasOwnProperty(fnStr[0]) ? 'this.' : 'global');
                fNameSpace = (/\./.test(fnStr[0]) ? '' : fNameSpace);
                var ftArray = matches[1].split(',');
                if (matches[1].length !== 0 && !(/data/).test(ftArray[0]) && !(/window./).test(ftArray[0])) {
                    matches[1] = (fNameSpace === 'global' ? nameSpace + '.' + matches[1] : matches[1]);
                }
                var splRegexp = /@|\$|#/gm;
                var arrObj = /\]\./gm;
                if (WINDOWFUNC.test(cnt) && arrObj.test(cnt) || splRegexp.test(cnt)) {
                    var splArrRegexp = /@|\$|#|\]\./gm;
                    if (splArrRegexp.test(cnt)) {
                        // tslint:disable-next-line
                        cnt = '"+ ' + (fNameSpace === 'global' ? '' : fNameSpace) + cnt.replace(matches[1], rlStr.replace(WORDFUNC, function (strs) {
                            return HandleSpecialCharArrObj(strs, nameSpace, localKeys, ignorePrefix);
                        })) + '+ "';
                    }
                }
                else {
                    cnt = '" + ' + (fNameSpace === 'global' ? '' : fNameSpace) +
                        cnt.replace(rlStr, addNameSpace(matches[1].replace(/,( |)data.|,/gi, ',' + nameSpace + '.').replace(/,( |)data.window/gi, ',window'), (fNameSpace === 'global' ? false : true), nameSpace, localKeys, ignorePrefix)) +
                        '+"';
                }
            }
        }
        else if (ELSE_STMT.test(cnt)) {
            // handling else condition
            cnt = '"; ' + cnt.replace(ELSE_STMT, '} else { \n str = str + "');
            // eslint-disable-next-line
        }
        else if (!!cnt.match(IF_OR_FOR)) {
            // close condition
            cnt = cnt.replace(IF_OR_FOR, '"; \n } \n str = str + "');
        }
        else if (SPECIAL_CHAR.test(cnt)) {
            // template string with double slash with special character
            if (cnt.match(SINGLE_SLASH)) {
                cnt = SlashReplace(cnt);
            }
            cnt = '"+' + NameSpaceForspecialChar(cnt, (localKeys.indexOf(cnt) === -1), nameSpace, localKeys) + '"]+"';
        }
        else {
            // template string with double slash
            if (cnt.match(SINGLE_SLASH)) {
                cnt = SlashReplace(cnt);
                cnt = '"+' + NameSpaceForspecialChar(cnt, (localKeys.indexOf(cnt) === -1), nameSpace, localKeys) + '"]+"';
            }
            else {
                // evaluate normal expression
                cnt = '"+' + addNameSpace(cnt.replace(/,/gi, '+' + nameSpace + '.'), (localKeys.indexOf(cnt) === -1), nameSpace, localKeys, ignorePrefix) + '+"';
            }
        }
        return cnt;
    });
}
/**
 *
 * @param {string} str ?
 * @param {boolean} addNS ?
 * @param {string} nameSpace ?
 * @param {string[]} ignoreList ?
 * @param {boolean} ignorePrefix ?
 * @returns {string} ?
 */
function addNameSpace(str, addNS, nameSpace, ignoreList, ignorePrefix) {
    return ((addNS && !(NOT_NUMBER.test(str)) && ignoreList.indexOf(str.split('.')[0]) === -1 && !ignorePrefix) ? nameSpace + '.' + str : str);
}
/**
 *
 * @param {string} str ?
 * @param {boolean} addNS ?
 * @param {string} nameSpace ?
 * @param {string[]} ignoreList ?
 * @returns {string} ?
 */
function NameSpaceArrObj(str, addNS, nameSpace, ignoreList) {
    var arrObjReg = /^\..*/gm;
    return ((addNS && !(NOT_NUMBER.test(str)) &&
        ignoreList.indexOf(str.split('.')[0]) === -1 && !(arrObjReg.test(str))) ? nameSpace + '.' + str : str);
}
// // Create hashCode for template string to storeCached function
// function hashCode(str: string): string {
//     return str.split('').reduce((a: number, b: string) => { a = ((a << 5) - a) + b.charCodeAt(0); return a & a; }, 0).toString();
// }
/**
 *
 * @param {string} str ?
 * @param {boolean} addNS ?
 * @param {string} nameSpace ?
 * @param {string[]} ignoreList ?
 * @returns {string} ?
 */
function NameSpaceForspecialChar(str, addNS, nameSpace, ignoreList) {
    return ((addNS && !(NOT_NUMBER.test(str)) && ignoreList.indexOf(str.split('.')[0]) === -1) ? nameSpace + '["' + str : str);
}
// eslint-disable-next-line
function SlashReplace(tempStr) {
    var double = '\\\\';
    if (tempStr.match(DOUBLE_SLASH)) {
        // eslint-disable-next-line
        tempStr = tempStr;
    }
    else {
        tempStr = tempStr.replace(SINGLE_SLASH, double);
    }
    return tempStr;
}
/**
 *
 * @param {string} str ?
 * @param {string} nameSpaceNew ?
 * @param {string[]} keys ?
 * @param {boolean} ignorePrefix ?
 * @returns {string} ?
 */
function HandleSpecialCharArrObj(str, nameSpaceNew, keys, ignorePrefix) {
    str = str.trim();
    var windowFunc = /\window\./gm;
    if (!windowFunc.test(str)) {
        var quotes = /'|"/gm;
        var splRegexp = /@|\$|#/gm;
        if (splRegexp.test(str)) {
            str = NameSpaceForspecialChar(str, (keys.indexOf(str) === -1), nameSpaceNew, keys) + '"]';
        }
        if (ARR_OBJ.test(str)) {
            return NameSpaceArrObj(str, !(quotes.test(str)) && (keys.indexOf(str) === -1), nameSpaceNew, keys);
        }
        else {
            return addNameSpace(str, !(quotes.test(str)) && (keys.indexOf(str) === -1), nameSpaceNew, keys, ignorePrefix);
        }
    }
    else {
        return str;
    }
}

/**
 * Template Engine Bridge
 */
var HAS_ROW = /^[\n\r.]+<tr|^<tr/;
var HAS_SVG = /^[\n\r.]+<svg|^<path|^<g/;
var blazorTemplates = {};
/**
 *
 * @returns {string} ?
 */
function getRandomId() {
    return '-' + Math.random().toString(36).substr(2, 5);
}
/**
 * Compile the template string into template function.
 *
 * @param {string} templateString - The template string which is going to convert.
 * @param {Object} helper - Helper functions as an object.
 * @param {boolean} ignorePrefix ?
 * @returns {NodeList} ?
 * @private
 */
// eslint-disable-next-line
function compile$$1(templateString, helper, ignorePrefix) {
    var compiler = engineObj.compile(templateString, helper, ignorePrefix);
    // eslint-disable-next-line
    return function (data, component, propName, templateId, isStringTemplate, index, element, root) {
        var result = compiler(data, component, propName, element, root);
        var blazorTemplateId = 'BlazorTemplateId';
        if (isBlazor() && !isStringTemplate) {
            var randomId = getRandomId();
            var blazorId = templateId + randomId;
            if (!blazorTemplates[templateId]) {
                blazorTemplates[templateId] = [];
            }
            if (!isNullOrUndefined(index)) {
                var keys = Object.keys(blazorTemplates[templateId][index]);
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var key = keys_1[_i];
                    if (key !== blazorTemplateId && data[key]) {
                        blazorTemplates[templateId][index][key] = data[key];
                    }
                    if (key === blazorTemplateId) {
                        blazorId = blazorTemplates[templateId][index][key];
                    }
                }
            }
            else {
                data[blazorTemplateId] = blazorId;
                blazorTemplates[templateId].push(data);
            }
            // eslint-disable-next-line
            return propName === 'rowTemplate' ? [createElement('tr', { id: blazorId, className: 'e-blazor-template' })] :
                // eslint-disable-next-line
                [createElement('div', { id: blazorId, className: 'e-blazor-template' })];
        }
        if (typeof result === 'string') {
            if (HAS_SVG.test(result)) {
                var ele = createElement('svg', { innerHTML: result });
                return ele.childNodes;
            }
            else {
                var ele = createElement((HAS_ROW.test(result) ? 'table' : 'div'), { innerHTML: result });
                return ele.childNodes;
            }
        }
        else {
            return result;
        }
    };
}
/**
 *
 * @param {string} templateId ?
 * @param {string} templateName ?
 * @param {string} comp ?
 * @param {boolean} isEmpty ?
 * @param {Function} callBack ?
 * @returns {void} ?
 */
function updateBlazorTemplate(templateId, templateName, comp, isEmpty, callBack) {
    if (isBlazor()) {
        var ejsIntrop = 'sfBlazor';
        window[ejsIntrop].updateTemplate(templateName, blazorTemplates[templateId], templateId, comp, callBack);
        if (isEmpty !== false) {
            blazorTemplates[templateId] = [];
        }
    }
}
/**
 *
 * @param {string} templateId ?
 * @param {string} templateName ?
 * @param {number} index ?
 * @returns {void} ?
 */
function resetBlazorTemplate(templateId, templateName, index) {
    var templateDiv = document.getElementById(templateId);
    if (templateDiv) {
        // eslint-disable-next-line
        var innerTemplates = templateDiv.getElementsByClassName('blazor-inner-template');
        for (var i = 0; i < innerTemplates.length; i++) {
            var tempId = ' ';
            if (!isNullOrUndefined(index)) {
                tempId = innerTemplates[index].getAttribute('data-templateId');
            }
            else {
                tempId = innerTemplates[i].getAttribute('data-templateId');
            }
            var tempElement = document.getElementById(tempId);
            if (tempElement) {
                var length_1 = tempElement.childNodes.length;
                for (var j = 0; j < length_1; j++) {
                    if (!isNullOrUndefined(index)) {
                        innerTemplates[index].appendChild(tempElement.childNodes[0]);
                        i = innerTemplates.length;
                    }
                    else {
                        innerTemplates[i].appendChild(tempElement.childNodes[0]);
                    }
                }
            }
        }
    }
}
/**
 * Set your custom template engine for template rendering.
 *
 * @param  {ITemplateEngine} classObj - Class object for custom template.
 * @returns {void} ?
 * @private
 */
function setTemplateEngine(classObj) {
    engineObj.compile = classObj.compile;
}
/**
 * Get current template engine for template rendering
 *
 * @returns {string} ?
 * @private
 */
function getTemplateEngine() {
    return engineObj.compile;
}
//Default Engine Class
var Engine = /** @class */ (function () {
    function Engine() {
    }
    // eslint-disable-next-line
    Engine.prototype.compile = function (templateString, helper, ignorePrefix) {
        if (helper === void 0) { helper = {}; }
        return compile$1(templateString, helper);
    };
    return Engine;
}());
var engineObj = { compile: new Engine().compile };

/**
 * SanitizeHtmlHelper for sanitize the value.
 */
var removeTags = [
    'script',
    'style',
    'iframe[src]',
    'link[href*="javascript:"]',
    'object[type="text/x-scriptlet"]',
    'object[data^="data:text/html;base64"]',
    'img[src^="data:text/html;base64"]',
    '[src^="javascript:"]',
    '[dynsrc^="javascript:"]',
    '[lowsrc^="javascript:"]',
    '[type^="application/x-shockwave-flash"]'
];
var removeAttrs = [
    { attribute: 'href', selector: '[href*="javascript:"]' },
    { attribute: 'background', selector: '[background^="javascript:"]' },
    { attribute: 'style', selector: '[style*="javascript:"]' },
    { attribute: 'style', selector: '[style*="expression("]' },
    { attribute: 'href', selector: 'a[href^="data:text/html;base64"]' }
];
var jsEvents = ['onchange',
    'onclick',
    'onmouseover',
    'onmouseout',
    'onkeydown',
    'onload',
    'onerror',
    'onblur',
    'onfocus',
    'onbeforeload',
    'onbeforeunload',
    'onkeyup',
    'onsubmit',
    'onafterprint',
    'onbeforeonload',
    'onbeforeprint',
    'onblur',
    'oncanplay',
    'oncanplaythrough',
    'onchange',
    'onclick',
    'oncontextmenu',
    'ondblclick',
    'ondrag',
    'ondragend',
    'ondragenter',
    'ondragleave',
    'ondragover',
    'ondragstart',
    'ondrop',
    'ondurationchange',
    'onemptied',
    'onended',
    'onerror',
    'onerror',
    'onfocus',
    'onformchange',
    'onforminput',
    'onhaschange',
    'oninput',
    'oninvalid',
    'onkeydown',
    'onkeypress',
    'onkeyup',
    'onload',
    'onloadeddata',
    'onloadedmetadata',
    'onloadstart',
    'onmessage',
    'onmousedown',
    'onmousemove',
    'onmouseout',
    'onmouseover',
    'onmouseup',
    'onmousewheel',
    'onoffline',
    'onoine',
    'ononline',
    'onpagehide',
    'onpageshow',
    'onpause',
    'onplay',
    'onplaying',
    'onpopstate',
    'onprogress',
    'onratechange',
    'onreadystatechange',
    'onredo',
    'onresize',
    'onscroll',
    'onseeked',
    'onseeking',
    'onselect',
    'onstalled',
    'onstorage',
    'onsubmit',
    'onsuspend',
    'ontimeupdate',
    'onundo',
    'onunload',
    'onvolumechange',
    'onwaiting',
    'onmouseenter',
    'onmouseleave',
    'onmousewheel',
    'onstart',
    'onpropertychange'
];
var SanitizeHtmlHelper = /** @class */ (function () {
    function SanitizeHtmlHelper() {
    }
    SanitizeHtmlHelper.beforeSanitize = function () {
        return {
            selectors: {
                tags: removeTags,
                attributes: removeAttrs
            }
        };
    };
    SanitizeHtmlHelper.sanitize = function (value) {
        var item = this.beforeSanitize();
        var output = this.serializeValue(item, value);
        return output;
    };
    SanitizeHtmlHelper.serializeValue = function (item, value) {
        this.removeAttrs = item.selectors.attributes;
        this.removeTags = item.selectors.tags;
        this.wrapElement = document.createElement('div');
        this.wrapElement.innerHTML = value;
        this.removeXssTags();
        this.removeJsEvents();
        this.removeXssAttrs();
        var tempEleValue = this.wrapElement.innerHTML;
        this.removeElement();
        return tempEleValue.replace('&amp;', '&');
    };
    SanitizeHtmlHelper.removeElement = function () {
        // Removes an element's attibute to avoid html tag validation
        var nodes = this.wrapElement.children;
        for (var j = 0; j < nodes.length; j++) {
            var attribute = nodes[j].attributes;
            for (var i = 0; i < attribute.length; i++) {
                this.wrapElement.children[j].removeAttribute(attribute[i].localName);
            }
        }
    };
    SanitizeHtmlHelper.removeXssTags = function () {
        var elements = this.wrapElement.querySelectorAll(this.removeTags.join(','));
        if (elements.length > 0) {
            elements.forEach(function (element) {
                detach(element);
            });
        }
        else {
            return;
        }
    };
    SanitizeHtmlHelper.removeJsEvents = function () {
        var elements = this.wrapElement.querySelectorAll('[' + jsEvents.join('],[') + ']');
        if (elements.length > 0) {
            elements.forEach(function (element) {
                jsEvents.forEach(function (attr) {
                    if (element.hasAttribute(attr)) {
                        element.removeAttribute(attr);
                    }
                });
            });
        }
        else {
            return;
        }
    };
    SanitizeHtmlHelper.removeXssAttrs = function () {
        var _this = this;
        // eslint-disable-next-line
        this.removeAttrs.forEach(function (item, index) {
            var elements = _this.wrapElement.querySelectorAll(item.selector);
            if (elements.length > 0) {
                elements.forEach(function (element) {
                    element.removeAttribute(item.attribute);
                });
            }
        });
    };
    return SanitizeHtmlHelper;
}());

/**
 * Base modules
 */

exports.blazorCultureFormats = blazorCultureFormats;
exports.Ajax = Ajax;
exports.Animation = Animation;
exports.rippleEffect = rippleEffect;
exports.enableRipple = enableRipple;
exports.Base = Base;
exports.getComponent = getComponent;
exports.removeChildInstance = removeChildInstance;
exports.Browser = Browser;
exports.enableVersionBasedPersistence = enableVersionBasedPersistence;
exports.Component = Component;
exports.ChildProperty = ChildProperty;
exports.Position = Position;
exports.Draggable = Draggable;
exports.Droppable = Droppable;
exports.EventHandler = EventHandler;
exports.onIntlChange = onIntlChange;
exports.cldrData = cldrData;
exports.Internationalization = Internationalization;
exports.setCulture = setCulture;
exports.setCurrencyCode = setCurrencyCode;
exports.loadCldr = loadCldr;
exports.enableRtl = enableRtl;
exports.getNumericObject = getNumericObject;
exports.getNumberDependable = getNumberDependable;
exports.getDefaultDateObject = getDefaultDateObject;
exports.KeyboardEvents = KeyboardEvents;
exports.L10n = L10n;
exports.ModuleLoader = ModuleLoader;
exports.Property = Property;
exports.Complex = Complex;
exports.ComplexFactory = ComplexFactory;
exports.Collection = Collection;
exports.CollectionFactory = CollectionFactory;
exports.Event = Event$1;
exports.NotifyPropertyChanges = NotifyPropertyChanges;
exports.CreateBuilder = CreateBuilder;
exports.SwipeSettings = SwipeSettings;
exports.Touch = Touch;
exports.blazorTemplates = blazorTemplates;
exports.getRandomId = getRandomId;
exports.compile = compile$$1;
exports.updateBlazorTemplate = updateBlazorTemplate;
exports.resetBlazorTemplate = resetBlazorTemplate;
exports.setTemplateEngine = setTemplateEngine;
exports.getTemplateEngine = getTemplateEngine;
exports.disableBlazorMode = disableBlazorMode;
exports.createInstance = createInstance;
exports.setImmediate = setImmediate;
exports.getValue = getValue;
exports.setValue = setValue;
exports.deleteObject = deleteObject;
exports.containerObject = containerObject;
exports.isObject = isObject;
exports.getEnumValue = getEnumValue;
exports.merge = merge;
exports.extend = extend;
exports.isNullOrUndefined = isNullOrUndefined;
exports.isUndefined = isUndefined;
exports.getUniqueID = getUniqueID;
exports.debounce = debounce;
exports.queryParams = queryParams;
exports.isObjectArray = isObjectArray;
exports.compareElementParent = compareElementParent;
exports.throwError = throwError;
exports.print = print;
exports.formatUnit = formatUnit;
exports.enableBlazorMode = enableBlazorMode;
exports.isBlazor = isBlazor;
exports.getElement = getElement;
exports.getInstance = getInstance;
exports.addInstance = addInstance;
exports.uniqueID = uniqueID;
exports.createElement = createElement;
exports.addClass = addClass;
exports.removeClass = removeClass;
exports.isVisible = isVisible;
exports.prepend = prepend;
exports.append = append;
exports.detach = detach;
exports.remove = remove;
exports.attributes = attributes;
exports.select = select;
exports.selectAll = selectAll;
exports.closest = closest;
exports.siblings = siblings;
exports.getAttributeOrDefault = getAttributeOrDefault;
exports.setStyleAttribute = setStyleAttribute;
exports.classList = classList;
exports.matches = matches;
exports.includeInnerHTML = includeInnerHTML;
exports.containsClass = containsClass;
exports.cloneNode = cloneNode;
exports.Observer = Observer;
exports.SanitizeHtmlHelper = SanitizeHtmlHelper;
exports.registerLicense = registerLicense;
exports.validateLicense = validateLicense;
exports.getVersion = getVersion;

return exports;

}({}));


/***/ }),

/***/ "./resources/20.1.61/Scripts/navigationsbase.js":
/*!******************************************************!*\
  !*** ./resources/20.1.61/Scripts/navigationsbase.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.sf = window.sf || {};
var navigationsbase = (function (exports) {
'use strict';

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
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
var CLS_ROOT = 'e-hscroll';
var CLS_RTL = 'e-rtl';
var CLS_DISABLE = 'e-overlay';
var CLS_HSCROLLBAR = 'e-hscroll-bar';
var CLS_HSCROLLCON = 'e-hscroll-content';
var CLS_NAVARROW = 'e-nav-arrow';
var CLS_NAVRIGHTARROW = 'e-nav-right-arrow';
var CLS_NAVLEFTARROW = 'e-nav-left-arrow';
var CLS_HSCROLLNAV = 'e-scroll-nav';
var CLS_HSCROLLNAVRIGHT = 'e-scroll-right-nav';
var CLS_HSCROLLNAVLEFT = 'e-scroll-left-nav';
var CLS_DEVICE = 'e-scroll-device';
var CLS_OVERLAY = 'e-scroll-overlay';
var CLS_RIGHTOVERLAY = 'e-scroll-right-overlay';
var CLS_LEFTOVERLAY = 'e-scroll-left-overlay';
var OVERLAY_MAXWID = 40;
/**
 * HScroll module is introduces horizontal scroller when content exceeds the current viewing area.
 * It can be useful for the components like Toolbar, Tab which needs horizontal scrolling alone.
 * Hidden content can be view by touch moving or icon click.
 * ```html
 * <div id="scroll"/>
 * <script>
 *   var scrollObj = new HScroll();
 *   scrollObj.appendTo("#scroll");
 * </script>
 * ```
 */
var HScroll = /** @class */ (function (_super) {
    __extends(HScroll, _super);
    /**
     * Initializes a new instance of the HScroll class.
     *
     * @param {HScrollModel} options  - Specifies HScroll model properties as options.
     * @param {string | HTMLElement} element  - Specifies the element for which horizontal scrolling applies.
     */
    function HScroll(options, element) {
        return _super.call(this, options, element) || this;
    }
    /**
     * Initialize the event handler
     *
     * @private
     * @returns {void}
     */
    HScroll.prototype.preRender = function () {
        this.browser = sf.base.Browser.info.name;
        this.browserCheck = this.browser === 'mozilla';
        this.isDevice = sf.base.Browser.isDevice;
        this.customStep = true;
        var element = this.element;
        this.ieCheck = this.browser === 'edge' || this.browser === 'msie';
        this.initialize();
        if (element.id === '') {
            element.id = sf.base.getUniqueID('hscroll');
            this.uniqueId = true;
        }
        element.style.display = 'block';
        if (this.enableRtl) {
            element.classList.add(CLS_RTL);
        }
    };
    /**
     * To Initialize the horizontal scroll  rendering
     *
     * @private
     * @returns {void}
     */
    HScroll.prototype.render = function () {
        this.touchModule = new sf.base.Touch(this.element, { scroll: this.touchHandler.bind(this), swipe: this.swipeHandler.bind(this) });
        sf.base.EventHandler.add(this.scrollEle, 'scroll', this.scrollHandler, this);
        if (!this.isDevice) {
            this.createNavIcon(this.element);
        }
        else {
            this.element.classList.add(CLS_DEVICE);
            this.createOverlay(this.element);
        }
        this.setScrollState();
    };
    HScroll.prototype.setScrollState = function () {
        if (sf.base.isNullOrUndefined(this.scrollStep) || this.scrollStep < 0) {
            this.scrollStep = this.scrollEle.offsetWidth;
            this.customStep = false;
        }
        else {
            this.customStep = true;
        }
    };
    HScroll.prototype.initialize = function () {
        var scrollEle = this.createElement('div', { className: CLS_HSCROLLCON });
        var scrollDiv = this.createElement('div', { className: CLS_HSCROLLBAR });
        scrollDiv.setAttribute('tabindex', '-1');
        var ele = this.element;
        var innerEle = [].slice.call(ele.children);
        for (var _i = 0, innerEle_1 = innerEle; _i < innerEle_1.length; _i++) {
            var ele_1 = innerEle_1[_i];
            scrollEle.appendChild(ele_1);
        }
        scrollDiv.appendChild(scrollEle);
        ele.appendChild(scrollDiv);
        scrollDiv.style.overflowX = 'hidden';
        this.scrollEle = scrollDiv;
        this.scrollItems = scrollEle;
    };
    HScroll.prototype.getPersistData = function () {
        var keyEntity = ['scrollStep'];
        return this.addOnPersist(keyEntity);
    };
    /**
     * Returns the current module name.
     *
     * @returns {string} - It returns the current module name.
     * @private
     */
    HScroll.prototype.getModuleName = function () {
        return 'hScroll';
    };
    /**
     * Removes the control from the DOM and also removes all its related events.
     *
     * @returns {void}
     */
    HScroll.prototype.destroy = function () {
        var ele = this.element;
        ele.style.display = '';
        ele.classList.remove(CLS_ROOT);
        ele.classList.remove(CLS_DEVICE);
        var nav = sf.base.selectAll('.e-' + ele.id + '_nav.' + CLS_HSCROLLNAV, ele);
        var overlay = sf.base.selectAll('.' + CLS_OVERLAY, ele);
        [].slice.call(overlay).forEach(function (ele) {
            sf.base.detach(ele);
        });
        for (var _i = 0, _a = [].slice.call(this.scrollItems.children); _i < _a.length; _i++) {
            var elem = _a[_i];
            ele.appendChild(elem);
        }
        if (this.uniqueId) {
            this.element.removeAttribute('id');
        }
        sf.base.detach(this.scrollEle);
        if (nav.length > 0) {
            sf.base.detach(nav[0]);
            if (!sf.base.isNullOrUndefined(nav[1])) {
                sf.base.detach(nav[1]);
            }
        }
        sf.base.EventHandler.remove(this.scrollEle, 'scroll', this.scrollHandler);
        this.touchModule.destroy();
        this.touchModule = null;
        _super.prototype.destroy.call(this);
    };
    /**
     * Specifies the value to disable/enable the HScroll component.
     * When set to `true` , the component will be disabled.
     *
     * @param  {boolean} value - Based on this Boolean value, HScroll will be enabled (false) or disabled (true).
     * @returns {void}.
     */
    HScroll.prototype.disable = function (value) {
        var navEles = sf.base.selectAll('.e-scroll-nav:not(.' + CLS_DISABLE + ')', this.element);
        if (value) {
            this.element.classList.add(CLS_DISABLE);
        }
        else {
            this.element.classList.remove(CLS_DISABLE);
        }
        [].slice.call(navEles).forEach(function (el) {
            el.setAttribute('tabindex', !value ? '0' : '-1');
        });
    };
    HScroll.prototype.createOverlay = function (element) {
        var id = element.id.concat('_nav');
        var rightOverlayEle = this.createElement('div', { className: CLS_OVERLAY + ' ' + CLS_RIGHTOVERLAY });
        var clsRight = 'e-' + element.id.concat('_nav ' + CLS_HSCROLLNAV + ' ' + CLS_HSCROLLNAVRIGHT);
        var rightEle = this.createElement('div', { id: id.concat('_right'), className: clsRight });
        var navItem = this.createElement('div', { className: CLS_NAVRIGHTARROW + ' ' + CLS_NAVARROW + ' e-icons' });
        rightEle.appendChild(navItem);
        var leftEle = this.createElement('div', { className: CLS_OVERLAY + ' ' + CLS_LEFTOVERLAY });
        if (this.ieCheck) {
            rightEle.classList.add('e-ie-align');
        }
        element.appendChild(rightOverlayEle);
        element.appendChild(rightEle);
        element.insertBefore(leftEle, element.firstChild);
        this.eventBinding([rightEle]);
    };
    HScroll.prototype.createNavIcon = function (element) {
        var id = element.id.concat('_nav');
        var clsRight = 'e-' + element.id.concat('_nav ' + CLS_HSCROLLNAV + ' ' + CLS_HSCROLLNAVRIGHT);
        var rightAttributes = { 'role': 'button', 'id': id.concat('_right'), 'aria-label': 'Scroll right' };
        var nav = this.createElement('div', { className: clsRight, attrs: rightAttributes });
        nav.setAttribute('aria-disabled', 'false');
        var navItem = this.createElement('div', { className: CLS_NAVRIGHTARROW + ' ' + CLS_NAVARROW + ' e-icons' });
        var clsLeft = 'e-' + element.id.concat('_nav ' + CLS_HSCROLLNAV + ' ' + CLS_HSCROLLNAVLEFT);
        var leftAttributes = { 'role': 'button', 'id': id.concat('_left'), 'aria-label': 'Scroll left' };
        var navEle = this.createElement('div', { className: clsLeft + ' ' + CLS_DISABLE, attrs: leftAttributes });
        navEle.setAttribute('aria-disabled', 'true');
        var navLeftItem = this.createElement('div', { className: CLS_NAVLEFTARROW + ' ' + CLS_NAVARROW + ' e-icons' });
        navEle.appendChild(navLeftItem);
        nav.appendChild(navItem);
        element.appendChild(nav);
        element.insertBefore(navEle, element.firstChild);
        if (this.ieCheck) {
            nav.classList.add('e-ie-align');
            navEle.classList.add('e-ie-align');
        }
        this.eventBinding([nav, navEle]);
    };
    HScroll.prototype.onKeyPress = function (e) {
        var _this = this;
        if (e.key === 'Enter') {
            var timeoutFun_1 = function () {
                _this.keyTimeout = true;
                _this.eleScrolling(10, e.target, true);
            };
            this.keyTimer = window.setTimeout(function () {
                timeoutFun_1();
            }, 100);
        }
    };
    HScroll.prototype.onKeyUp = function (e) {
        if (e.key !== 'Enter') {
            return;
        }
        if (this.keyTimeout) {
            this.keyTimeout = false;
        }
        else {
            e.target.click();
        }
        clearTimeout(this.keyTimer);
    };
    HScroll.prototype.eventBinding = function (ele) {
        var _this = this;
        [].slice.call(ele).forEach(function (el) {
            new sf.base.Touch(el, { tapHold: _this.tabHoldHandler.bind(_this), tapHoldThreshold: 500 });
            el.addEventListener('keydown', _this.onKeyPress.bind(_this));
            el.addEventListener('keyup', _this.onKeyUp.bind(_this));
            el.addEventListener('mouseup', _this.repeatScroll.bind(_this));
            el.addEventListener('touchend', _this.repeatScroll.bind(_this));
            el.addEventListener('contextmenu', function (e) {
                e.preventDefault();
            });
            sf.base.EventHandler.add(el, 'click', _this.clickEventHandler, _this);
        });
    };
    HScroll.prototype.repeatScroll = function () {
        clearInterval(this.timeout);
    };
    HScroll.prototype.tabHoldHandler = function (e) {
        var _this = this;
        var trgt = e.originalEvent.target;
        trgt = this.contains(trgt, CLS_HSCROLLNAV) ? trgt.firstElementChild : trgt;
        var scrollDis = 10;
        var timeoutFun = function () {
            _this.eleScrolling(scrollDis, trgt, true);
        };
        this.timeout = window.setInterval(function () {
            timeoutFun();
        }, 50);
    };
    HScroll.prototype.contains = function (ele, className) {
        return ele.classList.contains(className);
    };
    HScroll.prototype.eleScrolling = function (scrollDis, trgt, isContinuous) {
        var rootEle = this.element;
        var classList$$1 = trgt.classList;
        if (classList$$1.contains(CLS_HSCROLLNAV)) {
            classList$$1 = trgt.querySelector('.' + CLS_NAVARROW).classList;
        }
        if (this.contains(rootEle, CLS_RTL) && this.browserCheck) {
            scrollDis = -scrollDis;
        }
        if ((!this.contains(rootEle, CLS_RTL) || this.browserCheck) || this.ieCheck) {
            if (classList$$1.contains(CLS_NAVRIGHTARROW)) {
                this.frameScrollRequest(scrollDis, 'add', isContinuous);
            }
            else {
                this.frameScrollRequest(scrollDis, '', isContinuous);
            }
        }
        else {
            if (classList$$1.contains(CLS_NAVLEFTARROW)) {
                this.frameScrollRequest(scrollDis, 'add', isContinuous);
            }
            else {
                this.frameScrollRequest(scrollDis, '', isContinuous);
            }
        }
    };
    HScroll.prototype.clickEventHandler = function (e) {
        this.eleScrolling(this.scrollStep, e.target, false);
    };
    HScroll.prototype.swipeHandler = function (e) {
        var swipeEle = this.scrollEle;
        var distance;
        if (e.velocity <= 1) {
            distance = e.distanceX / (e.velocity * 10);
        }
        else {
            distance = e.distanceX / e.velocity;
        }
        var start = 0.5;
        var animate = function () {
            var step = Math.sin(start);
            if (step <= 0) {
                window.cancelAnimationFrame(step);
            }
            else {
                if (e.swipeDirection === 'Left') {
                    swipeEle.scrollLeft += distance * step;
                }
                else if (e.swipeDirection === 'Right') {
                    swipeEle.scrollLeft -= distance * step;
                }
                start -= 0.5;
                window.requestAnimationFrame(animate);
            }
        };
        animate();
    };
    HScroll.prototype.scrollUpdating = function (scrollVal, action) {
        if (action === 'add') {
            this.scrollEle.scrollLeft += scrollVal;
        }
        else {
            this.scrollEle.scrollLeft -= scrollVal;
        }
    };
    HScroll.prototype.frameScrollRequest = function (scrollVal, action, isContinuous) {
        var _this = this;
        var step = 10;
        if (isContinuous) {
            this.scrollUpdating(scrollVal, action);
            return;
        }
        if (!this.customStep) {
            [].slice.call(sf.base.selectAll('.' + CLS_OVERLAY, this.element)).forEach(function (el) {
                scrollVal -= el.offsetWidth;
            });
        }
        var animate = function () {
            var scrollValue;
            var scrollStep;
            if (_this.contains(_this.element, CLS_RTL) && _this.browserCheck) {
                scrollValue = -scrollVal;
                scrollStep = -step;
            }
            else {
                scrollValue = scrollVal;
                scrollStep = step;
            }
            if (scrollValue < step) {
                window.cancelAnimationFrame(scrollStep);
            }
            else {
                _this.scrollUpdating(scrollStep, action);
                scrollVal -= scrollStep;
                window.requestAnimationFrame(animate);
            }
        };
        animate();
    };
    HScroll.prototype.touchHandler = function (e) {
        var ele = this.scrollEle;
        var distance = e.distanceX;
        if ((this.ieCheck) && this.contains(this.element, CLS_RTL)) {
            distance = -distance;
        }
        if (e.scrollDirection === 'Left') {
            ele.scrollLeft = ele.scrollLeft + distance;
        }
        else if (e.scrollDirection === 'Right') {
            ele.scrollLeft = ele.scrollLeft - distance;
        }
    };
    HScroll.prototype.arrowDisabling = function (addDisable, removeDisable) {
        if (this.isDevice) {
            var arrowEle = sf.base.isNullOrUndefined(addDisable) ? removeDisable : addDisable;
            var arrowIcon = arrowEle.querySelector('.' + CLS_NAVARROW);
            if (sf.base.isNullOrUndefined(addDisable)) {
                sf.base.classList(arrowIcon, [CLS_NAVRIGHTARROW], [CLS_NAVLEFTARROW]);
            }
            else {
                sf.base.classList(arrowIcon, [CLS_NAVLEFTARROW], [CLS_NAVRIGHTARROW]);
            }
        }
        else if (addDisable && removeDisable) {
            addDisable.classList.add(CLS_DISABLE);
            addDisable.setAttribute('aria-disabled', 'true');
            addDisable.removeAttribute('tabindex');
            removeDisable.classList.remove(CLS_DISABLE);
            removeDisable.setAttribute('aria-disabled', 'false');
            removeDisable.setAttribute('tabindex', '0');
        }
        this.repeatScroll();
    };
    HScroll.prototype.scrollHandler = function (e) {
        var target = e.target;
        var width = target.offsetWidth;
        var rootEle = this.element;
        var navLeftEle = this.element.querySelector('.' + CLS_HSCROLLNAVLEFT);
        var navRightEle = this.element.querySelector('.' + CLS_HSCROLLNAVRIGHT);
        var leftOverlay = this.element.querySelector('.' + CLS_LEFTOVERLAY);
        var rightOverlay = this.element.querySelector('.' + CLS_RIGHTOVERLAY);
        var scrollLeft = target.scrollLeft;
        if (scrollLeft <= 0) {
            scrollLeft = -scrollLeft;
        }
        if (this.isDevice) {
            if (this.enableRtl && !(this.browserCheck || this.ieCheck)) {
                leftOverlay = this.element.querySelector('.' + CLS_RIGHTOVERLAY);
                rightOverlay = this.element.querySelector('.' + CLS_LEFTOVERLAY);
            }
            if (scrollLeft < OVERLAY_MAXWID) {
                leftOverlay.style.width = scrollLeft + 'px';
            }
            else {
                leftOverlay.style.width = '40px';
            }
            if ((target.scrollWidth - Math.ceil(width + scrollLeft)) < OVERLAY_MAXWID) {
                rightOverlay.style.width = (target.scrollWidth - Math.ceil(width + scrollLeft)) + 'px';
            }
            else {
                rightOverlay.style.width = '40px';
            }
        }
        if (scrollLeft === 0) {
            this.arrowDisabling(navLeftEle, navRightEle);
        }
        else if (Math.ceil(width + scrollLeft + .1) >= target.scrollWidth) {
            this.arrowDisabling(navRightEle, navLeftEle);
        }
        else {
            var disEle = this.element.querySelector('.' + CLS_HSCROLLNAV + '.' + CLS_DISABLE);
            if (disEle) {
                disEle.classList.remove(CLS_DISABLE);
                disEle.setAttribute('aria-disabled', 'false');
                disEle.setAttribute('tabindex', '0');
            }
        }
    };
    /**
     * Gets called when the model property changes.The data that describes the old and new values of property that changed.
     *
     * @param  {HScrollModel} newProp - It contains the new value of data.
     * @param  {HScrollModel} oldProp - It contains the old value of data.
     * @returns {void}
     * @private
     */
    HScroll.prototype.onPropertyChanged = function (newProp, oldProp) {
        for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
            var prop = _a[_i];
            switch (prop) {
                case 'scrollStep':
                    this.setScrollState();
                    break;
                case 'enableRtl':
                    newProp.enableRtl ? this.element.classList.add(CLS_RTL) : this.element.classList.remove(CLS_RTL);
                    break;
            }
        }
    };
    __decorate([
        sf.base.Property(null)
    ], HScroll.prototype, "scrollStep", void 0);
    HScroll = __decorate([
        sf.base.NotifyPropertyChanges
    ], HScroll);
    return HScroll;
}(sf.base.Component));

var __extends$1 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var CLS_ROOT$1 = 'e-vscroll';
var CLS_RTL$1 = 'e-rtl';
var CLS_DISABLE$1 = 'e-overlay';
var CLS_VSCROLLBAR = 'e-vscroll-bar';
var CLS_VSCROLLCON = 'e-vscroll-content';
var CLS_NAVARROW$1 = 'e-nav-arrow';
var CLS_NAVUPARROW = 'e-nav-up-arrow';
var CLS_NAVDOWNARROW = 'e-nav-down-arrow';
var CLS_VSCROLLNAV = 'e-scroll-nav';
var CLS_VSCROLLNAVUP = 'e-scroll-up-nav';
var CLS_VSCROLLNAVDOWN = 'e-scroll-down-nav';
var CLS_DEVICE$1 = 'e-scroll-device';
var CLS_OVERLAY$1 = 'e-scroll-overlay';
var CLS_UPOVERLAY = 'e-scroll-up-overlay';
var CLS_DOWNOVERLAY = 'e-scroll-down-overlay';
var OVERLAY_MAXWID$1 = 40;
/**
 * VScroll module is introduces vertical scroller when content exceeds the current viewing area.
 * It can be useful for the components like Toolbar, Tab which needs vertical scrolling alone.
 * Hidden content can be view by touch moving or icon click.
 * ```html
 * <div id="scroll"/>
 * <script>
 *   var scrollObj = new VScroll();
 *   scrollObj.appendTo("#scroll");
 * </script>
 * ```
 */
var VScroll = /** @class */ (function (_super) {
    __extends$1(VScroll, _super);
    /**
     * Initializes a new instance of the VScroll class.
     *
     * @param {VScrollModel} options  - Specifies VScroll model properties as options.
     * @param {string | HTMLElement} element  - Specifies the element for which vertical scrolling applies.
     */
    function VScroll(options, element) {
        return _super.call(this, options, element) || this;
    }
    /**
     * Initialize the event handler
     *
     * @private
     * @returns {void}
     */
    VScroll.prototype.preRender = function () {
        this.browser = sf.base.Browser.info.name;
        this.browserCheck = this.browser === 'mozilla';
        this.isDevice = sf.base.Browser.isDevice;
        this.customStep = true;
        var ele = this.element;
        this.ieCheck = this.browser === 'edge' || this.browser === 'msie';
        this.initialize();
        if (ele.id === '') {
            ele.id = sf.base.getUniqueID('vscroll');
            this.uniqueId = true;
        }
        ele.style.display = 'block';
        if (this.enableRtl) {
            ele.classList.add(CLS_RTL$1);
        }
    };
    /**
     * To Initialize the vertical scroll rendering
     *
     * @private
     * @returns {void}
     */
    VScroll.prototype.render = function () {
        this.touchModule = new sf.base.Touch(this.element, { scroll: this.touchHandler.bind(this), swipe: this.swipeHandler.bind(this) });
        sf.base.EventHandler.add(this.scrollEle, 'scroll', this.scrollEventHandler, this);
        if (!this.isDevice) {
            this.createNavIcon(this.element);
        }
        else {
            this.element.classList.add(CLS_DEVICE$1);
            this.createOverlayElement(this.element);
        }
        this.setScrollState();
        sf.base.EventHandler.add(this.element, 'wheel', this.wheelEventHandler, this);
    };
    VScroll.prototype.setScrollState = function () {
        if (sf.base.isNullOrUndefined(this.scrollStep) || this.scrollStep < 0) {
            this.scrollStep = this.scrollEle.offsetHeight;
            this.customStep = false;
        }
        else {
            this.customStep = true;
        }
    };
    VScroll.prototype.initialize = function () {
        var scrollCnt = sf.base.createElement('div', { className: CLS_VSCROLLCON });
        var scrollBar = sf.base.createElement('div', { className: CLS_VSCROLLBAR });
        scrollBar.setAttribute('tabindex', '-1');
        var ele = this.element;
        var innerEle = [].slice.call(ele.children);
        for (var _i = 0, innerEle_1 = innerEle; _i < innerEle_1.length; _i++) {
            var ele_1 = innerEle_1[_i];
            scrollCnt.appendChild(ele_1);
        }
        scrollBar.appendChild(scrollCnt);
        ele.appendChild(scrollBar);
        scrollBar.style.overflow = 'hidden';
        this.scrollEle = scrollBar;
        this.scrollItems = scrollCnt;
    };
    VScroll.prototype.getPersistData = function () {
        var keyEntity = ['scrollStep'];
        return this.addOnPersist(keyEntity);
    };
    /**
     * Returns the current module name.
     *
     * @returns {string} - It returns the current module name.
     * @private
     */
    VScroll.prototype.getModuleName = function () {
        return 'vScroll';
    };
    /**
     * Removes the control from the DOM and also removes all its related events.
     *
     * @returns {void}
     */
    VScroll.prototype.destroy = function () {
        var el = this.element;
        el.style.display = '';
        sf.base.removeClass([this.element], [CLS_ROOT$1, CLS_DEVICE$1]);
        var navs = sf.base.selectAll('.e-' + el.id + '_nav.' + CLS_VSCROLLNAV, el);
        var overlays = sf.base.selectAll('.' + CLS_OVERLAY$1, el);
        [].slice.call(overlays).forEach(function (ele) {
            sf.base.detach(ele);
        });
        for (var _i = 0, _a = [].slice.call(this.scrollItems.children); _i < _a.length; _i++) {
            var elem = _a[_i];
            el.appendChild(elem);
        }
        if (this.uniqueId) {
            this.element.removeAttribute('id');
        }
        sf.base.detach(this.scrollEle);
        if (navs.length > 0) {
            sf.base.detach(navs[0]);
            if (!sf.base.isNullOrUndefined(navs[1])) {
                sf.base.detach(navs[1]);
            }
        }
        sf.base.EventHandler.remove(this.scrollEle, 'scroll', this.scrollEventHandler);
        this.touchModule.destroy();
        this.touchModule = null;
        _super.prototype.destroy.call(this);
    };
    /**
     * Specifies the value to disable/enable the VScroll component.
     * When set to `true` , the component will be disabled.
     *
     * @param  {boolean} value - Based on this Boolean value, VScroll will be enabled (false) or disabled (true).
     * @returns {void}.
     */
    VScroll.prototype.disable = function (value) {
        var navEle = sf.base.selectAll('.e-scroll-nav:not(.' + CLS_DISABLE$1 + ')', this.element);
        if (value) {
            this.element.classList.add(CLS_DISABLE$1);
        }
        else {
            this.element.classList.remove(CLS_DISABLE$1);
        }
        [].slice.call(navEle).forEach(function (el) {
            el.setAttribute('tabindex', !value ? '0' : '-1');
        });
    };
    VScroll.prototype.createOverlayElement = function (element) {
        var id = element.id.concat('_nav');
        var downOverlayEle = sf.base.createElement('div', { className: CLS_OVERLAY$1 + ' ' + CLS_DOWNOVERLAY });
        var clsDown = 'e-' + element.id.concat('_nav ' + CLS_VSCROLLNAV + ' ' + CLS_VSCROLLNAVDOWN);
        var downEle = sf.base.createElement('div', { id: id.concat('down'), className: clsDown });
        var navItem = sf.base.createElement('div', { className: CLS_NAVDOWNARROW + ' ' + CLS_NAVARROW$1 + ' e-icons' });
        downEle.appendChild(navItem);
        var upEle = sf.base.createElement('div', { className: CLS_OVERLAY$1 + ' ' + CLS_UPOVERLAY });
        if (this.ieCheck) {
            downEle.classList.add('e-ie-align');
        }
        element.appendChild(downOverlayEle);
        element.appendChild(downEle);
        element.insertBefore(upEle, element.firstChild);
        this.eventBinding([downEle]);
    };
    VScroll.prototype.createNavIcon = function (element) {
        var id = element.id.concat('_nav');
        var clsDown = 'e-' + element.id.concat('_nav ' + CLS_VSCROLLNAV + ' ' + CLS_VSCROLLNAVDOWN);
        var nav = sf.base.createElement('div', { id: id.concat('_down'), className: clsDown });
        nav.setAttribute('aria-disabled', 'false');
        var navItem = sf.base.createElement('div', { className: CLS_NAVDOWNARROW + ' ' + CLS_NAVARROW$1 + ' e-icons' });
        var clsUp = 'e-' + element.id.concat('_nav ' + CLS_VSCROLLNAV + ' ' + CLS_VSCROLLNAVUP);
        var navElement = sf.base.createElement('div', { id: id.concat('_up'), className: clsUp + ' ' + CLS_DISABLE$1 });
        navElement.setAttribute('aria-disabled', 'true');
        var navUpItem = sf.base.createElement('div', { className: CLS_NAVUPARROW + ' ' + CLS_NAVARROW$1 + ' e-icons' });
        navElement.appendChild(navUpItem);
        nav.appendChild(navItem);
        nav.setAttribute('tabindex', '0');
        element.appendChild(nav);
        element.insertBefore(navElement, element.firstChild);
        if (this.ieCheck) {
            nav.classList.add('e-ie-align');
            navElement.classList.add('e-ie-align');
        }
        this.eventBinding([nav, navElement]);
    };
    VScroll.prototype.onKeyPress = function (ev) {
        var _this = this;
        if (ev.key === 'Enter') {
            var timeoutFun_1 = function () {
                _this.keyTimeout = true;
                _this.eleScrolling(10, ev.target, true);
            };
            this.keyTimer = window.setTimeout(function () {
                timeoutFun_1();
            }, 100);
        }
    };
    VScroll.prototype.onKeyUp = function (ev) {
        if (ev.key !== 'Enter') {
            return;
        }
        if (this.keyTimeout) {
            this.keyTimeout = false;
        }
        else {
            ev.target.click();
        }
        clearTimeout(this.keyTimer);
    };
    VScroll.prototype.eventBinding = function (element) {
        var _this = this;
        [].slice.call(element).forEach(function (ele) {
            new sf.base.Touch(ele, { tapHold: _this.tabHoldHandler.bind(_this), tapHoldThreshold: 500 });
            ele.addEventListener('keydown', _this.onKeyPress.bind(_this));
            ele.addEventListener('keyup', _this.onKeyUp.bind(_this));
            ele.addEventListener('mouseup', _this.repeatScroll.bind(_this));
            ele.addEventListener('touchend', _this.repeatScroll.bind(_this));
            ele.addEventListener('contextmenu', function (e) {
                e.preventDefault();
            });
            sf.base.EventHandler.add(ele, 'click', _this.clickEventHandler, _this);
        });
    };
    VScroll.prototype.repeatScroll = function () {
        clearInterval(this.timeout);
    };
    VScroll.prototype.tabHoldHandler = function (ev) {
        var _this = this;
        var trgt = ev.originalEvent.target;
        trgt = this.contains(trgt, CLS_VSCROLLNAV) ? trgt.firstElementChild : trgt;
        var scrollDistance = 10;
        var timeoutFun = function () {
            _this.eleScrolling(scrollDistance, trgt, true);
        };
        this.timeout = window.setInterval(function () {
            timeoutFun();
        }, 50);
    };
    VScroll.prototype.contains = function (element, className) {
        return element.classList.contains(className);
    };
    VScroll.prototype.eleScrolling = function (scrollDis, trgt, isContinuous) {
        var classList$$1 = trgt.classList;
        if (classList$$1.contains(CLS_VSCROLLNAV)) {
            classList$$1 = trgt.querySelector('.' + CLS_NAVARROW$1).classList;
        }
        if (classList$$1.contains(CLS_NAVDOWNARROW)) {
            this.frameScrollRequest(scrollDis, 'add', isContinuous);
        }
        else if (classList$$1.contains(CLS_NAVUPARROW)) {
            this.frameScrollRequest(scrollDis, '', isContinuous);
        }
    };
    VScroll.prototype.clickEventHandler = function (event) {
        this.eleScrolling(this.scrollStep, event.target, false);
    };
    VScroll.prototype.wheelEventHandler = function (e) {
        e.preventDefault();
        this.frameScrollRequest(this.scrollStep, (e.deltaY > 0 ? 'add' : ''), false);
    };
    VScroll.prototype.swipeHandler = function (e) {
        var swipeElement = this.scrollEle;
        var distance;
        if (e.velocity <= 1) {
            distance = e.distanceY / (e.velocity * 10);
        }
        else {
            distance = e.distanceY / e.velocity;
        }
        var start = 0.5;
        var animate = function () {
            var step = Math.sin(start);
            if (step <= 0) {
                window.cancelAnimationFrame(step);
            }
            else {
                if (e.swipeDirection === 'Up') {
                    swipeElement.scrollTop += distance * step;
                }
                else if (e.swipeDirection === 'Down') {
                    swipeElement.scrollTop -= distance * step;
                }
                start -= 0.02;
                window.requestAnimationFrame(animate);
            }
        };
        animate();
    };
    VScroll.prototype.scrollUpdating = function (scrollVal, action) {
        if (action === 'add') {
            this.scrollEle.scrollTop += scrollVal;
        }
        else {
            this.scrollEle.scrollTop -= scrollVal;
        }
    };
    VScroll.prototype.frameScrollRequest = function (scrollValue, action, isContinuous) {
        var _this = this;
        var step = 10;
        if (isContinuous) {
            this.scrollUpdating(scrollValue, action);
            return;
        }
        if (!this.customStep) {
            [].slice.call(sf.base.selectAll('.' + CLS_OVERLAY$1, this.element)).forEach(function (el) {
                scrollValue -= el.offsetHeight;
            });
        }
        var animate = function () {
            if (scrollValue < step) {
                window.cancelAnimationFrame(step);
            }
            else {
                _this.scrollUpdating(step, action);
                scrollValue -= step;
                window.requestAnimationFrame(animate);
            }
        };
        animate();
    };
    VScroll.prototype.touchHandler = function (e) {
        var el = this.scrollEle;
        var distance = e.distanceY;
        if (e.scrollDirection === 'Up') {
            el.scrollTop = el.scrollTop + distance;
        }
        else if (e.scrollDirection === 'Down') {
            el.scrollTop = el.scrollTop - distance;
        }
    };
    VScroll.prototype.arrowDisabling = function (addDisableCls, removeDisableCls) {
        if (this.isDevice) {
            var arrowEle = sf.base.isNullOrUndefined(addDisableCls) ? removeDisableCls : addDisableCls;
            var arrowIcon = arrowEle.querySelector('.' + CLS_NAVARROW$1);
            if (sf.base.isNullOrUndefined(addDisableCls)) {
                sf.base.classList(arrowIcon, [CLS_NAVDOWNARROW], [CLS_NAVUPARROW]);
            }
            else {
                sf.base.classList(arrowIcon, [CLS_NAVUPARROW], [CLS_NAVDOWNARROW]);
            }
        }
        else {
            addDisableCls.classList.add(CLS_DISABLE$1);
            addDisableCls.setAttribute('aria-disabled', 'true');
            addDisableCls.removeAttribute('tabindex');
            removeDisableCls.classList.remove(CLS_DISABLE$1);
            removeDisableCls.setAttribute('aria-disabled', 'false');
            removeDisableCls.setAttribute('tabindex', '0');
        }
        this.repeatScroll();
    };
    VScroll.prototype.scrollEventHandler = function (e) {
        var target = e.target;
        var height = target.offsetHeight;
        var navUpEle = this.element.querySelector('.' + CLS_VSCROLLNAVUP);
        var navDownEle = this.element.querySelector('.' + CLS_VSCROLLNAVDOWN);
        var upOverlay = this.element.querySelector('.' + CLS_UPOVERLAY);
        var downOverlay = this.element.querySelector('.' + CLS_DOWNOVERLAY);
        var scrollTop = target.scrollTop;
        if (scrollTop <= 0) {
            scrollTop = -scrollTop;
        }
        if (this.isDevice) {
            if (scrollTop < OVERLAY_MAXWID$1) {
                upOverlay.style.height = scrollTop + 'px';
            }
            else {
                upOverlay.style.height = '40px';
            }
            if ((target.scrollHeight - Math.ceil(height + scrollTop)) < OVERLAY_MAXWID$1) {
                downOverlay.style.height = (target.scrollHeight - Math.ceil(height + scrollTop)) + 'px';
            }
            else {
                downOverlay.style.height = '40px';
            }
        }
        if (scrollTop === 0) {
            this.arrowDisabling(navUpEle, navDownEle);
        }
        else if (Math.ceil(height + scrollTop + .1) >= target.scrollHeight) {
            this.arrowDisabling(navDownEle, navUpEle);
        }
        else {
            var disEle = this.element.querySelector('.' + CLS_VSCROLLNAV + '.' + CLS_DISABLE$1);
            if (disEle) {
                disEle.classList.remove(CLS_DISABLE$1);
                disEle.setAttribute('aria-disabled', 'false');
                disEle.setAttribute('tabindex', '0');
            }
        }
    };
    /**
     * Gets called when the model property changes.The data that describes the old and new values of property that changed.
     *
     * @param  {VScrollModel} newProp - It contains the new value of data.
     * @param  {VScrollModel} oldProp - It contains the old value of data.
     * @returns {void}
     * @private
     */
    VScroll.prototype.onPropertyChanged = function (newProp, oldProp) {
        for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
            var prop = _a[_i];
            switch (prop) {
                case 'scrollStep':
                    this.setScrollState();
                    break;
                case 'enableRtl':
                    if (newProp.enableRtl) {
                        this.element.classList.add(CLS_RTL$1);
                    }
                    else {
                        this.element.classList.remove(CLS_RTL$1);
                    }
                    break;
            }
        }
    };
    __decorate$1([
        sf.base.Property(null)
    ], VScroll.prototype, "scrollStep", void 0);
    VScroll = __decorate$1([
        sf.base.NotifyPropertyChanges
    ], VScroll);
    return VScroll;
}(sf.base.Component));

/**
 * Used to add scroll in menu.
 *
 * @param {createElementType} createElement - Specifies the create element model
 * @param {HTMLElement} container - Specifies the element container
 * @param {HTMLElement} content - Specifies the content element
 * @param {string} scrollType - Specifies the scroll type
 * @param {boolean} enableRtl - Specifies the enable RTL property
 * @param {boolean} offset - Specifies the offset value
 * @returns {HTMLElement} - Element
 * @hidden
 */
function addScrolling(createElement$$1, container, content, scrollType, enableRtl, offset) {
    var containerOffset;
    var contentOffset;
    var parentElem = container.parentElement;
    if (scrollType === 'vscroll') {
        containerOffset = offset || container.getBoundingClientRect().height;
        contentOffset = content.getBoundingClientRect().height;
    }
    else {
        containerOffset = container.getBoundingClientRect().width;
        contentOffset = content.getBoundingClientRect().width;
    }
    if (containerOffset < contentOffset) {
        return createScrollbar(createElement$$1, container, content, scrollType, enableRtl, offset);
    }
    else if (parentElem) {
        var width = parentElem.getBoundingClientRect().width;
        if (width < containerOffset && scrollType === 'hscroll') {
            contentOffset = width;
            container.style.maxWidth = width + 'px';
            return createScrollbar(createElement$$1, container, content, scrollType, enableRtl, offset);
        }
        return content;
    }
    else {
        return content;
    }
}
/**
 * Used to create scroll bar in menu.
 *
 * @param {createElementType} createElement - Specifies the create element model
 * @param {HTMLElement} container - Specifies the element container
 * @param {HTMLElement} content - Specifies the content element
 * @param {string} scrollType - Specifies the scroll type
 * @param {boolean} enableRtl - Specifies the enable RTL property
 * @param {boolean} offset - Specifies the offset value
 * @returns {HTMLElement} - Element
 * @hidden
 */
function createScrollbar(createElement$$1, container, content, scrollType, enableRtl, offset) {
    var scrollEle = createElement$$1('div', { className: 'e-menu-' + scrollType });
    container.appendChild(scrollEle);
    scrollEle.appendChild(content);
    if (offset) {
        scrollEle.style.overflow = 'hidden';
        scrollEle.style.height = offset + 'px';
    }
    else {
        scrollEle.style.maxHeight = container.style.maxHeight;
        container.style.overflow = 'hidden';
    }
    var scrollObj;
    if (scrollType === 'vscroll') {
        scrollObj = new VScroll({ enableRtl: enableRtl }, scrollEle);
        scrollObj.scrollStep = sf.base.select('.e-' + scrollType + '-bar', container).offsetHeight / 2;
    }
    else {
        scrollObj = new HScroll({ enableRtl: enableRtl }, scrollEle);
        scrollObj.scrollStep = sf.base.select('.e-' + scrollType + '-bar', container).offsetWidth;
    }
    return scrollEle;
}
/**
 * Used to destroy the scroll option.
 *
 * @param {VScroll | HScroll} scrollObj - Specifies the scroller object
 * @param {Element} element - Specifies the element
 * @param {HTMLElement} skipEle - Specifies the skip  element
 * @returns {void}
 * @hidden
 */
function destroyScroll(scrollObj, element, skipEle) {
    if (scrollObj) {
        var menu = sf.base.select('.e-menu-parent', element);
        if (menu) {
            if (!skipEle || skipEle === menu) {
                scrollObj.destroy();
                element.parentElement.appendChild(menu);
                sf.base.detach(element);
            }
        }
        else {
            scrollObj.destroy();
            sf.base.detach(element);
        }
    }
}

exports.HScroll = HScroll;
exports.VScroll = VScroll;
exports.addScrolling = addScrolling;
exports.destroyScroll = destroyScroll;

return exports;

});
window.sf.navigations = window.sf.base.extend({}, window.sf.navigations, navigationsbase({}));


/***/ }),

/***/ "./resources/20.1.61/Scripts/popup.js":
/*!********************************************!*\
  !*** ./resources/20.1.61/Scripts/popup.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.sf = window.sf || {};
var sfpopup = (function (exports) {
'use strict';

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
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
/**
 * Specifies the offset position values.
 */
var PositionData = /** @class */ (function (_super) {
    __extends(PositionData, _super);
    function PositionData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        sf.base.Property('left')
    ], PositionData.prototype, "X", void 0);
    __decorate([
        sf.base.Property('top')
    ], PositionData.prototype, "Y", void 0);
    return PositionData;
}(sf.base.ChildProperty));
// don't use space in classNames
var CLASSNAMES = {
    ROOT: 'e-popup',
    RTL: 'e-rtl',
    OPEN: 'e-popup-open',
    CLOSE: 'e-popup-close'
};
/**
 * Represents the Popup Component
 * ```html
 * <div id="popup" style="position:absolute;height:100px;width:100px;">
 * <div style="margin:35px 25px;">Popup Content</div></div>
 * ```
 * ```typescript
 * <script>
 *   var popupObj = new Popup();
 *   popupObj.appendTo("#popup");
 * </script>
 * ```
 */
var Popup = /** @class */ (function (_super) {
    __extends(Popup, _super);
    function Popup(element, options) {
        return _super.call(this, options, element) || this;
    }
    /**
     * Called internally if any of the property value changed.
     *
     * @param {PopupModel} newProp - specifies the new property
     * @param {PopupModel} oldProp - specifies the old property
     * @private
     * @returns {void}
     */
    Popup.prototype.onPropertyChanged = function (newProp, oldProp) {
        for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
            var prop = _a[_i];
            switch (prop) {
                case 'width':
                    sf.base.setStyleAttribute(this.element, { 'width': sf.base.formatUnit(newProp.width) });
                    break;
                case 'height':
                    sf.base.setStyleAttribute(this.element, { 'height': sf.base.formatUnit(newProp.height) });
                    break;
                case 'zIndex':
                    sf.base.setStyleAttribute(this.element, { 'zIndex': newProp.zIndex });
                    break;
                case 'enableRtl':
                    this.setEnableRtl();
                    break;
                case 'position':
                case 'relateTo':
                    this.refreshPosition();
                    break;
                case 'offsetX':
                    // eslint-disable-next-line
                    var x = newProp.offsetX - oldProp.offsetX;
                    this.element.style.left = (parseInt(this.element.style.left, 10) + (x)).toString() + 'px';
                    break;
                case 'offsetY':
                    // eslint-disable-next-line
                    var y = newProp.offsetY - oldProp.offsetY;
                    this.element.style.top = (parseInt(this.element.style.top, 10) + (y)).toString() + 'px';
                    break;
                case 'content':
                    this.setContent();
                    break;
                case 'actionOnScroll':
                    if (newProp.actionOnScroll !== 'none') {
                        this.wireScrollEvents();
                    }
                    else {
                        this.unwireScrollEvents();
                    }
                    break;
            }
        }
    };
    /**
     * gets the Component module name.
     *
     * @returns {void}
     * @private
     */
    Popup.prototype.getModuleName = function () {
        return 'popup';
    };
    /**
     * To resolve if any collision occurs.
     *
     * @returns {void}
     */
    Popup.prototype.resolveCollision = function () {
        this.checkCollision();
    };
    /**
     * gets the persisted state properties of the Component.
     *
     * @returns {void}
     */
    Popup.prototype.getPersistData = function () {
        return this.addOnPersist([]);
    };
    /**
     * To destroy the control.
     *
     * @returns {void}
     */
    Popup.prototype.destroy = function () {
        this.element.classList.remove(CLASSNAMES.ROOT, CLASSNAMES.RTL, CLASSNAMES.OPEN, CLASSNAMES.CLOSE);
        if (this.element.classList.contains('e-popup-open')) {
            this.unwireEvents();
        }
        _super.prototype.destroy.call(this);
    };
    /**
     * To Initialize the control rendering
     *
     * @returns {void}
     * @private
     */
    Popup.prototype.render = function () {
        this.element.classList.add(CLASSNAMES.ROOT);
        var styles = {};
        if (this.zIndex !== 1000) {
            styles.zIndex = this.zIndex;
        }
        if (this.width !== 'auto') {
            styles.width = sf.base.formatUnit(this.width);
        }
        if (this.height !== 'auto') {
            styles.height = sf.base.formatUnit(this.height);
        }
        sf.base.setStyleAttribute(this.element, styles);
        this.fixedParent = false;
        this.setEnableRtl();
        this.setContent();
    };
    Popup.prototype.wireEvents = function () {
        if (sf.base.Browser.isDevice) {
            sf.base.EventHandler.add(window, 'orientationchange', this.orientationOnChange, this);
        }
        if (this.actionOnScroll !== 'none') {
            this.wireScrollEvents();
        }
    };
    Popup.prototype.wireScrollEvents = function () {
        if (this.getRelateToElement()) {
            for (var _i = 0, _a = this.getScrollableParent(this.getRelateToElement()); _i < _a.length; _i++) {
                var parent_1 = _a[_i];
                sf.base.EventHandler.add(parent_1, 'scroll', this.scrollRefresh, this);
            }
        }
    };
    Popup.prototype.unwireEvents = function () {
        if (sf.base.Browser.isDevice) {
            sf.base.EventHandler.remove(window, 'orientationchange', this.orientationOnChange);
        }
        if (this.actionOnScroll !== 'none') {
            this.unwireScrollEvents();
        }
    };
    Popup.prototype.unwireScrollEvents = function () {
        if (this.getRelateToElement()) {
            for (var _i = 0, _a = this.getScrollableParent(this.getRelateToElement()); _i < _a.length; _i++) {
                var parent_2 = _a[_i];
                sf.base.EventHandler.remove(parent_2, 'scroll', this.scrollRefresh);
            }
        }
    };
    Popup.prototype.getRelateToElement = function () {
        var relateToElement = this.relateTo === '' || sf.base.isNullOrUndefined(this.relateTo) ?
            document.body : this.relateTo;
        this.setProperties({ relateTo: relateToElement }, true);
        return ((typeof this.relateTo) === 'string') ?
            document.querySelector(this.relateTo) : this.relateTo;
    };
    Popup.prototype.scrollRefresh = function (e) {
        if (this.actionOnScroll === 'reposition') {
            if (!sf.base.isNullOrUndefined(this.element) && !(this.element.offsetParent === e.target ||
                (this.element.offsetParent && this.element.offsetParent.tagName === 'BODY' &&
                    e.target.parentElement == null))) {
                this.refreshPosition();
            }
        }
        else if (this.actionOnScroll === 'hide') {
            this.hide();
        }
        if (this.actionOnScroll !== 'none') {
            if (this.getRelateToElement()) {
                var targetVisible = this.isElementOnViewport(this.getRelateToElement(), e.target);
                if (!targetVisible && !this.targetInvisibleStatus) {
                    this.trigger('targetExitViewport');
                    this.targetInvisibleStatus = true;
                }
                else if (targetVisible) {
                    this.targetInvisibleStatus = false;
                }
            }
        }
    };
    /**
     * This method is to get the element visibility on viewport when scroll
     * the page. This method will returns true even though 1 px of element
     * part is in visible.
     *
     * @param {HTMLElement} relateToElement - specifies the element
     * @param {HTMLElement} scrollElement - specifies the scroll element
     * @returns {boolean} - retruns the boolean
     */
    // eslint-disable-next-line
    Popup.prototype.isElementOnViewport = function (relateToElement, scrollElement) {
        var scrollParents = this.getScrollableParent(relateToElement);
        for (var parent_3 = 0; parent_3 < scrollParents.length; parent_3++) {
            if (this.isElementVisible(relateToElement, scrollParents[parent_3])) {
                continue;
            }
            else {
                return false;
            }
        }
        return true;
    };
    Popup.prototype.isElementVisible = function (relateToElement, scrollElement) {
        var rect = this.checkGetBoundingClientRect(relateToElement);
        if (!rect.height || !rect.width) {
            return false;
        }
        if (!sf.base.isNullOrUndefined(this.checkGetBoundingClientRect(scrollElement))) {
            var parent_4 = scrollElement.getBoundingClientRect();
            return !(rect.bottom < parent_4.top) &&
                (!(rect.bottom > parent_4.bottom) &&
                    (!(rect.right > parent_4.right) &&
                        !(rect.left < parent_4.left)));
        }
        else {
            var win = window;
            var windowView = {
                top: win.scrollY,
                left: win.scrollX,
                right: win.scrollX + win.outerWidth,
                bottom: win.scrollY + win.outerHeight
            };
            var off = sf.popups.calculatePosition(relateToElement);
            var ele = {
                top: off.top,
                left: off.left,
                right: off.left + rect.width,
                bottom: off.top + rect.height
            };
            var elementView = {
                top: windowView.bottom - ele.top,
                left: windowView.right - ele.left,
                bottom: ele.bottom - windowView.top,
                right: ele.right - windowView.left
            };
            return elementView.top > 0
                && elementView.left > 0
                && elementView.right > 0
                && elementView.bottom > 0;
        }
    };
    /**
     * Initialize the event handler
     *
     * @returns {void}
     * @private
     */
    Popup.prototype.preRender = function () {
        //There is no event handler
    };
    Popup.prototype.setEnableRtl = function () {
        this.reposition();
        // eslint-disable-next-line
        this.enableRtl ? this.element.classList.add(CLASSNAMES.RTL) : this.element.classList.remove(CLASSNAMES.RTL);
    };
    Popup.prototype.setContent = function () {
        if (!sf.base.isNullOrUndefined(this.content)) {
            this.element.innerHTML = '';
            if (typeof (this.content) === 'string') {
                this.element.textContent = this.content;
            }
            else {
                var relateToElem = this.getRelateToElement();
                // eslint-disable-next-line
                var props = this.content.props;
                if (!relateToElem.classList.contains('e-dropdown-btn') || sf.base.isNullOrUndefined(props)) {
                    this.element.appendChild(this.content);
                }
            }
        }
    };
    Popup.prototype.orientationOnChange = function () {
        var _this = this;
        setTimeout(function () {
            _this.refreshPosition();
        }, 200);
    };
    // eslint-disable-next-line
    /**
     * Based on the `relative` element and `offset` values, `Popup` element position will refreshed.
     *
     * @returns {void}
     */
    Popup.prototype.refreshPosition = function (target, collision) {
        if (!sf.base.isNullOrUndefined(target)) {
            this.checkFixedParent(target);
        }
        this.reposition();
        if (!collision) {
            this.checkCollision();
        }
    };
    Popup.prototype.reposition = function () {
        var pos;
        var position;
        var relateToElement = this.getRelateToElement();
        if (typeof this.position.X === 'number' && typeof this.position.Y === 'number') {
            pos = { left: this.position.X, top: this.position.Y };
        }
        else if ((typeof this.position.X === 'string' && typeof this.position.Y === 'number') ||
            (typeof this.position.X === 'number' && typeof this.position.Y === 'string')) {
            var parentDisplay = void 0;
            var display = this.element.style.display;
            this.element.style.display = 'block';
            if (this.element.classList.contains('e-dlg-modal')) {
                parentDisplay = this.element.parentElement.style.display;
                this.element.parentElement.style.display = 'block';
            }
            position = this.getAnchorPosition(relateToElement, this.element, this.position, this.offsetX, this.offsetY);
            if (typeof this.position.X === 'string') {
                pos = { left: position.left, top: this.position.Y };
            }
            else {
                pos = { left: this.position.X, top: position.top };
            }
            this.element.style.display = display;
            if (this.element.classList.contains('e-dlg-modal')) {
                this.element.parentElement.style.display = parentDisplay;
            }
        }
        else if (relateToElement) {
            var display = this.element.style.display;
            this.element.style.display = 'block';
            pos = this.getAnchorPosition(relateToElement, this.element, this.position, this.offsetX, this.offsetY);
            this.element.style.display = display;
        }
        else {
            pos = { left: 0, top: 0 };
        }
        if (!sf.base.isNullOrUndefined(pos)) {
            this.element.style.left = pos.left + 'px';
            this.element.style.top = pos.top + 'px';
        }
    };
    Popup.prototype.checkGetBoundingClientRect = function (ele) {
        var eleRect;
        try {
            eleRect = ele.getBoundingClientRect();
            return eleRect;
        }
        catch (error) {
            return null;
        }
    };
    Popup.prototype.getAnchorPosition = function (anchorEle, ele, position, offsetX, offsetY) {
        var eleRect = this.checkGetBoundingClientRect(ele);
        var anchorRect = this.checkGetBoundingClientRect(anchorEle);
        if (sf.base.isNullOrUndefined(eleRect) || sf.base.isNullOrUndefined(anchorRect)) {
            return null;
        }
        var anchor = anchorEle;
        var anchorPos = { left: 0, top: 0 };
        if (ele.offsetParent && ele.offsetParent.tagName === 'BODY' && anchorEle.tagName === 'BODY') {
            anchorPos = sf.popups.calculatePosition(anchorEle);
        }
        else {
            if ((ele.classList.contains('e-dlg-modal') && anchor.tagName !== 'BODY')) {
                ele = ele.parentElement;
            }
            anchorPos = sf.popups.calculateRelativeBasedPosition(anchor, ele);
        }
        switch (position.X) {
            default:
            case 'left':
                break;
            case 'center':
                if ((ele.classList.contains('e-dlg-modal') && anchor.tagName === 'BODY' && this.targetType === 'container')) {
                    anchorPos.left += (window.innerWidth / 2 - eleRect.width / 2);
                }
                else if (this.targetType === 'container') {
                    anchorPos.left += (anchorRect.width / 2 - eleRect.width / 2);
                }
                else {
                    anchorPos.left += (anchorRect.width / 2);
                }
                break;
            case 'right':
                if ((ele.classList.contains('e-dlg-modal') && anchor.tagName === 'BODY' && this.targetType === 'container')) {
                    anchorPos.left += (window.innerWidth - eleRect.width);
                }
                else if (this.targetType === 'container') {
                    anchorPos.left += (anchorRect.width - eleRect.width);
                }
                else {
                    anchorPos.left += (anchorRect.width);
                }
                break;
        }
        switch (position.Y) {
            default:
            case 'top':
                break;
            case 'center':
                if ((ele.classList.contains('e-dlg-modal') && anchor.tagName === 'BODY' && this.targetType === 'container')) {
                    anchorPos.top += (window.innerHeight / 2 - eleRect.height / 2);
                }
                else if (this.targetType === 'container') {
                    anchorPos.top += (anchorRect.height / 2 - eleRect.height / 2);
                }
                else {
                    anchorPos.top += (anchorRect.height / 2);
                }
                break;
            case 'bottom':
                if ((ele.classList.contains('e-dlg-modal') && anchor.tagName === 'BODY' && this.targetType === 'container')) {
                    anchorPos.top += (window.innerHeight - eleRect.height);
                }
                else if (this.targetType === 'container') {
                    anchorPos.top += (anchorRect.height - eleRect.height);
                }
                else {
                    anchorPos.top += (anchorRect.height);
                }
                break;
        }
        anchorPos.left += offsetX;
        anchorPos.top += offsetY;
        return anchorPos;
    };
    Popup.prototype.callFlip = function (param) {
        var relateToElement = this.getRelateToElement();
        sf.popups.flip(this.element, relateToElement, this.offsetX, this.offsetY, this.position.X, this.position.Y, this.viewPortElement, param, this.fixedParent);
    };
    Popup.prototype.callFit = function (param) {
        if (sf.popups.isCollide(this.element, this.viewPortElement).length !== 0) {
            if (sf.base.isNullOrUndefined(this.viewPortElement)) {
                var data = sf.popups.fit(this.element, this.viewPortElement, param);
                if (param.X) {
                    this.element.style.left = data.left + 'px';
                }
                if (param.Y) {
                    this.element.style.top = data.top + 'px';
                }
            }
            else {
                var elementRect = this.checkGetBoundingClientRect(this.element);
                var viewPortRect = this.checkGetBoundingClientRect(this.viewPortElement);
                if (sf.base.isNullOrUndefined(elementRect) || sf.base.isNullOrUndefined(viewPortRect)) {
                    return null;
                }
                if (param && param.Y === true) {
                    if (viewPortRect.top > elementRect.top) {
                        this.element.style.top = '0px';
                    }
                    else if (viewPortRect.bottom < elementRect.bottom) {
                        this.element.style.top = parseInt(this.element.style.top, 10) - (elementRect.bottom - viewPortRect.bottom) + 'px';
                    }
                }
                if (param && param.X === true) {
                    if (viewPortRect.right < elementRect.right) {
                        this.element.style.left = parseInt(this.element.style.left, 10) - (elementRect.right - viewPortRect.right) + 'px';
                    }
                    else if (viewPortRect.left > elementRect.left) {
                        this.element.style.left = parseInt(this.element.style.left, 10) + (viewPortRect.left - elementRect.left) + 'px';
                    }
                }
            }
        }
    };
    Popup.prototype.checkCollision = function () {
        var horz = this.collision.X;
        var vert = this.collision.Y;
        if (horz === 'none' && vert === 'none') {
            return;
        }
        if (horz === 'flip' && vert === 'flip') {
            this.callFlip({ X: true, Y: true });
        }
        else if (horz === 'fit' && vert === 'fit') {
            this.callFit({ X: true, Y: true });
        }
        else {
            if (horz === 'flip') {
                this.callFlip({ X: true, Y: false });
            }
            else if (vert === 'flip') {
                this.callFlip({ Y: true, X: false });
            }
            if (horz === 'fit') {
                this.callFit({ X: true, Y: false });
            }
            else if (vert === 'fit') {
                this.callFit({ X: false, Y: true });
            }
        }
    };
    /**
     * Shows the popup element from screen.
     *
     * @returns {void}
     * @param {AnimationModel} animationOptions - specifies the model
     * @param { HTMLElement } relativeElement - To calculate the zIndex value dynamically.
     */
    Popup.prototype.show = function (animationOptions, relativeElement) {
        var _this = this;
        this.wireEvents();
        if (this.zIndex === 1000 || !sf.base.isNullOrUndefined(relativeElement)) {
            var zIndexElement = (sf.base.isNullOrUndefined(relativeElement)) ? this.element : relativeElement;
            this.zIndex = getZindexPartial(zIndexElement);
            sf.base.setStyleAttribute(this.element, { 'zIndex': this.zIndex });
        }
        animationOptions = (!sf.base.isNullOrUndefined(animationOptions) && typeof animationOptions === 'object') ?
            animationOptions : this.showAnimation;
        if (this.collision.X !== 'none' || this.collision.Y !== 'none') {
            sf.base.removeClass([this.element], CLASSNAMES.CLOSE);
            sf.base.addClass([this.element], CLASSNAMES.OPEN);
            this.checkCollision();
            sf.base.removeClass([this.element], CLASSNAMES.OPEN);
            sf.base.addClass([this.element], CLASSNAMES.CLOSE);
        }
        if (!sf.base.isNullOrUndefined(animationOptions)) {
            animationOptions.begin = function () {
                if (!_this.isDestroyed) {
                    sf.base.removeClass([_this.element], CLASSNAMES.CLOSE);
                    sf.base.addClass([_this.element], CLASSNAMES.OPEN);
                }
            };
            animationOptions.end = function () {
                if (!_this.isDestroyed) {
                    _this.trigger('open');
                }
            };
            new sf.base.Animation(animationOptions).animate(this.element);
        }
        else {
            sf.base.removeClass([this.element], CLASSNAMES.CLOSE);
            sf.base.addClass([this.element], CLASSNAMES.OPEN);
            this.trigger('open');
        }
    };
    /**
     * Hides the popup element from screen.
     *
     * @param {AnimationModel} animationOptions - To give the animation options.
     * @returns {void}
     */
    Popup.prototype.hide = function (animationOptions) {
        var _this = this;
        animationOptions = (!sf.base.isNullOrUndefined(animationOptions) && typeof animationOptions === 'object') ?
            animationOptions : this.hideAnimation;
        if (!sf.base.isNullOrUndefined(animationOptions)) {
            animationOptions.end = function () {
                if (!_this.isDestroyed) {
                    sf.base.removeClass([_this.element], CLASSNAMES.OPEN);
                    sf.base.addClass([_this.element], CLASSNAMES.CLOSE);
                    _this.trigger('close');
                }
            };
            new sf.base.Animation(animationOptions).animate(this.element);
        }
        else {
            sf.base.removeClass([this.element], CLASSNAMES.OPEN);
            sf.base.addClass([this.element], CLASSNAMES.CLOSE);
            this.trigger('close');
        }
        this.unwireEvents();
    };
    /**
     * Gets scrollable parent elements for the given element.
     *
     * @returns {void}
     * @param { HTMLElement } element - Specify the element to get the scrollable parents of it.
     */
    Popup.prototype.getScrollableParent = function (element) {
        this.checkFixedParent(element);
        return getScrollableParent(element, this.fixedParent);
    };
    Popup.prototype.checkFixedParent = function (element) {
        var parent = element.parentElement;
        while (parent && parent.tagName !== 'HTML') {
            var parentStyle = getComputedStyle(parent);
            if (parentStyle.position === 'fixed' && !sf.base.isNullOrUndefined(this.element) && this.element.offsetParent && this.element.offsetParent.tagName === 'BODY') {
                this.element.style.top = window.scrollY > parseInt(this.element.style.top) ? sf.base.formatUnit(window.scrollY - parseInt(this.element.style.top))
                    : sf.base.formatUnit(parseInt(this.element.style.top) - window.scrollY);
                this.element.style.position = 'fixed';
                this.fixedParent = true;
            }
            parent = parent.parentElement;
            if (!sf.base.isNullOrUndefined(this.element) && sf.base.isNullOrUndefined(this.element.offsetParent) && parentStyle.position === 'fixed'
                && this.element.style.position === 'fixed') {
                this.fixedParent = true;
            }
        }
    };
    __decorate([
        sf.base.Property('auto')
    ], Popup.prototype, "height", void 0);
    __decorate([
        sf.base.Property('auto')
    ], Popup.prototype, "width", void 0);
    __decorate([
        sf.base.Property(null)
    ], Popup.prototype, "content", void 0);
    __decorate([
        sf.base.Property('container')
    ], Popup.prototype, "targetType", void 0);
    __decorate([
        sf.base.Property(null)
    ], Popup.prototype, "viewPortElement", void 0);
    __decorate([
        sf.base.Property({ X: 'none', Y: 'none' })
    ], Popup.prototype, "collision", void 0);
    __decorate([
        sf.base.Property('')
    ], Popup.prototype, "relateTo", void 0);
    __decorate([
        sf.base.Complex({}, PositionData)
    ], Popup.prototype, "position", void 0);
    __decorate([
        sf.base.Property(0)
    ], Popup.prototype, "offsetX", void 0);
    __decorate([
        sf.base.Property(0)
    ], Popup.prototype, "offsetY", void 0);
    __decorate([
        sf.base.Property(1000)
    ], Popup.prototype, "zIndex", void 0);
    __decorate([
        sf.base.Property(false)
    ], Popup.prototype, "enableRtl", void 0);
    __decorate([
        sf.base.Property('reposition')
    ], Popup.prototype, "actionOnScroll", void 0);
    __decorate([
        sf.base.Property(null)
    ], Popup.prototype, "showAnimation", void 0);
    __decorate([
        sf.base.Property(null)
    ], Popup.prototype, "hideAnimation", void 0);
    __decorate([
        sf.base.Event()
    ], Popup.prototype, "open", void 0);
    __decorate([
        sf.base.Event()
    ], Popup.prototype, "close", void 0);
    __decorate([
        sf.base.Event()
    ], Popup.prototype, "targetExitViewport", void 0);
    Popup = __decorate([
        sf.base.NotifyPropertyChanges
    ], Popup);
    return Popup;
}(sf.base.Component));
/**
 * Gets scrollable parent elements for the given element.
 *
 * @param { HTMLElement } element - Specify the element to get the scrollable parents of it.
 * @param {boolean} fixedParent - specifies the parent element
 * @private
 * @returns {void}
 */
function getScrollableParent(element, fixedParent) {
    var eleStyle = getComputedStyle(element);
    var scrollParents = [];
    var overflowRegex = /(auto|scroll)/;
    var parent = element.parentElement;
    while (parent && parent.tagName !== 'HTML') {
        var parentStyle = getComputedStyle(parent);
        if (!(eleStyle.position === 'absolute' && parentStyle.position === 'static')
            && overflowRegex.test(parentStyle.overflow + parentStyle.overflowY + parentStyle.overflowX)) {
            scrollParents.push(parent);
        }
        parent = parent.parentElement;
    }
    if (!fixedParent) {
        scrollParents.push(document);
    }
    return scrollParents;
}
/**
 * Gets the maximum z-index of the given element.
 *
 * @returns {void}
 * @param { HTMLElement } element - Specify the element to get the maximum z-index of it.
 * @private
 */
function getZindexPartial(element) {
    // upto body traversal
    var parent = element.parentElement;
    var parentZindex = [];
    while (parent) {
        if (parent.tagName !== 'BODY') {
            var index = document.defaultView.getComputedStyle(parent, null).getPropertyValue('z-index');
            var position = document.defaultView.getComputedStyle(parent, null).getPropertyValue('position');
            if (index !== 'auto' && position !== 'static') {
                parentZindex.push(index);
            }
            parent = parent.parentElement;
        }
        else {
            break;
        }
    }
    var childrenZindex = [];
    for (var i = 0; i < document.body.children.length; i++) {
        if (!element.isEqualNode(document.body.children[i])) {
            var index = document.defaultView.getComputedStyle(document.body.children[i], null).getPropertyValue('z-index');
            var position = document.defaultView.getComputedStyle(document.body.children[i], null).getPropertyValue('position');
            if (index !== 'auto' && position !== 'static') {
                childrenZindex.push(index);
            }
        }
    }
    childrenZindex.push('999');
    var siblingsZindex = [];
    if (!sf.base.isNullOrUndefined(element.parentElement) && element.parentElement.tagName !== 'BODY') {
        var childNodes = [].slice.call(element.parentElement.children);
        for (var i = 0; i < childNodes.length; i++) {
            if (!element.isEqualNode(childNodes[i])) {
                var index = document.defaultView.getComputedStyle(childNodes[i], null).getPropertyValue('z-index');
                var position = document.defaultView.getComputedStyle(childNodes[i], null).getPropertyValue('position');
                if (index !== 'auto' && position !== 'static') {
                    siblingsZindex.push(index);
                }
            }
        }
    }
    var finalValue = parentZindex.concat(childrenZindex, siblingsZindex);
    // eslint-disable-next-line
    var currentZindexValue = Math.max.apply(Math, finalValue) + 1;
    return currentZindexValue > 2147483647 ? 2147483647 : currentZindexValue;
}
/**
 * Gets the maximum z-index of the page.
 *
 * @returns {void}
 * @param { HTMLElement } tagName - Specify the tagName to get the maximum z-index of it.
 * @private
 */
function getMaxZindex(tagName) {
    if (tagName === void 0) { tagName = ['*']; }
    var maxZindex = [];
    for (var i = 0; i < tagName.length; i++) {
        var elements = document.getElementsByTagName(tagName[i]);
        for (var i_1 = 0; i_1 < elements.length; i_1++) {
            var index = document.defaultView.getComputedStyle(elements[i_1], null).getPropertyValue('z-index');
            var position = document.defaultView.getComputedStyle(elements[i_1], null).getPropertyValue('position');
            if (index !== 'auto' && position !== 'static') {
                maxZindex.push(index);
            }
        }
    }
    // eslint-disable-next-line
    var currentZindexValue = Math.max.apply(Math, maxZindex) + 1;
    return currentZindexValue > 2147483647 ? 2147483647 : currentZindexValue;
}

/**
 * Popup Components
 */

exports.PositionData = PositionData;
exports.Popup = Popup;
exports.getScrollableParent = getScrollableParent;
exports.getZindexPartial = getZindexPartial;
exports.getMaxZindex = getMaxZindex;

return exports;

});

    sf.popups = sf.base.extend({}, sf.popups, sfpopup({}));

/***/ }),

/***/ "./resources/20.1.61/Scripts/popupsbase.js":
/*!*************************************************!*\
  !*** ./resources/20.1.61/Scripts/popupsbase.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.sf = window.sf || {};
var popupsbase = (function (exports) {
'use strict';

/**
 * Position library
 */
var elementRect;
var popupRect;
var element;
var parentDocument$1;
var fixedParent = false;
/**
 *
 * @param {HTMLElement} anchor - specifies the element
 * @param {HTMLElement} element - specifies the element
 * @returns {OffsetPosition} - returns the value
 */
function calculateRelativeBasedPosition(anchor, element) {
    var fixedElement = false;
    var anchorPos = { left: 0, top: 0 };
    var tempAnchor = anchor;
    if (!anchor || !element) {
        return anchorPos;
    }
    if (sf.base.isNullOrUndefined(element.offsetParent) && element.style.position === 'fixed') {
        fixedElement = true;
    }
    while ((element.offsetParent || fixedElement) && anchor && element.offsetParent !== anchor) {
        anchorPos.left += anchor.offsetLeft;
        anchorPos.top += anchor.offsetTop;
        anchor = anchor.offsetParent;
    }
    anchor = tempAnchor;
    while ((element.offsetParent || fixedElement) && anchor && element.offsetParent !== anchor) {
        anchorPos.left -= anchor.scrollLeft;
        anchorPos.top -= anchor.scrollTop;
        anchor = anchor.parentElement;
    }
    return anchorPos;
}
/**
 *
 * @param {Element} currentElement - specifies the element
 * @param {string} positionX - specifies the position
 * @param {string} positionY - specifies the position
 * @param {boolean} parentElement - specifies the boolean
 * @param {ClientRect} targetValues - specifies the client
 * @returns {OffsetPosition} - returns the position
 */
function calculatePosition(currentElement, positionX, positionY, parentElement, targetValues) {
    //eslint-disable-next-line
    popupRect = undefined;
    popupRect = targetValues;
    fixedParent = parentElement ? true : false;
    if (!currentElement) {
        return { left: 0, top: 0 };
    }
    if (!positionX) {
        positionX = 'left';
    }
    if (!positionY) {
        positionY = 'top';
    }
    parentDocument$1 = currentElement.ownerDocument;
    element = currentElement;
    var pos = { left: 0, top: 0 };
    return updatePosition(positionX.toLowerCase(), positionY.toLowerCase(), pos);
}
/**
 *
 * @param {number} value - specifies the number
 * @param {OffsetPosition} pos - specifies the position
 * @returns {void}
 */
function setPosx(value, pos) {
    pos.left = value;
}
/**
 *
 * @param {number} value - specifies the number
 * @param {OffsetPosition} pos - specifies the position
 * @returns {void}
 */
function setPosy(value, pos) {
    pos.top = value;
}
/**
 *
 * @param {string} posX - specifies the position
 * @param {string} posY - specifies the position
 * @param {OffsetPosition} pos - specifies the position
 * @returns {OffsetPosition} - returns the postion
 */
function updatePosition(posX, posY, pos) {
    elementRect = element.getBoundingClientRect();
    switch (posY + posX) {
        case 'topcenter':
            setPosx(getElementHCenter(), pos);
            setPosy(getElementTop(), pos);
            break;
        case 'topright':
            setPosx(getElementRight(), pos);
            setPosy(getElementTop(), pos);
            break;
        case 'centercenter':
            setPosx(getElementHCenter(), pos);
            setPosy(getElementVCenter(), pos);
            break;
        case 'centerright':
            setPosx(getElementRight(), pos);
            setPosy(getElementVCenter(), pos);
            break;
        case 'centerleft':
            setPosx(getElementLeft(), pos);
            setPosy(getElementVCenter(), pos);
            break;
        case 'bottomcenter':
            setPosx(getElementHCenter(), pos);
            setPosy(getElementBottom(), pos);
            break;
        case 'bottomright':
            setPosx(getElementRight(), pos);
            setPosy(getElementBottom(), pos);
            break;
        case 'bottomleft':
            setPosx(getElementLeft(), pos);
            setPosy(getElementBottom(), pos);
            break;
        default:
        case 'topleft':
            setPosx(getElementLeft(), pos);
            setPosy(getElementTop(), pos);
            break;
    }
    return pos;
}
/**
 * @returns {number} - specifies the number value
 */
function getBodyScrollTop$1() {
    return parentDocument$1.documentElement.scrollTop || parentDocument$1.body.scrollTop;
}
/**
 * @returns {number} - specifies the number value
 */
function getBodyScrollLeft$1() {
    return parentDocument$1.documentElement.scrollLeft || parentDocument$1.body.scrollLeft;
}
/**
 * @returns {number} - specifies the number value
 */
function getElementBottom() {
    return fixedParent ? elementRect.bottom : elementRect.bottom + getBodyScrollTop$1();
}
/**
 * @returns {number} - specifies the number value
 */
function getElementVCenter() {
    return getElementTop() + (elementRect.height / 2);
}
/**
 * @returns {number} - specifies the number value
 */
function getElementTop() {
    return fixedParent ? elementRect.top : elementRect.top + getBodyScrollTop$1();
}
/**
 * @returns {number} - specifies the number value
 */
function getElementLeft() {
    return elementRect.left + getBodyScrollLeft$1();
}
/**
 * @returns {number} - specifies the number value
 */
function getElementRight() {
    var popupWidth = (element && element.classList.contains('e-date-range-wrapper')) ? (popupRect ? popupRect.width : 0) :
        (popupRect && (elementRect.width >= popupRect.width) ? popupRect.width : 0);
    return elementRect.right + getBodyScrollLeft$1() - popupWidth;
}
/**
 * @returns {number} - specifies the number value
 */
function getElementHCenter() {
    return getElementLeft() + (elementRect.width / 2);
}

/**
 * Collision module.
 */
var parentDocument;
var targetContainer;
/**
 *
 * @param {HTMLElement} element - specifies the element
 * @param {HTMLElement} viewPortElement - specifies the element
 * @param {CollisionCoordinates} axis - specifies the collision coordinates
 * @param {OffsetPosition} position - specifies the position
 * @returns {void}
 */
function fit(element, viewPortElement, axis, position) {
    if (viewPortElement === void 0) { viewPortElement = null; }
    if (axis === void 0) { axis = { X: false, Y: false }; }
    if (!axis.Y && !axis.X) {
        return { left: 0, top: 0 };
    }
    var elemData = element.getBoundingClientRect();
    targetContainer = viewPortElement;
    parentDocument = element.ownerDocument;
    if (!position) {
        position = calculatePosition(element, 'left', 'top');
    }
    if (axis.X) {
        var containerWidth = targetContainer ? getTargetContainerWidth() : getViewPortWidth();
        var containerLeft = ContainerLeft();
        var containerRight = ContainerRight();
        var overLeft = containerLeft - position.left;
        var overRight = position.left + elemData.width - containerRight;
        if (elemData.width > containerWidth) {
            if (overLeft > 0 && overRight <= 0) {
                position.left = containerRight - elemData.width;
            }
            else if (overRight > 0 && overLeft <= 0) {
                position.left = containerLeft;
            }
            else {
                position.left = overLeft > overRight ? (containerRight - elemData.width) : containerLeft;
            }
        }
        else if (overLeft > 0) {
            position.left += overLeft;
        }
        else if (overRight > 0) {
            position.left -= overRight;
        }
    }
    if (axis.Y) {
        var containerHeight = targetContainer ? getTargetContainerHeight() : getViewPortHeight();
        var containerTop = ContainerTop();
        var containerBottom = ContainerBottom();
        var overTop = containerTop - position.top;
        var overBottom = position.top + elemData.height - containerBottom;
        if (elemData.height > containerHeight) {
            if (overTop > 0 && overBottom <= 0) {
                position.top = containerBottom - elemData.height;
            }
            else if (overBottom > 0 && overTop <= 0) {
                position.top = containerTop;
            }
            else {
                position.top = overTop > overBottom ? (containerBottom - elemData.height) : containerTop;
            }
        }
        else if (overTop > 0) {
            position.top += overTop;
        }
        else if (overBottom > 0) {
            position.top -= overBottom;
        }
    }
    return position;
}
/**
 *
 * @param {HTMLElement} element - specifies the html element
 * @param {HTMLElement} viewPortElement - specifies the html element
 * @param {number} x - specifies the number
 * @param {number} y - specifies the number
 * @returns {string[]} - returns the string value
 */
function isCollide(element, viewPortElement, x, y) {
    if (viewPortElement === void 0) { viewPortElement = null; }
    var elemOffset = calculatePosition(element, 'left', 'top');
    if (x) {
        elemOffset.left = x;
    }
    if (y) {
        elemOffset.top = y;
    }
    var data = [];
    targetContainer = viewPortElement;
    parentDocument = element.ownerDocument;
    var elementRect = element.getBoundingClientRect();
    var top = elemOffset.top;
    var left = elemOffset.left;
    var right = elemOffset.left + elementRect.width;
    var bottom = elemOffset.top + elementRect.height;
    // eslint-disable-next-line
    var yAxis = topCollideCheck(top, bottom);
    var xAxis = leftCollideCheck(left, right);
    if (yAxis.topSide) {
        data.push('top');
    }
    if (xAxis.rightSide) {
        data.push('right');
    }
    if (xAxis.leftSide) {
        data.push('left');
    }
    if (yAxis.bottomSide) {
        data.push('bottom');
    }
    return data;
}
/**
 *
 * @param {HTMLElement} element - specifies the element
 * @param {HTMLElement} target - specifies the element
 * @param {number} offsetX - specifies the number
 * @param {number} offsetY - specifies the number
 * @param {string} positionX - specifies the string value
 * @param {string} positionY - specifies the string value
 * @param {HTMLElement} viewPortElement - specifies the element
 * @param {CollisionCoordinates} axis - specifies the collision axis
 * @param {boolean} fixedParent - specifies the boolean
 * @returns {void}
 */
function flip(element, target, offsetX, offsetY, positionX, positionY, viewPortElement, 
/* eslint-disable */
axis, fixedParent) {
    if (viewPortElement === void 0) { viewPortElement = null; }
    if (axis === void 0) { axis = { X: true, Y: true }; }
    if (!target || !element || !positionX || !positionY || (!axis.X && !axis.Y)) {
        return;
    }
    // eslint-disable-next-line
    var tEdge = { TL: null,
        TR: null,
        BL: null,
        BR: null
    }, eEdge = {
        TL: null,
        TR: null,
        BL: null,
        BR: null
        /* eslint-enable */
    };
    var elementRect;
    if (window.getComputedStyle(element).display === 'none') {
        var oldVisibility = element.style.visibility;
        element.style.visibility = 'hidden';
        element.style.display = 'block';
        elementRect = element.getBoundingClientRect();
        element.style.removeProperty('display');
        element.style.visibility = oldVisibility;
    }
    else {
        elementRect = element.getBoundingClientRect();
    }
    var pos = {
        posX: positionX, posY: positionY, offsetX: offsetX, offsetY: offsetY, position: { left: 0, top: 0 }
    };
    targetContainer = viewPortElement;
    parentDocument = target.ownerDocument;
    updateElementData(target, tEdge, pos, fixedParent, elementRect);
    setPosition(eEdge, pos, elementRect);
    if (axis.X) {
        leftFlip(target, eEdge, tEdge, pos, elementRect, true);
    }
    if (axis.Y && tEdge.TL.top > -1) {
        topFlip(target, eEdge, tEdge, pos, elementRect, true);
    }
    setPopup(element, pos, elementRect);
}
/**
 *
 * @param {HTMLElement} element - specifies the element
 * @param {PositionLocation} pos - specifies the location
 * @param {ClientRect} elementRect - specifies the client rect
 * @returns {void}
 */
function setPopup(element, pos, elementRect) {
    //eslint-disable-next-line
    var left = 0, top = 0;
    if (element.offsetParent != null
        && (getComputedStyle(element.offsetParent).position === 'absolute' ||
            getComputedStyle(element.offsetParent).position === 'relative')) {
        var data = calculatePosition(element.offsetParent, 'left', 'top', false, elementRect);
        left = data.left;
        top = data.top;
    }
    element.style.top = (pos.position.top + pos.offsetY - (top)) + 'px';
    element.style.left = (pos.position.left + pos.offsetX - (left)) + 'px';
}
/**
 *
 * @param {HTMLElement} target - specifies the element
 * @param {EdgeOffset} edge - specifies the offset
 * @param {PositionLocation} pos - specifies theloaction
 * @param {boolean} fixedParent - specifies the boolean
 * @param {ClientRect} elementRect - specifies the client rect
 * @returns {void}
 */
function updateElementData(target, edge, pos, fixedParent, elementRect) {
    pos.position = calculatePosition(target, pos.posX, pos.posY, fixedParent, elementRect);
    edge.TL = calculatePosition(target, 'left', 'top', fixedParent, elementRect);
    edge.TR = calculatePosition(target, 'right', 'top', fixedParent, elementRect);
    edge.BR = calculatePosition(target, 'left', 'bottom', fixedParent, elementRect);
    edge.BL = calculatePosition(target, 'right', 'bottom', fixedParent, elementRect);
}
/**
 *
 * @param {EdgeOffset} eStatus - specifies the status
 * @param {PositionLocation} pos - specifies the location
 * @param {ClientRect} elementRect - specifies the client
 * @returns {void}
 */
function setPosition(eStatus, pos, elementRect) {
    eStatus.TL = { top: pos.position.top + pos.offsetY, left: pos.position.left + pos.offsetX };
    eStatus.TR = { top: eStatus.TL.top, left: eStatus.TL.left + elementRect.width };
    eStatus.BL = { top: eStatus.TL.top + elementRect.height,
        left: eStatus.TL.left };
    eStatus.BR = { top: eStatus.TL.top + elementRect.height,
        left: eStatus.TL.left + elementRect.width };
}
/**
 *
 * @param {number} left - specifies the  number
 * @param {number} right - specifies the number
 * @returns {LeftCorners} - returns the value
 */
function leftCollideCheck(left, right) {
    //eslint-disable-next-line
    var leftSide = false, rightSide = false;
    if (((left - getBodyScrollLeft()) < ContainerLeft())) {
        leftSide = true;
    }
    if (right > ContainerRight()) {
        rightSide = true;
    }
    return { leftSide: leftSide, rightSide: rightSide };
}
/**
 *
 * @param {HTMLElement} target - specifies the element
 * @param {EdgeOffset} edge - specifes the element
 * @param {EdgeOffset} tEdge - specifies the edge offset
 * @param {PositionLocation} pos - specifes the location
 * @param {ClientRect} elementRect - specifies the client
 * @param {boolean} deepCheck - specifies the boolean value
 * @returns {void}
 */
function leftFlip(target, edge, tEdge, pos, elementRect, deepCheck) {
    var collideSide = leftCollideCheck(edge.TL.left, edge.TR.left);
    if ((tEdge.TL.left - getBodyScrollLeft()) <= ContainerLeft()) {
        collideSide.leftSide = false;
    }
    if (tEdge.TR.left > ContainerRight()) {
        collideSide.rightSide = false;
    }
    if ((collideSide.leftSide && !collideSide.rightSide) || (!collideSide.leftSide && collideSide.rightSide)) {
        if (pos.posX === 'right') {
            pos.posX = 'left';
        }
        else {
            pos.posX = 'right';
        }
        pos.offsetX = pos.offsetX + elementRect.width;
        pos.offsetX = -1 * pos.offsetX;
        pos.position = calculatePosition(target, pos.posX, pos.posY, false);
        setPosition(edge, pos, elementRect);
        if (deepCheck) {
            leftFlip(target, edge, tEdge, pos, elementRect, false);
        }
    }
}
/**
 *
 * @param {HTMLElement} target - specifies the element
 * @param {EdgeOffset} edge - specifies the offset
 * @param {EdgeOffset} tEdge - specifies the offset
 * @param {PositionLocation} pos - specifies the location
 * @param {ClientRect} elementRect - specifies the client rect
 * @param {boolean} deepCheck - specifies the boolean
 * @returns {void}
 */
function topFlip(target, edge, tEdge, pos, elementRect, deepCheck) {
    var collideSide = topCollideCheck(edge.TL.top, edge.BL.top);
    if ((tEdge.TL.top - getBodyScrollTop()) <= ContainerTop()) {
        collideSide.topSide = false;
    }
    if (tEdge.BL.top >= ContainerBottom() && target.getBoundingClientRect().bottom < window.innerHeight) {
        collideSide.bottomSide = false;
    }
    if ((collideSide.topSide && !collideSide.bottomSide) || (!collideSide.topSide && collideSide.bottomSide)) {
        if (pos.posY === 'top') {
            pos.posY = 'bottom';
        }
        else {
            pos.posY = 'top';
        }
        pos.offsetY = pos.offsetY + elementRect.height;
        pos.offsetY = -1 * pos.offsetY;
        pos.position = calculatePosition(target, pos.posX, pos.posY, false, elementRect);
        setPosition(edge, pos, elementRect);
        if (deepCheck) {
            topFlip(target, edge, tEdge, pos, elementRect, false);
        }
    }
}
/**
 *
 * @param {number} top - specifies the number
 * @param {number} bottom - specifies the number
 * @returns {TopCorners} - retyrns the value
 */
function topCollideCheck(top, bottom) {
    //eslint-disable-next-line
    var topSide = false, bottomSide = false;
    if ((top - getBodyScrollTop()) < ContainerTop()) {
        topSide = true;
    }
    if (bottom > ContainerBottom()) {
        bottomSide = true;
    }
    return { topSide: topSide, bottomSide: bottomSide };
}
/**
 * @returns {void}
 */
function getTargetContainerWidth() {
    return targetContainer.getBoundingClientRect().width;
}
/**
 * @returns {void}
 */
function getTargetContainerHeight() {
    return targetContainer.getBoundingClientRect().height;
}
/**
 * @returns {void}
 */
function getTargetContainerLeft() {
    return targetContainer.getBoundingClientRect().left;
}
/**
 * @returns {void}
 */
function getTargetContainerTop() {
    return targetContainer.getBoundingClientRect().top;
}
//eslint-disable-next-line
function ContainerTop() {
    if (targetContainer) {
        return getTargetContainerTop();
    }
    return 0;
}
//eslint-disable-next-line
function ContainerLeft() {
    if (targetContainer) {
        return getTargetContainerLeft();
    }
    return 0;
}
//eslint-disable-next-line
function ContainerRight() {
    if (targetContainer) {
        return (getBodyScrollLeft() + getTargetContainerLeft() + getTargetContainerWidth());
    }
    return (getBodyScrollLeft() + getViewPortWidth());
}
//eslint-disable-next-line
function ContainerBottom() {
    if (targetContainer) {
        return (getBodyScrollTop() + getTargetContainerTop() + getTargetContainerHeight());
    }
    return (getBodyScrollTop() + getViewPortHeight());
}
/**
 * @returns {void}
 */
function getBodyScrollTop() {
    // if(targetContainer)
    //     return targetContainer.scrollTop;
    return parentDocument.documentElement.scrollTop || parentDocument.body.scrollTop;
}
/**
 * @returns {void}
 */
function getBodyScrollLeft() {
    // if(targetContainer)
    //     return targetContainer.scrollLeft;
    return parentDocument.documentElement.scrollLeft || parentDocument.body.scrollLeft;
}
/**
 * @returns {void}
 */
function getViewPortHeight() {
    return window.innerHeight;
}
/**
 * @returns {void}
 */
function getViewPortWidth() {
    var windowWidth = window.innerWidth;
    var documentReact = document.documentElement.getBoundingClientRect();
    var offsetWidth = (sf.base.isNullOrUndefined(document.documentElement)) ? 0 : documentReact.width;
    return windowWidth - (windowWidth - offsetWidth);
}

/**
 * Resize library
 */
/* eslint-disable */
var elementClass = ['north-west', 'north', 'north-east', 'west', 'east', 'south-west', 'south', 'south-east'];
var RESIZE_HANDLER = 'e-resize-handle';
var FOCUSED_HANDLER = 'e-focused-handle';
var DIALOG_RESIZABLE = 'e-dlg-resizable';
var RESTRICT_LEFT = ['e-restrict-left'];
var RESIZE_WITHIN_VIEWPORT = 'e-resize-viewport';
var dialogBorderResize = ['north', 'west', 'east', 'south'];
var targetElement;
var selectedHandler;
var originalWidth = 0;
var originalHeight = 0;
var originalX = 0;
var originalY = 0;
var originalMouseX = 0;
var originalMouseY = 0;
var minHeight;
var maxHeight;
var minWidth;
var maxWidth;
var containerElement;
/* eslint-disable */
var resizeStart = null;
var resize = null;
var resizeEnd = null;
/* eslint-enable */
var resizeWestWidth;
var setLeft = true;
var previousWidth = 0;
var setWidth = true;
// eslint-disable-next-line
var proxy;
/**
 *
 * @param {ResizeArgs} args - specifies the resize args
 * @returns {void}
 */
function createResize(args) {
    resizeStart = args.resizeBegin;
    resize = args.resizing;
    resizeEnd = args.resizeComplete;
    targetElement = getDOMElement(args.element);
    containerElement = getDOMElement(args.boundary);
    var directions = args.direction.split(' ');
    for (var i = 0; i < directions.length; i++) {
        if (dialogBorderResize.indexOf(directions[i]) >= 0 && directions[i]) {
            setBorderResizeElm(directions[i]);
        }
        else if (directions[i].trim() !== '') {
            var resizeHandler = sf.base.createElement('div', { className: 'e-icons ' + RESIZE_HANDLER + ' ' + 'e-' + directions[i] });
            targetElement.appendChild(resizeHandler);
        }
    }
    minHeight = args.minHeight;
    minWidth = args.minWidth;
    maxWidth = args.maxWidth;
    maxHeight = args.maxHeight;
    if (args.proxy && args.proxy.element && args.proxy.element.classList.contains('e-dialog')) {
        wireEvents(args.proxy);
    }
    else {
        wireEvents();
    }
}
/**
 *
 * @param {string} direction - specifies the string
 * @returns {void}
 */
function setBorderResizeElm(direction) {
    calculateValues();
    var borderBottom = sf.base.createElement('span', {
        attrs: {
            'unselectable': 'on', 'contenteditable': 'false'
        }
    });
    borderBottom.setAttribute('class', 'e-dialog-border-resize e-' + direction);
    if (direction === 'south') {
        borderBottom.style.height = '2px';
        borderBottom.style.width = '100%';
        borderBottom.style.bottom = '0px';
        borderBottom.style.left = '0px';
    }
    if (direction === 'north') {
        borderBottom.style.height = '2px';
        borderBottom.style.width = '100%';
        borderBottom.style.top = '0px';
        borderBottom.style.left = '0px';
    }
    if (direction === 'east') {
        borderBottom.style.height = '100%';
        borderBottom.style.width = '2px';
        borderBottom.style.right = '0px';
        borderBottom.style.top = '0px';
    }
    if (direction === 'west') {
        borderBottom.style.height = '100%';
        borderBottom.style.width = '2px';
        borderBottom.style.left = '0px';
        borderBottom.style.top = '0px';
    }
    targetElement.appendChild(borderBottom);
}
/**
 *
 * @param {string} element - specifies the element
 * @returns {HTMLElement} - returns the element
 */
function getDOMElement(element) {
    var domElement;
    if (!sf.base.isNullOrUndefined(element)) {
        if (typeof (element) === 'string') {
            domElement = document.querySelector(element);
        }
        else {
            domElement = element;
        }
    }
    return domElement;
}
// eslint-disable-next-line
function wireEvents(args) {
    if (sf.base.isNullOrUndefined(args)) {
        args = this;
    }
    var resizers = targetElement.querySelectorAll('.' + RESIZE_HANDLER);
    for (var i = 0; i < resizers.length; i++) {
        selectedHandler = resizers[i];
        sf.base.EventHandler.add(selectedHandler, 'mousedown', onMouseDown, args);
        var eventName = (sf.base.Browser.info.name === 'msie') ? 'pointerdown' : 'touchstart';
        sf.base.EventHandler.add(selectedHandler, eventName, onTouchStart, args);
    }
    var borderResizers = targetElement.querySelectorAll('.e-dialog-border-resize');
    if (!sf.base.isNullOrUndefined(borderResizers)) {
        for (var i = 0; i < borderResizers.length; i++) {
            selectedHandler = borderResizers[i];
            sf.base.EventHandler.add(selectedHandler, 'mousedown', onMouseDown, args);
            var eventName = (sf.base.Browser.info.name === 'msie') ? 'pointerdown' : 'touchstart';
            sf.base.EventHandler.add(selectedHandler, eventName, onTouchStart, args);
        }
    }
}
/* istanbul ignore next */
/**
 *
 * @param {string} e - specifies the string
 * @returns {string} - returns the string
 */
function getEventType(e) {
    return (e.indexOf('mouse') > -1) ? 'mouse' : 'touch';
}
/* istanbul ignore next */
/**
 *
 * @param {MouseEvent} e - specifies the mouse event
 * @returns {void}
 */
function onMouseDown(e) {
    e.preventDefault();
    targetElement = e.target.parentElement;
    calculateValues();
    originalMouseX = e.pageX;
    originalMouseY = e.pageY;
    e.target.classList.add(FOCUSED_HANDLER);
    if (!sf.base.isNullOrUndefined(resizeStart)) {
        proxy = this;
        if (resizeStart(e, proxy) === true) {
            return;
        }
    }
    if (this.targetEle && targetElement && targetElement.querySelector('.' + DIALOG_RESIZABLE)) {
        containerElement = this.target === 'body' || 'document.body' || document.body ? null : this.targetEle;
        maxWidth = this.targetEle.clientWidth;
        maxHeight = this.targetEle.clientHeight;
    }
    var target = (sf.base.isNullOrUndefined(containerElement)) ? document : containerElement;
    sf.base.EventHandler.add(target, 'mousemove', onMouseMove, this);
    sf.base.EventHandler.add(document, 'mouseup', onMouseUp, this);
    for (var i = 0; i < RESTRICT_LEFT.length; i++) {
        if (targetElement.classList.contains(RESTRICT_LEFT[i])) {
            setLeft = false;
        }
        else {
            setLeft = true;
        }
    }
}
/* istanbul ignore next */
/**
 *
 * @param {MouseEvent} e - specifies the event
 * @returns {void}
 */
function onMouseUp(e) {
    var touchMoveEvent = (sf.base.Browser.info.name === 'msie') ? 'pointermove' : 'touchmove';
    var touchEndEvent = (sf.base.Browser.info.name === 'msie') ? 'pointerup' : 'touchend';
    var target = (sf.base.isNullOrUndefined(containerElement)) ? document : containerElement;
    var eventName = (sf.base.Browser.info.name === 'msie') ? 'pointerdown' : 'touchstart';
    sf.base.EventHandler.remove(target, 'mousemove', onMouseMove);
    sf.base.EventHandler.remove(target, touchMoveEvent, onMouseMove);
    sf.base.EventHandler.remove(target, eventName, onMouseMove);
    if (!sf.base.isNullOrUndefined(document.body.querySelector('.' + FOCUSED_HANDLER))) {
        document.body.querySelector('.' + FOCUSED_HANDLER).classList.remove(FOCUSED_HANDLER);
    }
    if (!sf.base.isNullOrUndefined(resizeEnd)) {
        proxy = this;
        resizeEnd(e, proxy);
    }
    sf.base.EventHandler.remove(document, 'mouseup', onMouseUp);
    sf.base.EventHandler.remove(document, touchEndEvent, onMouseUp);
}
/* istanbul ignore next */
/**
 * @returns {void}
 */
function calculateValues() {
    originalWidth = parseFloat(getComputedStyle(targetElement, null).getPropertyValue('width').replace('px', ''));
    originalHeight = parseFloat(getComputedStyle(targetElement, null).getPropertyValue('height').replace('px', ''));
    originalX = targetElement.getBoundingClientRect().left;
    originalY = targetElement.getBoundingClientRect().top;
}
/* istanbul ignore next */
/**
 *
 * @param {MouseEvent} e - specifies the event
 * @returns {void}
 */
function onTouchStart(e) {
    targetElement = e.target.parentElement;
    calculateValues();
    var coordinates = e.touches ? e.changedTouches[0] : e;
    originalMouseX = coordinates.pageX;
    originalMouseY = coordinates.pageY;
    if (!sf.base.isNullOrUndefined(resizeStart)) {
        proxy = this;
        if (resizeStart(e, proxy) === true) {
            return;
        }
    }
    var touchMoveEvent = (sf.base.Browser.info.name === 'msie') ? 'pointermove' : 'touchmove';
    var touchEndEvent = (sf.base.Browser.info.name === 'msie') ? 'pointerup' : 'touchend';
    var target = (sf.base.isNullOrUndefined(containerElement)) ? document : containerElement;
    sf.base.EventHandler.add(target, touchMoveEvent, onMouseMove, this);
    sf.base.EventHandler.add(document, touchEndEvent, onMouseUp);
}
/* istanbul ignore next */
/**
 *
 * @param {MouseEvent} e - specifies the event
 * @returns {void}
 */
function onMouseMove(e) {
    if (e.target.classList.contains(RESIZE_HANDLER) && e.target.classList.contains(FOCUSED_HANDLER)) {
        selectedHandler = e.target;
    }
    else if (!sf.base.isNullOrUndefined(document.body.querySelector('.' + FOCUSED_HANDLER))) {
        selectedHandler = document.body.querySelector('.' + FOCUSED_HANDLER);
    }
    if (!sf.base.isNullOrUndefined(selectedHandler)) {
        var resizeTowards = '';
        for (var i = 0; i < elementClass.length; i++) {
            if (selectedHandler.classList.contains('e-' + elementClass[i])) {
                resizeTowards = elementClass[i];
            }
        }
        if (!sf.base.isNullOrUndefined(resize)) {
            proxy = this;
            resize(e, proxy);
        }
        switch (resizeTowards) {
            case 'south':
                resizeSouth(e);
                break;
            case 'north':
                resizeNorth(e);
                break;
            case 'west':
                resizeWest(e);
                break;
            case 'east':
                resizeEast(e);
                break;
            case 'south-east':
                resizeSouth(e);
                resizeEast(e);
                break;
            case 'south-west':
                resizeSouth(e);
                resizeWest(e);
                break;
            case 'north-east':
                resizeNorth(e);
                resizeEast(e);
                break;
            case 'north-west':
                resizeNorth(e);
                resizeWest(e);
                break;
            default: break;
        }
    }
}
/* istanbul ignore next */
/**
 *
 * @param {HTMLElement} element - specifies the eleemnt
 * @returns {ClientRect} - returns the client
 */
function getClientRectValues(element) {
    return element.getBoundingClientRect();
}
/* istanbul ignore next */
// eslint-disable-next-line
function resizeSouth(e) {
    var documentHeight = document.documentElement.clientHeight;
    var calculateValue = false;
    var coordinates = e.touches ? e.changedTouches[0] : e;
    var currentpageY = coordinates.pageY;
    var targetRectValues = getClientRectValues(targetElement);
    var containerRectValues;
    if (!sf.base.isNullOrUndefined(containerElement)) {
        containerRectValues = getClientRectValues(containerElement);
    }
    if (!sf.base.isNullOrUndefined(containerElement)) {
        calculateValue = true;
    }
    else if (sf.base.isNullOrUndefined(containerElement) && ((documentHeight - currentpageY) >= 0 || (targetRectValues.top < 0))) {
        calculateValue = true;
    }
    var calculatedHeight = originalHeight + (currentpageY - originalMouseY);
    calculatedHeight = (calculatedHeight > minHeight) ? calculatedHeight : minHeight;
    var containerTop = 0;
    if (!sf.base.isNullOrUndefined(containerElement)) {
        containerTop = containerRectValues.top;
    }
    var borderValue = sf.base.isNullOrUndefined(containerElement) ? 0 : containerElement.offsetHeight - containerElement.clientHeight;
    var topWithoutborder = (targetRectValues.top - containerTop) - (borderValue / 2);
    topWithoutborder = (topWithoutborder < 0) ? 0 : topWithoutborder;
    if (targetRectValues.top > 0 && (topWithoutborder + calculatedHeight) > maxHeight) {
        calculateValue = false;
        if (targetElement.classList.contains(RESIZE_WITHIN_VIEWPORT)) {
            return;
        }
        targetElement.style.height = (maxHeight - parseInt(topWithoutborder.toString(), 10)) + 'px';
        return;
    }
    var targetTop = 0;
    if (calculateValue) {
        if (targetRectValues.top < 0 && (documentHeight + (targetRectValues.height + targetRectValues.top) > 0)) {
            targetTop = targetRectValues.top;
            if ((calculatedHeight + targetTop) <= 30) {
                calculatedHeight = (targetRectValues.height - (targetRectValues.height + targetRectValues.top)) + 30;
            }
        }
        if (((calculatedHeight + targetRectValues.top) >= maxHeight)) {
            targetElement.style.height = targetRectValues.height +
                (documentHeight - (targetRectValues.height + targetRectValues.top)) + 'px';
        }
        var calculatedTop = (sf.base.isNullOrUndefined(containerElement)) ? targetTop : topWithoutborder;
        if (calculatedHeight >= minHeight && ((calculatedHeight + calculatedTop) <= maxHeight)) {
            targetElement.style.height = calculatedHeight + 'px';
        }
    }
}
/* istanbul ignore next */
// eslint-disable-next-line
function resizeNorth(e) {
    var calculateValue = false;
    var boundaryRectValues;
    var pageY = (getEventType(e.type) === 'mouse') ? e.pageY : e.touches[0].pageY;
    var targetRectValues = getClientRectValues(targetElement);
    if (!sf.base.isNullOrUndefined(containerElement)) {
        boundaryRectValues = getClientRectValues(containerElement);
    }
    if (!sf.base.isNullOrUndefined(containerElement) && (targetRectValues.top - boundaryRectValues.top) > 0) {
        calculateValue = true;
    }
    else if (sf.base.isNullOrUndefined(containerElement) && pageY > 0) {
        calculateValue = true;
    }
    var currentHeight = originalHeight - (pageY - originalMouseY);
    if (calculateValue) {
        if (currentHeight >= minHeight && currentHeight <= maxHeight) {
            var containerTop = 0;
            if (!sf.base.isNullOrUndefined(containerElement)) {
                containerTop = boundaryRectValues.top;
            }
            var top_1 = (originalY - containerTop) + (pageY - originalMouseY);
            top_1 = top_1 > 0 ? top_1 : 1;
            targetElement.style.height = currentHeight + 'px';
            targetElement.style.top = top_1 + 'px';
        }
    }
}
/* istanbul ignore next */
// eslint-disable-next-line
function resizeWest(e) {
    var documentWidth = document.documentElement.clientWidth;
    var calculateValue = false;
    var rectValues;
    if (!sf.base.isNullOrUndefined(containerElement)) {
        rectValues = getClientRectValues(containerElement);
    }
    var pageX = (getEventType(e.type) === 'mouse') ? e.pageX : e.touches[0].pageX;
    var targetRectValues = getClientRectValues(targetElement);
    var borderValue = sf.base.isNullOrUndefined(containerElement) ? 0 : containerElement.offsetWidth - containerElement.clientWidth;
    /* eslint-disable */
    var left = sf.base.isNullOrUndefined(containerElement) ? 0 : rectValues.left;
    var containerWidth = sf.base.isNullOrUndefined(containerElement) ? 0 : rectValues.width;
    /* eslint-enable */
    if (sf.base.isNullOrUndefined(resizeWestWidth)) {
        if (!sf.base.isNullOrUndefined(containerElement)) {
            resizeWestWidth = (((targetRectValues.left - left) - borderValue / 2)) + targetRectValues.width;
            resizeWestWidth = resizeWestWidth + (containerWidth - borderValue - resizeWestWidth);
        }
        else {
            resizeWestWidth = documentWidth;
        }
    }
    if (!sf.base.isNullOrUndefined(containerElement) &&
        (Math.floor((targetRectValues.left - rectValues.left) + targetRectValues.width +
            (rectValues.right - targetRectValues.right)) - borderValue) <= maxWidth) {
        calculateValue = true;
    }
    else if (sf.base.isNullOrUndefined(containerElement) && pageX >= 0) {
        calculateValue = true;
    }
    var calculatedWidth = originalWidth - (pageX - originalMouseX);
    if (setLeft) {
        calculatedWidth = (calculatedWidth > resizeWestWidth) ? resizeWestWidth : calculatedWidth;
    }
    if (calculateValue) {
        if (calculatedWidth >= minWidth && calculatedWidth <= maxWidth) {
            var containerLeft = 0;
            if (!sf.base.isNullOrUndefined(containerElement)) {
                containerLeft = rectValues.left;
            }
            var left_1 = (originalX - containerLeft) + (pageX - originalMouseX);
            left_1 = (left_1 > 0) ? left_1 : 1;
            if (calculatedWidth !== previousWidth && setWidth) {
                targetElement.style.width = calculatedWidth + 'px';
            }
            if (setLeft) {
                targetElement.style.left = left_1 + 'px';
                if (left_1 === 1) {
                    setWidth = false;
                }
                else {
                    setWidth = true;
                }
            }
        }
    }
    previousWidth = calculatedWidth;
}
/* istanbul ignore next */
// eslint-disable-next-line
function resizeEast(e) {
    var documentWidth = document.documentElement.clientWidth;
    var calculateValue = false;
    var containerRectValues;
    if (!sf.base.isNullOrUndefined(containerElement)) {
        containerRectValues = getClientRectValues(containerElement);
    }
    var coordinates = e.touches ? e.changedTouches[0] : e;
    var pageX = coordinates.pageX;
    var targetRectValues = getClientRectValues(targetElement);
    if (!sf.base.isNullOrUndefined(containerElement) && (((targetRectValues.left - containerRectValues.left) + targetRectValues.width) <= maxWidth
        || (targetRectValues.right - containerRectValues.left) >= targetRectValues.width)) {
        calculateValue = true;
    }
    else if (sf.base.isNullOrUndefined(containerElement) && (documentWidth - pageX) > 0) {
        calculateValue = true;
    }
    var calculatedWidth = originalWidth + (pageX - originalMouseX);
    var containerLeft = 0;
    if (!sf.base.isNullOrUndefined(containerElement)) {
        containerLeft = containerRectValues.left;
    }
    if (((targetRectValues.left - containerLeft) + calculatedWidth) > maxWidth) {
        calculateValue = false;
        if (targetElement.classList.contains(RESIZE_WITHIN_VIEWPORT)) {
            return;
        }
        targetElement.style.width = maxWidth - (targetRectValues.left - containerLeft) + 'px';
    }
    if (calculateValue) {
        if (calculatedWidth >= minWidth && calculatedWidth <= maxWidth) {
            targetElement.style.width = calculatedWidth + 'px';
        }
    }
}
/* istanbul ignore next */
/**
 *
 * @param {number} minimumHeight - specifies the number
 * @returns {void}
 */
function setMinHeight(minimumHeight) {
    minHeight = minimumHeight;
}
/**
 *
 * @param {number} value - specifies the number value
 * @returns {void}
 */
function setMaxWidth(value) {
    maxWidth = value;
}
/**
 *
 * @param {number} value - specifies the number value
 * @returns {void}
 */
function setMaxHeight(value) {
    maxHeight = value;
}
/**
 * @returns {void}
 */
function removeResize() {
    var handlers = targetElement.querySelectorAll('.' + RESIZE_HANDLER);
    for (var i = 0; i < handlers.length; i++) {
        sf.base.detach(handlers[i]);
    }
    var borderResizers = targetElement.querySelectorAll('.e-dialog-border-resize');
    if (!sf.base.isNullOrUndefined(borderResizers)) {
        for (var i = 0; i < borderResizers.length; i++) {
            sf.base.detach(borderResizers[i]);
        }
    }
}

exports.fit = fit;
exports.isCollide = isCollide;
exports.flip = flip;
exports.calculateRelativeBasedPosition = calculateRelativeBasedPosition;
exports.calculatePosition = calculatePosition;
exports.createResize = createResize;
exports.setMinHeight = setMinHeight;
exports.setMaxWidth = setMaxWidth;
exports.setMaxHeight = setMaxHeight;
exports.removeResize = removeResize;

return exports;

});
window.sf.popups = window.sf.base.extend({}, window.sf.popups, popupsbase({}));


/***/ }),

/***/ "./resources/20.1.61/Scripts/sf-chart.js":
/*!***********************************************!*\
  !*** ./resources/20.1.61/Scripts/sf-chart.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.sfBlazor = window.sfBlazor || {};
window.sfBlazor.Chart = (function () {
'use strict';

/* eslint-disable no-case-declarations */
/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Chart native blazor source file
 */
var SfChart = /** @class */ (function () {
    function SfChart(id, element, dotnetRef, isZooming, isScrollbar, options) {
        if (isZooming === void 0) { isZooming = false; }
        if (isScrollbar === void 0) { isScrollbar = false; }
        this.mouseY = 0;
        this.mouseX = 0;
        this.eventInterval = 80;
        this.chartOnMouseDownRef = null;
        this.mouseMoveRef = null;
        this.mouseMoveThreshold = null;
        this.mouseEndRef = null;
        this.chartOnMouseClickRef = null;
        this.chartRightClickRef = null;
        this.mouseLeaveRef = null;
        this.chartKeyDownRef = null;
        this.chartKeyUpRef = null;
        this.chartMouseWheelRef = null;
        this.chartMouseWheelThreshold = null;
        this.domMouseMoveRef = null;
        this.domMouseMoveThreshold = null;
        this.scrollbarMouseMoveThreshold = null;
        this.scrollbarMouseWheelThreshold = null;
        this.domMouseUpRef = null;
        this.longPressBound = null;
        this.touchObject = null;
        this.pinchStyle = 'opacity: 0; position: absolute; display: block; width: 100px; height: 100px; background: transparent; border: 2px solid blue;';
        this.pinchtarget = null;
        this.documentKeyHandler = function (e) {
            // 74 - J
            if (e.altKey && e.keyCode === 74 && !sf.base.isNullOrUndefined(this.element)) {
                this.element.focus();
            }
        };
        this.id = id;
        this.element = element;
        this.dotnetref = dotnetRef;
        this.isZooming = isZooming;
        this.isScrollbar = isScrollbar;
        this.element.blazor__instance = this;
        this.options = options;
        this.currentLegendIndex = 0;
        this.currentPointIndex = 0;
        this.currentSeriesIndex = 0;
        this.previousTargetId = "";
        this.isZoomed = false;
    }
    SfChart.prototype.render = function () {
        this.unWireEvents(this.id, this.dotnetref);
        this.wireEvents(this.id, this.dotnetref);
    };
    SfChart.prototype.destroy = function () {
        this.unWireEvents(this.id, this.dotnetref);
        this.dotnetref.invokeMethodAsync("DisposeDotNetReference");
    };
    SfChart.prototype.unWireEvents = function (id, dotnetref) {
        var element = document.getElementById(id);
        if (!element) {
            return;
        }
        this.dotnetref = dotnetref;
        Chart.dotnetrefCollection = Chart.dotnetrefCollection.filter(function (item) {
            return item.id !== id;
        });
        /*! Find the Events type */
        var cancelEvent = sf.base.Browser.isPointer ? 'pointerleave' : 'mouseleave';
        /*! Bind the Event handler */
        sf.base.EventHandler.remove(element, sf.base.Browser.touchStartEvent, this.chartOnMouseDownRef);
        element.removeEventListener('mousemove', this.mouseMoveRef);
        element.removeEventListener('touchmove', this.mouseMoveRef);
        sf.base.EventHandler.remove(element, sf.base.Browser.touchEndEvent, this.mouseEndRef);
        sf.base.EventHandler.remove(element, 'click', this.chartOnMouseClickRef);
        sf.base.EventHandler.remove(element, 'contextmenu', this.chartRightClickRef);
        sf.base.EventHandler.remove(element, cancelEvent, this.mouseLeaveRef);
        sf.base.EventHandler.remove(element, 'keydown', this.chartKeyDownRef);
        sf.base.EventHandler.remove(document.body, 'keydown', this.documentKeyHandler);
        sf.base.EventHandler.remove(element, 'keyup', this.chartKeyUpRef);
        if (this.isZooming) {
            var wheelEvent = sf.base.Browser.info.name === 'mozilla' ? (sf.base.Browser.isPointer ? 'mousewheel' : 'DOMMouseScroll') : 'mousewheel';
            element.removeEventListener(wheelEvent, this.chartMouseWheelRef);
        }
        if (this.isScrollbar) {
            window.removeEventListener('mousemove', this.domMouseMoveRef);
            window.removeEventListener('mouseup', this.domMouseUpRef, false);
        }
        var resize = sf.base.Browser.isTouch && 'orientation' in window && 'onorientationchange' in window ? 'orientationchange' : 'resize';
        sf.base.EventHandler.remove(window, resize, Chart.resizeBound);
        if (this.touchObject) {
            this.touchObject.destroy();
            this.touchObject = null;
        }
        /*! Apply the style for chart */
    };
    SfChart.prototype.wireEvents = function (id, dotnetref) {
        var element = document.getElementById(id);
        if (!element) {
            return;
        }
        this.dotnetref = dotnetref;
        Chart.dotnetrefCollection.push({ id: id, dotnetref: dotnetref });
        /*! Find the Events type */
        var cancelEvent = sf.base.Browser.isPointer ? 'pointerleave' : 'mouseleave';
        this.chartOnMouseDownRef = this.chartOnMouseDown.bind(this, dotnetref, id);
        this.mouseMoveRef = this.mouseMove.bind(this, dotnetref, id);
        this.mouseEndRef = this.mouseEnd.bind(this, dotnetref, id);
        this.chartOnMouseClickRef = this.chartOnMouseClick.bind(this, dotnetref, id);
        this.chartRightClickRef = this.chartRightClick.bind(this, dotnetref, id);
        this.chartKeyDownRef = this.chartOnKeyDown.bind(this, this.dotnetref, this.id);
        this.chartKeyUpRef = this.chartOnKeyUp.bind(this, this.dotnetref, this.id);
        this.mouseLeaveRef = this.mouseLeave.bind(this, dotnetref, id);
        /*! Bind the Event handler */
        sf.base.EventHandler.add(element, sf.base.Browser.touchStartEvent, this.chartOnMouseDownRef);
        element.addEventListener('mousemove', this.mouseMoveRef);
        element.addEventListener('touchmove', this.mouseMoveRef);
        sf.base.EventHandler.add(element, sf.base.Browser.touchEndEvent, this.mouseEndRef);
        sf.base.EventHandler.add(element, 'click', this.chartOnMouseClickRef);
        sf.base.EventHandler.add(element, 'contextmenu', this.chartRightClickRef);
        sf.base.EventHandler.add(element, cancelEvent, this.mouseLeaveRef);
        sf.base.EventHandler.add(element, "keydown", this.chartKeyDownRef);
        sf.base.EventHandler.add(document.body, 'keydown', this.documentKeyHandler, this);
        sf.base.EventHandler.add(element, "keyup", this.chartKeyUpRef);
        if (this.isZooming) {
            this.chartMouseWheelRef = this.chartMouseWheel.bind(this, dotnetref, id);
            var wheelEvent = sf.base.Browser.info.name === 'mozilla' ? (sf.base.Browser.isPointer ? 'mousewheel' : 'DOMMouseScroll') : 'mousewheel';
            element.addEventListener(wheelEvent, this.chartMouseWheelRef);
        }
        if (this.isScrollbar) {
            this.domMouseMoveRef = this.domMouseMove.bind(this, dotnetref, id);
            this.domMouseUpRef = this.domMouseUp.bind(this, dotnetref, id);
            window.addEventListener('mousemove', this.domMouseMoveRef);
            window.addEventListener('mouseup', this.domMouseUpRef, false);
        }
        Chart.resizeBound = Chart.chartResize.bind(this, Chart.dotnetrefCollection);
        var resize = sf.base.Browser.isTouch && 'orientation' in window && 'onorientationchange' in window ? 'orientationchange' : 'resize';
        sf.base.EventHandler.add(window, resize, Chart.resizeBound);
        this.longPressBound = this.longPress.bind(this, dotnetref, id);
        this.touchObject = new sf.base.Touch(element, { tapHold: this.longPressBound, tapHoldThreshold: 500 });
        /*! Apply the style for chart */
    };
    SfChart.prototype.getEventArgs = function (e, id) {
        var clientX = e.changedTouches ? e.changedTouches[0].clientX :
            e.clientX;
        var clientY = e.changedTouches ? e.changedTouches[0].clientY :
            e.clientY;
        this.setMouseXY(clientX, clientY, id);
        var touches = e.touches; //pointerId
        var touchList = [];
        if (e.type.indexOf('touch') > -1) {
            for (var i = 0, length_1 = touches.length; i < length_1; i++) {
                touchList.push({ pageX: touches[i].clientX, pageY: touches[i].clientY, pointerId: e.pointerId || 0 });
            }
        }
        return {
            type: e.type,
            clientX: e.clientX,
            clientY: e.clientY,
            mouseX: this.mouseX,
            mouseY: this.mouseY,
            pointerType: e.pointerType,
            target: e.target.id,
            changedTouches: {
                clientX: e.changedTouches ? e.changedTouches[0].clientX : 0,
                clientY: e.changedTouches ? e.changedTouches[0].clientY : 0
            },
            touches: touchList,
            pointerId: e.pointerId
        };
    };
    SfChart.prototype.getWheelArgs = function (e, id) {
        this.setMouseXY(e.clientX, e.clientY, id);
        return {
            detail: e.detail,
            wheelDelta: e['wheelDelta'],
            target: e.currentTarget ? e.currentTarget['id'] : e.srcElement ? e.srcElement['id'] : e.target ? e.target['id'] : '',
            clientX: e.clientX,
            clientY: e.clientY,
            mouseX: this.mouseX,
            mouseY: this.mouseY,
            browserName: sf.base.Browser.info.name,
            isPointer: sf.base.Browser.isPointer
        };
    };
    SfChart.prototype.setMouseXY = function (pageX, pageY, id) {
        var svgRect = document.getElementById(id.replace('_stockChart_chart', '') + '_svg').getBoundingClientRect();
        var rect = document.getElementById(id).getBoundingClientRect();
        this.mouseY = (pageY - rect.top) - Math.max(svgRect.top - rect.top, 0);
        this.mouseX = (pageX - rect.left) - Math.max(svgRect.left - rect.left, 0);
    };
    SfChart.prototype.chartOnMouseDown = function (dotnetref, id, e) {
        this.dotnetref = dotnetref;
        if (e.type.indexOf('touch') > -1) {
            var clientX = e.changedTouches ? e.changedTouches[0].clientX :
                e.clientX;
            var clientY = e.changedTouches ? e.changedTouches[0].clientY :
                e.clientY;
            this.pinchtarget = document.getElementById('pinchtarget');
            this.pinchtarget.setAttribute('style', this.pinchStyle + ' top: ' + (clientY - 50) + 'px; left: ' + (clientX - 50) + 'px;');
        }
        dotnetref.invokeMethodAsync('OnChartMouseDown', this.getEventArgs(e, id));
        return false;
    };
    SfChart.prototype.chartMouseWheel = function (dotnetref, id, e) {
        this.dotnetref = dotnetref;
        dotnetref.invokeMethodAsync('OnChartMouseWheel', this.getWheelArgs(e, id));
        e.preventDefault();
        return false;
    };
    SfChart.prototype.mouseMove = function (dotnetref, id, e) {
        if (this.mouseMoveThreshold == null || (new Date().getTime() - this.mouseMoveThreshold) > this.eventInterval) {
            this.mouseMoveThreshold = new Date().getTime();
            var pageX = void 0;
            var pageY = void 0;
            var touchArg = void 0;
            if (e.type === 'touchmove') {
                this.isTouch = true;
                touchArg = e;
                pageX = touchArg.changedTouches[0].clientX;
                pageY = touchArg.changedTouches[0].clientY;
                if (this.pinchtarget) {
                    this.pinchtarget.setAttribute('style', this.pinchStyle + ' top: ' + (pageY - 50) + 'px; left: ' + (pageX - 50) + 'px;');
                }
                e.preventDefault();
            }
            else {
                this.isTouch = e.pointerType === 'touch' || e.pointerType === '2' || this.isTouch;
                pageX = e.clientX;
                pageY = e.clientY;
            }
            this.dotnetref = dotnetref;
            if (document.getElementById(id.replace('_stockChart_chart', '') + '_svg')) {
                this.setMouseXY(pageX, pageY, id);
                dotnetref.invokeMethodAsync('OnChartMouseMove', this.getEventArgs(e, id));
            }
        }
        return false;
    };
    SfChart.prototype.mouseEnd = function (dotnetref, id, e) {
        this.dotnetref = dotnetref;
        if (this.pinchtarget) {
            this.pinchtarget.setAttribute('style', this.pinchStyle + ' top: -100px; left: -100px;');
        }
        dotnetref.invokeMethodAsync('OnChartMouseEnd', this.getEventArgs(e, id));
        return false;
    };
    SfChart.prototype.chartOnMouseClick = function (dotnetref, id, e) {
        this.dotnetref = dotnetref;
        dotnetref.invokeMethodAsync('OnChartMouseClick', this.getEventArgs(e, id));
        return false;
    };
    SfChart.prototype.chartRightClick = function (dotnetref, id, event) {
        this.dotnetref = dotnetref;
        event.preventDefault();
        event.stopPropagation();
        dotnetref.invokeMethodAsync('OnChartMouseRightClick', this.getEventArgs(event, id));
        return false;
    };
    SfChart.prototype.chartOnKeyDown = function (dotnetref, id, e) {
        this.dotnetref = dotnetref;
        var actionKey = "";
        if (e.code == "Space") {
            e.preventDefault();
        }
        if (this.options.showTooltip && ((e.code == "Tab" && this.previousTargetId.indexOf("Series") > -1) || e.code === "Escape")) {
            actionKey = "ESC";
        }
        if (e.ctrlKey && (e.key === '+' || e.code === 'Equal' || e.key === '-' || e.code === 'Minus')) {
            e.preventDefault();
            this.isZoomed = this.options.enableZoom;
            Chart.fadeOut(this.element);
            actionKey = this.isZoomed ? e.code : "";
        }
        else if (e["keyCode"] === 82 && this.isZoomed) { // KeyCode 82 (R) for reseting
            e.preventDefault();
            this.isZoomed = false;
            actionKey = "R";
        }
        else if (e.code.indexOf("Arrow") > -1) {
            e.preventDefault();
            this.isZoomed = document.getElementById(this.element.id + "_Zooming_KitCollection") ? this.isZoomed : false;
            if (this.isZoomed && e.target['id'].indexOf("chart_legend") == -1 && e.target['id'] !== this.element.id) {
                Chart.focusTarget(this.element.id);
            }
            actionKey = this.isZoomed && e.target['id'].indexOf("chart_legend") == -1 ? e.code : "";
        }
        if (e.ctrlKey && (e.key === 'p')) {
            e.preventDefault();
            actionKey = "CtrlP";
        }
        if (actionKey != "")
            dotnetref.invokeMethodAsync("OnChartKeyboardNavigations", actionKey, e.target['id']);
        return false;
    };
    SfChart.prototype.chartOnKeyUp = function (dotnetref, id, e) {
        this.dotnetref = dotnetref;
        var actionKey = "";
        var targetId = e.target['id'];
        var groupElement;
        var markerGroup;
        var targetElement = e.target;
        var titleElement = Chart.getElement(this.element.id + "_ChartTitle");
        var seriesElement = Chart.getElement(this.element.id + "SeriesCollection");
        var legendElement = Chart.getElement(this.element.id + "_chart_legend_translate_g");
        var pagingElement = Chart.getElement(this.element.id + "_chart_legend_pageup");
        if (titleElement) {
            titleElement.setAttribute("class", "e-chart-focused");
        }
        if (seriesElement && seriesElement.firstElementChild) {
            var firstChild = seriesElement.firstElementChild.children[1];
            if (firstChild) {
                var className = firstChild.getAttribute("class");
                if (className && className.indexOf("e-chart-focused") === -1) {
                    className = className + " e-chart-focused";
                }
                else if (!className) {
                    className = "e-chart-focused";
                }
                firstChild.setAttribute("class", className + " e-chart-focused");
            }
        }
        if (legendElement) {
            var firstChild = legendElement.firstElementChild;
            var className = firstChild.getAttribute("class");
            if (className && className.indexOf("e-chart-focused") === -1) {
                className = className + " e-chart-focused";
            }
            else if (!className) {
                className = "e-chart-focused";
            }
            firstChild.setAttribute("class", className);
        }
        if (pagingElement) {
            pagingElement.setAttribute("class", "e-chart-focused");
        }
        if (e.code == "Tab") {
            if (this.previousTargetId != "") {
                if ((this.previousTargetId.indexOf("_Series_") > -1 && targetId.indexOf("_Series_") == -1)) {
                    groupElement = Chart.getElement(this.element.id + "SeriesCollection");
                    var previousElement = this.previousTargetId.indexOf("_Symbol") > -1 ?
                        Chart.getElement(this.element.id + "SymbolGroup" + this.currentSeriesIndex).children[this.currentPointIndex + 1] :
                        (this.previousTargetId.indexOf("_Point_") > -1 ?
                            groupElement.children[this.currentSeriesIndex].children[this.currentPointIndex + 1] :
                            groupElement.children[this.currentSeriesIndex]);
                    Chart.setTabIndex(previousElement, groupElement.firstElementChild);
                    this.currentPointIndex = 0;
                    this.currentSeriesIndex = 0;
                }
                else if (this.previousTargetId.indexOf("_chart_legend_page") > -1 && targetId.indexOf("_chart_legend_page") == -1
                    && targetId.indexOf("_chart_legend_g_") == -1) {
                    Chart.setTabIndex(e.target, Chart.getElement(this.element.id + "_chart_legend_pageup"));
                }
                else if (this.previousTargetId.indexOf("_chart_legend_g_") > -1 && targetId.indexOf("_chart_legend_g_") == -1) {
                    groupElement = Chart.getElement(this.element.id + "_chart_legend_translate_g");
                    Chart.setTabIndex(groupElement.children[this.currentLegendIndex], groupElement.firstElementChild);
                }
            }
            this.previousTargetId = targetId;
            if (targetId.indexOf("SeriesGroup") > -1 && targetElement.children[1]) {
                this.currentSeriesIndex = +targetId.split("SeriesGroup")[1];
                targetElement.removeAttribute("tabindex");
                targetElement.blur();
                if (targetElement.children[1].id.indexOf("_Point_") == -1) {
                    markerGroup = Chart.getElement(this.element.id + "SymbolGroup" + targetId.split("SeriesGroup")[1]);
                }
                targetId = Chart.focusChild(markerGroup != null ? markerGroup.children[1] : targetElement.children[1]);
            }
            actionKey = this.options.enableHighlight || this.options.showTooltip ? "Tab" : "";
        }
        else if (e.code.indexOf("Arrow") > -1) {
            e.preventDefault();
            this.previousTargetId = targetId;
            if (targetId.indexOf("_chart_legend_page") > -1) {
                if (e.code == "ArrowLeft") {
                    Chart.getElement(this.element.id + "_chart_legend_pagedown").removeAttribute("tabindex");
                    Chart.focusChild(Chart.getElement(this.element.id + "_chart_legend_pageup"));
                }
                else if (e.code == "ArrowRight") {
                    Chart.getElement(this.element.id + "_chart_legend_pageup").removeAttribute("tabindex");
                    Chart.focusChild(Chart.getElement(this.element.id + "_chart_legend_pagedown"));
                }
            }
            else if ((targetId.indexOf("_chart_legend_") > -1)) {
                var legendElement_1 = targetElement.parentElement.children;
                legendElement_1[this.currentLegendIndex].removeAttribute("tabindex");
                this.currentLegendIndex += (e.code == "ArrowUp" || e.code == "ArrowRight") ? +1 : -1;
                this.currentLegendIndex = Chart.getActualIndex(this.currentLegendIndex, legendElement_1.length);
                var currentLegend = legendElement_1[this.currentLegendIndex];
                Chart.focusChild(currentLegend);
                targetId = currentLegend.children[1].id;
                actionKey = this.options.enableHighlight ? "ArrowMove" : "";
            }
            else if (targetId.indexOf("_Series_") > -1) {
                groupElement = targetElement.parentElement.parentElement;
                var currentPoint = e.target;
                targetElement.removeAttribute("tabindex");
                targetElement.blur();
                if (e.code == "ArrowRight" || e.code == "ArrowLeft") {
                    var seriesIndexes = [];
                    for (var i = 0; i < groupElement.children.length; i++) {
                        if (groupElement.children[i].id.indexOf("SeriesGroup") > -1) {
                            seriesIndexes.push(+groupElement.children[i].id.split("SeriesGroup")[1]);
                        }
                    }
                    this.currentSeriesIndex = seriesIndexes.indexOf(this.currentSeriesIndex) + (e.code == "ArrowRight" ? 1 : -1);
                    this.currentPointIndex = 0;
                    this.currentSeriesIndex = seriesIndexes[Chart.getActualIndex(this.currentSeriesIndex, seriesIndexes.length)];
                    groupElement = Chart.getElement(this.element.id + "SeriesGroup" + this.currentSeriesIndex);
                    markerGroup = Chart.getElement(this.element.id + "SymbolGroup" + this.currentSeriesIndex);
                    currentPoint = groupElement.children[1] && groupElement.children[1].id.indexOf("_Point_") == -1 && markerGroup ? markerGroup.children[1] :
                        groupElement.children[1];
                }
                else {
                    this.currentPointIndex += e.code == "ArrowUp" ? 1 : -1;
                    if (targetId.indexOf("_Symbol") > -1) {
                        this.currentPointIndex = Chart.getActualIndex(this.currentPointIndex, Chart.getElement(this.element.id + "SymbolGroup" + this.currentSeriesIndex).childElementCount - 1);
                        currentPoint = Chart.getElement(this.element.id + "_Series_" + this.currentSeriesIndex + "_Point_" + this.currentPointIndex + "_Symbol");
                    }
                    else if (targetId.indexOf("_Point_") > -1) {
                        this.currentPointIndex = Chart.getActualIndex(this.currentPointIndex, Chart.getElement(this.element.id + "SeriesGroup" + this.currentSeriesIndex).childElementCount - 1);
                        currentPoint = Chart.getElement(this.element.id + "_Series_" + this.currentSeriesIndex + "_Point_" + this.currentPointIndex);
                    }
                }
                targetId = currentPoint ? Chart.focusChild(currentPoint) : "";
                actionKey = this.options.showTooltip ? "ArrowMove" : "";
            }
        }
        else if ((e.code == "Enter" || e.code == "Space") && ((targetId.indexOf("_chart_legend_") > -1) ||
            (targetId.indexOf("_Point_") > -1))) {
            targetId = (targetId.indexOf("_chart_legend_page") > -1) ? targetId : ((targetId.indexOf("_chart_legend_") > -1) ?
                targetElement.children[1].id : targetId);
            actionKey = "Enter";
        }
        if (actionKey != "")
            dotnetref.invokeMethodAsync("OnChartKeyboardNavigations", actionKey, targetId);
        return false;
    };
    SfChart.prototype.mouseLeave = function (dotnetref, id, e) {
        this.dotnetref = dotnetref;
        dotnetref.invokeMethodAsync('OnChartMouseLeave', this.getEventArgs(e, id));
        return false;
    };
    SfChart.prototype.longPress = function (dotnetref, id, e) {
        this.dotnetref = dotnetref;
        var clientX = e && e.originalEvent.changedTouches ? e.originalEvent.changedTouches[0].clientX : 0;
        var clientY = e && e.originalEvent.changedTouches ? e.originalEvent.changedTouches[0].clientY : 0;
        this.setMouseXY(clientX, clientY, id);
        var args = {
            type: 'TapHold',
            clientX: clientX,
            clientY: clientY,
            mouseX: this.mouseX,
            mouseY: this.mouseY,
            pointerType: '',
            target: '',
            changedTouches: {
                clientX: clientX,
                clientY: clientY
            },
            touches: [],
            pointerId: 0
        };
        dotnetref.invokeMethodAsync('OnChartLongPress', args);
        return false;
    };
    SfChart.prototype.domMouseMove = function (dotnetref, id, event) {
        if (this.domMouseMoveThreshold == null || (new Date().getTime() - this.domMouseMoveThreshold) > this.eventInterval) {
            this.domMouseMoveThreshold = new Date().getTime();
            if (!sf.base.isNullOrUndefined(Chart.svgId) && Chart.svgId.indexOf(id) > -1) {
                var evtArgs = Chart.getScrollEventArgs(event, true);
                dotnetref.invokeMethodAsync('ScrollMouseMove', evtArgs);
            }
        }
        return false;
    };
    SfChart.prototype.domMouseUp = function (dotnetref, id, event) {
        if (!sf.base.isNullOrUndefined(Chart.svgId) && Chart.svgId.indexOf(id) > -1) {
            var evtArgs = Chart.getScrollEventArgs(event, true);
            dotnetref.invokeMethodAsync('ScrollMouseUp', evtArgs);
            Chart.svgId = null;
        }
        return false;
    };
    return SfChart;
}());
var Chart = {
    initialize: function (element, dotnetRef, isZooming, isScrollbar, options) {
        var instance = new SfChart(element.id, element, dotnetRef, isZooming, isScrollbar, options);
        instance.render();
    },
    destroy: function (element) {
        var currentInstance = element.blazor__instance;
        if (!sf.base.isNullOrUndefined(currentInstance)) {
            currentInstance.destroy();
        }
    },
    focusTarget: function (id) {
        var element;
        var className;
        if (id.indexOf("_chart_legend_") > -1) {
            element = this.getElement(id).parentElement;
            className = element.getAttribute("class");
            this.setTabIndex(this.getElement(this.id + "_chart_legend_translate_g").firstElementChild, this.getElement(this.id + "SeriesCollection").firstElementChild);
            element.setAttribute("tabindex", "0");
            if (className && className.indexOf("e-chart-focused") === -1) {
                className = className + " e-chart-focused";
            }
            else if (!className) {
                className = "e-chart-focused";
            }
        }
        else {
            element = this.getElement(id);
            className = "e-chart-focused";
        }
        element.setAttribute("tabindex", "0");
        element.setAttribute("class", className);
        element.focus();
    },
    focusChild: function (element) {
        element.setAttribute("tabindex", "0");
        var className = element.getAttribute("class");
        element.setAttribute("tabindex", "0");
        if (className && className.indexOf("e-chart-focused") === -1) {
            className = className + " e-chart-focused";
        }
        else if (!className) {
            className = "e-chart-focused";
        }
        element.setAttribute("class", className);
        element.focus();
        return element.id;
    },
    getActualIndex: function (index, totalLength) {
        return index > totalLength - 1 ? 0 : (index < 0 ? totalLength - 1 : index);
    },
    setTabIndex: function (previousElement, currentElement) {
        if (previousElement) {
            previousElement.removeAttribute("tabindex");
        }
        if (currentElement) {
            currentElement.setAttribute("tabindex", "0");
        }
    },
    eventInterval: 80,
    dotnetref: {},
    getScrollEventArgs: function (e, lastScrollbar) {
        if (lastScrollbar === void 0) { lastScrollbar = false; }
        var clientX = e.changedTouches ? e.changedTouches[0].clientX :
            e.clientX;
        var clientY = e.changedTouches ? e.changedTouches[0].clientY :
            e.clientY;
        var mouseXY = this.setScrollMouseXY(clientX, clientY, e.target['id'], lastScrollbar);
        var touches = e.touches; //pointerId
        var touchList = [];
        if (e.type.indexOf('touch') > -1) {
            for (var i = 0, length_2 = touches.length; i < length_2; i++) {
                touchList.push({ pageX: touches[i].clientX, pageY: touches[i].clientY, pointerId: e.pointerId || 0 });
            }
        }
        var id = e.target.id;
        id = id.indexOf('scrollBar') > -1 ? id : this.svgId;
        return {
            type: e.type,
            clientX: e.clientX,
            clientY: e.clientY,
            mouseX: mouseXY.mouseX,
            mouseY: mouseXY.mouseY,
            pointerType: e.pointerType,
            target: id,
            changedTouches: {
                clientX: e.changedTouches ? e.changedTouches[0].clientX : 0,
                clientY: e.changedTouches ? e.changedTouches[0].clientY : 0
            },
            touches: touchList,
            pointerId: e.pointerId
        };
    },
    getScrollWheelArgs: function (e) {
        var mouseXY = this.setScrollMouseXY(e.clientX, e.clientY, e.currentTarget['id']);
        return {
            detail: e.detail,
            wheelDelta: e['wheelDelta'],
            target: e.currentTarget ? e.currentTarget['id'] : e.srcElement ? e.srcElement['id'] : e.target ? e.target['id'] : '',
            clientX: e.clientX,
            clientY: e.clientY,
            mouseX: mouseXY.mouseX,
            mouseY: mouseXY.mouseY,
            browserName: sf.base.Browser.info.name,
            isPointer: sf.base.Browser.isPointer
        };
    },
    svgId: null,
    setScrollMouseXY: function (pageX, pageY, id, lastScrollbar) {
        if (lastScrollbar === void 0) { lastScrollbar = false; }
        this.svgId = !lastScrollbar ? id : this.svgId;
        if (!lastScrollbar && id.indexOf('_scrollBar_svg') === -1) {
            var chartId_1 = id.split('_scrollBar')[0];
            var splitId = id.split('_');
            this.svgId = chartId_1 + '_scrollBar_svg' + splitId[splitId.length - 1];
            this.dotnetref = this.dotnetrefCollection.find(function (item) { return chartId_1 === item.id; }).dotnetref;
        }
        var svgRect = this.getElement(this.svgId).getBoundingClientRect();
        var mouseX = pageX - Math.max(svgRect.left, 0);
        var mouseY = pageY - Math.max(svgRect.top, 0);
        return { mouseX: mouseX, mouseY: mouseY };
    },
    scrollMouseDown: function (event) {
        var evtArgs = this.getScrollEventArgs(event);
        this.dotnetref.invokeMethodAsync('ScrollMouseDown', evtArgs);
        return false;
    },
    scrollMouseMove: function (event) {
        if (this.scrollMouseMoveThreshold == null || (new Date().getTime() - this.scrollMouseMoveThreshold) > this.eventInterval) {
            this.scrollMouseMoveThreshold = new Date().getTime();
            var evtArgs = this.getScrollEventArgs(event);
            this.dotnetref.invokeMethodAsync('ScrollMouseMove', evtArgs);
        }
        return false;
    },
    scrollMouseUp: function (event) {
        var evtArgs = this.getScrollEventArgs(event);
        this.dotnetref.invokeMethodAsync('ScrollMouseUp', evtArgs);
        this.svgId = null;
        return false;
    },
    scrollMouseWheel: function (event) {
        if (this.scrollbarMouseWheelThreshold == null || (new Date().getTime() - this.scrollbarMouseWheelThreshold) > this.eventInterval) {
            this.scrollbarMouseWheelThreshold = new Date().getTime();
            var evtArgs = this.getScrollWheelArgs(event);
            this.dotnetref.invokeMethodAsync('ScrollMouseWheel', evtArgs);
        }
        return false;
    },
    dotnetrefCollection: [],
    renderTooltip: function (tooltipOptions, elementId, tooltipModule, element) {
        var svgElement = document.getElementById(elementId + '_svg');
        var firstRender = svgElement && parseInt(svgElement.getAttribute('opacity'), 10) > 0 ? false : true;
        var options = JSON.parse(tooltipOptions);
        var currentInstance = element.blazor__instance;
        if (firstRender && !sf.base.isNullOrUndefined(currentInstance)) {
            currentInstance.tooltip = new sf.svgbase.Tooltip(options);
            currentInstance.tooltip.enableRTL = options.enableRTL;
            currentInstance.tooltip.appendTo('#' + elementId);
            currentInstance.tooltip.animationComplete = function (args) {
                if (args.tooltip.fadeOuted) {
                    tooltipModule.invokeMethodAsync('TooltipAnimationComplete');
                }
            };
        }
        else if (!sf.base.isNullOrUndefined(currentInstance.tooltip)) {
            currentInstance.tooltip.location = new sf.svgbase.TooltipLocation(options.location.x, options.location.y);
            currentInstance.tooltip.content = options.content;
            currentInstance.tooltip.header = options.header;
            currentInstance.tooltip.offset = options.offset;
            currentInstance.tooltip.palette = options.palette;
            currentInstance.tooltip.shapes = options.shapes;
            currentInstance.tooltip.data = options.data;
            currentInstance.tooltip.template = options.template;
            currentInstance.tooltip.textStyle.color = options.textStyle.color || currentInstance.tooltip.textStyle.color;
            currentInstance.tooltip.textStyle.fontFamily = options.textStyle.fontFamily || currentInstance.tooltip.textStyle.fontFamily;
            currentInstance.tooltip.textStyle.fontStyle = options.textStyle.fontStyle || currentInstance.tooltip.textStyle.fontStyle;
            currentInstance.tooltip.textStyle.fontWeight = options.textStyle.fontWeight || currentInstance.tooltip.textStyle.fontWeight;
            currentInstance.tooltip.textStyle.opacity = options.textStyle.opacity || currentInstance.tooltip.textStyle.opacity;
            currentInstance.tooltip.textStyle.size = options.textStyle.size || currentInstance.tooltip.textStyle.size;
            currentInstance.tooltip.isNegative = options.isNegative;
            currentInstance.tooltip.clipBounds = new sf.svgbase.TooltipLocation(options.clipBounds.x, options.clipBounds.y);
            currentInstance.tooltip.arrowPadding = options.arrowPadding;
            currentInstance.tooltip.dataBind();
        }
    },
    fadeOut: function (element) {
        if (!element || sf.base.isNullOrUndefined(element.blazor__instance) ||
            (!sf.base.isNullOrUndefined(element.blazor__instance) && sf.base.isNullOrUndefined(element.blazor__instance.tooltip))) {
            return;
        }
        this.removeTooltipCommentElement(element);
        element.blazor__instance.tooltip.fadeOut();
    },
    removeTooltipCommentElement: function (chartInstance) {
        var tooltipDivElement = this.getElement(chartInstance.blazor__instance.tooltip.element.id);
        if (tooltipDivElement && !chartInstance.blazor__instance.isRemoveCommentElement && tooltipDivElement.childNodes.length > 1) {
            var tooltipElements = tooltipDivElement.childNodes;
            var commentElements = [];
            for (var i = 0; i < tooltipElements.length; i++) {
                if (tooltipElements[i].nodeName.match('#comment') || tooltipElements[i].nodeName.match('#text')) {
                    commentElements.push(tooltipElements[i]);
                }
            }
            for (var _i = 0, commentElements_1 = commentElements; _i < commentElements_1.length; _i++) {
                var element = commentElements_1[_i];
                sf.base.remove(element);
                chartInstance.blazor__instance.isRemoveCommentElement = true;
            }
        }
    },
    getParentElementBoundsById: function (id) {
        var element = document.getElementById(id);
        if (element) {
            element.style.width = '100%';
            element.style.height = '100%';
            var elementRect = element.getBoundingClientRect();
            return {
                width: elementRect.width || element.clientWidth || element.offsetWidth,
                height: elementRect.height || element.clientHeight || element.offsetHeight,
                left: elementRect.left,
                top: elementRect.top,
                right: elementRect.right,
                bottom: elementRect.bottom
            };
        }
        return { width: 0, height: 0, left: 0, top: 0, right: 0, bottom: 0 };
    },
    getElementBoundsById: function (id, isSetId) {
        if (isSetId === void 0) { isSetId = true; }
        if (isSetId) {
            this.id = id;
        }
        var element = document.getElementById(id);
        if (element) {
            var elementRect = element.getBoundingClientRect();
            return {
                width: element.clientWidth || element.offsetWidth,
                height: element.clientHeight || element.offsetHeight,
                left: elementRect.left,
                top: elementRect.top,
                right: elementRect.right,
                bottom: elementRect.bottom
            };
        }
        return { width: 0, height: 0, left: 0, top: 0, right: 0, bottom: 0 };
    },
    getBrowserDeviceInfo: function () {
        return {
            browserName: sf.base.Browser.info.name,
            isPointer: sf.base.Browser.isPointer,
            isDevice: sf.base.Browser.isDevice,
            isTouch: sf.base.Browser.isTouch,
            isIos: sf.base.Browser.isIos || sf.base.Browser.isIos7
        };
    },
    setZoomingCipPath: function (seriesCollection, indicator, clipUrl) {
        var seriesEle = document.getElementById(seriesCollection);
        var indicatorEle = document.getElementById(indicator);
        if (seriesEle) {
            seriesEle.setAttribute('clip-path', clipUrl);
        }
        if (indicatorEle) {
            seriesEle.setAttribute('clip-path', clipUrl);
        }
    },
    setZoomingElementAttributes: function (translate, category, seriesG, errorbarG, symbolG, textG, shapeG, element) {
        if (category === 'Indicator' && seriesG && seriesG.parentElement) {
            seriesG.parentElement.setAttribute('transform', translate);
        }
        if (seriesG) {
            seriesG.setAttribute('transform', translate);
        }
        if (errorbarG) {
            errorbarG.setAttribute('transform', translate);
        }
        if (symbolG) {
            symbolG.setAttribute('transform', translate);
        }
        if (textG) {
            textG.setAttribute('visibility', 'hidden');
        }
        if (shapeG) {
            shapeG.setAttribute('visibility', 'hidden');
        }
        if (element) {
            element.style.visibility = 'hidden';
        }
    },
    measureBreakText: function (text, size, color, fontFamily, fontWeight, fontStyle, opacity) {
        var font = {
            color: color, size: size, fontFamily: fontFamily,
            fontWeight: fontWeight, fontStyle: fontStyle, opacity: parseInt(opacity, 10)
        };
        return sf.svgbase.measureText(text, font);
    },
    getAllCharacters: function () {
        var charCollection = [];
        for (var i = 33; i < 591; i++) {
            charCollection.push(String.fromCharCode(i));
        }
        return charCollection;
    },
    measureText: function (text, fontWeight, fontStyle, fontFamily) {
        var textObject = document.getElementById('sfchartmeasuretext');
        if (textObject === null) {
            textObject = sf.base.createElement('text', { id: 'sfchartmeasuretext' });
            document.body.appendChild(textObject);
        }
        if (text === ' ') {
            text = '&nbsp;';
        }
        textObject.innerHTML = text;
        textObject.style.position = 'fixed';
        textObject.style.fontSize = '100px';
        textObject.style.fontWeight = fontWeight;
        textObject.style.fontStyle = fontStyle;
        textObject.style.fontFamily = fontFamily;
        textObject.style.visibility = 'hidden';
        textObject.style.top = '-100';
        textObject.style.left = '0';
        textObject.style.whiteSpace = 'nowrap';
        textObject.style.lineHeight = 'normal';
        return {
            Width: textObject.clientWidth,
            Height: textObject.clientHeight
        };
    },
    getCharCollectionSize: function (fontkeys) {
        var charSizeList = [];
        var charSize;
        var tempSizeList = {};
        var charList = this.getAllCharacters();
        var charLength = charList.length;
        var fontKeysLength = fontkeys.length;
        for (var i = 0; i < fontKeysLength; i++) {
            var fontValues = fontkeys[i].split('_');
            var fontWeight = fontValues[0];
            var fontStyle = fontValues[1];
            var fontFamily = fontValues[2];
            for (var j = 0; j < charLength; j++) {
                charSize = this.measureText(charList[j], fontWeight, fontStyle, fontFamily);
                tempSizeList[charList[j]] = { X: charSize.Width, Y: charSize.Height };
            }
            charSizeList.push(tempSizeList);
        }
        var result = JSON.stringify(charSizeList);
        return result;
    },
    getCharSizeByFontKeys: function (fontkeys) {
        var charSizeList = {};
        var fontKeysLength = fontkeys.length;
        var fontValues = [];
        var charSize;
        for (var i = 0; i < fontKeysLength; i++) {
            fontValues = fontkeys[i].split('_');
            charSize = this.measureText(fontValues[0], fontValues[1], fontValues[2], fontValues[3]);
            charSizeList[fontkeys[i]] = { X: charSize.Width, Y: charSize.Height };
        }
        var result = JSON.stringify(charSizeList);
        return result;
    },
    getElementRect: function (id) {
        var element = document.getElementById(id);
        var rect = element.getBoundingClientRect();
        sf.base.remove(element);
        return {
            Left: rect.left,
            Right: rect.right,
            Top: rect.top,
            Bottom: rect.bottom,
            Width: rect.width,
            Height: rect.height
        };
    },
    getElement: function (id) {
        return document.getElementById(id);
    },
    drawTrackBall: function (svgId, option, tagName, className, clipPath, transform) {
        var parentElement = this.getElement(svgId);
        if (parentElement) {
            var childElement = document.createElementNS('http://www.w3.org/2000/svg', tagName);
            var keys = Object.keys(option);
            var key = '';
            for (var i = 0; i < keys.length; i++) {
                key = (keys[i] === 'strokeWidth') ? 'stroke-width' : (keys[i] === 'strokeDashArray') ?
                    'stroke-dashArray' : (keys[i] === 'direction') ? 'd' : keys[i];
                childElement.setAttribute(key, option[keys[i]]);
            }
            childElement.setAttribute('class', className);
            childElement.setAttribute('clip-path', clipPath);
            childElement.setAttribute('transform', transform);
            parentElement.appendChild(childElement);
        }
    },
    removeHighLightedMarker: function (className) {
        var elements = document.getElementsByClassName(className);
        for (var i = 0, len = elements.length; i < len; i++) {
            sf.base.remove(elements[0]);
        }
    },
    setAttribute: function (id, attribute, value) {
        var element = this.getElement(id);
        if (element) {
            element.setAttribute(attribute, value);
        }
    },
    createTooltip: function (id, text, top, left, fontSize) {
        var tooltip = document.getElementById(id);
        var style = 'top:' + ((window.scrollY || 0) + top).toString() + 'px;' +
            'left:' + left.toString() + 'px;' +
            'color:black !important; ' +
            'background:#FFFFFF !important; ' +
            'position:absolute;border:1px solid #707070;font-size:' + fontSize + ';border-radius:2px; z-index:1';
        if (!tooltip) {
            tooltip = sf.base.createElement('div', {
                id: id, innerHTML: '&nbsp;' + text + '&nbsp;', styles: style
            });
            document.body.appendChild(tooltip);
        }
        else {
            tooltip.setAttribute('innerHTML', '&nbsp;' + text + '&nbsp;');
            tooltip.setAttribute('styles', style);
        }
    },
    removeElement: function (id) {
        var element = this.getElement(id);
        if (element) {
            sf.base.remove(element);
        }
    },
    applySelection: function (id, color) {
        var elements = document.getElementById(id);
        var childNodes;
        if (elements && elements.childNodes) {
            childNodes = elements.childNodes;
            for (var i = 1, length_3 = childNodes.length; i < length_3; i++) {
                if (childNodes[i] && childNodes[i].tagName !== 'rect' && childNodes[i].setAttribute) {
                    childNodes[i].setAttribute('fill', color);
                }
            }
        }
    },
    getAndSetTextContent: function (id, get, value) {
        var element = document.getElementById(id);
        if (element) {
            if (get) {
                return element.textContent;
            }
            else {
                element.textContent = value;
            }
        }
        return null;
    },
    doProgressiveAnimation: function (id, clipId, duration, delay, strokeDashArray) {
        var clipElement = this.getElement(clipId);
        var path = this.getElement(id);
        var animation = new sf.base.Animation({});
        var pathLength = path.getTotalLength();
        var currentTime;
        path.setAttribute('visibility', 'hidden');
        animation.animate(path, {
            duration: duration + delay,
            delay: delay,
            progress: function (args) {
                clipElement.setAttribute('visibility', 'visible');
                if (args.timeStamp >= args.delay) {
                    path.setAttribute('visibility', 'visible');
                    currentTime = Math.abs(Math.round(((args.timeStamp - args.delay) * pathLength) / args.duration));
                    path.setAttribute('stroke-dasharray', currentTime + ',' + pathLength);
                }
            },
            end: function () {
                path.setAttribute('stroke-dasharray', strokeDashArray);
            }
        });
    },
    linear: function (currentTime, startValue, endValue, duration) {
        return -endValue * Math.cos(currentTime / duration * (Math.PI / 2)) + endValue + startValue;
    },
    doLinearAnimation: function (id, duration, delay, isInverted) {
        var clipRect = this.getElement(id);
        var animation = new sf.base.Animation({});
        var effect = this.linear;
        var elementHeight = +clipRect.getAttribute('height');
        var elementWidth = +clipRect.getAttribute('width');
        var xCenter = +clipRect.getAttribute('x');
        var yCenter = isInverted ? +clipRect.getAttribute('height') + +clipRect.getAttribute('y') :
            +clipRect.getAttribute('y');
        var value;
        animation.animate(clipRect, {
            duration: duration,
            delay: delay,
            progress: function (args) {
                if (args.timeStamp >= args.delay) {
                    clipRect.setAttribute('visibility', 'visible');
                    if (isInverted) {
                        value = effect(args.timeStamp - args.delay, 0, elementHeight, args.duration);
                        clipRect.setAttribute('transform', 'translate(' + xCenter + ' ' + yCenter +
                            ') scale(1,' + (value / elementHeight) + ') translate(' + (-xCenter) + ' ' + (-yCenter) + ')');
                    }
                    else {
                        value = effect(args.timeStamp - args.delay, 0, elementWidth, args.duration);
                        clipRect.setAttribute('transform', 'translate(' + xCenter + ' ' + yCenter +
                            ') scale(' + (value / elementWidth) + ', 1) translate(' + (-xCenter) + ' ' + (-yCenter) + ')');
                    }
                }
            },
            end: function () {
                clipRect.setAttribute('transform', 'translate(0,0)');
            }
        });
    },
    filterCommentElement: function (id) {
        var element = this.getElement(id);
        if (!element) {
            return null;
        }
        var groupElement = element.childNodes;
        var pathElement = [];
        for (var i = 0; i < groupElement.length; i++) {
            if (!groupElement[i].nodeName.match('#comment')) {
                pathElement.push(groupElement[i]);
            }
        }
        return pathElement;
    },
    doInitialAnimation: function (info) {
        for (var infoIndex = 0; infoIndex < info.length; infoIndex++) {
            switch (info[infoIndex].type) {
                case 'Rect':
                    var seriesClipPath = this.getElement(info[infoIndex].clipPathId);
                    var seriesPathElement = this.filterCommentElement(info[infoIndex].elementId);
                    for (var i = 0; i < info[infoIndex].pointIndex.length; i++) {
                        this.doRectAnimation(seriesPathElement[info[infoIndex].pointIndex[i]], seriesClipPath, info[infoIndex].duration, info[infoIndex].delay, info[infoIndex].pointX[i], info[infoIndex].pointY[i], info[infoIndex].pointWidth[i], info[infoIndex].pointHeight[i], info[infoIndex].isInvertedAxis);
                    }
                    break;
                case 'Progressive':
                    this.doProgressiveAnimation(info[infoIndex].elementId, info[infoIndex].clipPathId, info[infoIndex].duration, info[infoIndex].delay, info[infoIndex].strokeDashArray);
                    break;
                case 'Linear':
                    this.doLinearAnimation(info[infoIndex].elementId, info[infoIndex].duration, info[infoIndex].delay, info[infoIndex].isInvertedAxis);
                    break;
                case 'Marker':
                    var markerClipPath = this.getElement(info[infoIndex].clipPathId);
                    var markerElement = this.filterCommentElement(info[infoIndex].elementId);
                    for (var i = 0; i < info[infoIndex].pointIndex.length; i++) {
                        this.doMarkerAnimate(markerElement[info[infoIndex].pointIndex[i]], markerClipPath, info[infoIndex].duration, info[infoIndex].delay, info[infoIndex].pointX[i], info[infoIndex].pointY[i]);
                    }
                    break;
                case 'PolarRadar':
                    var polarseriesClipPath = this.getElement(info[infoIndex].clipPathId);
                    var polarseriesPathElement = this.filterCommentElement(info[infoIndex].elementId);
                    for (var i = 0; i < polarseriesPathElement.length; i++) {
                        this.doPolarRadarAnimation(polarseriesPathElement[i], polarseriesClipPath, info[infoIndex].duration, info[infoIndex].delay, info[infoIndex].pointX[0], info[infoIndex].pointY[0]);
                    }
                    break;
            }
            if (!sf.base.isNullOrUndefined(info[infoIndex].markerInfo)) {
                var markerClipPath = this.getElement(info[infoIndex].markerInfo.markerClipPathId);
                var markerElement = this.filterCommentElement(info[infoIndex].markerInfo.markerElementId);
                for (var i = 0; i < info[infoIndex].markerInfo.pointIndex.length; i++) {
                    this.doMarkerAnimate(markerElement[info[infoIndex].markerInfo.pointIndex[i]], markerClipPath, 200, info[infoIndex].duration + info[infoIndex].delay, info[infoIndex].markerInfo.pointX[i], info[infoIndex].markerInfo.pointY[i]);
                    if (info[infoIndex].markerInfo.lowPointIndex.length > 0) {
                        this.doMarkerAnimate(markerElement[info[infoIndex].markerInfo.lowPointIndex[i]], markerClipPath, 200, info[infoIndex].duration + info[infoIndex].delay, info[infoIndex].markerInfo.lowPointX[i], info[infoIndex].markerInfo.lowPointY[i]);
                    }
                }
            }
            if (!sf.base.isNullOrUndefined(info[infoIndex].dataLabelInfo)) {
                if (info[infoIndex].dataLabelInfo.templateId.length === 0) {
                    this.doDataLabelAnimation(info[infoIndex].dataLabelInfo.shapeGroupId, info[infoIndex].dataLabelInfo.textGroupId, '', info[infoIndex].clipPathId, 200, info[infoIndex].duration + info[infoIndex].delay);
                }
                else {
                    for (var i = 0; i < info[infoIndex].dataLabelInfo.templateId.length; i++) {
                        this.doDataLabelAnimation('', '', info[infoIndex].dataLabelInfo.templateId[i], '', 200, info[infoIndex].duration + info[infoIndex].delay);
                    }
                }
            }
            if (!sf.base.isNullOrUndefined(info[infoIndex].errorBarInfo)) {
                this.doErrorBarAnimation(info[infoIndex].errorBarInfo.errorBarElementId, info[infoIndex].errorBarInfo.errorBarClipPathId, info[infoIndex].duration + info[infoIndex].delay, info[infoIndex].isInvertedAxis);
            }
        }
    },
    doDynamicAnimation: function (pathInfo, rectInfo, textInfo) {
        for (var pathIndex = 0; pathIndex < pathInfo.length; pathIndex++) {
            if (!sf.base.isNullOrUndefined(pathInfo[pathIndex].previousDir) && pathInfo[pathIndex].previousDir !== '' && !sf.base.isNullOrUndefined(pathInfo[pathIndex].currentDir) && pathInfo[pathIndex].currentDir !== '') {
                this.pathAnimation(pathInfo[pathIndex].id, pathInfo[pathIndex].currentDir, true, pathInfo[pathIndex].previousDir, 300);
            }
        }
        for (var rectIndex = 0; rectIndex < rectInfo.length; rectIndex++) {
            this.animateRectElement(rectInfo[rectIndex].id, 0, 300, rectInfo[rectIndex].currentRect, rectInfo[rectIndex].previousRect);
        }
        for (var textIndex = 0; textIndex < textInfo.length; textIndex++) {
            this.animateRedrawElement(textInfo[textIndex].id, 300, textInfo[textIndex].preLocationX, textInfo[textIndex].preLocationY, textInfo[textIndex].curLocationX, textInfo[textIndex].curLocationY, textInfo[textIndex].x, textInfo[textIndex].y);
        }
    },
    doRectAnimation: function (element, clipPathElement, duration, delay, centerX, centerY, elementWidth, elementHeight, isInverted) {
        var effect = this.linear;
        var value;
        if (!sf.base.isNullOrUndefined(element)) {
            element.setAttribute('visibility', 'hidden');
            new sf.base.Animation({}).animate(element, {
                duration: duration,
                delay: delay,
                progress: function (args) {
                    clipPathElement.setAttribute('visibility', 'visible');
                    if (args.timeStamp >= args.delay) {
                        element.setAttribute('visibility', 'visible');
                        if (!isInverted) {
                            elementHeight = elementHeight ? elementHeight : 1;
                            value = effect(args.timeStamp - args.delay, 0, elementHeight, args.duration);
                            element.setAttribute('transform', 'translate(' + centerX + ' ' + centerY +
                                ') scale(1,' + (value / elementHeight) + ') translate(' + (-centerX) + ' ' + (-centerY) + ')');
                        }
                        else {
                            elementWidth = elementWidth ? elementWidth : 1;
                            value = effect(args.timeStamp - args.delay, 0, elementWidth, args.duration);
                            element.setAttribute('transform', 'translate(' + centerX + ' ' + centerY +
                                ') scale(' + (value / elementWidth) + ', 1) translate(' + (-centerX) + ' ' + (-centerY) + ')');
                        }
                    }
                },
                end: function () {
                    element.setAttribute('transform', 'translate(0,0)');
                }
            });
        }
    },
    doMarkerAnimate: function (element, clipPathElement, duration, delay, centerX, centerY) {
        var height = 0;
        if (!element) {
            return;
        }
        element.setAttribute('visibility', 'hidden');
        new sf.base.Animation({}).animate(element, {
            duration: duration,
            delay: delay,
            progress: function (args) {
                clipPathElement.setAttribute('visibility', 'visible');
                if (args.timeStamp > args.delay) {
                    element.setAttribute('visibility', 'visible');
                    height = ((args.timeStamp - args.delay) / args.duration);
                    element.setAttribute('transform', 'translate(' + centerX
                        + ' ' + centerY + ') scale(' + height + ') translate(' + (-centerX) + ' ' + (-centerY) + ')');
                }
            },
            end: function () {
                element.setAttribute('visibility', '');
            }
        });
    },
    doPolarRadarAnimation: function (element, clipPathElement, duration, delay, chartcenterX, chartcenterY) {
        var elementHeight = 0;
        element.setAttribute('visibility', 'hidden');
        new sf.base.Animation({}).animate(element, {
            duration: duration,
            delay: delay,
            progress: function (args) {
                clipPathElement.setAttribute('visibility', 'visible');
                if (args.timeStamp > args.delay) {
                    element.setAttribute('visibility', 'visible');
                    elementHeight = ((args.timeStamp - args.delay) / args.duration);
                    element.setAttribute('transform', 'translate(' + chartcenterX + ' ' + chartcenterY +
                        ') scale(' + elementHeight + ') translate(' + (-chartcenterX) + ' ' + (-chartcenterY) + ')');
                }
            },
            end: function () {
                element.setAttribute('visibility', 'visible');
                element.removeAttribute('transform');
            }
        });
    },
    templateAnimate: function (element, delay, duration, name, isRemove, clipElement) {
        new sf.base.Animation({}).animate(element, {
            duration: duration,
            delay: delay,
            name: name,
            progress: function (args) {
                if (clipElement) {
                    clipElement.setAttribute('visibility', 'visible');
                }
                args.element.style.visibility = 'visible';
            },
            end: function (args) {
                if (isRemove) {
                    sf.base.remove(args.element);
                }
                else {
                    args.element.style.visibility = 'visible';
                }
            }
        });
    },
    doDataLabelAnimation: function (shapeId, textId, tempId, clipId, duration, delay) {
        var shapeElements = this.filterCommentElement(shapeId);
        var textElements = this.filterCommentElement(textId);
        var clipPathElement = this.getElement(clipId);
        var tempElement = this.getElement(tempId);
        var centerX;
        var centerY;
        var length = tempElement ? 1 : textElements.length;
        var element;
        for (var i = 0; i < length; i++) {
            if (tempElement) {
                tempElement.style.visibility = 'hidden';
                this.templateAnimate(tempElement, delay, duration, 'ZoomIn');
            }
            else {
                element = textElements[i];
                centerX = (+element.getAttribute('x')) + ((+element.getAttribute('width')) / 2);
                centerY = (+element.getAttribute('y')) + ((+element.getAttribute('height')) / 2);
                this.doMarkerAnimate(textElements[i], clipPathElement, duration, delay, centerX, centerY);
                if (shapeElements[i]) {
                    element = shapeElements[i];
                    centerX = (+element.getAttribute('x')) + ((+element.getAttribute('width')) / 2);
                    centerY = (+element.getAttribute('y')) + ((+element.getAttribute('height')) / 2);
                    this.doMarkerAnimate(shapeElements[i], clipPathElement, duration, delay, centerX, centerY);
                }
            }
        }
    },
    pathAnimation: function (id, direction, redraw, previousDirection, animateDuration) {
        var _this = this;
        var element = this.getElement(id);
        if (!redraw || element == null) {
            return null;
        }
        var duration = 300;
        if (animateDuration) {
            duration = animateDuration;
        }
        var startDirections = previousDirection || element.getAttribute('d');
        var splitDirections = startDirections.split(/(?=[LMCZAQ])/);
        var endDirections = direction.split(/(?=[LMCZAQ])/);
        var currentDireciton;
        var startPath = [];
        var endPath = [];
        var c;
        var end;
        element.setAttribute('d', startDirections);
        new sf.base.Animation({}).animate(sf.base.createElement('div'), {
            duration: duration,
            progress: function (args) {
                currentDireciton = '';
                splitDirections.map(function (directions, index) {
                    startPath = directions.split(' ');
                    endPath = endDirections[index] ? endDirections[index].split(' ') : startPath;
                    if (startPath[0] === 'Z') {
                        currentDireciton += 'Z' + ' ';
                    }
                    else {
                        currentDireciton += startPath[0] + ' ' +
                            _this.linear(args.timeStamp, +startPath[1], (+endPath[1] - +startPath[1]), args.duration) + ' ' +
                            _this.linear(args.timeStamp, +startPath[2], (+endPath[2] - +startPath[2]), args.duration) + ' ';
                    }
                    if (startPath[0] === 'C' || startPath[0] === 'Q') {
                        c = 3;
                        end = startPath[0] === 'Q' ? 4 : 6;
                        while (c < end) {
                            currentDireciton += _this.linear(args.timeStamp, +startPath[c], (+endPath[c] - +startPath[c]), args.duration)
                                + ' ' + _this.linear(args.timeStamp, +startPath[++c], (+endPath[c] - +startPath[c]), args.duration) + ' ';
                            ++c;
                        }
                    }
                    if (startPath[0] === 'A') {
                        currentDireciton += 0 + ' ' + 0 + ' ' + 1 + ' ' +
                            _this.linear(args.timeStamp, +startPath[6], (+endPath[6] - +startPath[6]), args.duration) + ' ' +
                            _this.linear(args.timeStamp, +startPath[7], (+endPath[7] - +startPath[7]), args.duration) + ' ';
                    }
                });
                element.setAttribute('d', currentDireciton);
            },
            end: function () {
                element.setAttribute('d', direction);
            }
        });
    },
    getPreviousDirection: function (id) {
        var element = this.getElement(id);
        var previousDirection = element ? element.getAttribute('d') : null;
        return previousDirection;
    },
    getPreviousLocation: function (id, circlePath) {
        var element = this.getElement(id);
        var x = element ? +element.getAttribute(circlePath + 'x') : 0;
        var y = element ? +element.getAttribute(circlePath + 'y') : 0;
        return { X: x, Y: y };
    },
    animateRectElement: function (element, delay, duration, currentRect, previousRect) {
        var _this = this;
        var setStyle = function (rect) {
            element.setAttribute('x', rect.x + '');
            element.setAttribute('y', rect.y + '');
            element.setAttribute('width', rect.width + '');
            element.setAttribute('height', rect.height + '');
        };
        new sf.base.Animation({}).animate(sf.base.createElement('div'), {
            duration: duration,
            delay: delay,
            progress: function (args) {
                setStyle(new sf.svgbase.Rect(_this.linear(args.timeStamp, previousRect.x, currentRect.x - previousRect.x, args.duration), _this.linear(args.timeStamp, previousRect.y, currentRect.y - previousRect.y, args.duration), _this.linear(args.timeStamp, previousRect.width, currentRect.width - previousRect.width, args.duration), _this.linear(args.timeStamp, previousRect.height, currentRect.height - previousRect.height, args.duration)));
            },
            end: function () {
                setStyle(currentRect);
            }
        });
    },
    animateRedrawElement: function (elementId, duration, startX, startY, endX, endY, x, y) {
        var _this = this;
        if (x === void 0) { x = 'x'; }
        if (y === void 0) { y = 'y'; }
        var element = this.getElement(elementId);
        if (!element) {
            return null;
        }
        var isDiv = element.tagName === 'DIV';
        var setStyle = function (xValue, yValue) {
            if (isDiv) {
                element.style[x] = xValue + 'px';
                element.style[y] = yValue + 'px';
            }
            else {
                element.setAttribute(x, xValue + '');
                element.setAttribute(y, yValue + '');
            }
        };
        setStyle(startX, startY);
        new sf.base.Animation({}).animate(sf.base.createElement('div'), {
            duration: duration,
            progress: function (args) {
                setStyle(_this.linear(args.timeStamp, startX, endX - startX, args.duration), _this.linear(args.timeStamp, startY, endY - startY, args.duration));
            },
            end: function () {
                setStyle(endX, endY);
            }
        });
    },
    appendChildElement: function (parent, childElement, redraw, isAnimate, x, y, start, direction, forceAnimate, isRect, previousRect, animateDuration) {
        if (isAnimate === void 0) { isAnimate = false; }
        if (x === void 0) { x = 'x'; }
        if (y === void 0) { y = 'y'; }
        if (forceAnimate === void 0) { forceAnimate = false; }
        if (isRect === void 0) { isRect = false; }
        if (previousRect === void 0) { previousRect = null; }
        var existChild = parent.querySelector('#' + childElement.id);
        var element = existChild || this.getElement(childElement.id);
        var child = childElement;
        var duration = animateDuration ? animateDuration : 300;
        if (redraw && isAnimate && element) {
            start = start || (element.tagName === 'DIV' ?
                new sf.svgbase.TooltipLocation(+(element.style[x].split('px')[0]), +(element.style[y].split('px')[0])) :
                new sf.svgbase.TooltipLocation(+element.getAttribute(x), +element.getAttribute(y)));
            if (direction !== '' && direction !== null) {
                this.pathAnimation(childElement, childElement.getAttribute('d'), redraw, direction, duration);
            }
            else if (isRect && previousRect) {
                this.animateRectElement(child, 0, duration, new sf.svgbase.Rect(+element.getAttribute('x'), +element.getAttribute('y'), +element.getAttribute('width'), +element.getAttribute('height')), previousRect);
            }
            else {
                var end = child.tagName === 'DIV' ?
                    new sf.svgbase.TooltipLocation(+(child.style[x].split('px')[0]), +(child.style[y].split('px')[0])) :
                    new sf.svgbase.TooltipLocation(+child.getAttribute(x), +child.getAttribute(y));
                this.animateRedrawElement(child, duration, start, end, x, y);
            }
        }
        else if (redraw && isAnimate && !element && forceAnimate) {
            this.templateAnimate(child, 0, 600, 'FadeIn');
        }
    },
    processAppendChild: function (parentId, childId, locationX, locationY, rectX, rectY, rectWidth, rectHeight, redraw, isAnimate, x, y, direction, forceAnimate, isRect, animateDuration) {
        if (isAnimate === void 0) { isAnimate = false; }
        if (x === void 0) { x = 'x'; }
        if (y === void 0) { y = 'y'; }
        if (forceAnimate === void 0) { forceAnimate = false; }
        if (isRect === void 0) { isRect = false; }
        var parentElement = this.getElement(parentId);
        var childElement = this.getElement(childId);
        var start = new sf.svgbase.TooltipLocation(locationX, locationY);
        var rect = new sf.svgbase.Rect(rectX, rectY, rectWidth, rectHeight);
        this.appendChildElement(parentElement, childElement, redraw, isAnimate, x, y, start, direction, forceAnimate, isRect, rect, animateDuration);
    },
    createStyleElement: function (styleId, styleInnerHTML) {
        document.body.appendChild(sf.base.createElement('style', {
            id: styleId,
            innerHTML: styleInnerHTML
        }));
    },
    isLassoId: function (x, y) {
        var lassoEle = document.elementFromPoint(x, y);
        return lassoEle ? lassoEle.id : '';
    },
    doErrorBarAnimation: function (id, clipId, delay, isInverted) {
        var errorBarElements = this.filterCommentElement(id);
        var clipElement = this.getElement(clipId);
        if (!errorBarElements) {
            return null;
        }
        var j = 1;
        while (j < errorBarElements.length) {
            errorBarElements[j].style.visibility = 'hidden';
            this.templateAnimate(errorBarElements[j], delay, 350, isInverted ? 'SlideLeftIn' : 'SlideBottomIn', false, clipElement);
            j++;
        }
    },
    getTemplateSize: function (id) {
        var element = this.getElement(id);
        if (element) {
            return {
                width: element.offsetWidth,
                height: element.offsetHeight
            };
        }
        return null;
    },
    resizeBound: {},
    resize: {},
    chartResize: function (dotnetrefCollection, e) {
        var _this = this;
        if (this.resize) {
            clearTimeout(this.resize);
        }
        this.resize = setTimeout(function () {
            var count = dotnetrefCollection.length;
            var tempDotnetref;
            var id;
            var element;
            var offsetSizeCollection = {};
            for (var i = 0; i < count; i++) {
                tempDotnetref = dotnetrefCollection[i].dotnetref;
                id = dotnetrefCollection[i].id;
                if (id.indexOf('_stockChart_') < 0 && document.getElementById(id + "_svg")) {
                    element = document.getElementById(id + "_svg");
                    element.style.display = "none";
                }
            }
            for (var i = 0; i < count; i++) {
                tempDotnetref = dotnetrefCollection[i].dotnetref;
                id = dotnetrefCollection[i].id;
                if (id.indexOf('_stockChart_') < 0 && document.getElementById(id)) {
                    element = document.getElementById(id);
                    offsetSizeCollection[id] = { Dotnetref: tempDotnetref, Width: element.clientWidth || element.offsetWidth, Height: element.clientHeight || element.offsetHeight };
                }
            }
            for (var key in offsetSizeCollection) {
                tempDotnetref = offsetSizeCollection[key].Dotnetref;
                element = document.getElementById(key + "_svg");
                element.style.display = "";
                tempDotnetref.invokeMethodAsync('OnChartResize', JSON.stringify({ Width: offsetSizeCollection[key].Width, Height: offsetSizeCollection[key].Height }));
            }
            clearTimeout(_this.resize);
        }, 500);
        return false;
    },
    getDatalabelTemplateSize: function (templateIdCollection) {
        var templateSizeList = [];
        var templateSize;
        var templateIdLength = templateIdCollection.length;
        for (var i = 0; i < templateIdLength; i++) {
            templateSize = this.getElementBoundsById(templateIdCollection[i], false);
            templateSizeList.push({ X: templateSize.width, Y: templateSize.height });
        }
        return JSON.stringify(templateSizeList);
    },
    setSvgDimensions: function (chartSVG, width, height) {
        chartSVG.setAttribute("width", width);
        chartSVG.setAttribute("height", height);
    }
};

return Chart;

}());


/***/ }),

/***/ "./resources/20.1.61/Scripts/sf-daterangepicker.js":
/*!*********************************************************!*\
  !*** ./resources/20.1.61/Scripts/sf-daterangepicker.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.sfBlazor = window.sfBlazor || {};
window.sfBlazor.DateRangePicker = (function () {
'use strict';

var POPUPDIMENSION = '240px';
var HALFPOSITION = 2;
var POPUP = 'e-popup';
var OVERFLOW = 'e-range-overflow';
var FOOTER_CONTAINER = 'e-footer-container';
var INPUT_HANDLER = 'InputKeyActionHandle';
var LEFTCALENDER = 'e-left-calendar';
var RIGHTCALENDER = 'e-right-calendar';
var CALENDAR = 'e-calendar';
var NEXTICON = 'e-next';
var PREVICON = 'e-prev';
var HEADER = 'e-header';
var TITLE = 'e-title';
var ICONCONTAINER = 'e-icon-container';
var TBODY = 'tbody';
var TABLE = 'table';
var HIDE_POPUP = 'HidePopup';
var CLOSE_POPUP = 'ClosePopup';
var MOUSE_TOUCH_EVENT = 'mousedown touchstart';
var SELECTED = 'e-selected';
var OFFSETVALUE = 4;
var INPUTCONTAINER = 'e-input-group';
var INPUTFOCUS = 'e-input-focus';
var FOCUS_DATE = 'e-focused-date';
var RANGECONTAINER = 'e-date-range-container';
var PRESETS = 'e-presets';
var SfDateRangePicker = /** @class */ (function () {
    function SfDateRangePicker(containerElement, element, dotnetRef, options) {
        this.containerElement = containerElement;
        this.element = element;
        this.options = options;
        this.element.blazor__instance = this;
        this.dotNetRef = dotnetRef;
    }
    // tslint:disable
    SfDateRangePicker.prototype.initialize = function () {
        this.isMobile = window.matchMedia('(max-width:550px)').matches;
        this.defaultKeyConfigs = {
            altUpArrow: 'alt+uparrow',
            altDownArrow: 'alt+downarrow',
            altRightArrow: 'alt+rightarrow',
            altLeftArrow: 'alt+leftarrow',
            escape: 'escape',
            enter: 'enter',
            controlUp: 'ctrl+38',
            controlDown: 'ctrl+40',
            moveDown: 'downarrow',
            moveUp: 'uparrow',
            moveLeft: 'leftarrow',
            moveRight: 'rightarrow',
            select: 'enter',
            home: 'home',
            end: 'end',
            pageUp: 'pageup',
            pageDown: 'pagedown',
            shiftPageUp: 'shift+pageup',
            shiftPageDown: 'shift+pagedown',
            controlHome: 'ctrl+home',
            controlEnd: 'ctrl+end',
            shiftTab: 'shift+tab'
        };
        new sf.base.KeyboardEvents(this.element, { eventName: 'keydown', keyAction: this.keyInputHandler.bind(this), keyConfigs: this.defaultKeyConfigs });
    };
    SfDateRangePicker.prototype.keyInputHandler = function (e) {
        var keyEventsArgs;
        if (this.popupObj && this.popupObj.element.classList.contains(POPUP)) {
            var ele = sf.base.closest(e.target, '.' + RIGHTCALENDER);
            ele = sf.base.isNullOrUndefined(ele) ? this.tableElement.querySelector('.' + LEFTCALENDER) : ele;
            var isLeftCalendar = ele.classList.contains(LEFTCALENDER);
            var focusedDate = this.tableElement.querySelector('tr td.' + FOCUS_DATE);
            var selectedDates = this.tableElement.querySelectorAll('tr td.' + SELECTED);
            var selectedDate = selectedDates[selectedDates.length - 1];
            var tableBodyEle = focusedDate && sf.base.closest(focusedDate, TBODY) || selectedDate && sf.base.closest(selectedDate, TBODY);
            if (!isLeftCalendar && this.leftCalendar.querySelectorAll('tr td.' + FOCUS_DATE).length > 0) {
                sf.base.removeClass(this.leftCalendar.querySelectorAll('tr td.' + FOCUS_DATE), FOCUS_DATE);
            }
            tableBodyEle && tableBodyEle.focus();
            keyEventsArgs = {
                Action: e.action,
                Key: e.key,
                Events: e,
                SelectDate: selectedDate ? selectedDate.id : null,
                FocusedDate: focusedDate ? focusedDate.id : null,
                classList: selectedDate ? selectedDate.classList.toString() :
                    focusedDate ? focusedDate.classList.toString() : 'e-cell',
                Id: focusedDate ? focusedDate.id : selectedDate ? selectedDate.id : null,
                TargetClassList: this.calendarElement.classList.toString(),
                IsLeftCalendar: isLeftCalendar
            };
        }
        else {
            keyEventsArgs = {
                Action: e.action,
                Key: e.key,
                Events: e
            };
        }
        if (!this.isDisposed) {
            this.dotNetRef.invokeMethodAsync(INPUT_HANDLER, keyEventsArgs);
        }
        if (e.action !== 'select' && this.popupObj && document.body.contains(this.popupObj.element)) {
            e.preventDefault();
        }
    };
    SfDateRangePicker.prototype.renderPopup = function (popupElement, popupHolderEle, openEventArgs, options) {
        this.options = options;
        this.popupHolder = popupHolderEle;
        var oldPopupEle = document.body.querySelector('.e-daterangepicker.e-popup-open');
        if (oldPopupEle) {
            sf.base.remove(oldPopupEle);
        }
        this.createCalendar(popupElement, options);
        if (sf.base.Browser.isDevice) {
            this.mobilePopupContainer = this.popupHolder.querySelector('.e-daterangepick-mob-popup-wrap');
            document.body.appendChild(this.mobilePopupContainer);
        }
        var appendToElement = openEventArgs.appendTo === 'model' && this.mobilePopupContainer ? this.mobilePopupContainer
            : document.body;
        appendToElement.appendChild(this.popupContainer);
        this.presetHeight();
        if (this.options.zIndex === 1000) {
            this.popupObj.show(null, this.element);
        }
        else {
            this.popupObj.show(null, null);
        }
        this.setOverlayIndex(this.mobilePopupContainer, this.popupObj.element, this.modal, sf.base.Browser.isDevice);
        if (sf.base.Browser.isDevice) {
            document.body.className += ' ' + OVERFLOW;
            this.popupHolder.style.display = 'block';
            this.popupHolder.style.visibility = 'visible';
        }
        sf.base.EventHandler.add(document, MOUSE_TOUCH_EVENT, this.documentHandler, this);
    };
    SfDateRangePicker.prototype.setOverlayIndex = function (popupContainer, popupElement, modal, isDevice) {
        if (isDevice && !sf.base.isNullOrUndefined(popupElement) && !sf.base.isNullOrUndefined(modal) && !sf.base.isNullOrUndefined(popupContainer)) {
            var index = parseInt(popupElement.style.zIndex, 10) ? parseInt(popupElement.style.zIndex, 10) : 1000;
            modal.style.zIndex = (index - 1).toString();
            popupContainer.style.zIndex = index.toString();
        }
    };
    SfDateRangePicker.prototype.closePopup = function (closeEventArgs, options) {
        this.options = options;
        this.closeEventCallback(closeEventArgs);
    };
    SfDateRangePicker.prototype.refreshPopup = function () {
        if (this.isPopupOpen()) {
            this.popupObj.refreshPosition();
        }
    };
    SfDateRangePicker.prototype.createCalendar = function (popupElement, options) {
        var _this = this;
        this.popupContainer = popupElement;
        if (options.isCustomWindow) {
            this.calendarElement = this.popupContainer.firstElementChild;
            this.tableElement = this.calendarElement;
            this.calendarElement.querySelector(TABLE + ' ' + TBODY).className = '';
        }
        var popupWidth = this.popupContainer.getBoundingClientRect().width;
        if (sf.base.Browser.isDevice) {
            this.modal = this.popupHolder.querySelector('.e-range-modal');
            this.modal.style.display = 'block';
            document.body.appendChild(this.modal);
        }
        if (options.isCustomWindow) {
            if (sf.base.Browser.isDevice) {
                this.deviceCalPrevIcon = this.calendarElement.querySelector('.' + CALENDAR + ' .' + PREVICON);
                this.deviceCalNextIcon = this.calendarElement.querySelector('.' + CALENDAR + ' .' + NEXTICON);
                if (this.calendarElement.querySelector('.' + CALENDAR + ' .' + ICONCONTAINER)) {
                    sf.base.remove(this.calendarElement.querySelector('.' + CALENDAR + ' .' + ICONCONTAINER));
                }
                this.calendarElement.querySelector('table').setAttribute('tabindex', '-1');
                this.calendarElement.querySelector('.' + CALENDAR + ' .' + HEADER).appendChild(this.deviceCalNextIcon);
                this.calendarElement.querySelector('.' + CALENDAR + ' .' + HEADER).appendChild(this.deviceCalPrevIcon);
                sf.base.prepend([this.deviceCalPrevIcon], this.calendarElement.querySelector('.' + CALENDAR + ' .' + HEADER));
                if (this.calendarElement.querySelector('.' + CALENDAR + ' .' + FOOTER_CONTAINER)) {
                    sf.base.remove(this.calendarElement.querySelector('.' + CALENDAR + ' .' + FOOTER_CONTAINER));
                }
            }
            else {
                this.leftCalPrevIcon = this.calendarElement.querySelector('.' + LEFTCALENDER + ' .' + PREVICON);
                this.leftCalNextIcon = this.calendarElement.querySelector('.' + LEFTCALENDER + ' .' + NEXTICON);
                this.leftTitle = this.calendarElement.querySelector('.' + LEFTCALENDER + ' .' + TITLE);
                if (this.calendarElement.querySelector('.' + LEFTCALENDER + ' .' + ICONCONTAINER)) {
                    sf.base.remove(this.calendarElement.querySelector('.' + LEFTCALENDER + ' .' + ICONCONTAINER));
                }
                this.calendarElement.querySelector('.' + LEFTCALENDER + ' .' + HEADER).appendChild(this.leftCalNextIcon);
                this.calendarElement.querySelector('.' + LEFTCALENDER + ' .' + HEADER).appendChild(this.leftCalPrevIcon);
                sf.base.prepend([this.leftCalPrevIcon], this.calendarElement.querySelector('.' + LEFTCALENDER + ' .' + HEADER));
                this.rightCalPrevIcon = this.calendarElement.querySelector('.' + RIGHTCALENDER + ' .' + PREVICON);
                this.rightCalNextIcon = this.calendarElement.querySelector('.' + RIGHTCALENDER + ' .' + NEXTICON);
                this.rightTitle = this.calendarElement.querySelector('.' + RIGHTCALENDER + ' .' + TITLE);
                if (this.calendarElement.querySelector('.' + RIGHTCALENDER + ' .' + ICONCONTAINER)) {
                    sf.base.remove(this.calendarElement.querySelector('.' + RIGHTCALENDER + ' .' + ICONCONTAINER));
                }
                this.calendarElement.querySelector('table').setAttribute('tabindex', '-1');
                this.calendarElement.querySelector('.' + RIGHTCALENDER + ' .' + HEADER).appendChild(this.rightCalNextIcon);
                this.calendarElement.querySelector('.' + RIGHTCALENDER + ' .' + HEADER).appendChild(this.rightCalPrevIcon);
                sf.base.prepend([this.rightCalPrevIcon], this.calendarElement.querySelector('.' + RIGHTCALENDER + ' .' + HEADER));
                if (this.calendarElement.querySelector('.' + LEFTCALENDER + ' .' + FOOTER_CONTAINER)) {
                    sf.base.remove(this.calendarElement.querySelector('.' + LEFTCALENDER + ' .' + FOOTER_CONTAINER));
                }
                if (this.calendarElement.querySelector('.' + RIGHTCALENDER + ' .' + FOOTER_CONTAINER)) {
                    sf.base.remove(this.calendarElement.querySelector('.' + RIGHTCALENDER + ' .' + FOOTER_CONTAINER));
                }
            }
        }
        this.popupObj = new sf.popups.Popup(this.popupContainer, {
            relateTo: this.isMobile ? document.body : this.containerElement,
            position: (this.isMobile ?
                (!sf.base.isUndefined(options.presets && options.presets[0] && options.presets[0].start && options.presets[0].end && options.presets[0].label) ?
                    { X: 'left', Y: 'bottom' } : { X: 'center', Y: 'center' }) :
                options.enableRtl ? { X: 'left', Y: 'bottom' } : { X: 'right', Y: 'bottom' }),
            offsetX: this.isMobile || options.enableRtl ? 0 : -popupWidth,
            offsetY: OFFSETVALUE,
            collision: this.isMobile ?
                (!sf.base.isUndefined(options.presets && options.presets[0] && options.presets[0].start && options.presets[0].end && options.presets[0].label) ?
                    { X: 'fit' } : { X: 'fit', Y: 'fit' }) : { X: 'fit', Y: 'flip' },
            targetType: this.isMobile ? 'container' : 'relative',
            enableRtl: options.enableRtl,
            zIndex: options.zIndex,
            open: function () {
                _this.leftCalendar = _this.calendarElement.querySelector('.' + LEFTCALENDER);
                _this.rightCalendar = _this.calendarElement.querySelector('.' + RIGHTCALENDER);
                var dateRangeContainer = _this.popupObj && _this.popupObj.element.querySelector('.' + RANGECONTAINER);
                if (!_this.isMobile && dateRangeContainer) {
                    //this.defaultKeyConfigs = sf.base.extend(this.defaultKeyConfigs, this.keyConfigs);
                    new sf.base.KeyboardEvents(_this.leftCalendar, {
                        eventName: 'keydown',
                        keyAction: _this.keyInputHandler.bind(_this),
                        keyConfigs: _this.defaultKeyConfigs
                    });
                    new sf.base.KeyboardEvents(_this.rightCalendar, {
                        eventName: 'keydown',
                        keyAction: _this.keyInputHandler.bind(_this),
                        keyConfigs: _this.defaultKeyConfigs
                    });
                    var cancelBtnEle = _this.popupContainer.querySelector('.e-cancel.e-btn');
                    var applyBtnEle = _this.popupContainer.querySelector('.e-apply.e-btn');
                    new sf.base.KeyboardEvents(cancelBtnEle, {
                        eventName: 'keydown',
                        keyAction: _this.keyInputHandler.bind(_this),
                        keyConfigs: { tab: 'tab', altRightArrow: 'alt+rightarrow', altLeftArrow: 'alt+leftarrow' }
                    });
                    new sf.base.KeyboardEvents(applyBtnEle, {
                        eventName: 'keydown',
                        keyAction: _this.keyInputHandler.bind(_this),
                        keyConfigs: { altRightArrow: 'alt+rightarrow', altLeftArrow: 'alt+leftarrow' }
                    });
                    _this.leftCalendar.querySelector('table').focus();
                }
            }, close: function () {
                _this.popupHolder.appendChild(_this.popupContainer);
                if (_this.popupObj) {
                    _this.popupObj.destroy();
                }
                if (!_this.isDisposed) {
                    // tslint:disable
                    _this.dotNetRef.invokeMethodAsync(CLOSE_POPUP).catch(function () { });
                }
                _this.popupObj = null;
            }, targetExitViewport: function () {
                if (!sf.base.Browser.isDevice && !_this.isDisposed) {
                    _this.dotNetRef.invokeMethodAsync(HIDE_POPUP, null);
                }
            }
        });
    };
    SfDateRangePicker.prototype.closeEventCallback = function (eventArgs) {
        var preventArgs = eventArgs;
        if (!preventArgs.cancel && this.popupObj) {
            this.popupObj.hide();
        }
        if (sf.base.Browser.isDevice && this.modal) {
            this.modal.style.display = 'none';
            this.modal.outerHTML = '';
            this.modal = null;
        }
        if (sf.base.Browser.isDevice) {
            sf.base.removeClass([document.body], OVERFLOW);
            if (!sf.base.isNullOrUndefined(this.mobilePopupContainer)) {
                this.mobilePopupContainer.remove();
                this.mobilePopupContainer = null;
            }
        }
        sf.base.EventHandler.remove(document, MOUSE_TOUCH_EVENT, this.documentHandler);
    };
    SfDateRangePicker.prototype.documentHandler = function (e) {
        if (sf.base.isNullOrUndefined(this.popupObj)) {
            return;
        }
        var target = e.target;
        if (!this.containerElement.contains(target) ||
            (!sf.base.isNullOrUndefined(this.popupObj) && !sf.base.closest(target, '.e-daterangepicker.e-popup'))) {
            if (e.type !== 'touchstart' && e.type === 'mousedown') {
                e.preventDefault();
            }
        }
        if (!(sf.base.closest(target, '.e-daterangepicker.e-popup'))
            && !(sf.base.closest(target, '.' + INPUTCONTAINER) === this.containerElement)
            && !(sf.base.closest(target, '.e-daterangepicker.e-popup') && (!target.classList.contains('e-day')))) {
            if (this.isPopupOpen() && document.body.contains(this.popupObj.element)) {
                this.applyFunction(e);
            }
        }
    };
    SfDateRangePicker.prototype.applyFunction = function (eve) {
        var isValueChanged = false;
        if (eve.type !== 'touchstart') {
            eve.preventDefault();
        }
        if (document.activeElement !== this.element) {
            this.element.focus();
            sf.base.addClass([this.containerElement], [INPUTFOCUS]);
        }
        this.dotNetRef.invokeMethodAsync(HIDE_POPUP, null);
        if (!(sf.base.closest(eve.target, '.' + INPUTCONTAINER))
            && (!isValueChanged)) {
            if (document.activeElement === this.element) {
                sf.base.removeClass([this.containerElement], [INPUTFOCUS]);
                this.element.blur();
            }
        }
    };
    SfDateRangePicker.prototype.presetHeight = function () {
        var presets = this.popupObj && this.popupObj.element.querySelector('.' + PRESETS);
        var rangeContainer = this.popupObj && this.popupObj.element.querySelector('.' + RANGECONTAINER);
        if (!sf.base.isNullOrUndefined(presets) && !sf.base.isNullOrUndefined(rangeContainer)) {
            presets.style.height = rangeContainer.getBoundingClientRect().height + 'px';
        }
    };
    SfDateRangePicker.prototype.getPopupHeight = function () {
        var height = parseInt(POPUPDIMENSION, 10);
        var popupHeight = this.popupContainer.getBoundingClientRect().height;
        return popupHeight > height ? height : popupHeight;
    };
    SfDateRangePicker.prototype.setScrollPosition = function () {
        if (!sf.base.isNullOrUndefined(this.popupContainer.querySelector('.e-active')) && (this.options.presets)) {
            var selectElement = this.popupContainer.querySelector('.e-active');
            this.findScrollTop(selectElement);
        }
    };
    SfDateRangePicker.prototype.findScrollTop = function (element) {
        var listHeight = this.getPopupHeight();
        var nextEle = element.nextElementSibling;
        var height = nextEle ? nextEle.offsetTop : element.offsetTop;
        var liHeight = element.getBoundingClientRect().height;
        if ((height + element.offsetTop) > listHeight) {
            this.popupContainer.scrollTop = nextEle ? (height - (listHeight / HALFPOSITION + liHeight / HALFPOSITION)) : height;
        }
        else {
            this.popupContainer.scrollTop = 0;
        }
    };
    SfDateRangePicker.prototype.isPopupOpen = function () {
        if (!sf.base.isNullOrUndefined(this.popupObj) && this.popupObj.element.classList.contains(POPUP)) {
            return true;
        }
        return false;
    };
    SfDateRangePicker.prototype.removeFocusDate = function (popupElement, cellId) {
        var focusedDates = popupElement.querySelectorAll('tr td.e-focused-date');
        if (focusedDates.length > 0) {
            sf.base.removeClass(focusedDates, FOCUS_DATE);
        }
        var focusedDate = popupElement.querySelectorAll('tr td');
        for (var i = 0; i < focusedDate.length; i++) {
            if (focusedDate[i].getAttribute('id').split('_')[0] == cellId) {
                sf.base.removeClass(focusedDate, FOCUS_DATE);
                sf.base.addClass([focusedDate[i]], FOCUS_DATE);
                sf.base.closest(focusedDate[i], 'table').focus();
            }
        }
    };
    return SfDateRangePicker;
}());
// tslint:disable
var DateRangePicker = {
    initialize: function (containerElement, element, dotnetRef, options) {
        if (element) {
            new SfDateRangePicker(containerElement, element, dotnetRef, options);
        }
        if (element && element.blazor__instance) {
            element.blazor__instance.initialize();
        }
    },
    renderPopup: function (element, popupElement, popupHolderEle, openEventArgs, options) {
        if (element && element.blazor__instance && popupElement && popupHolderEle) {
            element.blazor__instance.renderPopup(popupElement, popupHolderEle, openEventArgs, options);
        }
    },
    updateScrollPosition: function (element) {
        if (element && element.blazor__instance) {
            element.blazor__instance.setScrollPosition();
        }
    },
    removeFocusDate: function (element, popupElement, cellId) {
        if (element && element.blazor__instance && popupElement) {
            element.blazor__instance.removeFocusDate(popupElement, cellId);
        }
    },
    // tslint:disable
    closePopup: function (element, popupElement, popupHolderEle, closeEventArgs, options) {
        if (element && element.blazor__instance) {
            element.blazor__instance.closePopup(closeEventArgs, options);
        }
    },
    refreshPopup: function (element) {
        if (element && element.blazor__instance) {
            element.blazor__instance.refreshPopup();
        }
    },
    focusIn: function (inputEle) {
        if (inputEle) {
            inputEle.focus();
        }
    },
    focusOut: function (inputEle) {
        if (inputEle) {
            inputEle.blur();
        }
    },
    destroy: function (element, popupElement, popupHolderEle, closeEventArgs, options) {
        if (element && element.blazor__instance && popupElement && popupElement instanceof HTMLElement && popupHolderEle) {
            element.blazor__instance.isDisposed = true;
            element.blazor__instance.closePopup(closeEventArgs, options);
        }
    }
};

return DateRangePicker;

}());


/***/ }),

/***/ "./resources/20.1.61/Scripts/sf-drop-down-button.js":
/*!**********************************************************!*\
  !*** ./resources/20.1.61/Scripts/sf-drop-down-button.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.sfBlazor = window.sfBlazor || {};
window.sfBlazor.DropDownButton = (function () {
'use strict';

/* eslint-disable @typescript-eslint/no-explicit-any */
var HIDDEN = 'hidden';
var TRANSPARENT = 'e-transparent';
var EMPTY = '';
var PIXEL = 'px';
var DOT = '.';
var HASH = '#';
var BTN_CLICK = 'ButtonClickAsync';
var DROPDOWN = 'e-dropdown-menu';
var COLOR_PICKER = 'e-colorpicker-container';
var HSV_MODEL = 'e-hsv-model';
var MODEL = '.e-colorpicker.e-modal';
var CONTAINER = '.e-container';
var ITEM = 'e-item';
var FOCUSED = 'e-focused';
var WRAPPER = 'e-split-btn-wrapper';
var ELEMENT = 'e-dropdown-btn';
var MOUSEDOWN = 'mousedown touchstart';
var KEYDOWN = 'keydown';
var CLICK = 'click';
var SCROLL = 'scroll';
var ESC = 27;
var UP = 38;
var DOWN = 40;
var ENTER = 13;
var TAB = 9;
var RTL = 'e-rtl';
/**
 * Dropdown Button Blazor introp module
 */
var SfDropDownButton = /** @class */ (function () {
    function SfDropDownButton(element, popup, dotnetRef) {
        this.element = element;
        this.dotNetRef = dotnetRef;
        this.popup = popup;
        this.element.blazor__instance = this;
        this.addScrollEvents(true);
    }
    SfDropDownButton.prototype.openPopup = function (blankIcon) {
        this.popup.style.visibility = HIDDEN;
        document.body.appendChild(this.popup);
        if (blankIcon) {
            sf.splitbuttons.setBlankIconStyle(this.popup);
        }
        this.popup.classList.remove(TRANSPARENT);
        var zIndex = sf.popups.getZindexPartial(this.element);
        var isColorPicker = this.element.parentElement.classList.contains(COLOR_PICKER);
        if (isColorPicker) {
            this.element.parentElement.blazor__instance.setPaletteWidth(this.popup.querySelector(CONTAINER), false, zIndex);
        }
        this.setPosition(isColorPicker);
        sf.base.EventHandler.remove(document, MOUSEDOWN, this.mouseDownHandler);
        this.addEventListener();
        this.popup.style.zIndex = zIndex + EMPTY;
        this.popup.style.visibility = EMPTY;
        if (isColorPicker) {
            this.element.parentElement.blazor__instance.setOffset(this.popup, zIndex);
        }
        if (this.popup.firstElementChild) {
            if (this.popup.firstElementChild.firstElementChild && isColorPicker) {
                this.popup.firstElementChild.firstElementChild.focus();
            }
            else {
                this.popup.firstElementChild.focus();
            }
        }
    };
    SfDropDownButton.prototype.setPosition = function (isColorPicker) {
        var left;
        var top;
        var btnOffset = this.element.getBoundingClientRect();
        var popupOffset = this.popup.getBoundingClientRect();
        if (isColorPicker && sf.base.Browser.isDevice) {
            left = ((document.documentElement.clientWidth / 2) - (popupOffset.width / 2)) + pageXOffset;
            top = ((document.documentElement.clientHeight / 2) - (popupOffset.height / 2)) + pageYOffset;
        }
        else {
            left = btnOffset.left + pageXOffset;
            top = btnOffset.bottom + pageYOffset;
            if (btnOffset.bottom + popupOffset.height > document.documentElement.clientHeight) {
                if (top - btnOffset.height - popupOffset.height > document.documentElement.clientTop) {
                    top = top - btnOffset.height - popupOffset.height;
                }
            }
            if (btnOffset.left + popupOffset.width > document.documentElement.clientWidth) {
                if (btnOffset.right - popupOffset.width > document.documentElement.clientLeft) {
                    left = (left + btnOffset.width) - popupOffset.width;
                }
            }
        }
        this.popup.style.left = Math.ceil(left) + PIXEL;
        this.popup.style.top = Math.ceil(top) + PIXEL;
    };
    SfDropDownButton.prototype.mouseDownHandler = function (e) {
        if (this.popup.parentElement) {
            var target = e.target;
            var prevent = true;
            var isColorPicker = this.element.parentElement.classList.contains(COLOR_PICKER);
            if (isColorPicker) {
                if (sf.base.closest(target, '.e-apply') || sf.base.closest(target, '.e-cancel')) {
                    this.element.parentElement.blazor__instance.removeZIndex();
                }
            }
            if (!sf.base.Browser.isDevice && target.classList.contains(HSV_MODEL)) {
                var ref = target.parentElement.getBoundingClientRect();
                var btn = this.element.getBoundingClientRect();
                prevent = (e.clientX >= ref.left && e.clientX <= ref.right && e.clientY >= ref.top && e.clientY <= ref.bottom) ||
                    (e.clientX >= btn.left && e.clientX <= btn.right && e.clientY >= btn.top && e.clientY <= btn.bottom);
            }
            if (!prevent || (!sf.base.closest(target, HASH + this.getDropDownButton().id) && !sf.base.closest(e.target, HASH + this.popup.id) &&
                !sf.base.closest(e.target, MODEL))) {
                if (isColorPicker) {
                    this.element.parentElement.blazor__instance.removeZIndex();
                }
                this.dotNetRef.invokeMethodAsync(BTN_CLICK, null);
                this.removeEventListener();
            }
        }
        else {
            this.removeEventListener();
        }
    };
    SfDropDownButton.prototype.keydownHandler = function (e) {
        var element = this.getElement();
        var isColorPicker = this.element.parentElement.classList.contains(COLOR_PICKER);
        var Rtl = this.element.parentElement.classList.contains(RTL);
        if (isColorPicker) {
            this.element.parentElement.blazor__instance.paletteKeyDown(e, Rtl);
        }
        if (e.altKey) {
            if (e.keyCode === UP) {
                e.stopPropagation();
                e.preventDefault();
                this.dotNetRef.invokeMethodAsync(BTN_CLICK, null);
                element.focus();
                this.removeEventListener();
            }
        }
        else {
            var ul = this.popup.firstElementChild;
            if (e.keyCode === ESC || e.keyCode === TAB && !isColorPicker) {
                e.stopPropagation();
                this.dotNetRef.invokeMethodAsync(BTN_CLICK, null);
                if (e.keyCode === ESC) {
                    e.preventDefault();
                }
                element.focus();
                this.removeEventListener();
            }
            if (!ul || !ul.classList.contains(DROPDOWN)) {
                return;
            }
            if (e.keyCode === ENTER) {
                e.preventDefault();
                if (e.target.classList.contains(ITEM) && e.target.classList.contains(FOCUSED)) {
                    element.focus();
                    this.removeEventListener();
                }
                else {
                    e.stopPropagation();
                }
                return;
            }
            if (e.keyCode === UP || e.keyCode === DOWN) {
                if (e.target.classList.contains(DROPDOWN)) {
                    e.stopPropagation();
                }
                e.preventDefault();
                sf.splitbuttons.upDownKeyHandler(ul, e.keyCode);
            }
        }
    };
    SfDropDownButton.prototype.getElement = function () {
        return (this.element.classList.contains(WRAPPER) ? this.element.firstElementChild : this.element);
    };
    SfDropDownButton.prototype.getDropDownButton = function () {
        return this.element.classList.contains(WRAPPER) ?
            this.element.getElementsByClassName(ELEMENT)[0] : this.element;
    };
    SfDropDownButton.prototype.clickHandler = function (e) {
        if (sf.base.closest(e.target, DOT + ITEM)) {
            this.removeEventListener();
            this.getElement().focus();
        }
    };
    SfDropDownButton.prototype.dropDownClickHandler = function (e) {
        var isColorPicker = this.element.parentElement.classList.contains(COLOR_PICKER);
        if (isColorPicker) {
            if (sf.base.closest(e.target, '.e-dropdown-btn')) {
                this.element.parentElement.blazor__instance.removeZIndex();
            }
        }
    };
    SfDropDownButton.prototype.scrollHandler = function (e) {
        if (!this.popup || !document.getElementById(this.popup.id)) {
            var ddb = this.getDropDownButton();
            if (!ddb || !document.getElementById(ddb.id)) {
                sf.base.EventHandler.remove(e.target, SCROLL, this.scrollHandler);
            }
            return;
        }
        var isColorPicker = this.element.parentElement.classList.contains(COLOR_PICKER);
        this.setPosition(isColorPicker);
        if (isColorPicker) {
            this.element.parentElement.blazor__instance.setOffset(this.popup);
        }
    };
    SfDropDownButton.prototype.addEventListener = function (setFocus) {
        sf.base.EventHandler.add(document, MOUSEDOWN, this.mouseDownHandler, this);
        sf.base.EventHandler.add(this.popup, CLICK, this.clickHandler, this);
        sf.base.EventHandler.add(this.popup, KEYDOWN, this.keydownHandler, this);
        sf.base.EventHandler.add(this.element, CLICK, this.dropDownClickHandler, this);
        if (setFocus && this.popup.firstElementChild) {
            var focusEle = this.popup.querySelector(DOT + FOCUSED);
            focusEle ? focusEle.focus() : this.popup.firstElementChild.focus();
        }
    };
    SfDropDownButton.prototype.removeEventListener = function (reposition) {
        sf.base.EventHandler.remove(document, MOUSEDOWN, this.mouseDownHandler);
        sf.base.EventHandler.remove(this.element, CLICK, this.dropDownClickHandler);
        if (this.popup.parentElement) {
            sf.base.EventHandler.remove(this.popup, CLICK, this.clickHandler);
            sf.base.EventHandler.remove(this.popup, KEYDOWN, this.keydownHandler);
            if (reposition) {
                var ddb = this.getDropDownButton();
                if (ddb && document.getElementById(ddb.id)) {
                    this.addScrollEvents(false);
                    this.element.appendChild(this.popup);
                }
            }
        }
    };
    SfDropDownButton.prototype.addScrollEvents = function (add) {
        var elements = sf.popups.getScrollableParent(this.element);
        for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
            var element = elements_1[_i];
            add ? sf.base.EventHandler.add(element, SCROLL, this.scrollHandler, this) :
                sf.base.EventHandler.remove(element, SCROLL, this.scrollHandler);
        }
    };
    return SfDropDownButton;
}());
// eslint-disable-next-line @typescript-eslint/naming-convention, no-underscore-dangle, id-blacklist, id-match
var DropDownButton = {
    openPopup: function (element, popup, dotnetRef, blankIcon) {
        if (!sf.base.isNullOrUndefined(element)) {
            if (sf.base.isNullOrUndefined(element.blazor__instance)) {
                new SfDropDownButton(element, popup, dotnetRef);
            }
            else {
                element.blazor__instance.popup = popup;
            }
            element.blazor__instance.openPopup(blankIcon);
        }
    },
    addEventListener: function (element) {
        element.blazor__instance.removeEventListener();
        element.blazor__instance.addEventListener(true);
    },
    removeEventListener: function (element) {
        element.blazor__instance.removeEventListener(true);
    }
};

return DropDownButton;

}());


/***/ }),

/***/ "./resources/20.1.61/Scripts/sf-dropdownlist.js":
/*!******************************************************!*\
  !*** ./resources/20.1.61/Scripts/sf-dropdownlist.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.sfBlazor = window.sfBlazor || {};
window.sfBlazor.DropDownList = (function () {
'use strict';

var POPUP_CONTENT = 'e-content';
var LIST_ITEM = 'e-list-item';
var CLOSE_POPUP = 'ClosePopup';
var ITEM_FOCUS = 'e-item-focus';
var DDL_DEVICE = 'e-ddl-device';
var MOBILE_FILTER = 'e-ddl-device-filter';
var POPUP_FULL_SCREEN = 'e-popup-full-page';
var INPUT_FOCUS = 'e-input-focus';
var FIXED_HEAD = 'e-fixed-head';
var GROUP = 'e-list-group-item';
var SELECTED = 'e-active';
var HOVER = 'e-hover';
var HIDE = 'Hide';
var ICON_ANIM = 'e-icon-anim';
var VIRTUAL_HANDLER = 'VirtualScrollHandler';
var SfDropDownList = /** @class */ (function () {
    // tslint:disable
    function SfDropDownList(containerElement, element, dotnetRef, options) {
        this.activeIndex = null;
        this.prevSelectPoints = {};
        this.containerElement = containerElement;
        this.element = element;
        this.options = options;
        this.element.blazor__instance = this;
        this.dotNetRef = dotnetRef;
    }
    SfDropDownList.prototype.initialize = function () {
        this.keyConfigure = {
            tab: 'tab',
            enter: '13',
            escape: '27',
            end: '35',
            home: '36',
            down: '40',
            up: '38',
            pageUp: '33',
            pageDown: '34',
            open: 'alt+40',
            close: 'shift+tab',
            hide: 'alt+38',
            space: '32'
        };
        if (!sf.base.Browser.isDevice) {
            new sf.base.KeyboardEvents(this.containerElement, {
                keyAction: this.keyActionHandler.bind(this), keyConfigs: this.keyConfigure, eventName: 'keydown'
            });
        }
        if (this.options.moduleName === 'SfComboBox') {
            sf.base.EventHandler.add(this.element, 'keydown', this.onFilterDown, this);
        }
    };
    SfDropDownList.prototype.setAutoFillSelection = function (currentValue) {
        if (!this.isAndroidAutoFill(currentValue)) {
            this.autoFillSelection(currentValue);
        }
    };
    SfDropDownList.prototype.onFilterDown = function (e) {
        if (!(e.keyCode === 13 || e.keyCode === 40 || e.keyCode === 38 || e.keyCode === 9)) {
            this.prevSelectPoints = this.getSelectionPoints();
        }
    };
    SfDropDownList.prototype.getSelectionPoints = function () {
        var input = this.element;
        return { start: Math.abs(input.selectionStart), end: Math.abs(input.selectionEnd) };
    };
    SfDropDownList.prototype.autoFillSelection = function (currentValue) {
        var selection = this.getSelectionPoints();
        var value = this.element.value.substr(0, selection.start);
        if (value && (value.toLowerCase() === currentValue.substr(0, selection.start).toLowerCase())) {
            var inputValue = value + currentValue.substr(value.length, currentValue.length);
            this.element.value = inputValue;
            this.element.setSelectionRange(selection.start, this.element.value.length);
        }
        else {
            this.element.value = currentValue;
            this.element.setSelectionRange(0, this.element.value.length);
        }
    };
    
    SfDropDownList.prototype.isAndroidAutoFill = function (value) {
        if (sf.base.Browser.isAndroid) {
            var currentPoints = this.getSelectionPoints();
            var prevEnd = this.prevSelectPoints.end;
            var curEnd = currentPoints.end;
            var prevStart = this.prevSelectPoints.start;
            var curStart = currentPoints.start;
            if (prevEnd !== 0 && ((prevEnd === value.length && prevStart === value.length) ||
                (prevStart > curStart && prevEnd > curEnd) || (prevEnd === curEnd && prevStart === curStart))) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    };
    SfDropDownList.prototype.removeFillSelection = function () {
        var selection = this.getSelectionPoints();
        this.element.setSelectionRange(selection.end, selection.end);
    };
    SfDropDownList.prototype.keyActionHandler = function (e) {
        var keyEventsArgs = {
            Action: e.action,
            Key: e.key,
            Events: e,
            Type: e.type
        };
        if (!this.isDisposed) {
            this.dotNetRef.invokeMethodAsync('KeyActionHandler', keyEventsArgs);
        }
        if ((e.action !== 'tab' && e.action !== 'close' && e.action !== 'space' && e.action !== 'enter' && e.action !== 'open'
            && (this.options.moduleName === 'SfDropDownList' || e.action !== 'home' && e.action !== 'end'))
            || (e.action === 'enter' && !sf.base.isNullOrUndefined(this.isPopupOpen()))) {
            e.preventDefault();
        }
    };
    SfDropDownList.prototype.getOffsetValue = function (popupEle) {
        var popupStyles = getComputedStyle(popupEle);
        var borderTop = parseInt(popupStyles.borderTopWidth, 10);
        var borderBottom = parseInt(popupStyles.borderBottomWidth, 10);
        return this.setPopupPosition(borderTop + borderBottom);
    };
    SfDropDownList.prototype.setPopupPosition = function (border) {
        var offsetValue;
        var popupOffset = border;
        var selectedLI = this.list.querySelector('.' + ITEM_FOCUS) || this.list.querySelector('.' + SELECTED);
        var firstItem = this.isEmptyList() ? this.list : this.liCollections[0];
        var lastItem = this.isEmptyList() ? this.list : this.liCollections[this.getItems().length - 1];
        var liHeight = firstItem.getBoundingClientRect().height;
        var listHeight = this.list.offsetHeight / 2;
        var height = sf.base.isNullOrUndefined(selectedLI) ? firstItem.offsetTop : selectedLI.offsetTop;
        var lastItemOffsetValue = lastItem.offsetTop;
        if (lastItemOffsetValue - listHeight < height && !sf.base.isNullOrUndefined(this.liCollections) &&
            this.liCollections.length > 0 && !sf.base.isNullOrUndefined(selectedLI)) {
            var count = this.list.offsetHeight / liHeight;
            var paddingBottom = parseInt(getComputedStyle(this.list).paddingBottom, 10);
            offsetValue = (count - (this.liCollections.length - this.activeIndex)) * liHeight - popupOffset + paddingBottom;
            this.list.scrollTop = selectedLI.offsetTop;
        }
        else if (height > listHeight) {
            offsetValue = listHeight - liHeight / 2;
            this.list.scrollTop = height - listHeight + liHeight / 2;
        }
        else {
            offsetValue = height;
        }
        var inputHeight = this.containerElement.offsetHeight;
        offsetValue = offsetValue + liHeight + popupOffset - ((liHeight - inputHeight) / 2);
        return -offsetValue;
    };
    SfDropDownList.prototype.getItems = function () {
        return this.list ? this.list.querySelectorAll('.' + LIST_ITEM) : [];
    };
    // tslint:disable
    SfDropDownList.prototype.renderPopup = function (popupElement, popupHolderEle, openEventArgs, isModifiedPopup, options, dataItem) {
        this.options = options;
        this.popupHolder = popupHolderEle;
        this.list = popupHolderEle.querySelector('.' + POPUP_CONTENT) || sf.base.select('.' + POPUP_CONTENT, this.popupContainer);
        this.liCollections = this.getItems();
        var offsetValue = 0;
        var left;
        var listHeight = sf.base.formatUnit(this.options.popupHeight);
        var searchBoxContainer;
        this.wireListEvents();
        if (popupElement) {
            var oldPopupEle = document.getElementById(popupElement.id);
            if (oldPopupEle) {
                sf.base.remove(oldPopupEle);
            }
        }
        document.body.appendChild(popupElement);
        popupElement.style.visibility = 'hidden';
        if (this.options.allowFiltering) {
            if (this.options.moduleName === 'SfDropDownList') {
                this.filterInput = popupElement.querySelector('input.e-input');
                searchBoxContainer = this.filterInput.parentElement;
                new sf.base.KeyboardEvents(this.filterInput, {
                    keyAction: this.keyActionHandler.bind(this),
                    keyConfigs: this.keyConfigure,
                    eventName: 'keydown'
                });
            }
            else {
                this.filterInput = this.element;
            }
        }
        if (this.options.popupHeight !== 'auto') {
            var searchBoxHeight = 0;
            if (!sf.base.isNullOrUndefined(searchBoxContainer)) {
                searchBoxHeight = (searchBoxContainer.parentElement).getBoundingClientRect().height;
                listHeight = (parseInt(listHeight, 10) - (searchBoxHeight)).toString() + 'px';
            }
            if (popupElement.querySelector('.e-ddl-header')) {
                var header = popupElement.querySelector('.e-ddl-header');
                var height = Math.round(header.getBoundingClientRect().height);
                listHeight = (parseInt(listHeight, 10) - (height + searchBoxHeight)).toString() + 'px';
            }
            if (popupElement.querySelector('.e-ddl-footer')) {
                var footer = popupElement.querySelector('.e-ddl-footer');
                var height = Math.round(footer.getBoundingClientRect().height);
                listHeight = (parseInt(listHeight, 10) - (height + searchBoxHeight)).toString() + 'px';
            }
            this.list.style.maxHeight = (parseInt(listHeight, 10) - 2).toString() + 'px'; // due to box-sizing property
            popupElement.style.maxHeight = sf.base.formatUnit(this.options.popupHeight);
        }
        else {
            popupElement.style.height = 'auto';
        }
        if (this.list && this.list.querySelector('.' + SELECTED)) {
            this.setScrollPosition();
        }
        if (sf.base.Browser.isDevice && (!this.options.allowFiltering && (this.options.moduleName === 'SfDropDownList' ||
            (this.options.moduleName === 'SfComboBox')))) {
            offsetValue = this.getOffsetValue(popupElement);
            var firstItem = this.isEmptyList() ? this.list : this.liCollections[0];
            left = -(parseInt(getComputedStyle(firstItem).textIndent, 10) -
                parseInt(getComputedStyle(this.element).paddingLeft, 10) +
                parseInt(getComputedStyle(this.element.parentElement).borderLeftWidth, 10));
        }
        this.popupCreation(popupElement, offsetValue, left);
        this.checkCollision(popupElement);
        if (sf.base.Browser.isDevice) {
            this.popupObj.element.classList.add(DDL_DEVICE);
            if (this.options.moduleName === 'SfDropDownList' || (this.options.moduleName === 'SfComboBox'
                && !this.options.allowFiltering)) {
                this.popupObj.collision = { X: 'fit', Y: 'fit' };
            }
            if (this.options.allowFiltering && this.options.moduleName === 'SfDropDownList') {
                this.popupObj.element.classList.add(MOBILE_FILTER);
                this.popupObj.position = { X: 0, Y: 0 };
                this.popupObj.dataBind();
                sf.base.attributes(this.popupObj.element, { style: 'left:0px;right:0px;top:0px;bottom:0px;' +
                        ('z-index:' + this.options.zIndex.toString() + ';') });
                sf.base.addClass([document.body, this.popupObj.element], POPUP_FULL_SCREEN);
                this.setSearchBoxPosition();
            }
        }
        popupElement.style.visibility = 'visible';
        sf.base.addClass([popupElement], 'e-popup-close');
        if (sf.base.Browser.isDevice) {
            if ((this.options.moduleName === 'SfDropDownList' &&
                !this.options.allowFiltering) || (this.options.moduleName === 'SfComboBox' && !this.options.allowFiltering)) {
                var scrollParentElements = this.popupObj.getScrollableParent(this.containerElement);
                for (var _i = 0, scrollParentElements_1 = scrollParentElements; _i < scrollParentElements_1.length; _i++) {
                    var element = scrollParentElements_1[_i];
                    sf.base.EventHandler.add(element, 'scroll', this.scrollHandler, this);
                }
            }
            if (this.isFilterLayout()) {
                sf.base.EventHandler.add(this.list, 'scroll', this.listScroll, this);
            }
        }
        if (openEventArgs !== null && openEventArgs.popup !== null && isModifiedPopup) {
            for (var _a = 0, _b = Object.keys(openEventArgs.popup); _a < _b.length; _a++) {
                var prop = _b[_a];
                switch (prop) {
                    case 'collision':
                        if (openEventArgs.popup.collision && (this.popupObj.collision.X !== openEventArgs.popup.collision.X.toLowerCase() || this.popupObj.collision.Y !== openEventArgs.popup.collision.Y.toLowerCase())) {
                            this.popupObj.collision = { X: openEventArgs.popup.collision.X.toLowerCase(), Y: openEventArgs.popup.collision.Y.toLowerCase() };
                        }
                        break;
                    case 'position':
                        if (this.popupObj.position && (this.popupObj.position.X !== openEventArgs.popup.position.X || this.popupObj.position.Y !== openEventArgs.popup.position.Y)) {
                            this.popupObj.position = { X: openEventArgs.popup.position.X, Y: openEventArgs.popup.position.Y };
                        }
                        break;
                    case 'relateTo':
                        if (this.popupObj.relateTo !== openEventArgs.popup.relateTo) {
                            this.popupObj.relateTo = openEventArgs.popup.relateTo;
                        }
                        break;
                    case 'targetType':
                        if (this.popupObj.targetType !== openEventArgs.popup.targetType.toLowerCase()) {
                            this.popupObj.targetType = openEventArgs.popup.targetType;
                        }
                        break;
                    case 'offsetX':
                        if (this.popupObj.offsetX !== openEventArgs.popup.offsetX) {
                            this.popupObj.offsetX = openEventArgs.popup.offsetX;
                        }
                        break;
                    case 'offsetY':
                        if (this.popupObj.offsetY !== openEventArgs.popup.offsetY) {
                            this.popupObj.offsetY = openEventArgs.popup.offsetY;
                        }
                        break;
                }
            }
            this.popupObj.dataBind();
            this.popupObj.refreshPosition(this.popupObj.relateTo, true);
        }
        if (this.options.enableVirtualization) {
            sf.base.EventHandler.add(this.list, 'scroll', this.virtualScroll, this);
        }
        sf.base.attributes(this.containerElement, { 'aria-expanded': 'true' });
        var inputParent = this.options.allowFiltering ? this.filterInput.parentElement : this.containerElement;
        sf.base.addClass([inputParent], [INPUT_FOCUS]);
        var animModel = { name: 'FadeIn', duration: 100 };
        this.popupObj.show(new sf.base.Animation(animModel), (this.options.zIndex === 1000) ? this.element : null);
    };
    SfDropDownList.prototype.wireListEvents = function () {
        sf.base.EventHandler.add(this.list, 'mouseover', this.onMouseOver, this);
        sf.base.EventHandler.add(this.list, 'mouseout', this.onMouseLeave, this);
    };
    
    SfDropDownList.prototype.unWireListEvents = function () {
        sf.base.EventHandler.remove(this.list, 'mouseover', this.onMouseOver);
        sf.base.EventHandler.remove(this.list, 'mouseout', this.onMouseLeave);
    };
    
    SfDropDownList.prototype.onMouseOver = function (e) {
        var currentLi = sf.base.closest(e.target, '.' + LIST_ITEM);
        this.setHover(currentLi);
    };
    
    SfDropDownList.prototype.onMouseLeave = function (e) {
        this.removeHover();
    };
    
    SfDropDownList.prototype.listScroll = function () {
        this.filterInput.blur();
    };
    SfDropDownList.prototype.scrollHandler = function () {
        if (!this.isDisposed) {
            this.dotNetRef.invokeMethodAsync(HIDE);
        }
    };
    SfDropDownList.prototype.setFloatingHeader = function (e) {
        var list = this.popupContainer && this.popupContainer.querySelector('.e-content');
        if (list && list.classList.contains('e-nodata') && this.fixedHeaderElement) {
            sf.base.remove(this.fixedHeaderElement);
            this.fixedHeaderElement = null;
        }
        else if (this.list && this.list.querySelector('li')) {
            if (sf.base.isNullOrUndefined(this.fixedHeaderElement)) {
                this.fixedHeaderElement = sf.base.createElement('div', { className: FIXED_HEAD });
                if (!this.list.querySelector('li').classList.contains(GROUP)) {
                    this.fixedHeaderElement.style.display = 'none';
                }
                sf.base.prepend([this.fixedHeaderElement], this.list);
                this.setFixedHeader();
            }
            this.scrollStop(e);
        }
    };
    SfDropDownList.prototype.setFixedHeader = function () {
        this.list.parentElement.style.display = 'block';
        var borderWidth = 0;
        if (this.list && this.list.parentElement) {
            borderWidth = parseInt(document.defaultView.getComputedStyle(this.list.parentElement, null).getPropertyValue('border-width'), 10);
        }
        var liWidth = (this.list ? this.list.querySelectorAll(".e-list-item")[0].offsetWidth : 0) - borderWidth;
        this.fixedHeaderElement.style.width = liWidth.toString() + 'px';
        sf.base.setStyleAttribute(this.fixedHeaderElement, { zIndex: 10 });
        var firstLi = this.list.querySelector('.' + GROUP);
        this.fixedHeaderElement.innerHTML = firstLi.innerHTML;
    };
    SfDropDownList.prototype.scrollStop = function (e) {
        var target = e.target;
        var liCollections = this.list.querySelectorAll('li');
        var liHeight = parseInt(getComputedStyle(liCollections[0], null).getPropertyValue('height'), 10);
        var topIndex = Math.round(target.scrollTop / liHeight);
        for (var i = topIndex; i > -1; i--) {
            if (!sf.base.isNullOrUndefined(liCollections[i]) && liCollections[i].classList.contains(GROUP)) {
                var currentLi = liCollections[i];
                this.fixedHeaderElement.innerHTML = currentLi.innerHTML;
                this.fixedHeaderElement.style.top = e.target.scrollTop + 'px';
                this.fixedHeaderElement.style.display = 'block';
                break;
            }
            else {
                this.fixedHeaderElement.style.display = 'none';
                this.fixedHeaderElement.style.top = 'none';
            }
        }
    };
    SfDropDownList.prototype.isFilterLayout = function () {
        return this.options.moduleName === 'SfDropDownList' && this.options.allowFiltering;
    };
    SfDropDownList.prototype.setSearchBoxPosition = function () {
        var searchBoxHeight = this.popupObj.element.querySelector('span.e-filter-parent').getBoundingClientRect().height;
        var footerELement = this.popupObj.element.querySelector('.e-ddl-footer');
        var headerElement = this.popupObj.element.querySelector('.e-ddl-header');
        this.popupObj.element.style.maxHeight = '100%';
        this.popupObj.element.style.width = '100%';
        var footerHeight = footerELement ? footerELement.getBoundingClientRect().height : 0;
        var headerHeight = headerElement ? headerElement.getBoundingClientRect().height : 0;
        // inset 4px is added from the script so removed it statically
        this.list.style.maxHeight = this.list.style.height = window.innerHeight - (footerHeight + headerHeight + searchBoxHeight + 4) + 'px';
    };
    SfDropDownList.prototype.checkCollision = function (popupEle) {
        if (!sf.base.Browser.isDevice || (sf.base.Browser.isDevice && !(this.options.moduleName === 'SfDropDownList'))) {
            var collision = sf.popups.isCollide(popupEle);
            if (collision.length > 0) {
                popupEle.style.marginTop = -parseInt(getComputedStyle(popupEle).marginTop, 10) + 'px';
            }
        }
    };
    SfDropDownList.prototype.destroy = function () {
        sf.base.EventHandler.remove(document, 'mousedown', this.onDocumentClick);
    };
    SfDropDownList.prototype.refreshPopup = function () {
        if (this.isPopupOpen()) {
            this.popupObj.refreshPosition(this.containerElement);
            var list = this.popupObj.element.querySelector('.e-content');
            if (list.classList.contains('e-nodata') && this.fixedHeaderElement) {
                sf.base.remove(this.fixedHeaderElement);
                this.fixedHeaderElement = null;
            }
        }
    };
    SfDropDownList.prototype.popupCreation = function (popupElement, offsetValue, left) {
        var _this = this;
        this.popupContainer = popupElement;
        this.popupObj = new sf.popups.Popup(this.popupContainer, {
            width: this.setWidth(), targetType: 'relative',
            relateTo: this.containerElement, collision: { X: 'flip', Y: 'flip' }, offsetY: offsetValue,
            enableRtl: this.options.enableRtl, offsetX: left, position: { X: 'left', Y: 'bottom' },
            zIndex: this.options.zIndex,
            close: function () {
                sf.base.EventHandler.remove(_this.list, 'scroll', _this.setFloatingHeader);
                sf.base.removeClass([_this.containerElement], ICON_ANIM);
                _this.fixedHeaderElement = null;
                _this.popupHolder.appendChild(_this.popupContainer);
                _this.unWireListEvents();
                var scrollableParentElements = _this.popupObj.getScrollableParent(_this.containerElement);
                for (var _i = 0, scrollableParentElements_1 = scrollableParentElements; _i < scrollableParentElements_1.length; _i++) {
                    var element = scrollableParentElements_1[_i];
                    sf.base.EventHandler.remove(element, 'scroll', _this.scrollHandler);
                }
                if (sf.base.Browser.isDevice && _this.isFilterLayout()) {
                    sf.base.removeClass([document.body, _this.popupObj.element], POPUP_FULL_SCREEN);
                    sf.base.EventHandler.remove(_this.list, 'scroll', _this.listScroll);
                }
                if (_this.options.enableVirtualization) {
                    sf.base.EventHandler.remove(_this.list, 'scroll', _this.virtualScroll);
                }
                if (_this.popupObj) {
                    _this.popupObj.destroy();
                }
                if (!_this.isDisposed && document.body.contains(_this.element)) {
                    // tslint:disable
                    _this.dotNetRef.invokeMethodAsync(CLOSE_POPUP).catch(function () { });
                }
                _this.popupObj = null;
            },
            open: function () {
                var IsGrouping = _this.list.querySelector('li') && _this.list.querySelector('li').classList.contains(GROUP);
                sf.base.EventHandler.add(document, 'mousedown', _this.onDocumentClick, _this);
                if (_this.options.allowFiltering && _this.filterInput) {
                    _this.filterInput.focus();
                }
                if (IsGrouping) {
                    sf.base.EventHandler.add(_this.list, 'scroll', _this.setFloatingHeader, _this);
                }
                if (_this.options.enableVirtualization && !IsGrouping) {
                    _this.virtualScroll();
                }
            },
            targetExitViewport: function () {
                if (!sf.base.Browser.isDevice && !_this.isDisposed) {
                    _this.dotNetRef.invokeMethodAsync(HIDE);
                }
            }
        });
    };
    SfDropDownList.prototype.virtualScroll = function () {
        if (this.popupObj && this.popupObj.element) {
            var borderWidth = parseInt(getComputedStyle(this.popupObj.element).borderWidth, 10);
            borderWidth = borderWidth == 0 ? 1 : borderWidth;
            var isPopupOpen = this.popupObj.element.classList.contains('e-popup-open');
            if (((this.list.scrollTop + this.list.offsetHeight) + borderWidth >= this.list.scrollHeight) && isPopupOpen && !this.isDisposed) {
                this.dotNetRef.invokeMethodAsync(VIRTUAL_HANDLER);
            }
        }
    };
    SfDropDownList.prototype.isEmptyList = function () {
        return !sf.base.isNullOrUndefined(this.liCollections) && this.liCollections.length === 0;
    };
    SfDropDownList.prototype.setWidth = function () {
        var width = sf.base.formatUnit(this.options.popupWidth);
        if (width.indexOf('%') > -1) {
            var inputWidth = this.containerElement.offsetWidth * parseFloat(width) / 100;
            width = inputWidth.toString() + 'px';
        }
        if (sf.base.Browser.isDevice && (!this.options.allowFiltering)) {
            var firstItem = this.isEmptyList() ? this.list : this.liCollections[0];
            width = (parseInt(width, 10) + (parseInt(getComputedStyle(firstItem).textIndent, 10) -
                parseInt(getComputedStyle(this.element).paddingLeft, 10) +
                parseInt(getComputedStyle(this.element.parentElement).borderLeftWidth, 10)) * 2) + 'px';
        }
        return width;
    };
    SfDropDownList.prototype.onDocumentClick = function (e) {
        var target = e.target;
        if (!(!sf.base.isNullOrUndefined(this.popupObj) && sf.base.closest(target, '#' + this.popupObj.element.id)) &&
            !this.containerElement.contains(e.target)) {
            if ((this.containerElement.classList.contains(INPUT_FOCUS) || this.isPopupOpen()) && !this.isDisposed) {
                this.dotNetRef.invokeMethodAsync(HIDE);
            }
        }
        else if (target !== this.element && !(this.options.allowFiltering && target === this.filterInput)
            && !(this.options.moduleName === 'SfComboBox' &&
                !this.options.allowFiltering && sf.base.Browser.isDevice && target === this.containerElement.querySelector('.e-ddl-icon'))) {
            e.preventDefault();
        }
    };
    SfDropDownList.prototype.closePopup = function (closeEventArgs, options) {
        this.options = options;
        if (this.isPopupOpen() && !closeEventArgs.cancel && this.popupObj) {
            var animModel = {
                name: 'FadeOut',
                duration: 20,
                delay: 0
            };
            this.popupObj.hide(new sf.base.Animation(animModel));
        }
    };
    SfDropDownList.prototype.setScrollPosition = function (e) {
        if (!sf.base.isNullOrUndefined(e)) {
            switch (e.action) {
                case 'pageDown':
                case 'down':
                case 'end':
                    this.scrollBottom();
                    break;
                default:
                    this.scrollTop();
                    break;
            }
        }
        else {
            this.scrollBottom(true);
        }
    };
    SfDropDownList.prototype.scrollBottom = function (isInitial) {
        if (this.list && (this.list.querySelector('.' + ITEM_FOCUS) || this.list.querySelector('.' + SELECTED))) {
            var selectedLI = (this.list.querySelector('.' + ITEM_FOCUS) || this.list.querySelector('.' + SELECTED));
            var currentOffset = this.list.offsetHeight;
            var groupBy = this.list.querySelector('li').classList.contains(GROUP);
            var nextBottom = selectedLI.offsetTop + selectedLI.offsetHeight - this.list.scrollTop;
            var nextOffset = this.list.scrollTop + nextBottom - currentOffset;
            nextOffset = isInitial ? nextOffset + parseInt(getComputedStyle(this.list).paddingTop, 10) * 2 : nextOffset + parseInt(getComputedStyle(this.list).paddingTop, 10);
            var boxRange = selectedLI.offsetTop + selectedLI.offsetHeight - this.list.scrollTop;
            boxRange = groupBy && !sf.base.isNullOrUndefined(this.fixedHeaderElement) ?
                boxRange - this.fixedHeaderElement.offsetHeight : boxRange;
            if (this.activeIndex === 0) {
                this.list.scrollTop = 0;
            }
            else if (nextBottom > currentOffset || !(boxRange > 0 && this.list.offsetHeight > boxRange)) {
                this.list.scrollTop = nextOffset;
            }
        }
    };
    SfDropDownList.prototype.scrollTop = function () {
        if (this.list && (this.list.querySelector('.' + ITEM_FOCUS) || this.list.querySelector('.' + SELECTED))) {
            var selectedLI = (this.list.querySelector('.' + ITEM_FOCUS) || this.list.querySelector('.' + SELECTED));
            var nextOffset = selectedLI.offsetTop - this.list.scrollTop;
            var groupBy = this.list.querySelector('li').classList.contains(GROUP);
            nextOffset = groupBy && !sf.base.isNullOrUndefined(this.fixedHeaderElement) ?
                nextOffset - this.fixedHeaderElement.offsetHeight : nextOffset;
            var boxRange = (selectedLI.offsetTop + selectedLI.offsetHeight - this.list.scrollTop);
            if (this.activeIndex === 0) {
                this.list.scrollTop = 0;
            }
            else if (nextOffset < 0) {
                this.list.scrollTop = this.list.scrollTop + nextOffset;
            }
            else if (!(boxRange > 0 && this.list.offsetHeight > boxRange)) {
                this.list.scrollTop = selectedLI.offsetTop - (groupBy && !sf.base.isNullOrUndefined(this.fixedHeaderElement) ?
                    this.fixedHeaderElement.offsetHeight : 0);
            }
        }
    };
    SfDropDownList.prototype.setHover = function (li) {
        if (li && !li.classList.contains(HOVER)) {
            this.removeHover();
            sf.base.addClass([li], HOVER);
        }
    };
    
    SfDropDownList.prototype.removeHover = function () {
        if (this.list) {
            var hoveredItem = this.list.querySelectorAll('.' + HOVER);
            if (hoveredItem && hoveredItem.length) {
                sf.base.removeClass(hoveredItem, HOVER);
            }
        }
    };
    SfDropDownList.prototype.isPopupOpen = function () {
        return this.popupObj && document.body.contains(this.popupObj.element);
    };
    return SfDropDownList;
}());
// tslint:disable
var DropDownList = {
    initialize: function (containerElement, element, dotnetRef, options) {
        if (element) {
            new SfDropDownList(containerElement, element, dotnetRef, options);
            if (element.blazor__instance) {
                element.blazor__instance.initialize();
            }
        }
    },
    renderPopup: function (element, popupElement, popupHolderEle, openEventArgs, isModifiedPopup, options, dataItem) {
        if (element && element.blazor__instance && popupElement && popupHolderEle) {
            element.blazor__instance.renderPopup(popupElement, popupHolderEle, openEventArgs, isModifiedPopup, options, dataItem);
        }
    },
    refreshPopup: function (element) {
        if (element && element.blazor__instance) {
            element.blazor__instance.refreshPopup();
        }
    },
    closePopup: function (element, closeEventArgs, options) {
        if (element && element.blazor__instance) {
            element.blazor__instance.closePopup(closeEventArgs, options);
        }
    },
    updateScrollPosition: function (element, args) {
        if (element && element.blazor__instance) {
            element.blazor__instance.setScrollPosition(args);
        }
    },
    getPageCount: function (popupEle) {
        var list = popupEle && popupEle.querySelector('.e-content');
        if (list) {
            var liHeight = list.classList.contains('e-nodata') ? null :
                getComputedStyle(list.querySelectorAll('.e-list-item')[0], null).getPropertyValue('height');
            return Math.round(list.getBoundingClientRect().height / parseInt(liHeight, 10));
        }
        return 0;
    },
    setAutoFillSelection: function (element, currentValue) {
        if (element && element.blazor__instance) {
            element.blazor__instance.setAutoFillSelection(currentValue);
        }
    },
    removeFillSelection: function (element) {
        if (element && element.blazor__instance) {
            element.blazor__instance.removeFillSelection();
        }
    },
    focusIn: function (inputEle) {
        inputEle && inputEle.focus();
    },
    focusOut: function (inputEle) {
        inputEle && inputEle.blur();
    },
    destroy: function (element, popupElement, popupHolderEle, closeEventArgs, options) {
        if (element && element.blazor__instance) {
            if (popupElement && popupElement instanceof HTMLElement && popupHolderEle) {
                element.blazor__instance.isDisposed = true;
                element.blazor__instance.closePopup(closeEventArgs, options);
            }
            element.blazor__instance.destroy();
        }
    },
};

return DropDownList;

}());


/***/ }),

/***/ "./resources/20.1.61/Scripts/sf-range-navigator.js":
/*!*********************************************************!*\
  !*** ./resources/20.1.61/Scripts/sf-range-navigator.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.sfBlazor = window.sfBlazor || {};
window.sfBlazor.RangeNavigator = (function () {
'use strict';

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable max-len */
/* eslint-disable camelcase */
/**
 * RangeNavigator blazor script file.
 */
var SfRangeNavigator = /** @class */ (function () {
    function SfRangeNavigator(id, element, dotNetRef) {
        this.mouseY = 0;
        this.mouseX = 0;
        this.reSizeTo = 0;
        this.isTooltipHide = true;
        this.isDrag = false;
        this.tooltip = [];
        this.id = id;
        this.element = element;
        this.dotNetRef = dotNetRef;
        this.element.blazor__instance = this;
    }
    SfRangeNavigator.prototype.destroy = function () {
        this.unWireEvents(this.id, this.dotNetRef);
    };
    SfRangeNavigator.prototype.unWireEvents = function (id, dotnetref) {
        this.dotNetRef = dotnetref;
        RangeNavigator.dotnetrefCollection = RangeNavigator.dotnetrefCollection.filter(function (item) {
            return item.id !== id;
        });
        var cancelEvent = sf.base.Browser.isPointer ? 'pointerleave' : 'mouseleave';
        sf.base.EventHandler.remove(this.element, sf.base.Browser.touchStartEvent, this.rangeOnMouseDown);
        sf.base.EventHandler.remove(this.element, sf.base.Browser.touchMoveEvent, this.mouseMove);
        sf.base.EventHandler.remove(this.element, sf.base.Browser.touchEndEvent, this.mouseEnd);
        sf.base.EventHandler.remove(this.element, 'click', this.rangeOnMouseClick);
        sf.base.EventHandler.remove(this.element, cancelEvent, this.mouseLeave);
        // tslint:disable-next-line:max-line-length
        var resize = sf.base.Browser.isTouch && 'orientation' in window && 'onorientationchange' in window ? 'orientationchange' : 'resize';
        sf.base.EventHandler.remove(window, resize, RangeNavigator.resizeBound);
    };
    SfRangeNavigator.prototype.wireEvents = function (id, dotnetref) {
        this.dotNetRef = dotnetref;
        RangeNavigator.dotnetrefCollection.push({ id: id, dotnetref: dotnetref });
        var cancelEvent = sf.base.Browser.isPointer ? 'pointerleave' : 'mouseleave';
        sf.base.EventHandler.add(this.element, sf.base.Browser.touchStartEvent, this.rangeOnMouseDown, this);
        sf.base.EventHandler.add(this.element, sf.base.Browser.touchMoveEvent, this.mouseMove, this);
        sf.base.EventHandler.add(this.element, sf.base.Browser.touchEndEvent, this.mouseEnd, this);
        sf.base.EventHandler.add(this.element, 'click', this.rangeOnMouseClick, this);
        sf.base.EventHandler.add(this.element, cancelEvent, this.mouseLeave, this);
        // tslint:disable-next-line:max-line-length
        RangeNavigator.resizeBound = RangeNavigator.rangeResize.bind(this, RangeNavigator.dotnetrefCollection);
        var resize = sf.base.Browser.isTouch && 'orientation' in window && 'onorientationchange' in window ? 'orientationchange' : 'resize';
        sf.base.EventHandler.add(window, resize, RangeNavigator.resizeBound);
    };
    SfRangeNavigator.prototype.rangeOnMouseDown = function (e) {
        this.setMouseX(this.getPageX(e));
        if (e.target.id.indexOf('_Thumb') > -1) {
            this.element.blazor__instance.isDrag = true;
        }
        this.dotNetRef.invokeMethodAsync('OnRangeMouseDown', this.getEventArgs(e));
    };
    SfRangeNavigator.prototype.mouseMove = function (e) {
        if (document.getElementById(this.id.replace('_stockChart_rangeSelector', '') + '_svg')) {
            this.setMouseX(this.getPageX(e));
            if (this.element.blazor__instance.isDrag && this.sliderChangeValue) {
                this.element.blazor__instance.changeSlider();
            }
        }
    };
    SfRangeNavigator.prototype.changeSlider = function () {
        var start;
        var end;
        if (this.sliderChangeValue.isDrag && this.mouseX >= this.sliderChangeValue.boundsX) {
            switch (this.sliderChangeValue.currentSlider) {
                case 'Left':
                    this.sliderChangeValue.startValue = this.getRangeValue(Math.abs(this.mouseX - this.sliderChangeValue.boundsX));
                    break;
                case 'Right':
                    this.sliderChangeValue.endValue = this.getRangeValue(Math.abs(this.mouseX - this.sliderChangeValue.boundsX));
                    break;
                case 'Middle':
                    start = Math.max(this.getRangeValue(Math.abs(this.sliderChangeValue.startX - (this.sliderChangeValue.previousMoveX - this.mouseX) - this.sliderChangeValue.boundsX)), this.sliderChangeValue.rangeMin);
                    end = Math.min(this.getRangeValue(Math.abs(this.sliderChangeValue.endX - (this.sliderChangeValue.previousMoveX - this.mouseX) - this.sliderChangeValue.boundsX)), this.sliderChangeValue.rangeMax);
                    if (Math.floor(Math.abs(this.getXLocation(end) - this.getXLocation(start))) === Math.floor(this.sliderChangeValue.sliderWidth)) {
                        this.sliderChangeValue.startValue = start;
                        this.sliderChangeValue.endValue = end;
                    }
                    break;
            }
            this.setSlider(this.sliderChangeValue.startValue, this.sliderChangeValue.endValue);
            this.sliderChangeValue.previousMoveX = this.mouseX;
        }
    };
    SfRangeNavigator.prototype.setSlider = function (start, end) {
        var blazor__instance = this.element.blazor__instance;
        var selectedElement = document.getElementById(blazor__instance.id + '_SelectedArea');
        var leftUnSelectedElement = document.getElementById(blazor__instance.id + '_leftUnSelectedArea');
        var rightUnSelectedElement = document.getElementById(blazor__instance.id + '_rightUnSelectedArea');
        var leftSlider = document.getElementById(blazor__instance.id + '_LeftSlider');
        var rightSlider = document.getElementById(blazor__instance.id + '_RightSlider');
        if (!(end >= start)) {
            start = [end, end = start][0];
        }
        var padding = this.sliderChangeValue.boundsX;
        start = end >= start ? start : [end, end = start][0];
        start = Math.max(start, this.sliderChangeValue.rangeMin);
        end = Math.min(end, this.sliderChangeValue.rangeMax);
        this.sliderChangeValue.startX = padding + this.getXLocation(start);
        this.sliderChangeValue.endX = padding + this.getXLocation(end);
        var selectedX = this.sliderChangeValue.enableRtl ? this.sliderChangeValue.endX : this.sliderChangeValue.startX;
        var rightPadding = this.sliderChangeValue.enableRtl ? this.sliderChangeValue.startX : this.sliderChangeValue.endX;
        this.sliderChangeValue.sliderWidth = Math.abs(this.sliderChangeValue.endX - this.sliderChangeValue.startX);
        selectedElement.setAttribute('x', (selectedX) + '');
        selectedElement.setAttribute('width', this.sliderChangeValue.sliderWidth + '');
        leftUnSelectedElement.setAttribute('width', (selectedX - padding) + '');
        rightUnSelectedElement.setAttribute('x', rightPadding + '');
        rightUnSelectedElement.setAttribute('width', (this.sliderChangeValue.boundsWidth - (rightPadding - padding)) + '');
        leftSlider.setAttribute('transform', 'translate(' + (this.sliderChangeValue.startX - this.sliderChangeValue.thumpPadding) + ', 0)');
        rightSlider.setAttribute('transform', 'translate(' + (this.sliderChangeValue.endX - this.sliderChangeValue.thumpPadding) + ', 0)');
        var left = 0;
        var leftX = this.sliderChangeValue.enableRtl ? this.sliderChangeValue.endX : this.sliderChangeValue.startX;
        var rightX = this.sliderChangeValue.enableRtl ? this.sliderChangeValue.startX : this.sliderChangeValue.endX;
        var leftRect = {
            x: this.sliderChangeValue.isLeightWeight ? left + padding : padding,
            y: this.sliderChangeValue.isLeightWeight ? 0 : this.sliderChangeValue.boundsY,
            width: this.sliderChangeValue.isLeightWeight ? leftX - padding : leftX,
            height: this.sliderChangeValue.isLeightWeight ? this.sliderChangeValue.thumpY : this.sliderChangeValue.boundsHeight
        };
        var rightRect = {
            x: this.sliderChangeValue.isLeightWeight ? left + rightX : rightX,
            y: this.sliderChangeValue.isLeightWeight ? 0 : this.sliderChangeValue.boundsY,
            width: (this.sliderChangeValue.boundsWidth - (rightPadding - padding)),
            height: this.sliderChangeValue.isLeightWeight ? this.sliderChangeValue.thumpY : this.sliderChangeValue.boundsHeight
        };
        var midRect = {
            x: this.sliderChangeValue.isLeightWeight ? leftX + left : 0,
            y: this.sliderChangeValue.isLeightWeight ? 0 : this.sliderChangeValue.boundsY,
            width: this.sliderChangeValue.isLeightWeight ? Math.abs(this.sliderChangeValue.endX - this.sliderChangeValue.startX) : rightX,
            height: this.sliderChangeValue.isLeightWeight ? this.sliderChangeValue.thumpY : this.sliderChangeValue.boundsHeight
        };
        if (blazor__instance.tooltip.length > 0) {
            this.updateTooltip(leftRect, rightRect, midRect, this.sliderChangeValue.startX, this.sliderChangeValue.endX);
        }
    };
    SfRangeNavigator.prototype.updateTooltip = function (leftRect, rightRect, midRect, start, end) {
        var blazor__instance = this.element.blazor__instance;
        var content = this.getTooltipContent(this.sliderChangeValue.endValue);
        var rect = this.sliderChangeValue.enableRtl ? leftRect : rightRect;
        var textStyle = blazor__instance.tooltip[0].textStyle;
        if (RangeNavigator.measureText(content, textStyle.size, textStyle.fontWeight, textStyle.fontStyle, textStyle.fontFamily).Width
            > rect.width) {
            rect = midRect;
        }
        blazor__instance.tooltip[0].location.x = end;
        blazor__instance.tooltip[0].areaBounds = rect;
        blazor__instance.tooltip[0].content = [content];
        blazor__instance.tooltip[0].dataBind();
        content = this.getTooltipContent(this.sliderChangeValue.startValue);
        rect = this.sliderChangeValue.enableRtl ? rightRect : leftRect;
        textStyle = blazor__instance.tooltip[1].textStyle;
        if (RangeNavigator.measureText(content, textStyle.size, textStyle.fontWeight, textStyle.fontStyle, textStyle.fontFamily).Width
            > rect.width) {
            rect = midRect;
            rect.x = blazor__instance.sliderChangeValue.isLeightWeight ? 0 : rect.x;
        }
        blazor__instance.tooltip[1].location.x = start;
        blazor__instance.tooltip[1].content = [content];
        blazor__instance.tooltip[1].areaBounds = rect;
        blazor__instance.tooltip[1].dataBind();
    };
    SfRangeNavigator.prototype.getTooltipContent = function (point) {
        var format = this.sliderChangeValue.format;
        var isCustom = format.match('{value}') !== null;
        if (this.sliderChangeValue.valueType === 'DateTime') {
            return (new sf.base.Internationalization().getDateFormat({ format: format || 'MM/dd/yyyy' })(new Date(point)));
        }
        else {
            return new sf.base.Internationalization().getNumberFormat({
                format: isCustom ? '' : format,
                useGrouping: this.sliderChangeValue.useGrouping
            })(this.sliderChangeValue.valueType === 'Logarithmic' ? Math.pow(this.sliderChangeValue.logBase, point) : point);
        }
    };
    SfRangeNavigator.prototype.getRangeValue = function (x) {
        return (!this.sliderChangeValue.enableRtl ? x / this.sliderChangeValue.boundsWidth : (1 - (x / this.sliderChangeValue.boundsWidth))) * this.sliderChangeValue.rangeDelta + this.sliderChangeValue.rangeMin;
    };
    SfRangeNavigator.prototype.getXLocation = function (x) {
        var result = (x - this.sliderChangeValue.rangeMin) / this.sliderChangeValue.rangeDelta;
        return (this.sliderChangeValue.enableRtl ? (1 - result) : result) * this.sliderChangeValue.boundsWidth;
    };
    SfRangeNavigator.prototype.mouseEnd = function (e) {
        if (this.element.blazor__instance.isDrag && this.sliderChangeValue) {
            this.dotNetRef.invokeMethodAsync('SetStartEndValue', this.sliderChangeValue.startValue, this.sliderChangeValue.endValue, true, this.sliderChangeValue.enableTooltip);
            this.element.blazor__instance.isDrag = false;
        }
        this.dotNetRef.invokeMethodAsync('OnRangeMouseEnd', this.getEventArgs(e));
    };
    SfRangeNavigator.prototype.rangeOnMouseClick = function (e) {
        this.dotNetRef.invokeMethodAsync('OnRangeMouseClick', this.getEventArgs(e));
    };
    SfRangeNavigator.prototype.mouseLeave = function (e) {
        this.setMouseX(this.getPageX(e));
        this.element.blazor__instance.isDrag = false;
        this.dotNetRef.invokeMethodAsync('OnRangeMouseLeave', this.getEventArgs(e));
        if (this.isTooltipHide) {
            this.fadeOutTooltip();
        }
    };
    SfRangeNavigator.prototype.fadeOutTooltip = function () {
        if (this.sliderChangeValue && this.sliderChangeValue.isTooltipHide) {
            window.clearInterval(this.toolTipInterval);
            var blazor__instance_1 = this.element.blazor__instance;
            if (blazor__instance_1.tooltip[1]) {
                this.toolTipInterval = window.setTimeout(function () {
                    blazor__instance_1.tooltip[0].fadeOut();
                    blazor__instance_1.tooltip[1].fadeOut();
                }, 1000);
            }
        }
    };
    SfRangeNavigator.prototype.getPageX = function (e) {
        if (e.type.indexOf('touch') > -1) {
            return e.changedTouches[0].clientX;
        }
        else {
            return e.clientX;
        }
    };
    SfRangeNavigator.prototype.setMouseX = function (pageX) {
        var svgElement = document.getElementById(this.id.replace('_stockChart_rangeSelector', '') + '_svg');
        if (svgElement) {
            var svgRect = svgElement.getBoundingClientRect();
            var rect = document.getElementById(this.id).getBoundingClientRect();
            this.mouseX = (pageX - rect.left) - Math.max(svgRect.left - rect.left, 0);
        }
    };
    SfRangeNavigator.prototype.getEventArgs = function (e) {
        return {
            type: e.type,
            clientX: e.clientX,
            clientY: e.clientY,
            mouseX: this.mouseX,
            mouseY: this.mouseY,
            pointerType: e.pointerType,
            target: e.target.id,
            changedTouches: {
                clientX: e.changedTouches ? e.changedTouches[0].clientX : 0,
                clientY: e.changedTouches ? e.changedTouches[0].clientY : 0
            }
        };
    };
    return SfRangeNavigator;
}());
// tslint:disable
var RangeNavigator = {
    getParentElementBoundsById: function (id, dotNetRef) {
        var element = document.getElementById(id);
        if (element) {
            var navigator_1 = new SfRangeNavigator(id, element, dotNetRef);
            navigator_1.unWireEvents(id, dotNetRef);
            navigator_1.wireEvents(id, dotNetRef);
            element.style.width = '100%';
            element.style.height = '100%';
            var elementRect = element.getBoundingClientRect();
            return {
                width: elementRect.width || element.clientWidth || element.offsetWidth,
                height: elementRect.height || element.clientHeight || element.offsetHeight,
                left: elementRect.left,
                top: elementRect.top,
                right: elementRect.right,
                bottom: elementRect.bottom
            };
        }
        return { width: 0, height: 0, left: 0, top: 0, right: 0, bottom: 0 };
    },
    getElementBoundsById: function (id, dotNetRef, element, height, width) {
        element = document.getElementById(id);
        if (element) {
            var navigator_2 = new SfRangeNavigator(id, element, dotNetRef);
            navigator_2.unWireEvents(id, dotNetRef);
            navigator_2.wireEvents(id, dotNetRef);
            return this.getElementSize(element, height, width);
        }
        return { width: 0, height: 0 };
    },
    getElementSize: function (element, height, width) {
        if (element) {
            element.style.height = height;
            element.style.width = width;
            return { width: element.clientWidth || element.offsetWidth, height: element.clientHeight || element.offsetHeight };
        }
        return { width: 0, height: 0 };
    },
    destroy: function (element) {
        var currentInstance = element.blazor__instance;
        if (!sf.base.isNullOrUndefined(currentInstance)) {
            currentInstance.destroy();
        }
    },
    charCollection: [
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':',
        ';', '<', '=', '>', '?', '@', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
        'U', 'V', 'W', 'X', 'Y', 'Z', '[', ']', '^', '_', '`', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
        'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '{', '|', '}', '~', ' '
    ],
    measureText: function (text, size, fontWeight, fontStyle, fontFamily) {
        var textObject = document.getElementById('chartmeasuretext');
        if (textObject === null) {
            textObject = sf.base.createElement('text', { id: 'chartmeasuretext' });
            document.body.appendChild(textObject);
        }
        if (text === ' ') {
            text = '&nbsp;';
        }
        textObject.innerHTML = text;
        textObject.style.position = 'fixed';
        textObject.style.fontSize = size;
        textObject.style.fontWeight = fontWeight;
        textObject.style.fontStyle = fontStyle;
        textObject.style.fontFamily = fontFamily;
        textObject.style.visibility = 'hidden';
        textObject.style.top = '-100';
        textObject.style.left = '0';
        textObject.style.whiteSpace = 'nowrap';
        textObject.style.lineHeight = 'normal';
        return {
            Width: textObject.clientWidth,
            Height: textObject.clientHeight
        };
    },
    getCharSizeByFontKeys: function (fontkeys) {
        var charSizeList = {};
        var charList = this.charCollection;
        var fontKeysLength = fontkeys.length;
        for (var i = 0; i < fontKeysLength; i++) {
            var fontValues = fontkeys[i].split('_');
            var fontWeight = fontValues[0];
            var fontStyle = fontValues[1];
            var fontFamily = fontValues[2];
            var charKey = '_' + fontWeight + '_' + fontStyle + '_' + fontFamily;
            for (var j = 0; j < charList.length; j++) {
                charSizeList[charList[j] + charKey] = this.measureText(charList[j], '100px', fontWeight, fontStyle, fontFamily);
            }
        }
        return JSON.stringify(charSizeList);
    },
    getCharSizeByCharKey: function (charkey) {
        var fontValues = charkey.split('_');
        return this.measureText(fontValues[0], '100px', fontValues[2], fontValues[3], fontValues[4]);
    },
    dotnetref: {},
    setValueOnSliderSelect: function (element, sliderChangeValue) {
        element = document.getElementById(element.id);
        var blazor__instance = element.blazor__instance;
        if (!sf.base.isNullOrUndefined(blazor__instance)) {
            blazor__instance.sliderChangeValue = sliderChangeValue;
            blazor__instance.isTooltipHide = sliderChangeValue.isTooltipHide;
            blazor__instance.isDrag = true;
        }
    },
    getElementRect: function (id) {
        var element = document.getElementById(id);
        var rect;
        if (element) {
            rect = element.getBoundingClientRect();
            sf.base.remove(element);
        }
        return {
            Left: rect.left,
            Right: rect.right,
            Top: rect.top,
            Bottom: rect.bottom,
            Width: rect.width,
            Height: rect.height
        };
    },
    dotnetrefCollection: [],
    renderTooltip: function (leftTooltipOption, rightTooltipOption, leftElementId, rightElementId, element) {
        var svgElement;
        var firstRender;
        var idCollection = [leftElementId, rightElementId];
        var tooltipOptions = [leftTooltipOption, rightTooltipOption];
        var id;
        var options;
        element = document.getElementById(element.id);
        for (var i = 1; i >= 0; i--) {
            id = idCollection[i];
            svgElement = document.getElementById(id.replace('_stockChart_rangeSelector', '') + '_svg');
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            firstRender = svgElement && parseInt(svgElement.getAttribute('opacity'), 10) > 0 ? false : true;
            options = JSON.parse(tooltipOptions[i]);
            element.blazor__instance.tooltip[i] = new sf.svgbase.Tooltip(options);
            element.blazor__instance.tooltip[i].appendTo('#' + id);
        }
    },
    performSliderAnimation: function (element, start, end, animationDuration, currentStart, currentEnd, enableTooltip, allowSnapping, rangeSliderModule, sliderChangeValue) {
        var _this = this;
        element = document.getElementById(element.id);
        var blazor__instance = element.blazor__instance;
        blazor__instance.sliderChangeValue = sliderChangeValue;
        new sf.base.Animation({}).animate(sf.base.createElement('div'), {
            duration: animationDuration,
            progress: function (args) {
                var aStart = _this.linear(args.timeStamp, 0, start - currentStart, args.duration) + currentStart;
                var aEnd = _this.linear(args.timeStamp, 0, end - currentEnd, args.duration) + currentEnd;
                blazor__instance.setSlider(aStart, aEnd);
            },
            end: function () {
                blazor__instance.setSlider(start, end);
                if (allowSnapping) {
                    rangeSliderModule.invokeMethodAsync('PerformSnapping', start, end, true, enableTooltip);
                }
                else {
                    blazor__instance.dotNetRef.invokeMethodAsync('SetStartEndValue', start, end, true, enableTooltip);
                }
            }
        });
    },
    linear: function (currentTime, startValue, endValue, duration) {
        return -endValue * Math.cos(currentTime / duration * (Math.PI / 2)) + endValue + startValue;
    },
    setAttribute: function (id, attribute, value) {
        var element = document.getElementById(id);
        if (element) {
            element.setAttribute(attribute, value);
        }
    },
    getAndSetTextContent: function (id, get, value) {
        var element = document.getElementById(id);
        if (element) {
            if (get) {
                return element.textContent;
            }
            else {
                element.textContent = value;
            }
        }
        return null;
    },
    resizeBound: {},
    resize: {},
    rangeResize: function (dotnetrefCollection, e) {
        var _this = this;
        this.element.blazor__instance.isDrag = false;
        if (this.resize) {
            clearTimeout(this.resize);
        }
        this.resize = setTimeout(function () {
            var count = dotnetrefCollection.length;
            var tempDotnetref;
            for (var i = 0; i < count; i++) {
                tempDotnetref = dotnetrefCollection[i].dotnetref;
                if (dotnetrefCollection[i].id.indexOf('_stockChart_') < 0) {
                    tempDotnetref.invokeMethodAsync('OnRangeResize', e);
                }
            }
            clearTimeout(_this.resize);
        }, 500);
        return false;
    }
};

return RangeNavigator;

}());


/***/ }),

/***/ "./resources/20.1.61/Scripts/sf-spinner.js":
/*!*************************************************!*\
  !*** ./resources/20.1.61/Scripts/sf-spinner.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.sfBlazor = window.sfBlazor || {};
window.sfBlazor.Spinner = (function () {
'use strict';

var SfSpinner = /** @class */ (function () {
    function SfSpinner(element) {
        this.element = element;
        this.element.blazor__instance = this;
    }
    SfSpinner.prototype.initialize = function (element) {
        var theme = window.getComputedStyle(element, ':after').getPropertyValue('content');
        return theme.replace(/['"]+/g, '');
    };
    return SfSpinner;
}());
// eslint-disable-next-line
var Spinner = {
    initialize: function (element) {
        if (!sf.base.isNullOrUndefined(element)) {
            new SfSpinner(element);
            return (!sf.base.isNullOrUndefined(element) && !sf.base.isNullOrUndefined(element.blazor__instance)) ?
                element.blazor__instance.initialize(element) : null;
        }
        else {
            return null;
        }
    }
};

return Spinner;

}());


/***/ }),

/***/ "./resources/20.1.61/Scripts/sf-stock-chart.js":
/*!*****************************************************!*\
  !*** ./resources/20.1.61/Scripts/sf-stock-chart.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.sfBlazor = window.sfBlazor || {};
window.sfBlazor.StockChart = (function () {
'use strict';

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable max-len */
/**
 * StockChart native blazor source file
 */
var SfStockChart = /** @class */ (function () {
    function SfStockChart(id, element, dotnetRef) {
        this.mouseY = 0;
        this.mouseX = 0;
        this.eventInterval = 80;
        this.mouseMoveRef = null;
        this.mouseMoveThreshold = null;
        this.mouseLeaveRef = null;
        this.documentKeyHandler = function (e) {
            // 74 - J
            if (e.altKey && e.keyCode === 74 && !sf.base.isNullOrUndefined(this.element)) {
                this.element.focus();
            }
        };
        this.id = id;
        this.element = element;
        this.dotnetref = dotnetRef;
        // eslint-disable-next-line camelcase
        this.element.blazor__instance = this;
    }
    SfStockChart.prototype.render = function () {
        this.unWireEvents(this.id, this.dotnetref);
        this.wireEvents(this.id, this.dotnetref);
    };
    SfStockChart.prototype.destroy = function () {
        this.unWireEvents(this.id, this.dotnetref);
    };
    SfStockChart.prototype.unWireEvents = function (id, dotnetref) {
        var element = document.getElementById(id);
        if (!element) {
            return;
        }
        this.dotnetref = dotnetref;
        StockChart.dotnetrefCollection = StockChart.dotnetrefCollection.filter(function (item) {
            return item.id !== id;
        });
        var cancelEvent = sf.base.Browser.isPointer ? 'pointerleave' : 'mouseleave';
        element.removeEventListener('mousemove', this.mouseMoveRef);
        element.removeEventListener('touchmove', this.mouseMoveRef);
        sf.base.EventHandler.remove(element, cancelEvent, this.mouseLeaveRef);
        sf.base.EventHandler.remove(document.body, 'keydown', this.documentKeyHandler);
        var resize = sf.base.Browser.isTouch && 'orientation' in window && 'onorientationchange' in window ? 'orientationchange' : 'resize';
        sf.base.EventHandler.remove(window, resize, StockChart.resizeBound);
    };
    SfStockChart.prototype.wireEvents = function (id, dotnetref) {
        var element = document.getElementById(id);
        if (!element) {
            return;
        }
        this.dotnetref = dotnetref;
        StockChart.dotnetrefCollection.push({ id: id, dotnetref: dotnetref });
        var cancelEvent = sf.base.Browser.isPointer ? 'pointerleave' : 'mouseleave';
        this.mouseMoveRef = this.mouseMove.bind(this, dotnetref, id);
        this.mouseLeaveRef = this.mouseLeave.bind(this, dotnetref, id);
        element.addEventListener('mousemove', this.mouseMoveRef);
        element.addEventListener('touchmove', this.mouseMoveRef);
        sf.base.EventHandler.add(element, cancelEvent, this.mouseLeaveRef);
        sf.base.EventHandler.add(document.body, 'keydown', this.documentKeyHandler);
        StockChart.resizeBound = StockChart.chartResize.bind(this, StockChart.dotnetrefCollection);
        var resize = sf.base.Browser.isTouch && 'orientation' in window && 'onorientationchange' in window ? 'orientationchange' : 'resize';
        sf.base.EventHandler.add(window, resize, StockChart.resizeBound);
    };
    SfStockChart.prototype.getEventArgs = function (e, id) {
        var clientX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
        var clientY = e.changedTouches ? e.changedTouches[0].clientY : e.clientY;
        this.setMouseXY(clientX, clientY, id);
        var touches = e.touches; //pointerId
        var touchList = [];
        if (e.type.indexOf('touch') > -1) {
            for (var i = 0, length_1 = touches.length; i < length_1; i++) {
                touchList.push({ pageX: touches[i].clientX, pageY: touches[i].clientY, pointerId: e.pointerId || 0 });
            }
        }
        return {
            type: e.type,
            clientX: e.clientX,
            clientY: e.clientY,
            mouseX: this.mouseX,
            mouseY: this.mouseY,
            pointerType: e.pointerType,
            target: e.target.id,
            changedTouches: {
                clientX: e.changedTouches ? e.changedTouches[0].clientX : 0,
                clientY: e.changedTouches ? e.changedTouches[0].clientY : 0
            },
            touches: touchList,
            pointerId: e.pointerId
        };
    };
    SfStockChart.prototype.setMouseXY = function (pageX, pageY, id) {
        var svgRect = document.getElementById(id.replace('_stockChart_chart', '') + '_svg').getBoundingClientRect();
        var rect = document.getElementById(id).getBoundingClientRect();
        this.mouseY = (pageY - rect.top) - Math.max(svgRect.top - rect.top, 0);
        this.mouseX = (pageX - rect.left) - Math.max(svgRect.left - rect.left, 0);
    };
    SfStockChart.prototype.mouseMove = function (dotnetref, id, e) {
        if (this.mouseMoveThreshold == null || (new Date().getTime() - this.mouseMoveThreshold) > this.eventInterval) {
            this.mouseMoveThreshold = new Date().getTime();
            var pageX = void 0;
            var pageY = void 0;
            var touchArg = void 0;
            if (e.type === 'touchmove') {
                this.isTouch = true;
                touchArg = e;
                pageX = touchArg.changedTouches[0].clientX;
                pageY = touchArg.changedTouches[0].clientY;
                e.preventDefault();
            }
            else {
                this.isTouch = e.pointerType === 'touch' || e.pointerType === '2' || this.isTouch;
                pageX = e.clientX;
                pageY = e.clientY;
            }
            this.dotnetref = dotnetref;
            if (document.getElementById(id.replace('_stockChart_chart', '') + '_svg')) {
                this.setMouseXY(pageX, pageY, id);
                dotnetref.invokeMethodAsync('OnStockChartMouseMove', this.getEventArgs(e, id));
            }
        }
        return false;
    };
    SfStockChart.prototype.mouseLeave = function (dotnetref, id, e) {
        this.dotnetref = dotnetref;
        dotnetref.invokeMethodAsync('OnStockChartMouseLeave', this.getEventArgs(e, id));
        return false;
    };
    return SfStockChart;
}());
var StockChart = {
    initialize: function (element, dotnetRef) {
        var instance = new SfStockChart(element.id, element, dotnetRef);
        instance.render();
    },
    destroy: function (element) {
        var currentInstance = element.blazor__instance;
        if (!sf.base.isNullOrUndefined(currentInstance)) {
            currentInstance.destroy();
        }
    },
    eventInterval: 80,
    dotnetref: {},
    dotnetrefCollection: [],
    renderTooltip: function (tooltipOptions, elementId, tooltipModule, element) {
        var svgElement = document.getElementById(elementId + '_svg');
        var firstRender = svgElement && parseInt(svgElement.getAttribute('opacity'), 10) > 0 ? false : true;
        var options = JSON.parse(tooltipOptions);
        var currentInstance = element.blazor__instance;
        if (firstRender && !sf.base.isNullOrUndefined(currentInstance)) {
            currentInstance.tooltip = new sf.svgbase.Tooltip(options);
            currentInstance.tooltip.appendTo('#' + elementId);
        }
        else if (!sf.base.isNullOrUndefined(currentInstance.tooltip)) {
            currentInstance.tooltip.location = new sf.svgbase.TooltipLocation(options.location.x, options.location.y);
            currentInstance.tooltip.content = options.content;
            currentInstance.tooltip.header = options.header;
            currentInstance.tooltip.offset = options.offset;
            currentInstance.tooltip.palette = options.palette;
            currentInstance.tooltip.shapes = options.shapes;
            currentInstance.tooltip.data = options.data;
            currentInstance.tooltip.template = options.template;
            currentInstance.tooltip.textStyle.color = options.textStyle.color || currentInstance.tooltip.textStyle.color;
            currentInstance.tooltip.textStyle.fontFamily = options.textStyle.fontFamily || currentInstance.tooltip.textStyle.fontFamily;
            currentInstance.tooltip.textStyle.fontStyle = options.textStyle.fontStyle || currentInstance.tooltip.textStyle.fontStyle;
            currentInstance.tooltip.textStyle.fontWeight = options.textStyle.fontWeight || currentInstance.tooltip.textStyle.fontWeight;
            currentInstance.tooltip.textStyle.opacity = options.textStyle.opacity || currentInstance.tooltip.textStyle.opacity;
            currentInstance.tooltip.textStyle.size = options.textStyle.size || currentInstance.tooltip.textStyle.size;
            currentInstance.tooltip.isNegative = options.isNegative;
            currentInstance.tooltip.clipBounds = new sf.svgbase.TooltipLocation(options.clipBounds.x, options.clipBounds.y);
            currentInstance.tooltip.arrowPadding = options.arrowPadding;
            currentInstance.tooltip.dataBind();
        }
    },
    fadeOut: function (element) {
        if (sf.base.isNullOrUndefined(element.blazor__instance) ||
            (!sf.base.isNullOrUndefined(element.blazor__instance) && sf.base.isNullOrUndefined(element.blazor__instance.tooltip))) {
            return;
        }
        var groupElement = document.getElementById(element.blazor__instance.tooltip.element.id + '_svg');
        if (groupElement && groupElement.getAttribute('opacity') === '0') {
            return;
        }
        element.blazor__instance.tooltip.fadeOut();
    },
    getParentElementBoundsById: function (id) {
        var element = document.getElementById(id);
        if (element && element.parentElement) {
            var width = element.parentElement.style.width;
            element.parentElement.style.width = '100%';
            var elementRect = element.parentElement.getBoundingClientRect();
            var styles = window.getComputedStyle(element.parentElement);
            var padding = parseFloat(styles.paddingLeft) + parseFloat(styles.paddingRight);
            var size = {
                width: Math.max(0, (elementRect.width - padding)),
                height: element.clientHeight || element.offsetHeight,
                left: elementRect.left,
                top: elementRect.top,
                right: elementRect.right,
                bottom: elementRect.bottom
            };
            element.parentElement.style.width = width;
            return size;
        }
        return { width: 0, height: 0, left: 0, top: 0, right: 0, bottom: 0 };
    },
    getElementBoundsById: function (id) {
        var element = document.getElementById(id);
        if (element) {
            var elementRect = element.getBoundingClientRect();
            return {
                width: element.clientWidth || element.offsetWidth,
                height: element.clientHeight || element.offsetHeight,
                left: elementRect.left,
                top: elementRect.top,
                right: elementRect.right,
                bottom: elementRect.bottom
            };
        }
        return { width: 0, height: 0, left: 0, top: 0, right: 0, bottom: 0 };
    },
    getBrowserDeviceInfo: function () {
        return {
            browserName: sf.base.Browser.info.name,
            isPointer: sf.base.Browser.isPointer,
            isDevice: sf.base.Browser.isDevice,
            isTouch: sf.base.Browser.isTouch,
            isIos: sf.base.Browser.isIos || sf.base.Browser.isIos7
        };
    },
    setAttribute: function (id, attribute, value) {
        var element = document.getElementById(id);
        if (element) {
            element.setAttribute(attribute, value);
        }
    },
    createTooltip: function (id, text, top, left, fontSize) {
        var tooltip = document.getElementById(id);
        var style = 'top:' + top.toString() + 'px;' +
            'left:' + left.toString() + 'px;' +
            'color:black !important; ' +
            'background:#FFFFFF !important; ' +
            'position:absolute;border:1px solid #707070;font-size:' + fontSize + ';border-radius:2px; z-index:1';
        if (!tooltip) {
            tooltip = sf.base.createElement('div', {
                id: id, innerHTML: '&nbsp;' + text + '&nbsp;', styles: style
            });
            document.body.appendChild(tooltip);
        }
        else {
            tooltip.setAttribute('innerHTML', '&nbsp;' + text + '&nbsp;');
            tooltip.setAttribute('styles', style);
        }
    },
    removeElement: function (id) {
        var element = this.getElement(id);
        if (element) {
            sf.base.remove(element);
        }
    },
    resizeBound: {},
    resize: {},
    chartResize: function (dotnetrefCollection, e) {
        var _this = this;
        if (this.resize) {
            clearTimeout(this.resize);
        }
        this.resize = setTimeout(function () {
            var count = dotnetrefCollection.length;
            var tempDotnetref;
            for (var i = 0; i < count; i++) {
                tempDotnetref = dotnetrefCollection[i].dotnetref;
                tempDotnetref.invokeMethodAsync('OnStockChartResize', e);
            }
            clearTimeout(_this.resize);
        }, 500);
        return false;
    }
};

return StockChart;

}());


/***/ }),

/***/ "./resources/20.1.61/Scripts/sf-svg-export.js":
/*!****************************************************!*\
  !*** ./resources/20.1.61/Scripts/sf-svg-export.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.sfExport = {
    exportToImage: async function (type, fileName, elementId, allowDownload) {
        var returnValue = await window.sfExport.imageExport(type, fileName, elementId, allowDownload);
        if (returnValue instanceof Promise) {
            await returnValue.then(async function (data) {
                return data;
            });
        } else {
            return returnValue;
        }
    },
    validateExport: async function (returnValue) {
        if (returnValue instanceof Promise) {
            await returnValue.then(async function (data) {
                return data;
            });
        }
    },
    imageExport: async function (type, fileName, elementId, allowDownload) {
        return new Promise(function (resolve, reject) {
        var element = document.getElementById(elementId);
        var svgData = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' + element.outerHTML + '</svg>';
        var url = window.URL.createObjectURL(new Blob(type === 'SVG' ? [svgData] : [(new XMLSerializer()).serializeToString(element)], { type: 'image/svg+xml' }));
        if (type === 'SVG') {
            if (allowDownload) {
                window.sfExport.triggerDownload(type, fileName, url);
            }
            resolve(null);
        } else {
            var canvasElement = document.createElement('canvas');
            canvasElement.height = element.clientHeight;
            canvasElement.width = element.clientWidth;
            var context = canvasElement.getContext('2d');
            var image = new Image();
            image.onload = function () {
                context.drawImage(image, 0, 0);
                window.URL.revokeObjectURL(url);
                if (allowDownload) {
                    window.sfExport.triggerDownload(type, fileName, canvasElement.toDataURL('image/png').replace('image/png', 'image/octet-stream'));
                    resolve(null);
                } else {
                    var base64String = (type === 'JPEG') ? canvasElement.toDataURL('image/jpeg') : (type === 'PNG') ? canvasElement.toDataURL('image/png') : '';
                    resolve(base64String);
                }
            };
            image.src = url;
        }
    });
    },
    triggerDownload : function(type, fileName, url)  {
        var anchorElement = document.createElement('a');
        anchorElement.download = fileName + '.' + type.toLocaleLowerCase();
        anchorElement.href = url;
        anchorElement.click();
    },
    downloadPdf: function (base64String, fileName) {
        var sliceSize = 512;
        var byteCharacters = atob(base64String);
        var byteArrays = [];
        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            var slice = byteCharacters.slice(offset, offset + sliceSize);
            var byteNumbers = new Array(slice.length);
            for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }
            var byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }
        var blob = new Blob(byteArrays, { type: 'application/pdf' });
        var Url = URL || webkitURL;
        var blobUrl = Url.createObjectURL(blob);
        sfExport.triggerDownload("PDF", fileName, blobUrl);
    },
    print: function (printElement) {
        var printWindow;
		printWindow = window.open('', 'print', 'height=' + window.outerHeight + ',width=' + window.outerWidth + ',tabbar=no');
		printWindow.moveTo(0, 0);
		printWindow.resizeTo(screen.availWidth, screen.availHeight);
		var div = document.createElement('div');
		div.appendChild(printElement.cloneNode(true));
		var links = [].slice.call(document.getElementsByTagName('head')[0].querySelectorAll('base, link, style'));
		var blinks = [].slice.call(document.getElementsByTagName('body')[0].querySelectorAll('link, style'));
		var reference = '';
		if (blinks.length) {
			for (var l = 0, len = blinks.length; l < len; l++) {
				links.push(blinks[l]);
			}
		}
		for (var i = 0, len = links.length; i < len; i++) {
			reference += links[i].outerHTML;
		}
		printWindow.document.write('<!DOCTYPE html> <html><head>' + reference + '</head><body>' + div.innerHTML +'<script> (function() { window.ready = true; })(); </script>' + '</body></html>');
		printWindow.document.close();
		printWindow.focus();
		var interval = setInterval(function () {
		  if (printWindow.ready) {
			printWindow.print();
			printWindow.close();
			clearInterval(interval);
		  }
		}, 500);
    }
};

/***/ }),

/***/ "./resources/20.1.61/Scripts/sf-textbox.js":
/*!*************************************************!*\
  !*** ./resources/20.1.61/Scripts/sf-textbox.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.sfBlazor = window.sfBlazor || {};
window.sfBlazor.TextBox = (function () {
'use strict';

/**
 * Blazor texbox interop handler
 */
var BLUR = 'blur';
var MOUSE_DOWN = 'mousedown';
var MOUSE_UP = 'mouseup';
var INPUT_GROUP = 'e-input-group-icon';
var DISABLED = 'e-disabled';
var RIPPLE_BTN = 'e-input-btn-ripple';
var SfTextBox = /** @class */ (function () {
    function SfTextBox(element, dotnetRef, containerEle) {
        this.element = element;
        this.container = containerEle;
        this.element.blazor_input_instance = this;
        this.dotNetRef = dotnetRef;
        this.isDestroyed = false;
    }
    SfTextBox.prototype.initialize = function () {
        sf.base.EventHandler.add(this.element, BLUR, this.blurHandler, this);
        var buttons = this.container ? this.container.querySelectorAll('.' + INPUT_GROUP) : null;
        if (buttons && buttons.length > 0) {
            for (var index = 0; index < buttons.length; index++) {
                sf.base.EventHandler.add(buttons[index], MOUSE_DOWN, this.onMouseDownRipple, this);
                sf.base.EventHandler.add(buttons[index], MOUSE_UP, this.onMouseUpRipple, this);
            }
        }
    };
    SfTextBox.prototype.onMouseDownRipple = function (args) {
        var button = args ? args.currentTarget : null;
        if (button && !this.container.classList.contains(DISABLED) && !this.container.querySelector('input').readOnly) {
            button.classList.add(RIPPLE_BTN);
        }
    };
    SfTextBox.prototype.onMouseUpRipple = function (args) {
        var button = args ? args.currentTarget : null;
        if (button) {
            setTimeout(function () {
                button.classList.remove(RIPPLE_BTN);
            }, 500);
        }
    };
    SfTextBox.prototype.blurHandler = function () {
        if (!this.isDestroyed) {
            // tslint:disable
            this.dotNetRef.invokeMethodAsync('BlurHandler').catch(function () { });
        }
        else {
            sf.base.EventHandler.remove(this.element, BLUR, this.blurHandler);
        }
    };
    SfTextBox.prototype.destroy = function () {
        sf.base.EventHandler.remove(this.element, BLUR, this.blurHandler);
    };
    return SfTextBox;
}());
// tslint:disable
var TextBox = {
    initialize: function (element, dotnetRef, containerEle) {
        if (element) {
            new SfTextBox(element, dotnetRef, containerEle);
        }
        if (element && element.blazor_input_instance) {
            element.blazor_input_instance.initialize();
        }
    },
    focusIn: function (element) {
        element.focus();
    },
    focusOut: function (element) {
        element.blur();
    },
    destroyInput: function (element) {
        if (element && element.blazor_input_instance) {
            element.blazor_input_instance.isDestroyed = true;
            element.blazor_input_instance.destroy();
        }
    }
};

return TextBox;

}());


/***/ }),

/***/ "./resources/20.1.61/Scripts/sf-toolbar.js":
/*!*************************************************!*\
  !*** ./resources/20.1.61/Scripts/sf-toolbar.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.sfBlazor = window.sfBlazor || {};
window.sfBlazor.Toolbar = (function () {
'use strict';

var CLS_TOOLBAR = 'e-toolbar';
var CLS_VERTICAL = 'e-vertical';
var CLS_ITEMS = 'e-toolbar-items';
var BZ_ITEMS = 'e-blazor-toolbar-items';
var CLS_ITEM = 'e-toolbar-item';
var CLS_RTL = 'e-rtl';
var CLS_SEPARATOR = 'e-separator';
var CLS_POPUPICON = 'e-popup-up-icon';
var CLS_POPUPDOWN = 'e-popup-down-icon';
var CLS_POPUPOPEN = 'e-popup-open';
var CLS_TEMPLATE = 'e-template';
var CLS_DISABLE = 'e-overlay';
var CLS_POPUPTEXT = 'e-toolbar-text';
var CLS_TBARTEXT = 'e-popup-text';
var CLS_TBAROVERFLOW = 'e-overflow-show';
var CLS_POPOVERFLOW = 'e-overflow-hide';
var CLS_TBARNAV = 'e-hor-nav';
var CLS_TBARSCRLNAV = 'e-scroll-nav';
var CLS_TBARRIGHT = 'e-toolbar-right';
var CLS_TBARLEFT = 'e-toolbar-left';
var CLS_TBARCENTER = 'e-toolbar-center';
var CLS_TBARPOS = 'e-tbar-pos';
var CLS_HSCROLLCNT = 'e-hscroll-content';
var CLS_VSCROLLCNT = 'e-vscroll-content';
var CLS_POPUPNAV = 'e-hor-nav';
var CLS_POPUPCLASS = 'e-toolbar-pop';
var CLS_POPUP = 'e-toolbar-popup';
var CLS_TBARBTNTEXT = 'e-tbar-btn-text';
var CLS_TBARNAVACT = 'e-nav-active';
var CLS_TBARIGNORE = 'e-ignore';
var CLS_POPPRI = 'e-popup-alone';
var CLS_HIDDEN = 'e-hidden';
var CLS_MULTIROW = 'e-toolbar-multirow';
var CLS_MULTIROWPOS = 'e-multirow-pos';
var CLS_MULTIROW_SEPARATOR = 'e-multirow-separator';
var CLS_EXTENDABLE_SEPARATOR = 'e-extended-separator';
var CLS_EXTEANDABLE_TOOLBAR = 'e-extended-toolbar';
var CLS_EXTENDABLECLASS = 'e-toolbar-extended';
var CLS_EXTENDPOPUP = 'e-expended-nav';
var CLS_EXTENDEDPOPOPEN = 'e-tbar-extended';
var CLS_ICON_CLOSE = 'e-close-icon';
var TAB = 9;
var DOWNARROW = 40;
var UPARROW = 38;
var END = 35;
var HOME = 36;
var SfToolbar = /** @class */ (function () {
    function SfToolbar(element, options, dotnetRef) {
        this.resizeContext = this.resize.bind(this);
        this.keyConfigs = {
            moveLeft: 'leftarrow',
            moveRight: 'rightarrow',
            moveUp: 'uparrow',
            moveDown: 'downarrow',
            popupOpen: 'enter',
            popupClose: 'escape',
            tab: 'tab',
            home: 'home',
            end: 'end'
        };
        this.element = element;
        if (!sf.base.isNullOrUndefined(element)) {
            // eslint-disable-next-line camelcase
            this.element.blazor__instance = this;
        }
        this.dotNetRef = dotnetRef;
        this.options = options;
    }
    SfToolbar.prototype.destroy = function () {
        this.unwireEvents();
        this.clearProperty();
        this.popObj = null;
        this.tbarAlign = null;
    };
    SfToolbar.prototype.wireEvents = function () {
        sf.base.EventHandler.add(this.element, 'click', this.clickHandler, this);
        window.addEventListener('resize', this.resizeContext);
        if (this.options.allowKeyboard) {
            this.wireKeyboardEvent();
        }
    };
    SfToolbar.prototype.wireKeyboardEvent = function () {
        this.keyModule = new sf.base.KeyboardEvents(this.element, {
            keyAction: this.keyActionHandler.bind(this),
            keyConfigs: this.keyConfigs
        });
        sf.base.EventHandler.add(this.element, 'keydown', this.docKeyDown, this);
        this.element.setAttribute('tabIndex', '0');
    };
    SfToolbar.prototype.unwireKeyboardEvent = function () {
        if (this.keyModule) {
            sf.base.EventHandler.remove(this.element, 'keydown', this.docKeyDown);
            this.keyModule.destroy();
            this.keyModule = null;
        }
    };
    SfToolbar.prototype.docKeyDown = function (e) {
        if (e.target.tagName === 'INPUT') {
            return;
        }
        var popCheck = !sf.base.isNullOrUndefined(this.popObj) && sf.base.isVisible(this.popObj.element) && this.options.overflowMode !== 'Extended';
        if (e.keyCode === TAB && e.target.classList.contains('e-hor-nav') === true && popCheck) {
            this.popObj.hide({ name: 'FadeOut', duration: 100 });
        }
        var keyCheck = (e.keyCode === DOWNARROW || e.keyCode === UPARROW || e.keyCode === END || e.keyCode === HOME);
        if (keyCheck) {
            e.preventDefault();
        }
    };
    SfToolbar.prototype.unwireEvents = function () {
        sf.base.EventHandler.remove(this.element, 'click', this.clickHandler);
        this.destroyScroll();
        this.unwireKeyboardEvent();
        window.removeEventListener('resize', this.resizeContext);
        sf.base.EventHandler.remove(document, 'scroll', this.docEvent);
        sf.base.EventHandler.remove(document, 'click', this.docEvent);
    };
    SfToolbar.prototype.clearProperty = function () {
        this.tbarEle = [];
        this.tbarAlgEle = { lefts: [], centers: [], rights: [] };
    };
    SfToolbar.prototype.docEvent = function (e) {
        var popEle = sf.base.closest(e.target, '.e-popup');
        if (this.popObj && sf.base.isVisible(this.popObj.element) && !popEle && this.options.overflowMode === 'Popup') {
            this.popObj.hide({ name: 'FadeOut', duration: 100 });
        }
    };
    SfToolbar.prototype.destroyScroll = function () {
        if (this.scrollModule) {
            if (this.tbarAlign) {
                sf.base.addClass([this.scrollModule.element], CLS_TBARPOS);
            }
            this.scrollModule.destroy();
            this.scrollModule = null;
        }
    };
    SfToolbar.prototype.destroyMode = function () {
        if (this.scrollModule) {
            sf.base.removeClass([this.scrollModule.element], CLS_RTL);
            this.destroyScroll();
        }
        sf.base.removeClass([this.element], CLS_EXTENDEDPOPOPEN);
        sf.base.removeClass([this.element], CLS_EXTEANDABLE_TOOLBAR);
        var tempEle = this.element.querySelector('.e-toolbar-multirow');
        if (tempEle) {
            sf.base.removeClass([tempEle], CLS_MULTIROW);
        }
        if (this.popObj) {
            this.popupRefresh(this.popObj.element, true);
        }
    };
    SfToolbar.prototype.elementFocus = function (ele) {
        var fChild = ele.firstElementChild;
        if (fChild) {
            fChild.focus();
            this.activeEleSwitch(ele);
        }
        else {
            ele.focus();
        }
    };
    SfToolbar.prototype.clstElement = function (tbrNavChk, trgt) {
        var clst;
        if (tbrNavChk && this.popObj && sf.base.isVisible(this.popObj.element)) {
            clst = this.popObj.element.querySelector('.' + CLS_ITEM);
        }
        else if (this.element === trgt || tbrNavChk) {
            clst = this.element.querySelector('.' + CLS_ITEM + ':not(.' + CLS_DISABLE + ' ):not(.' + CLS_SEPARATOR + ' ):not(.' + CLS_HIDDEN + ' )');
        }
        else {
            clst = sf.base.closest(trgt, '.' + CLS_ITEM);
        }
        return clst;
    };
    SfToolbar.prototype.keyHandling = function (clst, e, trgt, navChk, scrollChk) {
        var popObj = this.popObj;
        var rootEle = this.element;
        var popAnimate = { name: 'FadeOut', duration: 100 };
        var ele;
        var nodes;
        var value;
        switch (e.action) {
            case 'moveRight':
                if (this.options.isVertical) {
                    return;
                }
                if (rootEle === trgt) {
                    this.elementFocus(clst);
                }
                else if (!navChk) {
                    this.eleFocus(clst, 'next');
                }
                break;
            case 'moveLeft':
                if (this.options.isVertical) {
                    return;
                }
                if (!navChk) {
                    this.eleFocus(clst, 'previous');
                }
                break;
            case 'home':
            case 'end':
                if (clst) {
                    var popupCheck = sf.base.closest(clst, '.e-popup');
                    var extendedPopup = this.element.querySelector('.' + CLS_EXTENDABLECLASS);
                    if (this.options.overflowMode === 'Extended' && extendedPopup && extendedPopup.classList.contains('e-popup-open')) {
                        popupCheck = e.action === 'end' ? extendedPopup : null;
                    }
                    if (popupCheck) {
                        if (sf.base.isVisible(this.popObj.element)) {
                            nodes = [].slice.call(popupCheck.children);
                            if (e.action === 'home') {
                                ele = nodes[0];
                            }
                            else {
                                ele = nodes[nodes.length - 1];
                            }
                        }
                    }
                    else {
                        nodes = this.element.querySelectorAll('.' + CLS_ITEMS + ' .' + CLS_ITEM + ':not(.' + CLS_SEPARATOR + ')');
                        if (e.action === 'home') {
                            ele = nodes[0];
                        }
                        else {
                            ele = nodes[nodes.length - 1];
                        }
                    }
                    if (ele) {
                        this.elementFocus(ele);
                    }
                }
                break;
            case 'moveUp':
            case 'moveDown':
                value = e.action === 'moveUp' ? 'previous' : 'next';
                if (!this.options.isVertical) {
                    if (popObj && sf.base.closest(trgt, '.e-popup')) {
                        var popEle = popObj.element;
                        var popFrstEle = popEle.firstElementChild;
                        if ((value === 'previous' && popFrstEle === clst) || (value === 'next' && popEle.lastElementChild === clst)) {
                            return;
                        }
                        else {
                            this.eleFocus(clst, value);
                        }
                    }
                    else if (e.action === 'moveDown' && popObj && sf.base.isVisible(popObj.element)) {
                        this.elementFocus(clst);
                    }
                }
                else {
                    if (e.action === 'moveUp') {
                        this.eleFocus(clst, 'previous');
                    }
                    else {
                        this.eleFocus(clst, 'next');
                    }
                }
                break;
            case 'tab':
                if (!scrollChk && !navChk) {
                    var ele_1 = clst.firstElementChild;
                    if (rootEle === trgt) {
                        if (this.activeEle) {
                            this.activeEle.focus();
                        }
                        else {
                            this.activeEleRemove(ele_1);
                            ele_1.focus();
                        }
                        this.element.removeAttribute('tabindex');
                    }
                }
                break;
            case 'popupClose':
                if (popObj && this.options.overflowMode !== 'Extended') {
                    popObj.hide(popAnimate);
                }
                break;
            case 'popupOpen':
                if (!navChk) {
                    return;
                }
                if (popObj && !sf.base.isVisible(popObj.element)) {
                    popObj.element.style.top = rootEle.offsetHeight + 'px';
                    popObj.show({ name: 'FadeIn', duration: 100 });
                }
                else {
                    popObj.hide(popAnimate);
                }
                break;
        }
    };
    SfToolbar.prototype.keyActionHandler = function (e) {
        var trgt = e.target;
        if (trgt.tagName === 'INPUT' || trgt.tagName === 'TEXTAREA' || this.element.classList.contains(CLS_DISABLE)) {
            return;
        }
        e.preventDefault();
        var tbrNavChk = trgt.classList.contains(CLS_TBARNAV);
        var tbarScrollChk = trgt.classList.contains(CLS_TBARSCRLNAV);
        var clst = this.clstElement(tbrNavChk, trgt);
        if (clst || tbarScrollChk) {
            this.keyHandling(clst, e, trgt, tbrNavChk, tbarScrollChk);
        }
    };
    SfToolbar.prototype.eleContains = function (el) {
        return el.classList.contains(CLS_SEPARATOR) || el.classList.contains(CLS_DISABLE) || el.getAttribute('disabled') || el.classList.contains(CLS_HIDDEN) || !sf.base.isVisible(el);
    };
    SfToolbar.prototype.eleFocus = function (closest$$1, pos) {
        var sib = Object(closest$$1)[pos + 'ElementSibling'];
        if (sib) {
            var skipEle = this.eleContains(sib);
            if (skipEle) {
                this.eleFocus(sib, pos);
                return;
            }
            this.elementFocus(sib);
        }
        else if (this.tbarAlign) {
            var elem = Object(closest$$1.parentElement)[pos + 'ElementSibling'];
            if (!sf.base.isNullOrUndefined(elem) && elem.children.length === 0) {
                elem = Object(elem)[pos + 'ElementSibling'];
            }
            if (!sf.base.isNullOrUndefined(elem) && elem.children.length > 0) {
                if (pos === 'next') {
                    var el = elem.querySelector('.' + CLS_ITEM);
                    if (this.eleContains(el)) {
                        this.eleFocus(el, pos);
                    }
                    else {
                        el.firstElementChild.focus();
                        this.activeEleSwitch(el);
                    }
                }
                else {
                    var el = elem.lastElementChild;
                    if (this.eleContains(el)) {
                        this.eleFocus(el, pos);
                    }
                    else {
                        this.elementFocus(el);
                    }
                }
            }
        }
    };
    SfToolbar.prototype.clickHandler = function (e) {
        if (this.element.classList.contains('e-drag-action')) {
            return;
        }
        var trgt = e.target;
        var clsList = trgt.classList;
        var ele = this.element;
        var isPopupElement = !sf.base.isNullOrUndefined(sf.base.closest(trgt, '.' + CLS_POPUPCLASS));
        var isCloseIcon = clsList.contains(CLS_ICON_CLOSE);
        var popupNav = sf.base.closest(trgt, ('.' + CLS_TBARNAV));
        var trgParentDataIndex;
        var id;
        if (!popupNav) {
            popupNav = trgt;
        }
        if (!ele.children[0].classList.contains('e-hscroll') && !ele.children[0].classList.contains('e-vscroll')
            && (clsList.contains(CLS_TBARNAV))) {
            clsList = trgt.querySelector('.e-icons').classList;
        }
        if (clsList.contains(CLS_POPUPICON) || clsList.contains(CLS_POPUPDOWN)) {
            this.popupClickHandler(ele, popupNav, CLS_RTL);
        }
        var clst = sf.base.closest(e.target, '.' + CLS_ITEM);
        if ((sf.base.isNullOrUndefined(clst) || clst.classList.contains(CLS_DISABLE)) && !popupNav.classList.contains(CLS_TBARNAV)) {
            return;
        }
        if (!sf.base.isNullOrUndefined(clst)) {
            trgParentDataIndex = parseInt(clst.getAttribute('data-index'), 10);
            id = clst.id;
        }
        var tbItem = sf.base.selectAll('.' + CLS_ITEMS + ' .' + CLS_ITEM, this.element);
        this.dotNetRef.invokeMethodAsync('TriggerClickEvent', e, isPopupElement, isCloseIcon, trgParentDataIndex, id, tbItem.length - 1);
    };
    SfToolbar.prototype.popupClickHandler = function (ele, popupNav, CLS_RTL) {
        var popObj = this.popObj;
        if (sf.base.isVisible(popObj.element)) {
            popupNav.classList.remove(CLS_TBARNAVACT);
            popObj.hide({ name: 'FadeOut', duration: 100 });
        }
        else {
            if (ele.classList.contains(CLS_RTL) || this.options.isVerticalLeft) {
                if (ele.classList.contains(CLS_RTL)) {
                    popObj.enableRtl = true;
                }
                popObj.position = { X: 'left', Y: 'top' };
            }
            if (popObj.offsetX === 0 && (!ele.classList.contains(CLS_RTL) && !this.options.isVerticalLeft)) {
                popObj.enableRtl = false;
                popObj.position = { X: 'right', Y: 'top' };
            }
            popObj.dataBind();
            popObj.refreshPosition();
            popObj.element.style.top = this.getElementOffsetY() + 'px';
            if (this.options.overflowMode === 'Extended') {
                popObj.element.style.left = '0px';
                popObj.element.style.minHeight = '0px';
            }
            popupNav.classList.add(CLS_TBARNAVACT);
            popObj.show({ name: 'FadeIn', duration: 100 });
        }
    };
    SfToolbar.prototype.render = function () {
        this.scrollModule = null;
        this.popObj = null;
        this.isExtendedOpen = false;
        this.popupPriCount = 0;
        var width = sf.base.formatUnit(this.options.width);
        var height = sf.base.formatUnit(this.options.height);
        if (this.element) {
            if (sf.base.Browser.info.name !== 'msie' || this.options.height !== 'auto') {
                sf.base.setStyleAttribute(this.element, { 'height': height });
            }
            sf.base.setStyleAttribute(this.element, { 'width': width });
            this.element.setAttribute('aria-haspopup', 'false');
            this.renderControl();
            this.wireEvents();
        }
    };
    SfToolbar.prototype.renderControl = function () {
        this.tbarAlgEle = { lefts: [], centers: [], rights: [] };
        this.renderItems();
        this.renderLayout();
    };
    SfToolbar.prototype.renderLayout = function () {
        this.renderOverflowMode();
        if (this.tbarAlign) {
            this.itemPositioning();
        }
        if (this.popObj && this.popObj.element.childElementCount > 1 && this.checkPopupRefresh(this.element, this.popObj.element)) {
            this.popupRefresh(this.popObj.element, false);
        }
        this.separator();
    };
    SfToolbar.prototype.itemsAlign = function (items, itemEleDom, firstRender) {
        var innerItem;
        var innerPos;
        if (!this.tbarEle) {
            this.tbarEle = [];
        }
        for (var i = 0; i < items.length; i++) {
            var itemEleBlaDom = this.element.querySelector('.' + BZ_ITEMS);
            if (this.options.overflowMode === 'MultiRow' && firstRender) {
                innerItem = itemEleDom.querySelector('.' + CLS_ITEM + '[id="' + items[i].id + '"]');
            }
            else {
                innerItem = itemEleBlaDom.querySelector('.' + CLS_ITEM + '[id="' + items[i].id + '"]');
            }
            if (!innerItem) {
                continue;
            }
            if (items[i].overflow !== 'Show' && items[i].showAlwaysInPopup && !innerItem.classList.contains(CLS_SEPARATOR)) {
                this.popupPriCount++;
            }
            if (items[i].htmlAttributes) {
                this.setAttr(items[i].htmlAttributes, innerItem);
            }
            if (items[i].type === 'Button') {
                sf.base.EventHandler.remove(innerItem, 'click', this.itemClick);
                sf.base.EventHandler.add(innerItem, 'click', this.itemClick, this);
            }
            if (this.tbarEle.indexOf(innerItem) === -1) {
                this.tbarEle.push(innerItem);
            }
            if (this.options.overflowMode === 'MultiRow' && firstRender) {
                continue;
            }
            if (!this.tbarAlign) {
                this.tbarItemAlign(items[i], itemEleDom, i);
            }
            innerPos = itemEleDom.querySelector('.e-toolbar-' + items[i].align.toLowerCase());
            if (innerPos) {
                if (!(items[i].showAlwaysInPopup && items[i].overflow !== 'Show')) {
                    this.tbarAlgEle[(items[i].align + 's').toLowerCase()].push(innerItem);
                }
                innerPos.appendChild(innerItem);
            }
            else {
                itemEleDom.appendChild(innerItem);
            }
        }
    };
    SfToolbar.prototype.serverItemsRefresh = function (firstRender) {
        var ele = this.element;
        var wrapBlaEleDom = ele.querySelector('.' + BZ_ITEMS);
        var itemEleDom = ele.querySelector('.' + CLS_ITEMS);
        if ((itemEleDom && itemEleDom.children.length > 0) || wrapBlaEleDom.children.length > 0) {
            if (!itemEleDom && ele && ele.classList.contains(CLS_TOOLBAR) && ele.firstElementChild) {
                itemEleDom = sf.base.createElement('div', { className: CLS_ITEMS });
                ele.insertBefore(itemEleDom, ele.firstElementChild);
            }
            this.itemsAlign(this.options.items, itemEleDom, firstRender);
            this.renderLayout();
            this.refreshOverflow();
        }
    };
    SfToolbar.prototype.resetServerItems = function (firstRender) {
        if (this.options.overflowMode === 'MultiRow' && firstRender) {
            return;
        }
        var wrapBlaEleDom = this.element.querySelector('.' + BZ_ITEMS);
        var itemEles = [].slice.call(sf.base.selectAll('.' + CLS_ITEMS + ' .' + CLS_ITEM, this.element));
        sf.base.append(itemEles, wrapBlaEleDom);
        this.clearProperty();
    };
    SfToolbar.prototype.changeOrientation = function () {
        if (!this.options.isVertical) {
            this.element.classList.remove(CLS_VERTICAL);
            this.element.setAttribute('aria-orientation', 'horizontal');
            if (this.options.height === 'auto' || this.options.height === '100%') {
                this.element.style.height = this.options.height;
            }
        }
        else {
            this.element.classList.add(CLS_VERTICAL);
            this.element.setAttribute('aria-orientation', 'vertical');
            sf.base.setStyleAttribute(this.element, { 'height': sf.base.formatUnit(this.options.height), 'width': sf.base.formatUnit(this.options.width) });
        }
        this.destroyMode();
        this.refreshOverflow();
    };
    SfToolbar.prototype.initScroll = function (element, innerItems) {
        if (!this.scrollModule && this.checkOverflow(element, innerItems[0])) {
            if (this.tbarAlign) {
                this.element.querySelector('.' + CLS_ITEMS + ' .' + CLS_TBARCENTER).removeAttribute('style');
            }
            if (this.options.isVertical) {
                // eslint-disable-next-line max-len
                this.scrollModule = new sf.navigations.VScroll({ scrollStep: this.options.scrollStep, enableRtl: this.options.enableRtl }, innerItems[0]);
            }
            else {
                // eslint-disable-next-line max-len
                this.scrollModule = new sf.navigations.HScroll({ scrollStep: this.options.scrollStep, enableRtl: this.options.enableRtl }, innerItems[0]);
            }
            sf.base.removeClass([this.scrollModule.element], CLS_TBARPOS);
            sf.base.setStyleAttribute(this.element, { overflow: 'hidden' });
        }
    };
    SfToolbar.prototype.itemWidthCal = function (items) {
        var _this = this;
        var width = 0;
        var style;
        [].slice.call(sf.base.selectAll('.' + CLS_ITEM, items)).forEach(function (el) {
            if (sf.base.isVisible(el)) {
                style = window.getComputedStyle(el);
                width += _this.options.isVertical ? el.offsetHeight : el.offsetWidth;
                width += parseFloat(_this.options.isVertical ? style.marginTop : style.marginRight);
                width += parseFloat(_this.options.isVertical ? style.marginBottom : style.marginLeft);
            }
        });
        return width;
    };
    SfToolbar.prototype.getScrollCntEle = function (innerItem) {
        var trgClass = (this.options.isVertical) ? '.e-vscroll-content' : '.e-hscroll-content';
        return innerItem.querySelector(trgClass);
    };
    SfToolbar.prototype.checkOverflow = function (element, innerItem) {
        if (sf.base.isNullOrUndefined(element) || sf.base.isNullOrUndefined(innerItem) || !sf.base.isVisible(element)) {
            return false;
        }
        var eleWidth = this.options.isVertical ? element.offsetHeight : element.offsetWidth;
        var itemWidth = this.options.isVertical ? innerItem.offsetHeight : innerItem.offsetWidth;
        if (this.tbarAlign || this.scrollModule || (eleWidth === itemWidth)) {
            itemWidth = this.itemWidthCal(this.scrollModule ? this.getScrollCntEle(innerItem) : innerItem);
        }
        var popNav = element.querySelector('.' + CLS_TBARNAV);
        var scrollNav = element.querySelector('.' + CLS_TBARSCRLNAV);
        var navEleWidth = 0;
        if (popNav) {
            navEleWidth = this.options.isVertical ? popNav.offsetHeight : popNav.offsetWidth;
        }
        else if (scrollNav) {
            navEleWidth = this.options.isVertical ? (scrollNav.offsetHeight * (2)) : (scrollNav.offsetWidth * 2);
        }
        if (itemWidth > eleWidth - navEleWidth) {
            return true;
        }
        else {
            return false;
        }
    };
    SfToolbar.prototype.refreshOverflow = function () {
        this.resize();
    };
    SfToolbar.prototype.toolbarAlign = function (innerItems) {
        if (this.tbarAlign) {
            sf.base.addClass([innerItems], CLS_TBARPOS);
            this.itemPositioning();
        }
    };
    SfToolbar.prototype.renderOverflowMode = function () {
        var ele = this.element;
        var innerItems = ele.querySelector('.' + CLS_ITEMS);
        var priorityCheck = this.popupPriCount > 0;
        if (ele && ele.children.length > 0) {
            this.offsetWid = ele.offsetWidth;
            sf.base.removeClass([this.element], 'e-toolpop');
            if (sf.base.Browser.info.name === 'msie' && this.options.height === 'auto') {
                ele.style.height = '';
            }
            switch (this.options.overflowMode) {
                case 'Scrollable':
                    if (sf.base.isNullOrUndefined(this.scrollModule)) {
                        this.initScroll(ele, [].slice.call(ele.getElementsByClassName(CLS_ITEMS)));
                    }
                    break;
                case 'Popup':
                    sf.base.addClass([this.element], 'e-toolpop');
                    if (this.tbarAlign) {
                        this.removePositioning();
                    }
                    if (this.checkOverflow(ele, innerItems) || priorityCheck) {
                        this.setOverflowAttributes(ele);
                    }
                    this.toolbarAlign(innerItems);
                    break;
                case 'MultiRow':
                    sf.base.addClass([innerItems], CLS_MULTIROW);
                    if (this.checkOverflow(ele, innerItems) && this.tbarAlign) {
                        this.removePositioning();
                        sf.base.addClass([innerItems], CLS_MULTIROWPOS);
                    }
                    if (ele.style.overflow === 'hidden') {
                        ele.style.overflow = '';
                    }
                    if (sf.base.Browser.info.name === 'msie' || ele.style.height !== 'auto') {
                        ele.style.height = 'auto';
                    }
                    break;
                case 'Extended':
                    sf.base.addClass([this.element], CLS_EXTEANDABLE_TOOLBAR);
                    if (this.checkOverflow(ele, innerItems) || priorityCheck) {
                        if (this.tbarAlign) {
                            this.removePositioning();
                        }
                        this.setOverflowAttributes(ele);
                    }
                    this.toolbarAlign(innerItems);
            }
        }
    };
    SfToolbar.prototype.setOverflowAttributes = function (ele) {
        this.createPopupEle(ele, [].slice.call(sf.base.selectAll('.' + CLS_ITEMS + ' .' + CLS_ITEM, ele)));
        this.element.querySelector('.' + CLS_TBARNAV).setAttribute('tabIndex', '0');
        this.element.querySelector('.' + CLS_TBARNAV).setAttribute('role', 'list');
    };
    SfToolbar.prototype.separator = function () {
        var element = this.element;
        var eleItem = [].slice.call(element.querySelectorAll('.' + CLS_SEPARATOR));
        var multiVar = element.querySelector('.' + CLS_MULTIROW_SEPARATOR);
        var extendVar = element.querySelector('.' + CLS_EXTENDABLE_SEPARATOR);
        var eleInlineItem = this.options.overflowMode === 'MultiRow' ? multiVar : extendVar;
        if (eleInlineItem !== null) {
            if (this.options.overflowMode === 'MultiRow') {
                eleInlineItem.classList.remove(CLS_MULTIROW_SEPARATOR);
            }
            else if (this.options.overflowMode === 'Extended') {
                eleInlineItem.classList.remove(CLS_EXTENDABLE_SEPARATOR);
            }
        }
        for (var i = 0; i <= eleItem.length - 1; i++) {
            if (eleItem[i].offsetLeft < 30 && eleItem[i].offsetLeft !== 0) {
                if (this.options.overflowMode === 'MultiRow') {
                    eleItem[i].classList.add(CLS_MULTIROW_SEPARATOR);
                }
                else if (this.options.overflowMode === 'Extended') {
                    eleItem[i].classList.add(CLS_EXTENDABLE_SEPARATOR);
                }
            }
        }
    };
    SfToolbar.prototype.createPopupEle = function (ele, innerEle) {
        var innerNav = ele.querySelector('.' + CLS_TBARNAV);
        var vertical = this.options.isVertical;
        if (!innerNav) {
            this.createPopupIcon(ele);
        }
        innerNav = ele.querySelector('.' + CLS_TBARNAV);
        var innerNavDom = (vertical ? innerNav.offsetHeight : innerNav.offsetWidth);
        var eleWidth = ((vertical ? ele.offsetHeight : ele.offsetWidth) - (innerNavDom));
        this.element.classList.remove('e-rtl');
        sf.base.setStyleAttribute(this.element, { direction: 'initial' });
        this.checkPriority(ele, innerEle, eleWidth, true);
        if (this.options.enableRtl) {
            this.element.classList.add('e-rtl');
        }
        this.element.style.removeProperty('direction');
        this.createPopup();
    };
    SfToolbar.prototype.pushingPoppedEle = function (tbarObj, popupPri, ele, eleHeight, sepHeight) {
        var element = this.element;
        var nodes = sf.base.selectAll('.' + CLS_TBAROVERFLOW, ele);
        var nodeIndex = 0;
        var poppedEle = [].slice.call(sf.base.selectAll('.' + CLS_POPUP, element.querySelector('.' + CLS_ITEMS)));
        var nodePri = 0;
        poppedEle.forEach(function (el, index) {
            nodes = sf.base.selectAll('.' + CLS_TBAROVERFLOW, ele);
            if (el.classList.contains(CLS_TBAROVERFLOW) && nodes.length > 0) {
                if (tbarObj.tbResize && nodes.length > index) {
                    ele.insertBefore(el, nodes[index]);
                    ++nodePri;
                }
                else {
                    ele.insertBefore(el, ele.children[nodes.length]);
                    ++nodePri;
                }
            }
            else if (el.classList.contains(CLS_TBAROVERFLOW)) {
                ele.insertBefore(el, ele.firstChild);
                ++nodePri;
            }
            else if (tbarObj.tbResize && el.classList.contains(CLS_POPOVERFLOW) && ele.children.length > 0 && nodes.length === 0) {
                ele.insertBefore(el, ele.firstChild);
                ++nodePri;
            }
            else if (el.classList.contains(CLS_POPOVERFLOW)) {
                popupPri.push(el);
            }
            else if (tbarObj.tbResize) {
                ele.insertBefore(el, ele.childNodes[nodeIndex + nodePri]);
                ++nodeIndex;
            }
            else {
                ele.appendChild(el);
            }
            if (el.classList.contains(CLS_SEPARATOR)) {
                sf.base.setStyleAttribute(el, { display: '', height: sepHeight + 'px' });
            }
            else {
                sf.base.setStyleAttribute(el, { display: '', height: eleHeight + 'px' });
            }
        });
        popupPri.forEach(function (el) {
            ele.appendChild(el);
        });
        var tbarEle = sf.base.selectAll('.' + CLS_ITEM, element.querySelector('.' + CLS_ITEMS));
        for (var i = tbarEle.length - 1; i >= 0; i--) {
            var tbarElement = tbarEle[i];
            if (tbarElement.classList.contains(CLS_SEPARATOR) && this.options.overflowMode !== 'Extended') {
                sf.base.setStyleAttribute(tbarElement, { display: 'none' });
            }
            else {
                break;
            }
        }
    };
    SfToolbar.prototype.createPopup = function () {
        var element = this.element;
        var sepHeight;
        var sepItem;
        if (this.options.overflowMode === 'Extended') {
            sepItem = element.querySelector('.' + CLS_SEPARATOR + ':not(.' + CLS_POPUP + ')');
            sepHeight = (element.style.height === 'auto' || element.style.height === '') ? null : (sepItem && sepItem.offsetHeight);
        }
        // eslint-disable-next-line max-len
        var eleItem = element.querySelector('.' + CLS_ITEM + ':not(.' + CLS_SEPARATOR + '):not(.' + CLS_POPUP + '):not(.' + CLS_HIDDEN + ')');
        var eleHeight = (element.style.height === 'auto' || element.style.height === '') ? null : (eleItem && eleItem.offsetHeight);
        var ele;
        var popupPri = [];
        if (element.querySelector('#' + element.id + '_popup.' + CLS_POPUPCLASS)) {
            ele = element.querySelector('#' + element.id + '_popup.' + CLS_POPUPCLASS);
        }
        else {
            var extendEle = sf.base.createElement('div', {
                id: element.id + '_popup', className: CLS_POPUPCLASS + ' ' + CLS_EXTENDABLECLASS
            });
            var popupEle = sf.base.createElement('div', { id: element.id + '_popup', className: CLS_POPUPCLASS });
            ele = this.options.overflowMode === 'Extended' ? extendEle : popupEle;
        }
        this.pushingPoppedEle(this, popupPri, ele, eleHeight, sepHeight);
        this.popupInit(element, ele);
    };
    SfToolbar.prototype.getElementOffsetY = function () {
        return (this.options.overflowMode === 'Extended' && window.getComputedStyle(this.element).getPropertyValue('box-sizing') === 'border-box' ?
            this.element.clientHeight : this.element.offsetHeight);
    };
    SfToolbar.prototype.popupInit = function (element, ele) {
        if (!this.popObj) {
            element.appendChild(ele);
            sf.base.setStyleAttribute(this.element, { overflow: '' });
            var eleStyles = window.getComputedStyle(this.element);
            var popup = new sf.popups.Popup(null, {
                relateTo: this.element,
                offsetY: (this.options.isVertical) ? 0 : this.getElementOffsetY(),
                enableRtl: this.options.enableRtl,
                open: this.popupOpen.bind(this),
                close: this.popupClose.bind(this),
                collision: { Y: this.options.enableCollision ? 'flip' : 'none' },
                position: this.options.enableRtl ? { X: 'left', Y: 'top' } : { X: 'right', Y: 'top' }
            });
            popup.appendTo(ele);
            if (this.options.overflowMode === 'Extended') {
                popup.width = parseFloat(eleStyles.width) + ((parseFloat(eleStyles.borderRightWidth)) * 2);
                popup.offsetX = 0;
            }
            sf.base.EventHandler.add(document, 'scroll', this.docEvent.bind(this));
            sf.base.EventHandler.add(document, 'click ', this.docEvent.bind(this));
            popup.element.style.maxHeight = popup.element.offsetHeight + 'px';
            if (this.options.isVertical) {
                popup.element.style.visibility = 'hidden';
            }
            if (this.isExtendedOpen) {
                var popupNav = this.element.querySelector('.' + CLS_TBARNAV);
                popupNav.classList.add(CLS_TBARNAVACT);
                sf.base.classList(popupNav.firstElementChild, [CLS_POPUPICON], [CLS_POPUPDOWN]);
                this.element.querySelector('.' + CLS_EXTENDABLECLASS).classList.add(CLS_POPUPOPEN);
            }
            else {
                popup.hide();
            }
            this.popObj = popup;
            this.element.setAttribute('aria-haspopup', 'true');
        }
        else {
            var popupEle = this.popObj.element;
            if (this.options.overflowMode === 'Extended') {
                var eleStyle = window.getComputedStyle(this.element);
                this.popObj.width = parseFloat(eleStyle.width) + ((parseFloat(eleStyle.borderRightWidth)) * 2);
                this.popObj.offsetX = 0;
                this.popObj.dataBind();
            }
            sf.base.setStyleAttribute(popupEle, { maxHeight: '', display: 'block' });
            sf.base.setStyleAttribute(popupEle, { maxHeight: popupEle.offsetHeight + 'px', display: '' });
        }
    };
    SfToolbar.prototype.tbarPopupHandler = function (isOpen) {
        if (this.options.overflowMode === 'Extended') {
            if (isOpen) {
                sf.base.addClass([this.element], CLS_EXTENDEDPOPOPEN);
            }
            else {
                sf.base.removeClass([this.element], CLS_EXTENDEDPOPOPEN);
            }
        }
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    SfToolbar.prototype.popupOpen = function (e) {
        var popObj = this.popObj;
        if (!this.options.isVertical) {
            popObj.offsetY = this.getElementOffsetY();
            popObj.dataBind();
        }
        var popupEle = this.popObj.element;
        var toolEle = this.popObj.element.parentElement;
        var popupNav = toolEle.querySelector('.' + CLS_TBARNAV);
        sf.base.setStyleAttribute(popObj.element, { height: 'auto', maxHeight: '' });
        popObj.element.style.maxHeight = popObj.element.offsetHeight + 'px';
        if (this.options.overflowMode === 'Extended') {
            popObj.element.style.left = '';
            popObj.element.style.minHeight = '';
        }
        var popupElePos = popupEle.offsetTop + popupEle.offsetHeight + sf.popups.calculatePosition(toolEle).top;
        var popIcon = popupNav.firstElementChild;
        popupNav.classList.add(CLS_TBARNAVACT);
        sf.base.classList(popIcon, [CLS_POPUPICON], [CLS_POPUPDOWN]);
        this.tbarPopupHandler(true);
        var scrollVal = sf.base.isNullOrUndefined(window.scrollY) ? 0 : window.scrollY;
        // eslint-disable-next-line max-len
        if (!this.options.isVertical && ((window.innerHeight + scrollVal) < popupElePos) && (this.element.offsetTop < popupEle.offsetHeight)) {
            var overflowHeight = (popupEle.offsetHeight - ((popupElePos - window.innerHeight - scrollVal) + 5));
            popObj.height = overflowHeight + 'px';
            for (var i = 0; i <= popupEle.childElementCount; i++) {
                var ele = popupEle.children[i];
                if (ele.offsetTop + ele.offsetHeight > overflowHeight) {
                    overflowHeight = ele.offsetTop;
                    break;
                }
            }
            sf.base.setStyleAttribute(popObj.element, { maxHeight: overflowHeight + 'px' });
        }
        else if (this.options.isVertical) {
            var tbEleData = this.element.getBoundingClientRect();
            sf.base.setStyleAttribute(popObj.element, { maxHeight: (tbEleData.top + this.element.offsetHeight) + 'px', bottom: 0, visibility: '' });
        }
        if (popObj) {
            var popupOffset = popupEle.getBoundingClientRect();
            if (popupOffset.right > document.documentElement.clientWidth && popupOffset.width > toolEle.getBoundingClientRect().width) {
                popObj.collision = { Y: 'none' };
                popObj.dataBind();
            }
            popObj.refreshPosition();
        }
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    SfToolbar.prototype.popupClose = function (e) {
        var element = this.element;
        var popupNav = element.querySelector('.' + CLS_TBARNAV);
        var popIcon = popupNav.firstElementChild;
        popupNav.classList.remove(CLS_TBARNAVACT);
        sf.base.classList(popIcon, [CLS_POPUPDOWN], [CLS_POPUPICON]);
        this.tbarPopupHandler(false);
    };
    SfToolbar.prototype.checkPriority = function (ele, inEle, eleWidth, pre) {
        var popPriority = this.popupPriCount > 0;
        var len = inEle.length;
        var eleWid = eleWidth;
        var eleOffset;
        var checkoffset;
        var sepCheck = 0;
        var itemCount = 0;
        var itemPopCount = 0;
        // eslint-disable-next-line @typescript-eslint/ban-types
        var checkClass = function (ele, val) {
            var rVal = false;
            val.forEach(function (cls) {
                if (ele.classList.contains(cls)) {
                    rVal = true;
                }
            });
            return rVal;
        };
        for (var i = len - 1; i >= 0; i--) {
            var mrgn = void 0;
            var compuStyle = window.getComputedStyle(inEle[i]);
            if (this.options.isVertical) {
                mrgn = parseFloat((compuStyle).marginTop);
                mrgn += parseFloat((compuStyle).marginBottom);
            }
            else {
                mrgn = parseFloat((compuStyle).marginRight);
                mrgn += parseFloat((compuStyle).marginLeft);
            }
            var fstEleCheck = inEle[i] === this.tbarEle[0];
            if (fstEleCheck) {
                this.tbarEleMrgn = mrgn;
            }
            eleOffset = this.options.isVertical ? inEle[i].offsetHeight : inEle[i].offsetWidth;
            var eleWid_1 = fstEleCheck ? (eleOffset + mrgn) : eleOffset;
            if (checkClass(inEle[i], [CLS_POPPRI]) && popPriority) {
                inEle[i].classList.add(CLS_POPUP);
                if (this.options.isVertical) {
                    sf.base.setStyleAttribute(inEle[i], { display: 'none', minHeight: eleWid_1 + 'px' });
                }
                else {
                    sf.base.setStyleAttribute(inEle[i], { display: 'none', minWidth: eleWid_1 + 'px' });
                }
                itemPopCount++;
            }
            if (this.options.isVertical) {
                checkoffset = (inEle[i].offsetTop + inEle[i].offsetHeight + mrgn) > eleWidth;
            }
            else {
                checkoffset = (inEle[i].offsetLeft + inEle[i].offsetWidth + mrgn) > eleWidth;
            }
            if (checkoffset) {
                if (inEle[i].classList.contains(CLS_SEPARATOR)) {
                    if (this.options.overflowMode === 'Extended') {
                        if (itemCount === itemPopCount) {
                            var sepEle = inEle[i];
                            if (checkClass(sepEle, [CLS_SEPARATOR, CLS_TBARIGNORE])) {
                                inEle[i].classList.add(CLS_POPUP);
                                itemPopCount++;
                            }
                        }
                        itemCount++;
                    }
                    else if (this.options.overflowMode === 'Popup') {
                        if (sepCheck > 0 && itemCount === itemPopCount) {
                            var sepEle = inEle[i + itemCount + (sepCheck - 1)];
                            if (checkClass(sepEle, [CLS_SEPARATOR, CLS_TBARIGNORE])) {
                                sf.base.setStyleAttribute(sepEle, { display: 'none' });
                            }
                        }
                        sepCheck++;
                        itemCount = 0;
                        itemPopCount = 0;
                    }
                }
                else {
                    itemCount++;
                }
                if (inEle[i].classList.contains(CLS_TBAROVERFLOW) && pre) {
                    eleWidth -= ((this.options.isVertical ? inEle[i].offsetHeight : inEle[i].offsetWidth) + (mrgn));
                }
                else if (!checkClass(inEle[i], [CLS_SEPARATOR, CLS_TBARIGNORE])) {
                    inEle[i].classList.add(CLS_POPUP);
                    if (this.options.isVertical) {
                        sf.base.setStyleAttribute(inEle[i], { display: 'none', minHeight: eleWid_1 + 'px' });
                    }
                    else {
                        sf.base.setStyleAttribute(inEle[i], { display: 'none', minWidth: eleWid_1 + 'px' });
                    }
                    itemPopCount++;
                }
                else {
                    eleWidth -= ((this.options.isVertical ? inEle[i].offsetHeight : inEle[i].offsetWidth) + (mrgn));
                }
            }
        }
        if (pre) {
            var popedEle = sf.base.selectAll('.' + CLS_ITEM + ':not(.' + CLS_POPUP + ')', this.element);
            this.checkPriority(ele, popedEle, eleWid, false);
        }
    };
    SfToolbar.prototype.createPopupIcon = function (element) {
        var id = element.id.concat('_nav');
        var className = 'e-' + element.id.concat('_nav ' + CLS_POPUPNAV);
        className = this.options.overflowMode === 'Extended' ? className + ' ' + CLS_EXTENDPOPUP : className;
        var nav = sf.base.createElement('div', { id: id, className: className });
        if (sf.base.Browser.info.name === 'msie' || sf.base.Browser.info.name === 'edge') {
            nav.classList.add('e-ie-align');
        }
        var navItem = sf.base.createElement('div', { className: CLS_POPUPDOWN + ' e-icons' });
        nav.appendChild(navItem);
        nav.setAttribute('tabindex', '0');
        nav.setAttribute('role', 'list');
        element.appendChild(nav);
    };
    SfToolbar.prototype.tbarPriRef = function (inEle, indx, sepPri, el, des, elWid, wid, ig) {
        var ignoreCount = ig;
        var popEle = this.popObj.element;
        var query = '.' + CLS_ITEM + ':not(.' + CLS_SEPARATOR + '):not(.' + CLS_TBAROVERFLOW + ')';
        var priEleCnt = sf.base.selectAll('.' + CLS_POPUP + ':not(.' + CLS_TBAROVERFLOW + ')', popEle).length;
        // eslint-disable-next-line @typescript-eslint/ban-types
        var checkClass = function (ele, val) {
            return ele.classList.contains(val);
        };
        if (sf.base.selectAll(query, inEle).length === 0) {
            var eleSep = inEle.children[indx - (indx - sepPri) - 1];
            var ignoreCheck = (!sf.base.isNullOrUndefined(eleSep) && checkClass(eleSep, CLS_TBARIGNORE));
            if ((!sf.base.isNullOrUndefined(eleSep) && checkClass(eleSep, CLS_SEPARATOR) && !sf.base.isVisible(eleSep)) || ignoreCheck) {
                var sepDisplay = 'none';
                eleSep.style.display = 'inherit';
                var eleSepWidth = eleSep.offsetWidth + (parseFloat(window.getComputedStyle(eleSep).marginRight) * 2);
                var prevSep = eleSep.previousElementSibling;
                if ((elWid + eleSepWidth) < wid || des) {
                    inEle.insertBefore(el, inEle.children[(indx + ignoreCount) - (indx - sepPri)]);
                    if (!sf.base.isNullOrUndefined(prevSep)) {
                        prevSep.style.display = '';
                    }
                }
                else {
                    if (prevSep.classList.contains(CLS_SEPARATOR)) {
                        prevSep.style.display = sepDisplay;
                    }
                }
                eleSep.style.display = '';
            }
            else {
                inEle.insertBefore(el, inEle.children[(indx + ignoreCount) - (indx - sepPri)]);
            }
        }
        else {
            inEle.insertBefore(el, inEle.children[(indx + ignoreCount) - priEleCnt]);
        }
    };
    SfToolbar.prototype.popupRefresh = function (popupEle, destroy) {
        var _this = this;
        var ele = this.element;
        var isVer = this.options.isVertical;
        var popNav = ele.querySelector('.' + CLS_TBARNAV);
        var innerEle = ele.querySelector('.' + CLS_ITEMS);
        if (sf.base.isNullOrUndefined(popNav) || sf.base.isNullOrUndefined(innerEle)) {
            return;
        }
        innerEle.removeAttribute('style');
        popupEle.style.display = 'block';
        var dimension;
        if (isVer) {
            dimension = ele.offsetHeight - (popNav.offsetHeight + innerEle.offsetHeight);
        }
        else {
            dimension = ele.offsetWidth - (popNav.offsetWidth + innerEle.offsetWidth);
        }
        var popupEleWidth = 0;
        [].slice.call(popupEle.children).forEach(function (el) {
            popupEleWidth += _this.popupEleWidth(el);
            sf.base.setStyleAttribute(el, { 'position': '' });
        });
        if ((dimension + (isVer ? popNav.offsetHeight : popNav.offsetWidth)) > (popupEleWidth) && this.popupPriCount === 0) {
            destroy = true;
        }
        this.popupEleRefresh(dimension, popupEle, destroy);
        popupEle.style.display = '';
        if (popupEle.children.length === 0 && popNav && this.popObj) {
            sf.base.detach(popNav);
            popNav = null;
            this.popObj.destroy();
            sf.base.detach(this.popObj.element);
            this.popObj = null;
            ele.setAttribute('aria-haspopup', 'false');
        }
    };
    SfToolbar.prototype.ignoreEleFetch = function (index, innerEle) {
        var ignoreEle = [].slice.call(innerEle.querySelectorAll('.' + CLS_TBARIGNORE));
        var ignoreInx = [];
        var count = 0;
        if (ignoreEle.length > 0) {
            ignoreEle.forEach(function (ele) {
                ignoreInx.push([].slice.call(innerEle.children).indexOf(ele));
            });
        }
        else {
            return 0;
        }
        ignoreInx.forEach(function (val) {
            if (val <= index) {
                count++;
            }
        });
        return count;
    };
    SfToolbar.prototype.checkPopupRefresh = function (root, popEle) {
        popEle.style.display = 'block';
        var elWid = this.popupEleWidth(popEle.firstElementChild);
        popEle.firstElementChild.style.removeProperty('Position');
        var tbarWidth = root.offsetWidth - root.querySelector('.' + CLS_TBARNAV).offsetWidth;
        var tbarItemsWid = root.querySelector('.' + CLS_ITEMS).offsetWidth;
        popEle.style.removeProperty('display');
        if (tbarWidth > (elWid + tbarItemsWid)) {
            return true;
        }
        return false;
    };
    SfToolbar.prototype.popupEleWidth = function (el) {
        el.style.position = 'absolute';
        var elWidth = this.options.isVertical ? el.offsetHeight : el.offsetWidth;
        var btnText = el.querySelector('.' + CLS_TBARBTNTEXT);
        if (el.classList.contains('e-tbtn-align') || el.classList.contains(CLS_TBARTEXT)) {
            var btn = el.children[0];
            if (!sf.base.isNullOrUndefined(btnText) && el.classList.contains(CLS_TBARTEXT)) {
                btnText.style.display = 'none';
            }
            else if (!sf.base.isNullOrUndefined(btnText) && el.classList.contains(CLS_POPUPTEXT)) {
                btnText.style.display = 'block';
            }
            btn.style.minWidth = '0%';
            elWidth = parseFloat(!this.options.isVertical ? el.style.minWidth : el.style.minHeight);
            btn.style.minWidth = '';
            btn.style.minHeight = '';
            if (!sf.base.isNullOrUndefined(btnText)) {
                btnText.style.display = '';
            }
        }
        return elWidth;
    };
    SfToolbar.prototype.popupEleRefresh = function (width, popupEle, destroy) {
        var popPriority = this.popupPriCount > 0;
        var eleSplice = this.tbarEle;
        var priEleCnt;
        var index;
        var innerEle = this.element.querySelector('.' + CLS_ITEMS);
        var ignoreCount = 0;
        var _loop_1 = function (el) {
            if (el.classList.contains(CLS_POPPRI) && popPriority && !destroy) {
                return "continue";
            }
            var elWidth = this_1.popupEleWidth(el);
            if (el === this_1.tbarEle[0]) {
                elWidth += this_1.tbarEleMrgn;
            }
            el.style.position = '';
            if (elWidth < width || destroy) {
                sf.base.setStyleAttribute(el, { minWidth: '', height: '', minHeight: '' });
                if (!el.classList.contains(CLS_POPOVERFLOW)) {
                    el.classList.remove(CLS_POPUP);
                }
                index = this_1.tbarEle.indexOf(el);
                if (this_1.tbarAlign) {
                    var pos = this_1.options.items[index].align;
                    index = this_1.tbarAlgEle[(pos + 's').toLowerCase()].indexOf(el);
                    eleSplice = this_1.tbarAlgEle[(pos + 's').toLowerCase()];
                    innerEle = this_1.element.querySelector('.' + CLS_ITEMS + ' .' + 'e-toolbar-' + pos.toLowerCase());
                }
                var sepBeforePri_1 = 0;
                if (this_1.options.overflowMode !== 'Extended') {
                    eleSplice.slice(0, index).forEach(function (el) {
                        if (el.classList.contains(CLS_TBAROVERFLOW) || el.classList.contains(CLS_SEPARATOR)) {
                            if (el.classList.contains(CLS_SEPARATOR)) {
                                el.style.display = '';
                                width -= el.offsetWidth;
                            }
                            sepBeforePri_1++;
                        }
                    });
                }
                ignoreCount = this_1.ignoreEleFetch(index, innerEle);
                if (el.classList.contains(CLS_TBAROVERFLOW)) {
                    this_1.tbarPriRef(innerEle, index, sepBeforePri_1, el, destroy, elWidth, width, ignoreCount);
                    width -= el.offsetWidth;
                }
                else if (index === 0) {
                    innerEle.insertBefore(el, innerEle.firstChild);
                    width -= el.offsetWidth;
                }
                else {
                    priEleCnt = sf.base.selectAll('.' + CLS_TBAROVERFLOW, this_1.popObj.element).length;
                    innerEle.insertBefore(el, innerEle.children[(index + ignoreCount) - priEleCnt]);
                    width -= el.offsetWidth;
                }
                el.style.height = '';
            }
            else {
                return "break";
            }
        };
        var this_1 = this;
        for (var _i = 0, _a = [].slice.call(popupEle.children); _i < _a.length; _i++) {
            var el = _a[_i];
            var state_1 = _loop_1(el);
            if (state_1 === "break")
                break;
        }
        var checkOverflow = this.checkOverflow(this.element, this.element.getElementsByClassName(CLS_ITEMS)[0]);
        if (checkOverflow && !destroy) {
            this.renderOverflowMode();
        }
    };
    SfToolbar.prototype.removePositioning = function () {
        var item = this.element.querySelector('.' + CLS_ITEMS);
        if (sf.base.isNullOrUndefined(item) || !item.classList.contains(CLS_TBARPOS)) {
            return;
        }
        sf.base.removeClass([item], CLS_TBARPOS);
        var innerItem = [].slice.call(item.childNodes);
        innerItem[1].removeAttribute('style');
        innerItem[2].removeAttribute('style');
    };
    SfToolbar.prototype.refreshPositioning = function () {
        var item = this.element.querySelector('.' + CLS_ITEMS);
        sf.base.addClass([item], CLS_TBARPOS);
        this.itemPositioning();
    };
    SfToolbar.prototype.itemPositioning = function () {
        var item = this.element.querySelector('.' + CLS_ITEMS);
        var margin;
        if (sf.base.isNullOrUndefined(item) || !item.classList.contains(CLS_TBARPOS)) {
            return;
        }
        var popupNav = this.element.querySelector('.' + CLS_TBARNAV);
        var innerItem;
        if (this.scrollModule) {
            var trgClass = (this.options.isVertical) ? CLS_VSCROLLCNT : CLS_HSCROLLCNT;
            innerItem = [].slice.call(item.querySelector('.' + trgClass).children);
        }
        else {
            innerItem = [].slice.call(item.childNodes);
        }
        if (this.options.isVertical) {
            margin = innerItem[0].offsetHeight + innerItem[2].offsetHeight;
        }
        else {
            margin = innerItem[0].offsetWidth + innerItem[2].offsetWidth;
        }
        var tbarWid = this.options.isVertical ? this.element.offsetHeight : this.element.offsetWidth;
        if (popupNav) {
            tbarWid -= (this.options.isVertical ? popupNav.offsetHeight : popupNav.offsetWidth);
            var popWid = (this.options.isVertical ? popupNav.offsetHeight : popupNav.offsetWidth) + 'px';
            innerItem[2].removeAttribute('style');
            if (this.options.isVertical) {
                if (this.options.enableRtl) {
                    innerItem[2].style.top = popWid;
                }
                else {
                    innerItem[2].style.bottom = popWid;
                }
            }
            else {
                if (this.options.enableRtl) {
                    innerItem[2].style.left = popWid;
                }
                else {
                    innerItem[2].style.right = popWid;
                }
            }
        }
        if (tbarWid <= margin) {
            return;
        }
        // eslint-disable-next-line max-len
        var value = (((tbarWid - margin)) - (!this.options.isVertical ? innerItem[1].offsetWidth : innerItem[1].offsetHeight)) / 2;
        innerItem[1].removeAttribute('style');
        var mrgn = ((!this.options.isVertical ? innerItem[0].offsetWidth : innerItem[0].offsetHeight) + value) + 'px';
        if (this.options.isVertical) {
            if (this.options.enableRtl) {
                innerItem[1].style.marginBottom = mrgn;
            }
            else {
                innerItem[1].style.marginTop = mrgn;
            }
        }
        else {
            if (this.options.enableRtl) {
                innerItem[1].style.marginRight = mrgn;
            }
            else {
                innerItem[1].style.marginLeft = mrgn;
            }
        }
    };
    SfToolbar.prototype.tbarItemAlign = function (item, itemEle, pos) {
        var _this = this;
        if (item.showAlwaysInPopup && item.overflow !== 'Show') {
            return;
        }
        var alignDiv = [];
        alignDiv.push(sf.base.createElement('div', { className: CLS_TBARLEFT }));
        alignDiv.push(sf.base.createElement('div', { className: CLS_TBARCENTER }));
        alignDiv.push(sf.base.createElement('div', { className: CLS_TBARRIGHT }));
        if (pos === 0 && item.align !== 'Left') {
            alignDiv.forEach(function (ele) {
                itemEle.appendChild(ele);
            });
            this.tbarAlign = true;
            sf.base.addClass([itemEle], CLS_TBARPOS);
        }
        else if (item.align !== 'Left') {
            var alignEle = itemEle.childNodes;
            var leftAlign_1 = alignDiv[0];
            [].slice.call(alignEle).forEach(function (el) {
                _this.tbarAlgEle.lefts.push(el);
                leftAlign_1.appendChild(el);
            });
            itemEle.appendChild(leftAlign_1);
            itemEle.appendChild(alignDiv[1]);
            itemEle.appendChild(alignDiv[2]);
            this.tbarAlign = true;
            sf.base.addClass([itemEle], CLS_TBARPOS);
        }
    };
    SfToolbar.prototype.renderItems = function () {
        var ele = this.element;
        var items = this.options.items;
        if (ele && items.length > 0) {
            var itemEleDom = ele.querySelector('.' + CLS_ITEMS);
            if (!itemEleDom) {
                itemEleDom = sf.base.createElement('div', { className: CLS_ITEMS });
            }
            this.itemsAlign(items, itemEleDom, true);
            if (!sf.base.isNullOrUndefined(ele.firstElementChild)) {
                ele.insertBefore(itemEleDom, ele.firstElementChild);
            }
            else {
                ele.appendChild(itemEleDom);
            }
        }
    };
    SfToolbar.prototype.setAttr = function (attr, element) {
        var key = Object.keys(attr);
        var keyVal;
        for (var i = 0; i < key.length; i++) {
            keyVal = key[i];
            if (keyVal === 'class') {
                sf.base.addClass([element], attr[keyVal]);
            }
            else {
                element.setAttribute(keyVal, attr[keyVal]);
            }
        }
    };
    SfToolbar.prototype.itemClick = function (e) {
        this.activeEleSwitch(e.currentTarget);
    };
    SfToolbar.prototype.activeEleSwitch = function (ele) {
        this.activeEleRemove(ele.firstElementChild);
        this.activeEle.focus();
    };
    SfToolbar.prototype.activeEleRemove = function (curEle) {
        if (!sf.base.isNullOrUndefined(this.activeEle)) {
            this.activeEle.setAttribute('tabindex', '-1');
        }
        this.activeEle = curEle;
        if (sf.base.isNullOrUndefined(this.trgtEle) && !curEle.parentElement.classList.contains(CLS_TEMPLATE)) {
            curEle.removeAttribute('tabindex');
        }
        else {
            this.activeEle.setAttribute('tabindex', '0');
        }
    };
    SfToolbar.prototype.resize = function () {
        var ele = this.element;
        this.tbResize = true;
        if (this.tbarAlign) {
            this.itemPositioning();
        }
        if (this.popObj && this.options.overflowMode === 'Popup') {
            this.popObj.hide();
        }
        var checkOverflow = this.checkOverflow(ele, ele.getElementsByClassName(CLS_ITEMS)[0]);
        if (!checkOverflow) {
            this.destroyScroll();
            var multirowele = ele.querySelector('.' + CLS_ITEMS);
            if (!sf.base.isNullOrUndefined(multirowele)) {
                sf.base.removeClass([multirowele], CLS_MULTIROWPOS);
                if (this.tbarAlign) {
                    sf.base.addClass([multirowele], CLS_TBARPOS);
                }
            }
        }
        if (checkOverflow && this.scrollModule && (this.offsetWid === ele.offsetWidth)) {
            return;
        }
        if (this.offsetWid > ele.offsetWidth || checkOverflow) {
            this.renderOverflowMode();
        }
        if (this.popObj) {
            if (this.options.overflowMode === 'Extended') {
                var eleStyles = window.getComputedStyle(this.element);
                this.popObj.width = parseFloat(eleStyles.width) + ((parseFloat(eleStyles.borderRightWidth)) * 2);
            }
            if (this.tbarAlign) {
                this.removePositioning();
            }
            this.popupRefresh(this.popObj.element, false);
            if (this.tbarAlign) {
                this.refreshPositioning();
            }
        }
        this.offsetWid = ele.offsetWidth;
        this.tbResize = false;
        this.separator();
    };
    SfToolbar.prototype.extendedOpen = function () {
        var sib = this.element.querySelector('.' + CLS_EXTENDABLECLASS);
        if (this.options.overflowMode === 'Extended' && sib) {
            this.isExtendedOpen = sib.classList.contains(CLS_POPUPOPEN);
        }
    };
    SfToolbar.prototype.disable = function (value) {
        var rootEle = this.element;
        if (value) {
            rootEle.classList.add(CLS_DISABLE);
        }
        else {
            rootEle.classList.remove(CLS_DISABLE);
        }
        rootEle.setAttribute('tabindex', !value ? '0' : '-1');
        if (this.activeEle) {
            this.activeEle.setAttribute('tabindex', !value ? '0' : '-1');
        }
        if (this.scrollModule) {
            this.scrollModule.disable(value);
        }
        if (this.popObj) {
            if (sf.base.isVisible(this.popObj.element) && this.options.overflowMode !== 'Extended') {
                this.popObj.hide();
            }
            rootEle.querySelector('#' + rootEle.id + '_nav').setAttribute('tabindex', !value ? '0' : '-1');
        }
    };
    SfToolbar.prototype.setCssClass = function (cssClass) {
        this.extendedOpen();
        if (this.options.cssClass) {
            sf.base.removeClass([this.element], this.options.cssClass.split(' '));
        }
        if (cssClass) {
            sf.base.addClass([this.element], cssClass.split(' '));
        }
        this.options.cssClass = cssClass;
    };
    return SfToolbar;
}());
// tslint:disable
var Toolbar = {
    initialize: function (element, options, dotnetRef) {
        if (options.scrollStep === 0) {
            options.scrollStep = null;
        }
        var instance = new SfToolbar(element, options, dotnetRef);
        instance.render();
    },
    hidePopup: function (element) {
        if (!sf.base.isNullOrUndefined(element) && !sf.base.isNullOrUndefined(element.blazor__instance) && !sf.base.isNullOrUndefined(element.blazor__instance.popObj)) {
            element.blazor__instance.popObj.hide({ name: 'FadeOut', duration: 100 });
        }
    },
    setCssClass: function (element, cssClass) {
        if (!sf.base.isNullOrUndefined(element) && !sf.base.isNullOrUndefined(element.blazor__instance)) {
            element.blazor__instance.setCssClass(cssClass);
        }
    },
    setWidth: function (element, width) {
        if (!sf.base.isNullOrUndefined(element) && !sf.base.isNullOrUndefined(element.blazor__instance)) {
            element.blazor__instance.options.width = width;
            element.blazor__instance.extendedOpen();
            var wid = element.offsetWidth;
            sf.base.setStyleAttribute(element, { 'width': sf.base.formatUnit(width) });
            element.blazor__instance.renderOverflowMode();
            if (element.blazor__instance.popObj && wid < element.offsetWidth) {
                element.blazor__instance.popupRefresh(element.blazor__instance.popObj.element, false);
            }
        }
    },
    setHeight: function (element, height) {
        if (!sf.base.isNullOrUndefined(element) && !sf.base.isNullOrUndefined(element.blazor__instance)) {
            element.blazor__instance.options.height = height;
            element.blazor__instance.extendedOpen();
            sf.base.setStyleAttribute(element, { 'height': sf.base.formatUnit(height) });
        }
    },
    setOverflowMode: function (element, overflowMode) {
        if (!sf.base.isNullOrUndefined(element) && !sf.base.isNullOrUndefined(element.blazor__instance)) {
            element.blazor__instance.options.overflowMode = overflowMode;
            element.blazor__instance.extendedOpen();
            element.blazor__instance.destroyMode();
            element.blazor__instance.renderOverflowMode();
            if (element.blazor__instance.options.enableRtl) {
                sf.base.addClass([element], CLS_RTL);
            }
            element.blazor__instance.refreshOverflow();
        }
    },
    setEnableRTL: function (element, enableRtl) {
        if (!sf.base.isNullOrUndefined(element) && !sf.base.isNullOrUndefined(element.blazor__instance)) {
            element.blazor__instance.options.enableRtl = enableRtl;
            element.blazor__instance.extendedOpen();
            if (enableRtl) {
                sf.base.addClass([element], CLS_RTL);
            }
            else {
                sf.base.removeClass([element], CLS_RTL);
            }
            if (!sf.base.isNullOrUndefined(element.blazor__instance.scrollModule)) {
                if (enableRtl) {
                    sf.base.addClass([element.blazor__instance.scrollModule.element], CLS_RTL);
                }
                else {
                    sf.base.removeClass([element.blazor__instance.scrollModule.element], CLS_RTL);
                }
            }
            if (!sf.base.isNullOrUndefined(element.blazor__instance.popObj)) {
                if (enableRtl) {
                    sf.base.addClass([element.blazor__instance.popObj.element], CLS_RTL);
                }
                else {
                    sf.base.removeClass([element.blazor__instance.popObj.element], CLS_RTL);
                }
            }
            if (element.blazor__instance.tbarAlign) {
                element.blazor__instance.itemPositioning();
            }
        }
    },
    setScrollStep: function (element, scrollStep) {
        if (!sf.base.isNullOrUndefined(element) && !sf.base.isNullOrUndefined(element.blazor__instance)) {
            element.blazor__instance.options.scrollStep = scrollStep;
            element.blazor__instance.extendedOpen();
            if (element.blazor__instance.scrollModule) {
                element.blazor__instance.scrollModule.scrollStep = scrollStep;
            }
        }
    },
    setEnableCollision: function (element, enableCollision) {
        if (!sf.base.isNullOrUndefined(element) && !sf.base.isNullOrUndefined(element.blazor__instance)) {
            element.blazor__instance.options.enableCollision = enableCollision;
            element.blazor__instance.extendedOpen();
            if (element.blazor__instance.popObj) {
                element.blazor__instance.popObj.collision = { Y: enableCollision ? 'flip' : 'none' };
            }
        }
    },
    setAllowKeyboard: function (element, allowKeyboard) {
        if (!sf.base.isNullOrUndefined(element) && !sf.base.isNullOrUndefined(element.blazor__instance)) {
            element.blazor__instance.options.allowKeyboard = allowKeyboard;
            element.blazor__instance.extendedOpen();
            element.blazor__instance.unwireKeyboardEvent();
            if (allowKeyboard) {
                element.blazor__instance.wireKeyboardEvent();
            }
        }
    },
    serverItemsRerender: function (element, items, firstRender) {
        if (!sf.base.isNullOrUndefined(element) && !sf.base.isNullOrUndefined(element.blazor__instance)) {
            element.blazor__instance.options.items = items;
            element.blazor__instance.extendedOpen();
            element.blazor__instance.destroyMode();
            element.blazor__instance.resetServerItems(firstRender);
            element.blazor__instance.serverItemsRefresh(firstRender);
        }
    },
    hideItem: function (element, items) {
        if (!sf.base.isNullOrUndefined(element) && !sf.base.isNullOrUndefined(element.blazor__instance)) {
            element.blazor__instance.options.items = items;
            element.blazor__instance.refreshOverflow();
        }
    },
    disable: function (element, value) {
        if (!sf.base.isNullOrUndefined(element) && !sf.base.isNullOrUndefined(element.blazor__instance)) {
            element.blazor__instance.disable(value);
        }
    },
    refreshOverflow: function (element) {
        if (!sf.base.isNullOrUndefined(element) && !sf.base.isNullOrUndefined(element.blazor__instance)) {
            element.blazor__instance.refreshOverflow();
        }
    },
    destroy: function (element) {
        if (!sf.base.isNullOrUndefined(element) && !sf.base.isNullOrUndefined(element.blazor__instance)) {
            element.blazor__instance.destroy();
        }
    },
    refresh: function (element, options) {
        if (options.scrollStep === 0) {
            options.scrollStep = null;
        }
        if (!sf.base.isNullOrUndefined(element) && !sf.base.isNullOrUndefined(element.blazor__instance)) {
            element.blazor__instance.options = options;
            element.blazor__instance.destroyMode();
            element.blazor__instance.resetServerItems(false);
            element.blazor__instance.serverItemsRefresh(false);
        }
    }
};

return Toolbar;

}());


/***/ }),

/***/ "./resources/20.1.61/Scripts/splitbuttonsbase.js":
/*!*******************************************************!*\
  !*** ./resources/20.1.61/Scripts/splitbuttonsbase.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.sf = window.sf || {};
var splitbuttonsbase = (function (exports) {
'use strict';

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
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
/**
 * @param {Object} props - Specifies the properties
 * @param {string[]} model - Specifies the model
 * @returns {Object} Component Model
 */
function getModel(props, model) {
    var obj = sf.base.extend({}, props);
    for (var _i = 0, _a = Object.keys(obj); _i < _a.length; _i++) {
        var prop = _a[_i];
        if ((model).indexOf(prop) < 0) {
            sf.base.deleteObject(obj, prop);
        }
    }
    return obj;
}
/** @hidden
 * @param {HTMLElement} ul - Specifies the UL element
 * @param {number} keyCode - Specifies the keycode
 * @returns {void}
 */
function upDownKeyHandler(ul, keyCode) {
    var defaultIdx = keyCode === 40 ? 0 : ul.childElementCount - 1;
    var liIdx = defaultIdx;
    var li;
    var selectedLi = ul.querySelector('.e-selected');
    if (selectedLi) {
        selectedLi.classList.remove('e-selected');
    }
    for (var i = 0, len = ul.children.length; i < len; i++) {
        if (ul.children[i].classList.contains('e-focused')) {
            li = ul.children[i];
            liIdx = i;
            li.classList.remove('e-focused');
            if (keyCode === 40) {
                liIdx++;
            }
            else {
                liIdx--;
            }
            if (liIdx === (keyCode === 40 ? ul.childElementCount : -1)) {
                liIdx = defaultIdx;
            }
        }
    }
    li = ul.children[liIdx];
    liIdx = isValidLI(ul, li, liIdx, keyCode);
    if (liIdx !== -1) {
        sf.base.addClass([ul.children[liIdx]], 'e-focused');
        ul.children[liIdx].focus();
    }
}
/**
 * Get Valid LI element
 *
 * @param {HTMLElement} ul - Specifies the UL element
 * @param {Element} li - Specifies the LI element
 * @param {number} index - Specifies the index
 * @param {number} keyCode - Specifies the keycode
 * @param {number} count - Specifies the count
 * @returns {number} - Index
 */
function isValidLI(ul, li, index, keyCode, count) {
    if (count === void 0) { count = 0; }
    if (li.classList.contains('e-separator') || li.classList.contains('e-disabled')) {
        if (index === (keyCode === 40 ? ul.childElementCount - 1 : 0)) {
            index = keyCode === 40 ? 0 : ul.childElementCount - 1;
        }
        else {
            if (keyCode === 40) {
                index++;
            }
            else {
                index--;
            }
        }
    }
    li = ul.children[index];
    if (li.classList.contains('e-separator') || li.classList.contains('e-disabled')) {
        count++;
        if (count === ul.childElementCount) {
            return index = -1;
        }
        index = isValidLI(ul, li, index, keyCode, count);
    }
    return index;
}
/** @hidden
 * @param {HTMLElement} popup - Specifies the popup element.
 * @returns {void}
 */
function setBlankIconStyle(popup) {
    var blankIconList = [].slice.call(popup.getElementsByClassName('e-blank-icon'));
    if (!blankIconList.length) {
        return;
    }
    var iconLi = popup.querySelector('.e-item:not(.e-blank-icon):not(.e-separator)');
    if (sf.base.isNullOrUndefined(iconLi)) {
        return;
    }
    if (iconLi.classList.contains('e-url')) {
        iconLi = iconLi.querySelector('.e-menu-url');
    }
    var icon = iconLi.querySelector('.e-menu-icon');
    var cssProp;
    var enableRtl = popup.classList.contains('e-rtl');
    if (enableRtl) {
        cssProp = { padding: 'paddingRight', margin: 'marginLeft' };
    }
    else {
        cssProp = { padding: 'paddingLeft', margin: 'marginRight' };
    }
    /* eslint-disable */
    var size = parseInt(getComputedStyle(icon).fontSize, 10) + parseInt((enableRtl ? getComputedStyle(icon)[cssProp.margin] : getComputedStyle(icon)[cssProp.margin]), 10)
        + parseInt(getComputedStyle(iconLi).paddingLeft, 10) + "px";
    blankIconList.forEach(function (li) {
        if (li.classList.contains('e-url')) {
            li.querySelector('.e-menu-url').style[cssProp.padding] = size;
        }
        else {
            li.style[cssProp.padding] = size;
        }
    });
    /* eslint-enable */
}
/**
 * Defines the items of Split Button/DropDownButton.
 */
var Item = /** @class */ (function (_super) {
    __extends(Item, _super);
    function Item() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        sf.base.Property('')
    ], Item.prototype, "iconCss", void 0);
    __decorate([
        sf.base.Property('')
    ], Item.prototype, "id", void 0);
    __decorate([
        sf.base.Property(false)
    ], Item.prototype, "separator", void 0);
    __decorate([
        sf.base.Property('')
    ], Item.prototype, "text", void 0);
    __decorate([
        sf.base.Property('')
    ], Item.prototype, "url", void 0);
    __decorate([
        sf.base.Property(false)
    ], Item.prototype, "disabled", void 0);
    return Item;
}(sf.base.ChildProperty));

exports.getModel = getModel;
exports.upDownKeyHandler = upDownKeyHandler;
exports.setBlankIconStyle = setBlankIconStyle;
exports.Item = Item;

return exports;

});
window.sf.splitbuttons = window.sf.base.extend({}, window.sf.splitbuttons, splitbuttonsbase({}));


/***/ }),

/***/ "./resources/20.1.61/Scripts/svgbase.js":
/*!**********************************************!*\
  !*** ./resources/20.1.61/Scripts/svgbase.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.sf = window.sf || {};
window.sf.svgbase = (function (exports) {
'use strict';

/* eslint-disable jsdoc/require-returns */
/* eslint-disable valid-jsdoc */
/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * To import utils
 */
var SvgRenderer = /** @class */ (function () {
    /* End-Properties */
    function SvgRenderer(rootID) {
        //Internal Variables
        this.svgLink = 'http://www.w3.org/2000/svg';
        this.rootId = rootID;
    }
    // method to get the attributes value
    // tslint:disable-next-line:no-any
    SvgRenderer.prototype.getOptionValue = function (options, key) {
        return options[key];
    }; /* tslint:enable */
    /**
     * To create a Html5 SVG element
     *
     * @param {SVGAttributes} options - Options to create SVG
     * @returns {Element} It returns a appropriate element
     */
    SvgRenderer.prototype.createSvg = function (options) {
        if (sf.base.isNullOrUndefined(options.id)) {
            options.id = this.rootId + '_svg';
        }
        this.svgObj = document.getElementById(options.id);
        if (sf.base.isNullOrUndefined(document.getElementById(options.id))) {
            this.svgObj = document.createElementNS(this.svgLink, 'svg');
        }
        this.svgObj = this.setElementAttributes(options, this.svgObj);
        this.setSVGSize(options.width, options.height);
        return this.svgObj;
    };
    // method to set the height and width for the SVG element
    SvgRenderer.prototype.setSVGSize = function (width, height) {
        var element = document.getElementById(this.rootId);
        var size = !sf.base.isNullOrUndefined(element) ? element.getBoundingClientRect() : null;
        if (sf.base.isNullOrUndefined(this.width) || this.width <= 0) {
            this.svgObj.setAttribute('width', width ? width.toString() : size.width.toString());
        }
        else {
            this.svgObj.setAttribute('width', this.width.toString());
        }
        if (sf.base.isNullOrUndefined(this.height) || this.height <= 0) {
            this.svgObj.setAttribute('height', height ? height.toString() : '450');
        }
        else {
            this.svgObj.setAttribute('height', this.height.toString());
        }
    };
    /**
     * To draw a path
     *
     * @param {PathAttributes} options - Options to draw a path in SVG
     * @returns {Element} It returns a appropriate path
     */
    SvgRenderer.prototype.drawPath = function (options) {
        var path = document.getElementById(options.id);
        if (path === null) {
            path = document.createElementNS(this.svgLink, 'path');
        }
        path = this.setElementAttributes(options, path);
        return path;
    };
    /**
     * To draw a line
     *
     * @param {LineAttributes} options - Options to draw a line in SVG
     * @returns {Element} It returns a appropriate element
     */
    SvgRenderer.prototype.drawLine = function (options) {
        var line = document.getElementById(options.id);
        if (line === null) {
            line = document.createElementNS(this.svgLink, 'line');
        }
        line = this.setElementAttributes(options, line);
        return line;
    };
    /**
     * To draw a rectangle
     *
     * @param {BaseAttibutes} options - Required options to draw a rectangle in SVG
     * @returns {Element} It returns a appropriate element
     */
    SvgRenderer.prototype.drawRectangle = function (options) {
        var rectangle = document.getElementById(options.id);
        if (rectangle === null) {
            rectangle = document.createElementNS(this.svgLink, 'rect');
        }
        rectangle = this.setElementAttributes(options, rectangle);
        return rectangle;
    };
    /**
     * To draw a circle
     *
     * @param {CircleAttributes} options - Required options to draw a circle in SVG
     * @returns {Element} It returns a appropriate element
     */
    SvgRenderer.prototype.drawCircle = function (options) {
        var circle = document.getElementById(options.id);
        if (circle === null) {
            circle = document.createElementNS(this.svgLink, 'circle');
        }
        circle = this.setElementAttributes(options, circle);
        return circle;
    };
    /**
     * To draw a polyline
     *
     * @param {PolylineAttributes} options - Options required to draw a polyline
     * @returns {Element} It returns a appropriate element
     */
    SvgRenderer.prototype.drawPolyline = function (options) {
        var polyline = document.getElementById(options.id);
        if (polyline === null) {
            polyline = document.createElementNS(this.svgLink, 'polyline');
        }
        polyline = this.setElementAttributes(options, polyline);
        return polyline;
    };
    /**
     * To draw an ellipse
     *
     * @param {EllipseAttributes} options - Options required to draw an ellipse
     * @returns {Element} It returns a appropriate element
     */
    SvgRenderer.prototype.drawEllipse = function (options) {
        var ellipse = document.getElementById(options.id);
        if (ellipse === null) {
            ellipse = document.createElementNS(this.svgLink, 'ellipse');
        }
        ellipse = this.setElementAttributes(options, ellipse);
        return ellipse;
    };
    /**
     * To draw a polygon
     *
     * @param {PolylineAttributes} options - Options needed to draw a polygon in SVG
     * @returns {Element} It returns a appropriate element
     */
    SvgRenderer.prototype.drawPolygon = function (options) {
        var polygon = document.getElementById(options.id);
        if (polygon === null) {
            polygon = document.createElementNS(this.svgLink, 'polygon');
        }
        polygon = this.setElementAttributes(options, polygon);
        return polygon;
    };
    /**
     * To draw an image
     *
     * @param {ImageAttributes} options - Required options to draw an image in SVG
     * @returns {Element} It returns a appropriate element
     */
    SvgRenderer.prototype.drawImage = function (options) {
        var img = document.createElementNS(this.svgLink, 'image');
        img.setAttributeNS(null, 'height', options.height.toString());
        img.setAttributeNS(null, 'width', options.width.toString());
        img.setAttributeNS('http://www.w3.org/1999/xlink', 'href', options.href);
        img.setAttributeNS(null, 'x', options.x.toString());
        img.setAttributeNS(null, 'y', options.y.toString());
        img.setAttributeNS(null, 'id', options.id);
        img.setAttributeNS(null, 'visibility', options.visibility);
        if (!sf.base.isNullOrUndefined(this.getOptionValue(options, 'clip-path'))) {
            img.setAttributeNS(null, 'clip-path', this.getOptionValue(options, 'clip-path'));
        }
        if (!sf.base.isNullOrUndefined(options.preserveAspectRatio)) {
            img.setAttributeNS(null, 'preserveAspectRatio', options.preserveAspectRatio);
        }
        return img;
    };
    /**
     * To draw a text
     *
     * @param {TextAttributes} options - Options needed to draw a text in SVG
     * @param {string} label - Label of the text
     * @returns {Element} It returns a appropriate element
     */
    SvgRenderer.prototype.createText = function (options, label) {
        var text = document.createElementNS(this.svgLink, 'text');
        text = this.setElementAttributes(options, text);
        if (!sf.base.isNullOrUndefined(label)) {
            text.textContent = label;
        }
        return text;
    };
    /**
     * To create a tSpan
     *
     * @param {TextAttributes} options - Options to create tSpan
     * @param {string} label - The text content which is to be rendered in the tSpan
     * @returns {Element} It returns a appropriate element
     */
    SvgRenderer.prototype.createTSpan = function (options, label) {
        var tSpan = document.createElementNS(this.svgLink, 'tspan');
        tSpan = this.setElementAttributes(options, tSpan);
        if (!sf.base.isNullOrUndefined(label)) {
            tSpan.textContent = label;
        }
        return tSpan;
    };
    /**
     * To create a title
     *
     * @param {string} text - The text content which is to be rendered in the title
     * @returns {Element} It returns a appropriate element
     */
    SvgRenderer.prototype.createTitle = function (text) {
        var title = document.createElementNS(this.svgLink, 'title');
        title.textContent = text;
        return title;
    };
    /**
     * To create defs element in SVG
     *
     * @returns {Element} It returns a appropriate element
     */
    SvgRenderer.prototype.createDefs = function () {
        var defs = document.createElementNS(this.svgLink, 'defs');
        return defs;
    };
    /**
     * To create clip path in SVG
     *
     * @param {BaseAttibutes} options - Options needed to create clip path
     * @returns {Element} It returns a appropriate element
     */
    SvgRenderer.prototype.createClipPath = function (options) {
        var clipPath = document.createElementNS(this.svgLink, 'clipPath');
        clipPath = this.setElementAttributes(options, clipPath);
        return clipPath;
    };
    /**
     * To create foreign object in SVG
     *
     * @param {BaseAttibutes} options - Options needed to create foreign object
     * @returns {Element} It returns a appropriate element
     */
    SvgRenderer.prototype.createForeignObject = function (options) {
        var foreignObject = document.createElementNS(this.svgLink, 'foreignObject');
        foreignObject = this.setElementAttributes(options, foreignObject);
        return foreignObject;
    };
    /**
     * To create group element in SVG
     *
     * @param {BaseAttibutes} options - Options needed to create group
     * @returns {Element} It returns a appropriate element
     */
    SvgRenderer.prototype.createGroup = function (options) {
        var group = document.createElementNS(this.svgLink, 'g');
        group = this.setElementAttributes(options, group);
        return group;
    };
    /**
     * To create pattern in SVG
     *
     * @param {PatternAttributes} options - Required options to create pattern in SVG
     * @param {string} element - Specifies the name of the pattern
     * @returns {Element} It returns a appropriate element
     */
    SvgRenderer.prototype.createPattern = function (options, element) {
        var pattern = document.createElementNS(this.svgLink, element);
        pattern = this.setElementAttributes(options, pattern);
        return pattern;
    };
    /**
     * To create radial gradient in SVG
     *
     * @param {string[]} colors - Specifies the colors required to create radial gradient
     * @param {string} name - Specifies the name of the gradient
     * @param {RadialGradient} options - value for radial gradient
     * @returns {string} It returns color name
     */
    SvgRenderer.prototype.createRadialGradient = function (colors, name, options) {
        var colorName;
        if (!sf.base.isNullOrUndefined(colors[0].colorStop)) {
            var newOptions = {
                'id': this.rootId + '_' + name + 'radialGradient',
                'cx': options.cx + '%',
                'cy': options.cy + '%',
                'r': options.r + '%',
                'fx': options.fx + '%',
                'fy': options.fy + '%'
            };
            this.drawGradient('radialGradient', newOptions, colors);
            colorName = 'url(#' + this.rootId + '_' + name + 'radialGradient)';
        }
        else {
            colorName = colors[0].color.toString();
        }
        return colorName;
    };
    /**
     * To create linear gradient in SVG
     *
     * @param {GradientColor[]} colors - Array of string specifies the values for color
     * @param {string} name - Specifies the name of the gradient
     * @param {LinearGradient} options - Specifies the options for gradient
     * @returns {string} It returns color name
     */
    SvgRenderer.prototype.createLinearGradient = function (colors, name, options) {
        var colorName;
        if (!sf.base.isNullOrUndefined(colors[0].colorStop)) {
            var newOptions = {
                'id': this.rootId + '_' + name + 'linearGradient',
                'x1': options.x1 + '%',
                'y1': options.y1 + '%',
                'x2': options.x2 + '%',
                'y2': options.y2 + '%'
            };
            this.drawGradient('linearGradient', newOptions, colors);
            colorName = 'url(#' + this.rootId + '_' + name + 'linearGradient)';
        }
        else {
            colorName = colors[0].color.toString();
        }
        return colorName;
    };
    /**
     * To render the gradient element in SVG
     *
     * @param {string} gradientType - Specifies the type of the gradient
     * @param {RadialGradient | LinearGradient} options - Options required to render a gradient
     * @param {string[]} colors - Array of string specifies the values for color
     * @returns {Element} It returns a appropriate element
     */
    SvgRenderer.prototype.drawGradient = function (gradientType, options, colors) {
        var defs = this.createDefs();
        var gradient = document.createElementNS(this.svgLink, gradientType);
        gradient = this.setElementAttributes(options, gradient);
        for (var i = 0; i < colors.length; i++) {
            var stop_1 = document.createElementNS(this.svgLink, 'stop');
            stop_1.setAttribute('offset', colors[i].colorStop);
            stop_1.setAttribute('stop-color', colors[i].color);
            stop_1.setAttribute('stop-opacity', colors[i].opacity ? (colors[i].opacity) : '1');
            if (!sf.base.isNullOrUndefined(colors[i].style)) {
                stop_1.style.cssText = colors[i].style;
            }
            gradient.appendChild(stop_1);
        }
        defs.appendChild(gradient);
        return defs;
    };
    /**
     * To render a clip path
     *
     * @param {BaseAttibutes} options - Options required to render a clip path
     * @returns {Element} It returns a appropriate element
     */
    SvgRenderer.prototype.drawClipPath = function (options) {
        var defs = this.createDefs();
        var clipPath = this.createClipPath({ 'id': options.id });
        options.id = options.id + '_Rect';
        var rect = this.drawRectangle(options);
        clipPath.appendChild(rect);
        defs.appendChild(clipPath);
        return defs;
    };
    /**
     * To create circular clip path in SVG
     *
     * @param {CircleAttributes} options - Options required to create circular clip path
     * @returns {Element} It returns a appropriate element
     */
    SvgRenderer.prototype.drawCircularClipPath = function (options) {
        var defs = this.createDefs();
        var clipPath = this.createClipPath({ 'id': options.id });
        options.id = options.id + '_Circle';
        var circle = this.drawCircle(options);
        clipPath.appendChild(circle);
        defs.appendChild(clipPath);
        return defs;
    };
    /**
     * To set the attributes to the element
     *
     * @param {SVGCanvasAttributes} options - Attributes to set for the element
     * @param {Element} element - The element to which the attributes need to be set
     * @returns {Element} It returns a appropriate element
     */
    SvgRenderer.prototype.setElementAttributes = function (options, element) {
        var keys = Object.keys(options);
        for (var i = 0; i < keys.length; i++) {
            if (keys[i] === 'style') {
                element.style.cssText = options[keys[i]];
            }
            else {
                element.setAttribute(keys[i], options[keys[i]]);
            }
        }
        return element;
    };
    /**
     * To create a Html5 canvas element
     * Dummy method for using canvas/svg render in the same variable name in chart control
     */
    SvgRenderer.prototype.createCanvas = function () {
        return null;
    };
    return SvgRenderer;
}());

/* eslint-disable no-case-declarations */
/* eslint-disable jsdoc/require-returns */
/* eslint-disable valid-jsdoc */
/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * To import utils.
 */
/**
 * @private
 */
var CanvasRenderer = /** @class */ (function () {
    /* End-Properties */
    function CanvasRenderer(rootID) {
        this.rootId = rootID;
    }
    // method to get the attributes value
    // tslint:disable-next-line:no-any
    CanvasRenderer.prototype.getOptionValue = function (options, key) {
        return options[key];
    };
    /* tslint:enable */
    /**
     * To create a Html5 canvas element
     *
     * @param {BaseAttibutes} options - Options to create canvas
     * @returns {HTMLCanvasElement} Creating a canvas
     */
    CanvasRenderer.prototype.createCanvas = function (options) {
        var canvasObj = document.createElement('canvas');
        canvasObj.setAttribute('id', this.rootId + '_canvas');
        this.ctx = canvasObj.getContext('2d');
        this.canvasObj = canvasObj;
        this.setCanvasSize(options.width, options.height);
        return this.canvasObj;
    };
    /**
     * To set the width and height for the Html5 canvas element
     *
     * @param {number} width - width of the canvas
     * @param {number} height - height of the canvas
     * @returns {void} Setting canvas size
     */
    CanvasRenderer.prototype.setCanvasSize = function (width, height) {
        var element = document.getElementById(this.rootId);
        var size = !sf.base.isNullOrUndefined(element) ? element.getBoundingClientRect() : null;
        if (sf.base.isNullOrUndefined(this.width)) {
            this.canvasObj.setAttribute('width', width ? width.toString() : size.width.toString());
        }
        else {
            this.canvasObj.setAttribute('width', this.width.toString());
        }
        if (sf.base.isNullOrUndefined(this.height)) {
            this.canvasObj.setAttribute('height', height ? height.toString() : '450');
        }
        else {
            this.canvasObj.setAttribute('height', this.height.toString());
        }
    };
    // To set the values to the attributes
    CanvasRenderer.prototype.setAttributes = function (options) {
        this.ctx.lineWidth = this.getOptionValue(options, 'stroke-width');
        var dashArray = this.getOptionValue(options, 'stroke-dasharray');
        if (!sf.base.isNullOrUndefined(dashArray)) {
            var dashArrayString = dashArray.split(',');
            this.ctx.setLineDash([parseInt(dashArrayString[0], 10), parseInt(dashArrayString[1], 10)]);
        }
        this.ctx.strokeStyle = this.getOptionValue(options, 'stroke');
    };
    /**
     * To draw a line
     *
     * @param {LineAttributes} options - required options to draw a line on the canvas
     * @returns {void} To draw a line
     */
    CanvasRenderer.prototype.drawLine = function (options) {
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.lineWidth = this.getOptionValue(options, 'stroke-width');
        this.ctx.strokeStyle = options.stroke;
        this.ctx.moveTo(options.x1, options.y1);
        this.ctx.lineTo(options.x2, options.y2);
        this.ctx.stroke();
        this.ctx.restore();
    };
    /**
     * To draw a rectangle
     *
     * @param {RectAttributes} options - required options to draw a rectangle on the canvas.
     * @param {Int32Array} canvasTranslate TO get a translate value of canvas.
     * @returns {void} To draw rectangle.
     */
    CanvasRenderer.prototype.drawRectangle = function (options, canvasTranslate) {
        var canvasCtx = this.ctx;
        var cornerRadius = options.rx;
        this.ctx.save();
        this.ctx.beginPath();
        if (canvasTranslate) {
            this.ctx.translate(canvasTranslate[0], canvasTranslate[1]);
        }
        this.ctx.globalAlpha = this.getOptionValue(options, 'opacity');
        this.setAttributes(options);
        this.ctx.rect(options.x, options.y, options.width, options.height);
        if (cornerRadius !== null && cornerRadius >= 0) {
            this.drawCornerRadius(options);
        }
        else {
            if (options.fill === 'none') {
                options.fill = 'transparent';
            }
            this.ctx.fillStyle = options.fill;
            this.ctx.fillRect(options.x, options.y, options.width, options.height);
            this.ctx.stroke();
        }
        this.ctx.restore();
        this.ctx = canvasCtx;
        return (this.canvasObj);
    };
    // To draw the corner of a rectangle
    CanvasRenderer.prototype.drawCornerRadius = function (options) {
        var cornerRadius = options.rx;
        var x = options.x;
        var y = options.y;
        var width = options.width;
        var height = options.height;
        if (options.fill === 'none') {
            options.fill = 'transparent';
        }
        this.ctx.fillStyle = options.fill;
        if (width < 2 * cornerRadius) {
            cornerRadius = width / 2;
        }
        if (height < 2 * cornerRadius) {
            cornerRadius = height / 2;
        }
        this.ctx.beginPath();
        this.ctx.moveTo(x + width - cornerRadius, y);
        this.ctx.arcTo(x + width, y, x + width, y + height, cornerRadius);
        this.ctx.arcTo(x + width, y + height, x, y + height, cornerRadius);
        this.ctx.arcTo(x, y + height, x, y, cornerRadius);
        this.ctx.arcTo(x, y, x + width, y, cornerRadius);
        this.ctx.closePath();
        this.ctx.fill();
        this.ctx.stroke();
    };
    /**
     * To draw a path on the canvas
     *
     * @param {PathAttributes} options - options needed to draw path.
     * @param {Int32Array} canvasTranslate - Array of numbers to translate the canvas.
     * @returns {Element} To draw a path.
     */
    CanvasRenderer.prototype.drawPath = function (options, canvasTranslate) {
        var path = options.d;
        var dataSplit = path.split(' ');
        var borderWidth = this.getOptionValue(options, 'stroke-width');
        var canvasCtx = this.ctx;
        var flag = true;
        this.ctx.save();
        this.ctx.beginPath();
        if (canvasTranslate) {
            this.ctx.translate(canvasTranslate[0], canvasTranslate[1]);
        }
        this.ctx.globalAlpha = options.opacity ? options.opacity : this.getOptionValue(options, 'fill-opacity');
        this.setAttributes(options);
        for (var i = 0; i < dataSplit.length; i = i + 3) {
            var x1 = parseFloat(dataSplit[i + 1]);
            var y1 = parseFloat(dataSplit[i + 2]);
            switch (dataSplit[i]) {
                case 'M':
                    if (!options.innerR && !options.cx) {
                        this.ctx.moveTo(x1, y1);
                    }
                    break;
                case 'L':
                    if (!options.innerR) {
                        this.ctx.lineTo(x1, y1);
                    }
                    break;
                case 'Q':
                    var q1 = parseFloat(dataSplit[i + 3]);
                    var q2 = parseFloat(dataSplit[i + 4]);
                    this.ctx.quadraticCurveTo(x1, y1, q1, q2);
                    i = i + 2;
                    break;
                case 'C':
                    var c1 = parseFloat(dataSplit[i + 3]);
                    var c2 = parseFloat(dataSplit[i + 4]);
                    var c3 = parseFloat(dataSplit[i + 5]);
                    var c4 = parseFloat(dataSplit[i + 6]);
                    this.ctx.bezierCurveTo(x1, y1, c1, c2, c3, c4);
                    i = i + 4;
                    break;
                case 'A':
                    if (!options.innerR) {
                        if (options.cx) {
                            this.ctx.arc(options.cx, options.cy, options.radius, 0, 2 * Math.PI, options.counterClockWise);
                        }
                        else {
                            this.ctx.moveTo(options.x, options.y);
                            this.ctx.arc(options.x, options.y, options.radius, options.start, options.end, options.counterClockWise);
                            this.ctx.lineTo(options.x, options.y);
                        }
                    }
                    else if (flag) {
                        this.ctx.arc(options.x, options.y, options.radius, options.start, options.end, options.counterClockWise);
                        this.ctx.arc(options.x, options.y, options.innerR, options.end, options.start, !options.counterClockWise);
                        flag = false;
                    }
                    i = i + 5;
                    break;
                case 'z':
                case 'Z':
                    this.ctx.closePath();
                    //since for loop is incremented by 3, to get next value after 'z' i is decremented for 2.
                    i = i - 2;
                    break;
            }
        }
        if (options.fill !== 'none' && options.fill !== undefined) {
            this.ctx.fillStyle = options.fill;
            this.ctx.fill();
        }
        if (borderWidth > 0) {
            this.ctx.stroke();
        }
        this.ctx.restore();
        this.ctx = canvasCtx;
        return this.canvasObj;
    };
    /**
     * To draw a text
     *
     * @param {TextAttributes} options - options required to draw text
     * @param {string} label - Specifies the text which has to be drawn on the canvas
     * @param {number} transX - Specifies the text of translate X
     * @param {number} transY - Specifies the text of translate Y
     * @param {number} dy - Specifies the text of translate dy
     * @param {boolean} isTSpan - Specifies the boolean value of span value
     * @returns {void}
     */
    CanvasRenderer.prototype.createText = function (options, label, transX, transY, dy, isTSpan) {
        var fontWeight = this.getOptionValue(options, 'font-weight');
        if (!sf.base.isNullOrUndefined(fontWeight) && fontWeight.toLowerCase() === 'regular') {
            fontWeight = 'normal';
        }
        var fontSize = this.getOptionValue(options, 'font-size');
        var fontFamily = this.getOptionValue(options, 'font-family');
        var fontStyle = this.getOptionValue(options, 'font-style').toLowerCase();
        var font = (fontStyle + ' ' + fontWeight + ' ' + fontSize + ' ' + fontFamily);
        var anchor = this.getOptionValue(options, 'text-anchor');
        var opacity = options.opacity !== undefined ? options.opacity : 1;
        if (anchor === 'middle') {
            anchor = 'center';
        }
        this.ctx.save();
        this.ctx.fillStyle = options.fill;
        this.ctx.font = font;
        this.ctx.textAlign = anchor;
        this.ctx.globalAlpha = opacity;
        if (options.baseline) {
            this.ctx.textBaseline = options.baseline;
        }
        if (!isTSpan) {
            var txtlngth = 0;
            this.ctx.translate(options.x + (txtlngth / 2) + (transX ? transX : 0), options.y + (transY ? transY : 0));
            this.ctx.rotate(options.labelRotation * Math.PI / 180);
        }
        this.ctx.fillText(label, isTSpan ? options.x : 0, isTSpan ? dy : 0);
        this.ctx.restore();
        return this.canvasObj;
    };
    /**
     * To draw circle on the canvas
     *
     * @param {CircleAttributes} options - required options to draw the circle
     * @param {Int32Array} canvasTranslate Translate value of canvas
     * @returns {void}
     */
    CanvasRenderer.prototype.drawCircle = function (options, canvasTranslate) {
        var canvasCtx = this.ctx;
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.arc(options.cx, options.cy, options.r, 0, 2 * Math.PI);
        this.ctx.fillStyle = options.fill;
        this.ctx.globalAlpha = options.opacity;
        this.ctx.fill();
        if (canvasTranslate) {
            this.ctx.translate(canvasTranslate[0], canvasTranslate[1]);
        }
        this.setAttributes(options);
        this.ctx.stroke();
        this.ctx.restore();
        this.ctx = canvasCtx;
        return this.canvasObj;
    };
    /**
     * To draw polyline
     *
     * @param {PolylineAttributes} options - options needed to draw polyline
     * @returns {void}
     */
    CanvasRenderer.prototype.drawPolyline = function (options) {
        this.ctx.save();
        this.ctx.beginPath();
        var points = options.points.split(' ');
        for (var i = 0; i < points.length - 1; i++) {
            var point = points[i].split(',');
            var x = parseFloat(point[0]);
            var y = parseFloat(point[1]);
            if (i === 0) {
                this.ctx.moveTo(x, y);
            }
            else {
                this.ctx.lineTo(x, y);
            }
        }
        this.ctx.lineWidth = this.getOptionValue(options, 'stroke-width');
        this.ctx.strokeStyle = options.stroke;
        this.ctx.stroke();
        this.ctx.restore();
    };
    /**
     * To draw an ellipse on the canvas
     *
     * @param {EllipseAttributes} options - options needed to draw ellipse
     * @param {Int32Array} canvasTranslate Translate value of canvas
     * @returns {void}
     */
    CanvasRenderer.prototype.drawEllipse = function (options, canvasTranslate) {
        var canvasCtx = this.ctx;
        var circumference = Math.max(options.rx, options.ry);
        var scaleX = options.rx / circumference;
        var scaleY = options.ry / circumference;
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.translate(options.cx, options.cy);
        if (canvasTranslate) {
            this.ctx.translate(canvasTranslate[0], canvasTranslate[1]);
        }
        this.ctx.save();
        this.ctx.scale(scaleX, scaleY);
        this.ctx.arc(0, 0, circumference, 0, 2 * Math.PI, false);
        this.ctx.fillStyle = options.fill;
        this.ctx.fill();
        this.ctx.restore();
        this.ctx.lineWidth = this.getOptionValue(options, 'stroke-width');
        this.ctx.strokeStyle = options.stroke;
        this.ctx.stroke();
        this.ctx.restore();
        this.ctx = canvasCtx;
    };
    /**
     * To draw an image
     *
     * @param {ImageAttributes} options - options required to draw an image on the canvas
     * @returns {void}
     */
    CanvasRenderer.prototype.drawImage = function (options) {
        this.ctx.save();
        var imageObj = new Image();
        if (!sf.base.isNullOrUndefined(options.href)) {
            imageObj.src = options.href;
            this.ctx.drawImage(imageObj, options.x, options.y, options.width, options.height);
        }
        this.ctx.restore();
    };
    /**
     * To create a linear gradient
     *
     * @param {string[]} colors - Specifies the colors required to create linear gradient
     * @returns {string} It returns color
     */
    CanvasRenderer.prototype.createLinearGradient = function (colors) {
        var myGradient;
        if (!sf.base.isNullOrUndefined(colors[0].colorStop)) {
            myGradient = this.ctx.createLinearGradient(0, 0, 0, this.canvasObj.height);
        }
        var color = this.setGradientValues(colors, myGradient);
        return color;
    };
    /**
     * To create a radial gradient
     *
     * @param {string[]} colors - Specifies the colors required to create linear gradient
     * @returns {string} It returns gradient color
     */
    CanvasRenderer.prototype.createRadialGradient = function (colors) {
        var myGradient;
        if (!sf.base.isNullOrUndefined(colors[0].colorStop)) {
            myGradient = this.ctx.createRadialGradient(0, 0, 0, 0, 0, this.canvasObj.height);
        }
        var colorName = this.setGradientValues(colors, myGradient);
        return colorName;
    };
    // To set the gradient values
    CanvasRenderer.prototype.setGradientValues = function (colors, myGradient) {
        var colorName;
        if (!sf.base.isNullOrUndefined(colors[0].colorStop)) {
            for (var i = 0; i <= colors.length - 1; i++) {
                var color = colors[i].color;
                var newColorStop = (colors[i].colorStop).slice(0, -1);
                var stopColor = parseInt(newColorStop, 10) / 100;
                myGradient.addColorStop(stopColor, color);
            }
            colorName = myGradient.toString();
        }
        else {
            colorName = colors[0].color.toString();
        }
        return colorName;
    };
    /**
     * To set the attributes to the element
     *
     * @param {SVGCanvasAttributes} options - Attributes to set for the element
     * @param {HTMLElement} element - The element to which the attributes need to be set
     * @returns {HTMLElement} It returns null value
     */
    CanvasRenderer.prototype.setElementAttributes = function (options, element) {
        var keys = Object.keys(options);
        var values = Object.keys(options).map(function (key) { return options[key]; });
        for (var i = 0; i < keys.length; i++) {
            element.setAttribute(keys[i], values[i]);
        }
        return null;
    };
    /**
     * To update the values of the canvas element attributes
     *
     * @param {SVGCanvasAttributes} options - Specifies the colors required to create gradient
     * @returns {void}
     */
    CanvasRenderer.prototype.updateCanvasAttributes = function (options) {
        this.setElementAttributes(options, this.canvasObj);
        var ctx = this.ctx;
        if (!sf.base.isNullOrUndefined(this.dataUrl)) {
            var img_1 = new Image;
            img_1.onload = function () {
                ctx.drawImage(img_1, 0, 0);
            };
            img_1.src = this.dataUrl;
        }
    };
    /**
     * This method clears the given rectangle region
     *
     * @param {Rect} rect The rect parameter as passed
     */
    CanvasRenderer.prototype.clearRect = function (rect) {
        this.ctx.restore();
        this.ctx.clearRect(rect.x, rect.y, rect.width, rect.height);
    };
    /**
     * For canvas rendering in chart
     * Dummy method for using canvas/svg render in the same variable name in chart control
     */
    CanvasRenderer.prototype.createGroup = function () {
        return null;
    };
    /**
     * To render a clip path
     *
     * Dummy method for using canvas/svg render in the same variable name in chart control
     */
    CanvasRenderer.prototype.drawClipPath = function () {
        return null;
    };
    /**
     * To render a Circular clip path
     *
     * Dummy method for using canvas/svg render in the same variable name in chart control
     */
    CanvasRenderer.prototype.drawCircularClipPath = function () {
        return null;
    };
    /**
     * Clip method to perform clip in canvas mode
     *
     * @param {BaseAttibutes} options The canvas clip of options
     */
    CanvasRenderer.prototype.canvasClip = function (options) {
        this.ctx.save();
        this.ctx.fillStyle = 'transparent';
        this.ctx.rect(options.x, options.y, options.width, options.height);
        this.ctx.fill();
        this.ctx.clip();
    };
    /**
     * Tp restore the canvas
     */
    CanvasRenderer.prototype.canvasRestore = function () {
        this.ctx.restore();
    };
    /**
     * To draw a polygon
     * Dummy method for using canvas/svg render in the same variable name in chart control
     */
    CanvasRenderer.prototype.drawPolygon = function () {
        return null;
    };
    /**
     * To create defs element in SVG
     * Dummy method for using canvas/svg render in the same variable name in chart control
     *
     * @returns {Element} It returns null
     */
    CanvasRenderer.prototype.createDefs = function () {
        return null;
    };
    /**
     * To create clip path in SVG
     * Dummy method for using canvas/svg render in the same variable name in chart control
     */
    CanvasRenderer.prototype.createClipPath = function () {
        return null;
    };
    /**
     * To create a Html5 SVG element
     * Dummy method for using canvas/svg render in the same variable name in chart control
     *
     * @returns {Element} It returns null
     */
    CanvasRenderer.prototype.createSvg = function () {
        return null;
    };
    return CanvasRenderer;
}());

/**
 * Base modules
 */

/** @private */
function getTooltipThemeColor(theme) {
    var style;
    switch (theme) {
        case 'Highcontrast':
        case 'HighContrast':
            style = {
                tooltipFill: '#ffffff',
                tooltipBoldLabel: '#000000',
                tooltipLightLabel: '#000000',
                tooltipHeaderLine: '#969696'
            };
            break;
        case 'MaterialDark':
        case 'FabricDark':
        case 'BootstrapDark':
            style = {
                tooltipFill: '#F4F4F4',
                tooltipBoldLabel: '#282727',
                tooltipLightLabel: '#333232',
                tooltipHeaderLine: '#9A9A9A'
            };
            break;
        case 'Bootstrap4':
            style = {
                tooltipFill: '#020202',
                tooltipBoldLabel: 'rgba(255, 255, 255)',
                tooltipLightLabel: 'rgba(255, 255, 255, 0.9)',
                tooltipHeaderLine: 'rgba(255, 255, 255, 0.2)'
            };
            break;
        case 'Tailwind':
            style = {
                tooltipFill: '#111827',
                tooltipBoldLabel: '#D1D5DB',
                tooltipLightLabel: '#F9FAFB',
                tooltipHeaderLine: '#6B7280',
            };
            break;
        case 'TailwindDark':
            style = {
                tooltipFill: '#F9FAFB',
                tooltipBoldLabel: '#6B7280',
                tooltipLightLabel: '#1F2937',
                tooltipHeaderLine: '#9CA3AF',
            };
            break;
        case 'Bootstrap5':
            style = {
                tooltipFill: '#212529',
                tooltipBoldLabel: '#F9FAFB',
                tooltipLightLabel: '#F9FAFB',
                tooltipHeaderLine: '#9CA3AF',
            };
            break;
        case 'Bootstrap5Dark':
            style = {
                tooltipFill: '#E9ECEF',
                tooltipBoldLabel: '#212529',
                tooltipLightLabel: '#212529',
                tooltipHeaderLine: '#ADB5BD',
            };
            break;
        case 'Fluent':
            style = {
                tooltipFill: '#FFFFFF',
                tooltipBoldLabel: '#323130',
                tooltipLightLabel: '#323130',
                tooltipHeaderLine: '#D2D0CE',
            };
            break;
        case 'FluentDark':
            style = {
                tooltipFill: '#252423',
                tooltipBoldLabel: '#F3F2F1',
                tooltipLightLabel: '#F3F2F1',
                tooltipHeaderLine: '#3B3A39',
            };
            break;
        default:
            style = {
                tooltipFill: '#000816',
                tooltipBoldLabel: '#ffffff',
                tooltipLightLabel: '#dbdbdb',
                tooltipHeaderLine: '#ffffff'
            };
            break;
    }
    return style;
}

var __extends$1 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Function to measure the height and width of the text.
 *
 * @private
 * @param {string} text To get a text
 * @param {FontModel} font To get a font of the text
 * @returns {Size} measureText
 */
function measureText(text, font) {
    var breakText = text || ''; // For avoid NuLL value
    var htmlObject = document.getElementById('chartmeasuretext');
    if (htmlObject === null) {
        htmlObject = sf.base.createElement('text', { id: 'chartmeasuretext' });
        document.body.appendChild(htmlObject);
    }
    if (typeof (text) === 'string' && (text.indexOf('<') > -1 || text.indexOf('>') > -1)) {
        var textArray = text.split(' ');
        for (var i = 0; i < textArray.length; i++) {
            if (textArray[i].indexOf('<br/>') === -1) {
                textArray[i] = textArray[i].replace(/[<>]/g, '&');
            }
        }
        text = textArray.join(' ');
    }
    htmlObject.innerHTML = (breakText.indexOf('<br>') > -1 || breakText.indexOf('<br/>') > -1) ? breakText : text;
    htmlObject.style.position = 'fixed';
    htmlObject.style.fontSize = font.size;
    htmlObject.style.fontWeight = font.fontWeight;
    htmlObject.style.fontStyle = font.fontStyle;
    htmlObject.style.fontFamily = font.fontFamily;
    htmlObject.style.visibility = 'hidden';
    htmlObject.style.top = '-100';
    htmlObject.style.left = '0';
    htmlObject.style.whiteSpace = 'nowrap';
    // For bootstrap line height issue
    htmlObject.style.lineHeight = 'normal';
    return new Size(htmlObject.clientWidth, htmlObject.clientHeight);
}
/** @private */
function withInAreaBounds(x, y, areaBounds, width, height) {
    if (width === void 0) { width = 0; }
    if (height === void 0) { height = 0; }
    return (x >= areaBounds.x - width && x <= areaBounds.x + areaBounds.width + width && y >= areaBounds.y - height
        && y <= areaBounds.y + areaBounds.height + height);
}
/** @private */
function findDirection(rX, rY, rect, arrowLocation, arrowPadding, top, bottom, left, tipX, tipY, controlName) {
    if (controlName === void 0) { controlName = ''; }
    var direction = '';
    var startX = rect.x;
    var startY = rect.y;
    var width = rect.x + rect.width;
    var height = rect.y + rect.height;
    if (top) {
        direction = direction.concat('M' + ' ' + (startX) + ' ' + (startY + rY) + ' Q ' + startX + ' '
            + startY + ' ' + (startX + rX) + ' ' + startY + ' ' +
            ' L' + ' ' + (width - rX) + ' ' + (startY) + ' Q ' + width + ' '
            + startY + ' ' + (width) + ' ' + (startY + rY));
        direction = direction.concat(' L' + ' ' + (width) + ' ' + (height - rY) + ' Q ' + width + ' '
            + (height) + ' ' + (width - rX) + ' ' + (height));
        if (arrowPadding !== 0) {
            if (controlName === 'RangeNavigator') {
                if ((arrowLocation.x - arrowPadding) > width / 2) {
                    direction = direction.concat(' L' + ' ' + (arrowLocation.x + arrowPadding) + ' ' + (height));
                    direction = direction.concat(' L' + ' ' + (tipX + arrowPadding) + ' ' + (height + arrowPadding)
                        + ' L' + ' ' + (arrowLocation.x) + ' ' + height);
                }
                else {
                    direction = direction.concat(' L' + ' ' + (arrowLocation.x) + ' ' + (height));
                    direction = direction.concat(' L' + ' ' + (tipX - arrowPadding) + ' ' + (height + arrowPadding)
                        + ' L' + ' ' + (arrowLocation.x - arrowPadding) + ' ' + height);
                }
            }
            else {
                direction = direction.concat(' L' + ' ' + (arrowLocation.x + arrowPadding) + ' ' + (height));
                direction = direction.concat(' L' + ' ' + (tipX) + ' ' + (height + arrowPadding)
                    + ' L' + ' ' + (arrowLocation.x - arrowPadding) + ' ' + height);
            }
        }
        if ((arrowLocation.x - arrowPadding) > startX) {
            direction = direction.concat(' L' + ' ' + (startX + rX) + ' ' + height + ' Q ' + startX + ' '
                + height + ' ' + (startX) + ' ' + (height - rY) + ' z');
        }
        else {
            if (arrowPadding === 0) {
                direction = direction.concat(' L' + ' ' + (startX + rX) + ' ' + height + ' Q ' + startX + ' '
                    + height + ' ' + (startX) + ' ' + (height - rY) + ' z');
            }
            else {
                direction = direction.concat(' L' + ' ' + (startX) + ' ' + (height + rY) + ' z');
            }
        }
    }
    else if (bottom) {
        direction = direction.concat('M' + ' ' + (startX) + ' ' + (startY + rY) + ' Q ' + startX + ' '
            + (startY) + ' ' + (startX + rX) + ' ' + (startY) + ' L' + ' ' + (arrowLocation.x - arrowPadding) + ' ' + (startY));
        direction = direction.concat(' L' + ' ' + (tipX) + ' ' + (arrowLocation.y));
        direction = direction.concat(' L' + ' ' + (arrowLocation.x + arrowPadding) + ' ' + (startY));
        direction = direction.concat(' L' + ' ' + (width - rX) + ' ' + (startY)
            + ' Q ' + (width) + ' ' + (startY) + ' ' + (width) + ' ' + (startY + rY));
        direction = direction.concat(' L' + ' ' + (width) + ' ' + (height - rY) + ' Q ' + (width) + ' '
            + (height) + ' ' + (width - rX) + ' ' + (height) +
            ' L' + ' ' + (startX + rX) + ' ' + (height) + ' Q ' + (startX) + ' '
            + (height) + ' ' + (startX) + ' ' + (height - rY) + ' z');
    }
    else if (left) {
        direction = direction.concat('M' + ' ' + (startX) + ' ' + (startY + rY) + ' Q ' + startX + ' '
            + (startY) + ' ' + (startX + rX) + ' ' + (startY));
        direction = direction.concat(' L' + ' ' + (width - rX) + ' ' + (startY) + ' Q ' + (width) + ' '
            + (startY) + ' ' + (width) + ' ' + (startY + rY) + ' L' + ' ' + (width) + ' ' + (arrowLocation.y - arrowPadding));
        direction = (controlName === 'RangeNavigator') ? direction.concat(' L' + ' ' + (width + arrowPadding) + ' ' + (tipY - arrowPadding)) :
            direction.concat(' L' + ' ' + (width + arrowPadding) + ' ' + (tipY));
        direction = (controlName === 'RangeNavigator') ? direction.concat(' L' + ' ' + (width) + ' ' + (arrowLocation.y)) :
            direction.concat(' L' + ' ' + (width) + ' ' + (arrowLocation.y + arrowPadding));
        direction = direction.concat(' L' + ' ' + (width) + ' ' + (height - rY) + ' Q ' + width + ' ' + (height) + ' ' + (width - rX) + ' ' + (height));
        direction = direction.concat(' L' + ' ' + (startX + rX) + ' ' + (height) + ' Q ' + startX + ' '
            + (height) + ' ' + (startX) + ' ' + (height - rY) + ' z');
    }
    else {
        direction = direction.concat('M' + ' ' + (startX + rX) + ' ' + (startY) + ' Q ' + (startX) + ' '
            + (startY) + ' ' + (startX) + ' ' + (startY + rY) + ' L' + ' ' + (startX) + ' ' + (arrowLocation.y - arrowPadding));
        direction = (controlName === 'RangeNavigator') ? direction.concat(' L' + ' ' + (startX - arrowPadding) + ' ' + (tipY - arrowPadding)) :
            direction.concat(' L' + ' ' + (startX - arrowPadding) + ' ' + (tipY));
        direction = (controlName === 'RangeNavigator') ? direction.concat(' L' + ' ' + (startX) + ' ' + (arrowLocation.y)) :
            direction.concat(' L' + ' ' + (startX) + ' ' + (arrowLocation.y + arrowPadding));
        direction = direction.concat(' L' + ' ' + (startX) + ' ' + (height - rY) + ' Q ' + startX + ' '
            + (height) + ' ' + (startX + rX) + ' ' + (height));
        direction = direction.concat(' L' + ' ' + (width - rX) + ' ' + (height) + ' Q ' + width + ' '
            + (height) + ' ' + (width) + ' ' + (height - rY) +
            ' L' + ' ' + (width) + ' ' + (startY + rY) + ' Q ' + width + ' '
            + (startY) + ' ' + (width - rX) + ' ' + (startY) + ' z');
    }
    return direction;
}
/** @private */
var Size = /** @class */ (function () {
    function Size(width, height) {
        this.width = width;
        this.height = height;
    }
    return Size;
}());
/** @private */
var Rect = /** @class */ (function () {
    function Rect(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    return Rect;
}());
var Side = /** @class */ (function () {
    function Side(bottom, right) {
        this.isRight = right;
        this.isBottom = bottom;
    }
    return Side;
}());
/** @private */
var CustomizeOption = /** @class */ (function () {
    function CustomizeOption(id) {
        this.id = id;
    }
    return CustomizeOption;
}());
/** @private */
var TextOption = /** @class */ (function (_super) {
    __extends$1(TextOption, _super);
    function TextOption(id, x, y, anchor, text, transform, baseLine, labelRotation) {
        if (transform === void 0) { transform = ''; }
        var _this = _super.call(this, id) || this;
        _this.transform = '';
        _this.baseLine = 'auto';
        _this.labelRotation = 0;
        _this.x = x;
        _this.y = y;
        _this.anchor = anchor;
        _this.text = text;
        _this.transform = transform;
        _this.baseLine = baseLine;
        _this.labelRotation = labelRotation;
        return _this;
    }
    return TextOption;
}(CustomizeOption));
/** @private */
function getElement(id) {
    return document.getElementById(id);
}
/** @private */
function removeElement(id) {
    var element = getElement(id);
    if (element) {
        sf.base.remove(element);
    }
}
/** @private */
function drawSymbol(location, shape, size, url, options, label) {
    var renderer = new SvgRenderer('');
    var temp = calculateShapes(location, size, shape, options, url);
    var htmlObject = renderer['draw' + temp.functionName](temp.renderOption);
    htmlObject.setAttribute('aria-label', label);
    return htmlObject;
}
/** @private */
function calculateShapes(location, size, shape, options, url) {
    var path;
    var functionName = 'Path';
    var width = size.width;
    var height = size.height;
    var locX = location.x;
    var locY = location.y;
    var x = location.x + (-width / 2);
    var y = location.y + (-height / 2);
    switch (shape) {
        case 'Circle':
        case 'Bubble':
            functionName = 'Ellipse';
            sf.base.merge(options, { 'rx': width / 2, 'ry': height / 2, 'cx': locX, 'cy': locY });
            break;
        case 'Cross':
            path = 'M' + ' ' + x + ' ' + locY + ' ' + 'L' + ' ' + (locX + (width / 2)) + ' ' + locY + ' ' +
                'M' + ' ' + locX + ' ' + (locY + (height / 2)) + ' ' + 'L' + ' ' + locX + ' ' +
                (locY + (-height / 2));
            sf.base.merge(options, { 'd': path });
            break;
        case 'HorizontalLine':
            path = 'M' + ' ' + x + ' ' + locY + ' ' + 'L' + ' ' + (locX + (width / 2)) + ' ' + locY;
            sf.base.merge(options, { 'd': path });
            break;
        case 'VerticalLine':
            path = 'M' + ' ' + locX + ' ' + (locY + (height / 2)) + ' ' + 'L' + ' ' + locX + ' ' + (locY + (-height / 2));
            sf.base.merge(options, { 'd': path });
            break;
        case 'Diamond':
            path = 'M' + ' ' + x + ' ' + locY + ' ' +
                'L' + ' ' + locX + ' ' + (locY + (-height / 2)) + ' ' +
                'L' + ' ' + (locX + (width / 2)) + ' ' + locY + ' ' +
                'L' + ' ' + locX + ' ' + (locY + (height / 2)) + ' ' +
                'L' + ' ' + x + ' ' + locY + ' z';
            sf.base.merge(options, { 'd': path });
            break;
        case 'Rectangle':
            path = 'M' + ' ' + x + ' ' + (locY + (-height / 2)) + ' ' +
                'L' + ' ' + (locX + (width / 2)) + ' ' + (locY + (-height / 2)) + ' ' +
                'L' + ' ' + (locX + (width / 2)) + ' ' + (locY + (height / 2)) + ' ' +
                'L' + ' ' + x + ' ' + (locY + (height / 2)) + ' ' +
                'L' + ' ' + x + ' ' + (locY + (-height / 2)) + ' z';
            sf.base.merge(options, { 'd': path });
            break;
        case 'Triangle':
            path = 'M' + ' ' + x + ' ' + (locY + (height / 2)) + ' ' +
                'L' + ' ' + locX + ' ' + (locY + (-height / 2)) + ' ' +
                'L' + ' ' + (locX + (width / 2)) + ' ' + (locY + (height / 2)) + ' ' +
                'L' + ' ' + x + ' ' + (locY + (height / 2)) + ' z';
            sf.base.merge(options, { 'd': path });
            break;
        case 'InvertedTriangle':
            path = 'M' + ' ' + (locX + (width / 2)) + ' ' + (locY - (height / 2)) + ' ' +
                'L' + ' ' + locX + ' ' + (locY + (height / 2)) + ' ' +
                'L' + ' ' + (locX - (width / 2)) + ' ' + (locY - (height / 2)) + ' ' +
                'L' + ' ' + (locX + (width / 2)) + ' ' + (locY - (height / 2)) + ' z';
            sf.base.merge(options, { 'd': path });
            break;
        case 'Pentagon':
            var eq = 72;
            var xValue = void 0;
            var yValue = void 0;
            for (var i = 0; i <= 5; i++) {
                xValue = (width / 2) * Math.cos((Math.PI / 180) * (i * eq));
                yValue = (height / 2) * Math.sin((Math.PI / 180) * (i * eq));
                if (i === 0) {
                    path = 'M' + ' ' + (locX + xValue) + ' ' + (locY + yValue) + ' ';
                }
                else {
                    path = path.concat('L' + ' ' + (locX + xValue) + ' ' + (locY + yValue) + ' ');
                }
            }
            path = path.concat('Z');
            sf.base.merge(options, { 'd': path });
            break;
        case 'Image':
            functionName = 'Image';
            sf.base.merge(options, { 'href': url, 'height': height, 'width': width, x: x, y: y });
            break;
    }
    return { renderOption: options, functionName: functionName };
}
/** @private */
var PathOption = /** @class */ (function (_super) {
    __extends$1(PathOption, _super);
    function PathOption(id, fill, width, color, opacity, dashArray, d) {
        var _this = _super.call(this, id) || this;
        _this.opacity = opacity;
        _this.fill = fill;
        _this.stroke = color;
        _this['stroke-width'] = width;
        _this['stroke-dasharray'] = dashArray;
        _this.d = d;
        return _this;
    }
    return PathOption;
}(CustomizeOption));
/** @private */
function textElement(options, font, color, parent) {
    var renderOptions = {};
    var renderer = new SvgRenderer('');
    renderOptions = {
        'id': options.id,
        'x': options.x,
        'y': options.y,
        'fill': color,
        'font-size': font.size,
        'font-style': font.fontStyle,
        'font-family': font.fontFamily,
        'font-weight': font.fontWeight,
        'text-anchor': options.anchor,
        'transform': options.transform,
        'opacity': font.opacity,
        'dominant-baseline': options.baseLine
    };
    var text = typeof options.text === 'string' ? options.text : options.text[0];
    var htmlObject = renderer.createText(renderOptions, text);
    htmlObject.style.fontFamily = font.fontFamily;
    htmlObject.style.fontStyle = font.fontStyle;
    htmlObject.style.fontSize = font.size;
    htmlObject.style.fontWeight = font.fontWeight;
    htmlObject.style.color = font.color;
    parent.appendChild(htmlObject);
    return htmlObject;
}
var TooltipLocation = /** @class */ (function () {
    function TooltipLocation(x, y) {
        this.x = x;
        this.y = y;
    }
    return TooltipLocation;
}());

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
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
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable jsdoc/require-param */
/* eslint-disable jsdoc/require-returns */
/* eslint-disable valid-jsdoc */
/**
 * Configures the fonts in charts.
 *
 * @private
 */
var TextStyle = /** @class */ (function (_super) {
    __extends(TextStyle, _super);
    function TextStyle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        sf.base.Property(null)
    ], TextStyle.prototype, "size", void 0);
    __decorate([
        sf.base.Property('')
    ], TextStyle.prototype, "color", void 0);
    __decorate([
        sf.base.Property('Segoe UI')
    ], TextStyle.prototype, "fontFamily", void 0);
    __decorate([
        sf.base.Property('Normal')
    ], TextStyle.prototype, "fontWeight", void 0);
    __decorate([
        sf.base.Property('Normal')
    ], TextStyle.prototype, "fontStyle", void 0);
    __decorate([
        sf.base.Property(1)
    ], TextStyle.prototype, "opacity", void 0);
    return TextStyle;
}(sf.base.ChildProperty));
/**
 * Configures the borders in the chart.
 *
 * @private
 */
var TooltipBorder = /** @class */ (function (_super) {
    __extends(TooltipBorder, _super);
    function TooltipBorder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        sf.base.Property('')
    ], TooltipBorder.prototype, "color", void 0);
    __decorate([
        sf.base.Property(1)
    ], TooltipBorder.prototype, "width", void 0);
    __decorate([
        sf.base.Property('')
    ], TooltipBorder.prototype, "dashArray", void 0);
    return TooltipBorder;
}(sf.base.ChildProperty));
/**
 * Configures the borders in the chart.
 *
 * @private
 */
var AreaBounds = /** @class */ (function (_super) {
    __extends(AreaBounds, _super);
    function AreaBounds() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        sf.base.Property(0)
    ], AreaBounds.prototype, "x", void 0);
    __decorate([
        sf.base.Property(0)
    ], AreaBounds.prototype, "y", void 0);
    __decorate([
        sf.base.Property(0)
    ], AreaBounds.prototype, "width", void 0);
    __decorate([
        sf.base.Property(0)
    ], AreaBounds.prototype, "height", void 0);
    return AreaBounds;
}(sf.base.ChildProperty));
/**
 * Configures the borders in the chart.
 *
 * @private
 */
var ToolLocation = /** @class */ (function (_super) {
    __extends(ToolLocation, _super);
    function ToolLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        sf.base.Property(0)
    ], ToolLocation.prototype, "x", void 0);
    __decorate([
        sf.base.Property(0)
    ], ToolLocation.prototype, "y", void 0);
    return ToolLocation;
}(sf.base.ChildProperty));
/**
 * Represents the Tooltip control.
 * ```html
 * <div id="tooltip"/>
 * <script>
 *   var tooltipObj = new Tooltip({ isResponsive : true });
 *   tooltipObj.appendTo("#tooltip");
 * </script>
 * ```
 *
 * @private
 */
var Tooltip = /** @class */ (function (_super) {
    __extends(Tooltip, _super);
    /**
     * Constructor for creating the widget
     *
     * @hidden
     */
    function Tooltip(options, element) {
        return _super.call(this, options, element) || this;
    }
    /**
     * Initialize the event handler.
     *
     * @private
     */
    Tooltip.prototype.preRender = function () {
        this.allowServerDataBinding = false;
        this.initPrivateVariable();
        if (!this.isCanvas) {
            this.removeSVG();
        }
        this.createTooltipElement();
    };
    Tooltip.prototype.initPrivateVariable = function () {
        this.renderer = new SvgRenderer(this.element.id);
        this.themeStyle = getTooltipThemeColor(this.theme);
        this.formattedText = [];
        this.padding = 5;
        this.areaMargin = 10;
        this.isFirst = true;
        this.markerPoint = [];
    };
    Tooltip.prototype.removeSVG = function () {
        var svgObject = document.getElementById(this.element.id + '_svg');
        var templateObject = document.getElementById(this.element.id + 'parent_template');
        if (this.blazorTemplate) {
            sf.base.resetBlazorTemplate(this.element.id + 'parent_template' + '_blazorTemplate');
        }
        if (svgObject && svgObject.parentNode) {
            sf.base.remove(svgObject);
        }
        if (templateObject && templateObject.parentNode) {
            sf.base.remove(templateObject);
        }
    };
    /**
     * To Initialize the control rendering.
     */
    Tooltip.prototype.render = function () {
        this.fadeOuted = false;
        if (!this.template) {
            this.renderText(this.isFirst);
            var argsData = {
                cancel: false, name: 'tooltipRender', tooltip: this
            };
            this.trigger('tooltipRender', argsData);
            var markerSide = this.renderTooltipElement(this.areaBounds, this.location);
            this.drawMarker(markerSide.isBottom, markerSide.isRight, this.markerSize);
        }
        else {
            this.updateTemplateFn();
            this.createTemplate(this.areaBounds, this.location);
        }
        this.trigger('loaded', { tooltip: this });
        var element = document.getElementById('chartmeasuretext');
        if (element) {
            sf.base.remove(element);
        }
        this.allowServerDataBinding = true;
    };
    Tooltip.prototype.createTooltipElement = function () {
        this.textElements = [];
        if (!this.template || this.shared) {
            // SVG element for tooltip
            if (this.enableRTL) {
                this.element.setAttribute('dir', 'ltr');
            }
            var svgObject = this.renderer.createSvg({ id: this.element.id + '_svg' });
            this.element.appendChild(svgObject);
            // Group to hold text and path.
            var groupElement = document.getElementById(this.element.id + '_group');
            if (!groupElement) {
                groupElement = this.renderer.createGroup({ id: this.element.id + '_group' });
                groupElement.setAttribute('transform', 'translate(0,0)');
            }
            svgObject.appendChild(groupElement);
            var pathElement = this.renderer.drawPath({
                'id': this.element.id + '_path', 'stroke-width': this.border.width,
                'fill': this.fill || this.themeStyle.tooltipFill, 'opacity': ((this.theme === 'TailwindDark' || this.theme === 'Tailwind' || this.theme === 'Bootstrap5' || this.theme === 'Bootstrap5Dark') && this.opacity === 0.75) ?
                    1 : this.opacity,
                'stroke': this.border.color
            });
            groupElement.appendChild(pathElement);
        }
    };
    Tooltip.prototype.drawMarker = function (isBottom, isRight, size) {
        if (this.shapes.length <= 0) {
            return null;
        }
        var shapeOption;
        var count = 0;
        var markerGroup = this.renderer.createGroup({ id: this.element.id + '_trackball_group' });
        var groupElement = getElement(this.element.id + '_group');
        var x = ((this.enableRTL) ? this.elementSize.width - (size / 2) :
            (this.marginX * 2) + (size / 2)) + (isRight ? this.arrowPadding : 0);
        for (var _i = 0, _a = this.shapes; _i < _a.length; _i++) {
            var shape = _a[_i];
            if (shape !== 'None') {
                shapeOption = new PathOption(this.element.id + '_Trackball_' + count, this.palette[count], 1, '#cccccc', 1, null);
                if (this.markerPoint[count]) {
                    markerGroup.appendChild(drawSymbol(new TooltipLocation(x, this.markerPoint[count] - this.padding + (isBottom ? this.arrowPadding : 0)), shape, new Size(size, size), '', shapeOption, null));
                }
                count++;
            }
        }
        groupElement.appendChild(markerGroup);
    };
    Tooltip.prototype.renderTooltipElement = function (areaBounds, location) {
        var tooltipDiv = getElement(this.element.id);
        var arrowLocation = new TooltipLocation(0, 0);
        var tipLocation = new TooltipLocation(0, 0);
        var svgObject = getElement(this.element.id + '_svg');
        var groupElement = getElement(this.element.id + '_group');
        var pathElement = getElement(this.element.id + '_path');
        var rect;
        var isTop = false;
        var isLeft = false;
        var isBottom = false;
        var x = 0;
        var y = 0;
        if (this.header !== '') {
            this.elementSize.height += this.marginY;
        }
        if (this.content.length > 1) {
            rect = this.sharedTooltipLocation(areaBounds, this.location.x, this.location.y);
            isTop = true;
        }
        else {
            rect = this.tooltipLocation(areaBounds, location, arrowLocation, tipLocation);
            if (!this.inverted) {
                isTop = (rect.y < (location.y + this.clipBounds.y));
                isBottom = !isTop;
                y = (isTop ? 0 : this.arrowPadding);
            }
            else {
                isLeft = (rect.x < (location.x + this.clipBounds.x));
                x = (isLeft ? 0 : this.arrowPadding);
            }
        }
        if (this.header !== '') {
            var wrapPadding = 2;
            var wrapHeader = this.isWrap ? this.wrappedText : this.header;
            if (this.isWrap && typeof (wrapHeader) === 'string' && (wrapHeader.indexOf('<') > -1 || wrapHeader.indexOf('>') > -1)) {
                var textArray = wrapHeader.split('<br>');
                wrapPadding = textArray.length;
            }
            var headerSize = measureText(this.isWrap ? this.wrappedText : this.header, this.textStyle).height +
                (this.marginY * wrapPadding) + (isBottom ? this.arrowPadding : 0) + (this.isWrap ? 5 : 0); //header padding;
            var xLength = (this.marginX * 3) + (!isLeft && !isTop && !isBottom ? this.arrowPadding : 0);
            var direction = 'M ' + xLength + ' ' + headerSize +
                'L ' + (rect.width + (!isLeft && !isTop && !isBottom ? this.arrowPadding : 0) - (this.marginX * 2)) +
                ' ' + headerSize;
            var pathElement_1 = this.renderer.drawPath({
                'id': this.element.id + '_header_path', 'stroke-width': 1,
                'fill': null, 'opacity': 0.8, 'stroke': this.themeStyle.tooltipHeaderLine, 'd': direction
            });
            groupElement.appendChild(pathElement_1);
        }
        var start = this.border.width / 2;
        var pointRect = new Rect(start + x, start + y, rect.width - start, rect.height - start);
        groupElement.setAttribute('opacity', '1');
        if (this.enableAnimation && !this.isFirst && !this.crosshair) {
            this.animateTooltipDiv(tooltipDiv, rect);
        }
        else {
            this.updateDiv(tooltipDiv, rect.x, rect.y);
        }
        // eslint-disable-next-line no-extra-boolean-cast
        svgObject.setAttribute('height', (rect.height + this.border.width + (!((!this.inverted)) ? 0 : this.arrowPadding) + 5).toString());
        svgObject.setAttribute('width', (rect.width + this.border.width + (((!this.inverted)) ? 0 : this.arrowPadding) + 5).toString());
        svgObject.setAttribute('opacity', '1');
        if (!sf.base.isNullOrUndefined(this.tooltipPlacement)) {
            isTop = this.tooltipPlacement.indexOf('Top') > -1;
            isBottom = this.tooltipPlacement.indexOf('Bottom') > -1;
            isLeft = this.tooltipPlacement.indexOf('Left') > -1;
        }
        pathElement.setAttribute('d', findDirection(this.rx, this.ry, pointRect, arrowLocation, this.arrowPadding, isTop, isBottom, isLeft, tipLocation.x, tipLocation.y, this.controlName));
        if (this.enableShadow && this.theme !== 'Bootstrap4') {
            // To fix next chart initial tooltip opacity issue in tab control
            var shadowId = this.element.id + '_shadow';
            if (this.theme === 'Tailwind' || this.theme === 'TailwindDark'
                || this.theme === 'Bootstrap5' || this.theme === 'Bootstrap5Dark') {
                pathElement.setAttribute('box-shadow', '0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)');
            }
            else {
                pathElement.setAttribute('filter', sf.base.Browser.isIE ? '' : 'url(#' + shadowId + ')');
            }
            var shadow = '<filter id="' + shadowId + '" height="130%"><feGaussianBlur in="SourceAlpha" stdDeviation="3"/>';
            shadow += '<feOffset dx="3" dy="3" result="offsetblur"/><feComponentTransfer><feFuncA type="linear" slope="0.5"/>';
            shadow += '</feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge></filter>';
            var defElement = this.renderer.createDefs();
            defElement.setAttribute('id', this.element.id + 'SVG_tooltip_definition');
            groupElement.appendChild(defElement);
            defElement.innerHTML = shadow;
        }
        var borderColor = this.theme === "Fluent" ? "#FFFFFF" : this.theme === "FluentDark" ? "#323130" : this.border.color;
        pathElement.setAttribute('stroke', borderColor);
        if (!sf.base.isNullOrUndefined(this.border.dashArray)) {
            pathElement.setAttribute('stroke-dasharray', this.border.dashArray);
        }
        this.changeText(new TooltipLocation(x, y), isBottom, !isLeft && !isTop && !isBottom);
        if (this.revert) {
            this.inverted = !this.inverted;
            this.revert = false;
        }
        return new Side(isBottom, !isLeft && !isTop && !isBottom);
    };
    Tooltip.prototype.changeText = function (point, isBottom, isRight) {
        var element = document.getElementById(this.element.id + '_text');
        if (isBottom) {
            element.setAttribute('transform', 'translate(0,' + this.arrowPadding + ')');
        }
        if (isRight) {
            element.setAttribute('transform', 'translate(' + this.arrowPadding + ' 0)');
        }
    };
    Tooltip.prototype.findFormattedText = function () {
        this.formattedText = [];
        if (this.header.replace(/<b>/g, '').replace(/<\/b>/g, '').trim() !== '') {
            this.formattedText = this.formattedText.concat(this.header);
        }
        this.formattedText = this.formattedText.concat(this.content);
    };
    // tslint:disable-next-line:max-func-body-length
    Tooltip.prototype.renderText = function (isRender) {
        var height = 0;
        var width = 0; // Padding for text;
        var subWidth = 0;
        var lines;
        var key = 'properties';
        var font = sf.base.extend({}, this.textStyle, null, true)[key];
        var groupElement = getElement(this.element.id + '_group');
        var tspanElement;
        var textCollection;
        var tspanStyle = '';
        var line;
        var tspanOption;
        this.findFormattedText();
        this.isWrap = false;
        var isRtlEnabled = document.body.getAttribute('dir') === 'rtl';
        var anchor = isRtlEnabled && !this.enableRTL ? 'end' : 'start';
        this.leftSpace = this.areaBounds.x + this.location.x;
        this.rightSpace = (this.areaBounds.x + this.areaBounds.width) - this.leftSpace;
        var headerContent = this.header.replace(/<b>/g, '').replace(/<\/b>/g, '').trim();
        var isBoldTag = this.header.indexOf('<b>') > -1 && this.header.indexOf('</b>') > -1;
        var headerWidth = measureText(this.formattedText[0], font).width + (2 * this.marginX) + this.arrowPadding;
        var isLeftSpace = (this.location.x - headerWidth) < this.location.x;
        var isRightSpace = (this.areaBounds.x + this.areaBounds.width) < (this.location.x + headerWidth);
        var header;
        var headerSpace = (headerContent !== '') ? this.marginY : 0;
        var isRow = true;
        var isColumn = true;
        this.markerPoint = [];
        var markerSize = (this.shapes.length > 0) ? 10 : 0;
        var markerPadding = (this.shapes.length > 0) ? 5 : 0;
        var spaceWidth = 4;
        var subStringLength;
        var fontSize = '13px';
        var fontWeight = 'Normal';
        var labelColor = this.themeStyle.tooltipLightLabel;
        var dy = (22 / parseFloat(fontSize)) * (parseFloat(font.size));
        var contentWidth = [];
        if (!isRender || this.isCanvas) {
            removeElement(this.element.id + '_text');
            removeElement(this.element.id + '_header_path');
            removeElement(this.element.id + '_trackball_group');
            removeElement(this.element.id + 'SVG_tooltip_definition');
        }
        var options = new TextOption(this.element.id + '_text', this.marginX * 2, (this.marginY * 2 + this.padding * 2 + (this.marginY === 2 ? 3 : 0)), anchor, '');
        var parentElement = textElement(options, font, null, groupElement);
        var withoutHeader = this.formattedText.length === 1 && this.formattedText[0].indexOf(' : <b>') > -1;
        var isHeader = this.header !== '';
        var size = isHeader && isBoldTag ? 16 : 13;
        for (var k = 0, pointsLength = this.formattedText.length; k < pointsLength; k++) {
            textCollection = this.formattedText[k].replace(/<(b|strong)>/g, '<b>')
                .replace(/<\/(b|strong)>/g, '</b>')
                .split(/<br.*?>/g);
            if (k === 0 && !withoutHeader && this.isTextWrap &&
                (this.leftSpace < headerWidth || isLeftSpace) &&
                (this.rightSpace < headerWidth || isRightSpace)) {
                subStringLength = Math.round(this.leftSpace > this.rightSpace ? (this.leftSpace / size) : (this.rightSpace / size));
                header = headerContent !== '' ? headerContent : this.formattedText[k];
                textCollection = header.match(new RegExp('.{1,' + subStringLength + '}', 'g'));
                this.wrappedText = isBoldTag ? '<b>' + textCollection.join('<br>') + '</b>' : textCollection.join('<br>');
                this.isWrap = textCollection.length > 1;
            }
            if (textCollection[0] === '') {
                continue;
            }
            if ((k !== 0) || (headerContent === '')) {
                this.markerPoint.push((headerContent !== '' ? (this.marginY) : 0) + options.y + height);
            }
            for (var i = 0, len = textCollection.length; i < len; i++) { // string value of unicode for LTR is \u200E
                lines = textCollection[i].replace(/<b>/g, '<br><b>').replace(/<\/b>/g, '</b><br>').replace(/:/g, (this.enableRTL) ? '<br>\u200E: <br>' : '<br>\u200E:<br>')
                    .split('<br>');
                if (this.enableRTL && lines.length > 0 && textCollection[i].match(/:/g)) {
                    lines[0] = lines[0].trim();
                    lines.reverse();
                }
                subWidth = 0;
                isColumn = true;
                height += dy;
                for (var j = 0, len_1 = lines.length; j < len_1; j++) {
                    line = lines[j];
                    if (this.enableRTL && line !== '' && this.isRTLText(line)) {
                        line = line.concat('\u200E');
                    }
                    if (!/\S/.test(line) && line !== '') {
                        line = ' '; //to trim multiple white spaces to single white space
                    }
                    if ((!isColumn && line === ' ') || (line.replace(/<b>/g, '').replace(/<\/b>/g, '').trim() !== '')) {
                        subWidth += line !== ' ' ? spaceWidth : 0;
                        if (isColumn && !isRow) {
                            tspanOption = {
                                x: (this.marginX * 2) + (markerSize + markerPadding),
                                dy: dy + ((isColumn) ? headerSpace : 0), fill: ''
                            };
                            headerSpace = null;
                        }
                        else {
                            if (isRow && isColumn) {
                                tspanOption = {
                                    x: (headerContent === '') ? ((this.marginX * 2) + (markerSize + markerPadding))
                                        : (this.marginX * 2) + (this.isWrap ? (markerSize + markerPadding) : 0)
                                };
                            }
                            else {
                                tspanOption = {};
                            }
                        }
                        isColumn = false;
                        tspanElement = this.renderer.createTSpan(tspanOption, '');
                        parentElement.appendChild(tspanElement);
                        if (line.indexOf('<b>') > -1 || ((isBoldTag && j === 0 && k === 0) && (isHeader || this.isWrap))) {
                            fontWeight = 'bold';
                            labelColor = this.themeStyle.tooltipBoldLabel;
                            tspanStyle = 'font-weight:' + fontWeight;
                            font.fontWeight = fontWeight;
                            (tspanElement).setAttribute('fill', this.textStyle.color || labelColor);
                        }
                        else {
                            tspanStyle = fontWeight === 'bold' ? 'font-weight:' + fontWeight : '';
                            font.fontWeight = fontWeight;
                            (tspanElement).setAttribute('fill', this.textStyle.color || labelColor);
                        }
                        if (line.indexOf('</b>') > -1 || ((isBoldTag && j === len_1 - 1 && k === 0) && (isHeader || this.isWrap))) {
                            fontWeight = 'Normal';
                            labelColor = this.themeStyle.tooltipLightLabel;
                        }
                        // eslint-disable-next-line no-useless-escape
                        (tspanElement).textContent = line = this.getTooltipTextContent(line);
                        subWidth += measureText(line, font).width;
                        if (tspanStyle !== '') {
                            tspanElement.style.fontWeight = tspanStyle.split('font-weight:')[1];
                            tspanElement.style.color = tspanElement.getAttribute('fill');
                        }
                        // 'inherit' will apply css style from parent element.
                        tspanElement.style.fontFamily = 'inherit';
                        tspanElement.style.fontStyle = 'inherit';
                        tspanElement.style.fontSize = 'inherit';
                        isRow = false;
                    }
                }
                subWidth -= spaceWidth;
                width = Math.max(width, subWidth);
                contentWidth.push(subWidth);
            }
        }
        this.elementSize = new Size(width + (width > 0 ? (2 * this.marginX) : 0), height);
        this.elementSize.width += (markerSize + markerPadding); // marker size + marker Spacing
        var element = (parentElement.childNodes[0]);
        if (headerContent !== '' && element && !this.isWrap) {
            font.fontWeight = 'bold';
            var width_1 = (this.elementSize.width + (2 * this.padding)) / 2 - measureText(headerContent, font).width / 2;
            element.setAttribute('x', width_1.toString());
        }
        this.renderContentRTL(parentElement, isHeader, markerSize + markerPadding, contentWidth);
    };
    Tooltip.prototype.renderContentRTL = function (textElement$$1, isHeader, markerSize, contentWidth) {
        if (this.enableRTL) {
            var tspanElement = void 0;
            var contentWidthIndex = isHeader ? 1 : 0;
            for (var i = 0; i < textElement$$1.childNodes.length; i++) {
                tspanElement = (textElement$$1.childNodes[i]);
                if ((!isHeader || i > 0) && !sf.base.isNullOrUndefined(tspanElement.getAttribute('x'))) {
                    tspanElement.setAttribute('x', (this.elementSize.width - (markerSize + contentWidth[contentWidthIndex])).toString());
                    contentWidthIndex++;
                }
            }
        }
    };
    Tooltip.prototype.getTooltipTextContent = function (tooltipText) {
        var characterCollection = tooltipText.match(/<[a-zA-Z\/](.|\n)*?>/g);
        if (sf.base.isNullOrUndefined(characterCollection)) {
            return tooltipText;
        }
        var isRtlText = this.isRTLText(tooltipText);
        for (var i = 0; i < characterCollection.length; i++) {
            if (this.isValidHTMLElement(characterCollection[i].replace('<', '').replace('/', '').replace('>', '').trim())) {
                tooltipText = tooltipText.replace(characterCollection[i], isRtlText ? '\u200E' : '');
            }
        }
        return tooltipText;
    };
    Tooltip.prototype.isValidHTMLElement = function (element) {
        return document.createElement(element).toString() != "[object HTMLUnknownElement]";
    };
    Tooltip.prototype.isRTLText = function (tooltipContent) {
        return /[\u0590-\u07FF\u200F\u202B\u202E\uFB1D-\uFDFD\uFE70-\uFEFC]/.test(tooltipContent);
    };
    Tooltip.prototype.createTemplate = function (areaBounds, location) {
        var argsData = { cancel: false, name: 'tooltipRender', tooltip: this };
        this.trigger('tooltipRender', argsData);
        var parent = document.getElementById(this.element.id);
        if (this.isCanvas) {
            this.removeSVG();
        }
        var firstElement = parent.firstElementChild;
        if (firstElement) {
            sf.base.remove(firstElement);
        }
        if (!argsData.cancel) {
            var elem = sf.base.createElement('div', { id: this.element.id + 'parent_template' });
            var templateElement = this.templateFn(this.data, this.controlInstance, elem.id, elem.id + '_blazorTemplate', '');
            while (templateElement && templateElement.length > 0) {
                if (sf.base.isBlazor() || templateElement.length === 1) {
                    elem.appendChild(templateElement[0]);
                    templateElement = null;
                }
                else {
                    elem.appendChild(templateElement[0]);
                }
            }
            parent.appendChild(elem);
            var element = this.isCanvas ? elem : this.element;
            var rect = element.getBoundingClientRect();
            this.padding = 0;
            this.elementSize = new Size(rect.width, rect.height);
            var tooltipRect = this.shared ? this.sharedTooltipLocation(areaBounds, this.location.x, this.location.y)
                : this.tooltipLocation(areaBounds, location, new TooltipLocation(0, 0), new TooltipLocation(0, 0));
            if (this.enableAnimation && !this.isFirst && !this.crosshair) {
                this.animateTooltipDiv(this.element, tooltipRect);
            }
            else {
                this.updateDiv(element, tooltipRect.x, tooltipRect.y);
            }
            if (this.blazorTemplate) {
                //Customer issue - F149037  Call back function to handle the blazor tooltip alignment issues
                var tooltipRendered = function () {
                    var rect1 = getElement(thisObject_1.element.id).getBoundingClientRect();
                    thisObject_1.elementSize = new Size(rect1.width, rect1.height);
                    var tooltipRect1 = thisObject_1.tooltipLocation(areaBounds, location, new TooltipLocation(0, 0), new TooltipLocation(0, 0));
                    thisObject_1.updateDiv(getElement(thisObject_1.element.id), tooltipRect1.x, tooltipRect1.y);
                };
                // eslint-disable-next-line @typescript-eslint/no-this-alias
                var thisObject_1 = this;
                tooltipRendered.bind(thisObject_1, areaBounds, location);
                sf.base.updateBlazorTemplate(this.element.id + 'parent_template' + '_blazorTemplate', this.blazorTemplate.name, this.blazorTemplate.parent, undefined, tooltipRendered);
            }
        }
        else {
            sf.base.remove(getElement(this.element.id + '_tooltip'));
        }
    };
    Tooltip.prototype.sharedTooltipLocation = function (bounds, x, y) {
        var width = this.elementSize.width + (2 * this.marginX);
        var height = this.elementSize.height + (2 * this.marginY);
        var tooltipRect = new Rect(x + 2 * this.padding, y - height - this.padding, width, height);
        if (tooltipRect.y < bounds.y) {
            tooltipRect.y += (tooltipRect.height + 2 * this.padding);
        }
        if (tooltipRect.x + tooltipRect.width > bounds.x + bounds.width) {
            tooltipRect.x -= (tooltipRect.width + 4 * this.padding);
        }
        return tooltipRect;
    };
    Tooltip.prototype.getCurrentPosition = function (bounds, symbolLocation, arrowLocation, tipLocation) {
        var position = this.tooltipPlacement;
        var clipX = this.clipBounds.x;
        var clipY = this.clipBounds.y;
        var markerHeight = this.offset;
        var width = this.elementSize.width + (2 * this.marginX);
        var height = this.elementSize.height + (2 * this.marginY);
        var location = new TooltipLocation(symbolLocation.x, symbolLocation.y);
        if (position === 'Top' || position === 'Bottom') {
            location = new TooltipLocation(location.x + clipX - this.elementSize.width / 2 - this.padding, location.y + clipY - this.elementSize.height - (2 * this.padding) - this.arrowPadding - markerHeight);
            arrowLocation.x = tipLocation.x = width / 2;
            if (position === 'Bottom') {
                location.y = symbolLocation.y + clipY + markerHeight;
            }
            if (bounds.x + bounds.width < location.x + width) {
                location.x = (bounds.width > width) ? ((bounds.x + bounds.width) - width + 6) : bounds.x;
                arrowLocation.x = tipLocation.x = (bounds.width > width) ? (bounds.x + symbolLocation.x - location.x) : symbolLocation.x;
            }
            else if (bounds.x > location.x) {
                location.x = bounds.x;
                arrowLocation.x = tipLocation.x = symbolLocation.x;
            }
        }
        else {
            location = new TooltipLocation(location.x + clipX + markerHeight, location.y + clipY - this.elementSize.height / 2 - (this.padding));
            arrowLocation.y = tipLocation.y = height / 2;
            if (position === 'Left') {
                location.x = symbolLocation.x + clipX - markerHeight - (width + this.arrowPadding);
            }
            if (bounds.y + bounds.height < location.y + height) {
                location.y = (bounds.height > height) ? ((bounds.y + bounds.height) - height + 6) : bounds.y;
                arrowLocation.y = tipLocation.y = (bounds.height > height) ? (bounds.y + symbolLocation.y - location.y) : symbolLocation.y;
            }
            else if (bounds.y > location.y) {
                location.y = bounds.y;
                arrowLocation.y = tipLocation.y = symbolLocation.y;
            }
        }
        return new Rect(location.x, location.y, width, height);
    };
    // tslint:disable-next-line:max-func-body-length
    Tooltip.prototype.tooltipLocation = function (bounds, symbolLocation, arrowLocation, tipLocation) {
        if (!sf.base.isNullOrUndefined(this.tooltipPlacement)) {
            var tooltipRect = this.getCurrentPosition(bounds, symbolLocation, arrowLocation, tipLocation);
            return tooltipRect;
        }
        var location = new TooltipLocation(symbolLocation.x, symbolLocation.y);
        var width = this.elementSize.width + (2 * this.marginX);
        var height = this.elementSize.height + (2 * this.marginY);
        var markerHeight = this.offset;
        var clipX = this.clipBounds.x;
        var clipY = this.clipBounds.y;
        var boundsX = bounds.x;
        var boundsY = bounds.y;
        this.outOfBounds = false;
        if (!this.inverted) {
            location = new TooltipLocation(location.x + clipX - this.elementSize.width / 2 - this.padding, location.y + clipY - this.elementSize.height - (2 * this.padding) - this.arrowPadding - markerHeight);
            arrowLocation.x = tipLocation.x = width / 2;
            if (location.y < boundsY || (this.isNegative)) {
                location.y = (symbolLocation.y < 0 ? 0 : symbolLocation.y) + clipY + markerHeight;
            }
            if (location.y + height + this.arrowPadding > boundsY + bounds.height) {
                location.y = Math.min(symbolLocation.y, boundsY + bounds.height) + clipY
                    - this.elementSize.height - (2 * this.padding) - this.arrowPadding - markerHeight;
            }
            tipLocation.x = width / 2;
            if (location.x < boundsX) {
                arrowLocation.x -= (boundsX - location.x);
                tipLocation.x -= (boundsX - location.x);
                location.x = boundsX;
            }
            if (location.x + width > boundsX + bounds.width) {
                arrowLocation.x += ((location.x + width) - (boundsX + bounds.width));
                tipLocation.x += ((location.x + width) - (boundsX + bounds.width));
                location.x -= ((location.x + width) - (boundsX + bounds.width));
            }
            if (arrowLocation.x + this.arrowPadding > width - this.rx) {
                arrowLocation.x = width - this.rx - this.arrowPadding;
                tipLocation.x = width - this.rx - this.arrowPadding;
            }
            if (arrowLocation.x - this.arrowPadding < this.rx) {
                arrowLocation.x = tipLocation.x = this.rx + this.arrowPadding;
            }
            if (this.controlName === 'Chart') {
                if (((bounds.x + bounds.width) - (location.x + arrowLocation.x)) < this.areaMargin + this.arrowPadding || (location.x + arrowLocation.x) < this.areaMargin + this.arrowPadding) {
                    this.outOfBounds = true;
                }
                if (!withInAreaBounds(location.x, location.y, bounds) || this.outOfBounds) {
                    this.inverted = !this.inverted;
                    this.revert = true;
                    location = new TooltipLocation(symbolLocation.x + markerHeight + clipX, symbolLocation.y + clipY - this.elementSize.height / 2 - (this.padding));
                    tipLocation.x = arrowLocation.x = 0;
                    tipLocation.y = arrowLocation.y = height / 2;
                    if ((location.x + this.arrowPadding + width > boundsX + bounds.width) || (this.isNegative)) {
                        location.x = (symbolLocation.x > bounds.width ? bounds.width : symbolLocation.x)
                            + clipX - markerHeight - (this.arrowPadding + width);
                    }
                    if (location.x < boundsX) {
                        location.x = (symbolLocation.x < 0 ? 0 : symbolLocation.x) + markerHeight + clipX;
                    }
                    if (location.y <= boundsY) {
                        tipLocation.y -= (boundsY - location.y);
                        arrowLocation.y -= (boundsY - location.y);
                        location.y = boundsY;
                    }
                    if (location.y + height >= bounds.height + boundsY) {
                        arrowLocation.y += ((location.y + height) - (bounds.height + boundsY));
                        tipLocation.y += ((location.y + height) - (bounds.height + boundsY));
                        location.y -= ((location.y + height) - (bounds.height + boundsY));
                    }
                    if ((this.arrowPadding) + arrowLocation.y > height - this.ry) {
                        arrowLocation.y = height - this.arrowPadding - this.ry;
                        tipLocation.y = height;
                    }
                    if (arrowLocation.y - this.arrowPadding < this.ry) {
                        arrowLocation.y = (this.arrowPadding) + this.ry;
                        tipLocation.y = 0;
                    }
                }
            }
        }
        else {
            location = new TooltipLocation(location.x + clipX + markerHeight, location.y + clipY - this.elementSize.height / 2 - (this.padding));
            arrowLocation.y = tipLocation.y = height / 2;
            if ((location.x + width + this.arrowPadding > boundsX + bounds.width) || (this.isNegative)) {
                location.x = (symbolLocation.x > bounds.width + bounds.x ? bounds.width : symbolLocation.x)
                    + clipX - markerHeight - (width + this.arrowPadding);
            }
            if (location.x < boundsX) {
                location.x = (symbolLocation.x < 0 ? 0 : symbolLocation.x) + clipX + markerHeight;
            }
            if (location.y <= boundsY) {
                arrowLocation.y -= (boundsY - location.y);
                tipLocation.y -= (boundsY - location.y);
                location.y = boundsY;
            }
            if (location.y + height >= boundsY + bounds.height) {
                arrowLocation.y += ((location.y + height) - (boundsY + bounds.height));
                tipLocation.y += ((location.y + height) - (boundsY + bounds.height));
                location.y -= ((location.y + height) - (boundsY + bounds.height));
            }
            if (arrowLocation.y + this.arrowPadding > height - this.ry) {
                arrowLocation.y = height - this.ry - this.arrowPadding;
                tipLocation.y = height;
            }
            if (arrowLocation.y - this.arrowPadding < this.ry) {
                arrowLocation.y = tipLocation.y = this.ry + this.arrowPadding;
            }
            if (this.controlName === 'Chart') {
                if ((location.y + arrowLocation.y) < this.areaMargin + this.arrowPadding || ((bounds.y + bounds.height) - (location.y + arrowLocation.y)) < this.areaMargin + this.arrowPadding) {
                    this.outOfBounds = true;
                }
                if (!withInAreaBounds(location.x, location.y, bounds) || this.outOfBounds) {
                    this.inverted = !this.inverted;
                    location = new TooltipLocation(symbolLocation.x + clipX - this.padding - this.elementSize.width / 2, symbolLocation.y + clipY - this.elementSize.height - (2 * this.padding) - markerHeight - this.arrowPadding);
                    this.revert = true;
                    tipLocation.x = arrowLocation.x = width / 2;
                    tipLocation.y = arrowLocation.y = 0;
                    if (location.y < boundsY || (this.isNegative)) {
                        location.y = (symbolLocation.y < 0 ? 0 : symbolLocation.y) + markerHeight + clipY;
                    }
                    if (location.y + this.arrowPadding + height > boundsY + bounds.height) {
                        location.y = Math.min(symbolLocation.y, boundsY + bounds.height) + clipY
                            - this.elementSize.height - (2 * this.padding) - markerHeight - this.arrowPadding;
                    }
                    tipLocation.x = width / 2;
                    if (location.x < boundsX) {
                        tipLocation.x -= (boundsX - location.x);
                        arrowLocation.x -= (boundsX - location.x);
                        location.x = boundsX;
                    }
                    if (location.x + width > bounds.width + boundsX) {
                        arrowLocation.x += ((location.x + width) - (bounds.width + boundsX));
                        tipLocation.x += ((location.x + width) - (bounds.width + boundsX));
                        location.x -= ((location.x + width) - (bounds.width + boundsX));
                    }
                    if ((this.arrowPadding) + arrowLocation.x > width - this.rx) {
                        tipLocation.x = width - this.rx - (this.arrowPadding);
                        arrowLocation.x = width - this.rx - (this.arrowPadding);
                    }
                    if (arrowLocation.x - (this.arrowPadding) < this.rx) {
                        arrowLocation.x = tipLocation.x = this.rx + (this.arrowPadding);
                    }
                }
            }
        }
        return new Rect(location.x, location.y, width, height);
    };
    Tooltip.prototype.animateTooltipDiv = function (tooltipDiv, rect) {
        var _this = this;
        var x = parseFloat(tooltipDiv.style.left);
        var y = parseFloat(tooltipDiv.style.top);
        var currenDiff;
        new sf.base.Animation({}).animate(tooltipDiv, {
            duration: this.duration,
            progress: function (args) {
                currenDiff = (args.timeStamp / args.duration);
                tooltipDiv.style.animation = null;
                if ((_this.controlName === 'Chart' && _this.shared) && !_this.enableRTL) {
                    tooltipDiv.style.transition = "transform " + 0.1 + "s";
                    tooltipDiv.style.transform = "translate(" + (x + currenDiff * (rect.x - x)) + "px," + (y + currenDiff * (rect.y - y)) + "px)";
                }
                else {
                    tooltipDiv.style.left = (x + currenDiff * (rect.x - x)) + 'px';
                    tooltipDiv.style.top = (y + currenDiff * (rect.y - y)) + 'px';
                }
            },
            end: function (model) {
                _this.updateDiv(tooltipDiv, rect.x, rect.y);
                _this.trigger('animationComplete', { tooltip: _this });
            }
        });
    };
    Tooltip.prototype.updateDiv = function (tooltipDiv, x, y) {
        if ((this.controlName === 'Chart' && this.shared && !this.crosshair) && !this.enableRTL) {
            tooltipDiv.style.transform = "translate(" + x + "px," + y + "px)";
        }
        else {
            tooltipDiv.style.left = x + 'px';
            tooltipDiv.style.top = y + 'px';
        }
    };
    Tooltip.prototype.updateTemplateFn = function () {
        if (this.template) {
            try {
                if (document.querySelectorAll(this.template).length) {
                    this.templateFn = sf.base.compile(document.querySelector(this.template).innerHTML.trim());
                }
                else {
                    this.templateFn = sf.base.compile(this.template);
                }
            }
            catch (e) {
                this.templateFn = sf.base.compile(this.template);
            }
        }
    };
    /** @private */
    Tooltip.prototype.fadeOut = function () {
        var _this = this;
        var tooltipElement = (this.isCanvas && !this.template) ? getElement(this.element.id + '_svg') :
            getElement(this.element.id);
        var tooltipDiv = getElement(this.element.id);
        if (tooltipElement) {
            var tooltipGroup_1 = tooltipElement.firstChild;
            if (tooltipGroup_1.nodeType != Node.ELEMENT_NODE) {
                tooltipGroup_1 = tooltipElement.firstElementChild;
            }
            if (this.isCanvas && !this.template) {
                tooltipGroup_1 = document.getElementById(this.element.id + '_group') ? document.getElementById(this.element.id + '_group') :
                    tooltipGroup_1;
            }
            if (!tooltipGroup_1) {
                return null;
            }
            var opacity_1 = parseFloat(tooltipGroup_1.getAttribute('opacity'));
            opacity_1 = !sf.base.isNullOrUndefined(opacity_1) ? opacity_1 : 1;
            new sf.base.Animation({}).animate(tooltipGroup_1, {
                duration: 200,
                progress: function (args) {
                    //  tooltipGroup.removeAttribute('e-animate');
                    _this.progressAnimation(tooltipGroup_1, opacity_1, (args.timeStamp / args.duration));
                },
                end: function () {
                    _this.fadeOuted = true;
                    _this.endAnimation(tooltipGroup_1);
                    tooltipDiv.style.transition = "";
                }
            });
        }
    };
    Tooltip.prototype.progressAnimation = function (tooltipGroup, opacity, timeStamp) {
        tooltipGroup.style.animation = '';
        tooltipGroup.setAttribute('opacity', (opacity - timeStamp).toString());
    };
    /*
     * @hidden
     */
    Tooltip.prototype.endAnimation = function (tooltipGroup) {
        tooltipGroup.setAttribute('opacity', '0');
        if (this.template) {
            tooltipGroup.style.display = 'none';
        }
        this.trigger('animationComplete', { tooltip: this });
    };
    /**
     * Get the properties to be maintained in the persisted state.
     *
     * @private
     */
    Tooltip.prototype.getPersistData = function () {
        var keyEntity = [];
        return this.addOnPersist(keyEntity);
    };
    /**
     * Get component name
     *
     *  @private
     */
    Tooltip.prototype.getModuleName = function () {
        return 'tooltip';
    };
    /**
     * To destroy the accumulationcharts
     *
     * @private
     */
    Tooltip.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        this.element.classList.remove('e-tooltip');
    };
    /**
     * Called internally if any of the property value changed.
     *
     * @returns {void}
     * @private
     */
    Tooltip.prototype.onPropertyChanged = function (newProp, oldProp) {
        if (this.blazorTemplate) {
            sf.base.resetBlazorTemplate(this.element.id + 'parent_template' + '_blazorTemplate');
        }
        this.isFirst = false;
        this.render();
    };
    __decorate([
        sf.base.Property(false)
    ], Tooltip.prototype, "enable", void 0);
    __decorate([
        sf.base.Property(false)
    ], Tooltip.prototype, "shared", void 0);
    __decorate([
        sf.base.Property(false)
    ], Tooltip.prototype, "crosshair", void 0);
    __decorate([
        sf.base.Property(true)
    ], Tooltip.prototype, "enableShadow", void 0);
    __decorate([
        sf.base.Property(null)
    ], Tooltip.prototype, "fill", void 0);
    __decorate([
        sf.base.Property('')
    ], Tooltip.prototype, "header", void 0);
    __decorate([
        sf.base.Property(0.75)
    ], Tooltip.prototype, "opacity", void 0);
    __decorate([
        sf.base.Complex({ size: '13px', fontWeight: 'Normal', color: null, fontStyle: 'Normal', fontFamily: 'Segoe UI' }, TextStyle)
    ], Tooltip.prototype, "textStyle", void 0);
    __decorate([
        sf.base.Property(null)
    ], Tooltip.prototype, "template", void 0);
    __decorate([
        sf.base.Property(true)
    ], Tooltip.prototype, "enableAnimation", void 0);
    __decorate([
        sf.base.Property(300)
    ], Tooltip.prototype, "duration", void 0);
    __decorate([
        sf.base.Property(false)
    ], Tooltip.prototype, "inverted", void 0);
    __decorate([
        sf.base.Property(false)
    ], Tooltip.prototype, "isNegative", void 0);
    __decorate([
        sf.base.Complex({ color: '#cccccc', width: 0.5 }, TooltipBorder)
    ], Tooltip.prototype, "border", void 0);
    __decorate([
        sf.base.Property([])
    ], Tooltip.prototype, "content", void 0);
    __decorate([
        sf.base.Property(10)
    ], Tooltip.prototype, "markerSize", void 0);
    __decorate([
        sf.base.Complex({ x: 0, y: 0 }, ToolLocation)
    ], Tooltip.prototype, "clipBounds", void 0);
    __decorate([
        sf.base.Property([])
    ], Tooltip.prototype, "palette", void 0);
    __decorate([
        sf.base.Property([])
    ], Tooltip.prototype, "shapes", void 0);
    __decorate([
        sf.base.Complex({ x: 0, y: 0 }, ToolLocation)
    ], Tooltip.prototype, "location", void 0);
    __decorate([
        sf.base.Property(0)
    ], Tooltip.prototype, "offset", void 0);
    __decorate([
        sf.base.Property(4)
    ], Tooltip.prototype, "rx", void 0);
    __decorate([
        sf.base.Property(4)
    ], Tooltip.prototype, "ry", void 0);
    __decorate([
        sf.base.Property(5)
    ], Tooltip.prototype, "marginX", void 0);
    __decorate([
        sf.base.Property(5)
    ], Tooltip.prototype, "marginY", void 0);
    __decorate([
        sf.base.Property(7)
    ], Tooltip.prototype, "arrowPadding", void 0);
    __decorate([
        sf.base.Property(null)
    ], Tooltip.prototype, "data", void 0);
    __decorate([
        sf.base.Property('Material')
    ], Tooltip.prototype, "theme", void 0);
    __decorate([
        sf.base.Complex({ x: 0, y: 0, width: 0, height: 0 }, AreaBounds)
    ], Tooltip.prototype, "areaBounds", void 0);
    __decorate([
        sf.base.Property(null)
    ], Tooltip.prototype, "availableSize", void 0);
    __decorate([
        sf.base.Property()
    ], Tooltip.prototype, "blazorTemplate", void 0);
    __decorate([
        sf.base.Property(false)
    ], Tooltip.prototype, "isCanvas", void 0);
    __decorate([
        sf.base.Property(false)
    ], Tooltip.prototype, "isTextWrap", void 0);
    __decorate([
        sf.base.Property(null)
    ], Tooltip.prototype, "tooltipPlacement", void 0);
    __decorate([
        sf.base.Property(null)
    ], Tooltip.prototype, "controlInstance", void 0);
    __decorate([
        sf.base.Property('')
    ], Tooltip.prototype, "controlName", void 0);
    __decorate([
        sf.base.Event()
    ], Tooltip.prototype, "tooltipRender", void 0);
    __decorate([
        sf.base.Event()
    ], Tooltip.prototype, "loaded", void 0);
    __decorate([
        sf.base.Event()
    ], Tooltip.prototype, "animationComplete", void 0);
    __decorate([
        sf.base.Property(false)
    ], Tooltip.prototype, "enableRTL", void 0);
    Tooltip = __decorate([
        sf.base.NotifyPropertyChanges
    ], Tooltip);
    return Tooltip;
}(sf.base.Component));

/**
 * Chart component exported items
 */

/**
 * Chart components exported.
 */

exports.TextStyle = TextStyle;
exports.TooltipBorder = TooltipBorder;
exports.AreaBounds = AreaBounds;
exports.ToolLocation = ToolLocation;
exports.Tooltip = Tooltip;
exports.getTooltipThemeColor = getTooltipThemeColor;
exports.measureText = measureText;
exports.withInAreaBounds = withInAreaBounds;
exports.findDirection = findDirection;
exports.Size = Size;
exports.Rect = Rect;
exports.Side = Side;
exports.CustomizeOption = CustomizeOption;
exports.TextOption = TextOption;
exports.getElement = getElement;
exports.removeElement = removeElement;
exports.drawSymbol = drawSymbol;
exports.calculateShapes = calculateShapes;
exports.PathOption = PathOption;
exports.textElement = textElement;
exports.TooltipLocation = TooltipLocation;
exports.SvgRenderer = SvgRenderer;
exports.CanvasRenderer = CanvasRenderer;

return exports;

});

    sf.svgbase = sf.svgbase({});


/***/ }),

/***/ "./resources/20.1.61/Scripts/syncfusion-blazor.js":
/*!********************************************************!*\
  !*** ./resources/20.1.61/Scripts/syncfusion-blazor.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var sfBlazorBase = {
    instances: [],
    getElementByXpath: function (xPath) {
        return document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    },
    getElement: function (elementID, id, xPath) {
        var dom = (elementID != null && window[elementID] != null) ? window[elementID][id] : null;
        return (dom != null ? dom : window.sfBlazor.getElementByXpath(xPath));
    },
    getAttribute: function (elementID, dom, xPath, propName) {
        var element = window.sfBlazor.getElement(elementID, dom, xPath);
        if (element != null)
            return element.getAttribute(propName);
    },
    setAttribute: function (elementID, dom, xPath, propName, value) {
        (window.sfBlazor.getElement(elementID, dom, xPath)).setAttribute(propName, value);
    },
    addClass: function (elementID, dom, xPath, classList) {
        sf.base.addClass([window.sfBlazor.getElement(elementID, dom, xPath)], classList);
    },
    removeClass: function (elementID, dom, xPath, classList) {
        sf.base.removeClass([window.sfBlazor.getElement(elementID, dom, xPath)], classList);
    },
    getClassList: function (elementID, dom, xPath) {
        return Array.prototype.slice.call((window.sfBlazor.getElement(elementID, dom, xPath)).classList);
    },
    enableRipple: function (isRipple) {
        sf.base.enableRipple(isRipple);
    },
    isDevice: function (isRtl) {
        if (isRtl) {
           this.enableRtl(isRtl);
        }
        return sf.base.Browser.isDevice;
    },
    animate: function (elementRef, animationSettings) {
        var animationObj = new sf.base.Animation(animationSettings);
        animationObj.animate(elementRef);
    },
    callRipple: function (elementRef, rippleSettings) {
        sf.base.rippleEffect(elementRef, rippleSettings);
    },
    createXPathFromElement: function (elm) {
        var allNodes = document.getElementsByTagName('*');
        for (var segs = []; elm && elm.nodeType === 1; elm = elm.parentNode) {
            if (elm.hasAttribute('id')) {
                var uniqueIdCount = 0;
                for (var n = 0; n < allNodes.length; n++) {
                    if (allNodes[n].hasAttribute('id') && allNodes[n].id === elm.id) uniqueIdCount++;
                    if (uniqueIdCount > 1) break;
                };
                if (uniqueIdCount === 1) {
                    segs.unshift('id("' + elm.getAttribute('id') + '")');
                    return segs.join('/');
                } else {
                    segs.unshift(elm.localName.toLowerCase() + '[@id="' + elm.getAttribute('id') + '"]');
                }
            } else {
                for (var i = 1, sib = elm.previousSibling; sib; sib = sib.previousSibling) {
                    if (sib.localName === elm.localName) i++;
                }
                segs.unshift(elm.localName.toLowerCase() + '[' + i + ']');
            }
        }
        return segs.length ? '/' + segs.join('/') : null;
    },
    getDomObject: function (key, node, object) {
        var uuid = key + sf.base.getUniqueID(key);
        var domObject = {
            id: node.id,
            class: node.className,
            xPath: window.sfBlazor.createXPathFromElement(node),
            domUUID: uuid
        };
        var elementID = object && object["elementID"];
        if (elementID) {
            window[elementID] = sf.base.isNullOrUndefined(window[elementID]) ? {} : window[elementID];
            window[elementID][uuid] = node;
            domObject["elementID"] = elementID;
        }
        return domObject;
    },
    focusButton: function (element) {
        element.focus();
    },
    // Function for store/set the component instances into window object
    setCompInstance: function (obj) {
        window.sfBlazor.instances[obj.dataId] = obj;
    },
    // Function for retrive/get the component instances from window object which is stored by 'setCompInstance' method
    getCompInstance: function (id) {
        return window.sfBlazor.instances[id];
    },
    //sf-progressbutton interop start
    setProgress: function (progressElem, contElem, spinnerElem, percent, enableProgress, isVertical) {
		spinnerElem = spinnerElem.querySelector('.e-spinner');
        return window.requestAnimationFrame(function () {
            if (enableProgress) {
                progressElem.style[isVertical ? 'height' : 'width'] = percent + '%';
            }
            contElem.parentElement.setAttribute('aria-valuenow', percent.toString());
            if (percent === 100) {
                contElem.classList.remove('e-cont-animate', 'e-animate-end');
                spinnerElem.style.width = 'auto';
                spinnerElem.style.height = 'auto';
            }
        });
    },
    setAnimation: function (contElem, spinnerElem, effect, duration, easing, isCenter) {
		spinnerElem = spinnerElem.querySelector('.e-spinner');
        new sf.base.Animation({}).animate(contElem, {
            duration: duration,
            name: 'Progress' + effect,
            timingFunction: easing,
            begin: function () {
                if (isCenter) {
                    spinnerElem.style.width = Math.max(spinnerElem.offsetWidth, contElem.offsetWidth) + 'px';
                    spinnerElem.style.height = Math.max(spinnerElem.offsetHeight, contElem.offsetHeight) + 'px';
                    contElem.classList.add('e-cont-animate');
                }
            },
            end: function () {
                contElem.classList.add('e-animate-end');
            }
        });
    },
    cancelAnimation: function(timerId) {
        window.cancelAnimationFrame(timerId);
    },
    //sf-progressbutton interop end
    //sf-spinner interop start
    getSpinnerTheme: function(element) {
        var theme = element ? window.getComputedStyle(element, ':after').getPropertyValue('content') : 'Material';
        return theme && theme.replace(/['"]+/g, '');
    },
    //sf-spinner interop end
    //sf-chip interop start
    chipKeydownHandler: function(element) {
        if (element) {
            element.addEventListener("keydown", function (e) {
                if (e.target && e.target.classList.contains("e-chip") && e.key == ' ') {
                    e.preventDefault();
                }
            });
        }
    }
    //sf-chip interop end
};
(function () {
    sf.base.enableBlazorMode();
})();

window.sfBlazor = window.sfBlazor || {};
Object.assign(window.sfBlazor, sfBlazorBase);


/***/ })

/******/ });