import React from 'react'
import { 
  View,
  Text,
 TouchableHighlight,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  FlatList
} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import { Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from './login';
import Otp from './otp';
import Register from './register';
import Selectschool from './selectschool';
import { NavigationContainer } from '@react-navigation/native';


const Tab = createBottomTabNavigator();

 
const DATA = [
    {
      id: '1',
      title: 'Classes',
    },
    {
      id: '2',
      title: 'Classes',
    },
    {
      id: '3',
      title: 'Classes',
    },
    {
      id: '4',
      title: 'Classes',
    },
    {
      id: '5',
      title: 'Classes',
    },
    {
      id: '6',
      title: 'Classes',
    }
  ];

  const RECENTCLASSESDATA = [
    {
      id: '1',
      title: 'Physics',
    },
    {
      id: '2',
      title: 'Biology',
    },
    {
      id: '3',
      title: 'Chem',
    },
    {
      id: '4',
      title: 'Comp',
    },
    {
      id: '5',
      title: 'English',
    },
    {
      id: '6',
      title: 'Hindi',
    }
  ];

  const BOOKCLASS = [
    {
      id: '1',
      title: 'Inmakes live classes',
    },
    {
      id: '2',
      title: 'Inmakes live classes',
    },
    {
      id: '3',
      title: 'Inmakes live classes',
    },
    {
      id: '4',
      title: 'Inmakes live classes',
    },
    {
      id: '5',
      title: 'Inmakes live classes',
    },
    {
      id: '6',
      title: 'Inmakes live classes',
    }
  ];

  const Item = ({ title }) => (
  
    <View style={styles.itemClassBox}>
        <View style= {{backgroundColor: 'green', width:12,height: 12,borderRadius:10}} />
        <Text style= {{width:65,textAlign:'center',fontSize:13,color:'black'}}>{title}</Text>
     </View>
  );


  const ImageItems = ({title}) => (
    <View>
      <Image source= {require('../assets/scienceimg.jpg')} style= {{resizeMode: 'stretch',marginLeft:10,width:200,height:120}}></Image>
      <View style={{position:'absolute',bottom:10,left:30,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
          <Icon name= 'playcircleo' color='white' size={20}></Icon>
          <Text style={{color:'white',paddingLeft:10,fontSize:12 }}>Course Title</Text>
      </View>
    </View>
  );

  var windowWidth = Dimensions.get('window').width;
  var windowHeight = Dimensions.get('window').height;

  const BookCard = ({title}) => (
      
    <View style= {{height:400,width:250,backgroundColor:'#0E132E',marginLeft:10,marginTop:20,borderRadius:6,marginBottom:120}}>
      <View style={{backgroundColor:'#6A4F96',width:80,height:80,borderRadius:50,marginTop:40,marginLeft:20}} />
      <Text style={{color:'white',marginLeft:20,marginTop:20,fontSize:20}}numberOfLines={1}>
             
                 {
                    windowWidth>windowHeight
                      ? `${title}`
                      : `${title.substring(0, 13)}...`
                 }
             
      </Text>

      <Text style={{fontSize:20,color:'grey'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Text>
      <TouchableHighlight style= {styles.touchable}>
              <Text style= {{color: "#FFFFFF"}}>Book Now</Text>
            </TouchableHighlight>
    </View> 

  );


export default function Home({navigation}){
    return(
      
      <SafeAreaView style= {styles.keyboard}>
        <View style= {styles.maincontainer}>
          <View style={styles.topBar}>
              <View style={styles.sideSquareView}>
                  <View style={styles.smallBox}>
                      <View style= {styles.microBox1and2}>
                          <View style= {styles.microBox1}>
                          </View>
                          <View style= {styles.microBox2}>

                          </View>
                      </View>
                      <View style= {styles.microBox3and4}>
                          <View style= {styles.microBox3}>
                          </View>
                          <View style= {styles.microBox4}>
                             
                          </View>
                      </View>
                  </View>
              </View>
              <View style={styles.logo}>
                  <Image source= {require('../assets/lhlogo.png')} style= {styles.logoImage}>
                  </Image>
              </View>
              <View style={styles.topClasses}>
                  <View style= {{backgroundColor: 'green', width:12,height: 12,borderRadius:10,marginLeft: 10}} />
                  <Text style= {{width:50,textAlign:'center',fontSize:10,color:'green'}}>Classes</Text>
              </View>
          </View>
          <ScrollView styles= {{width:'100%'}}>
              <View style= {{width:'100%'}}>
                  <View style= {{marginTop:20,marginLeft:10,marginRight: 10}}>
                  <Text>Good Morning</Text>
                  <Text style={{fontSize:27}}>Aaron Taylor</Text>
                  <View style= {styles.dropDownBox}>
        <Image source= {require('../assets/dropdownimage.png')} style= {styles.dropDownBoxImage}>
        </Image>
        <View style= {{width:'100%',height:60,position:'absolute',}}>
            <Text style={{paddingLeft:20,color:'white',fontSize:12}}>Class</Text>
            <Text style={{paddingLeft:20,color:'white',fontSize:15,paddingTop:10}}>Select state</Text>
            <Icon name='down'style={{position:'absolute',color:'white',bottom:10,right:20}}></Icon>
        </View>
      </View>
      <FlatList
        data={DATA}
        horizontal= {true}
        style={styles.flatList}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          
          <Item title={item.title} />
          
        )}
        keyExtractor={item => item.id}
      />
                <Text style={{marginTop:25}}>Recent courses</Text>

                <FlatList
        data={RECENTCLASSESDATA}
        horizontal= {true}
        style= {styles.imageFlatList}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          
          <ImageItems title={item.title} />
          
        )}
        keyExtractor={item => item.id}

        >
          
        </FlatList>

        <FlatList
        data={BOOKCLASS}
        horizontal= {true}
        style= {{width:'100%'}}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <BookCard title={item.title} />
        )}
        keyExtractor={item => item.id} >
      </FlatList>
    </View>
   </View>
  </ScrollView>
 </View>
       
         <View style={{height:50,width:'100%',position:'absolute',bottom: 15 }}>
          <Tab.Navigator screenOptions={{
           tabBarColor: 'white'
           }}>
              <Tab.Screen name="Home" component={Login}  options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color }) => (
              <Icon name="home" color= 'grey' size={26}  onPress={() => navigation.navigate('Login')}/>
              ),
              tabStyle:{
              marginTop:(Platform.OS === 'ios') ? 0 : 0,
              height : 40,
              flexDirection: 'row'
              }
              }} />
              <Tab.Screen name="Recent" component={Otp}  options={{
              tabBarLabel: 'Recent',
              tabBarIcon: ({ color }) => (
              <Icon name="caretright" color='grey' size={26} />
              ),
              }}/>
             <Tab.Screen name="Exams" component={Register}  options={{
             tabBarLabel: 'Exams',
             tabBarIcon: ({ color }) => (
            <Icon name="form" color='grey' size={26} />
             ),
             }}/>
             <Tab.Screen name="Profile" component={Login}  options={{
             tabBarLabel: 'Profile',
             tabBarIcon: ({ color }) => (
             <Icon name="user" color='grey' size={26} />
             ),
             }}/>
             <Tab.Screen name="contact" component={Selectschool}  options={{
             tabBarLabel: 'Contact',
             tabBarIcon: ({ color }) => (
            <Icon name="mail" color = 'grey' size={26} />
          ),
        }}/>
    </Tab.Navigator>
   </View> 
    
  </SafeAreaView>   
        
    );
  }


const styles = StyleSheet.create({
  keyboard: {
    flex: 1,
    backgroundColor: 'white'
  },
maincontainer: {
  justifyContent:'center',
  backgroundColor:'white'
},
topBar: {
    height:90,
    width: '100%',
    backgroundColor: 'white',
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection: 'row'
},
sideSquareView: {
    borderWidth: 1,
    backgroundColor:'white',
    borderColor:'#9F9F9F',
    width: 40,
    height: 40,
    borderRadius: 3,
    marginLeft: 10,
    justifyContent:'center',
    alignItems:'center'
},
smallBox: {
    width: 15,
    height: 15,
},
microBox1and2: {
    flexDirection: 'row',
    width:'100%',
    height: '50%',
    justifyContent:'space-between'
},
microBox1: {
    height:'90%',
    width: '45%',
    borderRadius: 1,
    borderWidth: 1.5,
    borderColor: 'green'
},
microBox2: {
    height:'90%',
    width: '45%',
    borderRadius: 1,
    borderWidth: 1.5,
    borderColor: 'green'
},
microBox3and4: {
    flexDirection: 'row',
    width:'100%',
    height: '50%',
    justifyContent:'space-between'
},
microBox3: {
    height:'90%',
    width: '45%',
    borderRadius: 1,
    borderWidth: 1.5,
    borderColor: 'green'
},
microBox4: {
    height:'90%',
    width: '45%',
    borderRadius: 1,
    borderWidth: 1.5,
    borderColor: 'green'
},
logo: {
    width:250,
    height: 35,
    marginLeft:20,
    resizeMode:'stretch'
},
logoImage:{
    resizeMode: 'stretch',
    height: '100%',
    width: '50%'
},
topClasses:{
    borderColor: 'green',
    borderWidth:1,
    borderRadius : 4,
    width:70,
    height:30,
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems:'center',
    marginRight: 15
},
dropDownBox: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    width: '100%',   
  },
  dropDownBoxImage: {
    height: 75,
    width: '100%',
    borderRadius: 6
  },
  dropDownBoxTextView: {
    position: 'absolute',
    height:30,
    width: '80%',
    paddingStart: 30
  },
  dropDownBoxClassText: {
    height: 14,
    width: 30,
    fontSize: 12,
    color: '#BAC3C7'
  },
  dropDownBoxPlusTwoScienceText: {
    height: 16,
    width: 106,
    fontSize: 12,
    color: '#FFFFFF'
  },
  item: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderColor: '#002333',
    borderWidth: 1,
    borderRadius: 6,
    marginVertical: 20,
    width: 92,
    height: 32,
    marginStart: 40
  },
  itemClassBox: {
    borderColor: 'black',
    borderWidth:1,
    borderRadius : 7,
    width:90,
    height:40,
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems:'center',
    marginRight: 15,
    marginTop: 20
  },
  touchable: {
    width: "50%",
    height: "15%",
    backgroundColor: "#00C458",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
    borderRadius:5,
    marginLeft:55
  },
  navBar: {
    position:'absolute',
    top:100
  }
});
 