import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionTypes from '../../store/actions/actions';
import Contacts from '../../components/Contacts/Contacts';
import Form from '../../components/Form/Form';
import styles from '../../Styles/Styles';

class Controller extends Component {
    render() {
        // console.log('[contacts in CONTROLLER]', this.props.contacts)
        return (
            <div style={styles.controllerWrapper}>
                <div style={styles.controllerContacts}>
                    <Contacts 
                        contacts={ this.props.contacts }
                        changeContact={ this.props.onContactChange } />
                </div>
                <div style={styles.controllerForm}>
                    <Form />
                </div>
            </div>
        );
    }
} 

const mapStateToProps = state => {
    return {
        contacts: state.contacts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onContactChange: (contact) => dispatch({ type: actionTypes.CHANGE_CONTACT, contactDisplayed: contact })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Controller);

