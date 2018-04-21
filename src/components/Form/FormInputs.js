import React from 'react';

import Aux from '../../hoc/Aux';
import styles from '../../Styles/Styles';

const inputs = props => {
    console.log(props)
    const input = props.names.map((name, i) => {
        return (
            <div style={styles.formInputDiv} key={ i }>
                <label style={styles.formP}>{props.labels[i]}</label><input 
                    style={styles.input}
                    value={ props.contactInfo[i] } 
                    onChange={ props.change }
                    onFocus={ props.focus } 
                    type='text' name={ props.names[i] } />
            </div>             
        );
    });
    return (
        <Aux>
            {input}
        </Aux>
    );
}

export default inputs;