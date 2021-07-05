import React from 'react'
import { StyleSheet, View, Text } from "react-native";

const Sandbox = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>one</Text>
      <Text style={styles.boxTwo}>two</Text>
      <Text style={styles.boxThree}>three</Text>
      <Text style={styles.boxFour}>four</Text>
    </View>
  )
}

const styles = StyleSheet.create({
 container:{
   backgroundColor:"#333",
   paddingTop:40,
  //  flex:1,
   flexDirection:"row",
   justifyContent:"flex-end"
 },
 boxOne:{
   backgroundColor:"violet",
   padding:10,
 },
 boxTwo:{
   backgroundColor:"gold",
   padding:10,
 },
 boxThree:{
   backgroundColor:"coral",
   padding:10,
 },
 boxFour:{
   backgroundColor:"green",
   padding:10,
 }
})

export default Sandbox
