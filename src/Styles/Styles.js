const styles = {
    app: {
        height: '100vh'
    },
    header: {
        fontSize: 65,
        padding: 14,
        textAlign: 'center',
        backgroundColor: '#bcd8ee'
    },
    headerP: {
        margin: 0
    },
    formWrapper: {
        width: 700,
        height: 380,
        marginBottom: 100,
        padding: '20px 20px',
        position: 'relative',
        backgroundColor: '#a49bda'
    },
    formP: {
        fontSize: 32
    },
    formInputsDiv: {
        marginBottom: 60
    },
    formInputDiv: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '45%',
        marginBottom: 14
    },
    input: {
        width: '55%',
        fontSize: '20px',
        backgroundColor: '#e7e6e6'
    },
    buttonDiv: {
        width: '33%',
        display: 'flex',
        justifyContent: 'space-between'
    },
    formUpdate: {
        width: 100,
        fontSize: 25,
        padding: 8,
        border: '2px solid #fff',
        backgroundColor: '#70ad47',
        cursor: 'pointer'
    },
    formDelete: {
        width: 100,
        fontSize: 25,
        padding: 8,
        border: '2px solid #fff',
        background: '#c00000',
        cursor: 'pointer'
    },
    formAdd: {
        position: 'absolute',
        bottom: -90,
        left: 'calc(50% - 115px)',
        width: 230,
        fontSize: 25,
        padding: 8,
        border: '2px solid #fff',
        backgroundColor: '#ffd965',
        cursor: 'pointer'
    },
    contactWrapper: {
        height: 50,
        width: '80%',
        margin: '0 auto 20px auto',
        cursor: 'pointer',
        overflow: 'hidden',
        padding: 10,
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        backgroundColor: '#f8cbad'
    },
    contactP: {
        margin: '0 3px 10px',
        fontSize: 22
    },
    contactsWrapper: {
        height: '75%',
        width: '90%',
        overflow: 'scroll',
        padding: '15px 0',
        backgroundColor: '#ffe699'     
    },
    controllerWrapper: {
        display: 'flex',
        height: '100%',
        width: '100%',
        backgroundColor: '#c5e1b4' 
    },
    controllerContacts: {
        flex: 1,
        height: '100vh',
        width: '100%',
        margin: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    controllerForm: {
        flex: 2,
        height: '100vh',
        width: '100%',
        margin: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center' 
    }
}

export default styles;


// input[type=text] {
//     padding:5px; 
//     border:2px solid #ccc; 
//     -webkit-border-radius: 5px;
//     border-radius: 5px;
// }

// input[type=text]:focus {
//     border-color:#333;
// }

// input[type=submit] {
//     padding:5px 15px; 
//     background:#ccc; 
//     border:0 none;
//     cursor:pointer;
//     -webkit-border-radius: 5px;
//     border-radius: 5px; 
// }