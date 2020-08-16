// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';

import HomeScreen, { homeScreenOptions } from '../screens/Home'
import Oraciones,{oracionesScreenOptions} from '../screens/Oraciones'
import Oracion,{oracionScreenOptions} from '../screens/Oracion'
import Cantos,{cantosScreenOptions} from '../screens/Cantos'
import Canto,{cantoScreenOptions} from '../screens/Canto'
import Informacion from '../screens/Informacion'

const MyStack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer initialRouteName="Home">
            <MyStack.Navigator  >
                <MyStack.Screen name="Inicio" component={HomeScreen} options={homeScreenOptions} />
                <MyStack.Screen name="Oraciones" component={Oraciones} options={oracionesScreenOptions} />
                <MyStack.Screen name="Oracion" component={Oracion} options={oracionScreenOptions} />
                <MyStack.Screen name="Cantos" component={Cantos} options={cantosScreenOptions} />
                <MyStack.Screen name="Canto" component={Canto} options={cantoScreenOptions} />
                <MyStack.Screen name="Informacion" component={Informacion} />
            </MyStack.Navigator>
        </NavigationContainer>
    );
}

export default App;