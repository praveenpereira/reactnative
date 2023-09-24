import React from 'react';
import {View, Text, Image, TextInput, TouchableOpacity,onPress } from 'react-native'; 



const Otp=()=>{


const handleSubmit=(e)=>{
e.preventDefault();
alert('Your details has been submitted');
}

  return(
    <View style={{marginVertical:30}}>
    <View style={{marginVerical:20}}>
    <Text style={{fontSize:25,fontFamily:'bold', fontWeight:'bold',alignSelf:'center',color:'red',marginVerical:10}}>OTP Verify</Text>
    </View>
    <View style={{marginHorizontal:20,marginVertical:20,borderRadius:20}}>
    <Image source={require('../img/student.png')}
     style={{width:'35%',alignSelf:'center'}}
    />
    </View>

    <View style={{alignSelf:'center',marginTop:20}}>
    <Text style={{color:'grey'}}>OTP Sent to</Text>
    <Text style={{fontWeight:'semiBold'}}>+91 12345 67899</Text>
    </View> 
    
    <View>
    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', marginTop:15,}}>
    <View>
    <TextInput  style={{backgroundColor:'lightgray', marginHorizontal:5,width:40,borderWidth:.5,borderRadius:7,padding:4}}/>
    </View>
    <View>
    <TextInput width="2%" style={{backgroundColor:'lightgray', marginHorizontal:5,width:40,
    borderWidth:.5,borderRadius:7,padding:4
    }}/>
    </View>
    <View>
    <TextInput width="2%" style={{backgroundColor:'lightgray', marginHorizontal:5,width:40,
    borderWidth:.5,borderRadius:7,padding:4
    }}/>
    </View>
    <View>
    <TextInput width="2%" style={{backgroundColor:'lightgray', marginHorizontal:5,width:40,
    borderWidth:.5,borderRadius:7,padding:4
    }}/>
    </View> 
    </View>  
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
      paddingVertical:10,
      borderRadius:23,
      backgroundColor:'red'
      
    }}>
     <TouchableOpacity onPress={handleSubmit}>
    <Text style={{color:'white',fontWeight:'bold',fontSize:12,paddingHorizontal:60 }}>Verify OTP</Text>
     </TouchableOpacity>
    </View>
    <View style={{marginVertical:15}}>
   
    <Text style={{color:'grey',fontSize:11,alignSelf:'center'}}>
    By signing up, you agree with our Terms and Conditions.
    </Text>
    </View>
    </View>
  )
}
export default Otp;
