import React,{useState} from 'react';
import {SafeAreaView,Text,Button,TextInput,View,StyleSheet,TouchableOpacity} from 'react-native';

export default function Login({navigation}) {

  const[text,onChangeText]=useState();
  const[password,onChangepassword]=useState();
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'azure',alignItems:'center',justifyContent:'center'}}>
    <View style={styles.veriGiris}>
      <Text>UserName:</Text>
      <TextInput 
        onChangeText={onChangeText}
        value={text}
      />
    </View>

     <View style={styles.veriGiris}>
      <Text>Password:</Text>
      <TextInput 
        onChangeText={onChangepassword}
        value={password}
      />
    </View>
    <View style={{flexDirection:'row',padding:5}}>
     <TouchableOpacity style={styles.butonlar} onPress={()=>navigation.navigate("Home")}><Text>Login</Text></TouchableOpacity>
     <View style={styles.butonlar}><Text onPress={()=>navigation.navigate("SignIn")}>Sign In</Text></View>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  butonlar:{
    padding:5,
    margin:5,
    height:50,
    width:100,
    backgroundColor:'orange',
    border:3,
    borderColor:'orange',
    borderRadius:35,
    justifyContent:'center',
    alignItems:'center'
  },
  veriGiris:{
     padding:5,
    margin:5,
    height:30,
    width:'90%',
    backgroundColor:'orange',
    border:3,
    borderColor:'orange',
    borderRadius:35,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row'
  }
})