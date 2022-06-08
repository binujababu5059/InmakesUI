import React,{useState,useEffect}from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  LogBox
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import DropDownPicker from 'react-native-dropdown-picker';



export default function Register ({navigation}) {

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Kerala', value: 'apple'},
    {label: 'Tamilnadu', value: 'banana'}
  ]);

  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"])
  }, [])
 
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
              Enter your mobile number
            </Text>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 16,
                fontWeight: 'bold',
                color: 'grey',
                top: '28%',
              }}>
            We will send you an OTP to verify
            </Text>
          </View>
          <View
            style={{
              backgroundColor: '#002333',
              height: hp('60%'),
              borderTopEndRadius: 14,
              borderTopStartRadius: 14,
              bottom: '0%',
            }}>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
            }}>
            <TextInput
              style={{
                width: wp('86%'),
                height: 45,
                borderRadius: 5,
                backgroundColor: "#062E40",
                alignSelf: 'center',
                justifyContent: 'center',
                top:'16%'
              }}
              placeholder="Mobile Number"
              placeholderTextColor='#446270'
              keyboardType= "number-pad" 
              maxLength= {10} 
              ></TextInput>
            <TextInput
              style={{
                width: wp('86%'),
                height: 45,
                borderRadius: 5,
                backgroundColor: "#062E40",
                alignSelf: 'center',
                justifyContent: 'center',
                top:'21%'
              }}
              placeholder="Email"
              placeholderTextColor='#446270'
              keyboardType= "email-address" 
              maxLength= {10} 
              ></TextInput>
      <View style={styles.inputView}>
        <DropDownPicker 
              placeholder="Select State"
              placeholderStyle={{
              color: "#446270",
              }}
              style={{backgroundColor: '#062E40'}}
              labelStyle = {{
                fontSize: 15,
                color:'#446270'
              }}
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems} />
      </View>  
          <TextInput
              style={{
                width: wp('86%'),
                height: 45,
                borderRadius: 5,
                backgroundColor: "#062E40",
                alignSelf: 'center',
                justifyContent: 'center',
                top:'31%'
              }}
             placeholder="Pincode"
             placeholderTextColor='#446270'
             keyboardType= "phone-pad" 
             maxLength= {6} 
             ></TextInput>
      </View>
      <View
              style={{
                backgroundColor: '#00C458',
                height: hp('8%'),
                width: wp('86%'),
                justifyContent: 'center',
                alignSelf: 'center',
                top: '17%',
                borderRadius: 5,
              }}>
           <Text
              style={{
                alignSelf: 'center',
                fontSize: 17,
                fontWeight: 'bold',
                color: 'white',
                }}  onPress={() => navigation.navigate('Selectschool')}>
                Register
            </Text>
      </View>
      </View>
      </ScrollView>
      </View>
    );
  }

const styles= StyleSheet.create({
  inputView:{
    width:'86%',
    height:45,
    backgroundColor:"#062E40",
    borderRadius:5,
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent: 'center',
    top:'12%',
    alignSelf:'center'
  }
})

