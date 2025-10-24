import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '@/Screens/Home/Home';
import { Details } from '@/Screens/Details/Details';
import './global.css';
import { NavigationContainer } from '@react-navigation/native';

export type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="Details" component={Details} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
