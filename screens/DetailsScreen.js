import { StyleSheet, View, Image, Text, Pressable, } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const DetailsScreen = ({ navigation, route }, ) => {

  const storeNewItem = async () => {
    try {
      await AsyncStorage.setItem('@newCartItem', JSON.stringify(route.params)).then(
      navigation.navigate('CartScreen', {cartData: route.params}))
      // console.log(route.params);
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <View style={styles.screen}>

      <Image style={styles.imagestyle} source={{uri: route.params.itemImage}}/>

      <View style={styles.content}>
        <Text style={styles.detailtitle} >{route.params.itemTitle}</Text>
        <Text style={styles.contentText} >- For {route.params.itemMeta[1]} person(s)</Text>
        <Text style={styles.contentText} >- For {route.params.itemMeta[0]} days</Text>
        <Text style={styles.contentText} >- In a scenery of {route.params.itemMeta[5]}</Text>
        <Text style={styles.contentText} >- Lunch: {route.params.itemMeta[2]}</Text>
        <Text style={styles.contentText} >- Guided: {route.params.itemMeta[3]}</Text>
        <Text style={styles.contentText} >- Courses: {route.params.itemMeta[4]}</Text>
        <Text style={styles.contentText} >- Type of exercise and sport: {route.params.itemMeta[6]}</Text>
        <Text style={styles.contentPrice} >  PRICE: €{route.params.itemMeta[7]} </Text>
        <Text></Text>
      </View>

      <View style={styles.cartbutton}>
        <Pressable onPress={() => storeNewItem(route.params)}>
          <Text style={styles.cartbuttontext}>add to shoppingcart</Text>
        </Pressable>
      </View>

      <View style={styles.alignbutton}>
        <Pressable style={styles.backbutton} onPress={() => {navigation.navigate('TravelsScreen');}}>
          <Text style={styles.buttontext}>go back to overview</Text>
        </Pressable>
      </View>

    </View>
  );

}



const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#000000"

  },
  content: {
    alignContent: 'stretch',
    padding: 10,
  },
  contentText:{
    color: "#B7B7B7",  
  },
  contentPrice: {
    paddingTop: 20,
    color: "#B7B7B7",
    fontWeight: 'bold',
  },
  imagestyle: {
    height: 300,
  },
  backbutton: {
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
  detailtitle: {
    fontWeight: 'bold',
    fontSize: 30,
    color: "#B7B7B7",
  },
  cartbutton: {
    backgroundColor: "#222222",
    width: 200,
    marginLeft: 20,
    marginVertical: 10,
    height: 30,
    justifyContent: "center",
  },
  cartbuttontext: {
    color: "#ffffff",
    textAlign: "center",
  }
});
export default DetailsScreen;