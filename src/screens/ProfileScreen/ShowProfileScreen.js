import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

const ShowProfileScreen = ({ route }) => {
  const { nombreUsuario, numeroDeTelefono } = route.params;
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
      <Text>Bienvenido, {nombreUsuario}!</Text>
      <Text>Tu número de Teléfono es: {numeroDeTelefono}.</Text>
      <Text style={styles.titulo}>Agregá más información:</Text>
      <TextInput
        value={mensaje}
        placeholder="¿Cual es tu comida favorita?"
        keyboardType="default"
        onChangeText={(texto) => setMensaje(texto)}
      ></TextInput>
      <TouchableOpacity style={styles.button} onPress={onPressAlert}>
        <Text>Ver mensaje</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ShowProfileScreen;

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
    marginTop: 15,
    borderRadius: 10,
    alignItems: "center",
  },
});
