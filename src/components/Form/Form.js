import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionTypes from '../../store/actions/actions';
// import FormInputs from './FormInputs';
import styles from '../../Styles/Styles';

class Form extends Component {
    state = {
        name: '',
        email: '',
        phone: ''
    }

        // Changes loadedContact in state
    handleChange = (event) => {
        console.log(event.target.name)
        console.log(event.target.value)
        // const  = { ...this.state };
        switch(event.target.name) {
            case 'name':
                // this.state.name = event.target.value;
                this.setState({ name: event.target.value });
                break;
            case 'email':
                // this.state.email = event.target.value;
                this.setState({ email: event.target.value });
                break;
            case 'phone': 
                // this.state.phone = event.target.value;
                this.setState({ phone: event.target.value });
                break;
            default:
                console.log('[ERROR]')
        }
        console.log('state: ', this.state)
        
    }

    // Prevents the form from reloading
    // change = (event) => {
    //     event.persist();
    //     console.log(event.target.name.value)
    //     event.preventDefault();
    // }

    render() {
        console.log(this.props.person)
        return (
            <div style={styles.formWrapper}>
                <form onSubmit={ this.props.submit }>

                    <div style={styles.formInputDiv}>
                        <label style={styles.formP}>Name:</label><input 
                            style={styles.input}
                            value={ this.props.person.name } 
                            onChange={ (e) => this.props.onLoadedContactChange(e) }
                            onFocus={ this.props.focus } 
                            type='text' name='name' />
                    </div>    

                    <div style={styles.formInputDiv}>
                        <label style={styles.formP}>Email:</label><input 
                            style={styles.input}
                            value={ this.props.person.email } 
                            onChange={ (e) => {
                                return this.props.onLoadedContactChange(e.target.name, e.target.value)
                            } }
                            onFocus={ this.props.focus } 
                            type='text' name='email' />
                    </div>

                    <div style={styles.formInputDiv}>
                        <label style={styles.formP}>Phone:</label><input 
                            style={styles.input}
                            value={ this.props.person.phone } 
                            onChange={ (e) => this.props.onLoadedContactChange(e) } 
                            onFocus={ this.props.focus }
                            type='text' name='phone' />
                    </div>

                    <div style={styles.buttonDiv}>
                        <input 
                            style={styles.formUpdate} 
                            value='Update' type='submit' 
                            onClick={ (e) => this.props.update(e, this.props.person.id) } />
                        <input 
                            style={styles.formDelete} 
                            value='Delete' type='submit' 
                            onClick={ (e) => this.props.delete(e, this.props.person.id) } />
                    </div>
                    <div>
                        <input 
                            style={styles.formAdd} 
                            value='Add New Contact' type='submit' 
                            onClick={ () => this.props.onContactAdd(this.state.name, this.state.email, this.state.phone) } />
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        contacts: state.contacts,
        person: state.loadedContact
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLoadedContactChange: (name, value) => dispatch({ type: actionTypes.CHANGE_LOADED_CONTACT, payload: {name, value} }),        
        onContactAdd: (name, email, phone) => dispatch({ type: actionTypes.ADD_CONTACT, payload: {name, email, phone} }),        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
// export default form;


// INPUTS
// <div style={styles.formInputDiv}>
// <label style={styles.formP}>Name:</label><input 
//     style={styles.input}
//     value={ props.person.name } 
//     onChange={ props.change }
//     onFocus={ (e) => props.focus(e) } 
//     type='text' name='name' />
// </div>               
// <div style={styles.formInputDiv}>
// <label style={styles.formP}>Email:</label><input 
//     style={styles.input}
//     value={ props.person.email } 
//     onChange={ props.change }
//     onFocus={ (e) => props.focus(e) } 
//     type='text' name='email' />
// </div>
// <div style={styles.formInputDiv}>
// <label style={styles.formP}>Phone:</label><input 
//     style={styles.input}
//     value={ props.person.phone } 
//     onChange={ props.change } 
//     onFocus={ (e) => props.focus(e) }
//     type='text' name='phone' />
// </div>



// <FormInputs 
// names={[ 'name', 'email', 'phone' ]}
// labels={[ 'Name:', 'Email:', 'Phone:' ]}
// contactInfo={[ this.props.person.name, this.props.person.email, this.props.person.phone ]}
// change={ (e) => this.handleChange(e) }
// focus={ this.props.focus } />
