import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import SecondScreen from './screens/SecondScreen';
import { StatusBar } from 'expo-status-bar';
import { RootStackParamList } from './types/navigation';
import { PaperProvider } from 'react-native-paper';
import AppBar from './components/AppBar';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
      <PaperProvider>
      <NavigationContainer> 
        <Stack.Navigator
          initialRouteName="HomeScreen"
          screenOptions={{ header: (props) => <AppBar {...props} /> }}
        >
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="SecondScreen" component={SecondScreen} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
      </PaperProvider>
  );
}
