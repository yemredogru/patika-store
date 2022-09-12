import React from 'react';
import {View,Text,Image} from 'react-native';
import styles from './cardsStyle';
const StoreCard=({storeData})=>{
console.log(storeData)
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{uri:storeData.imgURL}}/>
            <View style={styles.inner_container}>
            <Text style={styles.title}>{storeData.title}</Text>
            <Text style={styles.price}>{storeData.price}</Text>
            <Text style={styles.stock}>{storeData.inStock === true ? '' : 'Stokta Yok'}</Text>
            </View>
        </View>
    )
}

export default StoreCard;