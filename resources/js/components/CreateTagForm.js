import React, {Component} from 'react';
import {Button, Form, Message} from 'semantic-ui-react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'

import {saveTag} from './../storage/actions/TagsActions';

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            saveTag
        },
        dispatch
    )
}

class CreateTagForm extends Component {
    constructor() {
        super();

        this.state = {
            formData: {
                text: ''
            },
            formErrors: {
                message: '',
                fields: {}
            }
        }

        this.onChangeText = this.onChangeText.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.afterSubmit = this.afterSubmit.bind(this);
    }

    onChangeText(event) {
        const fieldVal = event.target.value;

        this.setState(
            prevState => {
                return {
                    ...prevState,
                    formData: {
                        ...prevState.formData,
                        text: fieldVal
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
                    text: ''
                },
                formErrors: {
                    message: '',
                    fields: {}
                }
            }
        )
    }

    onSubmit() {
        this.props.saveTag(this.state.formData)
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

    render() {

        const formErrors = this.state.formErrors.fields;
        const errorMessage = this.state.formErrors.message;

        return (
            <Form
                id="create_tag_frm"
                onSubmit={this.onSubmit}
                error={errorMessage !== ''}
            >
                <Form.Input
                    fluid
                    placeholder='New Tag'
                    value={this.state.formData.text}
                    onChange={this.onChangeText}
                    error={formErrors.text !== undefined}
                />

                <Button.Group size='large' widths='2'>
                    <Button
                        color="yellow"
                    >
                        Create
                    </Button>
                </Button.Group>

                <Message
                    error
                    header='Error saving tag'
                    content={errorMessage}
                />
            </Form>
        );

    }

}

export default connect(null, mapDispatchToProps)(CreateTagForm);