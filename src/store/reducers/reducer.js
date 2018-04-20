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
        name: 'j',
        email: 'j',
        phone: 'j'
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.CHANGE_LOADED_CONTACT:
            // action.e.preventDefault()
            console.log('[E.TARGET.VALUE]', action.payload.value)
            console.log('[E.TARGET.NAME]', action.payload.name)
            return {
                ...state,
                loadedContact: {
                    ...state.loadedContact,
                    [action.payload.name]: action.payload.value
                }
                // loadedContact : {
                //     id : {
                //         id: new Date()
                //     },
                //     name: {
                //         name: action.e.target.value
                //     }
                // }
            }

        case actionTypes.ADD_CONTACT:
            console.log(action.payload.name)
            console.log(action.payload.email)
            console.log(action.payload.phone)
            const id = new Date();
            console.log(id)
            return {
                ...state,
                loadedContact : {
                    ...state.loadedContact,
                    id : {
                        id: id
                    },
                    name : {
                        name: action.payload.name
                    },
                    email : {
                        email: action.payload.email
                    },
                    phone : {
                        phone: action.payload.phone
                    }
                },
                contacts: state.contacts.concat(state.loadedContact)
            }

        case actionTypes.CHANGE_CONTACT:
            const contact = state.contacts.filter(contact => contact.id === action.contactDisplayed.id);
            return {
                ...state,
                loadedContact: contact[0]
            }
        
        default: 
            return state;
    }
}

export default reducer;