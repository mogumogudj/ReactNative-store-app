import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button, FlatList, Image, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


import ShoppingCart from '../components/CartItem';


const CartScreen = ({ navigation, route }) => {

  const [cartItems, setCartItems] = useState('');

  useEffect(() => {
    getData();
  }, []);

  
const getData = async () => {
  try{
    AsyncStorage.getItem('@piep')
    .then((value) => {
      if (value != null) {
        setCartItems(value);
      }
    })
  } catch (error) {
    console.log(error);
  }

}


  return(

  <View style={styles.screen}>

    <Pressable onPress={() => {
      getData;
      console.log(cartItems);
      console.log(cartItems.itemID);
    }}>
      <ShoppingCart title={cartItems}/>
    </Pressable>

    <FlatList
      keyExtractor={item => item.itemID}
      data={cartItems}
      renderItem={(item) => (
        <ShoppingCart
        title={item.itemID}
        />
        )}
    
    />

  </View>

  );

}

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      paddingTop: 50,
      backgroundColor: "#000000"
    },
    imagestyle: {
      height: 18,
    },
    testlist: {
      paddingLeft: 20,
      color: "#ffffff"
    }
  });
  
export default CartScreen;