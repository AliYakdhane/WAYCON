import { StatusBar } from 'expo-status-bar';
import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import OnBoarding from './Components/onBoarding'
import Auth from './Components/auth'
import SignIn from './Components/Sign/signin'
import SignUp from './Components/Sign/signup'
import SignUp2 from './Components/Sign/signup2'
import Home from './Components/home'
import Profile from './Components/Profile/profile'
import EditProfile from './Components/Profile/editprofile'
import Check from './Components/check'
import { createStackNavigator } from '@react-navigation/stack';
import { AuthContext } from './Components/context'





const App = () => {

  const Stack = createStackNavigator();
  return ( 
   <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="auth" component={Auth} />
        <Stack.Screen name="signin" component={SignIn} />
        <Stack.Screen name="signup" component={SignUp} />
        <Stack.Screen name="signup2" component={SignUp2} />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="profile" component={Profile} />
        <Stack.Screen name="check" component={Check} />
        <Stack.Screen name="editprofile" component={EditProfile} />
        
      </Stack.Navigator>
      <StatusBar style="auto" hidden />
      </NavigationContainer> 
    
      /*
  
      
 const [isLoading, setIsLoading] = React.useState(true)
  const [userToken, setUserToken] = React.useState(null)


  const authContext = React.useMemo(() => ({
    SignIn: () => {
      setUserToken('fgkj');
      setIsLoading(false);
    },
    SignOut: () => {
      setUserToken(null);
      setIsLoading(false);
    },
    SignUp: () => {
      setUserToken('fgkj');
      setIsLoading(false);
    },
 

  }));


  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000);
  }, [])

  if (isLoading) {
    return(
      
<View style={{flex:1, justifyContent: 'center', alignItems: 'center'}} >
  <ActivityIndicator  size='large'/>
</View>
    )
    
  }


  return (
    <AuthContext.Provider value={authContext}>
    <NavigationContainer>
    { userToken == null ? (
   <MyStack />
        
      ) : <MyTab />
       }
     
      <StatusBar style="auto" hidden />
      
    </NavigationContainer>
    </AuthContext.Provider>*/
     
  );
}



export default App