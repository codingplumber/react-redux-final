import React from 'react';

import Aux from '../../hoc/Aux';
import styles from '../../Styles/Styles';

const inputs = props => {
    const input = props.names.map((name, i) => {
        return (
            <div style={styles.formInputDiv} key={ i }>
                <label style={styles.formP}>{props.labels[i]}</label><input 
                    style={styles.input}
                    value={ props.contactInfo[i] } 
                    onChange={ props.change }
                    onFocus={ (e) => props.focus(e) } 
                    type='text' name={ props.name } />
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

// <div style={styles.formInputDiv}>
//     <label style={styles.formP}>Name:</label><input 
//         style={styles.input}
//         value={ props.person.name } 
//         onChange={ props.change }
//         onFocus={ (e) => props.focus(e) } 
//         type='text' name='name' />
// </div> 