import React from 'react';
import {AccessToken, LoginButton} from 'react-native-fbsdk';

export default class FacebookLoginButton extends React.Component {
  loginToFirebase = token => {
    this.props.facebookLogin(token);
  };
  render() {
    return (
        <LoginButton
            onLoginFinished={
                (error, result) => {
                    console.log(result)
                    console.log("resulttttt")
                    if (error) {
                        console.log("login has error: " + result.error);
                    } else if (result.isCancelled) {
                        console.log("login is cancelled.");
                    } else {
                        console.log("we are now here")
                        AccessToken.getCurrentAccessToken().then(
                            (data) => {
                                alert(data.accessToken.toString())
                                this.loginToFirebase(data.accessToken)
                            }
                        )
                    }
                }
            }
            onLogoutFinished={() => console.log("logouttttt.")}/>
    );
  }
}
