import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";

const VerReviewScreen = ({ route }) => {
  const { review } = route.params;
  const [mensaje, setMensaje] = useState("");
  const onPressAlert = () => {
    if (mensaje.trim() === "") {
      alert("Ingresa tu mail.");
    } else {
      alert("Mail enviado con exito");
    }
  };
  return (
    <View>
      <Text>Tu review es: {review}!</Text>
      <TextInput
        value={mensaje}
        placeholder="Dejá tu mail para recibir novedades"
        keyboardType="default"
        onChangeText={(texto) => setMensaje(texto)}
      ></TextInput>
      <TouchableOpacity style={styles.button} onPress={onPressAlert}>
        <Text>Enviar mail</Text>
      </TouchableOpacity>
    </View>
  );
};

export default VerReviewScreen;

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
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
