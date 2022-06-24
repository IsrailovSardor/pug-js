/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/main.scss":
/*!***************************!*\
  !*** ./src/css/main.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://pug/./src/css/main.scss?");

/***/ }),

/***/ "./src/js/components/falidation.js":
/*!*****************************************!*\
  !*** ./src/js/components/falidation.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Validator\": () => (/* binding */ Validator)\n/* harmony export */ });\nconst Rule = Object.freeze({\r\n    required: (value) => !value ? \"поля обязательно*\" : \"\",\r\n});\r\n\r\nconst fields = {\r\n    name: {\r\n        elements: {\r\n            input: document.getElementById(\"modal-order-input-name\"),\r\n            status: document.getElementById(\"modal-order-input-name-err\")\r\n        },\r\n        rules: [Rule.required],\r\n        errorText: \"\"\r\n    },\r\n    email: {\r\n        elements: {\r\n            input: document.getElementById(\"modal-order-input-email\"),\r\n            status: document.getElementById(\"modal-order-input-email-err\")\r\n        },\r\n        rules: [Rule.required],\r\n        errorText: \"\"\r\n    },\r\n    issueDescription: {\r\n        elements: {\r\n            input: document.getElementById(\"modal-order-text-issue\"),\r\n            status: document.getElementById(\"modal-order-text-issue-err\")\r\n        },\r\n        rules: [Rule.required],\r\n        errorText: \"\"\r\n    }\r\n};\r\n\r\nconst validateField = (fieldName) => {\r\n    fields[fieldName].errorText = getErrorText(fieldName);\r\n    renderError(fieldName);\r\n};\r\n\r\nconst getErrorText = (fieldName) => {\r\n    const rules = fields[fieldName].rules;\r\n    const value = fields[fieldName].elements.input.value;\r\n\r\n    let errorText = \"\";\r\n\r\n    rules.some(rule => {\r\n        errorText = rule(value);\r\n        return errorText;\r\n    });\r\n\r\n    return errorText;\r\n};\r\n\r\nconst renderError = (fieldName) => {\r\n    const {status, input} = fields[fieldName].elements;\r\n    const {errorText} = fields[fieldName];\r\n\r\n    if (errorText)\r\n        input.classList.add(\"input-field-error\");\r\n    else\r\n        input.classList.remove(\"input-field-error\");\r\n\r\n    status.textContent = errorText;\r\n};\r\n\r\n\r\nconst clearError = (fieldName) => {\r\n    fields[fieldName].errorText = \"\";\r\n    renderError(fieldName);\r\n};\r\n\r\n\r\n\r\n\r\nconst Validator = {\r\n    validate: () => {\r\n        Object.keys(fields).forEach(field => validateField(field));\r\n        return Object.values(fields).every(field => !field.errorText);\r\n    },\r\n    clearErrorsAll: () => {\r\n        Object.keys(fields).forEach(fieldName => clearError(fieldName));\r\n    },\r\n    setClearErrorsHandlers: () => {\r\n        Object.keys(fields)\r\n            .forEach(fieldName => {\r\n                const hndl = () => {\r\n                    clearError(fieldName);\r\n                };\r\n                fields[fieldName].elements.input\r\n                    .addEventListener(\"input\", hndl);\r\n            });\r\n    },\r\n};\n\n//# sourceURL=webpack://pug/./src/js/components/falidation.js?");

/***/ }),

/***/ "./src/js/components/getLocation.js":
/*!******************************************!*\
  !*** ./src/js/components/getLocation.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction getLocation() {\n  const links = document.querySelectorAll(\".menu__link\");\n\n  links.forEach((element) => {\n    console.log(window.location.href);\n    if (element.href == window.location.href) {\n      element.classList.add(\"menu__link--active\");\n    } else {\n      element.classList.remove(\"menu__link--active\");\n    }\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLocation);\n\n\n\n// function getLocation() {\n//   const links = document.querySelectorAll(\".menu__link\");\n//   links.forEach((element) => {\n//     if (element.href == window.location.href) {\n//       element.classList.add(\"menu__link--active\");\n//     }\n//   });\n// }\n\n// export default getLocation;\n\n//# sourceURL=webpack://pug/./src/js/components/getLocation.js?");

/***/ }),

/***/ "./src/js/components/openMenu.js":
/*!***************************************!*\
  !*** ./src/js/components/openMenu.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction toggleMenu(){\n    const menu=document.querySelector(\".mobail-menu\");\n    const burgerBtn=document.querySelector('.burger');\n\n    burgerBtn.classList.toggle(\"active\");\n    menu.classList.toggle(\"mobail-menu--active\");\n}\nfunction openMenu() {\n    const burgerBtn=document.querySelector('.burger');\n    const closeMenu=document.querySelector(\".mobail-menu__close\");\n\n    closeMenu.addEventListener(\"click\", ()=> {\n        toggleMenu();\n    }) \n    burgerBtn.addEventListener(\"click\", ()=> {\n        toggleMenu();\n    }) \n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (openMenu);\n\n//# sourceURL=webpack://pug/./src/js/components/openMenu.js?");

/***/ }),

/***/ "./src/js/components/openModalPage.js":
/*!********************************************!*\
  !*** ./src/js/components/openModalPage.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _falidation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./falidation */ \"./src/js/components/falidation.js\");\n\nfunction openModalPage() {\n    \nlet openBtn = document.getElementById(\"open-modal\");\nlet closeBtn = document.getElementById(\"modal__close-btn\");\n\nopenBtn.addEventListener(\"click\", () => {\n    openModal();\n})\n\ncloseBtn.addEventListener(\"click\", () => {\n    closeModal();\n})\n\nconst openModal = () => {\n    const modal = document.getElementById(\"modal-order\");\n    modal.classList.add(\"modal-order_open\");\n    document.body.classList.add(\"modal-open\");\n};\n\nconst closeModal = () => {\n    const modalOrder = document.getElementById(\"modal-order\");\n    document.body.classList.remove(\"modal-open\");\n    modalOrder.classList.remove(\"modal-order_open\");\n    resetState();\n};\n\n\nconst form = document.getElementById(\"modal-order-form\");\n\nconst resetState = () => {\n    form.reset();\n    _falidation__WEBPACK_IMPORTED_MODULE_0__.Validator.clearErrorsAll();\n}\n\n\nform.onsubmit = (e) => {\n    e.preventDefault();\n    _falidation__WEBPACK_IMPORTED_MODULE_0__.Validator.validate();\n    _falidation__WEBPACK_IMPORTED_MODULE_0__.Validator.setClearErrorsHandlers();\n};\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (openModalPage);\n\n\n//# sourceURL=webpack://pug/./src/js/components/openModalPage.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/main.scss */ \"./src/css/main.scss\");\n/* harmony import */ var _components_getLocation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/getLocation */ \"./src/js/components/getLocation.js\");\n/* harmony import */ var _components_openMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/openMenu */ \"./src/js/components/openMenu.js\");\n/* harmony import */ var _components_openModalPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/openModalPage */ \"./src/js/components/openModalPage.js\");\n\n\n\n\n(0,_components_openMenu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n;(0,_components_openModalPage__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\n;(0,_components_getLocation__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\nconst links = document.querySelectorAll('.price__item-btn')\nlinks.forEach(link => link.addEventListener('click', () => {\n  document.location.href = \"http://localhost:4000/training.html\";\n}))\n\n// const link_page = document.querySelector('.training__button')\n// link_page.addEventListener('click', () => {\n//   document.location.href = \"http://localhost:4000/price.html\";\n// })\n\n//# sourceURL=webpack://pug/./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;