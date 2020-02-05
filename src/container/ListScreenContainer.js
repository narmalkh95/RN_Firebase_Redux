import {bindActionCreators} from "redux";
import {setLoading} from "../redux/actions/appStatus";
import {addListItem, addListItems, deleteListItem} from "../redux/actions/items";
import {connect} from "react-redux";
import ListScreen from "../views/user/ListScreen";
import {ListScreenSwitcher} from "../redux/actions/switchers";

const mapStateToProps = (state) => ({
    user: state.user,
    localListItems: state.items.listItems,
    switcherIsOn: state.switchers.listScreenSwitcherIsOn
});

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        setLoading,
        addListItem,
        addListItems,
        deleteListItem,
        ListScreenSwitcher
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ListScreen)
