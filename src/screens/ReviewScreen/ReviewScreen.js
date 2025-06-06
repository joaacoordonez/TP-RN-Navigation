import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const ReviewScreen = () => {
  const navigation = useNavigation();
  const [review, setReview] = useState("");
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Dejá tu opinión</Text>
      <TextInput
        placeholder="Ingresá tu review"
        value={review}
        onChangeText={setReview}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate("VerReviewScreen", { review: review })
        }
      >
        <Text>Ver mi review</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ReviewScreen;

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
