import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TravelItem = itemprops => {
  const navigation = useNavigation();

  return (
      <View style={styles.listItem}>

          <Image style={styles.imagestyle} source={{uri: itemprops.metaimage}}/>
          
          <View>
            <Text style={styles.itemtitle}>{itemprops.title}</Text>
            
            <Text style={styles.itemdesc} >days: {itemprops.metadata[0]}</Text>
            <Text style={styles.itemdesc} >persons: {itemprops.metadata[1]}</Text>
            <Text style={styles.itemdesc} >type of sport: {itemprops.metadata[6]}</Text>
            <Text style={styles.itemprice} >price: €{itemprops.metadata[7]}</Text>
          </View>

          <Pressable style={styles.productbutton} onPress={() => navigation.navigate("DetailsScreen", {itemTitle: itemprops.title, itemID: itemprops.itemid, itemMeta: itemprops.metadata, itemImage: itemprops.metaimage})}>
            <Text style={styles.buttontext}>View product: {itemprops.title}</Text>
          </Pressable>

      </View>

  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    borderColor: '#C94838',
    borderStyle: 'solid',
    borderWidth: 0.5,
  },
  imagestyle: {
    height: 200,
  },
  productbutton: {
    color: "#C94838",
    backgroundColor: "#222222",
    height: 40,
    padding: 10,
    marginTop: 20,
  },
  buttontext: {
    color: "#C94838", 
  },
  itemprice: {
    paddingTop: 20,
    color: "#B7B7B7",
  },
  itemdesc: {
    color: "#B7B7B7",
  },
  itemtitle: {
    color: "#B7B7B7",
    fontWeight: 'bold',
    fontSize: 30,
  }

});

export default TravelItem;