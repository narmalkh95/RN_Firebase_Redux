import React from "react";
import {Text, StyleSheet, View, TextInput, Button, Alert} from "react-native";
import firebase from "firebase";
import {Actions} from "react-native-router-flux";

export default class Register extends React.Component {

    state = {
        email: "",
        password: "",
        err: ""
    };


    onPress = () => {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then( user => {
                Alert.alert('You are registered succesfully');
                Actions.WelcomeScreen()
            })
            .catch(err => {
                this.setState({err: err.message})
            });
    };


    render() {
        return (
            <View style = {styles.container}>
                <View style = {{flex: 2}}> 
                    <TextInput
                        password={true}
                        value={this.state.username}
                        onChangeText={val => { this.setState({ email: val }) }}
                        style={styles.textInput}
                        placeholder = "Email"
                        selectionColor= "#428AF8"
                    />
                </View>
                <View style = {{flex: 2}}>
                    <TextInput
                        secureTextEntry = {true}
                        value={this.state.password}
                        onChangeText={val => { this.setState({ password: val }) }}
                        style={styles.textInput}
                        placeholder = "Password"
                    />
                </View>
                <View>
                    <Text>{this.state.err}</Text>
                </View>
                <View style = {{flex: 2}} >
                    <Button 
                        onPress = {this.onPress}
                        title = "Register"
                        style = {{borderRadius: 10}}
                    />
                </View>
            </View>
        )
    }
}




const styles = StyleSheet.create({
    textInput: {
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1, 
        width: 300, 
        textAlign: "center",
        backgroundColor: "white",
        borderRadius: 10
    },
    container: {
        flex: 1, 
        paddingTop: 30, 
        alignItems: "center"
    }
});