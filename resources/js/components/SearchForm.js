import React, {Component} from 'react';
import {Input} from 'semantic-ui-react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {quickSearch} from './../storage/actions/FiltersActions';


const mapStateToProps = function (store) {
    return {
        searchString: store.filters.searchString,
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            quickSearch
        },
        dispatch
    )
};

class SearchForm extends Component {
    constructor() {
        super();
    }

    render() {

        return (

            <Input
                fluid
                icon='search'
                iconPosition='left'
                placeholder='Search...'
                onChange={
                    (event, data) => this.props.quickSearch(data.value)
                }
                onKeyDown={
                    event => {
                        if (event.keyCode === 27) {
                            this.props.quickSearch('');
                        }
                    }
                }
                action={
                    {
                        color: 'green',
                        labelPosition: 'right',
                        icon: 'cancel',
                        content: 'Clear',
                        onClick: () => this.props.quickSearch('')
                    }
                }
                value={this.props.searchString}
            />

        );

    }

}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);