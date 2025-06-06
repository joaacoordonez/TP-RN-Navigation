import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Producto from "../../../assets/Producto.png";

const SearchScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Bienvenido al Buscador</Text>
      <Image source={Producto} style={styles.imagen} />
      <TextInput
        placeholder="¿Que puntaje le das del 1 al 10 a este producto?"
        keyboardType="number-pad"
      ></TextInput>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("ResultsSearchScreen")}
      >
        <Text>Ver Producto</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchScreen;

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
    resizeMode: "contain",
    borderRadius: 12,
    marginTop: 35,
  },
  button: {
    backgroundColor: "#40E0D0",
    padding: 10,
    marginTop: 15,
    borderRadius: 10,
    alignItems: "center",
  },
});
