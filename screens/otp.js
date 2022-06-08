import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import OTPInputView from '@twotalltotems/react-native-otp-input';


export default function Otp({navigation}) {
    return (
      <View style={{flex: 1}}>
        <ScrollView>
          <View
            style={{
              justifyContent: 'center',
              width: wp('100%'),
              height: hp('55%'),
              backgroundColor: '#0000',
            }}>
            <Image
              style={{
                width: '63%',
                height: '13%',
                alignSelf: 'center',
                bottom: '2%',
                // resizeMode='cover'
              }}
              source={require('../assets/images/logo.png')}
            />
            <Text
              style={{
                textAlign: 'center',
                fontSize: 22,
                fontWeight: 'bold',
                top: '27%',
                color:'black'
              }}>
              Verification code
            </Text>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 16,
                fontWeight: 'bold',
                color: 'grey',
                top: '28%',
              }}>
              Please type the verification code sent to
            </Text>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 16,
                fontWeight: 'bold',
                color: '#000',
                top: '32%',
              }}>
              +91
            </Text>
          </View>

          <View
            style={{
              backgroundColor: '#002333',
              height: hp('50%'),
              borderTopEndRadius: 14,
              borderTopStartRadius: 14,
              top: '2%',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                top: '11%',
              }}>
              <OTPInputView
                style={{width: '80%', height: 70}}
                pinCount={6}
                // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                // onCodeChanged = {code => { this.setState({code})}}
                autoFocusOnLoad
                codeInputFieldStyle={styles.underlineStyleBase}
                codeInputHighlightStyle={styles.underlineStyleHighLighted}
                onCodeFilled={code => {
                  console.log(`Code is ${code}, you are good to go!`);
                }}
              />
            </View>

            <View
              style={{
                backgroundColor: '#00C458',
                height: hp('8%'),
                width: wp('80%'),
                justifyContent: 'center',
                alignSelf: 'center',
                top: '20%',
                borderRadius: 5,
              }}>
              <Text
                style={{
                  alignSelf: 'center',
                  fontSize: 17,
                  fontWeight: 'bold',
                  color: 'white',
                }} onPress={() => navigation.navigate('Register')}>
                Resend OTP
              </Text>
            </View>
            <Text
              style={{
                alignSelf: 'center',
                fontSize: 13,
                top: '23%',
                color: '#446270',
              }}>
              Resend after 28s
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: '35%',
              }}>
              <Ionicons name="ios-call" size={20} color="#00C458" />
              <Text
                style={{
                  alignSelf: 'center',
                  fontSize: 16,
                  color: '#00C458',
                  fontWeight: 'bold',
                  marginLeft: 5,
                }}>
                Contact Us
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }


const styles = StyleSheet.create({
  underlineStyleBase: {
    width: 40,
    height: 45,
    borderWidth: 1,
    borderBottomWidth: 1,
  },
  underlineStyleHighLighted: {
    borderColor: '#03DAC6',
  },
});

