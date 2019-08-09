import React, { Component, Fragment } from 'react';
import Contacts from './Contacts';
import Form from './Form';

export default class Dashboard extends Component {
    render() {
        return (
            <Fragment>
                <Form />
                <Contacts />
            </Fragment>
        )
    }
}
