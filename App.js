import React from 'react';
import firebase from 'firebase';
import Router from './src/component/Router';
import { Provider } from 'react-redux';
import { Font } from 'expo';
import store from './src/redux/store';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAeGRczbZOYARmRV0PAFpgl9rMh2UDIqUg',
      authDomain: 'taskmaker-70192.firebaseapp.com',
      databaseURL: 'https://taskmaker-70192.firebaseio.com',
      projectId: 'taskmaker-70192',
      storageBucket: 'taskmaker-70192.appspot.com',
      messagingSenderId: '200199286623'
    });
  }
  componentDidMount() {
    Font.loadAsync({
      'open-sans': require('./assets/OpenSans-Regular.ttf'),
      'montserrat': require('./assets/Montserrat-Regular.ttf'),
    });
  }

  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
