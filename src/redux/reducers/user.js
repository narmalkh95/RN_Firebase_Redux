import {FIREBASE_FACEBOOK_LOGIN, FIREBASE_GOOGLE_LOGIN, FIREBASE_REGULAR_LOGIN_SUCCESS, LOGOUT} from '../actions/user';

const initialState = {
    user: null
};


const user = (state = initialState, action) => {
    switch (action.type) {
        case FIREBASE_REGULAR_LOGIN_SUCCESS:
            return {...state, user: action.payload.user};
        case FIREBASE_FACEBOOK_LOGIN:
            // console.log(JSON.stringify(action.payload));
            return {...state, user: action.payload.user};
        case FIREBASE_GOOGLE_LOGIN:
            return {...state, user: action.payload.user};
        case LOGOUT:
            return {...state, user: null};
        default:
            return state;
    }
};

export default user;
