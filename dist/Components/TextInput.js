Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _Platform=require('./Platform');var _Platform2=_interopRequireDefault(_Platform);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var TextInput=function TextInput(_ref){var placeholder=_ref.placeholder,onChangeText=_ref.onChangeText,value=_ref.value,_ref$secureTextEntry=_ref.secureTextEntry,secureTextEntry=_ref$secureTextEntry===undefined?false:_ref$secureTextEntry;
return(
_react2.default.createElement(_reactNative.View,{style:styles.inputGroup},
_react2.default.createElement(_reactNative.TextInput,{
style:styles.inputNb,
placeholder:placeholder,
value:value,
onChangeText:onChangeText,
secureTextEntry:secureTextEntry,
underlineColorAndroid:'rgba(0,0,0,0)'})));


};

TextInput.propTypes={
icon:_react.PropTypes.string,
placeholder:_react.PropTypes.string,
onChangeText:_react.PropTypes.func.isRequired,
value:_react.PropTypes.string.isRequired,
secureTextEntry:_react.PropTypes.bool};


var styles=_reactNative.StyleSheet.create({
inputNb:{
height:_Platform2.default.ios?30:40,
color:'#000',
paddingLeft:5,
paddingRight:5,
fontSize:15,
lineHeight:24,
borderWidth:0},

inputGroup:{
backgroundColor:'transparent',
position:'relative',
borderColor:'#D9D5DC',
borderWidth:1,
borderTopWidth:0,
borderRightWidth:0,
borderLeftWidth:0,
marginTop:5,
marginBottom:5}});exports.default=



TextInput;
//# sourceMappingURL=TextInput.js.map