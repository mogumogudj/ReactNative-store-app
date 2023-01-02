import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const ShoppingCart = cartprops => {

  const navigation = useNavigation();

  const [itemAmount, setItemAmount] = useState(1);
  const [totalprice, setTotalprice] = useState('');

  function addition() {
    if(itemAmount<8){
      setItemAmount((currenItemAmount) => currenItemAmount + 1);
    }
  }
  function subtraction(){
    if(itemAmount>1){
      setItemAmount((currenItemAmount) => currenItemAmount - 1);
    }
  }

  function orderCalc(){
    setTotalprice(cartprops.price * itemAmount);
  }

  // function logging(){
  //   console.log(totalprice);
  // }

  useEffect(() => {
    orderCalc();
  }, [itemAmount]);

  return(
    <View style={styles.listItem}>
      
      <Image style={styles.imagestyle} source={{uri: cartprops.image}}/>

      <Text style={styles.content}>{cartprops.title}</Text>
      <Text style={styles.content}>price for one adult: €{cartprops.price}</Text>

      <View style={styles.addsub}>

        <Pressable onPress={subtraction}>
          <Text style={styles.minibuttons}>-</Text>
        </Pressable>

        <Text style={styles.content}>{itemAmount}</Text>

        <Pressable onPress={addition}>
          <Text style={styles.minibuttons}>+</Text>
        </Pressable>

      </View>

      <Text style={styles.content}>totaal: €{totalprice}</Text>

      <Pressable style={styles.orderbutton} onPress={() => navigation.navigate('OrderScreen', {OrderTotal: totalprice})}>
          <Text style={styles.buttontext}>ORDER NOW</Text>
      </Pressable>

    </View>
  );

}

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      paddingTop: 50,
      backgroundColor: "#000000",
  
    },
    content: {
      alignContent: 'stretch',
      padding: 10,
      color: "#ffffff",
    },
    listItem: {
        padding: 10,
        marginVertical: 5,
        borderColor: '#C94838',
        borderStyle: 'solid',
        borderWidth: 0.5,
      },
    addsub: {
      marginLeft: 10,
      flexDirection: 'row',
    },
    imagestyle: {
      height: 200,
    },
    orderbutton: {
      backgroundColor: "#222222",
      paddingVertical: 10,
      width: '100%',
      marginTop: 10,
    },
    buttontext: {
      textAlign: 'center',
      color: "#C94838", 
      fontSize: 16,
    },
    minibuttons: {
      padding: 10,
      backgroundColor: "#222222",
      color: "#C94838",
  },
  });

export default ShoppingCart;