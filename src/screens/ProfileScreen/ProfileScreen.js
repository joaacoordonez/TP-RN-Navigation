import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [nombre, setNombre] = useState("");
  return (
    <View>
      <Text style={styles.titulo}>Ingresá tus datos</Text>
      <TextInput
        placeholder="Ingresá tu nombre"
        value={nombre}
        onChangeText={setNombre}
      />
      <Button
        title="Continuar"
        onPress={() =>
          navigation.navigate("ShowProfileScreen", { nombreUsuario: nombre })
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
