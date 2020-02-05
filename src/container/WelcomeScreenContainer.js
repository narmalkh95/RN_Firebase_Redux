import {bindActionCreators} from "redux";
import {setLoading} from "../redux/actions/appStatus";
import {connect} from "react-redux";
import WelcomeScreen from "../views/user/WelcomeScreen";

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        setLoading
    }, dispatch);

export default connect(null, mapDispatchToProps)(WelcomeScreen);