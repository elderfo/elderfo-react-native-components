import React, { PropTypes, Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import Platform from './Platform';


class Header extends Component {

  logger = console;

  static propTypes = {
    title: PropTypes.string,
    rightButtonIcon: PropTypes.string,
    onRightButtonClick: PropTypes.func,
    leftButtonIcon: PropTypes.string,
    onLeftButtonClick: PropTypes.func,
    backgroundColor: PropTypes.string,
    foregroundColor: PropTypes.string,
    isSearch: PropTypes.bool,
    onSearch: PropTypes.func,
    searchPlaceholder: PropTypes.string,
    isFixedSearch: PropTypes.bool,
    searchRightIcon: PropTypes.string,
    onSearchRightClick: PropTypes.func
  }

  constructor(props) {
    super(props);

    this.state = {
      isSearching: props.isFixedSearch,
      searchText: ''
    };

    this._setSearchMode = this._setSearchMode.bind(this);
    this._renderSearchBox = this._renderSearchBox.bind(this);
    this._getDefaultStyles = this._getDefaultStyles.bind(this);
    this._getForegroundColor = this._getForegroundColor.bind(this);
    this._onSearchChanged = this._onSearchChanged.bind(this);
    this._renderChildren = this._renderChildren.bind(this);
  }

  _setSearchMode(isSearching, searchText) {
    this.setState({ isSearching, searchText });
  }

  _renderTitle(title, styles) {
    if (title) {
      return (<Text style={styles.titleText}>{title}</Text>);
    }
  }

  _onSearchChanged(searchText) {
    this.setState({ searchText });

    if (this.props.onSearch) {
      this.props.onSearch(searchText);
    }
  }

  _getButton(icon, onClick, styles) {
    return (
      <TouchableOpacity onPress={onClick} style={styles.menuTouchable} activeOpacity={.4}>
        <Icon name={icon} style={styles.navbarIcon} />
      </TouchableOpacity>
    );
  }

  _renderButton(icon, onClick, styles) {
    const button = (icon && onClick)
      ? this._getButton(icon, onClick, styles)
      : undefined;

    return (
      <View>
        {button}
      </View>
    );
  }

  _renderSearchBox(styles) {
    const placeholder = this.props.searchPlaceholder ? this.props.searchPlaceholder : 'Search';
    return (
      <TextInput
        style={styles.searchInput}
        autoFocus={true}
        placeholder={placeholder}
        onChangeText={this._onSearchChanged}
        value={this.state.searchText} />
    );
  }

  _renderChildren(styles) {
    const {title} = this.props;
    const firstComponent = this.state.isSearching
      ? this._renderSearchBox(styles)
      : this._renderTitle(title, styles);

    let newChildren = firstComponent 
      ? [firstComponent] 
      : [];

    if (this.children) { 
      newChildren = newChildren.concat(this.children);
    }
    
    return newChildren.map((el, idx) =>  (
      <View key={`header-content-${idx}`}>
        {el}
      </View>
    ));
  }

  render() {
    let {
      rightButtonIcon,
      onRightButtonClick,
      leftButtonIcon,
      onLeftButtonClick,
    } = this.props;

    const {
      backgroundColor,
      foregroundColor,
      isSearch,
      isFixedSearch,
      searchRightIcon,
      onSearchRightClick
    } = this.props;

    if (isSearch && !this.state.isSearching) {
      rightButtonIcon = 'md-search';
      onRightButtonClick = () => this._setSearchMode(true);
    } else if (isSearch && this.state.isSearching) {
      rightButtonIcon = (searchRightIcon && onSearchRightClick) ? searchRightIcon : null;
      onRightButtonClick = (searchRightIcon && onSearchRightClick) ? onSearchRightClick : null;
      leftButtonIcon = 'md-arrow-back';

      if (!isFixedSearch) {
        onLeftButtonClick = () => this._setSearchMode(false, '');
      }
    }

    const styles = StyleSheet.create(this._getDefaultStyles((leftButtonIcon && onLeftButtonClick)));

    return <View style={styles.navbar}>
      {this._renderButton(leftButtonIcon, onLeftButtonClick, styles)}
      <View style={styles.titleContainer}>
        {this._renderChildren(styles)}
      </View>
      {this._renderButton(rightButtonIcon, onRightButtonClick, styles)}
    </View>;
  }

  _getForegroundColor() {
    const { foregroundColor} = this.props;

    return foregroundColor ? foregroundColor : Platform.ios ? 'black' : 'white';
  }

  _getDefaultStyles(hasLeftButton) {
    const {backgroundColor} = this.props;

    const foreground = this._getForegroundColor();
    const background = backgroundColor ? backgroundColor : (Platform.ios) ? '#F8F8F8' : '#4179F7';

    return {
      navbar: {
        backgroundColor: background,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 1.5,
        paddingTop: Platform.ios ? 15 : 0,
        height: Platform.ios ? 64 : 56,
        elevation: 3,
        position: 'relative',
      },
      titleContainer: {
        marginLeft: hasLeftButton ? 16 : 72,
        flex: 1
      },
      titleText: {
        fontSize: 16,
        color: foreground
      },
      navbarIcon: {
        fontSize: 24,
        color: foreground,
        alignSelf: 'center',
      },
      menuTouchable: {
        backgroundColor: background,
        marginHorizontal: 4,
        height: 48,
        width: 48,
        padding: 12
      },
      searchInput: {
        fontSize: 16,
        color: foreground,
        flex: 1
      }
    };
  }
};

export default Header;
