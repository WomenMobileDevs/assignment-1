import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { api } from './module/index/api';
import { fetchMethod } from './module/index/utils/fetchMethod';
import DisplayPokemon from './module/index/components/DisplayPokemon';

const App = () => {

  const [pokemon,setPokemon] = useState([])

  useEffect(() => {   
    getPokemon()
  },[])

  const getPokemon = async() => {
    const getRes = await fetchMethod(api.FETCH_POKEMON)
    setPokemon(getRes)
  }

  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Pokemon🐻</Text>
      <DisplayPokemon pokemon={pokemon} />

    </SafeAreaView>
  )
}


export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBA1B7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontWeight:'bold',
    fontSize:30,
    marginTop:25
  }
});
