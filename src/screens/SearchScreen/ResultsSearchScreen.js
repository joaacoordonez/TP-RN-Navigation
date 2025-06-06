import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Producto from "../../../assets/Producto.png";

const ResultsSearchScreen = () => {
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
      <Text style={styles.titulo}>Budín Fantasía sabor limón</Text>
      <Image source={Producto} style={styles.imagen} />
      <Text style={styles.titulo}>Precio: 3500$ ARS</Text>
      <Text style={styles.titulo}>
        Budín con relleno sabor a limón recubierto con baño de repostería.
        Presentación: 160 g. Categorías: Budines, Navidad
      </Text>
      <TextInput
        value={mensaje}
        placeholder="Dejá un comentario acerca de este pedazo de budín"
        keyboardType="default"
        onChangeText={(texto) => setMensaje(texto)}
      ></TextInput>
      <TouchableOpacity style={styles.button} onPress={onPressAlert}>
        <Text>Ver mensaje</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ResultsSearchScreen;

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
  imagen: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 10,
    marginBottom: 15,
    backgroundColor: "#ddd",
  },
  button: {
    backgroundColor: "#40E0D0",
    padding: 10,
    marginTop: 15,
    borderRadius: 10,
    alignItems: "center",
  },
});
