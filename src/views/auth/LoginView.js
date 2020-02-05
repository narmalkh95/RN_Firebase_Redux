import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Button,
} from 'react-native';
import FacebookLoginButtonContainer from '../../container/FacebookLoginButtonContainer';
import GoogleLoginButton from '../../components/GoogleLoginButton';


export default class Login extends React.Component {
  state = {
    email: 'narmalkh95@mail.ruu',
    password: 'nmmnnmmn',
  };

  onLoginPress = () => {
    const {email, password} = this.state;
    this.props.firebaseRegularLogin(email, password);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 2}}>
          <TextInput
            value={this.state.email}
            onChangeText={val => {
              this.setState({email: val});
            }}
            style={styles.textInput}
            placeholder="Email"
            selectionColor="#428AF8"
          />
        </View>
        <View style={{flex: 2}}>
          <TextInput
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={val => {
              this.setState({password: val});
            }}
            style={styles.textInput}
            placeholder="Password"
          />
        </View>
        <View style={{flex: 2}}>
          <Button
            onPress={this.onLoginPress}
            title="Login"
            style={styles.button}
          />
        </View>
        <View style={{flex: 2}}>
          <FacebookLoginButtonContainer />
        </View>
        <View style={{flex: 2}}>
          <GoogleLoginButton />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 300,
    textAlign: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  container: {
    flex: 1,
    paddingTop: 30,
    alignItems: 'center',
  },
  button: {
    borderRadius: 10,
  },
});
