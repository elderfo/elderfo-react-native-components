Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _Ionicons=require('react-native-vector-icons/Ionicons');var _Ionicons2=_interopRequireDefault(_Ionicons);
var _Platform=require('./Platform');var _Platform2=_interopRequireDefault(_Platform);
var _Header=require('./Header');var _Header2=_interopRequireDefault(_Header);
var _lodash=require('lodash.merge');var _lodash2=_interopRequireDefault(_lodash);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var


SearchHeader=function(_Component){_inherits(SearchHeader,_Component);






function SearchHeader(props){_classCallCheck(this,SearchHeader);var _this=_possibleConstructorReturn(this,(SearchHeader.__proto__||Object.getPrototypeOf(SearchHeader)).call(this,
props));

_this.state={
searchText:''};


_this._getDefaultStyles=_this._getDefaultStyles.bind(_this);
_this._onSearchChanged=_this._onSearchChanged.bind(_this);
_this._getHeaderProps=_this._getHeaderProps.bind(_this);return _this;
}_createClass(SearchHeader,[{key:'_onSearchChanged',value:function _onSearchChanged(

searchText){
this.setState({searchText:searchText});

if(this.props.onSearch){
this.props.onSearch(searchText);
}
}},{key:'_getHeaderProps',value:function _getHeaderProps()


{
var props=(0,_lodash2.default)({},this.props);

if(props.onSearch){
delete props.onSearch;
}

if(props.placeholder){
delete props.placeholder;
}

return props;
}},{key:'render',value:function render()

{
var placeholder=this.props.placeholder?this.props.placeholder:'Search';
var styles=this._getDefaultStyles();
var props=this._getHeaderProps();

return(
_react2.default.createElement(_Header2.default,props,
_react2.default.createElement(_reactNative.TextInput,{
returnKeyType:'search',
style:styles.searchInput,
autoFocus:true,
placeholder:placeholder,
onChangeText:this._onSearchChanged,
value:this.state.searchText})));


}},{key:'_getDefaultStyles',value:function _getDefaultStyles()

{var

foregroundColor=this.props.foregroundColor;
var foreground=foregroundColor?foregroundColor:_Platform2.default.ios?'black':'white';

return{
searchInput:{
fontSize:16,
color:foreground,
flex:1}};



}}]);return SearchHeader;}(_react.Component);SearchHeader.propTypes=_extends({},_Header2.default.propTypes,{onSearch:_react.PropTypes.func,placeholder:_react.PropTypes.string});
;exports.default=



SearchHeader;
//# sourceMappingURL=SearchHeader.js.map