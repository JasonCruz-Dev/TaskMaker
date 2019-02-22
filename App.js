import React from 'react';
import firebase from 'firebase';
import Router from './src/component/Router';
import { Provider } from 'react-redux';
import { Font } from 'expo';
import store from './src/redux/store';
import config from './src/networking/firebase-config';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false
    }
  }
  componentWillMount() {
    firebase.initializeApp(config);
  }
  componentDidMount() {
    Font.loadAsync({
      'open-sans': require('./assets/OpenSans-Regular.ttf'),
      'montserrat': require('./assets/Montserrat-Regular.ttf'),
    }).then(() => this.setState({ fontLoaded: true }));
  }

  render() {
    return (
      this.state.fontLoaded ?
        <Provider store={store}>
          <Router />
        </Provider>
        : null
    );
  }
}
