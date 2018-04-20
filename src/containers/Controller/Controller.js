import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionTypes from '../../store/actions/actions';
import Contacts from '../../components/Contacts/Contacts';
import Form from '../../components/Form/Form';
import styles from '../../Styles/Styles';

class Controller extends Component {
    state = {
        contacts: [
            {
                id: 1,
                name: 'John Doe',
                email: 'email1@email.com',
                phone: '1234567890'
            },
            {
                id: 2,
                name: 'Jane Doe',
                email: 'email2@email.com',
                phone: '1234567891'
            },
            {
                id: 3,
                name: 'Jack Doe',
                email: 'email3@email.com',
                phone: '1234567892'
            },
            {
                id: 4,
                name: 'Jill Doe',
                email: 'email4@email.com',
                phone: '1234567893'
            },
            {
                id: 5,
                name: 'Dill Doe',
                email: 'email5@email.com',
                phone: '1234567894'
            },
            {
                id: 6,
                name: 'Bill Doe',
                email: 'email6@email.com',
                phone: '1234567895'
            },
            {
                id: 7,
                name: 'Phil Doe',
                email: 'email7@email.com',
                phone: '1234567896'
            }              
        ],
        loadedContact: {
            id: '',
            name: '',
            email: '',
            phone: ''
        }
    }

    // Loads the contact at index 0 in contacts in state to the loadedContact
    // componentWillMount() {
    //     const loadedContact = { ...this.state.loadedContact },
    //         contact = this.state.contacts;
        
    //     this.stateSetter(loadedContact, contact[0]);
    // }

    // Sets state of loadedContact to contact at certain index passed in
    stateSetter = (lc, c) => { 
        lc.id = c.id;
        lc.name = c.name;
        lc.email = c.email;
        lc.phone = c.phone;

        this.setState({ loadedContact: lc });
    }

    // Changes loadedContact in state
    // handleChange = (event) => {
    //     const loadedContact = { ...this.state.loadedContact };
    //     switch(event.target.name) {
    //         case 'name':
    //             loadedContact.name = event.target.value;
    //             this.setState({ loadedContact });
    //             break;
    //         case 'email':
    //             loadedContact.email = event.target.value;
    //             this.setState({ loadedContact });
    //             break;
    //         case 'phone': 
    //             loadedContact.phone = event.target.value;
    //             this.setState({ loadedContact });
    //             break;
    //         default:
    //             console.log('[ERROR]')
    //     }
        
    // }

    // Updates contacts in state
    // handleUpdate = (event, id) => {
    //     let contacts = [ ...this.state.contacts ];
    //     const loadedContact = { ...this.state.loadedContact };
        
    //     contacts.map(contact => {
    //         if (contact.id === loadedContact.id) {
    //             contact.name = loadedContact.name;
    //             contact.email = loadedContact.email;
    //             contact.phone = loadedContact.phone;
    //         }
    //         return contact
    //     });

    //     this.setState({ contacts });
    // }

    // Deletes contact from contacts in state
    // handleDelete = (event, id) => {
    //     let contacts = [ ...this.state.contacts ];
    //     let loadedContact = { ...this.state.loadedContact };

    //     contacts = contacts.filter(contact => contact.id !== id);

    //     this.setState({ contacts });

    //     if (this.state.contacts.length > 1) {
    //         this.stateSetter(loadedContact, contacts[0]);
    //     } else {
    //         loadedContact.id = '';
    //         loadedContact.name = '';
    //         loadedContact.email = '';
    //         loadedContact.phone = '';
    //         this.setState({ loadedContact });
    //     }
    // }

    // Adds contact to contacts in state
    // handleAdd = (event) => {
    //     const loadedContact = { ...this.state.loadedContact },
    //         contacts = [ ...this.state.contacts ],
    //         id = (Math.random() * 5) * (Math.random() * 6) * (Math.random() * 7);
    //     loadedContact.id = id;

    //     this.handleChange(event);
    //     contacts.push(loadedContact)

    //     this.setState({ contacts })
    // }

    // Prevents the form from reloading
    handleSubmit = (event) => {
        event.persist();
        console.log(event.target.name.value)
        event.preventDefault();
    }

    // Changes contact that is displayed on the form
    // handleContact = (person) => {
        // const loadedContact = { ...this.state.loadedContact },
        //     contact = this.state.contacts.filter(contact => contact.id === person.id);

        // this.stateSetter(loadedContact, contact[0]);
    // }

    // Clears out the input in the form
    onFocus = (event) => {
        event.target.value = '';
    }

    render() {
        return (
            <div style={styles.controllerWrapper}>
                <div style={styles.controllerContacts}>
                    <Contacts 
                        contacts={ this.state.contacts }
                        changeContact={ this.props.onContactChange } />
                </div>
                <div style={styles.controllerForm}>
                    <Form 
                        person={ this.state.loadedContact }
                        
                        submit={ this.handleSubmit }
                        update={ this.props.onContactUpdate }
                        delete={ this.props.onContactDelete }
                        focus={ this.onFocus } />
                </div>
            </div>
        );
    }
} 

const mapStateToProps = state => {
    return {
        contacts: state.contacts,
        loadedContact: state.loadedContact
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // onLoadedContactChange: (event) => dispatch({ type: actionTypes.CHANGE_LOADED_CONTACT, e: event }),
        onContactUpdate: (id) => dispatch({ type: actionTypes.UPDATE_CONTACT, contactId: id }),
        onContactDelete: (id) => dispatch({ type: actionTypes.DELETE_CONTACT, contactId: id }),
        // onContactAdd: (event) => dispatch({ type: actionTypes.ADD_CONTACT, e: event }),
        onContactChange: (contact) => dispatch({ type: actionTypes.CHANGE_CONTACT, contactDisplayed: contact }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Controller);


// Form
// change={ this.props.onLoadedContactChange }
