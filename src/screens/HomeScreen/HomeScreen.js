import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

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
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Home</Text>
      <TextInput
        placeholder="¿Como estás?"
        value={mensaje}
        keyboardType="default"
        onChangeText={(texto) => setMensaje(texto)}
      ></TextInput>
      <TouchableOpacity style={styles.button} onPress={onPressAlert}>
        <Text>Ver mensaje</Text>
      </TouchableOpacity>
      <Button
        color="#40E0D0"
        title="Ver noticia"
        onPress={() => navigation.navigate("NoticeScreen")}
      />
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 12,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#40E0D0",
    padding: 10,
    marginBottom: 15,
    borderRadius: 10,
    alignItems: "center",
  },
});
