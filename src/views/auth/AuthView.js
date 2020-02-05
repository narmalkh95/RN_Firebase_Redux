import React from "react";
import {Button, View, StyleSheet} from "react-native";
import {Actions} from "react-native-router-flux";




export default class AuthView extends React.Component {
    render() {
        return (
            <View style = {styles.container}>
                <View style = {styles.buttonContainer}>
                    <Button
                        style = {styles.button}
                        title = "Login"
                        onPress = {() => {Actions.Login()}}
                    />
                </View>
                <View style = {styles.buttonContainer}>
                    <Button
                        title = "Sign Up"
                        onPress = {() => {Actions.Register()}}
                    />
                </View>
            </View>
        )
    }
}



const styles = StyleSheet.create ({
    buttonContainer: {
        flex: 4
    },
    container: {
        flex: 1,
        paddingTop: 20,
        justifyContent: "center",
        alignItems: "center"
    }
});
