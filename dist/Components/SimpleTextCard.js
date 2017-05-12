Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _Card=require('./Card');var _Card2=_interopRequireDefault(_Card);
var _CenterView=require('./CenterView');var _CenterView2=_interopRequireDefault(_CenterView);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var SimpleTextCard=function SimpleTextCard(_ref){var text=_ref.text;
return(
_react2.default.createElement(_Card2.default,null,
_react2.default.createElement(_CenterView2.default,{method:'both',fillParent:false},
_react2.default.createElement(_reactNative.Text,null,text))));



};

SimpleTextCard.propTypes={
text:_react.PropTypes.string.isRequired};exports.default=


SimpleTextCard;
//# sourceMappingURL=SimpleTextCard.js.map