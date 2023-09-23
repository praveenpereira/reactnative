import React from 'react';
import {View, Text, Image, TextInput,Button, SafeAreaView, StyleSheet } from 'react-native'; 
import Login from "./screens/Login";
import Otp from "./screens/Otp";




const App=()=>{
  return(
    <View style={{marginVertical:30}}>
   <Login/>
    </View>
  )
}
export default App;