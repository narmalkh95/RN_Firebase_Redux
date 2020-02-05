import React from "react";
import ActionButton from "react-native-action-button";
import Icon from 'react-native-vector-icons/Ionicons';
import {StyleSheet} from "react-native";
import {Actions} from "react-native-router-flux";


export default (props) => {
    return (
        props.switcherIsOn ?
            <ActionButton
                buttonColor='#3498db'
            >
                <ActionButton.Item
                    buttonColor='#9b59b6'
                    title="Search"
                    onPress={ () => Actions.ListScreenSearchScreen()}
                >
                    <Icon name="md-search" style={styles.actionButtonIcon} />
                </ActionButton.Item>
                <ActionButton.Item
                    buttonColor="rgba(231,76,60,1)"
                    title="Add Item"
                    onPress={props.onPress}
                >
                    <Icon name="md-add" style={styles.actionButtonIcon} />
                </ActionButton.Item>
            </ActionButton>
        :
            <ActionButton
                onPress={props.onPress}
                buttonColor="rgba(231,76,60,1)"
            />
    )
}


const styles = StyleSheet.create({
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
});