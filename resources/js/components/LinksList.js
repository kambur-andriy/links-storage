import React, {Component} from 'react';
import {Table, Icon, Segment, Header} from 'semantic-ui-react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {getLinks, editLink} from './../storage/actions/LinksActions';


const mapStateToProps = function (store) {
    return {
        linksList: store.links.linksList,
        selectedTags: store.filters.selectedTags,
        searchString: store.filters.searchString,
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            getLinks,
            editLink
        },
        dispatch
    )
};

class LinksList extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.getLinks();
    }

    render() {

        const visibleLinksList = this.props.linksList.filter(
            link => {
                let showLink = this.props.selectedTags.length === 0;

                link.tags.forEach(
                    linkTag => {
                        if (this.props.selectedTags.indexOf(linkTag.id) !== -1) {
                            showLink = true;
                        }
                    }
                );

                if (this.props.searchString.length && !link.name.toLowerCase().includes(this.props.searchString.toLowerCase())) {
                    showLink = false;
                }

                return showLink;
            }
        );

        if (visibleLinksList.length === 0) {
            return (
                <Segment basic textAlign='center'>
                    Links list is empty
                </Segment>
            )
        }

        return (

            <Table
                selectable
                id="links_list"
            >
                <Table.Body>
                    {
                        visibleLinksList.map(
                            link => {
                                return <Table.Row key={link.id}>
                                    <Table.Cell>{link.name}</Table.Cell>
                                    <Table.Cell collapsing>
                                        <Icon
                                            name='edit outline'
                                            color="green"
                                            onClick={
                                                () => this.props.editLink(link.id)
                                            }
                                        />
                                    </Table.Cell>
                                    <Table.Cell collapsing>
                                        <a
                                            href={link.url}
                                            target="_blank"
                                        >
                                            <Icon
                                                name='shipping fast'
                                                color="green"
                                            />
                                        </a>
                                    </Table.Cell>
                                </Table.Row>
                            }
                        )
                    }
                </Table.Body>
            </Table>

        );

    }

}

export default connect(mapStateToProps, mapDispatchToProps)(LinksList);
