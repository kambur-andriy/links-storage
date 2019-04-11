import React, {Component} from 'react';
import {Button} from 'semantic-ui-react'

class ActionsGroup extends Component {
    constructor() {
        super();

    }

    render() {

        return (
            <Button.Group size='large' widths='2'>
                <Button          >
                    Search
                </Button>

                <Button.Or />

                <Button positive>
                    Save
                </Button>
            </Button.Group>
        );

    }

}


export default ActionsGroup;
