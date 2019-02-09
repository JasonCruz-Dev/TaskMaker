import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import HomeScreen from 'screens/HomeScreen';
import Login from 'screens/Login';
import Splash from 'screens/Splash';
import AddTasks from 'screens/AddTasks';

const HomeStackNavigator = createStackNavigator({
    HomeScreen: {
        screen: HomeScreen,
    },
    AddTasks: {
        screen: AddTasks,
        navigationOptions: {
            headerTitle: 'Create New task'
        }
    }
});

const Router = createSwitchNavigator({
    Splash: Splash,
    Auth: Login,
    Home: HomeStackNavigator,
    Test: AddTasks
},
    {
        initialRouteName: 'Splash',
    },
);

export default createAppContainer(Router);