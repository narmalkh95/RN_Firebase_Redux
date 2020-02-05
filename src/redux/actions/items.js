export const addListItem = (listItem) => ({
    type: "addListItem",
    listItem
});

export const deleteListItem = (key) => ({
    type: "deleteListItem",
    key
});

export const addListItems = (listitems) => ({
    type: "addListItems",
    listitems
});
