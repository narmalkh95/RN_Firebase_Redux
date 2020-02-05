const initialState = {
    isLoading: true
};


const appStatus = (state = initialState, action) => {
    switch (action.type) {
        case "setLoading":
            return {...state, isLoading: action.payload};
        default:
            return state;
    }
};



export default appStatus;