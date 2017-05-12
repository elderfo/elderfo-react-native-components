Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _Util=require('../Util');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var methods={
horizontal:'horizontal',
vertical:'vertical',
both:'both'};


var isVerticalCenter=function isVerticalCenter(method){
return method===methods.vertical||method===methods.both;
};

var isHorizontalCenter=function isHorizontalCenter(method){
return method===methods.horizontal||method===methods.both;
};


var CenterView=function CenterView(_ref){var children=_ref.children,_ref$style=_ref.style,style=_ref$style===undefined?{}:_ref$style,_ref$method=_ref.method,method=_ref$method===undefined?methods.vertical:_ref$method,_ref$fillParent=_ref.fillParent,fillParent=_ref$fillParent===undefined?false:_ref$fillParent;

var absoluteStyles={
flex:fillParent?1:undefined,
justifyContent:isVerticalCenter(method)?'center':undefined,
alignItems:isHorizontalCenter(method)?'center':undefined};


var styles=_reactNative.StyleSheet.create({
main:(0,_Util.computeStyle)(style,absoluteStyles)});


return(
_react2.default.createElement(_reactNative.View,{style:styles.main},
children));


};

CenterView.propmethods={
method:_react.PropTypes.oneOf(['horizontal','vertical','both']),
fillParent:_react.PropTypes.bool,
style:_react.PropTypes.object};exports.default=


CenterView;
//# sourceMappingURL=CenterView.js.map