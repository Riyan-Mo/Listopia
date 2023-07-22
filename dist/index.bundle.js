"use strict";
(self["webpackChunklistopia"] = self["webpackChunklistopia"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
}

:root {
  --bodyColor: white;
  --textColor: black;
  --themeColor: darkslategrey;
  --bodyFont: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.container {
  display: grid;
  background-color: var(--bodyColor);
  font-family: var(--bodyFont);
  justify-content: center;
  margin: 1px;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  row-gap: 4px;
}

.hero-title {
  text-align: center;
  padding: 3rem;
  font-size: min(6vw, 40px);
  font-weight: 900;
  color: var(--themeColor);
  text-align: center;
  border-bottom-color: var(--themeColor);
  border-bottom-width: 5px;
  border-bottom-style: groove;
}

.notask-para {
  font-weight: bolder;
  font-size: larger;
}

.sidebar>div {
  cursor: pointer;
}

.addProjectbtn {
  padding: 10px;
  font-size: medium;
  background-color: var(--themeColor);
  color: var(--bodyColor);
  border-radius: 10px;
  border: none;
}

button {
  cursor: pointer;
}

.coverPage {
  position: absolute;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.4);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: grid;
  place-items: center;
}

form {
  padding: 2rem;
  position: relative;
  background-color: white;
  display: grid;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 2rem;
  font-size: larger;
  border: 2px solid black;
  border-radius: 10px;
}

form>div {
  display: grid;
  row-gap: 5px;
}

.closeBtn {
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px 20px;
  color: var(--textColor);
  background-color: var(--bodyColor);
  font-size: xx-large;
  cursor: pointer;
  border: 2px solid black;
  border-radius: 50%;
}

.formTitle {
  font-weight: 700;
  font-size: x-large;
}

form input,
select {
  padding: 8px;
  font-size: medium;
}

.formSubmit {
  padding: 10px;
  background-color: var(--themeColor);
  color: white;
  border: solid;
  font-size: medium;
  border-radius: 10px;
}

.ProjectContainer {
  display: grid;
  padding: 1rem;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.projectName {
  font-size: x-large;
}

.projectTile {
  display: grid;
  grid-template-columns: 3fr 2fr 1fr;
  grid-template-rows: 1fr;
  text-align: center;
  row-gap: 15px;
  column-gap: 8px;
  border: 6px solid grey;
  padding: 10px;
  align-items: center;
}

.taskDiv {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-column: -1/1;
  row-gap: 5px;
}

.task {
  font-size: large;
  display: grid;
  grid-template-columns: 2fr 2fr 2fr 1fr 1fr;
  grid-template-rows: 1fr;
  border: 4px grey solid;
  padding: 1rem;
  column-gap: 8px;
  align-items: center;
}

.complete {
  border-color: green;
}

.changeBtn {
  font-size: medium;
  border: black 2px solid;
  color: white;
  padding: 10px;
  border-radius: 10px;
}

.red {
  background-color: red;
}

.green {
  background-color: var(--themeColor);
}

.addTaskBtn {
  color: white;
  background-color: var(--themeColor);
  padding: 10px;
  font-size: medium;
  border: 2px black solid;
  border-radius: 4px;
}

.noTaskDiv {
  display: grid;
  place-items: center;
  padding: 2rem;
  margin-top: 3rem;
  font-size: large;
}

.rightbar {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  row-gap: 1rem;
  padding: 1rem;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,WAAW;EACX,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,2BAA2B;EAC3B,uEAAuE;AACzE;;AAEA;EACE,aAAa;EACb,kCAAkC;EAClC,4BAA4B;EAC5B,uBAAuB;EACvB,WAAW;EACX,0BAA0B;EAC1B,4BAA4B;EAC5B,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,yBAAyB;EACzB,gBAAgB;EAChB,wBAAwB;EACxB,kBAAkB;EAClB,sCAAsC;EACtC,wBAAwB;EACxB,2BAA2B;AAC7B;;AAEA;EACE,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,mCAAmC;EACnC,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,oCAAoC;EACpC,MAAM;EACN,SAAS;EACT,OAAO;EACP,QAAQ;EACR,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,uBAAuB;EACvB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,SAAS;EACT,iBAAiB;EACjB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,QAAQ;EACR,kBAAkB;EAClB,uBAAuB;EACvB,kCAAkC;EAClC,mBAAmB;EACnB,eAAe;EACf,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;;EAEE,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,mCAAmC;EACnC,YAAY;EACZ,aAAa;EACb,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,0BAA0B;EAC1B,SAAS;AACX;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,kCAAkC;EAClC,uBAAuB;EACvB,kBAAkB;EAClB,aAAa;EACb,eAAe;EACf,sBAAsB;EACtB,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,0BAA0B;EAC1B,uBAAuB;EACvB,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,0CAA0C;EAC1C,uBAAuB;EACvB,sBAAsB;EACtB,aAAa;EACb,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,uBAAuB;EACvB,YAAY;EACZ,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,YAAY;EACZ,mCAAmC;EACnC,aAAa;EACb,iBAAiB;EACjB,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,aAAa;EACb,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,0BAA0B;EAC1B,4BAA4B;EAC5B,aAAa;EACb,aAAa;AACf","sourcesContent":["* {\n  padding: 0px;\n  margin: 0px;\n  box-sizing: border-box;\n}\n\n:root {\n  --bodyColor: white;\n  --textColor: black;\n  --themeColor: darkslategrey;\n  --bodyFont: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n}\n\n.container {\n  display: grid;\n  background-color: var(--bodyColor);\n  font-family: var(--bodyFont);\n  justify-content: center;\n  margin: 1px;\n  grid-template-columns: 1fr;\n  grid-template-rows: auto 1fr;\n  row-gap: 4px;\n}\n\n.hero-title {\n  text-align: center;\n  padding: 3rem;\n  font-size: min(6vw, 40px);\n  font-weight: 900;\n  color: var(--themeColor);\n  text-align: center;\n  border-bottom-color: var(--themeColor);\n  border-bottom-width: 5px;\n  border-bottom-style: groove;\n}\n\n.notask-para {\n  font-weight: bolder;\n  font-size: larger;\n}\n\n.sidebar>div {\n  cursor: pointer;\n}\n\n.addProjectbtn {\n  padding: 10px;\n  font-size: medium;\n  background-color: var(--themeColor);\n  color: var(--bodyColor);\n  border-radius: 10px;\n  border: none;\n}\n\nbutton {\n  cursor: pointer;\n}\n\n.coverPage {\n  position: absolute;\n  z-index: 99;\n  background-color: rgba(0, 0, 0, 0.4);\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: grid;\n  place-items: center;\n}\n\nform {\n  padding: 2rem;\n  position: relative;\n  background-color: white;\n  display: grid;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  gap: 2rem;\n  font-size: larger;\n  border: 2px solid black;\n  border-radius: 10px;\n}\n\nform>div {\n  display: grid;\n  row-gap: 5px;\n}\n\n.closeBtn {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 10px 20px;\n  color: var(--textColor);\n  background-color: var(--bodyColor);\n  font-size: xx-large;\n  cursor: pointer;\n  border: 2px solid black;\n  border-radius: 50%;\n}\n\n.formTitle {\n  font-weight: 700;\n  font-size: x-large;\n}\n\nform input,\nselect {\n  padding: 8px;\n  font-size: medium;\n}\n\n.formSubmit {\n  padding: 10px;\n  background-color: var(--themeColor);\n  color: white;\n  border: solid;\n  font-size: medium;\n  border-radius: 10px;\n}\n\n.ProjectContainer {\n  display: grid;\n  padding: 1rem;\n  grid-template-columns: 1fr;\n  gap: 2rem;\n}\n\n.projectName {\n  font-size: x-large;\n}\n\n.projectTile {\n  display: grid;\n  grid-template-columns: 3fr 2fr 1fr;\n  grid-template-rows: 1fr;\n  text-align: center;\n  row-gap: 15px;\n  column-gap: 8px;\n  border: 6px solid grey;\n  padding: 10px;\n  align-items: center;\n}\n\n.taskDiv {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr;\n  grid-column: -1/1;\n  row-gap: 5px;\n}\n\n.task {\n  font-size: large;\n  display: grid;\n  grid-template-columns: 2fr 2fr 2fr 1fr 1fr;\n  grid-template-rows: 1fr;\n  border: 4px grey solid;\n  padding: 1rem;\n  column-gap: 8px;\n  align-items: center;\n}\n\n.complete {\n  border-color: green;\n}\n\n.changeBtn {\n  font-size: medium;\n  border: black 2px solid;\n  color: white;\n  padding: 10px;\n  border-radius: 10px;\n}\n\n.red {\n  background-color: red;\n}\n\n.green {\n  background-color: var(--themeColor);\n}\n\n.addTaskBtn {\n  color: white;\n  background-color: var(--themeColor);\n  padding: 10px;\n  font-size: medium;\n  border: 2px black solid;\n  border-radius: 4px;\n}\n\n.noTaskDiv {\n  display: grid;\n  place-items: center;\n  padding: 2rem;\n  margin-top: 3rem;\n  font-size: large;\n}\n\n.rightbar {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: auto 1fr;\n  row-gap: 1rem;\n  padding: 1rem;\n}"],"sourceRoot":""}]);
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

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/AddTaskProject.js":
/*!*******************************!*\
  !*** ./src/AddTaskProject.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddTaskProject)
/* harmony export */ });
/* harmony import */ var _Project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project.js */ "./src/Project.js");
/* harmony import */ var _ToDo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToDo.js */ "./src/ToDo.js");



class AddTaskProject{

  constructor(_arr, _prop){
    this.arr = _arr;
    this.prop = _prop;
  }

  makeProjectButton(){
    const btn = document.createElement('button');
    btn.textContent = `Add Project`;
    btn.className = "addProjectbtn";
    btn.addEventListener("click", ()=>this.addTaskCoverPage("Project"));
    return btn;
  }

  showNoTasks(){
    const noTaskDiv = document.createElement("div");
    const noTaskPara = document.createElement("p");
    let noTaskParaContent = `There are no current ${this.prop}`
    noTaskPara.textContent = noTaskParaContent;
    noTaskPara.classList.add("notask-para");
    noTaskDiv.className = "noTaskDiv";
    noTaskDiv.appendChild(noTaskPara);
    return noTaskDiv;
  }

  renderRightbar(){
    const [rightbar] = document.getElementsByClassName("rightbar");
    localStorage.setItem("Projects", JSON.stringify(this.arr));
    rightbar.innerHTML = "";
    rightbar.appendChild(this.makeProjectButton());
    if(this.arr.length === 0){
      rightbar.appendChild(this.showNoTasks());
    }
    else{
      rightbar.appendChild(this.renderProject());
    }
  }

  renderProject(){
    const ProjectContainer = document.createElement('div');
    ProjectContainer.className = "ProjectContainer";
    for(let i = 0; i<this.arr.length; i++){
      ProjectContainer.appendChild(this.makeProjectTile(this.arr[i]));  
    }
    return ProjectContainer;
  }

  makeAddTaskButton(){
    const btn = document.createElement('button');
    btn.className = "addTaskBtn"
    btn.textContent = "Add Task";
    btn.addEventListener('click', (e)=>{
      const parent = e.target.parentNode;
      this.addTaskCoverPage("Task", parent)
    })
    return btn;
  }

  makeProjectTile(_project){
    const projectTile = document.createElement('div');
    projectTile.className = "projectTile";
    projectTile.setAttribute("data-id", _project.id);
    const projectName = document.createElement('p');
    projectName.className = `projectName`;
    projectName.textContent = _project.title;
    projectTile.appendChild(projectName);
    projectTile.appendChild(this.makeAddTaskButton());
    projectTile.appendChild(this.makeDeletebtn("Project"));
    _project.tasks.length!==0?projectTile.appendChild(this.renderTasks(_project.tasks)):"";
    return projectTile;
  }

  renderTasks(_tasks){
    const taskDiv = document.createElement('div');
    taskDiv.classList.add("taskDiv");
    for(let i = 0; i<_tasks.length; i++){
      const task = document.createElement("div");
      task.className = "task";
      for(const key in _tasks[i]){
        const taskDetail = document.createElement('p');
        taskDetail.classList.add("taskDetail");
        if(key!=="id"&&key!=="isComplete"&&key!=="parentId"){
          taskDetail.textContent = _tasks[i][key];
          task.appendChild(taskDetail);
        }
        else if(key==="isComplete"){
          _tasks[i][key]?task.classList.add("complete"):task.classList.remove("complete");
        }
      }
      task.setAttribute('data-id', _tasks[i].id);
      task.setAttribute('data-parentid', _tasks[i].parentId);
      task.appendChild(this.makeMarkCompletebtn());
      task.appendChild(this.makeDeletebtn("Task"));
      taskDiv.appendChild(task);
    }
    return taskDiv;
  }

  makeMarkCompletebtn(){
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Done";
    deleteBtn.classList.add("changeBtn", "green");
    deleteBtn.addEventListener("click", ()=>{
      const parentId = deleteBtn.parentNode.getAttribute("data-parentid");
      const selfId = deleteBtn.parentNode.getAttribute("data-id");
      for(let i = 0; i<this.arr.length; i++){
          if(this.arr[i].id === parentId){
            for(let j = 0; j<this.arr[i].tasks.length; j++){
              if(this.arr[i].tasks[j].id === selfId){
                this.arr[i].tasks[j].isComplete=!this.arr[i].tasks[j].isComplete;
              }
            }
          }
      }
      this.renderRightbar();
    })
    return deleteBtn;
  }

  makeDeletebtn(_type){
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("changeBtn", "red");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener('click', ()=>{  
      if(_type==="Task"){
        const parentId = deleteBtn.parentNode.getAttribute("data-parentid");
        const selfId =  deleteBtn.parentNode.getAttribute("data-id");
        for(let i = 0; i<this.arr.length; i++){
            if(this.arr[i].id === parentId){
              for(let j = 0; j<this.arr[i].tasks.length; j++){
                if(this.arr[i].tasks[j].id === selfId){
                  this.arr[i].tasks.splice(j, 1);
                }
              }
            }
        }
      }
      else{
        const selfId = deleteBtn.parentNode.getAttribute("data-id");
          for(let i = 0; i<this.arr.length; i++){
            if(this.arr[i].id === selfId){
              this.arr.splice(i, 1);
            }
          }
      }
      this.renderRightbar();
    })
    return deleteBtn;
  }

  makeTask(){
    const title = document.getElementById('title').value;
    const date = document.getElementById("date").value;
    const priority = document.getElementById("priority").value;
    const id = this.idGenerator();
    const task = new _ToDo_js__WEBPACK_IMPORTED_MODULE_1__["default"](title, date, priority, id);
    return task;
  }

  addTaskToArr(parent){
    const task = this.makeTask();
    const parentId = parent.getAttribute("data-id");
    task.parentId = parentId;
    for(let i = 0; i<this.arr.length; i++){
      if(this.arr[i].id===parentId){
        this.arr[i].tasks.push(task);
      }
    }
    this.renderRightbar();
  }

  addProject(){
    const name = document.getElementById("title");
    const project = new _Project_js__WEBPACK_IMPORTED_MODULE_0__["default"](name.value, this.idGenerator());
    this.arr.push(project)
    this.renderRightbar();
  }

  addTaskCoverPage(_for, parent=""){
    const coverPage = document.createElement('div');
    coverPage.className = "coverPage";
    coverPage.id = "coverPage";
    coverPage.appendChild(this.commonForm(_for, parent));
    coverPage.appendChild(this.closeButton());
    document.body.append(coverPage);
  }

  addTaskForm(){
    const taskForm = `
    <div>
    <label for="title">Task Title</label>
    <input id="title" name="title" type="textbox" required>
    </div>
    <div>
    <label for="date">Task Date</label>
    <input id="date" name="date" type="date" required>
    </div>
    <div>
    <label for="priority">Priority</label>
    <select id="priority" required>
    <option>Low</option>
    <option>Medium</option>
    <option>High</option>
    <option>Urgent</option>
    </select>
    </div>
    `
    return taskForm;
  }

  addProjectForm(){
    const projectDiv = `
    <div>
    <label for="title">Project Title</label>
    <input id="title" name="title" type="textbox" required>
    </div>
    `
    return projectDiv;
  }

  commonForm(_type, parent=""){
    const form = document.createElement('form');
    form.method = "post";
    form.classList.add("overlayForm");
    form.innerHTML += `<p class="formTitle">Enter details</p>`
    const conditionalForm = _type=="Project"?this.addProjectForm():this.addTaskForm();
    const submitButton = `<button class="formSubmit">Add</button>`
    form.innerHTML += conditionalForm+submitButton;
    form.addEventListener("submit", (e)=>{
      e.preventDefault();
      _type==="Task"?this.addTaskToArr(parent):this.addProject();
      const parentNode = document.getElementById("coverPage");
      document.body.removeChild(parentNode);
    });
    return form;
  }

  closeButton(){
    const closeBtn = document.createElement("button");
    closeBtn.type = "button";
    closeBtn.addEventListener("click", ()=>{
    document.body.removeChild(document.getElementById('coverPage'))
  })
    closeBtn.textContent = "X";
    closeBtn.classList.add("closeBtn");
    return closeBtn;
  }

  idGenerator(){
    const alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
    let id = "";
    id+= alphabets[Math.floor(Math.random()* 4)];
    for(let i = 0; i<7; i++){
      id += Math.floor(Math.random() * 10);
    }
    return id;
  }

}

/***/ }),

/***/ "./src/Project.js":
/*!************************!*\
  !*** ./src/Project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
class Project{
  
  tasks = [];
  isComplete = true;

  constructor(_title, _id){
    this.title = _title;
    this.id = _id;
  }
  
}

/***/ }),

/***/ "./src/ToDo.js":
/*!*********************!*\
  !*** ./src/ToDo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToDo)
/* harmony export */ });
class ToDo{

  parentId = "";

  constructor(_title, _dueDate, _priority, _id){
    this.title = _title;
    this.dueDate = _dueDate;
    this.priority = _priority;
    this.id = _id;
    this.isComplete = false;
  }
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _pageLayout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageLayout.js */ "./src/pageLayout.js");
/* harmony import */ var _AddTaskProject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddTaskProject.js */ "./src/AddTaskProject.js");




window.onload = function(){
  const taskArr = JSON.parse(localStorage.getItem("Projects"))||[];
  const page = new _pageLayout_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
  page.createLayout();
  const btn = new _AddTaskProject_js__WEBPACK_IMPORTED_MODULE_2__["default"](taskArr, "Project");
  btn.renderRightbar(); 
}




/***/ }),

/***/ "./src/pageLayout.js":
/*!***************************!*\
  !*** ./src/pageLayout.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PageLayout)
/* harmony export */ });
class PageLayout{
  
  createLayout(){
    document.body.innerHTML = `
    <div class="container">
    
    <div class="hero-title">Listopia</div>
    
    <div class="rightbar"></div>

    </div>`;
  }

}  

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8saUZBQWlGLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8s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YWNrOi8vbGlzdG9waWEvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9saXN0b3BpYS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbGlzdG9waWEvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9saXN0b3BpYS8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vbGlzdG9waWEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbGlzdG9waWEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2xpc3RvcGlhLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2xpc3RvcGlhLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2xpc3RvcGlhLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbGlzdG9waWEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9saXN0b3BpYS8uL3NyYy9BZGRUYXNrUHJvamVjdC5qcyIsIndlYnBhY2s6Ly9saXN0b3BpYS8uL3NyYy9Qcm9qZWN0LmpzIiwid2VicGFjazovL2xpc3RvcGlhLy4vc3JjL1RvRG8uanMiLCJ3ZWJwYWNrOi8vbGlzdG9waWEvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbGlzdG9waWEvLi9zcmMvcGFnZUxheW91dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbjpyb290IHtcbiAgLS1ib2R5Q29sb3I6IHdoaXRlO1xuICAtLXRleHRDb2xvcjogYmxhY2s7XG4gIC0tdGhlbWVDb2xvcjogZGFya3NsYXRlZ3JleTtcbiAgLS1ib2R5Rm9udDogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2R5Q29sb3IpO1xuICBmb250LWZhbWlseTogdmFyKC0tYm9keUZvbnQpO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAxcHg7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xuICByb3ctZ2FwOiA0cHg7XG59XG5cbi5oZXJvLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAzcmVtO1xuICBmb250LXNpemU6IG1pbig2dncsIDQwcHgpO1xuICBmb250LXdlaWdodDogOTAwO1xuICBjb2xvcjogdmFyKC0tdGhlbWVDb2xvcik7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tdGhlbWVDb2xvcik7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogZ3Jvb3ZlO1xufVxuXG4ubm90YXNrLXBhcmEge1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBmb250LXNpemU6IGxhcmdlcjtcbn1cblxuLnNpZGViYXI+ZGl2IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYWRkUHJvamVjdGJ0biB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZUNvbG9yKTtcbiAgY29sb3I6IHZhcigtLWJvZHlDb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY292ZXJQYWdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmZvcm0ge1xuICBwYWRkaW5nOiAycmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBncmlkO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBnYXA6IDJyZW07XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuZm9ybT5kaXYge1xuICBkaXNwbGF5OiBncmlkO1xuICByb3ctZ2FwOiA1cHg7XG59XG5cbi5jbG9zZUJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBjb2xvcjogdmFyKC0tdGV4dENvbG9yKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9keUNvbG9yKTtcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uZm9ybVRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xufVxuXG5mb3JtIGlucHV0LFxuc2VsZWN0IHtcbiAgcGFkZGluZzogOHB4O1xuICBmb250LXNpemU6IG1lZGl1bTtcbn1cblxuLmZvcm1TdWJtaXQge1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZUNvbG9yKTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IHNvbGlkO1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLlByb2plY3RDb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBwYWRkaW5nOiAxcmVtO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgZ2FwOiAycmVtO1xufVxuXG4ucHJvamVjdE5hbWUge1xuICBmb250LXNpemU6IHgtbGFyZ2U7XG59XG5cbi5wcm9qZWN0VGlsZSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDJmciAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHJvdy1nYXA6IDE1cHg7XG4gIGNvbHVtbi1nYXA6IDhweDtcbiAgYm9yZGVyOiA2cHggc29saWQgZ3JleTtcbiAgcGFkZGluZzogMTBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRhc2tEaXYge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gIGdyaWQtY29sdW1uOiAtMS8xO1xuICByb3ctZ2FwOiA1cHg7XG59XG5cbi50YXNrIHtcbiAgZm9udC1zaXplOiBsYXJnZTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMmZyIDJmciAxZnIgMWZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgYm9yZGVyOiA0cHggZ3JleSBzb2xpZDtcbiAgcGFkZGluZzogMXJlbTtcbiAgY29sdW1uLWdhcDogOHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY29tcGxldGUge1xuICBib3JkZXItY29sb3I6IGdyZWVuO1xufVxuXG4uY2hhbmdlQnRuIHtcbiAgZm9udC1zaXplOiBtZWRpdW07XG4gIGJvcmRlcjogYmxhY2sgMnB4IHNvbGlkO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5yZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi5ncmVlbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRoZW1lQ29sb3IpO1xufVxuXG4uYWRkVGFza0J0biB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhlbWVDb2xvcik7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xuICBib3JkZXI6IDJweCBibGFjayBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4ubm9UYXNrRGl2IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMnJlbTtcbiAgbWFyZ2luLXRvcDogM3JlbTtcbiAgZm9udC1zaXplOiBsYXJnZTtcbn1cblxuLnJpZ2h0YmFyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XG4gIHJvdy1nYXA6IDFyZW07XG4gIHBhZGRpbmc6IDFyZW07XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFDM0IsdUVBQXVFO0FBQ3pFOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyw0QkFBNEI7RUFDNUIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCwwQkFBMEI7RUFDMUIsNEJBQTRCO0VBQzVCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLHNDQUFzQztFQUN0Qyx3QkFBd0I7RUFDeEIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLG1DQUFtQztFQUNuQyx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLG9DQUFvQztFQUNwQyxNQUFNO0VBQ04sU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1IsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0VBQ1Isa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixrQ0FBa0M7RUFDbEMsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1DQUFtQztFQUNuQyxZQUFZO0VBQ1osYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwwQkFBMEI7RUFDMUIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLDBDQUEwQztFQUMxQyx1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQ0FBbUM7RUFDbkMsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwwQkFBMEI7RUFDMUIsNEJBQTRCO0VBQzVCLGFBQWE7RUFDYixhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBtYXJnaW46IDBweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gIC0tYm9keUNvbG9yOiB3aGl0ZTtcXG4gIC0tdGV4dENvbG9yOiBibGFjaztcXG4gIC0tdGhlbWVDb2xvcjogZGFya3NsYXRlZ3JleTtcXG4gIC0tYm9keUZvbnQ6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2R5Q29sb3IpO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWJvZHlGb250KTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luOiAxcHg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XFxuICByb3ctZ2FwOiA0cHg7XFxufVxcblxcbi5oZXJvLXRpdGxlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDNyZW07XFxuICBmb250LXNpemU6IG1pbig2dncsIDQwcHgpO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGNvbG9yOiB2YXIoLS10aGVtZUNvbG9yKTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLXRoZW1lQ29sb3IpO1xcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogNXB4O1xcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogZ3Jvb3ZlO1xcbn1cXG5cXG4ubm90YXNrLXBhcmEge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbn1cXG5cXG4uc2lkZWJhcj5kaXYge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkUHJvamVjdGJ0biB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZm9udC1zaXplOiBtZWRpdW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZUNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1ib2R5Q29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNvdmVyUGFnZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiA5OTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5mb3JtIHtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBnYXA6IDJyZW07XFxuICBmb250LXNpemU6IGxhcmdlcjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuZm9ybT5kaXYge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHJvdy1nYXA6IDVweDtcXG59XFxuXFxuLmNsb3NlQnRuIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgY29sb3I6IHZhcigtLXRleHRDb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2R5Q29sb3IpO1xcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4uZm9ybVRpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IHgtbGFyZ2U7XFxufVxcblxcbmZvcm0gaW5wdXQsXFxuc2VsZWN0IHtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xcbn1cXG5cXG4uZm9ybVN1Ym1pdCB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhlbWVDb2xvcik7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IHNvbGlkO1xcbiAgZm9udC1zaXplOiBtZWRpdW07XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uUHJvamVjdENvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgZ2FwOiAycmVtO1xcbn1cXG5cXG4ucHJvamVjdE5hbWUge1xcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xcbn1cXG5cXG4ucHJvamVjdFRpbGUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDJmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHJvdy1nYXA6IDE1cHg7XFxuICBjb2x1bW4tZ2FwOiA4cHg7XFxuICBib3JkZXI6IDZweCBzb2xpZCBncmV5O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50YXNrRGl2IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgZ3JpZC1jb2x1bW46IC0xLzE7XFxuICByb3ctZ2FwOiA1cHg7XFxufVxcblxcbi50YXNrIHtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMmZyIDJmciAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICBib3JkZXI6IDRweCBncmV5IHNvbGlkO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGNvbHVtbi1nYXA6IDhweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb21wbGV0ZSB7XFxuICBib3JkZXItY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4uY2hhbmdlQnRuIHtcXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xcbiAgYm9yZGVyOiBibGFjayAycHggc29saWQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLnJlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5ncmVlbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZUNvbG9yKTtcXG59XFxuXFxuLmFkZFRhc2tCdG4ge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhlbWVDb2xvcik7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZm9udC1zaXplOiBtZWRpdW07XFxuICBib3JkZXI6IDJweCBibGFjayBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLm5vVGFza0RpdiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBtYXJnaW4tdG9wOiAzcmVtO1xcbiAgZm9udC1zaXplOiBsYXJnZTtcXG59XFxuXFxuLnJpZ2h0YmFyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XFxuICByb3ctZ2FwOiAxcmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vUHJvamVjdC5qc1wiO1xuaW1wb3J0IFRvZG8gZnJvbSBcIi4vVG9Eby5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBZGRUYXNrUHJvamVjdHtcblxuICBjb25zdHJ1Y3RvcihfYXJyLCBfcHJvcCl7XG4gICAgdGhpcy5hcnIgPSBfYXJyO1xuICAgIHRoaXMucHJvcCA9IF9wcm9wO1xuICB9XG5cbiAgbWFrZVByb2plY3RCdXR0b24oKXtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidG4udGV4dENvbnRlbnQgPSBgQWRkIFByb2plY3RgO1xuICAgIGJ0bi5jbGFzc05hbWUgPSBcImFkZFByb2plY3RidG5cIjtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT50aGlzLmFkZFRhc2tDb3ZlclBhZ2UoXCJQcm9qZWN0XCIpKTtcbiAgICByZXR1cm4gYnRuO1xuICB9XG5cbiAgc2hvd05vVGFza3MoKXtcbiAgICBjb25zdCBub1Rhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IG5vVGFza1BhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBsZXQgbm9UYXNrUGFyYUNvbnRlbnQgPSBgVGhlcmUgYXJlIG5vIGN1cnJlbnQgJHt0aGlzLnByb3B9YFxuICAgIG5vVGFza1BhcmEudGV4dENvbnRlbnQgPSBub1Rhc2tQYXJhQ29udGVudDtcbiAgICBub1Rhc2tQYXJhLmNsYXNzTGlzdC5hZGQoXCJub3Rhc2stcGFyYVwiKTtcbiAgICBub1Rhc2tEaXYuY2xhc3NOYW1lID0gXCJub1Rhc2tEaXZcIjtcbiAgICBub1Rhc2tEaXYuYXBwZW5kQ2hpbGQobm9UYXNrUGFyYSk7XG4gICAgcmV0dXJuIG5vVGFza0RpdjtcbiAgfVxuXG4gIHJlbmRlclJpZ2h0YmFyKCl7XG4gICAgY29uc3QgW3JpZ2h0YmFyXSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJyaWdodGJhclwiKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIlByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHRoaXMuYXJyKSk7XG4gICAgcmlnaHRiYXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICByaWdodGJhci5hcHBlbmRDaGlsZCh0aGlzLm1ha2VQcm9qZWN0QnV0dG9uKCkpO1xuICAgIGlmKHRoaXMuYXJyLmxlbmd0aCA9PT0gMCl7XG4gICAgICByaWdodGJhci5hcHBlbmRDaGlsZCh0aGlzLnNob3dOb1Rhc2tzKCkpO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgcmlnaHRiYXIuYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXJQcm9qZWN0KCkpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlclByb2plY3QoKXtcbiAgICBjb25zdCBQcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgUHJvamVjdENvbnRhaW5lci5jbGFzc05hbWUgPSBcIlByb2plY3RDb250YWluZXJcIjtcbiAgICBmb3IobGV0IGkgPSAwOyBpPHRoaXMuYXJyLmxlbmd0aDsgaSsrKXtcbiAgICAgIFByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tYWtlUHJvamVjdFRpbGUodGhpcy5hcnJbaV0pKTsgIFxuICAgIH1cbiAgICByZXR1cm4gUHJvamVjdENvbnRhaW5lcjtcbiAgfVxuXG4gIG1ha2VBZGRUYXNrQnV0dG9uKCl7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnRuLmNsYXNzTmFtZSA9IFwiYWRkVGFza0J0blwiXG4gICAgYnRuLnRleHRDb250ZW50ID0gXCJBZGQgVGFza1wiO1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+e1xuICAgICAgY29uc3QgcGFyZW50ID0gZS50YXJnZXQucGFyZW50Tm9kZTtcbiAgICAgIHRoaXMuYWRkVGFza0NvdmVyUGFnZShcIlRhc2tcIiwgcGFyZW50KVxuICAgIH0pXG4gICAgcmV0dXJuIGJ0bjtcbiAgfVxuXG4gIG1ha2VQcm9qZWN0VGlsZShfcHJvamVjdCl7XG4gICAgY29uc3QgcHJvamVjdFRpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0VGlsZS5jbGFzc05hbWUgPSBcInByb2plY3RUaWxlXCI7XG4gICAgcHJvamVjdFRpbGUuc2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiLCBfcHJvamVjdC5pZCk7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcHJvamVjdE5hbWUuY2xhc3NOYW1lID0gYHByb2plY3ROYW1lYDtcbiAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IF9wcm9qZWN0LnRpdGxlO1xuICAgIHByb2plY3RUaWxlLmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcbiAgICBwcm9qZWN0VGlsZS5hcHBlbmRDaGlsZCh0aGlzLm1ha2VBZGRUYXNrQnV0dG9uKCkpO1xuICAgIHByb2plY3RUaWxlLmFwcGVuZENoaWxkKHRoaXMubWFrZURlbGV0ZWJ0bihcIlByb2plY3RcIikpO1xuICAgIF9wcm9qZWN0LnRhc2tzLmxlbmd0aCE9PTA/cHJvamVjdFRpbGUuYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXJUYXNrcyhfcHJvamVjdC50YXNrcykpOlwiXCI7XG4gICAgcmV0dXJuIHByb2plY3RUaWxlO1xuICB9XG5cbiAgcmVuZGVyVGFza3MoX3Rhc2tzKXtcbiAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKFwidGFza0RpdlwiKTtcbiAgICBmb3IobGV0IGkgPSAwOyBpPF90YXNrcy5sZW5ndGg7IGkrKyl7XG4gICAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHRhc2suY2xhc3NOYW1lID0gXCJ0YXNrXCI7XG4gICAgICBmb3IoY29uc3Qga2V5IGluIF90YXNrc1tpXSl7XG4gICAgICAgIGNvbnN0IHRhc2tEZXRhaWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHRhc2tEZXRhaWwuY2xhc3NMaXN0LmFkZChcInRhc2tEZXRhaWxcIik7XG4gICAgICAgIGlmKGtleSE9PVwiaWRcIiYma2V5IT09XCJpc0NvbXBsZXRlXCImJmtleSE9PVwicGFyZW50SWRcIil7XG4gICAgICAgICAgdGFza0RldGFpbC50ZXh0Q29udGVudCA9IF90YXNrc1tpXVtrZXldO1xuICAgICAgICAgIHRhc2suYXBwZW5kQ2hpbGQodGFza0RldGFpbCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihrZXk9PT1cImlzQ29tcGxldGVcIil7XG4gICAgICAgICAgX3Rhc2tzW2ldW2tleV0/dGFzay5jbGFzc0xpc3QuYWRkKFwiY29tcGxldGVcIik6dGFzay5jbGFzc0xpc3QucmVtb3ZlKFwiY29tcGxldGVcIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRhc2suc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgX3Rhc2tzW2ldLmlkKTtcbiAgICAgIHRhc2suc2V0QXR0cmlidXRlKCdkYXRhLXBhcmVudGlkJywgX3Rhc2tzW2ldLnBhcmVudElkKTtcbiAgICAgIHRhc2suYXBwZW5kQ2hpbGQodGhpcy5tYWtlTWFya0NvbXBsZXRlYnRuKCkpO1xuICAgICAgdGFzay5hcHBlbmRDaGlsZCh0aGlzLm1ha2VEZWxldGVidG4oXCJUYXNrXCIpKTtcbiAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGFzayk7XG4gICAgfVxuICAgIHJldHVybiB0YXNrRGl2O1xuICB9XG5cbiAgbWFrZU1hcmtDb21wbGV0ZWJ0bigpe1xuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gXCJEb25lXCI7XG4gICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoXCJjaGFuZ2VCdG5cIiwgXCJncmVlblwiKTtcbiAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG4gICAgICBjb25zdCBwYXJlbnRJZCA9IGRlbGV0ZUJ0bi5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZShcImRhdGEtcGFyZW50aWRcIik7XG4gICAgICBjb25zdCBzZWxmSWQgPSBkZWxldGVCdG4ucGFyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIpO1xuICAgICAgZm9yKGxldCBpID0gMDsgaTx0aGlzLmFyci5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgaWYodGhpcy5hcnJbaV0uaWQgPT09IHBhcmVudElkKXtcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGo8dGhpcy5hcnJbaV0udGFza3MubGVuZ3RoOyBqKyspe1xuICAgICAgICAgICAgICBpZih0aGlzLmFycltpXS50YXNrc1tqXS5pZCA9PT0gc2VsZklkKXtcbiAgICAgICAgICAgICAgICB0aGlzLmFycltpXS50YXNrc1tqXS5pc0NvbXBsZXRlPSF0aGlzLmFycltpXS50YXNrc1tqXS5pc0NvbXBsZXRlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5yZW5kZXJSaWdodGJhcigpO1xuICAgIH0pXG4gICAgcmV0dXJuIGRlbGV0ZUJ0bjtcbiAgfVxuXG4gIG1ha2VEZWxldGVidG4oX3R5cGUpe1xuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoXCJjaGFuZ2VCdG5cIiwgXCJyZWRcIik7XG4gICAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcbiAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+eyAgXG4gICAgICBpZihfdHlwZT09PVwiVGFza1wiKXtcbiAgICAgICAgY29uc3QgcGFyZW50SWQgPSBkZWxldGVCdG4ucGFyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBhcmVudGlkXCIpO1xuICAgICAgICBjb25zdCBzZWxmSWQgPSAgZGVsZXRlQnRuLnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiKTtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaTx0aGlzLmFyci5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBpZih0aGlzLmFycltpXS5pZCA9PT0gcGFyZW50SWQpe1xuICAgICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqPHRoaXMuYXJyW2ldLnRhc2tzLmxlbmd0aDsgaisrKXtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmFycltpXS50YXNrc1tqXS5pZCA9PT0gc2VsZklkKXtcbiAgICAgICAgICAgICAgICAgIHRoaXMuYXJyW2ldLnRhc2tzLnNwbGljZShqLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgY29uc3Qgc2VsZklkID0gZGVsZXRlQnRuLnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiKTtcbiAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpPHRoaXMuYXJyLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGlmKHRoaXMuYXJyW2ldLmlkID09PSBzZWxmSWQpe1xuICAgICAgICAgICAgICB0aGlzLmFyci5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5yZW5kZXJSaWdodGJhcigpO1xuICAgIH0pXG4gICAgcmV0dXJuIGRlbGV0ZUJ0bjtcbiAgfVxuXG4gIG1ha2VUYXNrKCl7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZTtcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlXCIpLnZhbHVlO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmlvcml0eVwiKS52YWx1ZTtcbiAgICBjb25zdCBpZCA9IHRoaXMuaWRHZW5lcmF0b3IoKTtcbiAgICBjb25zdCB0YXNrID0gbmV3IFRvZG8odGl0bGUsIGRhdGUsIHByaW9yaXR5LCBpZCk7XG4gICAgcmV0dXJuIHRhc2s7XG4gIH1cblxuICBhZGRUYXNrVG9BcnIocGFyZW50KXtcbiAgICBjb25zdCB0YXNrID0gdGhpcy5tYWtlVGFzaygpO1xuICAgIGNvbnN0IHBhcmVudElkID0gcGFyZW50LmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIik7XG4gICAgdGFzay5wYXJlbnRJZCA9IHBhcmVudElkO1xuICAgIGZvcihsZXQgaSA9IDA7IGk8dGhpcy5hcnIubGVuZ3RoOyBpKyspe1xuICAgICAgaWYodGhpcy5hcnJbaV0uaWQ9PT1wYXJlbnRJZCl7XG4gICAgICAgIHRoaXMuYXJyW2ldLnRhc2tzLnB1c2godGFzayk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucmVuZGVyUmlnaHRiYXIoKTtcbiAgfVxuXG4gIGFkZFByb2plY3QoKXtcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZVwiKTtcbiAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QobmFtZS52YWx1ZSwgdGhpcy5pZEdlbmVyYXRvcigpKTtcbiAgICB0aGlzLmFyci5wdXNoKHByb2plY3QpXG4gICAgdGhpcy5yZW5kZXJSaWdodGJhcigpO1xuICB9XG5cbiAgYWRkVGFza0NvdmVyUGFnZShfZm9yLCBwYXJlbnQ9XCJcIil7XG4gICAgY29uc3QgY292ZXJQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY292ZXJQYWdlLmNsYXNzTmFtZSA9IFwiY292ZXJQYWdlXCI7XG4gICAgY292ZXJQYWdlLmlkID0gXCJjb3ZlclBhZ2VcIjtcbiAgICBjb3ZlclBhZ2UuYXBwZW5kQ2hpbGQodGhpcy5jb21tb25Gb3JtKF9mb3IsIHBhcmVudCkpO1xuICAgIGNvdmVyUGFnZS5hcHBlbmRDaGlsZCh0aGlzLmNsb3NlQnV0dG9uKCkpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKGNvdmVyUGFnZSk7XG4gIH1cblxuICBhZGRUYXNrRm9ybSgpe1xuICAgIGNvbnN0IHRhc2tGb3JtID0gYFxuICAgIDxkaXY+XG4gICAgPGxhYmVsIGZvcj1cInRpdGxlXCI+VGFzayBUaXRsZTwvbGFiZWw+XG4gICAgPGlucHV0IGlkPVwidGl0bGVcIiBuYW1lPVwidGl0bGVcIiB0eXBlPVwidGV4dGJveFwiIHJlcXVpcmVkPlxuICAgIDwvZGl2PlxuICAgIDxkaXY+XG4gICAgPGxhYmVsIGZvcj1cImRhdGVcIj5UYXNrIERhdGU8L2xhYmVsPlxuICAgIDxpbnB1dCBpZD1cImRhdGVcIiBuYW1lPVwiZGF0ZVwiIHR5cGU9XCJkYXRlXCIgcmVxdWlyZWQ+XG4gICAgPC9kaXY+XG4gICAgPGRpdj5cbiAgICA8bGFiZWwgZm9yPVwicHJpb3JpdHlcIj5Qcmlvcml0eTwvbGFiZWw+XG4gICAgPHNlbGVjdCBpZD1cInByaW9yaXR5XCIgcmVxdWlyZWQ+XG4gICAgPG9wdGlvbj5Mb3c8L29wdGlvbj5cbiAgICA8b3B0aW9uPk1lZGl1bTwvb3B0aW9uPlxuICAgIDxvcHRpb24+SGlnaDwvb3B0aW9uPlxuICAgIDxvcHRpb24+VXJnZW50PC9vcHRpb24+XG4gICAgPC9zZWxlY3Q+XG4gICAgPC9kaXY+XG4gICAgYFxuICAgIHJldHVybiB0YXNrRm9ybTtcbiAgfVxuXG4gIGFkZFByb2plY3RGb3JtKCl7XG4gICAgY29uc3QgcHJvamVjdERpdiA9IGBcbiAgICA8ZGl2PlxuICAgIDxsYWJlbCBmb3I9XCJ0aXRsZVwiPlByb2plY3QgVGl0bGU8L2xhYmVsPlxuICAgIDxpbnB1dCBpZD1cInRpdGxlXCIgbmFtZT1cInRpdGxlXCIgdHlwZT1cInRleHRib3hcIiByZXF1aXJlZD5cbiAgICA8L2Rpdj5cbiAgICBgXG4gICAgcmV0dXJuIHByb2plY3REaXY7XG4gIH1cblxuICBjb21tb25Gb3JtKF90eXBlLCBwYXJlbnQ9XCJcIil7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBmb3JtLm1ldGhvZCA9IFwicG9zdFwiO1xuICAgIGZvcm0uY2xhc3NMaXN0LmFkZChcIm92ZXJsYXlGb3JtXCIpO1xuICAgIGZvcm0uaW5uZXJIVE1MICs9IGA8cCBjbGFzcz1cImZvcm1UaXRsZVwiPkVudGVyIGRldGFpbHM8L3A+YFxuICAgIGNvbnN0IGNvbmRpdGlvbmFsRm9ybSA9IF90eXBlPT1cIlByb2plY3RcIj90aGlzLmFkZFByb2plY3RGb3JtKCk6dGhpcy5hZGRUYXNrRm9ybSgpO1xuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGA8YnV0dG9uIGNsYXNzPVwiZm9ybVN1Ym1pdFwiPkFkZDwvYnV0dG9uPmBcbiAgICBmb3JtLmlubmVySFRNTCArPSBjb25kaXRpb25hbEZvcm0rc3VibWl0QnV0dG9uO1xuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSk9PntcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIF90eXBlPT09XCJUYXNrXCI/dGhpcy5hZGRUYXNrVG9BcnIocGFyZW50KTp0aGlzLmFkZFByb2plY3QoKTtcbiAgICAgIGNvbnN0IHBhcmVudE5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvdmVyUGFnZVwiKTtcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQocGFyZW50Tm9kZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGZvcm07XG4gIH1cblxuICBjbG9zZUJ1dHRvbigpe1xuICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjbG9zZUJ0bi50eXBlID0gXCJidXR0b25cIjtcbiAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3ZlclBhZ2UnKSlcbiAgfSlcbiAgICBjbG9zZUJ0bi50ZXh0Q29udGVudCA9IFwiWFwiO1xuICAgIGNsb3NlQnRuLmNsYXNzTGlzdC5hZGQoXCJjbG9zZUJ0blwiKTtcbiAgICByZXR1cm4gY2xvc2VCdG47XG4gIH1cblxuICBpZEdlbmVyYXRvcigpe1xuICAgIGNvbnN0IGFscGhhYmV0cyA9IFtcImFcIiwgXCJiXCIsIFwiY1wiLCBcImRcIiwgXCJlXCIsIFwiZlwiLCBcImdcIiwgXCJoXCIsIFwiaVwiXTtcbiAgICBsZXQgaWQgPSBcIlwiO1xuICAgIGlkKz0gYWxwaGFiZXRzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSogNCldO1xuICAgIGZvcihsZXQgaSA9IDA7IGk8NzsgaSsrKXtcbiAgICAgIGlkICs9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICB9XG4gICAgcmV0dXJuIGlkO1xuICB9XG5cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0e1xuICBcbiAgdGFza3MgPSBbXTtcbiAgaXNDb21wbGV0ZSA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IoX3RpdGxlLCBfaWQpe1xuICAgIHRoaXMudGl0bGUgPSBfdGl0bGU7XG4gICAgdGhpcy5pZCA9IF9pZDtcbiAgfVxuICBcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUb0Rve1xuXG4gIHBhcmVudElkID0gXCJcIjtcblxuICBjb25zdHJ1Y3RvcihfdGl0bGUsIF9kdWVEYXRlLCBfcHJpb3JpdHksIF9pZCl7XG4gICAgdGhpcy50aXRsZSA9IF90aXRsZTtcbiAgICB0aGlzLmR1ZURhdGUgPSBfZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gX3ByaW9yaXR5O1xuICAgIHRoaXMuaWQgPSBfaWQ7XG4gICAgdGhpcy5pc0NvbXBsZXRlID0gZmFsc2U7XG4gIH1cbn0iLCJpbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcbmltcG9ydCBQYWdlTGF5b3V0IGZyb20gXCIuL3BhZ2VMYXlvdXQuanNcIjtcbmltcG9ydCBBZGRUYXNrUHJvamVjdCBmcm9tIFwiLi9BZGRUYXNrUHJvamVjdC5qc1wiO1xuXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgdGFza0FyciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJQcm9qZWN0c1wiKSl8fFtdO1xuICBjb25zdCBwYWdlID0gbmV3IFBhZ2VMYXlvdXQoKTtcbiAgcGFnZS5jcmVhdGVMYXlvdXQoKTtcbiAgY29uc3QgYnRuID0gbmV3IEFkZFRhc2tQcm9qZWN0KHRhc2tBcnIsIFwiUHJvamVjdFwiKTtcbiAgYnRuLnJlbmRlclJpZ2h0YmFyKCk7IFxufVxuXG5cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2VMYXlvdXR7XG4gIFxuICBjcmVhdGVMYXlvdXQoKXtcbiAgICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgXG4gICAgPGRpdiBjbGFzcz1cImhlcm8tdGl0bGVcIj5MaXN0b3BpYTwvZGl2PlxuICAgIFxuICAgIDxkaXYgY2xhc3M9XCJyaWdodGJhclwiPjwvZGl2PlxuXG4gICAgPC9kaXY+YDtcbiAgfVxuXG59ICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=