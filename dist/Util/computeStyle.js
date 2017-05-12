Object.defineProperty(exports,"__esModule",{value:true});exports.default=

computeStyle;var _lodash=require('lodash.merge');var _lodash2=_interopRequireDefault(_lodash);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function computeStyle(defaultStyle,newStyle){
if(typeof newStyle!=='object'){
return(0,_lodash2.default)({},defaultStyle);
}
return(0,_lodash2.default)({},defaultStyle,newStyle);
}
//# sourceMappingURL=computeStyle.js.map