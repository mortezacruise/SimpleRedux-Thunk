import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  Flex,
  centerAll,
  bgGreen300,
  activeButton,
  deactivButton,
} from '../components/common/Theme';
import Firebase from 'firebase';
const SplashScreen = ({navigation}) => {
  useEffect(() => {
    let firebaseConfig = {
      apiKey: 'AIzaSyAWwCWMcVVvI7AFJ-Qs9poK-CXdVFncoHk',
      authDomain: 'my-project-costumer.firebaseapp.com',
      databaseURL: 'https://my-project-costumer.firebaseio.com',
      projectId: 'my-project-costumer',
      storageBucket: 'my-project-costumer.appspot.com',
      messagingSenderId: '502894954661',
      appId: '1:502894954661:web:3ad34f9ced20b1b6b3e54c',
      measurementId: 'G-92RVDCVKYW',
    };
    Firebase.initializeApp(firebaseConfig);
    // firebase.analytics();
  });
  return (
    <View style={[Flex, centerAll]}>
      <Text>SplashScreen</Text>
      <TouchableOpacity
        style={[activeButton]}
        onPress={() => navigation.navigate('MainFlow')}>
        <Text> goto Main </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[deactivButton]}
        onPress={() => navigation.navigate('LoginFlow')}>
        <Text> goto Login </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SplashScreen;
