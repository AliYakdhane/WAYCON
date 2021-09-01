import React from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, Linking, Image } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import Svg, {
    G,
    Path,
    Rect,
    Defs,
  } from 'react-native-svg';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { AuthContext } from '../Components/context'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



    const originalWidth = 345;
    const originalHeight = 108;
    const aspectRatio = originalWidth / originalHeight;
    const windowWidth = Dimensions.get("window").width;



export const DrawerContent = (props) => {

    const { SignOut } = React.useContext(AuthContext)

    const paperTheme = useTheme();

    return (
        <View style={{flex:1, backgroundColor: '#2c2c2c'}}>
            <DrawerContentScrollView {...props} showsVerticalScrollIndicator ={false}>
                <View style={styles.drawerContent}>
                <View style={{ width: windowWidth, aspectRatio, marginTop: -5, }}> 
                
                <Svg width="100%" height="100%" viewBox={`0 0 ${originalWidth} ${originalHeight}`} fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute' }}>
<Path d="M0.109772 103.639C0.109772 103.639 15.5373 44.7555 164.092 83.8777C312.647 123 373.676 101.73 375.11 103.304L374.501 -577L-0.499257 -576.664L0.109772 103.639Z" fill="white"/>
</Svg>

<View style={{ flexDirection: 'row'}}>
    <TouchableOpacity onPress={() => props.navigation.navigate('home')}>
        <Svg width="24" height="30" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginLeft: 20, marginTop: 30 }}>
            <Path d="M1.45312 30H4.08984V27.2461C4.08984 26.7603 4.48295 26.3672 4.96875 26.3672C5.45455 26.3672 5.84766 26.7603 5.84766 27.2461V30H18.1523V27.2461C18.1523 26.7603 18.5454 26.3672 19.0312 26.3672C19.5171 26.3672 19.9102 26.7603 19.9102 27.2461V30H22.5469C23.0323 30 23.4258 29.6065 23.4258 29.1211V26.3672C23.4258 22.9694 20.6713 20.2149 17.2734 20.2149H16.3945C16.3945 22.6379 14.423 24.6094 12 24.6094C9.57697 24.6094 7.60547 22.6379 7.60547 20.2149H6.72656C3.32871 20.2149 0.574219 22.9694 0.574219 26.3672V29.1211C0.574219 29.6065 0.967734 30 1.45312 30Z" fill="#FA4A0C"/>
            <Path d="M9.40042 20.5822C9.58107 21.8612 10.6718 22.8516 12 22.8516C13.3281 22.8516 14.4189 21.8612 14.5996 20.5822C13.7937 20.9049 12.9198 21.0938 12 21.0938C11.0802 21.0938 10.2063 20.9049 9.40042 20.5822Z" fill="#FA4A0C"/>
            <Path d="M17.2734 14.0625V8.78906H6.72656V14.0625C6.72656 16.975 9.08754 19.3359 12 19.3359C14.9125 19.3359 17.2734 16.975 17.2734 14.0625ZM12 16.6992C10.5461 16.6992 9.36328 15.5164 9.36328 14.0625C9.36328 13.5767 9.75639 13.1836 10.2422 13.1836C10.728 13.1836 11.1211 13.5767 11.1211 14.0625C11.1211 14.5474 11.5151 14.9414 12 14.9414C12.4849 14.9414 12.8789 14.5474 12.8789 14.0625C12.8789 13.5767 13.272 13.1836 13.7578 13.1836C14.2436 13.1836 14.6367 13.5767 14.6367 14.0625C14.6367 15.5164 13.4539 16.6992 12 16.6992Z" fill="#FA4A0C"/>
            <Path d="M19.7299 6.24318C20.0501 6.08269 20.2415 5.74449 20.2132 5.3883C20.1849 5.03123 19.9436 4.72742 19.602 4.61925L18.211 4.01843V1.85293C18.211 1.55082 18.0556 1.26927 17.799 1.10879C17.5423 0.947418 17.2205 0.929371 16.9501 1.06156L14.5741 2.21088L12.6214 0.258239C12.2781 -0.0850623 11.7219 -0.0850623 11.3786 0.258239L9.42593 2.21088L7.04989 1.06162C6.77954 0.931129 6.45593 0.949176 6.20104 1.10884C5.9444 1.26933 5.78907 1.55088 5.78907 1.85298V4.01849L4.398 4.61931C4.05639 4.72748 3.81522 5.03129 3.78686 5.38836C3.75856 5.74455 3.94993 6.08275 4.27009 6.24324L6.72657 7.03197H17.2735L19.7299 6.24318Z" fill="#FA4A0C"/>
        </Svg>
        </TouchableOpacity>

        <Text style={{fontSize: 20, fontWeight: 'bold', color: '#2c2c2c', marginTop: 30, marginLeft: 50}}>User Name</Text>
        
    <TouchableOpacity>
    <Svg width="24" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginTop: 30, marginLeft: 50 }}>
        <Path d="M25.4109 25.3038L23.2646 21.7263C22.2734 20.075 21.7496 18.1838 21.7496 16.2588V13.125C21.7496 9.16875 19.1096 5.82252 15.4996 4.74375V2.50002C15.4996 1.12125 14.3783 0 12.9996 0C11.6208 0 10.4996 1.12125 10.4996 2.50002V4.74375C6.8896 5.82252 4.2496 9.16875 4.2496 13.125V16.2588C4.2496 18.1838 3.72583 20.0737 2.73583 21.725L0.589599 25.3025C0.473349 25.4963 0.47083 25.7363 0.5821 25.9325C0.693369 26.1288 0.899619 26.2501 1.12462 26.2501H24.8746C25.0996 26.2501 25.3071 26.1288 25.4184 25.9338C25.5296 25.7388 25.5259 25.4963 25.4109 25.3038Z" fill="#2C2C2C"/>
        <Path d="M9.06339 27.5C9.76838 28.9725 11.2609 30 12.9996 30C14.7383 30 16.2309 28.9725 16.9359 27.5H9.06339Z" fill="#2C2C2C"/>
    </Svg>
    </TouchableOpacity>    
        
</View>


</View>

                    <View style={styles.userInfoSection}>

                    <View style={{flexDirection:'column', alignItems: 'center'}}>
                        <TouchableOpacity onPress={() => props.navigation.navigate('profile')}>
                            <Avatar.Image 
                                source={require('../assets/man.jpg')}
                                size={100}
                                style={{marginRight: 20}}
                            />
                        </TouchableOpacity>
                            
                            <Text style={{fontSize: 20, fontWeight: 'bold', color: '#ffffff', marginTop: 10, marginRight: 20 }}>User Name</Text>
                           
                            <View style={styles.section}>
                            <Paragraph style={styles.paragraph}>Historiques</Paragraph>
                                <Caption style={styles.caption}>33</Caption>
                            </View>
                           
                        </View>
                        </View>


                        <TouchableOpacity 
                        onPress={() => {SignOut()}}
                        style={{flexDirection:'column',marginTop: 20, width: '50%', height: 50, backgroundColor: '#FA4A0C', borderRadius: 20, alignSelf: 'center', marginRight: 20}}>
                                <Text style={{ fontWeight:'bold', fontSize: 13, color: '#ffffff', alignSelf: 'center', marginLeft: 10, padding: 15 }}>Déconnexion </Text>
                                
                        </TouchableOpacity>

                        <View
                        style={{
                        borderBottomColor: '#ffffff',
                        borderBottomWidth: 1,
                        width: '90%',
                        marginRight: 20,
                        marginTop: 40,
                        alignSelf: "center"
                        }}
                        opacity={0.5}
                    />

                       


                        <View style={{ flexDirection: 'column', marginTop: 20, marginRight: 20}}>
                            <Image 
                                source={require('../assets/logo.png')}
                                size={50}
                                style={{ alignSelf: 'center' }}
                            />
                        </View>
                        

                        <TouchableOpacity 
                        onPress={() => {
                            Linking.openURL('https://www.facebook.com/profile.php?id=100002294798268');
                        }}
                        style={{ alignSelf: "center", marginTop: 10, flexDirection: "row", marginRight: 20, marginBottom: 40}}>
                        <Text note style={{ alignSelf:"center", fontWeight: 'bold', color: '#ffffff' }}>Made With Love </Text>
                        
                                
                                
                        <Text note style={{ color: "#FA4A0C",  alignSelf: "center", paddingBottom: 2, fontWeight: 'bold'}} > By Ali Yakdhane</Text>
                       
                    </TouchableOpacity>

                    </View>

                    
               
            </DrawerContentScrollView>
            
        </View>
    )
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
        backgroundColor: '#2c2c2c'
      },
      userInfoSection: {
        paddingLeft: 20,
      },
      title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
      },
      caption: {
        fontSize: 13,
        lineHeight: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#ffffff'
      },
      row: {
        margin: 20,
        flexDirection: 'row',
        alignItems: 'center',
      },
      section: {
        flexDirection: 'column',
        alignItems: 'center',
        marginRight: 15,
      },
      paragraph: {
        textAlign: 'center',
        color: '#ffffff'
      },
      drawerSection: {
        marginTop: 15,
      },
      bottomDrawerSection: {
          marginBottom: 15,
          borderTopColor: '#f4f4f4',
          borderTopWidth: 1
      },
      preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
      },
})