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

eval("const values = [\n    {name: 'Ananas', calories: 33, fat: 0, carbs: 11.8},\n    {name: 'Apple', calories: 57, fat: 0.7, carbs: 12.1},\n    {name: 'Orange', calories: 51, fat: 0.2, carbs: 11.3},\n    {name: 'Cherry', calories: 67, fat: 0.4, carbs: 14.6},\n];\n\nconst valuesContainer = document.querySelector('.app--values');\n\nconst desktopViewport = window.matchMedia('screen and (min-width: 500px)');\n\nconst drawValues = (isDesktop) => {\n    if (isDesktop) {\n        drawDesktopValues();\n    } else {\n        drawMobileValues();\n    }\n}\n\nconst drawMobileValues = () => {\n    valuesContainer.innerHTML = '';\n    \n    let list = document.createElement('ul');\n\n    values.forEach(value => {\n        let element = document.createElement('li');\n\n        let name = document.createElement('div');\n        name.innerHTML = `<strong>Name: </strong>${value.name}`;\n       \n        let calories = document.createElement('div');\n        calories.innerHTML = `<strong>Calories: </strong>${value.calories}`;\n        \n        let fat = document.createElement('div');\n        fat.innerHTML = `<strong>Fat: </strong>${value.fat}`;\n        \n        let carbs = document.createElement('div');\n        carbs.innerHTML = `<strong>Carbs: </strong>${value.carbs}`;\n\n        element.appendChild(name);\n        element.appendChild(calories);\n        element.appendChild(fat);\n        element.appendChild(carbs);\n\n        list.appendChild(element);\n    })\n\n    valuesContainer.appendChild(list)\n}\n\nconst drawDesktopValues = () => {\n    valuesContainer.innerHTML = ''; // czyscimy zawartosc elementu\n    \n    let table = document.createElement('table');\n    let thead = document.createElement('thead');\n    thead.innerHTML = \"<tr> <th>Name</th><th>Calories</th><th>Fat</th><th>Carbs</th> </tr>\";\n\n    let tbody = document.createElement('tbody');\n\n    values.forEach(value => {\n        let row = document.createElement('tr');\n        row.innerHTML = `<td>${value.name}</td> <td>${value.calories}</td> <td>${value.fat}</td> <td>${value.carbs}</td>`;\n        tbody.appendChild(row);\n    });\n\n    table.appendChild(thead);\n    table.appendChild(tbody);\n\n    valuesContainer.appendChild(table);\n\n};\n\ndrawValues(desktopViewport.matches);\n\n//# sourceURL=webpack://moveslider/./js/main.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9e52a42a883bfcb3596b")
/******/ })();
/******/ 
/******/ }
);