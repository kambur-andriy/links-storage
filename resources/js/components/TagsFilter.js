import React, {Component} from 'react';
import {Table, Checkbox} from 'semantic-ui-react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {getTags, selectTag} from './../storage/actions/TagsActions';


const mapStateToProps = function (store) {
    return {
        tagsList: store.tags.tagsList,
        selectedTags: store.tags.selectedTags,
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            getTags,
            selectTag
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
                                                () => this.props.selectTag(tag.id)
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