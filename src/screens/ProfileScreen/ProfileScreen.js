import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [nombre, setNombre] = useState("");
  const [numTel, setNumTel] = useState("");
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Ingresá tus datos</Text>
      <TextInput
        placeholder="Ingresá tu nombre"
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        placeholder="Ingresá tu número de teléfono"
        value={numTel}
        onChangeText={setNumTel}
      />
      <Button
        color="#40E0D0"
        title="Continuar"
        onPress={() =>
          navigation.navigate("ShowProfileScreen", {
            nombreUsuario: nombre,
            numeroDeTelefono: numTel,
          })
        }
      />
    </View>
  );
};

export default ProfileScreen;

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
});
