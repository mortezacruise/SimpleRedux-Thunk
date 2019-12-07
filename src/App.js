import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import ReduxThunk from 'redux-thunk';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import HomeScreen from './components/HomeScreen';
import SplashScreen from './components/SplashScreen';

const SwitchNavigator = createSwitchNavigator({
  Splash: SplashScreen,
  LoginFlow: createStackNavigator({
    SignIn: LoginForm,
  }),
  Drawer: createDrawerNavigator(
    {
      MainFlow: createStackNavigator({
        Home: HomeScreen,
      }),
    },
    {
      drawerPosition: 'right',
    },
  ),
});

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

const App = createAppContainer(SwitchNavigator);
export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
