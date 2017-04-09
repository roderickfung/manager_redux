import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDqzygIkDNbplK78eIJWsx2-B7jtLamdqk',
      authDomain: 'manager-ab85b.firebaseapp.com',
      databaseURL: 'https://manager-ab85b.firebaseio.com',
      storageBucket: 'manager-ab85b.appspot.com',
      messagingSenderId: '75845354912'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return(
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
