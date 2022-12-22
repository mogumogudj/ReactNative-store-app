import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TravelsScreen from './screens/TravelScreen';
import DetailsScreen from './screens/DetailsScreen';
import CartScreen from './screens/Cart'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TravelsScreen" component={TravelsScreen} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        <Stack.Screen name="Cart" component={CartScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
