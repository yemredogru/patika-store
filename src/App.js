import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet,FlatList, Text, View,TextInput } from 'react-native';
import store_data from './data/product_data.json';
import StoreCard from './components/cards';
export default function App() {
  const renderItems=({item})=><StoreCard storeData={item}/>
  return (
   <SafeAreaView style={styles.container}>
    <Text style={styles.header}>PATIKASTORE</Text>
    
     <FlatList
      ListHeaderComponent={
        <TextInput
        style={styles.input_area}
        placeholder="Ara..."
  
        />
    }
     key={2}
     numColumns={2}
     keyExtractor={item => item.id.toString()}
      data={store_data}
      renderItem={renderItems}
     />
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#eceff1"
  },
  header: {
    marginTop:10,
    color:`#9400d3`,
    fontSize:24,
    marginLeft:10,
  },
  input_area:{
    padding:10,
    marginTop:15,
    marginLeft:10,
    marginRight:10,
    borderWidth:1,
    height: 40,
    borderRadius:10,
    backgroundColor:'#d3d3d3'
  }
});
