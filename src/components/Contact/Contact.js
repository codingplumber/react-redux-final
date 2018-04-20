import React from 'react';
// import { connect } from 'react-redux';

import Aux from '../../hoc/Aux';
import styles from '../../Styles/Styles';

const contact = props => {
    const contact = props.contacts.map(contact => {
        return (
            <div 
                key={ contact.id } 
                style={styles.contactWrapper}
                onClick={ () => props.changeContact(contact) }
                >
                <p style={styles.contactP}>Name: { contact.name }</p>
                <p style={styles.contactP}>Email: { contact.email }</p>
                <p style={styles.contactP}>Phone: { contact.phone }</p>
            </div>
        );
    });

    return <Aux>{contact}</Aux>
};

export default contact;

// onClick={ () => props.changeContact(contact) }