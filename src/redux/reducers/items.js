const initialState = {
    listItems: []
};


const items = (state = initialState, action) => {
    switch (action.type) {
        case "addListItem":
            return {...state, listItems : [action.listItem, ...state.listItems] };
        case "addListItems":
            return {...state, listItems : [...action.listitems]};
        case "deleteListItem":
            return {...state, listItems: [...state.listItems.filter(item => action.key !== item.key)]};
        default:
            return state;
    }
};



export default items;
