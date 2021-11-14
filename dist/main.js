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

/***/ "./src/controllers/wizardForm.js":
/*!***************************************!*\
  !*** ./src/controllers/wizardForm.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _services_api_characteristics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/api/characteristics */ \"./src/services/api/characteristics.js\");\n/* harmony import */ var _services_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/render */ \"./src/services/render/index.js\");\nlet currentStep = 0;\n\n\n\nclass WizardFormController {\n  constructor(currentStep) {\n    this.currentStep = currentStep;\n  }\n\n  async getEntity(method, renderCb) {\n    const entities = await method();\n    const entityNames = entities.data.map(({\n      name\n    }) => name);\n    renderCb(entityNames);\n  }\n\n  getRaces() {\n    this.getEntity(_services_api_characteristics__WEBPACK_IMPORTED_MODULE_0__.getRaces, _services_render__WEBPACK_IMPORTED_MODULE_1__.renderRadioControlls);\n  }\n\n  getClasses() {\n    this.getEntity(_services_api_characteristics__WEBPACK_IMPORTED_MODULE_0__.getClass, _services_render__WEBPACK_IMPORTED_MODULE_1__.renderRadioControlls);\n  }\n\n  getSkills() {\n    this.getEntity(_services_api_characteristics__WEBPACK_IMPORTED_MODULE_0__.getSkills, _services_render__WEBPACK_IMPORTED_MODULE_1__.renderCheckboxControlls);\n  }\n\n  getHistory() {\n    this.getEntity(_services_api_characteristics__WEBPACK_IMPORTED_MODULE_0__.getHistory, _services_render__WEBPACK_IMPORTED_MODULE_1__.renderRadioControlls);\n  }\n\n  getFaces() {\n    this.getEntity(_services_api_characteristics__WEBPACK_IMPORTED_MODULE_0__.getFaces, _services_render__WEBPACK_IMPORTED_MODULE_1__.renderRadioControlls);\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WizardFormController);\n\n//# sourceURL=webpack://pf-js-fe/./src/controllers/wizardForm.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controllers_wizardForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers/wizardForm */ \"./src/controllers/wizardForm.js\");\n/* harmony import */ var _services_api_character__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/api/character */ \"./src/services/api/character.js\");\n/* harmony import */ var _services_api_characteristics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/api/characteristics */ \"./src/services/api/characteristics.js\");\n/* harmony import */ var _services_localStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/localStorage */ \"./src/services/localStorage/index.js\");\n/* harmony import */ var _services_render__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/render */ \"./src/services/render/index.js\");\n\n\n\n\n\nconst nextBtn = document.getElementById('go-next-btn');\nconst prevBtn = document.getElementById('go-prev-btn');\nconst wizardFormController = new _controllers_wizardForm__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nconsole.log((0,_services_api_character__WEBPACK_IMPORTED_MODULE_1__.getCharacter)((0,_services_localStorage__WEBPACK_IMPORTED_MODULE_3__.readFromLS)('currentCharacter').id)); // const stepsHandler = {\n//     race: () => {\n//         getRaces().then(races => {\n//             const raceNames = races.data.map(({ name }) => name)\n//             renderRadioControlls(raceNames)\n//         })\n//     },\n//     class: () => {\n//         getClass().then(characterClass => {\n//             const characterClassNames = characterClass.data.map(({ name }) => name)\n//             renderRadioControlls(characterClassNames)\n//         })\n//     },\n//     clothes: getClothes,\n//     face: getFaces,\n//     history: getHistory,\n//     skills: getSkills\n// }\n// const state = new Proxy({\n//     currentStep: 0,\n//     steps: ['name', 'race', 'class']\n// }, {\n//     set: function(obj, prop, value) {\n//         if (prop === 'currentStep') {\n//             // console.log(stepsHandler[obj.steps[value]])\n//            stepsHandler[obj.steps[value + 1]]()\n//             // stepsHandler[obj.steps[value]]() \n//         }\n//     }\n// })\n// window.state = state\n// document.addEventListener('DOMContentLoaded', () => {\n//     const character = readFromLS('currentCharacter');\n//     if (character) {\n//         getCharacter(character.id).then(({ lastStep }) => {\n//             const currentStepIdx = state.steps.findIndex(value => value === lastStep) + 1;\n//             stepsHandler[state.steps[currentStepIdx]]()\n//         })\n//     } else {\n//         renderNameControll()\n//     }\n// })\n// nextBtn.addEventListener('click', (e) => {\n//     e.preventDefault()\n//         // createCharacter({\n//         //     name: nameInput.value\n//         // }).then(({ id }) => {\n//         //     setToLS({ id }, 'currentCharacter')\n//         // })\n//         switch (state.steps[currentStep]) {\n//             case 'race':\n//                 updateCharacter(readFromLS('currentCharacter').id, {\n//                 })\n//         }\n//         state.currentStep += 1\n// })\n// prevBtn.addEventListener('click', (e) => {\n//     e.preventDefault()\n//     state.currentStep -= 1\n// })\n\n//# sourceURL=webpack://pf-js-fe/./src/index.js?");

/***/ }),

/***/ "./src/services/api/character.js":
/*!***************************************!*\
  !*** ./src/services/api/character.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createCharacter\": () => (/* binding */ createCharacter),\n/* harmony export */   \"updateCharacter\": () => (/* binding */ updateCharacter),\n/* harmony export */   \"getCharacter\": () => (/* binding */ getCharacter)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/services/api/index.js\");\n\nconst createCharacter = async character => {\n  const characterUrl = (0,___WEBPACK_IMPORTED_MODULE_0__.buildUrl)('/character').href;\n  const data = await (0,___WEBPACK_IMPORTED_MODULE_0__.fetchApiRequset)(characterUrl, 'POST', character);\n  return data;\n};\nconst updateCharacter = async (id, characterData) => {\n  const characterUrl = (0,___WEBPACK_IMPORTED_MODULE_0__.buildUrl)('/character', '/', id).href;\n  const data = await (0,___WEBPACK_IMPORTED_MODULE_0__.fetchApiRequset)(characterUrl, 'PUT', characterData);\n  return data;\n};\nconst getCharacter = async id => {\n  const characterUrl = (0,___WEBPACK_IMPORTED_MODULE_0__.buildUrl)('/character', '/', id).href;\n  const data = await (0,___WEBPACK_IMPORTED_MODULE_0__.fetchApiRequset)(characterUrl, 'GET');\n  return data;\n};\n\n//# sourceURL=webpack://pf-js-fe/./src/services/api/character.js?");

/***/ }),

/***/ "./src/services/api/characteristics.js":
/*!*********************************************!*\
  !*** ./src/services/api/characteristics.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getRaces\": () => (/* binding */ getRaces),\n/* harmony export */   \"getClass\": () => (/* binding */ getClass),\n/* harmony export */   \"getSkills\": () => (/* binding */ getSkills),\n/* harmony export */   \"getHistory\": () => (/* binding */ getHistory),\n/* harmony export */   \"getFaces\": () => (/* binding */ getFaces),\n/* harmony export */   \"getClothes\": () => (/* binding */ getClothes)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/services/api/index.js\");\n\n\nconst fetchCharacterData = async url => {\n  const characterUrl = (0,___WEBPACK_IMPORTED_MODULE_0__.buildUrl)('/character', url).href;\n  const data = await (0,___WEBPACK_IMPORTED_MODULE_0__.fetchApiRequset)(characterUrl);\n  return data;\n};\n\nconst getRaces = async () => {\n  const races = await fetchCharacterData('/race');\n  return races;\n};\nconst getClass = async () => {\n  const personClass = await fetchCharacterData('/class');\n  return personClass;\n};\nconst getSkills = async () => {\n  const skills = await fetchCharacterData('/skills');\n  return skills;\n};\nconst getHistory = async () => {\n  const history = await fetchCharacterData('/history');\n  return history;\n};\nconst getFaces = async () => {\n  const faceImgUrls = await fetchCharacterData('/face');\n  return faceImgUrls;\n};\nconst getClothes = async () => {\n  const clothesImgUrls = await fetchCharacterData('/clothes');\n  return clothesImgUrls;\n};\n\n//# sourceURL=webpack://pf-js-fe/./src/services/api/characteristics.js?");

/***/ }),

/***/ "./src/services/api/index.js":
/*!***********************************!*\
  !*** ./src/services/api/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buildUrl\": () => (/* binding */ buildUrl),\n/* harmony export */   \"fetchApiRequset\": () => (/* binding */ fetchApiRequset)\n/* harmony export */ });\nconst ROOT_URL = 'http://localhost:3000';\nconst buildUrl = (...urls) => {\n  return new URL(urls.join(''), ROOT_URL);\n};\nconst fetchApiRequset = async (url, method = 'GET', body, headers = {}) => {\n  const res = await fetch(url, {\n    method,\n    headers: {\n      'Content-Type': 'application/json',\n      ...headers\n    },\n    body: JSON.stringify(body)\n  });\n  const data = await res.json();\n  return data;\n};\n\n//# sourceURL=webpack://pf-js-fe/./src/services/api/index.js?");

/***/ }),

/***/ "./src/services/localStorage/index.js":
/*!********************************************!*\
  !*** ./src/services/localStorage/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setToLS\": () => (/* binding */ setToLS),\n/* harmony export */   \"readFromLS\": () => (/* binding */ readFromLS)\n/* harmony export */ });\nconst setToLS = (obj, key) => {\n  const serializedObj = JSON.stringify(obj);\n  const localStorageData = localStorage.getItem(key);\n\n  if (localStorageData) {\n    localStorage.setItem(key, JSON.stringify({ ...JSON.parse(localStorageData),\n      ...obj\n    }));\n    return;\n  }\n\n  localStorage.setItem(key, serializedObj);\n};\nconst readFromLS = key => {\n  return JSON.parse(localStorage.getItem(key)) || {};\n};\n\n//# sourceURL=webpack://pf-js-fe/./src/services/localStorage/index.js?");

/***/ }),

/***/ "./src/services/render/index.js":
/*!**************************************!*\
  !*** ./src/services/render/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderRadioControlls\": () => (/* binding */ renderRadioControlls),\n/* harmony export */   \"renderCheckboxControlls\": () => (/* binding */ renderCheckboxControlls),\n/* harmony export */   \"renderNameControll\": () => (/* binding */ renderNameControll)\n/* harmony export */ });\nconst $insertFormRoot = document.getElementById('insert-root');\n\nconst renderMultiplyControlls = (type, items) => {\n  let $dom = document.createElement('div');\n  items.forEach(item => {\n    let $pickerItem = document.createElement('div');\n    let $inputControll = document.createElement('input');\n    $inputControll.setAttribute('type', type);\n    let $label = document.createElement('label');\n    $label.innerText = item;\n    $pickerItem.append($inputControll);\n    $pickerItem.append($label);\n    $dom.append($pickerItem);\n  });\n  $insertFormRoot.innerHTML = '';\n  $insertFormRoot.append($dom);\n};\n\nconst renderRadioControlls = items => {\n  renderMultiplyControlls('radio', items);\n};\nconst renderCheckboxControlls = items => {\n  renderMultiplyControlls('checkbox', items);\n};\nconst renderNameControll = () => {\n  let $dom = document.createElement('div');\n  const $input = document.createElement('input');\n  $dom.append($input);\n  $insertFormRoot.innerHTML = '';\n  $insertFormRoot.append($dom);\n};\n\n//# sourceURL=webpack://pf-js-fe/./src/services/render/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;