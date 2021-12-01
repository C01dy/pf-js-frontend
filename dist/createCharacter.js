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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _services_api_characteristics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/api/characteristics */ \"./src/services/api/characteristics.js\");\n/* harmony import */ var _views__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views */ \"./src/views/index.js\");\n\n\n\nclass WizardFormController {\n  async getEntity(method, renderCb) {\n    const entities = await method();\n    const entityNames = entities.data.map(data => [(data === null || data === void 0 ? void 0 : data.name) || (data === null || data === void 0 ? void 0 : data.text) || (data === null || data === void 0 ? void 0 : data.url) || (data === null || data === void 0 ? void 0 : data.about), data.id]);\n    renderCb(entityNames);\n  }\n\n  getRaces() {\n    this.getEntity(_services_api_characteristics__WEBPACK_IMPORTED_MODULE_0__.getRaces, _views__WEBPACK_IMPORTED_MODULE_1__.renderRadioControlls);\n  }\n\n  getClasses() {\n    this.getEntity(_services_api_characteristics__WEBPACK_IMPORTED_MODULE_0__.getClass, _views__WEBPACK_IMPORTED_MODULE_1__.renderRadioControlls);\n  }\n\n  getSkills() {\n    this.getEntity(_services_api_characteristics__WEBPACK_IMPORTED_MODULE_0__.getSkills, _views__WEBPACK_IMPORTED_MODULE_1__.renderCheckboxControlls);\n  }\n\n  getHistory() {\n    this.getEntity(_services_api_characteristics__WEBPACK_IMPORTED_MODULE_0__.getHistory, _views__WEBPACK_IMPORTED_MODULE_1__.renderRadioControlls);\n  }\n\n  getFaces() {\n    this.getEntity(_services_api_characteristics__WEBPACK_IMPORTED_MODULE_0__.getFaces, _views__WEBPACK_IMPORTED_MODULE_1__.renderRadioControllsWithImages);\n  }\n\n  getClothes() {\n    this.getEntity(_services_api_characteristics__WEBPACK_IMPORTED_MODULE_0__.getClothes, _views__WEBPACK_IMPORTED_MODULE_1__.renderRadioControllsWithImages);\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WizardFormController);\n\n//# sourceURL=webpack://pf-js-fe/./src/controllers/wizardForm.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controllers_wizardForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers/wizardForm */ \"./src/controllers/wizardForm.js\");\n/* harmony import */ var _services_api_character__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/api/character */ \"./src/services/api/character.js\");\n/* harmony import */ var _services_api_characteristics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/api/characteristics */ \"./src/services/api/characteristics.js\");\n/* harmony import */ var _services_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/form */ \"./src/services/form/index.js\");\n/* harmony import */ var _services_localStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/localStorage */ \"./src/services/localStorage/index.js\");\n/* harmony import */ var _views__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views */ \"./src/views/index.js\");\n\n\n\n\n\n\nconst nextBtn = document.getElementById('go-next-btn');\nconst prevBtn = document.getElementById('go-prev-btn');\nconst nameInput = document.getElementById('name-input');\nconst wizardFormController = new _controllers_wizardForm__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nconst steps = ['race', 'class', 'skills', 'history', 'clothes', 'face'];\n\nconst handleWizardFormController = step => {\n  switch (steps[step]) {\n    case 'race':\n      wizardFormController.getRaces();\n      return;\n\n    case 'class':\n      wizardFormController.getClasses();\n      return;\n\n    case 'skills':\n      wizardFormController.getSkills();\n      return;\n\n    case 'history':\n      wizardFormController.getHistory();\n      return;\n\n    case 'face':\n      wizardFormController.getFaces();\n      return;\n\n    case 'clothes':\n      wizardFormController.getClothes();\n      return;\n  }\n};\n\nlet lastStepFromServer = 0;\nconst finalStep = steps.length - 1;\n\nconst firstRender = () => {\n  const currentCharacter = (0,_services_localStorage__WEBPACK_IMPORTED_MODULE_4__.readFromLocalStorage)('currentCharacter');\n\n  if (currentCharacter) {\n    (0,_services_api_character__WEBPACK_IMPORTED_MODULE_1__.getCharacter)(currentCharacter._id).then(character => {\n      lastStepFromServer = character.lastStep;\n\n      if (lastStepFromServer === finalStep) {\n        (0,_services_api_characteristics__WEBPACK_IMPORTED_MODULE_2__.getAllStats)(character).then(data => {\n          console.timeEnd(\"getAllStats ---\");\n          (0,_views__WEBPACK_IMPORTED_MODULE_5__.renderCharacterStats)(data);\n        });\n      } else {\n        handleWizardFormController(character.lastStep + 1);\n      }\n    });\n  }\n};\n\nfirstRender();\nprevBtn.addEventListener('click', e => {\n  e.preventDefault();\n  (0,_services_api_character__WEBPACK_IMPORTED_MODULE_1__.updateCharacter)((0,_services_localStorage__WEBPACK_IMPORTED_MODULE_4__.readFromLocalStorage)('currentCharacter')._id, {\n    lastStep: lastStepFromServer - 1\n  }).then(character => {\n    lastStepFromServer = character.lastStep;\n  }).then(() => {\n    handleWizardFormController(lastStepFromServer + 1);\n  });\n});\nnextBtn.addEventListener('click', e => {\n  e.preventDefault();\n\n  if ((0,_services_localStorage__WEBPACK_IMPORTED_MODULE_4__.readFromLocalStorage)('currentCharacter')) {\n    (0,_services_api_character__WEBPACK_IMPORTED_MODULE_1__.updateCharacter)((0,_services_localStorage__WEBPACK_IMPORTED_MODULE_4__.readFromLocalStorage)('currentCharacter')._id, {\n      lastStep: lastStepFromServer === finalStep ? lastStepFromServer : lastStepFromServer + 1,\n      [steps[lastStepFromServer + 1]]: (0,_services_form__WEBPACK_IMPORTED_MODULE_3__.collectDataFromForm)('character-form')\n    }).then(character => {\n      lastStepFromServer = character.lastStep;\n      return character;\n    }).then(() => {\n      if (lastStepFromServer === finalStep) {\n        (0,_services_api_characteristics__WEBPACK_IMPORTED_MODULE_2__.getAllStats)((0,_services_localStorage__WEBPACK_IMPORTED_MODULE_4__.readFromLocalStorage)('currentCharacter')._id).then(data => {\n          (0,_views__WEBPACK_IMPORTED_MODULE_5__.renderCharacterStats)(data);\n        });\n      } else {\n        handleWizardFormController(lastStepFromServer + 1);\n      }\n    });\n  } else {\n    (0,_services_api_character__WEBPACK_IMPORTED_MODULE_1__.createCharacter)({\n      name: nameInput.value,\n      lastStep: 0\n    }).then(({\n      _id,\n      lastStep\n    }) => {\n      (0,_services_localStorage__WEBPACK_IMPORTED_MODULE_4__.setToLocalStorage)('currentCharacter', {\n        _id\n      });\n      lastStepFromServer = lastStep;\n      wizardFormController.getRaces();\n    });\n  }\n});\n\n//# sourceURL=webpack://pf-js-fe/./src/index.js?");

/***/ }),

/***/ "./src/services/api/character.js":
/*!***************************************!*\
  !*** ./src/services/api/character.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createCharacter\": () => (/* binding */ createCharacter),\n/* harmony export */   \"updateCharacter\": () => (/* binding */ updateCharacter),\n/* harmony export */   \"getCharacter\": () => (/* binding */ getCharacter),\n/* harmony export */   \"getAllCharactersStats\": () => (/* binding */ getAllCharactersStats)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/services/api/index.js\");\n\n/**\n * @async\n * @param {object} character - object with character data\n * @returns {Promise<object>} Promise object represents the character with id and lastStep\n */\n\nconst createCharacter = async character => {\n  const characterUrl = (0,___WEBPACK_IMPORTED_MODULE_0__.buildUrl)('/character').href;\n  const data = await (0,___WEBPACK_IMPORTED_MODULE_0__.fetchApiRequset)(characterUrl, 'POST', character);\n  return data;\n};\n/**\n * @async\n * @param {string} id \n * @param {object} characterData - data to add to character\n * @returns {Promise<object>} Promise object represents the character with updated data\n */\n\nconst updateCharacter = async (id, characterData) => {\n  const characterUrl = (0,___WEBPACK_IMPORTED_MODULE_0__.buildUrl)('/character', '/', id).href;\n  const data = await (0,___WEBPACK_IMPORTED_MODULE_0__.fetchApiRequset)(characterUrl, 'PUT', characterData);\n  return data;\n};\n/**\n * @async\n * @param {string} id \n * @returns {Promise<object>} Promise object represents the character\n */\n\nconst getCharacter = async id => {\n  const characterUrl = (0,___WEBPACK_IMPORTED_MODULE_0__.buildUrl)('/character', '/', id).href;\n  const data = await (0,___WEBPACK_IMPORTED_MODULE_0__.fetchApiRequset)(characterUrl, 'GET');\n  return data;\n};\nconst getAllCharactersStats = async () => {\n  const characterUrl = (0,___WEBPACK_IMPORTED_MODULE_0__.buildUrl)('/character', '/info', '/many').href;\n  const data = await (0,___WEBPACK_IMPORTED_MODULE_0__.fetchApiRequset)(characterUrl, 'GET');\n  return data;\n};\n\n//# sourceURL=webpack://pf-js-fe/./src/services/api/character.js?");

/***/ }),

/***/ "./src/services/api/characteristics.js":
/*!*********************************************!*\
  !*** ./src/services/api/characteristics.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getRaces\": () => (/* binding */ getRaces),\n/* harmony export */   \"getClass\": () => (/* binding */ getClass),\n/* harmony export */   \"getSkills\": () => (/* binding */ getSkills),\n/* harmony export */   \"getHistory\": () => (/* binding */ getHistory),\n/* harmony export */   \"getFaces\": () => (/* binding */ getFaces),\n/* harmony export */   \"getClothes\": () => (/* binding */ getClothes),\n/* harmony export */   \"getAllStats\": () => (/* binding */ getAllStats),\n/* harmony export */   \"getAllStats1\": () => (/* binding */ getAllStats1)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/services/api/index.js\");\n\n\nconst fetchCharacterData = async (url, id = '') => {\n  const characterUrl = (0,___WEBPACK_IMPORTED_MODULE_0__.buildUrl)('/character', url, id).href;\n  const data = await (0,___WEBPACK_IMPORTED_MODULE_0__.fetchApiRequset)(characterUrl);\n  return data;\n};\n\nconst getRaces = async (id = '') => {\n  const races = await fetchCharacterData('/race/' + id);\n  return races;\n};\nconst getClass = async (id = '') => {\n  const personClass = await fetchCharacterData('/class/' + id);\n  return personClass;\n};\nconst getSkills = async (id = '') => {\n  const skills = await fetchCharacterData('/skills/' + id);\n  return skills;\n};\nconst getHistory = async (id = '') => {\n  const history = await fetchCharacterData('/history/' + id);\n  return history;\n};\nconst getFaces = async (id = '') => {\n  const faceImgUrls = await fetchCharacterData('/face/' + id);\n  return faceImgUrls;\n};\nconst getClothes = async (id = '') => {\n  const clothesImgUrls = await fetchCharacterData('/clothes/' + id);\n  return clothesImgUrls;\n};\nconst methods = {\n  'race': getRaces,\n  'class': getClass,\n  'skills': getSkills,\n  'history': getHistory,\n  'face': getFaces,\n  'clothes': getClothes\n};\nconst steps = ['race', 'class', 'skills', 'history', 'clothes', 'face'];\nconst getAllStats = character => {\n  const characterEntries = Object.entries(character).filter(el => {\n    return steps.includes(el[0]);\n  });\n  const statsPromises = characterEntries.map(([entryName, id]) => {\n    return methods[entryName](id);\n  });\n  return Promise.all(statsPromises);\n};\nconst getAllStats1 = async id => {\n  console.time(\"getAllStats aggregation\");\n  const characterInfo = await fetchCharacterData('/info/' + id);\n  console.timeEnd(\"getAllStats aggregation\");\n  return characterInfo;\n};\n\n//# sourceURL=webpack://pf-js-fe/./src/services/api/characteristics.js?");

/***/ }),

/***/ "./src/services/api/index.js":
/*!***********************************!*\
  !*** ./src/services/api/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buildUrl\": () => (/* binding */ buildUrl),\n/* harmony export */   \"fetchApiRequset\": () => (/* binding */ fetchApiRequset)\n/* harmony export */ });\nconst ROOT_URL = 'http://localhost:3000';\n/**\n * \n * @param  {...string} urls\n * @returns {string}\n */\n\nconst buildUrl = (...urls) => {\n  return new URL(urls.join(''), ROOT_URL);\n};\n/**\n * @async\n * @param {string} url \n * @param {string} method \n * @param {object} body \n * @param {object} headers \n * @returns {Promise}\n */\n\nconst fetchApiRequset = async (url, method = 'GET', body, headers = {}) => {\n  const res = await fetch(url, {\n    method,\n    headers: {\n      'Content-Type': 'application/json',\n      ...headers\n    },\n    body: JSON.stringify(body)\n  });\n  const data = await res.json();\n  return data;\n};\n\n//# sourceURL=webpack://pf-js-fe/./src/services/api/index.js?");

/***/ }),

/***/ "./src/services/form/index.js":
/*!************************************!*\
  !*** ./src/services/form/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"collectDataFromForm\": () => (/* binding */ collectDataFromForm)\n/* harmony export */ });\nconst collectDataFromForm = formId => {\n  const $controllsCollection = document.getElementById(formId).querySelectorAll('input');\n  const result = [...$controllsCollection].map(controll => {\n    if (controll.type === 'radio' || controll.type === 'checkbox') {\n      return controll.checked && controll.getAttribute('data-id');\n    }\n  }).filter(el => el);\n  return result.length === 1 ? result[0] : result;\n};\n\n//# sourceURL=webpack://pf-js-fe/./src/services/form/index.js?");

/***/ }),

/***/ "./src/services/localStorage/index.js":
/*!********************************************!*\
  !*** ./src/services/localStorage/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setToLocalStorage\": () => (/* binding */ setToLocalStorage),\n/* harmony export */   \"readFromLocalStorage\": () => (/* binding */ readFromLocalStorage)\n/* harmony export */ });\n/**\n * @description sets data to localStorage with specific key \n * @param {object} obj - object to set to localStorage\n * @param {string} key - key of object\n */\nconst setToLocalStorage = (key, obj) => {\n  const serializedObj = JSON.stringify(obj);\n  const localStorageData = localStorage.getItem(key);\n\n  if (localStorageData) {\n    localStorage.setItem(key, JSON.stringify({ ...JSON.parse(localStorageData),\n      ...obj\n    }));\n    return;\n  }\n\n  localStorage.setItem(key, serializedObj);\n};\n/**\n * @description reads data from localStorage for a specific key\n * @param {string} key \n * @returns {any}\n */\n\nconst readFromLocalStorage = key => {\n  return JSON.parse(localStorage.getItem(key));\n};\n\n//# sourceURL=webpack://pf-js-fe/./src/services/localStorage/index.js?");

/***/ }),

/***/ "./src/views/index.js":
/*!****************************!*\
  !*** ./src/views/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderRadioControlls\": () => (/* binding */ renderRadioControlls),\n/* harmony export */   \"renderRadioControllsWithImages\": () => (/* binding */ renderRadioControllsWithImages),\n/* harmony export */   \"renderCheckboxControlls\": () => (/* binding */ renderCheckboxControlls),\n/* harmony export */   \"renderCharacterStats\": () => (/* binding */ renderCharacterStats),\n/* harmony export */   \"renderNameControll\": () => (/* binding */ renderNameControll)\n/* harmony export */ });\nconst $insertFormRoot = document.getElementById('insert-root');\n/**\n * \n * @param {string} type - type of dom element\n * @param {Array<string>} items - Array includes item name for controlls\n */\n\nconst renderMultiplyControlls = (type, items, hasImage = false) => {\n  let $dom = document.createElement('div');\n  items.forEach(([name, id]) => {\n    let $pickerItem = document.createElement('div');\n    let $inputControll = document.createElement('input');\n    $inputControll.setAttribute('type', type);\n    $inputControll.setAttribute('data-id', id);\n    if (type === 'radio') $inputControll.setAttribute('name', 'radiobutton');\n    let $label = document.createElement('label');\n\n    if (hasImage) {\n      const $img = document.createElement('img');\n      $img.style.maxWidth = '150px';\n      $img.style.maxHeight = '150px';\n      $img.setAttribute('src', 'http://localhost:3000/' + name);\n      $label.append($img);\n    } else {\n      $label.innerText = name;\n    }\n\n    $pickerItem.append($inputControll);\n    $pickerItem.append($label);\n    $dom.append($pickerItem);\n  });\n  $insertFormRoot.innerHTML = '';\n  $insertFormRoot.append($dom);\n};\n\nconst renderRadioControlls = items => {\n  renderMultiplyControlls('radio', items);\n};\nconst renderRadioControllsWithImages = items => {\n  renderMultiplyControlls('radio', items, true);\n};\nconst renderCheckboxControlls = items => {\n  renderMultiplyControlls('checkbox', items);\n}; // TODO: fix\n\nconst renderCharacterStats = stats => {\n  const $dom = document.createElement('code'); // stats.forEach(stat => {\n  //     const entryValue = Object.entries(stat)[1][1]\n  //     const entryKey = Object.entries(stat)[1][0]\n  //     if (entryValue.includes('images')) {\n  //         const $img = document.createElement('img')\n  //         $img.setAttribute('src', 'http://localhost:3000/' + entryValue)\n  //         $dom.append($img)\n  //     } else {\n  //         const $entryNode = document.createElement('div')\n  //         $entryNode.innerText = entryKey + ': ' + entryValue \n  //         $dom.append($entryNode)\n  //     }\n  // })\n\n  $insertFormRoot.innerHTML = '';\n  $dom.innerHTML = JSON.stringify(stats);\n  $insertFormRoot.append($dom);\n};\nconst renderNameControll = () => {\n  let $dom = document.createElement('div');\n  const $input = document.createElement('input');\n  $dom.append($input);\n  $insertFormRoot.innerHTML = '';\n  $insertFormRoot.append($dom);\n};\n\n//# sourceURL=webpack://pf-js-fe/./src/views/index.js?");

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