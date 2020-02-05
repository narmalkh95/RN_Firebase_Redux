import React from 'react';
import firebase from 'firebase';
import firebaseConfig from '../firebaseConfig';
import UserRoute from './routes/UserRoute';
import LoadingIndicator from './components/LoadingIndicator';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setLoading} from "./redux/actions/appStatus";
import {firebaseRegularLoginSuccess} from "./redux/actions/user";
require("firebase/functions");

class Index extends React.Component {
  componentDidMount() {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.firebaseRegularLoginSuccess(user);
      }
      this.props.setLoading(false);
    });
  }
  render() {
      console.log(this.props);
    return (
      <View style={{flex: 1}}>
        <UserRoute />
        <LoadingIndicator />
      </View>
    );
  }
}



const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setLoading,
      firebaseRegularLoginSuccess,
    },
    dispatch,
  );

export default connect(
  null,
  mapDispatchToProps,
)(Index);

