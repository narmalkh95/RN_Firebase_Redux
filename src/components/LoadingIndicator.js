import React from "react";
import {Text, StyleSheet, View, ActivityIndicator} from "react-native";
import {connect} from "react-redux";

class LoadingIndicator extends React.Component {
    render() {
        return (
            this.props.isLoading &&
            <View style={styles.lightbox}>
                <ActivityIndicator size="large" color="white"/>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.appStatus.isLoading
    }
};

export default connect(mapStateToProps)(LoadingIndicator)


const styles = StyleSheet.create({
    lightbox: {
        backgroundColor: '#0000003A',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center'
    }
});