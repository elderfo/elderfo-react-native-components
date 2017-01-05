import React, { PropTypes, Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import Platform from './Platform';
import Header from './Header';


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
    }

    _onSearchChanged(searchText) {
        this.setState({ searchText });

        if (this.props.onSearch) {
            this.props.onSearch(searchText);
        }
    }

    render() {
        const placeholder = this.props.placeholder ? this.props.placeholder : 'Search';
        const styles = this._getDefaultStyles();
        return (
            <Header {...this.props}>
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
