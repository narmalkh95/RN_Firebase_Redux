const initialState = {
    listScreenSwitcherIsOn: true
};


const switchers = (state = initialState, action) => {
    switch (action.type) {
        case "ListScreenSwitcher":
            return {...state, listScreenSwitcherIsOn : !state.listScreenSwitcherIsOn};
        default:
            return state;
    }
};

export default switchers;
