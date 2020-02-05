import React from "react";
import {View, Text, FlatList, Switch} from "react-native";
import SwipingItem from "../../components/SwipingItem";
import DialogInput from 'react-native-dialog-input';
import firebase from "firebase";
import {AsyncStorage} from 'react-native';
import ActionButton from "../../components/ActionButtonForListScreen";

export default class ListScreen extends React.Component {
    state = {
        isPopupVisible: false,
        firebaseListItems: []
    };

    componentDidMount() {
        this.retrieveListData();
    };

    retrieveListData = () => {
        if (this.props.switcherIsOn) {
            this.props.setLoading(true);
            firebase.database().ref('/users/' + this.props.user.uid + "/listItems/").on("value", data => {
                const firebaseResult = data.val();
                if (firebaseResult !== null) {
                    const listItems = Object.keys(firebaseResult).map(key => {
                        return {
                            key: key,
                            text: firebaseResult[key]
                        }
                    });
                    this.setState({
                        firebaseListItems: listItems.reverse()
                    });
                }
                    this.props.setLoading(false);
            });
        } else {
            this.getLocalListItems().then((data) => {
                this.props.addListItems(data.reverse())
            })
        }
    };

    saveNewListItem = (item) => {
        if (this.props.switcherIsOn) {
            firebase.database().ref(`/users/${this.props.user.uid}/listItems`).push(
                item,
                err => console.log(err ? 'error while pushing' : 'successfully pushed')
            )
        } else {
            const data = {
                text: item,
                key: '-' + Math.random().toString(36).slice(2)
            };

            this.props.addListItem(data);

            this.saveLocalListItem(data)
        }

        this.setState({isPopupVisible: false});
        this.refs.flatlist.scrollToOffset({x: 0})
    };

    deleteListItem = (item) => {
        if (this.props.switcherIsOn) {
            firebase.database().ref('/users/' + this.props.user.uid + '/listItems/').child(item).remove()
        } else {
            this.props.deleteListItem(item)
        }
    };

    toggleSwitch = () => {
        this.props.ListScreenSwitcher()
        setTimeout(() => {
            this.retrieveListData()
        },100)
        // Todo
    };

    saveLocalListItem = async (data) => {
        this.getLocalListItems().then(res => {

            res.push(data);

            AsyncStorage.setItem(this.props.user.uid, JSON.stringify(res))
                .then(() => {
                    console.log("saved")
                })
                .catch(err => {
                    console.log(err)
                })
        })
    };

    getLocalListItems = async () => {
        try {
            const value = await AsyncStorage.getItem(this.props.user.uid);
            return value !== null ? JSON.parse(value) : [];
        } catch (error) {
            console.log(error)
        }
    };


    render() {
        return (
            <View style={{flex: 1, paddingTop: 30}}>
                <View style={{flexDirection: "row", borderBottomWidth: 1}}>
                    <View style={{flex: 1}}>
                        <Text style={{margin: 10}}>{this.props.switcherIsOn ? "Firebase Database" : "Local Data"}</Text>
                    </View>
                    <View style={{flex: 1}}>
                        <Switch
                            style={{margin: 10}}
                            onValueChange={this.toggleSwitch}
                            value={this.props.switcherIsOn}/>
                    </View>
                </View>
                <FlatList
                    data={this.props.switcherIsOn ? this.state.firebaseListItems : this.props.localListItems}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item}) =>
                        <SwipingItem item={item} deleteListItem={this.deleteListItem}/>
                    }
                    keyExtractor={item => item.key}
                    ref="flatlist"
                />
                <ActionButton onPress = {() => {this.setState({isPopupVisible: true})}} switcherIsOn = {this.props.switcherIsOn}/>
                <DialogInput
                    isDialogVisible={this.state.isPopupVisible}
                    title="Enter text here:"
                    submitInput={this.saveNewListItem}
                    closeDialog={() => {
                        this.setState({isPopupVisible: false})
                    }}
                >
                </DialogInput>
            </View>
        )
    }
}
