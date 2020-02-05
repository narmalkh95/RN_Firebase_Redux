import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';
import React from 'react';
import googleSignInConfig from "../../googleSignInConfig";
GoogleSignin.configure(googleSignInConfig);

export default class GoogleLoginButton extends React.Component {
    state = {};

    async signIn(){
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            const accessToken = userInfo.accessToken;
            if (accessToken) {
                this.props.googleLogin(accessToken)
            }
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                Alert.alert("Sign in canceled")
            } else  {
                console.log(error)
            }
        }
    };

    render() {
        return(
            <GoogleSigninButton
                style={{ width: 192, height: 48 }}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={this.signIn}
                disabled={this.state.isSigninInProgress} />
        )
    }
}
