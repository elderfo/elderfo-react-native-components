Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _Header=require('./Header');var _Header2=_interopRequireDefault(_Header);
var _SearchHeader=require('./SearchHeader');var _SearchHeader2=_interopRequireDefault(_SearchHeader);
var _Platform=require('./Platform');var _Platform2=_interopRequireDefault(_Platform);
var _Util=require('../Util');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var headerTypes=[_Header2.default,_SearchHeader2.default];




var getHeader=function getHeader(children){
if(Array.isArray(children)){
return children.find(function(item){return item&&headerTypes.includes(item.type);});
}else if(children&&headerTypes.includes(children.type)){
return children;
}
};

var hasHeader=function hasHeader(children){
return getHeader(children);
};

var renderContent=function renderContent(children,styleSheet){
if(!children){
return;
}

if(Array.isArray(children)){
return(
_react2.default.createElement(_reactNative.View,{style:styleSheet.content},
children.filter(function(item){return item&&!headerTypes.includes(item.type);})));


}else if(children&&!headerTypes.includes(children.type)){
return(
_react2.default.createElement(_reactNative.View,{style:styleSheet.content},
children));


}
};

var generateStyleSheet=function generateStyleSheet(_ref){var style=_ref.style,contentStyle=_ref.contentStyle,children=_ref.children;

var defaultStyle={
container:{
flex:1,
paddingTop:hasHeader(children)?0:_Platform2.default.ios?20:0},

content:{
flex:1,
padding:10},

scroll:{
flex:1}};



var computedStyle=(0,_Util.computeStyle)(defaultStyle,{
container:style,
content:contentStyle});


return _reactNative.StyleSheet.create(computedStyle);
};


var Container=function Container(props){

var styleSheet=generateStyleSheet(props);

var content=props.scroll?

_react2.default.createElement(_reactNative.ScrollView,{style:styleSheet.scroll},
renderContent(props.children,styleSheet)):


renderContent(props.children,styleSheet);

return(
_react2.default.createElement(_reactNative.View,{style:styleSheet.container},
getHeader(props.children),
content));


};

Container.propTypes={
style:_react.PropTypes.object,
contentStyle:_react.PropTypes.object,
scroll:_react.PropTypes.bool};exports.default=


Container;
//# sourceMappingURL=Container.js.map