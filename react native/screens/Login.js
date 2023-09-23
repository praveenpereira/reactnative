import React from 'react';
import {View, Text, Image, TextInput,Button, SafeAreaView, StyleSheet } from 'react-native'; 



const Login=()=>{
  return(
    <View style={{marginVertical:30}}>
    <View style={{marginVerical:20}}>
    <Text style={{fontSize:25,fontFamily:'bold', fontWeight:'bold',alignSelf:'center',color:'red',marginVerical:10}}>Login</Text>
    </View>
    <View style={{marginHorizontal:20,marginVertical:20,borderRadius:20}}>
    <Image source={require('../img/student.png')}
     style={{width:'35%',alignSelf:'center'}}
    />
    </View>

    <View style={{
      flexDirection:'row',
      alignItems:'center',
      marginHorizontal:55,
      borderWidth:2,
      marginTop:50,
      paddingHorizontal:10,
      borderColor:'grey',
      paddingVertical:7,
      borderRadius:23
    }}>
    <TextInput
    placeholder="+91 . Phone Number"
    placeholderTextColor='lightGrey'
    style={{paddingHorizontal:20,paddingVertical:4}}
    
    />
    </View>
    <View style={{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      marginHorizontal:55,
      borderWidth:2,
      marginTop:30,
      paddingHorizontal:10,
      borderColor:'grey',
      paddingVertical:7,
      borderRadius:23,
      backgroundColor:'red'
    }}>
    <Text style={{color:'white',fontWeight:'bold',fontSize:12,paddingHorizontal:60}}>Get OTP</Text>
    </View>
    <View style={{marginVertical:15}}>
    <Text style={{color:'grey',fontSize:11,alignSelf:'center'}}>
    By signing up, you agree with our Terms and Conditions.
    </Text>
    </View>
    </View>
  )
}
export default Login;