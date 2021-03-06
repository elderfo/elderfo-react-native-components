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

  _validateProps = ({
    isSearch,
    onSearch,
    searchPlaceholder,
    isFixedSearch,
    searchRightIcon,
    onSearchRightClick,
    title
  }) => {
    if (isSearch
      || onSearch
      || searchPlaceholder
      || isFixedSearch
      || searchRightIcon
      || onSearchRightClick
    ) {
      this.logger.warn('The `isSearch`, `onSearch`, `searchPlaceholder`, `isFixedSearch`, searchRightIcon` and `onSearchRightIcon` props are deprecated. Please use the SearchHeader component for this functionality');
    }

    if (title) {
      this.logger.warn('The `title` property has been deprecated. Please use a Text component for this functionality.');
    }
  };

  constructor(props) {
    super(props);

    this.state = {
      isSearching: props.isFixedSearch,
      searchText: ''
    };

    this._validateProps(props);

    this._setSearchMode = this._setSearchMode.bind(this);
    this._renderSearchBox = this._renderSearchBox.bind(this);
    this._getDefaultStyles = this._getDefaultStyles.bind(this);
    this._getForegroundColor = this._getForegroundColor.bind(this);
    this._onSearchChanged = this._onSearchChanged.bind(this);
    this._renderChildren = this._renderChildren.bind(this);
    this._renderTitle = this._renderTitle.bind(this);
    this._getChildArray = this._getChildArray.bind(this);
  }

  _setSearchMode(isSearching, searchText) {
    this.setState({ isSearching, searchText });
  }

  _getChildArray() {
    let children = [];

    if (this.props.children) {
      children = children = Array.isArray(this.props.children)
        ? this.props.children
        : [this.props.children];
    }

    return children;
  }

  _renderTitle(title, styles) {
    const children = this._getChildArray();

    // Look for a Text element first before trying to render the props title
    const titleElement = children.find(el => el.type === Text);

    if (titleElement) {
      if (title) {
        this.logger.warn('A title property was specified along with a Text element as a child, the text element will be used.')
      }

      if (titleElement.props.style) {
        return titleElement;
      } else {
        return React.cloneElement(titleElement, { style: styles.titleText });
      }
    } else if (title) {
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

    if (firstComponent) {
      return firstComponent;
    }
    const children = this._getChildArray();
    if (children) {
      if (children.length > 1) {
        this.logger.warn('Multiple children are not currently support. Only the first child will be rendered.');
      }
      return children[0];
    }
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

    return (
      <View style={styles.navbar}>
        {this._renderButton(leftButtonIcon, onLeftButtonClick, styles)}
        <View style={styles.titleContainer}>
          {this._renderChildren(styles)}
        </View>
        {this._renderButton(rightButtonIcon, onRightButtonClick, styles)}
      </View>
    );
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
