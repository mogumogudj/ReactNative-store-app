import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, Text, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


import ShoppingCart from '../components/CartItem';


const CartScreen = ({ navigation, route }) => {

  const [cartItems, setCartItems] = useState([]);
  const [oldItem, setOldItem] = useState([]);

  const getData = async () => {
    try{
      AsyncStorage.getItem('@newCartItem')
      .then((value) => {
          let itemData = JSON.parse(value);
          setCartItems([...oldItem, itemData]);
      })
    } catch (error) {
      console.log(error);
    }
  }

  const getOldItemData = async () => {
    try{
      AsyncStorage.getItem('@cartList')
      .then((value) =>{
        let cartData = JSON.parse(value);
        setOldItem(cartData);
      })
    }catch (error) {
      console.log(error);
    }
  }

  // const storeDataArray = async () => {
  //   try {
  //     await AsyncStorage.setItem('@cartList', JSON.stringify(cartItems));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  useEffect(() => {
    getOldItemData();
    getData();
  }, []);

  function test(){
    console.log(cartItems[0].itemMeta[7]);
  }



  return(

  <View style={styles.screen}>

    {/* <Pressable
        onPress={() => {
          console.log('- - - - - - - - - - - - - - -');
          console.log(cartItems);
          console.log(oldItem);
        }}
      >
      <Text style={styles.testlist}>debug console button</Text>
    </Pressable> */}

    <FlatList
      keyExtractor={item => item.itemID}
      data={cartItems}
      renderItem={(item) => (
        <ShoppingCart
        title={item.item.itemTitle}
        price={item.item.itemMeta[7]}
        image={item.item.itemImage}
        />
        )}
    
    />
    
    {/* <Pressable style={styles.orderbutton} onPress={test}>
      <Text style={styles.buttontext}>ORDER NOW</Text>
    </Pressable> */}

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
    },
    orderbutton: {
      backgroundColor: "#222222",
      paddingVertical: 10,
      width: '100%',
      marginTop: 100,
    },
    buttontext: {
      textAlign: 'center',
      color: "#C94838", 
      fontSize: 16,
    },
  });
  
export default CartScreen;