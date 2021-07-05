import React from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

const TodoItem = ({data, pressHandler}) => {
  return (
    <TouchableOpacity onPress={() => pressHandler(data.key)} >
      <View style={styles.item}>
        <Text>{data.text}</Text>
        <MaterialIcons name="delete" size={18}/>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item:{
    padding: 16,
    marginTop:16,
    borderColor:"#bbb",
    borderWidth:1,
    borderRadius: 10,
    borderStyle:"dashed",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between"
  }
})

export default TodoItem
