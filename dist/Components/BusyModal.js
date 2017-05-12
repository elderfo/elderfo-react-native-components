Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _Spinner=require('./Spinner');var _Spinner2=_interopRequireDefault(_Spinner);
var _CenterView=require('./CenterView');var _CenterView2=_interopRequireDefault(_CenterView);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var styles=_reactNative.StyleSheet.create({
innerContainer:{
borderRadius:10,
alignItems:'center',
backgroundColor:'white'}});



var BusyModal=function BusyModal(_ref){var message=_ref.message,isOpen=_ref.isOpen,spinnerColor=_ref.spinnerColor;
return(
_react2.default.createElement(_reactNative.Modal,{visible:isOpen,
onRequestClose:function onRequestClose(){return false;},
transparent:true,
animationType:'fade'},
_react2.default.createElement(_CenterView2.default,{fillParent:true,method:'vertical',style:{backgroundColor:'rgba(0, 0, 0, 0.5)',padding:20}},
_react2.default.createElement(_reactNative.View,{style:styles.innerContainer},
_react2.default.createElement(_CenterView2.default,{method:'horizontal',fillParent:false},
message?_react2.default.createElement(_reactNative.Text,{style:{paddingTop:20}},message):null,
_react2.default.createElement(_Spinner2.default,{color:spinnerColor}))))));





};

BusyModal.propTypes={
isOpen:_react.PropTypes.bool.isRequired,
message:_react.PropTypes.string,
spinnerColor:_react.PropTypes.string};exports.default=


BusyModal;
//# sourceMappingURL=BusyModal.js.map