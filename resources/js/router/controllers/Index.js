import React, {Component} from 'react';
import CreateLinkForm from './../../components/CreateLinkForm'
import CreateTagForm from './../../components/CreateTagForm'
import TagsList from './../../components/TagsList'
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
                    <Segment>
                        <CreateLinkForm/>
                    </Segment>
                </div>

                <div id="tags_form">
                    <Segment>
                        <CreateTagForm/>
                    </Segment>
                </div>

                <div id="tags_list">
                    <Segment>
                        <TagsList/>
                    </Segment>
                </div>

                <div id="links_list">
                    <Segment>
                        <LinksList/>
                    </Segment>
                </div>
            </div>
        );

    }

}

export default Index;