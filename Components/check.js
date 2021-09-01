import React from 'react'
import {View, Text, Image, ImageBackground, Dimensions, StyleSheet,FlatList} from 'react-native'
import {TextInput,ScrollView,TouchableOpacity, TouchableWithoutFeedback} from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient'
import { AuthContext } from './context';
import Icon from 'react-native-vector-icons/FontAwesome';
import LottieView from 'lottie-react-native';
import { Ionicons } from '@expo/vector-icons';


const DATA = [
    {
      id: "1",
      title: "Date:",
     text: "18/07/2021",
    },
    {
        id: "2",
        title: "State:",
        text: "en cours",
       
      },
      {
        id: "3",
        title: "l'emplacement:",
       text: "Sousse",
      },
      {
          id: "4",
          title: "Fin de reparation:",
          text: "dans 5 jours",
         
        },
    ];


const Check = ({navigation}) => {
    const renderItem = ({  item }) => (
        <View style={{ flexDirection: "row", width: "50%", 
        justifyContent: "center"}}> 
        <LinearGradient
        colors={['#4b79a1', '#283e51']}

        style={styles.flat}>
      
                
          <Text style={{
                          fontFamily: "bold",
                          fontSize: 15,
                        
                          
                          color: "#ffffff",
                          textAlign:'center'
                        }}>{item.title}</Text>
                        <Text style={{
                          fontFamily: "bold",
                          fontSize: 15,
                         
                          
                          color: "#ffffff",
                          textAlign:'center'
                        }}>{item.text}</Text>
                        </LinearGradient>
       
        </View>
        
      );
    
    return (
       <ScrollView  style={{flex:1,backgroundColor: '#E0E3E8'}}>
       <View
       style={{flexDirection:'column'}}
       showsVerticalScrollIndicator={false}>
       
       <ImageBackground 
       source={require('../assets/WAYCON.gif')}
       style={{height: Dimensions.get('window').height/3,
    }}>
       
           <TouchableOpacity onPress={() => navigation.goBack()}
           style={{flexDirection: "row", justifyContent: "space-between",marginTop:20,marginLeft:10}}>
           <Ionicons name="arrow-back-circle-sharp" size={30} color='#4b79a1' />
       </TouchableOpacity>
       
        
        </ImageBackground>
        </View>
        <View style={{

backgroundColor: '#E0E3E8',
bottom: 50,
borderTopStartRadius:60,
borderTopEndRadius:60,

        }}>

<Text 
      style={{color:'#4632A1', fontSize: 20, fontWeight: 'bold', marginTop:60,textTransform: 'uppercase', textAlign:"center" }}>Serial number:{"\n"} 6546756856546
      </Text>
                <FlatList
        data={DATA}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
          
          <View>

          
              <Text 
      style={{color:'#4632A1', fontSize: 14, marginTop:60,textTransform: 'uppercase', textAlign:"center" }}>For more informations call:{"\n"} +216 73 820 747
      </Text>

      
      </View>
</View> 
       
        
       </ScrollView>
                        
      
    );
}

export default Check;

const styles = StyleSheet.create ({
    brandView: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',  
    },
    flat: {
        height: 120,
        width: 150,
        borderRadius: 20,
       justifyContent:'center',
        marginTop:40,
    }
  
 
});