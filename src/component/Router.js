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

const AuthStackNavigator = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    }
});

const Router = createSwitchNavigator({
    Splash: Splash,
    Auth: AuthStackNavigator,
    Home: HomeStackNavigator,
    Test: Login
},
    {
        initialRouteName: 'Test',
    },
);

export default createAppContainer(Router);