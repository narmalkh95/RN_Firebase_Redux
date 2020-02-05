import {firebaseRegularLoginSuccess} from "../redux/actions/user";
import {connect} from "react-redux";
import LoginView from "../views/auth/LoginView";
import firebase from 'firebase';
import {Alert} from 'react-native';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = dispatch => ({
        firebaseRegularLogin: (email, password) => {
             firebase
                .auth()
                .signInWithEmailAndPassword(email, password)
                .then(user => {
                    dispatch(firebaseRegularLoginSuccess(user));
                    Alert.alert('You are loged in succesfully');
                })
                .catch(err => {
                    Alert.alert(err.message);
                });
        }
    });

export default connect(mapStateToProps, mapDispatchToProps)(LoginView)
