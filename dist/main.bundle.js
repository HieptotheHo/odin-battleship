/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/gameBoard.js":
/*!**************************!*\
  !*** ./src/gameBoard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");

const createGameBoard = (width, height) => {
  const ships = [];
  const board = [];
  for (let i = 0; i < height; i++) {
    board[i] = [];
    for (let j = 0; j < width; j++) {
      board[i][j] = null;
    }
  }
  ships.push((0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(1));
  ships.push((0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(1));
  ships.push((0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(1));
  ships.push((0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(1));
  ships.push((0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(2));
  ships.push((0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(2));
  ships.push((0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(2));
  ships.push((0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(3));
  ships.push((0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(3));
  ships.push((0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(4));
  function allSunk() {
    return ships.every(ship => ship.isSunk());
  }
  function getLocations() {
    return board;
  }
  function getShips() {
    return ships;
  }
  function printBoard() {
    const displayBoard = [];
    for (let i = 0; i < height; i++) {
      displayBoard[i] = [];
      for (let j = 0; j < width; j++) {
        displayBoard[i][j] = " ";
      }
    }
    ships.forEach((ship, index) => {
      ship.locations.forEach(location => {
        const x = location[0];
        const y = location[1];
        displayBoard[x][y] = index;
      });
    });
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        console.log("|", displayBoard[i][j]);
      }
      console.log("|\n");
    }
  }
  function receiveAttack(x, y) {
    if (board[x][y] !== null) {
      if (board[x][y] === "missed") return false;
      board[x][y].hit();
      return true;
    }
    board[x][y] = "missed";
    return false;
  }
  function checkCollision(x, y, direction, length) {
    let shipX = x;
    let shipY = y;
    for (let i = 0; i < length; i++) {
      if (shipX < 0 || shipY < 0 || shipX >= width || shipY >= height) return true;
      if (board[shipX][shipY] !== null) return true;
      shipX += direction[0];
      shipY += direction[1];
    }
    return false;
  }
  // DIRECTION:
  // NORTH: Y-1 [0,-1]
  // EAST: X+1 [1,0]
  // SOUT < 0
  // WEST: X-1 [-1,0]
  function placeShip(x, y, direction, ship) {
    let shipX = x;
    let shipY = y;
    if (checkCollision(x, y, direction, ship.length)) return -1;
    ship.getDirection().x = direction[0];
    ship.getDirection().y = direction[1];
    for (let i = 0; i < ship.length; i++) {
      board[shipX][shipY] = ship;
      ship.getLocations().push([shipX, shipY]);
      shipX += direction[0];
      shipY += direction[1];
    }
  }
  return {
    allSunk,
    receiveAttack,
    placeShip,
    getLocations,
    getShips,
    printBoard
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createGameBoard);

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createShip = length => {
  let hitTimes = 0;
  let sunk = false;
  const hit = () => {
    hitTimes += 1;
    if (hitTimes === length) sunk = true;
  };
  const isSunk = () => sunk;
  const direction = {};
  const locations = [];
  const getHitTimes = () => hitTimes;
  const getDirection = () => direction;
  const getLocations = () => locations;
  return {
    length,
    getDirection,
    getHitTimes,
    getLocations,
    hit,
    isSunk
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createShip);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/gunplay.otf */ "./src/assets/fonts/gunplay.otf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@font-face {
  font-family: "Gunplay";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

h1 {
  /* background-color: red; */
  font-family: Gunplay;
  /* color: blue; */
  text-align: center;
  font-size: 4em;
  padding: 1rem;
}
main {
  display: flex;
  justify-content: space-around;
  padding: 2em;
}
.board {
  width: 627px;
  height: 627px;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);

  background-color: rgb(222, 222, 240);
  gap: 3px;
  border: 3px solid rgb(222, 222, 240);
}
.tile {
  width: 100%;
  height: 100%;
  /* border: 3px solid rgb(222, 222, 240); */
  background-color: rgb(128, 172, 236);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.turn > .tile:hover {
  background-color: rgb(87, 116, 158);
}

.hit {
  border: 3px solid red;
}

.mark > .first {
  height: 50px;
  width: 2px;
  background-color: red;
  border-radius: 50%;
  transform: rotate(45deg);
  position: absolute;
  overflow: hidden;
}

.mark > .second {
  height: 50px;
  width: 2px;
  background-color: red;
  border-radius: 50%;
  transform: rotate(-45deg);
  /* position: absolute; */
  overflow: hidden;
}

.missed {
  background-color: gray;
}

.cover {
  position: absolute;
  height: 621px;
  width: 621px;
  background-color: aqua;
  opacity: 45%;
}

dialog {
  margin: 0 auto;
  top: 30%;
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
}

button {
  width: 30%;
  height: 30px;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;EACtB,4CAAoC;AACtC;;AAEA;EACE,2BAA2B;EAC3B,oBAAoB;EACpB,iBAAiB;EACjB,kBAAkB;EAClB,cAAc;EACd,aAAa;AACf;AACA;EACE,aAAa;EACb,6BAA6B;EAC7B,YAAY;AACd;AACA;EACE,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,aAAa;EACb,sCAAsC;EACtC,mCAAmC;;EAEnC,oCAAoC;EACpC,QAAQ;EACR,oCAAoC;AACtC;AACA;EACE,WAAW;EACX,YAAY;EACZ,0CAA0C;EAC1C,oCAAoC;EACpC,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,YAAY;EACZ,UAAU;EACV,qBAAqB;EACrB,kBAAkB;EAClB,wBAAwB;EACxB,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,UAAU;EACV,qBAAqB;EACrB,kBAAkB;EAClB,yBAAyB;EACzB,wBAAwB;EACxB,gBAAgB;AAClB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,YAAY;EACZ,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,cAAc;EACd,QAAQ;EACR,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,UAAU;EACV,YAAY;AACd","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n@font-face {\n  font-family: \"Gunplay\";\n  src: url(./assets/fonts/gunplay.otf);\n}\n\nh1 {\n  /* background-color: red; */\n  font-family: Gunplay;\n  /* color: blue; */\n  text-align: center;\n  font-size: 4em;\n  padding: 1rem;\n}\nmain {\n  display: flex;\n  justify-content: space-around;\n  padding: 2em;\n}\n.board {\n  width: 627px;\n  height: 627px;\n  overflow: hidden;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n\n  background-color: rgb(222, 222, 240);\n  gap: 3px;\n  border: 3px solid rgb(222, 222, 240);\n}\n.tile {\n  width: 100%;\n  height: 100%;\n  /* border: 3px solid rgb(222, 222, 240); */\n  background-color: rgb(128, 172, 236);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n\n.turn > .tile:hover {\n  background-color: rgb(87, 116, 158);\n}\n\n.hit {\n  border: 3px solid red;\n}\n\n.mark > .first {\n  height: 50px;\n  width: 2px;\n  background-color: red;\n  border-radius: 50%;\n  transform: rotate(45deg);\n  position: absolute;\n  overflow: hidden;\n}\n\n.mark > .second {\n  height: 50px;\n  width: 2px;\n  background-color: red;\n  border-radius: 50%;\n  transform: rotate(-45deg);\n  /* position: absolute; */\n  overflow: hidden;\n}\n\n.missed {\n  background-color: gray;\n}\n\n.cover {\n  position: absolute;\n  height: 621px;\n  width: 621px;\n  background-color: aqua;\n  opacity: 45%;\n}\n\ndialog {\n  margin: 0 auto;\n  top: 30%;\n  padding: 1em;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nbutton {\n  width: 30%;\n  height: 30px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/fonts/gunplay.otf":
/*!**************************************!*\
  !*** ./src/assets/fonts/gunplay.otf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d3cdcf2b401093bf176c.otf";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _gameBoard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameBoard.js */ "./src/gameBoard.js");


const WIDTH = 10;
const HEIGHT = 10;
const GameController = () => {
  const playerBoard = (0,_gameBoard_js__WEBPACK_IMPORTED_MODULE_1__["default"])(WIDTH, HEIGHT);
  const computerBoard = (0,_gameBoard_js__WEBPACK_IMPORTED_MODULE_1__["default"])(WIDTH, HEIGHT);
  let turn = 1;
  let currentPlayer = playerBoard;
  let opponentPlayer = computerBoard;
  const randomPlacement = board => {
    board.getShips().forEach(ship => {
      let DIRECTIONS = [[0, -1], [1, 0], [0, 1], [-1, 0]];
      let x = Math.floor(Math.random() * 10);
      let y = Math.floor(Math.random() * 10);
      while (true) {
        let index = Math.floor(Math.random() * DIRECTIONS.length);
        let direction = DIRECTIONS[index];
        DIRECTIONS.splice(index, 1);
        if (board.placeShip(x, y, direction, ship) === -1) {
          index = Math.floor(Math.random() * DIRECTIONS.length);
          direction = DIRECTIONS[index];
        } else {
          break;
        }
        if (DIRECTIONS.length === 0) {
          x = Math.floor(Math.random() * 10);
          y = Math.floor(Math.random() * 10);
          DIRECTIONS = [[0, -1], [1, 0], [0, 1], [-1, 0]];
        }
      }
    });
  };
  randomPlacement(playerBoard);
  randomPlacement(computerBoard);
  const getTurn = () => turn;
  const getCurrentPlayer = () => currentPlayer;
  const getOpponentPlayer = () => opponentPlayer;
  const getPlayer1 = () => playerBoard;
  const getPlayer2 = () => computerBoard;
  const switchPlayerTurn = () => {
    turn = turn === 1 ? 2 : 1;
    if (turn === 1) {
      currentPlayer = playerBoard;
      opponentPlayer = computerBoard;
    } else {
      currentPlayer = computerBoard;
      opponentPlayer = playerBoard;
    }
  };
  const playRound = (x, y) => opponentPlayer.receiveAttack(x, y);
  const checkWin = () => {
    if (getPlayer1().allSunk()) return 2;
    if (getPlayer2().allSunk()) return 1;
    return 0;
  };
  return {
    getTurn,
    getCurrentPlayer,
    getOpponentPlayer,
    playRound,
    getPlayer1,
    getPlayer2,
    switchPlayerTurn,
    checkWin
  };
};
const UIController = () => {
  const gameController = GameController();
  const playerBoardDOM = document.querySelector(".player1.board");
  const computerBoardDOM = document.querySelector(".player2.board");
  const player1Cover = document.querySelector(".player1 > .cover");
  const player2Cover = document.querySelector(".player2 > .cover");
  const start = false;
  const modal = document.querySelector("dialog");
  // modal.showModal();
  const button = document.querySelector("button");
  button.addEventListener("click", e => {
    console.log("hi");
    modal.close();
  });
  const attack = e => {
    const x = e.target.dataset.location.split("-")[0];
    const y = e.target.dataset.location.split("-")[1];
    e.target.classList.add("shot");
    if (gameController.playRound(x, y)) {
      e.target.classList.add("hit");
      // e.target.innerHTML = '<p style="font-size: 30px; color:red;">X</p>';
      e.target.innerHTML = '<div class="mark"><div class= "first"></div><div class="second"></div></div>';
      return true;
    }
    e.target.style.backgroundColor = "gray";
    return false;
  };

  // const computerTiles = [];
  // SET UP TILES for both
  for (let i = 0; i < HEIGHT; i++) {
    for (let j = 0; j < WIDTH; j++) {
      const playerTileDOM = document.createElement("div");
      playerTileDOM.classList.add("tile");
      playerTileDOM.setAttribute("data-location", `${i}-${j}`);
      playerTileDOM.addEventListener("click", e => {
        if (!e.target.classList.contains("shot") && e.target.classList.contains("tile")) if (gameController.getTurn() === 2) {
          if (attack(e)) {
            console.log(gameController.checkWin());
          } else {
            player2Cover.style.visibility = "hidden";
            player1Cover.style.visibility = "visible";
            gameController.switchPlayerTurn();
          }
        }
      });
      const computerTileDOM = document.createElement("div");
      computerTileDOM.classList.add("tile");
      computerTileDOM.setAttribute("data-location", `${i}-${j}`);
      computerTileDOM.addEventListener("click", e => {
        if (!e.target.classList.contains("shot") && e.target.classList.contains("tile")) if (gameController.getTurn() === 1) {
          // if(e.classList.contains())
          if (attack(e)) {
            console.log(gameController.checkWin());
          } else {
            player1Cover.style.visibility = "hidden";
            player2Cover.style.visibility = "visible";
            gameController.switchPlayerTurn();
          }
        }
      });
      playerBoardDOM.appendChild(playerTileDOM);
      // computerTileDOM.addEventListener('click'computerBoardDOM.)
      computerBoardDOM.appendChild(computerTileDOM);
    }
  }
  const displayShips = (board, side) => {
    const colors = ["orange", "yellow", "red", "green", "black", "blue", "yellowgreen", "violet", "cyan", "pink"];
    let sideSelector = "";
    if (side === 1) {
      sideSelector = "player1";
    } else sideSelector = "player2";
    board.getShips().forEach(ship => {
      const indexColor = Math.floor(Math.random() * colors.length);
      ship.getLocations().forEach(location => {
        const x = location[0];
        const y = location[1];
        const tile = document.querySelector(`.${sideSelector} > .tile[data-location="${x}-${y}"]`);
        tile.style.backgroundColor = colors[indexColor];
      });
      colors.splice(indexColor, 1);
    });
  };
  displayShips(gameController.getPlayer1(), 1);
  displayShips(gameController.getPlayer2(), 2);
};
UIController();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNkRSxZQUFZLEdBQUcsU0FBUztJQUMxQixDQUFDLE1BQU1BLFlBQVksR0FBRyxTQUFTO0lBQy9CdkYsS0FBSyxDQUFDUyxRQUFRLENBQUMsQ0FBQyxDQUFDRyxPQUFPLENBQUVOLElBQUksSUFBSztNQUNqQyxNQUFNa0YsVUFBVSxHQUFHOUMsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxDQUFDLENBQUMsR0FBRzBDLE1BQU0sQ0FBQzlELE1BQU0sQ0FBQztNQUM1RGxCLElBQUksQ0FBQ0UsWUFBWSxDQUFDLENBQUMsQ0FBQ0ksT0FBTyxDQUFFRyxRQUFRLElBQUs7UUFDeEMsTUFBTUMsQ0FBQyxHQUFHRCxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLE1BQU1FLENBQUMsR0FBR0YsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUVyQixNQUFNMEUsSUFBSSxHQUFHaEMsUUFBUSxDQUFDQyxhQUFhLENBQ2hDLElBQUc2QixZQUFhLDJCQUEwQnZFLENBQUUsSUFBR0MsQ0FBRSxJQUNwRCxDQUFDO1FBQ0R3RSxJQUFJLENBQUNkLEtBQUssQ0FBQ0MsZUFBZSxHQUFHVSxNQUFNLENBQUNFLFVBQVUsQ0FBQztNQUNqRCxDQUFDLENBQUM7TUFDRkYsTUFBTSxDQUFDekMsTUFBTSxDQUFDMkMsVUFBVSxFQUFFLENBQUMsQ0FBQztJQUM5QixDQUFDLENBQUM7RUFDSixDQUFDO0VBQ0RKLFlBQVksQ0FBQzdCLGNBQWMsQ0FBQ04sVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDNUNtQyxZQUFZLENBQUM3QixjQUFjLENBQUNMLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzlDLENBQUM7QUFFREksWUFBWSxDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlMi8uL3NyYy9nYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUyLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUyLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZTIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RlbXBsYXRlMi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUyLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RlbXBsYXRlMi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZTIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RlbXBsYXRlMi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZTIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RlbXBsYXRlMi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90ZW1wbGF0ZTIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RlbXBsYXRlMi93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RlbXBsYXRlMi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RlbXBsYXRlMi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RlbXBsYXRlMi93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90ZW1wbGF0ZTIvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdGVtcGxhdGUyL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90ZW1wbGF0ZTIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyZWF0ZVNoaXAgZnJvbSBcIi4vc2hpcFwiO1xuXG5jb25zdCBjcmVhdGVHYW1lQm9hcmQgPSAod2lkdGgsIGhlaWdodCkgPT4ge1xuICBjb25zdCBzaGlwcyA9IFtdO1xuXG4gIGNvbnN0IGJvYXJkID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaGVpZ2h0OyBpKyspIHtcbiAgICBib2FyZFtpXSA9IFtdO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgd2lkdGg7IGorKykge1xuICAgICAgYm9hcmRbaV1bal0gPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHNoaXBzLnB1c2goY3JlYXRlU2hpcCgxKSk7XG4gIHNoaXBzLnB1c2goY3JlYXRlU2hpcCgxKSk7XG4gIHNoaXBzLnB1c2goY3JlYXRlU2hpcCgxKSk7XG4gIHNoaXBzLnB1c2goY3JlYXRlU2hpcCgxKSk7XG5cbiAgc2hpcHMucHVzaChjcmVhdGVTaGlwKDIpKTtcbiAgc2hpcHMucHVzaChjcmVhdGVTaGlwKDIpKTtcbiAgc2hpcHMucHVzaChjcmVhdGVTaGlwKDIpKTtcblxuICBzaGlwcy5wdXNoKGNyZWF0ZVNoaXAoMykpO1xuICBzaGlwcy5wdXNoKGNyZWF0ZVNoaXAoMykpO1xuXG4gIHNoaXBzLnB1c2goY3JlYXRlU2hpcCg0KSk7XG5cbiAgZnVuY3Rpb24gYWxsU3VuaygpIHtcbiAgICByZXR1cm4gc2hpcHMuZXZlcnkoKHNoaXApID0+IHNoaXAuaXNTdW5rKCkpO1xuICB9XG4gIGZ1bmN0aW9uIGdldExvY2F0aW9ucygpIHtcbiAgICByZXR1cm4gYm9hcmQ7XG4gIH1cbiAgZnVuY3Rpb24gZ2V0U2hpcHMoKSB7XG4gICAgcmV0dXJuIHNoaXBzO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJpbnRCb2FyZCgpIHtcbiAgICBjb25zdCBkaXNwbGF5Qm9hcmQgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhlaWdodDsgaSsrKSB7XG4gICAgICBkaXNwbGF5Qm9hcmRbaV0gPSBbXTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgd2lkdGg7IGorKykge1xuICAgICAgICBkaXNwbGF5Qm9hcmRbaV1bal0gPSBcIiBcIjtcbiAgICAgIH1cbiAgICB9XG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcCwgaW5kZXgpID0+IHtcbiAgICAgIHNoaXAubG9jYXRpb25zLmZvckVhY2goKGxvY2F0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IHggPSBsb2NhdGlvblswXTtcbiAgICAgICAgY29uc3QgeSA9IGxvY2F0aW9uWzFdO1xuICAgICAgICBkaXNwbGF5Qm9hcmRbeF1beV0gPSBpbmRleDtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaGVpZ2h0OyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgd2lkdGg7IGorKykge1xuICAgICAgICBjb25zb2xlLmxvZyhcInxcIiwgZGlzcGxheUJvYXJkW2ldW2pdKTtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKFwifFxcblwiKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gcmVjZWl2ZUF0dGFjayh4LCB5KSB7XG4gICAgaWYgKGJvYXJkW3hdW3ldICE9PSBudWxsKSB7XG4gICAgICBpZiAoYm9hcmRbeF1beV0gPT09IFwibWlzc2VkXCIpIHJldHVybiBmYWxzZTtcblxuICAgICAgYm9hcmRbeF1beV0uaGl0KCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgYm9hcmRbeF1beV0gPSBcIm1pc3NlZFwiO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBmdW5jdGlvbiBjaGVja0NvbGxpc2lvbih4LCB5LCBkaXJlY3Rpb24sIGxlbmd0aCkge1xuICAgIGxldCBzaGlwWCA9IHg7XG4gICAgbGV0IHNoaXBZID0geTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoc2hpcFggPCAwIHx8IHNoaXBZIDwgMCB8fCBzaGlwWCA+PSB3aWR0aCB8fCBzaGlwWSA+PSBoZWlnaHQpXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgaWYgKGJvYXJkW3NoaXBYXVtzaGlwWV0gIT09IG51bGwpIHJldHVybiB0cnVlO1xuICAgICAgc2hpcFggKz0gZGlyZWN0aW9uWzBdO1xuICAgICAgc2hpcFkgKz0gZGlyZWN0aW9uWzFdO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gRElSRUNUSU9OOlxuICAvLyBOT1JUSDogWS0xIFswLC0xXVxuICAvLyBFQVNUOiBYKzEgWzEsMF1cbiAgLy8gU09VVCA8IDBcbiAgLy8gV0VTVDogWC0xIFstMSwwXVxuICBmdW5jdGlvbiBwbGFjZVNoaXAoeCwgeSwgZGlyZWN0aW9uLCBzaGlwKSB7XG4gICAgbGV0IHNoaXBYID0geDtcbiAgICBsZXQgc2hpcFkgPSB5O1xuICAgIGlmIChjaGVja0NvbGxpc2lvbih4LCB5LCBkaXJlY3Rpb24sIHNoaXAubGVuZ3RoKSkgcmV0dXJuIC0xO1xuICAgIHNoaXAuZ2V0RGlyZWN0aW9uKCkueCA9IGRpcmVjdGlvblswXTtcbiAgICBzaGlwLmdldERpcmVjdGlvbigpLnkgPSBkaXJlY3Rpb25bMV07XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICBib2FyZFtzaGlwWF1bc2hpcFldID0gc2hpcDtcbiAgICAgIHNoaXAuZ2V0TG9jYXRpb25zKCkucHVzaChbc2hpcFgsIHNoaXBZXSk7XG4gICAgICBzaGlwWCArPSBkaXJlY3Rpb25bMF07XG4gICAgICBzaGlwWSArPSBkaXJlY3Rpb25bMV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBhbGxTdW5rLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgcGxhY2VTaGlwLFxuICAgIGdldExvY2F0aW9ucyxcbiAgICBnZXRTaGlwcyxcbiAgICBwcmludEJvYXJkLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlR2FtZUJvYXJkO1xuIiwiY29uc3QgY3JlYXRlU2hpcCA9IChsZW5ndGgpID0+IHtcbiAgbGV0IGhpdFRpbWVzID0gMDtcbiAgbGV0IHN1bmsgPSBmYWxzZTtcbiAgY29uc3QgaGl0ID0gKCkgPT4ge1xuICAgIGhpdFRpbWVzICs9IDE7XG4gICAgaWYgKGhpdFRpbWVzID09PSBsZW5ndGgpIHN1bmsgPSB0cnVlO1xuICB9O1xuICBjb25zdCBpc1N1bmsgPSAoKSA9PiBzdW5rO1xuICBjb25zdCBkaXJlY3Rpb24gPSB7fTtcbiAgY29uc3QgbG9jYXRpb25zID0gW107XG5cbiAgY29uc3QgZ2V0SGl0VGltZXMgPSAoKSA9PiBoaXRUaW1lcztcbiAgY29uc3QgZ2V0RGlyZWN0aW9uID0gKCkgPT4gZGlyZWN0aW9uO1xuICBjb25zdCBnZXRMb2NhdGlvbnMgPSAoKSA9PiBsb2NhdGlvbnM7XG4gIHJldHVybiB7XG4gICAgbGVuZ3RoLFxuICAgIGdldERpcmVjdGlvbixcbiAgICBnZXRIaXRUaW1lcyxcbiAgICBnZXRMb2NhdGlvbnMsXG4gICAgaGl0LFxuICAgIGlzU3VuayxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVNoaXA7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZm9udHMvZ3VucGxheS5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJHdW5wbGF5XCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG5oMSB7XG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJlZDsgKi9cbiAgZm9udC1mYW1pbHk6IEd1bnBsYXk7XG4gIC8qIGNvbG9yOiBibHVlOyAqL1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogNGVtO1xuICBwYWRkaW5nOiAxcmVtO1xufVxubWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBwYWRkaW5nOiAyZW07XG59XG4uYm9hcmQge1xuICB3aWR0aDogNjI3cHg7XG4gIGhlaWdodDogNjI3cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIyLCAyMjIsIDI0MCk7XG4gIGdhcDogM3B4O1xuICBib3JkZXI6IDNweCBzb2xpZCByZ2IoMjIyLCAyMjIsIDI0MCk7XG59XG4udGlsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIC8qIGJvcmRlcjogM3B4IHNvbGlkIHJnYigyMjIsIDIyMiwgMjQwKTsgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyOCwgMTcyLCAyMzYpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udHVybiA+IC50aWxlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg3LCAxMTYsIDE1OCk7XG59XG5cbi5oaXQge1xuICBib3JkZXI6IDNweCBzb2xpZCByZWQ7XG59XG5cbi5tYXJrID4gLmZpcnN0IHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5tYXJrID4gLnNlY29uZCB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLm1pc3NlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG59XG5cbi5jb3ZlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiA2MjFweDtcbiAgd2lkdGg6IDYyMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xuICBvcGFjaXR5OiA0NSU7XG59XG5cbmRpYWxvZyB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0b3A6IDMwJTtcbiAgcGFkZGluZzogMWVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5idXR0b24ge1xuICB3aWR0aDogMzAlO1xuICBoZWlnaHQ6IDMwcHg7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qiw0Q0FBb0M7QUFDdEM7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0Isb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsbUNBQW1DOztFQUVuQyxvQ0FBb0M7RUFDcEMsUUFBUTtFQUNSLG9DQUFvQztBQUN0QztBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWiwwQ0FBMEM7RUFDMUMsb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osVUFBVTtFQUNWLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osVUFBVTtFQUNWLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLHdCQUF3QjtFQUN4QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztFQUNkLFFBQVE7RUFDUixZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJHdW5wbGF5XFxcIjtcXG4gIHNyYzogdXJsKC4vYXNzZXRzL2ZvbnRzL2d1bnBsYXkub3RmKTtcXG59XFxuXFxuaDEge1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmVkOyAqL1xcbiAgZm9udC1mYW1pbHk6IEd1bnBsYXk7XFxuICAvKiBjb2xvcjogYmx1ZTsgKi9cXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogNGVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBwYWRkaW5nOiAyZW07XFxufVxcbi5ib2FyZCB7XFxuICB3aWR0aDogNjI3cHg7XFxuICBoZWlnaHQ6IDYyN3B4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMiwgMjIyLCAyNDApO1xcbiAgZ2FwOiAzcHg7XFxuICBib3JkZXI6IDNweCBzb2xpZCByZ2IoMjIyLCAyMjIsIDI0MCk7XFxufVxcbi50aWxlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgLyogYm9yZGVyOiAzcHggc29saWQgcmdiKDIyMiwgMjIyLCAyNDApOyAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyOCwgMTcyLCAyMzYpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnR1cm4gPiAudGlsZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODcsIDExNiwgMTU4KTtcXG59XFxuXFxuLmhpdCB7XFxuICBib3JkZXI6IDNweCBzb2xpZCByZWQ7XFxufVxcblxcbi5tYXJrID4gLmZpcnN0IHtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiAycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ubWFyayA+IC5zZWNvbmQge1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgd2lkdGg6IDJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ubWlzc2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxufVxcblxcbi5jb3ZlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDYyMXB4O1xcbiAgd2lkdGg6IDYyMXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcXG4gIG9wYWNpdHk6IDQ1JTtcXG59XFxuXFxuZGlhbG9nIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgdG9wOiAzMCU7XFxuICBwYWRkaW5nOiAxZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmJ1dHRvbiB7XFxuICB3aWR0aDogMzAlO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuaW1wb3J0IGNyZWF0ZUdhbWVCb2FyZCBmcm9tIFwiLi9nYW1lQm9hcmQuanNcIjtcblxuY29uc3QgV0lEVEggPSAxMDtcbmNvbnN0IEhFSUdIVCA9IDEwO1xuXG5jb25zdCBHYW1lQ29udHJvbGxlciA9ICgpID0+IHtcbiAgY29uc3QgcGxheWVyQm9hcmQgPSBjcmVhdGVHYW1lQm9hcmQoV0lEVEgsIEhFSUdIVCk7XG4gIGNvbnN0IGNvbXB1dGVyQm9hcmQgPSBjcmVhdGVHYW1lQm9hcmQoV0lEVEgsIEhFSUdIVCk7XG5cbiAgbGV0IHR1cm4gPSAxO1xuICBsZXQgY3VycmVudFBsYXllciA9IHBsYXllckJvYXJkO1xuICBsZXQgb3Bwb25lbnRQbGF5ZXIgPSBjb21wdXRlckJvYXJkO1xuXG4gIGNvbnN0IHJhbmRvbVBsYWNlbWVudCA9IChib2FyZCkgPT4ge1xuICAgIGJvYXJkLmdldFNoaXBzKCkuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgbGV0IERJUkVDVElPTlMgPSBbXG4gICAgICAgIFswLCAtMV0sXG4gICAgICAgIFsxLCAwXSxcbiAgICAgICAgWzAsIDFdLFxuICAgICAgICBbLTEsIDBdLFxuICAgICAgXTtcbiAgICAgIGxldCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgbGV0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICBsZXQgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBESVJFQ1RJT05TLmxlbmd0aCk7XG4gICAgICAgIGxldCBkaXJlY3Rpb24gPSBESVJFQ1RJT05TW2luZGV4XTtcbiAgICAgICAgRElSRUNUSU9OUy5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgICAgIGlmIChib2FyZC5wbGFjZVNoaXAoeCwgeSwgZGlyZWN0aW9uLCBzaGlwKSA9PT0gLTEpIHtcbiAgICAgICAgICBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIERJUkVDVElPTlMubGVuZ3RoKTtcbiAgICAgICAgICBkaXJlY3Rpb24gPSBESVJFQ1RJT05TW2luZGV4XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAoRElSRUNUSU9OUy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICAgIHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgRElSRUNUSU9OUyA9IFtcbiAgICAgICAgICAgIFswLCAtMV0sXG4gICAgICAgICAgICBbMSwgMF0sXG4gICAgICAgICAgICBbMCwgMV0sXG4gICAgICAgICAgICBbLTEsIDBdLFxuICAgICAgICAgIF07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbiAgcmFuZG9tUGxhY2VtZW50KHBsYXllckJvYXJkKTtcbiAgcmFuZG9tUGxhY2VtZW50KGNvbXB1dGVyQm9hcmQpO1xuXG4gIGNvbnN0IGdldFR1cm4gPSAoKSA9PiB0dXJuO1xuICBjb25zdCBnZXRDdXJyZW50UGxheWVyID0gKCkgPT4gY3VycmVudFBsYXllcjtcbiAgY29uc3QgZ2V0T3Bwb25lbnRQbGF5ZXIgPSAoKSA9PiBvcHBvbmVudFBsYXllcjtcbiAgY29uc3QgZ2V0UGxheWVyMSA9ICgpID0+IHBsYXllckJvYXJkO1xuICBjb25zdCBnZXRQbGF5ZXIyID0gKCkgPT4gY29tcHV0ZXJCb2FyZDtcblxuICBjb25zdCBzd2l0Y2hQbGF5ZXJUdXJuID0gKCkgPT4ge1xuICAgIHR1cm4gPSB0dXJuID09PSAxID8gMiA6IDE7XG4gICAgaWYgKHR1cm4gPT09IDEpIHtcbiAgICAgIGN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXJCb2FyZDtcbiAgICAgIG9wcG9uZW50UGxheWVyID0gY29tcHV0ZXJCb2FyZDtcbiAgICB9IGVsc2Uge1xuICAgICAgY3VycmVudFBsYXllciA9IGNvbXB1dGVyQm9hcmQ7XG4gICAgICBvcHBvbmVudFBsYXllciA9IHBsYXllckJvYXJkO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBwbGF5Um91bmQgPSAoeCwgeSkgPT4gb3Bwb25lbnRQbGF5ZXIucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgY29uc3QgY2hlY2tXaW4gPSAoKSA9PiB7XG4gICAgaWYgKGdldFBsYXllcjEoKS5hbGxTdW5rKCkpIHJldHVybiAyO1xuICAgIGlmIChnZXRQbGF5ZXIyKCkuYWxsU3VuaygpKSByZXR1cm4gMTtcbiAgICByZXR1cm4gMDtcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBnZXRUdXJuLFxuICAgIGdldEN1cnJlbnRQbGF5ZXIsXG4gICAgZ2V0T3Bwb25lbnRQbGF5ZXIsXG4gICAgcGxheVJvdW5kLFxuICAgIGdldFBsYXllcjEsXG4gICAgZ2V0UGxheWVyMixcbiAgICBzd2l0Y2hQbGF5ZXJUdXJuLFxuICAgIGNoZWNrV2luLFxuICB9O1xufTtcblxuY29uc3QgVUlDb250cm9sbGVyID0gKCkgPT4ge1xuICBjb25zdCBnYW1lQ29udHJvbGxlciA9IEdhbWVDb250cm9sbGVyKCk7XG5cbiAgY29uc3QgcGxheWVyQm9hcmRET00gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllcjEuYm9hcmRcIik7XG4gIGNvbnN0IGNvbXB1dGVyQm9hcmRET00gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllcjIuYm9hcmRcIik7XG4gIGNvbnN0IHBsYXllcjFDb3ZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyMSA+IC5jb3ZlclwiKTtcbiAgY29uc3QgcGxheWVyMkNvdmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXIyID4gLmNvdmVyXCIpO1xuICBjb25zdCBzdGFydCA9IGZhbHNlO1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaWFsb2dcIik7XG4gIC8vIG1vZGFsLnNob3dNb2RhbCgpO1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uXCIpO1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJoaVwiKTtcbiAgICBtb2RhbC5jbG9zZSgpO1xuICB9KTtcbiAgY29uc3QgYXR0YWNrID0gKGUpID0+IHtcbiAgICBjb25zdCB4ID0gZS50YXJnZXQuZGF0YXNldC5sb2NhdGlvbi5zcGxpdChcIi1cIilbMF07XG4gICAgY29uc3QgeSA9IGUudGFyZ2V0LmRhdGFzZXQubG9jYXRpb24uc3BsaXQoXCItXCIpWzFdO1xuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJzaG90XCIpO1xuXG4gICAgaWYgKGdhbWVDb250cm9sbGVyLnBsYXlSb3VuZCh4LCB5KSkge1xuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbiAgICAgIC8vIGUudGFyZ2V0LmlubmVySFRNTCA9ICc8cCBzdHlsZT1cImZvbnQtc2l6ZTogMzBweDsgY29sb3I6cmVkO1wiPlg8L3A+JztcbiAgICAgIGUudGFyZ2V0LmlubmVySFRNTCA9XG4gICAgICAgICc8ZGl2IGNsYXNzPVwibWFya1wiPjxkaXYgY2xhc3M9IFwiZmlyc3RcIj48L2Rpdj48ZGl2IGNsYXNzPVwic2Vjb25kXCI+PC9kaXY+PC9kaXY+JztcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyYXlcIjtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgLy8gY29uc3QgY29tcHV0ZXJUaWxlcyA9IFtdO1xuICAvLyBTRVQgVVAgVElMRVMgZm9yIGJvdGhcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBIRUlHSFQ7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgV0lEVEg7IGorKykge1xuICAgICAgY29uc3QgcGxheWVyVGlsZURPTSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBwbGF5ZXJUaWxlRE9NLmNsYXNzTGlzdC5hZGQoXCJ0aWxlXCIpO1xuICAgICAgcGxheWVyVGlsZURPTS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWxvY2F0aW9uXCIsIGAke2l9LSR7an1gKTtcbiAgICAgIHBsYXllclRpbGVET00uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAhZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2hvdFwiKSAmJlxuICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInRpbGVcIilcbiAgICAgICAgKVxuICAgICAgICAgIGlmIChnYW1lQ29udHJvbGxlci5nZXRUdXJuKCkgPT09IDIpIHtcbiAgICAgICAgICAgIGlmIChhdHRhY2soZSkpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZ2FtZUNvbnRyb2xsZXIuY2hlY2tXaW4oKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwbGF5ZXIyQ292ZXIuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgICAgICAgICAgIHBsYXllcjFDb3Zlci5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgICAgICAgICAgIGdhbWVDb250cm9sbGVyLnN3aXRjaFBsYXllclR1cm4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgY29tcHV0ZXJUaWxlRE9NID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvbXB1dGVyVGlsZURPTS5jbGFzc0xpc3QuYWRkKFwidGlsZVwiKTtcbiAgICAgIGNvbXB1dGVyVGlsZURPTS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWxvY2F0aW9uXCIsIGAke2l9LSR7an1gKTtcbiAgICAgIGNvbXB1dGVyVGlsZURPTS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJzaG90XCIpICYmXG4gICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwidGlsZVwiKVxuICAgICAgICApXG4gICAgICAgICAgaWYgKGdhbWVDb250cm9sbGVyLmdldFR1cm4oKSA9PT0gMSkge1xuICAgICAgICAgICAgLy8gaWYoZS5jbGFzc0xpc3QuY29udGFpbnMoKSlcbiAgICAgICAgICAgIGlmIChhdHRhY2soZSkpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZ2FtZUNvbnRyb2xsZXIuY2hlY2tXaW4oKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwbGF5ZXIxQ292ZXIuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgICAgICAgICAgIHBsYXllcjJDb3Zlci5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgICAgICAgICAgIGdhbWVDb250cm9sbGVyLnN3aXRjaFBsYXllclR1cm4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcGxheWVyQm9hcmRET00uYXBwZW5kQ2hpbGQocGxheWVyVGlsZURPTSk7XG4gICAgICAvLyBjb21wdXRlclRpbGVET00uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snY29tcHV0ZXJCb2FyZERPTS4pXG4gICAgICBjb21wdXRlckJvYXJkRE9NLmFwcGVuZENoaWxkKGNvbXB1dGVyVGlsZURPTSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgZGlzcGxheVNoaXBzID0gKGJvYXJkLCBzaWRlKSA9PiB7XG4gICAgY29uc3QgY29sb3JzID0gW1xuICAgICAgXCJvcmFuZ2VcIixcbiAgICAgIFwieWVsbG93XCIsXG4gICAgICBcInJlZFwiLFxuICAgICAgXCJncmVlblwiLFxuICAgICAgXCJibGFja1wiLFxuICAgICAgXCJibHVlXCIsXG4gICAgICBcInllbGxvd2dyZWVuXCIsXG4gICAgICBcInZpb2xldFwiLFxuICAgICAgXCJjeWFuXCIsXG4gICAgICBcInBpbmtcIixcbiAgICBdO1xuICAgIGxldCBzaWRlU2VsZWN0b3IgPSBcIlwiO1xuICAgIGlmIChzaWRlID09PSAxKSB7XG4gICAgICBzaWRlU2VsZWN0b3IgPSBcInBsYXllcjFcIjtcbiAgICB9IGVsc2Ugc2lkZVNlbGVjdG9yID0gXCJwbGF5ZXIyXCI7XG4gICAgYm9hcmQuZ2V0U2hpcHMoKS5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBjb25zdCBpbmRleENvbG9yID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29sb3JzLmxlbmd0aCk7XG4gICAgICBzaGlwLmdldExvY2F0aW9ucygpLmZvckVhY2goKGxvY2F0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IHggPSBsb2NhdGlvblswXTtcbiAgICAgICAgY29uc3QgeSA9IGxvY2F0aW9uWzFdO1xuXG4gICAgICAgIGNvbnN0IHRpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIGAuJHtzaWRlU2VsZWN0b3J9ID4gLnRpbGVbZGF0YS1sb2NhdGlvbj1cIiR7eH0tJHt5fVwiXWBcbiAgICAgICAgKTtcbiAgICAgICAgdGlsZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcnNbaW5kZXhDb2xvcl07XG4gICAgICB9KTtcbiAgICAgIGNvbG9ycy5zcGxpY2UoaW5kZXhDb2xvciwgMSk7XG4gICAgfSk7XG4gIH07XG4gIGRpc3BsYXlTaGlwcyhnYW1lQ29udHJvbGxlci5nZXRQbGF5ZXIxKCksIDEpO1xuICBkaXNwbGF5U2hpcHMoZ2FtZUNvbnRyb2xsZXIuZ2V0UGxheWVyMigpLCAyKTtcbn07XG5cblVJQ29udHJvbGxlcigpO1xuIl0sIm5hbWVzIjpbImNyZWF0ZVNoaXAiLCJjcmVhdGVHYW1lQm9hcmQiLCJ3aWR0aCIsImhlaWdodCIsInNoaXBzIiwiYm9hcmQiLCJpIiwiaiIsInB1c2giLCJhbGxTdW5rIiwiZXZlcnkiLCJzaGlwIiwiaXNTdW5rIiwiZ2V0TG9jYXRpb25zIiwiZ2V0U2hpcHMiLCJwcmludEJvYXJkIiwiZGlzcGxheUJvYXJkIiwiZm9yRWFjaCIsImluZGV4IiwibG9jYXRpb25zIiwibG9jYXRpb24iLCJ4IiwieSIsImNvbnNvbGUiLCJsb2ciLCJyZWNlaXZlQXR0YWNrIiwiaGl0IiwiY2hlY2tDb2xsaXNpb24iLCJkaXJlY3Rpb24iLCJsZW5ndGgiLCJzaGlwWCIsInNoaXBZIiwicGxhY2VTaGlwIiwiZ2V0RGlyZWN0aW9uIiwiaGl0VGltZXMiLCJzdW5rIiwiZ2V0SGl0VGltZXMiLCJXSURUSCIsIkhFSUdIVCIsIkdhbWVDb250cm9sbGVyIiwicGxheWVyQm9hcmQiLCJjb21wdXRlckJvYXJkIiwidHVybiIsImN1cnJlbnRQbGF5ZXIiLCJvcHBvbmVudFBsYXllciIsInJhbmRvbVBsYWNlbWVudCIsIkRJUkVDVElPTlMiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJzcGxpY2UiLCJnZXRUdXJuIiwiZ2V0Q3VycmVudFBsYXllciIsImdldE9wcG9uZW50UGxheWVyIiwiZ2V0UGxheWVyMSIsImdldFBsYXllcjIiLCJzd2l0Y2hQbGF5ZXJUdXJuIiwicGxheVJvdW5kIiwiY2hlY2tXaW4iLCJVSUNvbnRyb2xsZXIiLCJnYW1lQ29udHJvbGxlciIsInBsYXllckJvYXJkRE9NIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY29tcHV0ZXJCb2FyZERPTSIsInBsYXllcjFDb3ZlciIsInBsYXllcjJDb3ZlciIsInN0YXJ0IiwibW9kYWwiLCJidXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImNsb3NlIiwiYXR0YWNrIiwidGFyZ2V0IiwiZGF0YXNldCIsInNwbGl0IiwiY2xhc3NMaXN0IiwiYWRkIiwiaW5uZXJIVE1MIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwbGF5ZXJUaWxlRE9NIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImNvbnRhaW5zIiwidmlzaWJpbGl0eSIsImNvbXB1dGVyVGlsZURPTSIsImFwcGVuZENoaWxkIiwiZGlzcGxheVNoaXBzIiwic2lkZSIsImNvbG9ycyIsInNpZGVTZWxlY3RvciIsImluZGV4Q29sb3IiLCJ0aWxlIl0sInNvdXJjZVJvb3QiOiIifQ==