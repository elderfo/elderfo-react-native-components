Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _Util=require('../Util');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var Spinner=function Spinner(_ref){var _ref$style=_ref.style,style=_ref$style===undefined?{}:_ref$style,_ref$size=_ref.size,size=_ref$size===undefined?'large':_ref$size,color=_ref.color;

var defaultStyle={
spinner:{
height:80,
width:80,
margin:5}};



var styles=_reactNative.StyleSheet.create((0,_Util.computeStyle)(defaultStyle,style));

return(
_react2.default.createElement(_reactNative.ActivityIndicator,{
style:styles.spinner,
color:color,
size:size}));

};

Spinner.propTypes={
color:_react.PropTypes.string,
size:_react.PropTypes.oneOf(['small','large']),
style:_react.PropTypes.object};exports.default=


Spinner;
//# sourceMappingURL=Spinner.js.map