import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}> My todo</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header:{
    height: 80,
    paddingTop: 40,
    backgroundColor: 'coral'
  },
  title:{
    textAlign:'center',
    color:"#fff",
    fontSize:20,
    fontWeight:"bold"
  }
})

export default Header
