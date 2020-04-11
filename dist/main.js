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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/domChange.js":
/*!**************************!*\
  !*** ./src/domChange.js ***!
  \**************************/
/*! exports provided: playGame, animations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"playGame\", function() { return playGame; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"animations\", function() { return animations; });\n/* harmony import */ var _ticSet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ticSet */ \"./src/ticSet.js\");\n\n\n// Animations\n\nconst squares = document.querySelectorAll('.pos');\nconst playBtn = document.querySelector('#play');\nconst gameContainer = document.querySelector('.game-container');\nconst player1Input = document.querySelector('#player-1');\nconst player2Input = document.querySelector('#player-2');\nconst player1Name = document.querySelector('.player-1-name');\nconst player2Name = document.querySelector('.player-2-name');\nconst playersShow = document.querySelectorAll('.player-container');\nconst inputContainer = document.querySelector('.input-container');\nconst winnerField = document.querySelector('.winner-field');\nconst winnerDiv = document.querySelector('.winner');\nconst playAgain = document.querySelector('#play-again');\nlet nClick = 0;\n\nconst animations = () => {\n  const InputCheck = (input1, input2) => {\n    const boxCheck = event => {\n      event.addEventListener('input', () => {\n        if (event.value.length !== 0 && event.value.length < 3) {\n          event.style.boxShadow = '0px 0px 5px 2px red';\n        } else {\n          event.style.boxShadow = '';\n        }\n      });\n    };\n    boxCheck(input1);\n    boxCheck(input2);\n    const readyTG = (event1, event2) => {\n      event1.oninput = () => {\n        if (event1.value.length >= 3 && event2.value.length >= 3) {\n          playBtn.style.opacity = '1';\n          playBtn.style.pointerEvents = 'inherit';\n        } else {\n          playBtn.style.opacity = '';\n          playBtn.style.pointerEvents = '';\n        }\n      };\n      event2.oninput = () => {\n        if (event1.value.length >= 3 && event2.value.length >= 3) {\n          playBtn.style.opacity = '1';\n          playBtn.style.pointerEvents = 'inherit';\n        } else {\n          playBtn.style.opacity = '';\n          playBtn.style.pointerEvents = '';\n        }\n      };\n    };\n    readyTG(input1, input2);\n  };\n\n  InputCheck(player1Input, player2Input);\n\n  playBtn.onmouseenter = () => {\n    gameContainer.style.opacity = '0.3';\n  };\n\n\n  playBtn.onclick = () => {\n    gameContainer.style.opacity = '1';\n    gameContainer.style.pointerEvents = 'inherit';\n    gameContainer.style.marginTop = '0';\n\n    playersShow.forEach(player => {\n      player.style.opacity = '1';\n    });\n\n    inputContainer.style.marginTop = '0';\n    inputContainer.style.opacity = '0';\n    inputContainer.style.pointerEvents = 'none';\n    inputContainer.style.flexBasis = '20%';\n    inputContainer.style.minWidth = '20%';\n\n    squares.forEach(square => {\n      square.style.width = '120px';\n      square.style.height = '120px';\n    });\n\n    window.setTimeout(() => {\n      playBtn.style.visibility = 'hidden';\n      inputContainer.style.visibility = 'hidden';\n    }, 1000);\n  };\n\n  playBtn.onmouseleave = () => {\n    if (nClick === 0) {\n      gameContainer.style.opacity = '';\n    }\n  };\n};\n\nconst afterWin = places => {\n  places.empty();\n  gameContainer.style.pointerEvents = '';\n  winnerDiv.style.opacity = '1';\n  winnerDiv.style.pointerEvents = 'inherit';\n  squares.forEach(square => {\n    square.style.width = '';\n    square.style.height = '';\n    square.style.fontSize = '3em';\n  });\n\n  playAgain.onclick = () => {\n    squares.forEach(square => {\n      square.innerHTML = '';\n      square.style.width = '120px';\n      square.style.height = '120px';\n      square.style.fontSize = '';\n    });\n    gameContainer.style.pointerEvents = 'inherit';\n    winnerDiv.style.opacity = '';\n    winnerDiv.style.pointerEvents = '';\n  };\n\n  return false;\n};\n\nconst winCondition = (places, player1, player2) => {\n  const { board } = places;\n  let anyWinner = true;\n  for (let index = 0; index < 3; index += 1) {\n    if (\n      board[3 * index] === board[3 * index + 1]\n      && board[3 * index + 1] === board[3 * index + 2]\n      && board[3 * index] !== ''\n    ) {\n      if (board[3 * index] === 'X') {\n        winnerField.innerHTML = `${player1.name} won!`;\n      } else {\n        winnerField.innerHTML = `${player2.name} won!`;\n      }\n      anyWinner = afterWin(places);\n    } else if (\n      board[index] === board[index + 3]\n      && board[index] === board[index + 6]\n      && board[index] !== ''\n    ) {\n      if (board[index] === 'X') {\n        winnerField.innerHTML = `${player1.name} won!`;\n      } else {\n        winnerField.innerHTML = `${player2.name} won!`;\n      }\n      anyWinner = afterWin(places);\n    }\n  }\n  if (board[0] === board[4] && board[0] === board[8] && board[4] !== '') {\n    if (board[4] === 'X') {\n      winnerField.innerHTML = `${player1.name} won!`;\n    } else {\n      winnerField.innerHTML = `${player2.name} won!`;\n    }\n    anyWinner = afterWin(places);\n  } else if (board[2] === board[4] && board[2] === board[6] && board[4] !== '') {\n    if (board[4] === 'X') {\n      winnerField.innerHTML = `${player1.name} won!`;\n    } else {\n      winnerField.innerHTML = `${player2.name} won!`;\n    }\n    anyWinner = afterWin(places);\n  }\n  if (anyWinner) {\n    let posCount = 0;\n    board.forEach(position => {\n      if (position === '') {\n        posCount += 1;\n      }\n    });\n    if (posCount === 0) {\n      winnerField.innerHTML = 'Boring...';\n      afterWin(places);\n    }\n  }\n};\n\nfunction gamePlay(player1, player2) {\n  let count = 0;\n  let icono = '';\n  const board = Object(_ticSet__WEBPACK_IMPORTED_MODULE_0__[\"Board\"])();\n  const game = Object(_ticSet__WEBPACK_IMPORTED_MODULE_0__[\"GameFlow\"])(board, player1, player2);\n  squares.forEach(square => {\n    square.onclick = () => {\n      if (count % 2 === 0) {\n        icono = player1.icon;\n      } else {\n        icono = player2.icon;\n      }\n      if (game.move(square.classList.value.slice(8) - 1, icono)) {\n        square.innerHTML = icono;\n        if (count > 3) {\n          winCondition(board, player1, player2);\n        }\n        count += 1;\n      }\n    };\n  });\n}\n\nconst playGame = () => {\n  playBtn.addEventListener('click', () => {\n    playBtn.style.pointerEvents = 'none';\n    playBtn.style.height = '0';\n    playBtn.style.marginTop = '0';\n    playBtn.style.opacity = '0';\n    \n    player1Name.innerHTML = player1Input.value;\n    player2Name.innerHTML = player2Input.value;\n    const player1 = Object(_ticSet__WEBPACK_IMPORTED_MODULE_0__[\"Player\"])(player1Input.value, 'X');\n    const player2 = Object(_ticSet__WEBPACK_IMPORTED_MODULE_0__[\"Player\"])(player2Input.value, 'O');\n    gamePlay(player1, player2);\n    nClick += 1;\n  });\n};\n\n\n\n//# sourceURL=webpack:///./src/domChange.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _domChange__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domChange */ \"./src/domChange.js\");\n\n\n\nObject(_domChange__WEBPACK_IMPORTED_MODULE_1__[\"animations\"])();\nObject(_domChange__WEBPACK_IMPORTED_MODULE_1__[\"playGame\"])();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/style.scss?");

/***/ }),

/***/ "./src/ticSet.js":
/*!***********************!*\
  !*** ./src/ticSet.js ***!
  \***********************/
/*! exports provided: Player, Board, GameFlow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Player\", function() { return Player; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Board\", function() { return Board; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GameFlow\", function() { return GameFlow; });\nconst Player = (name, icon) => ({ name, icon });\n\nconst Board = () => {\n  const board = ['', '', '', '', '', '', '', '', ''];\n  const move = (pos, icon) => {\n    board[pos] = icon;\n  };\n  const empty = () => {\n    for (let index = 0; index < board.length; index += 1) {\n      board[index] = '';\n    }\n  };\n  return { board, move, empty };\n};\n\nconst GameFlow = (game) => {\n  const move = (pos, icon) => {\n    if (game.board[pos] === '') {\n      game.move(pos, icon);\n      return true;\n    }\n    return false;\n  };\n  return { move };\n};\n\n\n\n//# sourceURL=webpack:///./src/ticSet.js?");

/***/ })

/******/ });