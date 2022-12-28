import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button, FlatList, Image, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


import ShoppingCart from '../components/CartItem';


const CartScreen = ({ navigation, route }) => {

  const [newItem, setNewItem] = useState([]);
  const [cartItems, setCartItems] = useState(newItem);
  
  const getData = async () => {
    try{
      AsyncStorage.getItem('@cartItem')
      .then((value) => {
        if (value != null) {
          let itemdata = JSON.parse(value);
          setNewItem(itemdata);
          setCartItems((currentItems) => [...currentItems, newItem]);
        }
      })
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);



  return(

  <View style={styles.screen}>

    <Pressable onPress={() => {
      console.log(newItem);
      console.log(newItem.itemID);
      console.log(cartItems);
    }}>
      <ShoppingCart title={newItem.itemID}/>
    </Pressable>

    <FlatList
      keyExtractor={item => item.itemID}
      data={cartItems}
      renderItem={(item) => (
        <ShoppingCart
        title={item.item.itemTitle}
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