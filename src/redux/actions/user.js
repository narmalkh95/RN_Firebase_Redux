import firebase from 'firebase';

export const FIREBASE_REGULAR_LOGIN_SUCCESS = 'FIREBASE_REGULAR_LOGIN_SUCCESS';
export const FIREBASE_FACEBOOK_LOGIN = 'FIREBASE_FACEBOOK_LOGIN';
export const FIREBASE_GOOGLE_LOGIN = 'FIREBASE_GOOGLE_LOGIN';
export const LOGOUT = 'LOGOUT';

export function firebaseRegularLoginSuccess(user) {
    return {
        type: FIREBASE_REGULAR_LOGIN_SUCCESS,
        payload: user
    };
}

export function firebaseFacebookLogin(token) {
    const credential = firebase.auth.FacebookAuthProvider.credential(token);
    return {
        type: FIREBASE_FACEBOOK_LOGIN,
        payload: firebase
            .auth()
            .signInWithCredential(credential)
    }
}


export function firebaseGoogleLogin(token) {
    const credential = firebase.auth.GoogleAuthProvider.credential(token);
    return {
        type: FIREBASE_GOOGLE_LOGIN,
        payload: firebase
            .auth()
            .signInWithCredential(credential)
    }
}

export function logout() {
    return {
        type: LOGOUT,
        payload: firebase.auth().signOut()
    }
}
