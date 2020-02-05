import React from "react";
import {View, Button, StyleSheet, Alert} from "react-native";
import {Actions} from "react-native-router-flux";
import firebase from "firebase";

export default class WelcomeScreen extends React.Component {

    componentDidMount() {
        this.props.setLoading(false);

    }

    showServerTime = () => {
        let getDatabaseTime = firebase.functions().httpsCallable('getDatabaseTime');
        getDatabaseTime().then(res => {
            Alert.alert(res.data)
        })
    };

    render() {
        return (
            <View style={styles.container}>
                <View  style = {{flex: 2}} >
                    <Button
                        title="List screen"
                        onPress={() => {
                            Actions.ListScreen()
                        }}
                    />
                </View>
                <View style = {{flex: 2}} >
                    <Button
                        title="Show server time"
                        onPress={this.showServerTime}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        alignItems: "center"
    }
});
