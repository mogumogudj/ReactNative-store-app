import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button, FlatList, Image, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


import ShoppingCart from '../components/CartItem';


const CartScreen = ({ navigation, route }) => {

  const [newItem, setNewItem] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  
  const getData = async () => {
    try{
      AsyncStorage.getItem('@newItem')
      .then((value) => {
        if (value != null) {
          let itemData = JSON.parse(value);
          setNewItem(itemData);
          // AsyncStorage.setItem('@cartList', JSON.stringify(cartItems));
          setCartItems([itemData]);
        }
      })
    } catch (error) {
      console.log(error);
    }
  }

  // const storeDataArray = async () => {
  //   try {
  //     await AsyncStorage.setItem('@cartList', JSON.stringify(newItem));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  useEffect(() => {
    getData();
  }, []);



  return(

  <View style={styles.screen}>

    <Pressable onPress={() => {
      // console.log(newItem);
      // console.log(newItem.itemID);
      console.log(cartItems);
    }}>
      <Text style={styles.testlist}>debug console button</Text>
    </Pressable>

    <FlatList
      keyExtractor={item => item.itemID}
      data={cartItems}
      renderItem={(item) => (
        <ShoppingCart
        title={item.item.itemTitle}
        price={item.item.itemMeta[7]}
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