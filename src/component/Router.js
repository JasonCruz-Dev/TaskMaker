import { createAppContainer, createStackNavigator } from 'react-navigation';
import HomeScreen from 'screens/HomeScreen';

const HomeStackNavigator = createStackNavigator({
    HomeScreen: {
        screen: HomeScreen,
        navigationOptions: {
            headerTitle: 'Todo Maker'
        }
    }
});

export default createAppContainer(HomeStackNavigator);