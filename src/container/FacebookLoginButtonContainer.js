import {firebaseFacebookLogin} from '../redux/actions/user';
import {connect} from "react-redux";
import FacebookLoginButton from "../components/FacebookLoginButton";

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = dispatch => ({
    facebookLogin: token => {
        dispatch(firebaseFacebookLogin(token))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(FacebookLoginButton)
