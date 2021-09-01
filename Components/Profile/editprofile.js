import React from 'react'
import { View, Text, StyleSheet,ScrollView, TouchableOpacity, SafeAreaView,ImageBackground, Image } from 'react-native'
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
import { TextInput } from 'react-native';

const EditProfile = ({navigation}) => {

    

    return (
    <View style={styles.container}>
         <ScrollView showsVerticalScrollIndicator={false}>
        <View
        style={styles.linear}>
 
          <View style={{flexDirection: "row", justifyContent: "space-between"}}>
          <TouchableOpacity onPress={() => navigation.goBack()}
           style={{flexDirection: "row", justifyContent: "space-between",marginTop:30, left: 10}}>
           <Ionicons name="arrow-back-circle-sharp" size={30} color='#ffffff' />
       </TouchableOpacity>
                
      
                
          <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#ffffff',textAlign:'center', paddingVertical: 35, right: 10 }}>Edit Profile</Text>

          <View>

          </View>
        
 
        
          </View>
        
        
          
       </View> 
        
             
                       
             

            <View style={styles.userInfoSection}>
                <View style={{flexDirection: "column"}}>
       
                <Image source={require('../../assets/favi.png')} style={{alignSelf: "center"}} />
                        <Title style={styles.title}>Modify your information  </Title>
                        
                   
                </View>

            
          <View style={styles.userInfoSection}>
           
          <View style={styles.row}>
          <Icon name="person-outline" color="#DD0D35" size={20} />
        <TextInput 
         placeholder="  First Name"
         placeholderTextColor="#DD0D35"
         
        style={styles.input} />
        </View>
        
        <View style={styles.row}>
          <Icon name="person-outline" color="#DD0D35" size={20}/>
          <TextInput 
         placeholder="  Last Name"
         placeholderTextColor="#DD0D35"
         
        style={styles.input} />
        </View>
        
            <View  style={styles.row}>
                <Icon name="locate-outline" color='#DD0D35'  size={20}/>
               
                <TextInput 
         placeholder="  Adress"
         placeholderTextColor="#DD0D35"
         keyboardAppearance="dark"
         
        style={styles.input} />
            </View>
            
            <View  style={styles.row}>
                <Icon name="call-outline" color='#DD0D35'  size={20}/>
                <TextInput 
         placeholder="  Mobile"
         placeholderTextColor="#DD0D35"
         keyboardType= "decimal-pad"
         keyboardAppearance="dark"
         
        style={styles.input} />
            </View>  
            <View style={styles.row}>
         <Icon name="mail-outline" color="#DD0D35" size={20}/>
          <TextInput
            
         placeholder="  Email"
         placeholderTextColor="#BB102B"
         
        style={styles.input} />
        </View> 
       
</View>
          </View>
          <TouchableOpacity
                    style={styles.SignUp}
                   onPress={()=> alert("Done")
                    
                    
                    
                 } 
                >
                <LinearGradient
                    colors={['#4666CA', '#012AAB']}
                    style={styles.SignUp}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Save</Text>
                </LinearGradient>
                </TouchableOpacity>
         
          <View style={styles.menuWrapper}>
        
        
</View>
</ScrollView>
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
  SignUp: {
    width: '90%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    alignSelf:'center',
    marginTop:25
},
button: {
    alignItems: 'center',
   
},
textSign: {
  fontSize: 18,
  fontWeight: 'bold'
},
input: {
    width:200,
    borderRadius:20,
    borderWidth:1,
    borderColor: "blue",
    padding:5,
    textAlign:'center'

}

})

export default EditProfile