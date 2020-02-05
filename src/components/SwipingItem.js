import React from "react";
import {Text, StyleSheet, Alert} from "react-native";
import Swipeout from 'react-native-swipeout';

class SwipingItem extends React.Component {
    render() {
        const {text, key} = this.props.item;
        const swipeSettings = {
            autoclose: true,
            left: [
                {
                    onPress: () => {
                        Alert.alert(
                            "",
                            "Are you sure you want to delete ?",
                            [
                                {
                                    text: 'Cancel',
                                    style: 'cancel',
                                },
                                {text: 'OK', onPress: () => this.props.deleteListItem(key)},
                            ],
                            {cancelable: false},
                        );
                    },
                    text: "Delete", type: "delete"
                }
            ]
        };

        return (
            <Swipeout {...swipeSettings} style={styles.flatview}>
                <Text style={styles.text}>{text}</Text>
            </Swipeout>

        )
    }
}

export default SwipingItem


const styles = StyleSheet.create({
    flatview: {
        justifyContent: 'center',
        borderBottomWidth: 1,
        backgroundColor: "#FCFCFC"
    },
    text: {
        fontSize: 18,
        margin: 20
    }
});