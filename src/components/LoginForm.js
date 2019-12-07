import React from 'react';
import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {emailChanged, passwordChanged, loginUser} from '../actions';
import evvelope from '../Assets/Png/envelope.png';
import {MAIN_COLOR} from '../components/common/Colors';
import {screenHeight, screenWidth} from '../components/common/Constants';
import {LOGIN_TITLE} from '../components/common/Strings';
import {
  bgMainColor,
  bgWhite,
  centerAll,
  Flex,
  fWhite,
  h3,
  h4,
  h5,
  iranSans,
  mH32,
  mV8,
  pad16,
  Tac,
} from '../components/common/Theme';

const mobilenumberlable = 'شماره همراه';
const entertoapptext = 'ورود به برنامه ';
const LoginForm = ({navigation}) => {
  const email = useSelector(state => state.Auth.email);
  const password = useSelector(state => state.Auth.password);
  const error = useSelector(state => state.Auth.error);
  const loading = useSelector(state => state.Auth.loading);
  const dispatch = useDispatch();

  console.log('email ' + email);
  console.log('pass ' + password);

  const onEmailChange = text => {
    // let newText = '';
    // let numbers = '0123456789';
    // for (let i = 0; i < text.length; i++) {
    //   if (numbers.indexOf(text[i]) > -1) {
    //     if (text.charAt(0) != '0')
    //       return ToastAndroid.show(
    //         'شماره همراه اشتباه است',
    //         ToastAndroid.SHORT,
    //       );
    //     if (text.length > 1 && text.charAt(1) != '9')
    //       return ToastAndroid.show(
    //         'شماره همراه اشتباه است',
    //         ToastAndroid.SHORT,
    //       );

    //     newText = newText + text[i];
    //   } else
    //     return ToastAndroid.show('شماره همراه اشتباه است', ToastAndroid.SHORT);
    // }
    dispatch(emailChanged(text));
  };
  const onPasswordChange = text => {
    dispatch(passwordChanged(text));
  };

  const onButtonPress = () => {
    console.log('press' + email);
    dispatch(loginUser(email, password));
  };
  const renderError = () => {
    if (error) {
      return (
        <View style={{backgroundColor: 'white'}}>
          <Text style={[h5, {color: 'red', alignSelf: 'center'}]}>{error}</Text>
        </View>
      );
    }
  };
  return (
    <View style={[Flex, bgMainColor]}>
      <KeyboardAvoidingView style={[Flex]} behavior="position" enabled>
        <View
          style={[
            {width: '100%', height: screenHeight / 2},
            bgMainColor,
            centerAll,
          ]}>
          <Image
            source={evvelope}
            style={[{width: screenWidth / 2.7, height: screenWidth / 3}]}
          />
          <Text style={[iranSans, h3, fWhite, Tac, mH32]}>{LOGIN_TITLE}</Text>
        </View>
        <View
          style={[
            bgWhite,
            {
              height: screenHeight / 2,
              borderTopLeftRadius: 40,
              borderTopRightRadius: 40,
            },
            ,
            centerAll,
          ]}>
          <TextInput
            placeholder={'09 - -  - - -  - - - -'}
            value={email}
            onChangeText={onEmailChange}
            textAlignVertical={'center'}
            // onBlur={() => setRightLable(false)}
            // onFocus={() => setRightLable(true)}
            style={[
              pad16,
              iranSans,
              {
                height: screenHeight / 12,
                width: screenWidth / 1.5,
                borderBottomWidth: 0,
                borderRadius: 20,
                direction: 'rtl',
                textAlign: 'center',

                backgroundColor: 'rgba(64,199,133,0.2)',
              },
            ]}
          />
          <TextInput
            // placeholder={'09 - -  - - -  - - - -'}
            value={password}
            onChangeText={onPasswordChange}
            textAlignVertical={'center'}
            // onBlur={() => setRightLable(false)}
            // onFocus={() => setRightLable(true)}
            style={[
              mV8,
              pad16,
              iranSans,
              {
                height: screenHeight / 12,
                width: screenWidth / 1.5,
                borderBottomWidth: 0,
                borderRadius: 20,
                direction: 'rtl',
                textAlign: 'center',

                backgroundColor: 'rgba(64,199,133,0.2)',
              },
            ]}
          />
          <TouchableOpacity
            onPress={() => onButtonPress()}
            style={[
              ,
              centerAll,
              {
                borderRadius: 20,
                marginTop: 50,
                width: 200,
                height: 50,
                backgroundColor: MAIN_COLOR,
              },
            ]}>
            {loading ? (
              <ActivityIndicator size={'small'} />
            ) : (
              <Text style={[iranSans, fWhite, h4]}>{entertoapptext}</Text>
            )}
          </TouchableOpacity>
          {renderError()}
          <TouchableOpacity style={[centerAll]} onPress={() => onButtonPress()}>
            <Text style={[iranSans, h5, {marginTop: 16}]}>
              اگر هنوز ثبت نام نکرده اید الان ثبت نام کنید.ثبت نام
            </Text>
            <View
              style={{
                width: Dimensions.get('screen').width - 100,
                height: 1,
                backgroundColor: 'red',
              }}
            />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};
LoginForm.navigationOptions = () => {
  return {
    header: null,
  };
};

export default LoginForm;
