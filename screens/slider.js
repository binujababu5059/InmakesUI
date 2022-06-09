import React from "react";
import { StyleSheet, Image,  Text, View } from "react-native";
import Swiper from "react-native-swiper";



//const w = Dimensions.get("window").width;
//const h = Dimensions.get("window").height;

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    paddingTop: 40,
    marginHorizontal: 25,
    
  },
  img: {
    alignSelf: "center",
    height:'70%',
    width:'100%',
  },
  img1: {
    alignSelf: "center",
    height:'50%',
    width:'90%',
  },
  title: {
   textAlign:'center',
   marginTop: 30,
   fontWeight :'bold',
   fontSize: 22,
  },
  text: {
    color: "#767676",
    marginTop: 15,
    fontSize: 16,
    lineHeight: 25,
    marginLeft: 10,
  },
  text1:{
    color: "#767676",
    marginTop: 15,
    fontSize: 16,
    lineHeight: 25,
    marginLeft: 10,
  },
  slide1: {
    flex: 1,
    paddingTop: 40,
    marginHorizontal: 25,
    
  },
});

export default function Slider({navigation}) {
 
    return (
      <Swiper
        buttonWrapperStyle={{
          backgroundColor: "transparent",
          flexDirection: "row",
          position: "absolute",
          bottom: 0,
          left: 0,
          flex: 1,
          paddingHorizontal: 30,
          paddingVertical: 20,
          justifyContent: "flex-end",
          alignItems: "flex-end",
        }}
        style={styles.wrapper}
        showsButtons={false}
        paginationStyle={{
          marginRight: 0.7,
          marginBottom:  0.02,
          
        }}
        // nextButton={
        //   <View
        //     style={{
        //       height: 50,
        //       borderRadius: 10,
        //       alignItems: "center",
        //       justifyContent: "center",
        //       width: 60,
        //       backgroundColor: "green",
              
        //     }}>
        //     <AntDesign name="arrowright" size={22} color="#fff" />
        //   </View>
        // }
        >
        <View style={styles.slide}>
          <Image source={require('../assets/home2.jpg')} style={styles.img} />
          <Text style={styles.title}>Fractional Shares</Text>
          <Text style={styles.text}>
            Instead of having to buy an entire share,invest any amount you want
          </Text>
        </View>
        <View style={styles.slide}>
          <Image source={require('../assets/home.jpg')} style={styles.img} />
          <Text style={styles.title}>Learn as you go</Text>
          <Text style={styles.text}>
           Download the Stockpile app and master the market with our mini-lesson.
          </Text>
        </View>

        <View style={styles.slide1}>
          <Image source={require('../assets/home3.jpg')} style={styles.img} />
          <Text style={styles.title}>Kids and teens</Text>
          <Text style={styles.text}>
            Kids and teens can track their stocks 24/7 and place trades that you approve.
          </Text>
          <View style={{alignItems:'flex-end',justifyContent:'flex-end'}}>
           <View style={{width:60,height:30,backgroundColor:'blue',alignItems:'center',justifyContent:'center'}}>
             <Text  onPress={() => navigation.navigate('Home')}>Done</Text>
         </View>
         </View>  
          </View>
            
        </Swiper>
  );
};



