import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionTypes from '../../store/actions/actions';
import FormInputs from './FormInputs';
import styles from '../../Styles/Styles';

class Form extends Component {

    componentWillMount() {
        this.props.onPageLoad();
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }

    onFocus = (event) => {
        event.target.value = '';
    }

    render() {
        // console.log(this.props.person)
        return (
            <div style={styles.formWrapper}>
                <form onSubmit={ this.handleSubmit }>
                    
                    <FormInputs 
                        names={[ 'name', 'email', 'phone' ]}
                        labels={[ 'Name:', 'Email:', 'Phone:' ]}
                        contactInfo={[ this.props.person.name, this.props.person.email, this.props.person.phone ]}
                        change={ (e) => this.props.onLoadedContactChange(e.target.name, e.target.value) }
                        focus={ this.onFocus } />
                   
                    <div style={styles.buttonDiv}>
                        <input 
                            style={styles.formUpdate} 
                            value='Update' type='submit' 
                            onClick={ () => this.props.onContactUpdate() } />
                        <input 
                            style={styles.formDelete} 
                            value='Delete' type='submit' 
                            onClick={ (e) => this.props.onContactDelete(this.props.person.id) } />
                    </div>
                    <div>
                        <input 
                            style={styles.formAdd} 
                            value='Add New Contact' type='submit' 
                            onClick={ () => this.props.onContactAdd() } />
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
        onPageLoad: () => dispatch({ type: actionTypes.PAGE_LOAD }),
        onLoadedContactChange: (name, value) => dispatch({ type: actionTypes.CHANGE_LOADED_CONTACT, payload: {name, value} }),
        onContactDelete: (id) => dispatch({ type: actionTypes.DELETE_CONTACT, id }),      
        onContactAdd: () => dispatch({ type: actionTypes.ADD_CONTACT }),
        onContactUpdate: () => dispatch({ type: actionTypes.UPDATE_CONTACT})       
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);


// INPUTS
// <div style={styles.formInputDiv}>
//     <label style={styles.formP}>Name:</label><input 
//         style={styles.input}
//         value={ this.props.person.name } 
//         onChange={ (e) => this.props.onLoadedContactChange(e.target.name, e.target.value) }
//         onFocus={ this.onFocus } 
//         type='text' name='name' />
// </div>    

// <div style={styles.formInputDiv}>
//     <label style={styles.formP}>Email:</label><input 
//         style={styles.input}
//         value={ this.props.person.email } 
//         onChange={ (e) => this.props.onLoadedContactChange(e.target.name, e.target.value) }
//         onFocus={ this.onFocus } 
//         type='text' name='email' />
// </div>

// <div style={styles.formInputDiv}>
//     <label style={styles.formP}>Phone:</label><input 
//         style={styles.input}
//         value={ this.props.person.phone } 
//         onChange={ (e) => this.props.onLoadedContactChange(e.target.name, e.target.value) } 
//         onFocus={ this.onFocus }
//         type='text' name='phone' />
// </div>


// <div style={styles.formInputDiv}>
//     <FormInputs 
//         names={[ 'name', 'email', 'phone' ]}
//         labels={[ 'Name:', 'Email:', 'Phone:' ]}
//         contactInfo={[ this.props.person.name, this.props.person.email, this.props.person.phone ]}
//         change={ (e) => this.handleChange(e) }
//         focus={ this.props.focus } />
// </div>


// ADD_CONTACT
// , payload: {name, email, phone}