import React from 'react';
import { LogBox } from 'react-native';
import AuthNavigation from './AuthNavigation';


import { Provider } from 'react-redux';
import { store } from './redux/store';




LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();


export default function App() {

      return (
            <Provider store={store}>
                  <AuthNavigation />
            </Provider>
      )
}


