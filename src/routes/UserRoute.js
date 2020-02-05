import React from "react";
import { Router, Scene } from "react-native-router-flux";
import ProtectedScreen from "../components/ProtectedScreen";
import WelcomeScreenContainer from "../container/WelcomeScreenContainer";
import ListScreenContainer from "../container/ListScreenContainer";
import ListScreenSearchScreen from "../views/user/ListScreenSearchScreen";
import {logout} from "../redux/actions/user";


const UserRoute = (props) => {
  return (
    <Router>
      <Scene
      key="root"
      onRight={() => {
        props.dispatch(logout())
      }}
      rightTitle = {"Log out"}
      >
        <Scene
          key="WelcomeScreen"
          component={WelcomeScreenContainer}
          title="WelcomeScreen"
          initial
        />
        <Scene
          key="ListScreen"
          component={ListScreenContainer}
          title="ListScreen"
          hideNavBar={true}
        />
        <Scene
            key="ListScreenSearchScreen"
            component={ListScreenSearchScreen}
            title="ListScreenSearchScreen"
            hideNavBar={true}
        />
        </Scene>
    </Router>
  )
};


export default ProtectedScreen(UserRoute);
