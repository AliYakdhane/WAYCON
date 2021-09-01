import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView,ImageBackground, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context'
import {
    Avatar,
    Title,
    Caption,
    
    TouchableRipple,
} from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import {LinearGradient} from 'expo-linear-gradient';

const Profile = ({navigation}) => {

    

    return (
    <View style={styles.container}>
        <View
        style={styles.linear}>
 
          <View style={{flexDirection: "row", justifyContent: "space-between"}}>
          <TouchableOpacity onPress={() => navigation.goBack()}
           style={{flexDirection: "row", justifyContent: "space-between",marginTop:30, left: 10}}>
           <Ionicons name="arrow-back-circle-sharp" size={30} color='#ffffff' />
       </TouchableOpacity>
                
      
                
          <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#ffffff',textAlign:'center', paddingVertical: 35, right: 10 }}>Profile</Text>

          <View>

          </View>
        
 
        
          </View>
        
        
          
       </View> 
        
             
                       
             

            <View style={styles.userInfoSection}>
                <View style={{flexDirection: "column"}}>
       
                <Image source={require('../../assets/favi.png')} style={{alignSelf: "center"}} />
                        <Title style={styles.title}>Hello Dear client  Your informations is </Title>
                        
                   
                </View>

            </View>
          <View style={styles.userInfoSection}>
             <View style={styles.row}>
          <Icon name="person-outline" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>Ali</Text>
        </View>
        <View style={styles.row}>
          <Icon name="person-outline" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>Yakdhane</Text>
        </View>
        
            <View  style={styles.row}>
                <Icon name="locate-outline" color='#777777'  size={20}/>
                <Text style={{marginLeft:20,color:'#777777'}} >Sousse, Tunisie</Text>
            </View>
            
            <View  style={styles.row}>
                <Icon name="call-outline" color='#777777'  size={20}/>
                <Text style={{marginLeft:20,color:'#777777'}} >50 318 538</Text>
            </View>  
            <View style={styles.row}>
          <Icon name="mail-outline" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>Yakdhanali97@gmail.com</Text>
        </View> 
       

          </View>
          <TouchableOpacity
                    style={styles.SignUp}
                    onPress={() => navigation.navigate('editprofile')}
                >
                <LinearGradient
                    colors={['#4666CA', '#012AAB']}
                    style={styles.SignUp}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Edit profile</Text>
                </LinearGradient>
                </TouchableOpacity>
          <View style={styles.menuWrapper}>
        
        
</View>

        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#FFF",
        justifyContent:"space-between",
        flexDirection: "column"
       
    },
    userInfoSection: {
        paddingHorizontal: 30,
    },
    title: {
fontSize: 24,
fontWeight: 'bold',
textAlign:'center'

    },
   row: {
       flexDirection: 'row',
       
       paddingVertical: 25
   },
   infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
 

   },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 15,
    

  },
  SignUp: {
    width: '90%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    alignSelf:'center'
},
  menuItemText: {
    color: 'black',
    
    fontWeight: '600',
    fontSize: 22,
    lineHeight: 24,
  },
  linear: {
    borderBottomLeftRadius:40,
    borderBottomRightRadius:40,
   
    backgroundColor:'#0D62D1',
    
  },
  button: {
    alignItems: 'center',
   
},
textSign: {
  fontSize: 18,
  fontWeight: 'bold'
},
})

export default Profile