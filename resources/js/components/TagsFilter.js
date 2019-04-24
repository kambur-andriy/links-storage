import React, {Component} from 'react';
import {Table, Checkbox, Segment, Header, Icon} from 'semantic-ui-react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {getTags} from './../storage/actions/TagsActions';
import {changeTag} from './../storage/actions/FiltersActions';


const mapStateToProps = function (store) {
    return {
        tagsList: store.tags.tagsList,
        selectedTags: store.filters.selectedTags,
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            getTags,
            changeTag,
        },
        dispatch
    )
};

class TagsFilter extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.getTags();
    }

    render() {

        if (this.props.tagsList.length === 0) {
            return (
                <Segment basic textAlign='center'>
                    <Header icon color='grey'>
                        <Icon name='clipboard outline' color='grey'/>
                        There are no tags in the list
                    </Header>
                </Segment>
            )
        }

        return (

            <Table
                selectable
                id="tags_list"
            >
                <Table.Body>
                    {
                        this.props.tagsList.map(
                            tag => {
                                return <Table.Row key={tag.id}>
                                    <Table.Cell collapsing>
                                        <Checkbox
                                            toggle
                                            onChange={
                                                () => this.props.changeTag(tag.id)
                                            }
                                            checked={this.props.selectedTags.indexOf(tag.id) !== -1}
                                        />
                                    </Table.Cell>
                                    <Table.Cell>{tag.text}</Table.Cell>
                                </Table.Row>
                            }
                        )
                    }
                </Table.Body>
            </Table>

        );

    }

}

export default connect(mapStateToProps, mapDispatchToProps)(TagsFilter);
