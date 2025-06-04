import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [nombre, setNombre] = useState("");
  const [numTel, setNumTel] = useState("");
  return (
    <View>
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
        title="Continuar"
        onPress={() =>
          navigation.navigate("ShowProfileScreen", { nombreUsuario: nombre, numeroDeTelefono: numTel })
        }
      />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
  },
});
