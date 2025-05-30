import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const ShowProfileScreen = ({ route }) => {
  const { nombreUsuario } = route.params;
  return (
    <View>
      <Text>Bienvenido, {nombreUsuario}!</Text>
    </View>
  )
}

export default ShowProfileScreen

const styles = StyleSheet.create({})