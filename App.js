import React from 'react';
import firebase from 'firebase';
import Router from './src/component/Router';
import { Provider } from 'react-redux';
import configureStore from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import config from './src/networking/firebase-config';

const { persistor, store } = configureStore();

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false
    }
  }

  componentDidMount() {
    firebase.initializeApp(config);
  }

  render() {
    return (
      this.state.fontLoaded ?
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Router />
          </PersistGate>
        </Provider>
        : null
    );
  }
}
