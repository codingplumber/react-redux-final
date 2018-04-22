import React from 'react';

import Contacts from '../../containers/Contacts/Contacts';
import Form from '../../containers/Form/Form';
import styles from '../../Styles/Styles';

const cockpit = () => {
    return (
        <div style={styles.controllerWrapper}>
            <div style={styles.controllerContacts}>
                <Contacts />
            </div>
            <div style={styles.controllerForm}>
                <Form />
            </div>
        </div>
    );
} 

export default cockpit;

