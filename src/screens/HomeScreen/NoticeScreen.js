import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import React from "react";
import Noticia from "../../../assets/Noticia.jpg";

const NoticeScreen = () => {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>
        El golazo de chilena de Maravilla Martínez para la victoria agónica de
        Racing
      </Text>
      <Image source={Noticia} style={styles.imagen} />
      <TextInput
        placeholder="¿Y vos, pensás que Maravilla Martinez pide Selección Argentina? Dejanos tu comentario"
        keyboardType="default"
      ></TextInput>
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
});
