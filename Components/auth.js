import React from 'react'
import { Text, View, Image, StyleSheet, Dimensions, SafeAreaView, ScrollView, ImageBackground, Linking } from 'react-native'
import Svg, {
    G,
    Path,
    Rect,
    Defs,
    Ellipse,
    ClipPath,
   Stop,
   Pattern,
   Use,


  } from 'react-native-svg';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AuthContext } from './context'
import {LinearGradient} from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';

import { FontAwesome5  } from '@expo/vector-icons'; 





const Auth = ({navigation}) => {

  

    return (
        
            <View style={styles.container}>
                <Image
                style={{width:"100%",height:300}}
                source={require('../assets/background.png')}
                resizeMode="contain"
                />
                <View style={{margin: 20}} >
                <Text style={{fontSize:40, fontWeight:'bold',textAlign:'center'}}>Hello</Text>
                <Text style={{fontSize:16,color: 'gray',textAlign:'center',textTransform:'uppercase', marginTop: 10}}>Welcom to Waycon mediterrané, Camera and piece state consulting App </Text>
                </View> 
           <View style={{margin:20,paddingVertical:20,alignItems:'center'}}>
                <TouchableOpacity
                 onPress={() => navigation.navigate("signin")}
               
                >
                    <LinearGradient
                    colors={['#4666CA', '#012AAB']}
                    style={styles.signIn}
                >
                <Text style={{textAlign:'center',color: '#FFF',fontSize:22}}>Get Started</Text>
              <MaterialIcons 
              name="navigate-next"
              color="white"
              size={20} 
              />
               </LinearGradient>
                </TouchableOpacity>
     
          </View>
          <View>
          <Text 
      style={{color:'#4632A1', fontSize: 20, fontWeight:"bold",  textTransform: 'uppercase', textAlign:"center" }}>Visit Us
      </Text>
          </View>

          <View style={{flexDirection: 'row', justifyContent: "space-around", width:"100%", margin: 20}}>
            
                 <TouchableOpacity onPress={() => {
                            Linking.openURL('https://www.facebook.com/Waycon-M%C3%A9diterran%C3%A9e-188578171201836/');
                        }} style={{height: "40%", width: 150}}>
              <FontAwesome5 name="facebook" size={40} color="#4666CA" style={{marginHorizontal: 50}} />
              <Text 
      style={{color:'#4632A1', fontSize: 14, marginTop:10, textTransform: 'uppercase', textAlign:"center" }}>Facebook
      </Text>
              </TouchableOpacity> 

              
           
              

                 <TouchableOpacity onPress={() => {
                            Linking.openURL('https://waycon.com/');
                        }} style={{height: "40%", width: 150}}>
                  <Image source={require('../assets/favi.png')} style={{height: "40%", width: 150}} />
                  <Text 
      style={{color:'#4632A1', fontSize: 14,  textTransform: 'uppercase', textAlign:"center" }}>Website
      </Text>
              </TouchableOpacity>

              
     
             
          </View>
         





            </View>
            
            
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#FFF',
        alignItems:'center'
    },
    signIn: {
      width: 200,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      flexDirection:'row',
     
    },
   
})

export default Auth
