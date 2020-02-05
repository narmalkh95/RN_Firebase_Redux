import {firebaseGoogleLogin} from '../redux/actions/user';
import {connect} from "react-redux";
import GoogleLoginButton from "../components/GoogleLoginButton";

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = dispatch => ({
    googleLogin: token => {
        dispatch(firebaseGoogleLogin(token))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(GoogleLoginButton)
