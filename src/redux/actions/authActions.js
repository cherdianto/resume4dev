export const signIn = (credentials) => {
    return {
        type: 'LOGIN_SUCCESS',
    }
}

export const signUp = (newUser) => {
    return {
        type: 'SIGNUP_SUCCESS'
    }
}