import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionTypes from '../../store/actions/actions';
import Contact from '../../components/Contact/Contact';
import styles from '../../Styles/Styles';

class Contacts extends Component {
    render() {
        return (
            <div style={styles.contactsWrapper}>
                <Contact contacts={ this.props.contacts } changeContact={ this.props.onContactChange } />
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

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);