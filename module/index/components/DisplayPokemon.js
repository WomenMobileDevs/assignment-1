import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PokeMonCard from './PokeMonCard'


const DisplayPokemon = ({pokemon}) => {
  return (
    <View>
      <FlatList data={pokemon} keyExtractor={(item) => {item.name}} renderItem={({item}) => <PokeMonCard name={item.name} url={item.url} />} />
    </View>
  )
}

export default DisplayPokemon

const styles = StyleSheet.create({})