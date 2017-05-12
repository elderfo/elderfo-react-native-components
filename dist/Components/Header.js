Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _Ionicons=require('react-native-vector-icons/Ionicons');var _Ionicons2=_interopRequireDefault(_Ionicons);
var _Platform=require('./Platform');var _Platform2=_interopRequireDefault(_Platform);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

Header=function(_Component){_inherits(Header,_Component);











































function Header(props){_classCallCheck(this,Header);var _this=_possibleConstructorReturn(this,(Header.__proto__||Object.getPrototypeOf(Header)).call(this,
props));_this.logger=console;_this._validateProps=function(_ref){var isSearch=_ref.isSearch,onSearch=_ref.onSearch,searchPlaceholder=_ref.searchPlaceholder,isFixedSearch=_ref.isFixedSearch,searchRightIcon=_ref.searchRightIcon,onSearchRightClick=_ref.onSearchRightClick,title=_ref.title;if(isSearch||onSearch||searchPlaceholder||isFixedSearch||searchRightIcon||onSearchRightClick){_this.logger.warn('The `isSearch`, `onSearch`, `searchPlaceholder`, `isFixedSearch`, searchRightIcon` and `onSearchRightIcon` props are deprecated. Please use the SearchHeader component for this functionality');}if(title){_this.logger.warn('The `title` property has been deprecated. Please use a Text component for this functionality.');}};

_this.state={
isSearching:props.isFixedSearch,
searchText:''};


_this._validateProps(props);

_this._setSearchMode=_this._setSearchMode.bind(_this);
_this._renderSearchBox=_this._renderSearchBox.bind(_this);
_this._getDefaultStyles=_this._getDefaultStyles.bind(_this);
_this._getForegroundColor=_this._getForegroundColor.bind(_this);
_this._onSearchChanged=_this._onSearchChanged.bind(_this);
_this._renderChildren=_this._renderChildren.bind(_this);
_this._renderTitle=_this._renderTitle.bind(_this);
_this._getChildArray=_this._getChildArray.bind(_this);return _this;
}_createClass(Header,[{key:'_setSearchMode',value:function _setSearchMode(

isSearching,searchText){
this.setState({isSearching:isSearching,searchText:searchText});
}},{key:'_getChildArray',value:function _getChildArray()

{
var children=[];

if(this.props.children){
children=children=Array.isArray(this.props.children)?
this.props.children:
[this.props.children];
}

return children;
}},{key:'_renderTitle',value:function _renderTitle(

title,styles){
var children=this._getChildArray();


var titleElement=children.find(function(el){return el.type===_reactNative.Text;});

if(titleElement){
if(title){
this.logger.warn('A title property was specified along with a Text element as a child, the text element will be used.');
}

if(titleElement.props.style){
return titleElement;
}else{
return _react2.default.cloneElement(titleElement,{style:styles.titleText});
}
}else if(title){
return _react2.default.createElement(_reactNative.Text,{style:styles.titleText},title);
}
}},{key:'_onSearchChanged',value:function _onSearchChanged(

searchText){
this.setState({searchText:searchText});

if(this.props.onSearch){
this.props.onSearch(searchText);
}
}},{key:'_getButton',value:function _getButton(

icon,onClick,styles){
return(
_react2.default.createElement(_reactNative.TouchableOpacity,{onPress:onClick,style:styles.menuTouchable,activeOpacity:.4},
_react2.default.createElement(_Ionicons2.default,{name:icon,style:styles.navbarIcon})));


}},{key:'_renderButton',value:function _renderButton(

icon,onClick,styles){
var button=icon&&onClick?
this._getButton(icon,onClick,styles):
undefined;

return(
_react2.default.createElement(_reactNative.View,null,
button));


}},{key:'_renderSearchBox',value:function _renderSearchBox(

styles){
var placeholder=this.props.searchPlaceholder?this.props.searchPlaceholder:'Search';
return(
_react2.default.createElement(_reactNative.TextInput,{
style:styles.searchInput,
autoFocus:true,
placeholder:placeholder,
onChangeText:this._onSearchChanged,
value:this.state.searchText}));

}},{key:'_renderChildren',value:function _renderChildren(

styles){var
title=this.props.title;
var firstComponent=this.state.isSearching?
this._renderSearchBox(styles):
this._renderTitle(title,styles);

if(firstComponent){
return firstComponent;
}
var children=this._getChildArray();
if(children){
if(children.length>1){
this.logger.warn('Multiple children are not currently support. Only the first child will be rendered.');
}
return children[0];
}
}},{key:'render',value:function render()

{var _this2=this;var _props=





this.props,rightButtonIcon=_props.rightButtonIcon,onRightButtonClick=_props.onRightButtonClick,leftButtonIcon=_props.leftButtonIcon,onLeftButtonClick=_props.onLeftButtonClick;var _props2=








this.props,backgroundColor=_props2.backgroundColor,foregroundColor=_props2.foregroundColor,isSearch=_props2.isSearch,isFixedSearch=_props2.isFixedSearch,searchRightIcon=_props2.searchRightIcon,onSearchRightClick=_props2.onSearchRightClick;

if(isSearch&&!this.state.isSearching){
rightButtonIcon='md-search';
onRightButtonClick=function onRightButtonClick(){return _this2._setSearchMode(true);};
}else if(isSearch&&this.state.isSearching){
rightButtonIcon=searchRightIcon&&onSearchRightClick?searchRightIcon:null;
onRightButtonClick=searchRightIcon&&onSearchRightClick?onSearchRightClick:null;
leftButtonIcon='md-arrow-back';

if(!isFixedSearch){
onLeftButtonClick=function onLeftButtonClick(){return _this2._setSearchMode(false,'');};
}
}

var styles=_reactNative.StyleSheet.create(this._getDefaultStyles(leftButtonIcon&&onLeftButtonClick));

return(
_react2.default.createElement(_reactNative.View,{style:styles.navbar},
this._renderButton(leftButtonIcon,onLeftButtonClick,styles),
_react2.default.createElement(_reactNative.View,{style:styles.titleContainer},
this._renderChildren(styles)),

this._renderButton(rightButtonIcon,onRightButtonClick,styles)));


}},{key:'_getForegroundColor',value:function _getForegroundColor()

{var
foregroundColor=this.props.foregroundColor;

return foregroundColor?foregroundColor:_Platform2.default.ios?'black':'white';
}},{key:'_getDefaultStyles',value:function _getDefaultStyles(

hasLeftButton){var
backgroundColor=this.props.backgroundColor;

var foreground=this._getForegroundColor();
var background=backgroundColor?backgroundColor:_Platform2.default.ios?'#F8F8F8':'#4179F7';

return{
navbar:{
backgroundColor:background,
flexDirection:'row',
alignItems:'center',
shadowColor:'#000',
shadowOffset:{width:0,height:2},
shadowOpacity:0.1,
shadowRadius:1.5,
paddingTop:_Platform2.default.ios?15:0,
height:_Platform2.default.ios?64:56,
elevation:3,
position:'relative'},

titleContainer:{
marginLeft:hasLeftButton?16:72,
flex:1},

titleText:{
fontSize:16,
color:foreground},

navbarIcon:{
fontSize:24,
color:foreground,
alignSelf:'center'},

menuTouchable:{
backgroundColor:background,
marginHorizontal:4,
height:48,
width:48,
padding:12},

searchInput:{
fontSize:16,
color:foreground,
flex:1}};


}}]);return Header;}(_react.Component);Header.propTypes={title:_react.PropTypes.string,rightButtonIcon:_react.PropTypes.string,onRightButtonClick:_react.PropTypes.func,leftButtonIcon:_react.PropTypes.string,onLeftButtonClick:_react.PropTypes.func,backgroundColor:_react.PropTypes.string,foregroundColor:_react.PropTypes.string,isSearch:_react.PropTypes.bool,onSearch:_react.PropTypes.func,searchPlaceholder:_react.PropTypes.string,isFixedSearch:_react.PropTypes.bool,searchRightIcon:_react.PropTypes.string,onSearchRightClick:_react.PropTypes.func};
;exports.default=

Header;
//# sourceMappingURL=Header.js.map