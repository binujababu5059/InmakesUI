import React from 'react';

import {View, Text,Image, TextInput, ScrollView} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function Login ({navigation}) {
    return (
      <View style={{flex: 1}}>
       <ScrollView>
        <View
          style={{
            justifyContent: 'center',
            width: wp('100%'),
            height: hp('71%'),
            backgroundColor: '#0000',
        }}>
        <Image
          style={{
            width: '63%',
            height: '10%',
            alignSelf: 'center',
            bottom:'15%'
              // resizeMode='cover'
        }}
        source={require('../assets/images/logo.png')}
        />
        <Text
          style={{
            textAlign: 'center',
            fontSize: 22,
            fontWeight: 'bold',
            top: '32%',
            color: 'black',
        }}>
        Enter your mobile number
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 16,
            fontWeight: 'bold',
            color: 'grey',
            top: '33%',
        }}>
        We will send you an OTP to verify
        </Text>
        </View>
        <View
          style={{
            backgroundColor:'#002333',
            height: hp('29%'),
            borderTopEndRadius:14,
            borderTopStartRadius:14
        }}>
        <View
          style={{
            flexDirection:'row',
            justifyContent:'center',
            top:'11%'
        }}>
        <TextInput
          style={{
            width: wp('12%'),
            height: 45,
            textAlign:'center',
            alignSelf: 'center',
            justifyContent: 'center',
            right: '18%',
            backgroundColor: "#062E40",borderRadius: 5,color: "white"
        }}
         placeholder="+91"
         placeholderTextColor="white"
         keyboardType= "number-pad" 
         maxLength= {2} > 
        </TextInput>
        <TextInput
          style={{
            width: wp('65%'),
            height: 45,
            borderRadius: 5,
            backgroundColor: "#062E40",
            alignSelf: 'center',
            justifyContent: 'center',
            left: '14%',
        }}
        placeholder="Mobile Number"
        placeholderTextColor='#446270'
        keyboardType= "number-pad" 
        maxLength= {10} >
        </TextInput>
        </View>
        <View
         style={{
            backgroundColor: "#00C458",
            height: '20%',
            width: '80%',
            justifyContent: 'center',
            alignSelf: 'center',
            top: '35%',
            borderRadius: 5,
            }}>
        <Text
         style={{
            alignSelf: 'center',
            fontSize: 17,
            fontWeight: 'bold',
            color: 'white',
        }} onPress={() => navigation.navigate('Otp')}>
        Continue
        </Text>
        </View>
        </View>
    </ScrollView>
</View>
);
}
