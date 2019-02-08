import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import HomeScreen from 'screens/HomeScreen';
import Login from 'screens/Login';
import Splash from 'screens/Splash';

const HomeStackNavigator = createStackNavigator({
    HomeScreen: {
        screen: HomeScreen,
        navigationOptions: {
            headerTitle: 'ALL TASKS'
        }
    }
});

const Router = createSwitchNavigator({
    Splash: Splash,
    Auth: Login,
    Home: HomeStackNavigator,
    Test: Login
},
    {
        initialRouteName: 'Test',
    },
);

export default createAppContainer(Router);