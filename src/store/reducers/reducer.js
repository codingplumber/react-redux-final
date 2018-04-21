import * as actionTypes from '../actions/actions';

const initialState = {
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

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.PAGE_LOAD:
            return {
                ...state,
                loadedContact: {
                    ...state.loadedContact,
                    id: state.contacts[0].id,
                    name: state.contacts[0].name,
                    email: state.contacts[0].email,
                    phone: state.contacts[0].phone
                }
            }

        case actionTypes.CHANGE_LOADED_CONTACT:
            console.log(action.name)
            console.log(action.value)
            return {
                ...state,
                loadedContact: {
                    ...state.loadedContact,
                    [action.payload.name]: action.payload.value
                }
            }

        case actionTypes.ADD_CONTACT:
            // const updatedLoadedContact = Object.assign({}, loadedContact, {id: new Date()});
            const updatedLoadedContact = {
                // ...state, 
                // loadedContact: {
                    ...state.loadedContact, 
                    id: new Date()
                // }
            };
            return {
                ...state,      
                contacts: state.contacts.concat(updatedLoadedContact)
            }

        case actionTypes.DELETE_CONTACT:
            const updatedContacts = state.contacts.filter(contact => contact.id !== action.id);
            return {
                ...state,
                contacts: updatedContacts,
                loadedContact: {
                    ...state.loadedContact,
                    id: updatedContacts.length > 0 ? updatedContacts[0].id : '',
                    name: updatedContacts.length > 0 ? updatedContacts[0].name : '',
                    email: updatedContacts.length > 0 ? updatedContacts[0].email : '',
                    phone: updatedContacts.length > 0 ? updatedContacts[0].phone : ''
                }
            }

        case actionTypes.CHANGE_CONTACT:
            const contact = state.contacts.filter(contact => contact.id === action.contactDisplayed.id);
            return {
                ...state,
                loadedContact: contact[0]
            }

        case actionTypes.UPDATE_CONTACT:
            const updatedContact = state.contacts.map(contact => {
                if (contact.id === state.loadedContact.id) {
                    contact = state.loadedContact;
                    console.log(contact, state.loadedContact)
                }
                return contact;
            })
            return {
                ...state,
                contacts: updatedContact
            }
        
        default: 
            return state;
    }
}

export default reducer;