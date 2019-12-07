import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};
HomeScreen.navigationOptions = () => {
  return {
    header: null,
  };
};

export default HomeScreen;
