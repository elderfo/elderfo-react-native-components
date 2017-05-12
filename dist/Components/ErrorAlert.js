Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var ErrorAlert=function ErrorAlert(_ref){var text=_ref.text;
if(text){
return _react2.default.createElement(_reactNative.Text,{style:styles.errorText},text);
}
return _react2.default.createElement(_reactNative.Text,null);
};

ErrorAlert.propTypes={
text:_react.PropTypes.string.isRequired};


var styles=_reactNative.StyleSheet.create({
errorText:{
marginTop:10,
marginBottom:10,
padding:10,
color:'#8E2E22',
borderColor:'#8E2E22',
backgroundColor:'#DA8176',
borderRadius:0,
borderWidth:1}});exports.default=



ErrorAlert;
//# sourceMappingURL=ErrorAlert.js.map