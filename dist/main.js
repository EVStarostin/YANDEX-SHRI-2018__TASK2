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

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./node_modules/less-loader/dist/cjs.js?!./src/less/style.less":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/lib??ref--6-2!./node_modules/less-loader/dist/cjs.js??ref--6-3!./src/less/style.less ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "body,html{height:100%}body{color:#333;font-family:Arial,sans-serif;font-size:14px}.wrapper{-webkit-box-sizing:border-box;box-sizing:border-box;margin:0 auto;max-width:1366px;min-width:320px;padding:0 40px}.header-and-main{min-height:100%}.header-and-main.clr:after{content:\"\";display:block;height:64px}.section-heading{font-size:18px;margin:0 0 20px}.page_header{border-bottom:1px solid #f0f0f0}.page_header .logo-and-nav{-ms-flex-align:center;-ms-flex-wrap:wrap;-webkit-box-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;flex-wrap:wrap;padding:22px 0}.page_header .logo a{display:block;padding:2px 0 5px}.page_header .menu-btn{background:url(" + escape(__webpack_require__(/*! ../img/icon_list.svg */ "./src/img/icon_list.svg")) + ") no-repeat 50%;border:none;display:none;height:30px;margin-left:auto;width:30px}.page_header .menu{display:-webkit-box;display:-ms-flexbox;display:flex;list-style:none}.page_header .menu a{-o-transition:opacity .2s ease-in-out;-webkit-transition:opacity .2s ease-in-out;color:#333;font-size:16px;font-weight:700;line-height:20px;margin:0 10px;opacity:.6;padding:5px;text-decoration:none;transition:opacity .2s ease-in-out}.page_header .menu a:not(:last-child){margin-right:8px}.page_header .menu .active,.page_header .menu a:hover{opacity:1}.billet{-ms-flex-direction:column;-ms-flex-pack:end;-webkit-box-direction:normal;-webkit-box-orient:vertical;-webkit-box-pack:end;-webkit-box-sizing:border-box;background:#f7f7f7;background-position:14px 14px;background-repeat:no-repeat;border-radius:20px;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;flex-direction:column;height:120px;justify-content:flex-end;padding:14px;position:relative;text-align:left;width:200px}.billet .name{font-weight:700;margin:0 0 4px}.billet .action{color:#858585;font-size:12px;margin:0}.billet.icon_sun{background-image:url(" + escape(__webpack_require__(/*! ../img/icon_sun.svg */ "./src/img/icon_sun.svg")) + ")}.billet.icon_sun_2{background-image:url(" + escape(__webpack_require__(/*! ../img/icon_sun_2.svg */ "./src/img/icon_sun_2.svg")) + ")}.billet.icon_temperature{background-image:url(" + escape(__webpack_require__(/*! ../img/icon_temperature.svg */ "./src/img/icon_temperature.svg")) + ")}.billet.icon_temperature_2{background-image:url(" + escape(__webpack_require__(/*! ../img/icon_temperature_2.svg */ "./src/img/icon_temperature_2.svg")) + ")}.billet.icon_scheduled{background-image:url(" + escape(__webpack_require__(/*! ../img/icon_scheduled.svg */ "./src/img/icon_scheduled.svg")) + ")}.main-and-scenarios{-ms-flex-pack:justify;-webkit-box-pack:justify;display:-webkit-box;display:-ms-flexbox;display:flex;justify-content:space-between;padding:29px 0}.main-and-scenarios .section-main,.main-and-scenarios .section-scenarios{width:49%}.main-and-scenarios .inner-block{-ms-flex-pack:justify;-webkit-box-pack:justify;border-radius:20px;display:-webkit-box;display:-ms-flexbox;display:flex;height:331px;justify-content:space-between;width:100%}.section-main .inner-block{-webkit-box-sizing:border-box;background-image:url(" + escape(__webpack_require__(/*! ../img/bg@1x.png */ "./src/img/bg@1x.png")) + ");background-position:50%;background-repeat:no-repeat;background-size:cover;box-sizing:border-box;padding:25px 20px 25px 25px}.section-main .greeting{font-size:27px;font-weight:700;margin:0}.section-main .status-text{margin:6px 0 0}.section-main .temperature-blocks{margin-top:25px}.section-main .temperature-blocks:after{background-image:url(" + escape(__webpack_require__(/*! ../img/cloud-drizzle.svg */ "./src/img/cloud-drizzle.svg")) + ");content:\"\";display:inline-block;height:26px;margin-left:5px;width:26px}.section-main .temperature-blocks .block{display:inline-block}.section-main .temperature-blocks .block:not(:last-child){margin-right:15px}.section-main .temperature-blocks .block .label{color:#858585;margin:0}.section-main .temperature-blocks .block .temperature{font-size:36px;font-weight:700;margin:4px 0 0}.section-main .devices-slider{height:331px;margin:-25px 0;min-width:200px;overflow:hidden;position:relative;width:200px}.section-main .devices{bottom:0;left:0;list-style:none;margin:0;overflow-y:scroll;padding:0;position:absolute;top:0}.section-main .devices li{margin:15px 0}.section-main .devices li:first-child{margin-top:20px}.section-main .devices li:last-child{margin-bottom:20px}.section-main .devices li:nth-child(3) .billet:after{-o-transition:opacity .2s ease-in-out;-webkit-transition:opacity .2s ease-in-out;background-image:url(" + escape(__webpack_require__(/*! ../img/double-arrow-up.svg */ "./src/img/double-arrow-up.svg")) + ");content:\"\";height:16px;left:50%;margin-left:-8px;position:absolute;top:13px;transition:opacity .2s ease-in-out;width:16px}.section-main .devices.scrolled li:nth-child(3) .billet:after{opacity:0}.section-scenarios .scenarios-slider{margin:-4px -23px -8px -2px;overflow:hidden;padding:2px}.section-scenarios .heading-and-controls{display:-webkit-box;display:-ms-flexbox;display:flex}.section-scenarios .heading-and-controls .controls{margin-left:auto}.section-scenarios .heading-and-controls .controls button{background:none;border:none;opacity:.3;padding:5px 10px}.section-scenarios .scenarios{-ms-flex-pack:start;-ms-flex-wrap:wrap;-webkit-box-pack:start;display:-webkit-box;display:-ms-flexbox;display:flex;flex-wrap:wrap;justify-content:flex-start;list-style:none;margin:0;padding:0}.section-scenarios .scenarios button{background:none;border:none;margin:2px 15px 15px 2px;padding:0}.section-scenarios .scenarios button .billet{height:100px;width:200px}.section-scenarios .scenarios button:focus{outline:none}.section-scenarios .scenarios button:focus .billet,.section-scenarios .scenarios button:hover .billet{-webkit-box-shadow:0 2px 6px 0 rgba(197,186,186,.9);box-shadow:0 2px 6px 0 rgba(197,186,186,.9)}.section-scenarios .scenarios button:hover .billet{background-color:#fff;border-radius:20px;cursor:pointer}.section-scenarios .scenarios button:active .billet{-webkit-box-shadow:inset 0 2px 6px 0 rgba(197,186,186,.9);background-color:#fff;box-shadow:inset 0 2px 6px 0 rgba(197,186,186,.9)}.section-fav-devides .top-bar{-ms-flex-align:center;-webkit-box-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;margin-bottom:25px}.section-fav-devides .top-bar .section-heading{margin:0}.section-fav-devides .top-bar .controls{margin-left:auto}.section-fav-devides .top-bar .controls button{background:none;border:none;opacity:.3;padding:5px 10px}.section-fav-devides .top-bar .filter{display:-webkit-box;display:-ms-flexbox;display:flex;list-style:none;margin:0 0 0 3px;padding:0}.section-fav-devides .top-bar .filter button{background-color:#f7f7f7;border:none;border-radius:20px;color:#000;font-size:13px;font-weight:700;margin-left:10px;padding:8px 15px}.section-fav-devides .top-bar .filter button:hover{background-color:#ffd93e;cursor:pointer}.section-fav-devides .top-bar .filter button.active{background-color:#ffd93e}.section-fav-devides .fav-devides-slider{height:120px;margin-left:-40px;margin-right:-40px;min-height:120px;overflow:hidden}.section-fav-devides .fav-devides{display:-webkit-box;display:-ms-flexbox;display:flex;list-style:none;margin:0;overflow-x:scroll;padding:0}.section-fav-devides .fav-devides li .billet{margin-right:15px}.section-fav-devides .fav-devides li:first-child .billet{margin-left:40px}.section-fav-devides .fav-devides li:last-child .billet{margin-right:40px}.page_footer{margin-top:-64px}.page_footer .links-and-copy{display:-webkit-box;display:-ms-flexbox;display:flex;padding:19px 0}.page_footer .footer-links{list-style:none;margin:0;padding:0}.page_footer .footer-links li a{color:#858585;display:inline-block;font-size:12px;line-height:16px;padding:5px;text-decoration:none}.page_footer .footer-links li a:hover{color:#333}.page_footer .footer-links li:first-child a{padding-left:0}.page_footer .copy{color:#858585;font-size:12px;line-height:16px;margin-left:auto;padding:5px}@media only screen and (min-device-pixel-ratio:1.5){.section-main .inner-block{background-image:url(" + escape(__webpack_require__(/*! ../img/bg@2x.png */ "./src/img/bg@2x.png")) + ")}}@media only screen and (max-width:991.98px){.page_header .menu-btn{-ms-flex-order:0;-webkit-box-ordinal-group:1;display:block;order:0}.page_header nav{-ms-flex-order:1;-webkit-box-ordinal-group:2;order:1;width:100%}.page_header .menu{-ms-flex-direction:column;-o-transition:opacity .2s ease-in-out,height .2s ease-in-out;-webkit-box-direction:normal;-webkit-box-orient:vertical;-webkit-transition:opacity .2s ease-in-out,height .2s ease-in-out;flex-direction:column;height:0;margin:0;opacity:0;overflow:hidden;padding:0;text-align:center;transition:opacity .2s ease-in-out,height .2s ease-in-out}.page_header .menu a{display:block;margin:0;width:100%}.page_header .menu.visible{height:90px;opacity:1}}", "", {"version":3,"sources":["C:/Users/EStarostin/Desktop/practice/yandex shri 2018/YANDEX-SHRI-2018__TASK2/src/less/C:/Users/EStarostin/Desktop/practice/yandex shri 2018/YANDEX-SHRI-2018__TASK2/src/less/C:/Users/EStarostin/Desktop/practice/yandex shri 2018/YANDEX-SHRI-2018__TASK2/src/less/style.less","C:/Users/EStarostin/Desktop/practice/yandex shri 2018/YANDEX-SHRI-2018__TASK2/src/less/C:/Users/EStarostin/Desktop/practice/yandex shri 2018/YANDEX-SHRI-2018__TASK2/src/less/style.less"],"names":[],"mappings":"AAGA,UAEI,WAAA,CAGJ,KAGI,WAFA,6BAAA,cACA,CAIJ,SAKI,8BAAA,sBAFA,cAFA,iBAAA,gBACA,cAEA,CAIJ,iBACI,eAAA,CACA,2BACI,WAAA,cACA,WACA,CAIR,iBACI,eAAA,eACA,CAGJ,aACI,+BAAA,CADJ,2BAMQ,sBAAA,mBAAA,yBAAA,mBADA,oBAAA,oBAAA,aAAA,eADA,cAAA,CAJR,qBAYY,cAAA,iBACA,CAbZ,uBAoBQ,uDAAA,YACA,aAFA,YAAA,iBADA,UAAA,CAlBR,mBA2BQ,oBAAA,oBAAA,aAAA,eACA,CA5BR,qBAuCY,sCAAA,2CAPA,WADA,eAAA,gBAEA,iBAAA,cAGA,WAAA,YAFA,qBAAA,kCAKA,CAEA,sCACI,gBAAA,CA1ChB,sDAmDY,SAAA,CAMZ,QAEI,0BAAA,kBAAA,6BAAA,4BAAA,qBACA,8BAGA,mBAAA,8BAKA,4BAJA,mBAAA,sBANA,oBAAA,oBAAA,aAAA,sBACA,aACA,yBAAA,aAKA,kBAEA,gBANA,WAAA,CAJJ,cAgBQ,gBAAA,cAEA,CAlBR,gBAuBQ,cADA,eAAA,QAEA,CAGJ,iBACI,8CAAA,CAGJ,mBACI,8CAAA,CAGJ,yBACI,8CAAA,CAGJ,2BACI,8CAAA,CAGJ,uBACI,8CAAA,CAIR,oBAGI,sBAAA,yBADA,oBAAA,oBAAA,aAAA,8BADA,cAAA,CADJ,yEAOQ,SAAA,CAPR,iCAeQ,sBAAA,yBAFA,mBAAA,oBACA,oBAAA,aAFA,aAAA,8BADA,UAAA,CAQR,2BAOQ,8BALA,+CAAA,wBACA,4BACA,sBAAA,sBAEA,2BAAA,CANR,wBAWQ,eAAA,gBACA,QACA,CAbR,2BAiBQ,cAAA,CAjBR,kCAqBQ,eAAA,CAEA,wCAKI,+CAJA,WAAA,qBACA,YAEA,gBADA,UAAA,CA1BZ,yCAiCY,oBAAA,CACA,0DACI,iBAAA,CAnChB,gDAuCgB,cAAA,QACA,CAxChB,sDA4CgB,eAAA,gBACA,cACA,CA9ChB,8BAqDQ,aADA,eAAA,gBAGA,gBACA,kBAFA,WAAA,CAtDR,uBAmEQ,SAAA,OAJA,gBAFA,SAAA,kBACA,UAAA,kBAGA,KACA,CAlER,0BAuEY,aAAA,CAEA,sCACI,eAAA,CAGJ,qCACI,kBAAA,CAGJ,qDAUQ,sCAAA,2CAJA,+CAJA,WAAA,YAGA,SAEA,iBAJA,kBAAA,SAMA,mCALA,UAAA,CAWZ,8DACI,SAAA,CAKZ,qCAIQ,4BAFA,gBAAA,WACA,CAHR,yCAQQ,oBAAA,oBAAA,YAAA,CARR,mDAWY,gBAAA,CAXZ,0DAcgB,gBAAA,YACA,WACA,gBACA,CAjBhB,8BA4BQ,oBADA,mBAAA,uBADA,oBAAA,oBAAA,aAAA,eACA,2BAFA,gBAFA,SAAA,SACA,CAxBR,qCAkCY,gBAHA,YAAA,yBAEA,SAAA,CAjCZ,6CAuCgB,aADA,WAAA,CAIJ,2CACI,YAAA,CAOJ,sGAJQ,oDAAA,2CAAA,CAIR,mDAEQ,sBAAA,mBAEA,cACA,CAIR,oDAGQ,0DADA,sBAAA,iDACA,CAOpB,8BAGQ,sBAAA,yBAAA,mBADA,oBAAA,oBAAA,aAAA,kBAEA,CAJR,+CAOY,QAAA,CAPZ,wCAWY,gBAAA,CAXZ,+CAcgB,gBAAA,YACA,WACA,gBACA,CAjBhB,sCA0BY,oBAAA,oBAAA,aADA,gBADA,iBAFA,SAAA,CAtBZ,6CA8BgB,yBADA,YAAA,mBAEA,WAEA,eAAA,gBAEA,iBAHA,gBAAA,CAMA,mDAEI,yBADA,cAAA,CAIJ,oDACI,wBAAA,CA5CpB,yCAoDQ,aAAA,kBAEA,mBADA,iBAFA,eAAA,CAnDR,kCA2DQ,oBAAA,oBAAA,aAAA,gBACA,SAAA,kBACA,SAAA,CA7DR,6CAmEgB,iBAAA,CAGJ,yDACI,gBAAA,CAGJ,wDACI,iBAAA,CAMhB,aACI,gBAAA,CADJ,6BAIQ,oBAAA,oBAAA,aAAA,cACA,CALR,2BASQ,gBAAA,SACA,SAAA,CAVR,gCAkBgB,cAFA,qBAAA,eACA,iBAFA,YAAA,oBAIA,CAGA,sCACI,UAAA,CAIR,4CAEQ,cAAA,CA7BpB,mBAuCQ,cADA,eAAA,iBAFA,iBAAA,WACA,CAOR,oDACI,2BACI,8CAAA,CC5FL,CDgGH,4CACI,uBAGQ,iBAAA,4BADA,cAAA,OACA,CAHR,iBAOQ,iBAAA,4BAAA,QAAA,UACA,CARR,mBAYQ,0BAAA,6DAAA,6BAAA,4BAAA,kEAAA,sBAAA,SAGA,SAAA,UACA,gBAFA,UADA,kBAAA,yDAKA,CAlBR,qBAuBY,cAAA,SADA,UAAA,CAKJ,2BAEI,YADA,SAAA,CChGb,CACF","file":"style.less","sourcesContent":["/* --- Начало собственных стилей --- */\n@import \"_palette.less\";\n\nhtml,\nbody {\n    height: 100%\n}\n\nbody {\n    font-family: @main-font-family;\n    font-size: @main-font-size;\n    color: @main-font-color;\n}\n\n.wrapper {\n    max-width: 1366px;\n    min-width: 320px;\n    margin: 0 auto;\n    padding: 0 @wrapper-padding;\n    box-sizing: border-box;\n}\n\n.header-and-main {\n    min-height: 100%;\n    &.clr:after {\n        content: '';\n        display: block;\n        height: 64px;\n    }\n}\n\n.section-heading {\n    font-size: 18px;\n    margin: 0 0 20px 0;\n}\n\n.page_header {\n    border-bottom: 1px solid #f0f0f0;\n\n    .logo-and-nav {\n        padding: 22px 0;\n        display: flex;\n        align-items: center;\n        flex-wrap: wrap;\n    }\n\n    .logo {\n        a {\n            display: block;\n            padding: 2px 0 5px 0;\n        }\n    }\n\n    .menu-btn {\n        width: 30px;\n        height: 30px;\n        background: url(../img/icon_list.svg) no-repeat center;\n        border: none;\n        margin-left: auto;\n        display: none;\n    }\n\n    .menu {\n        display: flex;\n        list-style: none;\n\n        a {\n            font-size: 16px;\n            color: @main-font-color;\n            line-height: 20px;\n            text-decoration: none;\n            font-weight: 700;\n            opacity: .6;\n            padding: 5px;\n            margin: 0 10px;\n            transition: opacity .2s ease-in-out;\n\n            &:not(:last-child) {\n                margin-right: 8px;\n            }\n\n            &:hover {\n                opacity: 1;\n            }\n        }\n\n        .active {\n            opacity: 1;\n        }\n    }\n}\n\n/* Плашка для сценариев и устройств */\n.billet {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    width: 200px;\n    height: 120px;\n    background: @main-button-color;\n    border-radius: 20px;\n    padding: 14px;\n    box-sizing: border-box;\n    position: relative;\n    background-position: 14px 14px;\n    background-repeat: no-repeat;\n    text-align: left;\n\n    .name {\n        font-weight: 700;\n        margin: 0;\n        margin-bottom: 4px;\n    }\n\n    .action {\n        font-size: 12px;\n        color: #858585;\n        margin: 0;\n    }\n\n    &.icon_sun {\n        background-image: url(../img/icon_sun.svg);\n    }\n    \n    &.icon_sun_2 {\n        background-image: url(../img/icon_sun_2.svg);\n    }\n    \n    &.icon_temperature {\n        background-image: url(../img/icon_temperature.svg);\n    }\n    \n    &.icon_temperature_2 {\n        background-image: url(../img/icon_temperature_2.svg);\n    }\n    \n    &.icon_scheduled {\n        background-image: url(../img/icon_scheduled.svg);\n    }\n}\n\n.main-and-scenarios {\n    padding: 29px 0;\n    display: flex;\n    justify-content: space-between;\n\n    .section-main,\n    .section-scenarios {\n        width: 49%;\n    }\n\n    .inner-block {\n        width: 100%;\n        height: 331px;\n        border-radius: 20px;\n        display: flex;\n        justify-content: space-between;\n    }\n}\n    \n.section-main {\n    .inner-block {\n        background-image: url(../img/bg@1x.png);\n        background-position: center;\n        background-size: cover;\n        background-repeat: no-repeat;\n        padding: 25px 20px 25px 25px;\n        box-sizing: border-box;\n    }\n\n    .greeting {\n        font-size: 27px;\n        font-weight: 700;\n        margin: 0;\n    }\n\n    .status-text {\n        margin: 6px 0 0;\n    }\n\n    .temperature-blocks {\n        margin-top: 25px;\n\n        &:after {\n            content: '';\n            display: inline-block;\n            width: 26px;\n            height: 26px;\n            background-image: url(../img/cloud-drizzle.svg);\n            margin-left: 5px;\n        }\n\n        .block {\n            display: inline-block;\n            &:not(:last-child) {\n                margin-right: 15px;\n            }\n\n            .label {\n                color: #858585;\n                margin: 0;\n            }\n\n            .temperature {\n                font-size: 36px;\n                font-weight: 700;\n                margin: 4px 0 0;\n            }\n        }\n    }\n\n    .devices-slider {\n        margin: -25px 0;\n        height: 331px;\n        width: 200px;\n        min-width: 200px;\n        overflow: hidden;\n        position: relative;\n    }\n\n    .devices {\n        margin: 0;\n        padding: 0;\n        list-style: none;\n        overflow-y: scroll;\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        left: 0;\n\n        li {\n            margin: 15px 0;\n\n            &:first-child {\n                margin-top: 20px;\n            }\n\n            &:last-child {\n                margin-bottom: 20px;\n            }\n\n            &:nth-child(3) {\n                .billet:after {\n                    content: '';\n                    position: absolute;\n                    width: 16px;\n                    height: 16px;\n                    background-image: url(../img/double-arrow-up.svg);\n                    left: 50%;\n                    margin-left: -8px;\n                    top: 13px;\n                    transition: opacity .2s ease-in-out;\n                }\n            }\n        }\n\n        &.scrolled li:nth-child(3) .billet:after {\n            opacity: 0;\n        }\n    }\n}\n\n.section-scenarios {\n    .scenarios-slider {\n        overflow: hidden;\n        padding: 2px;\n        margin: -4px -23px -8px -2px;\n    }\n\n    .heading-and-controls {\n        display: flex;\n\n        .controls {\n            margin-left: auto;\n\n            button {\n                background: none;\n                border: none;\n                opacity: .3;\n                padding: 5px 10px;\n            }  \n        }\n    }\n\n    .scenarios {\n        margin: 0;\n        padding: 0;\n        list-style: none;\n        display: flex;\n        flex-wrap: wrap;\n        justify-content: flex-start;\n\n        button {\n            border: none;\n            margin: 0;\n            padding: 0;\n            background: none;\n            margin: 2px 15px 15px 2px;\n\n            .billet {\n                width: 200px;\n                height: 100px;\n            }\n\n            &:focus {\n                outline: none;\n\n                .billet {\n                    box-shadow: 0 2px 6px 0 rgba(197, 186, 186, 0.90);\n                }\n            }\n\n            &:hover {\n                .billet {\n                    background-color: #fff;\n                    box-shadow: 0 2px 6px 0 rgba(197, 186, 186, 0.90);\n                    border-radius: 20px;\n                    cursor: pointer;\n                }\n            }\n\n            &:active {\n                .billet {\n                    background-color: #fff;\n                    box-shadow: inset 0 2px 6px 0 rgba(197, 186, 186, 0.90);\n                }\n            }\n        }\n    }\n}\n\n.section-fav-devides {\n    .top-bar {\n        display: flex;\n        align-items: center;\n        margin-bottom: 25px;\n\n        .section-heading {\n            margin: 0;\n        }\n    \n        .controls {\n            margin-left: auto;\n    \n            button {\n                background: none;\n                border: none;\n                opacity: .3;\n                padding: 5px 10px;\n            }\n        }\n\n        .filter {\n            padding: 0;\n            margin: 0;\n            margin-left: 3px;\n            list-style: none;\n            display: flex;\n\n            button {\n                border: none;\n                background-color: @main-button-color;\n                border-radius: 20px;\n                padding: 8px 15px;\n                font-size: 13px;\n                color: #000000;\n                font-weight: 700;\n                margin-left: 10px;\n\n                &:hover {\n                    cursor: pointer;\n                    background-color: #FFD93E;\n                }\n\n                &.active {\n                    background-color: #FFD93E;\n                }\n            }\n        }\n    }\n\n    .fav-devides-slider {\n        overflow: hidden;\n        height: 120px;\n        min-height: 120px;\n        margin-right: -@wrapper-padding;\n        margin-left: -@wrapper-padding;\n    }\n\n    .fav-devides {\n        display: flex;\n        margin: 0;\n        padding: 0;\n        list-style: none;\n        overflow-x: scroll;\n\n        li {\n            .billet {\n                margin-right: 15px;\n            }\n\n            &:first-child .billet {\n                margin-left: @wrapper-padding;\n            }\n\n            &:last-child .billet {\n                margin-right: @wrapper-padding;\n            }\n        }\n    }\n}\n\n.page_footer {\n    margin-top: -64px;\n\n    .links-and-copy {\n        display: flex;\n        padding: 19px 0;\n    }\n\n    .footer-links {\n        list-style: none;\n        padding: 0;\n        margin: 0;\n\n        li {\n            a {\n                padding: 5px;\n                display: inline-block;\n                font-size: 12px;\n                color: #858585;\n                text-decoration: none;\n                line-height: 16px;\n\n                &:hover {\n                    color: @main-font-color;\n                }\n            }\n\n            &:first-child {\n                a {\n                    padding-left: 0;\n                }\n            }\n        }\n    }\n    \n    .copy {\n        margin-left: auto;\n        padding: 5px;\n        font-size: 12px;\n        color: #858585;\n        line-height: 16px;\n    }\n}\n\n@media only screen and (min-device-pixel-ratio: 1.5) {\n    .section-main .inner-block {\n        background-image: url(../img/bg@2x.png);\n    }\n}\n\n@media only screen and (max-width: 991.98px) {\n    .page_header {\n        .menu-btn {\n            display: block;\n            order: 0;\n        }\n    \n        nav {\n            order: 1;\n            width: 100%;\n        }\n\n        .menu {\n            flex-direction: column;\n            text-align: center;\n            padding: 0;\n            margin: 0;\n            opacity: 0;\n            height: 0;\n            transition: opacity .2s ease-in-out, height .2s ease-in-out;\n            overflow: hidden;\n\n            a {\n                width: 100%;\n                display: block;\n                margin: 0;\n            }\n\n            &.visible {\n                opacity: 1;\n                height: 90px;\n            }\n        }\n    }\n}\n\n\n/*\n// Extra small devices (portrait phones, less than 576px)\n@media (max-width: 575.98px) { ... }\n\n// Small devices (landscape phones, less than 768px)\n@media (max-width: 767.98px) { ... }\n\n// Medium devices (tablets, less than 992px)\n@media (max-width: 991.98px) { ... }\n\n// Large devices (desktops, less than 1200px)\n@media (max-width: 1199.98px) { ... }\n*/\n","/* --- Начало собственных стилей --- */\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  font-family: \"Arial\", sans-serif;\n  font-size: 14px;\n  color: #333;\n}\n.wrapper {\n  max-width: 1366px;\n  min-width: 320px;\n  margin: 0 auto;\n  padding: 0 40px;\n  box-sizing: border-box;\n}\n.header-and-main {\n  min-height: 100%;\n}\n.header-and-main.clr:after {\n  content: '';\n  display: block;\n  height: 64px;\n}\n.section-heading {\n  font-size: 18px;\n  margin: 0 0 20px 0;\n}\n.page_header {\n  border-bottom: 1px solid #f0f0f0;\n}\n.page_header .logo-and-nav {\n  padding: 22px 0;\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.page_header .logo a {\n  display: block;\n  padding: 2px 0 5px 0;\n}\n.page_header .menu-btn {\n  width: 30px;\n  height: 30px;\n  background: url(../img/icon_list.svg) no-repeat center;\n  border: none;\n  margin-left: auto;\n  display: none;\n}\n.page_header .menu {\n  display: flex;\n  list-style: none;\n}\n.page_header .menu a {\n  font-size: 16px;\n  color: #333;\n  line-height: 20px;\n  text-decoration: none;\n  font-weight: 700;\n  opacity: 0.6;\n  padding: 5px;\n  margin: 0 10px;\n  transition: opacity 0.2s ease-in-out;\n}\n.page_header .menu a:not(:last-child) {\n  margin-right: 8px;\n}\n.page_header .menu a:hover {\n  opacity: 1;\n}\n.page_header .menu .active {\n  opacity: 1;\n}\n/* Плашка для сценариев и устройств */\n.billet {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  width: 200px;\n  height: 120px;\n  background: #F7F7F7;\n  border-radius: 20px;\n  padding: 14px;\n  box-sizing: border-box;\n  position: relative;\n  background-position: 14px 14px;\n  background-repeat: no-repeat;\n  text-align: left;\n}\n.billet .name {\n  font-weight: 700;\n  margin: 0;\n  margin-bottom: 4px;\n}\n.billet .action {\n  font-size: 12px;\n  color: #858585;\n  margin: 0;\n}\n.billet.icon_sun {\n  background-image: url(../img/icon_sun.svg);\n}\n.billet.icon_sun_2 {\n  background-image: url(../img/icon_sun_2.svg);\n}\n.billet.icon_temperature {\n  background-image: url(../img/icon_temperature.svg);\n}\n.billet.icon_temperature_2 {\n  background-image: url(../img/icon_temperature_2.svg);\n}\n.billet.icon_scheduled {\n  background-image: url(../img/icon_scheduled.svg);\n}\n.main-and-scenarios {\n  padding: 29px 0;\n  display: flex;\n  justify-content: space-between;\n}\n.main-and-scenarios .section-main,\n.main-and-scenarios .section-scenarios {\n  width: 49%;\n}\n.main-and-scenarios .inner-block {\n  width: 100%;\n  height: 331px;\n  border-radius: 20px;\n  display: flex;\n  justify-content: space-between;\n}\n.section-main .inner-block {\n  background-image: url(../img/bg@1x.png);\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  padding: 25px 20px 25px 25px;\n  box-sizing: border-box;\n}\n.section-main .greeting {\n  font-size: 27px;\n  font-weight: 700;\n  margin: 0;\n}\n.section-main .status-text {\n  margin: 6px 0 0;\n}\n.section-main .temperature-blocks {\n  margin-top: 25px;\n}\n.section-main .temperature-blocks:after {\n  content: '';\n  display: inline-block;\n  width: 26px;\n  height: 26px;\n  background-image: url(../img/cloud-drizzle.svg);\n  margin-left: 5px;\n}\n.section-main .temperature-blocks .block {\n  display: inline-block;\n}\n.section-main .temperature-blocks .block:not(:last-child) {\n  margin-right: 15px;\n}\n.section-main .temperature-blocks .block .label {\n  color: #858585;\n  margin: 0;\n}\n.section-main .temperature-blocks .block .temperature {\n  font-size: 36px;\n  font-weight: 700;\n  margin: 4px 0 0;\n}\n.section-main .devices-slider {\n  margin: -25px 0;\n  height: 331px;\n  width: 200px;\n  min-width: 200px;\n  overflow: hidden;\n  position: relative;\n}\n.section-main .devices {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  overflow-y: scroll;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n}\n.section-main .devices li {\n  margin: 15px 0;\n}\n.section-main .devices li:first-child {\n  margin-top: 20px;\n}\n.section-main .devices li:last-child {\n  margin-bottom: 20px;\n}\n.section-main .devices li:nth-child(3) .billet:after {\n  content: '';\n  position: absolute;\n  width: 16px;\n  height: 16px;\n  background-image: url(../img/double-arrow-up.svg);\n  left: 50%;\n  margin-left: -8px;\n  top: 13px;\n  transition: opacity 0.2s ease-in-out;\n}\n.section-main .devices.scrolled li:nth-child(3) .billet:after {\n  opacity: 0;\n}\n.section-scenarios .scenarios-slider {\n  overflow: hidden;\n  padding: 2px;\n  margin: -4px -23px -8px -2px;\n}\n.section-scenarios .heading-and-controls {\n  display: flex;\n}\n.section-scenarios .heading-and-controls .controls {\n  margin-left: auto;\n}\n.section-scenarios .heading-and-controls .controls button {\n  background: none;\n  border: none;\n  opacity: 0.3;\n  padding: 5px 10px;\n}\n.section-scenarios .scenarios {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n}\n.section-scenarios .scenarios button {\n  border: none;\n  margin: 0;\n  padding: 0;\n  background: none;\n  margin: 2px 15px 15px 2px;\n}\n.section-scenarios .scenarios button .billet {\n  width: 200px;\n  height: 100px;\n}\n.section-scenarios .scenarios button:focus {\n  outline: none;\n}\n.section-scenarios .scenarios button:focus .billet {\n  box-shadow: 0 2px 6px 0 rgba(197, 186, 186, 0.9);\n}\n.section-scenarios .scenarios button:hover .billet {\n  background-color: #fff;\n  box-shadow: 0 2px 6px 0 rgba(197, 186, 186, 0.9);\n  border-radius: 20px;\n  cursor: pointer;\n}\n.section-scenarios .scenarios button:active .billet {\n  background-color: #fff;\n  box-shadow: inset 0 2px 6px 0 rgba(197, 186, 186, 0.9);\n}\n.section-fav-devides .top-bar {\n  display: flex;\n  align-items: center;\n  margin-bottom: 25px;\n}\n.section-fav-devides .top-bar .section-heading {\n  margin: 0;\n}\n.section-fav-devides .top-bar .controls {\n  margin-left: auto;\n}\n.section-fav-devides .top-bar .controls button {\n  background: none;\n  border: none;\n  opacity: 0.3;\n  padding: 5px 10px;\n}\n.section-fav-devides .top-bar .filter {\n  padding: 0;\n  margin: 0;\n  margin-left: 3px;\n  list-style: none;\n  display: flex;\n}\n.section-fav-devides .top-bar .filter button {\n  border: none;\n  background-color: #F7F7F7;\n  border-radius: 20px;\n  padding: 8px 15px;\n  font-size: 13px;\n  color: #000000;\n  font-weight: 700;\n  margin-left: 10px;\n}\n.section-fav-devides .top-bar .filter button:hover {\n  cursor: pointer;\n  background-color: #FFD93E;\n}\n.section-fav-devides .top-bar .filter button.active {\n  background-color: #FFD93E;\n}\n.section-fav-devides .fav-devides-slider {\n  overflow: hidden;\n  height: 120px;\n  min-height: 120px;\n  margin-right: -40px;\n  margin-left: -40px;\n}\n.section-fav-devides .fav-devides {\n  display: flex;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  overflow-x: scroll;\n}\n.section-fav-devides .fav-devides li .billet {\n  margin-right: 15px;\n}\n.section-fav-devides .fav-devides li:first-child .billet {\n  margin-left: 40px;\n}\n.section-fav-devides .fav-devides li:last-child .billet {\n  margin-right: 40px;\n}\n.page_footer {\n  margin-top: -64px;\n}\n.page_footer .links-and-copy {\n  display: flex;\n  padding: 19px 0;\n}\n.page_footer .footer-links {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.page_footer .footer-links li a {\n  padding: 5px;\n  display: inline-block;\n  font-size: 12px;\n  color: #858585;\n  text-decoration: none;\n  line-height: 16px;\n}\n.page_footer .footer-links li a:hover {\n  color: #333;\n}\n.page_footer .footer-links li:first-child a {\n  padding-left: 0;\n}\n.page_footer .copy {\n  margin-left: auto;\n  padding: 5px;\n  font-size: 12px;\n  color: #858585;\n  line-height: 16px;\n}\n@media only screen and (min-device-pixel-ratio: 1.5) {\n  .section-main .inner-block {\n    background-image: url(../img/bg@2x.png);\n  }\n}\n@media only screen and (max-width: 991.98px) {\n  .page_header .menu-btn {\n    display: block;\n    order: 0;\n  }\n  .page_header nav {\n    order: 1;\n    width: 100%;\n  }\n  .page_header .menu {\n    flex-direction: column;\n    text-align: center;\n    padding: 0;\n    margin: 0;\n    opacity: 0;\n    height: 0;\n    transition: opacity 0.2s ease-in-out, height 0.2s ease-in-out;\n    overflow: hidden;\n  }\n  .page_header .menu a {\n    width: 100%;\n    display: block;\n    margin: 0;\n  }\n  .page_header .menu.visible {\n    opacity: 1;\n    height: 90px;\n  }\n}\n/*\n// Extra small devices (portrait phones, less than 576px)\n@media (max-width: 575.98px) { ... }\n\n// Small devices (landscape phones, less than 768px)\n@media (max-width: 767.98px) { ... }\n\n// Medium devices (tablets, less than 992px)\n@media (max-width: 991.98px) { ... }\n\n// Large devices (desktops, less than 1200px)\n@media (max-width: 1199.98px) { ... }\n*/\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./node_modules/normalize.css/normalize.css":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/lib??ref--5-2!./node_modules/normalize.css/normalize.css ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "/*! normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css */html{-webkit-text-size-adjust:100%;line-height:1.15}body{margin:0}h1{font-size:2em;margin:.67em 0}hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:rgba(0,0,0,0)}abbr[title]{-webkit-text-decoration:underline dotted;border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}[hidden],template{display:none}", "", {"version":3,"sources":["C:/Users/EStarostin/Desktop/practice/yandex shri 2018/YANDEX-SHRI-2018__TASK2/node_modules/normalize.css/C:/Users/EStarostin/Desktop/practice/yandex shri 2018/YANDEX-SHRI-2018__TASK2/node_modules/normalize.css/normalize.css"],"names":[],"mappings":"AAAA,4EAA4E,KAY1E,8BADA,gBAAkB,CAEnB,KAUC,QAAU,CACX,GAQC,cAAe,cACE,CAClB,GAWC,+BAAA,uBAAwB,SACd,gBACQ,CACnB,IAQC,gCAAkC,aACnB,CAChB,EAUC,8BAA8B,CAC/B,YAUC,yCAFA,mBAAoB,0BACO,gCACO,CACnC,SAQC,kBAAoB,CACrB,cAUC,gCAAkC,aACnB,CAChB,MAOC,aAAe,CAChB,QASC,cAAe,cACA,kBACI,uBACM,CAC1B,IAGC,aAAgB,CACjB,IAGC,SAAY,CACb,IAUC,iBAAmB,CACpB,sCAeC,oBAAqB,eACL,iBACE,QACR,CACX,aASC,gBAAkB,CACnB,cASC,mBAAqB,CACtB,gDAUC,yBAA2B,CAC5B,wHAUC,kBAAmB,SACR,CACZ,4GAUC,6BAA+B,CAChC,SAOC,0BAA+B,CAChC,OAUC,8BAAA,sBAAuB,cACR,cACA,eACC,UACL,kBACS,CACrB,SAOC,uBAAyB,CAC1B,SAOC,aAAe,CAChB,6BASC,8BAAA,sBAAuB,SACZ,CACZ,kFAQC,WAAa,CACd,cAQC,6BAA8B,mBACT,CACtB,yCAOC,uBAAyB,CAC1B,6BAQC,0BAA2B,YACb,CACf,QAUC,aAAe,CAChB,QAOC,iBAAmB,CACpB,kBAkBC,YAAc,CACf","file":"normalize.css","sourcesContent":["/*! normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/css-loader/lib/url/escape.js":
/*!***************************************************!*\
  !*** ./node_modules/css-loader/lib/url/escape.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),

/***/ "./node_modules/normalize.css/normalize.css":
/*!**************************************************!*\
  !*** ./node_modules/normalize.css/normalize.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../css-loader??ref--5-1!../postcss-loader/lib??ref--5-2!./normalize.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./node_modules/normalize.css/normalize.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/img/bg@1x.png":
/*!***************************!*\
  !*** ./src/img/bg@1x.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bg@1x.png";

/***/ }),

/***/ "./src/img/bg@2x.png":
/*!***************************!*\
  !*** ./src/img/bg@2x.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bg@2x.png";

/***/ }),

/***/ "./src/img/cloud-drizzle.svg":
/*!***********************************!*\
  !*** ./src/img/cloud-drizzle.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/cloud-drizzle.svg";

/***/ }),

/***/ "./src/img/double-arrow-up.svg":
/*!*************************************!*\
  !*** ./src/img/double-arrow-up.svg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/double-arrow-up.svg";

/***/ }),

/***/ "./src/img/icon_list.svg":
/*!*******************************!*\
  !*** ./src/img/icon_list.svg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon_list.svg";

/***/ }),

/***/ "./src/img/icon_scheduled.svg":
/*!************************************!*\
  !*** ./src/img/icon_scheduled.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon_scheduled.svg";

/***/ }),

/***/ "./src/img/icon_sun.svg":
/*!******************************!*\
  !*** ./src/img/icon_sun.svg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon_sun.svg";

/***/ }),

/***/ "./src/img/icon_sun_2.svg":
/*!********************************!*\
  !*** ./src/img/icon_sun_2.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon_sun_2.svg";

/***/ }),

/***/ "./src/img/icon_temperature.svg":
/*!**************************************!*\
  !*** ./src/img/icon_temperature.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon_temperature.svg";

/***/ }),

/***/ "./src/img/icon_temperature_2.svg":
/*!****************************************!*\
  !*** ./src/img/icon_temperature_2.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon_temperature_2.svg";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! normalize.css */ "./node_modules/normalize.css/normalize.css");
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(normalize_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _less_style_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./less/style.less */ "./src/less/style.less");
/* harmony import */ var _less_style_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_less_style_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_script_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/script.js */ "./src/js/script.js");
/* harmony import */ var _js_script_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_script_js__WEBPACK_IMPORTED_MODULE_2__);





/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.querySelector('.devices').addEventListener('scroll', function (e) {
    if (this.scrollTop !== 0) {
        this.classList.add('scrolled');
    } else {
        this.classList.remove('scrolled');   
    }
});

document.querySelector('.menu-btn').addEventListener('click', function (e) {
    document.querySelector('.menu').classList.toggle('visible');
});

/***/ }),

/***/ "./src/less/style.less":
/*!*****************************!*\
  !*** ./src/less/style.less ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-1!../../node_modules/postcss-loader/lib??ref--6-2!../../node_modules/less-loader/dist/cjs.js??ref--6-3!./style.less */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./node_modules/less-loader/dist/cjs.js?!./src/less/style.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"sourceMap":true,"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

/******/ });
//# sourceMappingURL=main.js.map