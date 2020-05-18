import 'react-native-gesture-handler';

import React from 'react';
import { View, StatusBar } from 'react-native';

import './config/ReactotronConfig';

import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';

import { store, persistor } from './store';
import App from './App';

const Index: React.FC = () => {
  return (
      <NavigationContainer>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <StatusBar barStyle="light-content" backgroundColor="#312e38" />
            <View style={{ flex: 1, backgroundColor: '#312e38' }}>
            <App />
         </View>
         </PersistGate>
        </Provider>
      </NavigationContainer>
  );
};
export default Index;
