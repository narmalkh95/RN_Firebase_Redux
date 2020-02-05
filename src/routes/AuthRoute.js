import React from "react";
import { Router, Scene } from "react-native-router-flux";
import AuthView from "../views/auth/AuthView";
import Login from "../container/LoginViewContainer";
import Register from "../views/auth/RegisterView";

export default () => {
    return (
        <Router>
                <Scene key="root">
                    <Scene
                        key="AuthView"
                        component={AuthView}
                        title="AuthView"
                        initial
                    />
                    <Scene
                        key="Register"
                        component={Register}
                        title="Register"
                    />
                    <Scene
                        key="Login"
                        component={Login}
                        title="Login"
                    />
                </Scene>
        </Router>
    )
}



