import React, {useRef} from 'react';
import { Text, View, Image, Dimensions, SafeAreaView, ScrollView, TouchableOpacity, FlatList, TextInput, StyleSheet} from 'react-native'
import ImageBackground from 'react-native/Libraries/Image/ImageBackground'
import { Ionicons } from '@expo/vector-icons';
import { AuthContext } from './context'
import { Modalize } from 'react-native-modalize';
import LottieView from 'lottie-react-native';
import { LinearGradient } from 'expo-linear-gradient'
import Svg, {
    G,
    Path,
    Rect,
    Defs,
    Mask,
    ClipPath,
    Stop,
    
  } from 'react-native-svg';


  const DATA = [
    {
      id: "1",
      title: "Piece 1",
      ref:"REF: k2214",
      pic: require("../assets/1.jpg")
    },
    {
      id: "2",
      title: "Piece 2",
      ref:"REF: c2214",
      pic: require("../assets/2.jpg")
    },
    {
      id: "3",
      title: "Piece 3",
      ref:"REF: d2214",
      pic: require("../assets/3.jpg")
    },
    {
        id: "4",
        title: "Piece 4",
        ref:"REF: v2214",
        pic: require("../assets/4.jpg")
      },
    
  ];


  


const Home = ({ navigation }) => {


 

    const modalizeRef = useRef(null);


      
  
    const renderItem = ({ onPress, item }) => (
      <View style={{ flexDirection: "row", width: "50%", marginTop: 20,
        justifyContent: "center"}}>
        <TouchableOpacity onPress={()=> navigation.navigate('check')
        }  >
        <LinearGradient
        colors={['#4b79a1', '#283e51']}

        style={styles.flatt}>
                 <Image
                    source={item.pic}
                    style={{ width: "100%", borderRadius: 10, height: "70%" }}
                  />
          <Text style={{
                          fontFamily: "bold",
                          fontSize: 15,
                         textAlign:'center',
                          color: "#ffffff",
                        }}>{item.title}</Text>
                          <Text style={{
                          fontFamily: "bold",
                          fontSize: 15,
                         textAlign:'center',
                          color: "#ffffff",
                        }}>{item.ref}</Text>
       </LinearGradient>
        </TouchableOpacity>
      </View>
        
        
      );

      
      


 return (

    
    
    <View style={{
        backgroundColor:"#FFF",
        flex:1
    }}>
    

          <View
       style={styles.linear}>

         <View style={{flexDirection: "row", justifyContent: "space-between"}}>
           <TouchableOpacity onPress={() => navigation.navigate('profile')}>
       <Ionicons name="person" size={30} color="white" />
       </TouchableOpacity>
               
     
               
         <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#ffffff',textAlign:'center', }}>WELCOME BACK</Text>
       

         <TouchableOpacity onPress={() => navigation.navigate('auth')}>
         <Ionicons name="log-out" size={30} color="white" />
       </TouchableOpacity>
         </View>
       
       
         
      </View> 
      <Text
            style={{
              color: "#000000",
              fontFamily: "bold",
            textAlign:'center',
            marginTop:30,
            justifyContent:'space-between',
              fontSize: 20,
              textTransform: 'uppercase'
            }}
          >
            CLICK TO CHECK YOUR PRODUCT
          </Text>

      
         
             <FlatList
        data={DATA}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      

<Modalize ref={modalizeRef} adjustToContentHeight={true}>
          

          <View>
              <Text 
      style={{color:'#4632A1', fontSize: 19, marginTop:45,textTransform: 'uppercase', textAlign:"center" }}>Enter you're serial numbers</Text>

  



<TextInput 
placeholder="Serial Number"
placeholderTextColor="#666666"

style={{
    alignSelf:"center",
margin:30,
textAlign:'center',
width:300,
padding: 14,
borderColor: '#012AAB',
borderWidth:1,
borderRadius:18,
fontFamily:'Avenir-Medium',
fontSize:16

}}></TextInput>

          </View>
      <TouchableOpacity
      onPress={() => navigation.navigate('check')}>
<LottieView 
style={{width:100,alignSelf:'center'}}
source={require('../assets/go.json')}autoPlay loop /> 
</TouchableOpacity>
</Modalize>


     </View>
 
 );
}




export default Home;
const styles = StyleSheet.create ({
flatt: {
height: 200,
width: 170,
borderRadius: 15,

},
linear: {
  
  height:100,
  borderBottomLeftRadius:40,
  borderBottomRightRadius:40,
  paddingHorizontal:20,
  justifyContent:'space-around',
  backgroundColor:'#0D62D1',
  flexDirection:'column',
}
});