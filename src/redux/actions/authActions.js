import firebase from "../../services/firebase";
import "firebase/auth";

// login
export const signIn = (credentials) => {
    return (dispatch, getState) => {
        // API login here, contoh firebase (jangan lupa import firebase config as firebase) :
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then((res) => {
            console.log(res)
            dispatch({
                type: 'SIGNIN_SUCCESS',
                payload: res.user
            })
        }).catch((err) => {
            dispatch({
                type: 'SIGNIN_ERROR',
                err
            })
        })
    }
}

// LOGOUT
export const signOut = () => {
    return (dispatch, getstate) => {
        firebase.auth().signOut().then(() => {
                dispatch({
                    type: 'SIGNOUT_SUCCESS'
            })
        });
    }
};

// REGISTER
export const signUp = (newUser) => {
    return (dispatch, getstate) => {
        let usr;
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then(async (res) => {
            let userId = res.user.uid;
            usr = res.user;
            console.log('masuk sini nih')
            console.log(userId);
            return await firebase.database().ref("users/" + userId).set({
                initial: newUser.firstName[0] + newUser.lastName[0],
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                email: newUser.email
              });
          }).then(() => {
            dispatch({
                type: 'SIGNUP_SUCCESS',
                payload: usr
            })
        }).catch(err => {
            dispatch({
                type: 'SIGNUP_ERROR',
                err
            })
        })
    }
}