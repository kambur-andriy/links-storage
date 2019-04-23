import React, {Component} from 'react';
import {Form, Button, Dropdown, Message} from 'semantic-ui-react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {saveLink} from './../storage/actions/LinksActions';

const mapStateToProps = function (store) {
    return {
        tagsList: store.tags.tagsList,
        selectedLink: store.links.selectedLink
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            saveLink
        },
        dispatch
    )
};

const renderTagLabel = label => ({
    color: 'blue',
    content: `${label.text}`,
    icon: 'tag',
    basic: true
})

class CreateLinkForm extends Component {

    constructor() {
        super();

        this.state = {
            formData: {
                id: 0,
                name: '',
                url: '',
                tags: []
            },
            formErrors: {
                message: '',
                fields: {}
            }
        }

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeUrl = this.onChangeUrl.bind(this);
        this.onChangeTag = this.onChangeTag.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.afterSubmit = this.afterSubmit.bind(this);
        this.onCancelSubmit = this.onCancelSubmit.bind(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const shouldUpdateState = this.props.selectedLink.id !== 0
            && this.state === prevState;

        if (shouldUpdateState) {
            this.setState(
                {
                    formData: this.props.selectedLink,
                }
            );
        }
    }

    onChangeName(event) {
        const fieldVal = event.target.value;

        this.setState(
            prevState => {
                return {
                    ...prevState,
                    formData: {
                        ...prevState.formData,
                        name: fieldVal
                    },
                    formErrors: {
                        message: '',
                        fields: {}
                    }
                }
            }
        );
    }

    onChangeUrl(event) {
        const fieldVal = event.target.value;

        this.setState(
            prevState => {
                return {
                    ...prevState,
                    formData: {
                        ...prevState.formData,
                        url: fieldVal
                    },
                    formErrors: {
                        message: '',
                        fields: {}
                    }
                }
            }
        );
    }

    onChangeTag(event, data) {
        this.setState(
            prevState => {
                return {
                    ...prevState,
                    formData: {
                        ...prevState.formData,
                        tags: data.value
                    },
                    formErrors: {
                        message: '',
                        fields: {}
                    }
                }
            }
        );
    }

    afterSubmit() {
        this.setState(
            {
                formData: {
                    id: 0,
                    name: '',
                    url: '',
                    tags: []
                },
                formErrors: {
                    message: '',
                    fields: {}
                }
            }
        )
    }

    onSubmit() {
        this.props.saveLink(this.state.formData)
            .then(
                () => this.afterSubmit()
            )
            .catch(
                error => this.setState(
                    prevState => {
                        return {
                            ...prevState,
                            formErrors: error
                        }
                    }
                )
            )
    }

    onCancelSubmit(event) {
        event.preventDefault();

        this.afterSubmit();
    }

    render() {

        const formErrors = this.state.formErrors.fields;
        const errorMessage = this.state.formErrors.message;

        return (
            <Form
                id="create_link_frm"
                onSubmit={this.onSubmit}
                error={errorMessage !== ''}
            >
                <Form.Field error={formErrors.url !== undefined}>
                    <textarea
                        rows="3"
                        placeholder="Link Url"
                        value={this.state.formData.url}
                        onChange={this.onChangeUrl}
                    >
                    </textarea>
                </Form.Field>

                <Form.Field error={formErrors.name !== undefined}>
                    <input
                        type="text"
                        placeholder="Link Name"
                        value={this.state.formData.name}
                        onChange={this.onChangeName}
                    />
                </Form.Field>

                <Form.Field error={formErrors.tags !== undefined}>
                    <Dropdown
                        placeholder='Link Tags'
                        fluid
                        multiple
                        search
                        selection
                        clearable
                        scrolling
                        closeOnChange
                        options={
                            this.props.tagsList.map(
                                tag => (
                                    {
                                        key: tag.id,
                                        text: tag.text,
                                        value: tag.id
                                    }
                                )
                            )
                        }
                        renderLabel={renderTagLabel}
                        onChange={this.onChangeTag}
                        value={this.state.formData.tags}
                    />
                </Form.Field>

                <Button.Group size='large' widths='2'>
                    <Button
                        basic
                        color='blue'
                        onClick={this.onCancelSubmit}
                    >
                        Cancel
                    </Button>


                    <Button
                        color='blue'
                        type='submit'
                    >
                        Save
                    </Button>
                </Button.Group>

                <Message
                    error
                    header='Error saving link'
                    content={errorMessage}
                />
            </Form>
        );

    }

}


export default connect(mapStateToProps, mapDispatchToProps)(CreateLinkForm);
