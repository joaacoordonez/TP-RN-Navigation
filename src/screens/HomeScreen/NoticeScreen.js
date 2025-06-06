import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Noticia from "../../../assets/Noticia.jpg";

const NoticeScreen = () => {
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
      <Text style={styles.titulo}>
        El golazo de chilena de Maravilla Martínez para la victoria agónica de
        Racing
      </Text>
      <Image source={Noticia} style={styles.imagen} />
      <TextInput
        value={mensaje}
        placeholder="¿Y vos, pensás que Maravilla Martinez pide Selección Argentina? Dejanos tu comentario"
        keyboardType="default"
        onChangeText={(texto) => setMensaje(texto)}
      ></TextInput>
      <TouchableOpacity style={styles.button} onPress={onPressAlert}>
        <Text>Ver mensaje</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NoticeScreen;

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
  imagen: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 12,
  },
  button: {
    backgroundColor: "#40E0D0",
    padding: 10,
    marginTop: 15,
    borderRadius: 10,
    alignItems: "center",
  },
});
