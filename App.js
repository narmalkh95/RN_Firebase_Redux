import React from "react";
import Index from "./src/index";
import {Provider} from "react-redux";
import store from "./src/redux/store";
import reducers from './src/redux/reducers';

class App extends React.Component {
  render() {
    return (
        <Provider store = {store(reducers)} >
            <Index/>
        </Provider>
    )
  }
}

export default App
