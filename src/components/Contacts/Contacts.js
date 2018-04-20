import React from 'react';

import Contact from '../../components/Contact/Contact';
import styles from '../../Styles/Styles';

const contacts = props => {
    return (
        <div style={styles.contactsWrapper}>
            <Contact contacts={ props.contacts } changeContact={ props.changeContact } />
        </div>
    );
}

export default contacts;