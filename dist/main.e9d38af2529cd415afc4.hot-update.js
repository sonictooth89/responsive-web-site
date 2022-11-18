/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatemoveslider"]("main",{

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ (() => {

eval("const values = [\n    {name: 'Ananas', calories: 33, fat: 0, carbs: 11.8},\n    {name: 'Apple', calories: 57, fat: 0.7, carbs: 12.1},\n    {name: 'Orange', calories: 51, fat: 0.2, carbs: 11.3},\n    {name: 'Cherry', calories: 67, fat: 0.4, carbs: 14.6},\n];\n\nconst valuesContainer = document.querySelector('.app--values');\n\nconst desktopViewport = window.matchMedia(\"screen and (min-width: 500px)\");\n\nconst drawDesktopValues = () => {\n    valuesContainer.innerHTML = ''; // czyscimy zawartosc elementu\n    \n    let table = document.createElement('table');\n    let thead = document.createElement('thead');\n    thead.innerHTML = \"<tr> <th>Name</th><th>Calories</th><th>Fat</th><th>Carbs</th> </tr>\";\n\n    let tbody = document.createElement('tbody');\n\n    values.forEach(values => {\n        let row = document.createElement('tr');\n        row.innerHTML = `<td>${value.name}</td> <td>${value.calories}</td> <td>${value.fat}</td> <td>${value.carbs}</td>`;\n        tbody.appendChild(row)\n    })\n\n    table.appendChild(thead);\n    table.appendChild(tbody);\n\n    valuesContainer.appendChild(table);\n\n};\n\ndrawDesktopValues();\n\n//# sourceURL=webpack://moveslider/./js/main.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("72018935dc9baddab135")
/******/ })();
/******/ 
/******/ }
);