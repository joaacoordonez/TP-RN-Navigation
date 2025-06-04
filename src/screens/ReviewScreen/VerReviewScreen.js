import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const VerReviewScreen = ({ route }) => {
  const { review } = route.params;
  return (
    <View>
      <Text>Tu review es: {review}!</Text>
    </View>
  )
}

export default VerReviewScreen

const styles = StyleSheet.create({})