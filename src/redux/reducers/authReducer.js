const initState = {
    authError: null,
    user: null
}

const authReducer = (state = initState, action) => {
    console.log('masuk reducer')
    switch(action.type){
        case 'SIGNIN_ERROR':
            return {
                ...state,
                authError: 'SIGNIN failed'
            }
        case 'SIGNIN_SUCCESS':
            console.log('SIGNIN success')
            const newData = {
                ...state,
                authError: null,
                user: action.payload
            }
            console.log(newData);
            return newData;
        case 'SIGNOUT_SUCCESS':
            console.log('signout success');
            return state;
        case 'SIGNUP_SUCCESS':
            console.log('signup success');
            return {
                ...state,
                authError: null,
                user: action.payload
            }
        case 'SIGNUP_ERROR':
            console.log('signup error');
            console.log(action.err.message)
            return {
                ...state,
                authError: action.err.message
            }
        default:
            return state
    }
    
}

export default authReducer;