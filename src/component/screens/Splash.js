import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { saveThemeInfo } from '../../actions'
import AsyncStorage from '@react-native-community/async-storage';
import colors from 'res/colors.json';
import Feather from 'react-native-vector-icons/Feather';
import Theme from '../Theme';

class Splash extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: false,
        }
    }

    async componentDidMount() {
        this.props.saveThemeInfo();
        let userToken = await AsyncStorage.getItem('userToken');
        console.log({ userToken })
        if (userToken) {
            this.props.navigation.navigate('Home');
        } else {
            this.props.navigation.navigate('Auth');
        }
    }

    render() {
        return (
            <Theme name='red'>
                <View style={styles.container}>
                    <Feather name='check-circle' size={60} color={colors.red} />
                    <Text style={styles.text}>Task Maker</Text>
                </View>
            </Theme>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.backgroundColor
    },
    text: {
        fontSize: 20,
        fontWeight: '500',
        color: colors.red,
        paddingVertical: 15,
    }
});

export default connect(null, { saveThemeInfo })(Splash);