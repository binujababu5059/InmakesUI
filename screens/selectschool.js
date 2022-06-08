import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Entypo from 'react-native-vector-icons/Entypo';

export default function Selectschool ({navigation}) {
 
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
                top: '10%',
                // resizeMode='cover'
            }}
            source={require('../assets/images/logo.png')}
            />
            <Text
              style={{
                textAlign: 'center',
                fontSize: 22,
                fontWeight: 'bold',
                top: '62%',
                color:'black'
              }}>
            Select you school board
            </Text>
        </View>
        <View
            style={{
              backgroundColor: '#002333',
              height: hp('45%'),
              borderTopEndRadius: 14,
              borderTopStartRadius: 14,
              top: '15%',
            }}>
        <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
            }}>
              
        <View style={styles.inputView}>
           <TextInput style={{flex:1,}}
            placeholder="Select Board"
            placeholderTextColor="#446270">
            </TextInput>
            <Entypo name="chevron-small-down" size={20} color="#446270"  />
        </View>
        <View style={styles.inputView1}>
           <TextInput style={{flex:1}}
            placeholder="Select Class"
            placeholderTextColor="#446270">
           </TextInput>
           <Entypo name="chevron-small-down" size={20} color="#446270"  />
        </View>
    </View>
        <View
            style={{
              backgroundColor: '#00C458',
              height: hp('8%'),
              width: wp('86%'),
              justifyContent: 'center',
              alignSelf: 'center',
              top: '16%',
              borderRadius: 5,
            }}>
            <Text
                style={{
                  alignSelf: 'center',
                  fontSize: 17,
                  fontWeight: 'bold',
                  color: 'white',
                }} onPress={() => navigation.navigate('Slider')}>
                Continue
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
    top:'5%',
    alignSelf:'center'
  },
  inputView1:{
    width:'86%',
    height:45,
    backgroundColor:"#062E40",
    borderRadius:5,
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent: 'center',
    top:'9%',
    alignSelf:'center'
  }
  
})