import React, {Component} from 'react';
import {Input} from 'semantic-ui-react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {changeSearch, clearAll} from './../storage/actions/FiltersActions';


const mapStateToProps = function (store) {
    return {
        searchString: store.filters.searchString,
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            changeSearch,
            clearAll
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
                icon={
                    {
                        name: 'search',
                        color: 'green'
                    }
                }
                iconPosition='left'
                placeholder='Search...'
                onChange={
                    (event, data) => this.props.changeSearch(data.value)
                }
                onKeyDown={
                    event => {
                        if (event.keyCode === 27) {
                            this.props.changeSearch('');
                        }
                    }
                }
                action={
                    {
                        color: 'green',
                        labelPosition: 'right',
                        icon: 'cancel',
                        content: 'Clear All',
                        onClick: () => this.props.clearAll()
                    }
                }
                value={this.props.searchString}
            />

        );

    }

}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);