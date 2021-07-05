import React, { useState } from 'react'
import { StyleSheet, Button, Text, View, TextInput } from "react-native";


const AddTodo = ({submitHandler}) => {
  const [text, setText] = useState("")
  const changeHandler = (text) => {
    setText(text)
  }

  return (
    <View>
      <TextInput
      placeholder="new todo..."
      onChangeText={changeHandler}
      style={styles.input}
      />
      <Button onPress={()=>submitHandler(text)} title="add" color="coral"/>
    </View>
  )
}

const styles = StyleSheet.create({
  input:{
    padding:10,
    borderBottomWidth:1,
    borderBottomColor:"#ddd"
  }
})

export default AddTodo
