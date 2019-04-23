import React, {Component} from 'react';
import CreateLinkForm from './../../components/CreateLinkForm'
import CreateTagForm from './../../components/CreateTagForm'
import SearchForm from './../../components/SearchForm'
import TagsFilter from './../../components/TagsFilter'
import LinksList from './../../components/LinksList'
import {Segment} from 'semantic-ui-react'

class Index extends Component {
    constructor() {
        super();
    }

    render() {

        return (
            <div id="page_content">
                <div id="link_form">
                    <Segment color='blue' raised>
                        <CreateLinkForm/>
                    </Segment>
                </div>

                <div id="tags_form">
                    <Segment color='yellow' raised>
                        <CreateTagForm/>
                    </Segment>
                </div>

                <div id="search_form">
                    <Segment color='green' raised>
                        <SearchForm/>
                    </Segment>
                </div>

                <div id="tags_filter">
                    <TagsFilter/>
                </div>

                <div id="links_list_container">
                    <LinksList/>
                </div>
            </div>
        );

    }

}

export default Index;