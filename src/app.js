import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase'
import reducers from './reducers';

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
    return(
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            App
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;
