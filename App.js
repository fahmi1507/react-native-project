import React, { useState } from "react";
import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from "react-native";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' }
  ]);

  const pressHandler = (key) => {
    setTodos((prev) =>  prev.filter(e => e.key !== key ))
  }

  const submitHandler = (text) => {
    if (text.length > 3) {
      Keyboard.dismiss()
      setTodos((prev) => [{text, key:Math.random().toString()},...prev])
    } else {
      Alert.alert('Oops!', "Todos must be over 3 chars long", [{text:"close", onPress:()=>console.log('alert closed')}])
    }
  }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        {/* header */}
        <Header/>
        <View style={styles.content}>
          {/* todo form */}
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
            data={todos}
            renderItem={({item}) => (<TodoItem pressHandler={pressHandler}
            data={item}/>)}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content:{
    paddingHorizontal:30,
    paddingBottom:20,
    flex:1
  },
  list:{
    marginTop:10,
    flex:1
  }
});
