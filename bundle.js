/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/main.scss":
/*!***************************!*\
  !*** ./src/css/main.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/components/falidation.js":
/*!*****************************************!*\
  !*** ./src/js/components/falidation.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Validator": () => (/* binding */ Validator)
/* harmony export */ });
const Rule = Object.freeze({
    required: (value) => !value ? "поля обязательно*" : "",
});

const fields = {
    name: {
        elements: {
            input: document.getElementById("modal-order-input-name"),
            status: document.getElementById("modal-order-input-name-err")
        },
        rules: [Rule.required],
        errorText: ""
    },
    email: {
        elements: {
            input: document.getElementById("modal-order-input-email"),
            status: document.getElementById("modal-order-input-email-err")
        },
        rules: [Rule.required],
        errorText: ""
    },
    issueDescription: {
        elements: {
            input: document.getElementById("modal-order-text-issue"),
            status: document.getElementById("modal-order-text-issue-err")
        },
        rules: [Rule.required],
        errorText: ""
    }
};

const validateField = (fieldName) => {
    fields[fieldName].errorText = getErrorText(fieldName);
    renderError(fieldName);
};

const getErrorText = (fieldName) => {
    const rules = fields[fieldName].rules;
    const value = fields[fieldName].elements.input.value;

    let errorText = "";

    rules.some(rule => {
        errorText = rule(value);
        return errorText;
    });

    return errorText;
};

const renderError = (fieldName) => {
    const {status, input} = fields[fieldName].elements;
    const {errorText} = fields[fieldName];

    if (errorText)
        input.classList.add("input-field-error");
    else
        input.classList.remove("input-field-error");

    status.textContent = errorText;
};


const clearError = (fieldName) => {
    fields[fieldName].errorText = "";
    renderError(fieldName);
};




const Validator = {
    validate: () => {
        Object.keys(fields).forEach(field => validateField(field));
        return Object.values(fields).every(field => !field.errorText);
    },
    clearErrorsAll: () => {
        Object.keys(fields).forEach(fieldName => clearError(fieldName));
    },
    setClearErrorsHandlers: () => {
        Object.keys(fields)
            .forEach(fieldName => {
                const hndl = () => {
                    clearError(fieldName);
                };
                fields[fieldName].elements.input
                    .addEventListener("input", hndl);
            });
    },
};

/***/ }),

/***/ "./src/js/components/getLocation.js":
/*!******************************************!*\
  !*** ./src/js/components/getLocation.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function getLocation() {
  const links = document.querySelectorAll(".menu__link");

  links.forEach((element) => {
    console.log(window.location.href);
    if (element.href == window.location.href) {
      element.classList.add("menu__link--active");
    } else {
      element.classList.remove("menu__link--active");
    }
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLocation);



// function getLocation() {
//   const links = document.querySelectorAll(".menu__link");
//   links.forEach((element) => {
//     if (element.href == window.location.href) {
//       element.classList.add("menu__link--active");
//     }
//   });
// }

// export default getLocation;

/***/ }),

/***/ "./src/js/components/openMenu.js":
/*!***************************************!*\
  !*** ./src/js/components/openMenu.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function toggleMenu(){
    const menu=document.querySelector(".mobail-menu");
    const burgerBtn=document.querySelector('.burger');

    burgerBtn.classList.toggle("active");
    menu.classList.toggle("mobail-menu--active");
}
function openMenu() {
    const burgerBtn=document.querySelector('.burger');
    const closeMenu=document.querySelector(".mobail-menu__close");

    closeMenu.addEventListener("click", ()=> {
        toggleMenu();
    }) 
    burgerBtn.addEventListener("click", ()=> {
        toggleMenu();
    }) 
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (openMenu);

/***/ }),

/***/ "./src/js/components/openModalPage.js":
/*!********************************************!*\
  !*** ./src/js/components/openModalPage.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _falidation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./falidation */ "./src/js/components/falidation.js");

function openModalPage() {

    let openBtn = document.getElementById("open-modal");
    let closeBtn = document.getElementById("modal__close-btn");

    openBtn?.addEventListener("click", () => {
        openModal();
    })

    closeBtn?.addEventListener("click", () => {
        closeModal();
    })

    const openModal = () => {
        const modal = document.getElementById("modal-order");
        modal.classList.add("modal-order_open");
        document.body.classList.add("modal-open");
    };

    const closeModal = () => {
        const modalOrder = document.getElementById("modal-order");
        document.body.classList.remove("modal-open");
        modalOrder.classList.remove("modal-order_open");
        resetState();
    };


    const form = document.getElementById("modal-order-form");

    const resetState = () => {
        form.reset();
        _falidation__WEBPACK_IMPORTED_MODULE_0__.Validator.clearErrorsAll();
    }

    if (form) 
        form.onsubmit = (e) => {
            e.preventDefault();
            _falidation__WEBPACK_IMPORTED_MODULE_0__.Validator.validate();
            _falidation__WEBPACK_IMPORTED_MODULE_0__.Validator.setClearErrorsHandlers();
        };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (openModalPage);


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_css_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../src/css/main.scss */ "./src/css/main.scss");
/* harmony import */ var _src_js_components_getLocation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../src/js/components/getLocation */ "./src/js/components/getLocation.js");
/* harmony import */ var _src_js_components_openMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../src/js/components/openMenu */ "./src/js/components/openMenu.js");
/* harmony import */ var _src_js_components_openModalPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../src/js/components/openModalPage */ "./src/js/components/openModalPage.js");




(0,_src_js_components_openMenu__WEBPACK_IMPORTED_MODULE_2__["default"])()
;(0,_src_js_components_openModalPage__WEBPACK_IMPORTED_MODULE_3__["default"])()
;(0,_src_js_components_getLocation__WEBPACK_IMPORTED_MODULE_1__["default"])()
const links = document.querySelectorAll('.price__item-btn')
links.forEach(link => link.addEventListener('click', () => {
  document.location.href = "http://localhost:4000/training.html";
}))

// const link_page = document.querySelector('.training__button')
// link_page.addEventListener('click', () => {
//   document.location.href = "http://localhost:4000/price.html";
// })
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map