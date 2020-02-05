import React from "react";
import {StyleSheet, TextInput, View, Button} from "react-native";
import _ from "lodash"

export default class extends React.Component {
// Todo Elastic Search firebase

    render() {
        return (
            <View style = {styles.viewContainer}>
                <View style = {styles.inputView}>

                    <TextInput
                    textInputProps = "clearButtonMode"
                    placeholder = "Search"
                    selectionColor= "#428AF8"
                    style = {styles.textInput}
                    onChangeText={_.debounce(() => {console.log("asd")}, 2000)}
                    />
                    <Button
                        style = {styles.button}
                        title = "Clear"
                    />
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    textInput: {
        flex: 1,
        margin: 5
    },
    viewContainer: {
        flex: 1,
        paddingTop: 30
    },
    inputView : {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderWidth: .5,
        borderColor: '#000',
        height: 40,
        borderRadius: 5,
        marginLeft: 5,
        marginRight: 5

    },
    button: {
    }
});