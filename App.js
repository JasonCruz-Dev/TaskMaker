import React from 'react';
import Router from './src/component/Router';
import { Provider } from 'react-redux';
import store from './src/store';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}