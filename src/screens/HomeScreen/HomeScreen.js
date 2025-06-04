import { Button, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import iconHome from '@expo/vector-icons/AntDesign';


function HomeScreen() {
  const navigation = useNavigation();
  const [mensaje, setMensaje] = useState("");
  const onPressAlert = () => {
    if (mensaje.trim() === "") {
      alert("Ingresa un mensaje.");
    } else {
      alert(mensaje);
    }
  };
  return (
    
    <View>
      <Text>Home</Text>
      <TextInput placeholder='¿Como estás?' value={mensaje} keyboardType="default" onChangeText={(texto) => setMensaje(texto)}></TextInput>
      <Button title='Ver noticia' onPress={() => navigation.navigate("NoticeScreen")}/>
      <TouchableOpacity style={styles.button} onPress={onPressAlert}>
        <Text>Ver mensaje</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#40E0D0",
    padding: 10,
    marginTop: 15,
    borderRadius: 10,
    alignItems: "center",
  },
})