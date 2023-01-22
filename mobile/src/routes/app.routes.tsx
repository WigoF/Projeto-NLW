import {createNativeStackNavigator} from '@react-navigation/native-stack';

const {Navigator, Screen} = createNativeStackNavigator();

import { Home } from '../screams/Home';
import { Habit} from '../screams/Habit';
import { New} from '../screams/New';

export function AppRoutes(){
    
    return(
        <Navigator screenOptions={{headerShown :false}}>
            <Screen
                name="home"
                component={Home}
            />

            <Screen
                name="new"
                component={New}
            />
            
            <Screen
                name='habit'
                component={Habit}
            />
        </Navigator>
    )
}