Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var defaultStyles={
card:{
marginVertical:5,
padding:10,
borderWidth:1,
borderRadius:2,
borderColor:'#ddd',
flexWrap:'wrap',
borderBottomWidth:0,
backgroundColor:'#fff',
shadowColor:'#000',
shadowOffset:{width:0,height:2},
shadowOpacity:0.1,
shadowRadius:1.5,
elevation:2}};



var Card=function Card(_ref){var children=_ref.children,_ref$style=_ref.style,style=_ref$style===undefined?{}:_ref$style,_ref$center=_ref.center,center=_ref$center===undefined?false:_ref$center,_ref$includePadding=_ref.includePadding,includePadding=_ref$includePadding===undefined?true:_ref$includePadding,onPress=_ref.onPress;
var centerCardStyle=center?{alignItems:'center'}:{};

var defaultStyle=_extends({},defaultStyles.card,centerCardStyle,style);

if(!includePadding){
delete defaultStyle.padding;
}

var styles=_reactNative.StyleSheet.create({
card:defaultStyle,
innerCard:center?{alignItems:'center'}:{}});


var _onPress=function _onPress(){
if(onPress){
onPress();
}
};

var card=
_react2.default.createElement(_reactNative.View,{style:styles.card},
_react2.default.createElement(_reactNative.View,{style:styles.innerCard},
children));




if(onPress){
return(
_react2.default.createElement(_reactNative.TouchableHighlight,{onPress:_onPress,underlayColor:'transparent'},
card));


}else{
return card;
}

};

Card.propTypes={
style:_react.PropTypes.object,
center:_react.PropTypes.bool,
includePadding:_react.PropTypes.bool,
onPress:_react.PropTypes.func};exports.default=


Card;
//# sourceMappingURL=Card.js.map