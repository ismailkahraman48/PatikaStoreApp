import React from 'react';
import { TextInput, View, FlatList, Text, StyleSheet, ScrollView, Dimensions, SafeAreaView } from "react-native";
import product_data from './Products.json'
import ProductCard from './components/ProductCard/ProductCard'

function App() {

  const renderProdcuts = ({ item }) => <ProductCard products={item} />
  const keyProducts = item => item.id.toString();

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.title}>PATIKA-STORE</Text>
      <TextInput value={Text} style={styles.input} placeholder={'Ara...'}></TextInput>

      <FlatList
        numColumns={2}
        keyExtractor={keyProducts}
        data={product_data}
        renderItem={renderProdcuts}/>

    </SafeAreaView>

  )
}

export default App;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    margin: 5
  },

  title: {
    fontWeight: 'bold',
    fontSize: 35,
    color: '#800080',
    marginBottom: 10
  },

  input: {
    fontSize: 20,
    height: 60,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: 'white',
    backgroundColor: '#ECEFF1',
    padding: 10,

  }


})