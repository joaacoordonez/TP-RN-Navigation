import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import React from "react";
import Producto from "../../../assets/Producto.png";

const ResultsSearchScreen = () => {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Budín Fantasía sabor limón</Text>
      <Image source={Producto} style={styles.imagen} />
      <Text style={styles.titulo}>Precio: 3500$ ARS</Text>
      <Text style={styles.titulo}>
        Budín con relleno sabor a limón recubierto con baño de repostería.
        Presentación: 160 g. Categorías: Budines, Navidad
      </Text>
    </View>
  );
};

export default ResultsSearchScreen;

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f2f2f2", // Fondo suave y neutro
  },
  titulo: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 10,
    textAlign: "center",
    color: "#333", // Gris oscuro, más descansado que negro puro
  },
  imagen: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 10,
    marginBottom: 15,
    backgroundColor: "#ddd", // Por si la imagen tarda en cargar
  },
});
