import React, { PropTypes, Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import Platform from './Platform';
import Header from './Header';
import merge from 'lodash.merge';


class SearchHeader extends Component {

    static propTypes = Object.assign({}, Header.propTypes, {
        onSearch: PropTypes.func,
        placeholder: PropTypes.string,
    });

    constructor(props) {
        super(props);

        this.state = {
            searchText: ''
        };

        this._getDefaultStyles = this._getDefaultStyles.bind(this);
        this._onSearchChanged = this._onSearchChanged.bind(this);
        this._getHeaderProps = this._getHeaderProps.bind(this);
    }

    _onSearchChanged(searchText) {
        this.setState({ searchText });

        if (this.props.onSearch) {
            this.props.onSearch(searchText);
        }
    }


    _getHeaderProps() {
        let props = merge({}, this.props);

        if (props.onSearch) {
            delete props.onSearch;
        }

        if (props.placeholder) {
            delete props.placeholder;
        }

        return props;
    }

    render() {
        const placeholder = this.props.placeholder ? this.props.placeholder : 'Search';
        const styles = this._getDefaultStyles();
        const props = this._getHeaderProps();

        return (
            <Header {...props}>
                <TextInput
                    returnKeyType='search'
                    style={styles.searchInput}
                    autoFocus={true}
                    placeholder={placeholder}
                    onChangeText={this._onSearchChanged}
                    value={this.state.searchText} />
            </Header>
        );
    }

    _getDefaultStyles() {

        const { foregroundColor } = this.props;
        const foreground = foregroundColor ? foregroundColor : Platform.ios ? 'black' : 'white';

        return {
            searchInput: {
                fontSize: 16,
                color: foreground,
                flex: 1,
                // backgroundColor:'red',
            }
        };
    }
};



export default SearchHeader;
