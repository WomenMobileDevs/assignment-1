import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PokeMonCard = ({name,url}) => {

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{name}</Text>
      <Text>{url}</Text>
    </View>
  )
}

export default PokeMonCard

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#FFD1DA',
        borderRadius: 8,
        padding: 16,
        margin: 16,
      },
      image: {
        width: 200,
        height: 200,
      },
      title:{
        fontSize:20,
        fontWeight:'bold'

      }
})