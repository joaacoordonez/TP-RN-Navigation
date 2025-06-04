import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const ShowProfileScreen = ({ route }) => {
  const { nombreUsuario, numeroDeTelefono } = route.params;
  return (
    <View>
      <Text>Bienvenido, {nombreUsuario}!</Text>
      <Text>Tu número de Teléfono es: {numeroDeTelefono}.</Text>
    </View>
  )
}

export default ShowProfileScreen

const styles = StyleSheet.create({})