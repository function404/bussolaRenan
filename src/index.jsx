import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screen/HomeScreen';
import Bussola from './screen/Bussola';

const Stack = createStackNavigator();

const RootNavigation = ({navigation}) => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name='Bussola' component={Bussola} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default RootNavigation;