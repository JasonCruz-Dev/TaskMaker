import React from 'react';
import { StyleSheet, View, StatusBar, Text } from 'react-native';
import colors from 'res/colors';
import { Feather } from '@expo/vector-icons';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: false,
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor={colors.backgroundColor}
                    barStyle="dark-content"
                />
                <View style={styles.logo}>
                    <Feather name='check-circle' size={40} color={colors.red} />
                    <Text style={styles.text}>Task Maker</Text>
                </View>
                <Text style={styles.hello}>Hello!</Text>
                <Text style={styles.hello}>Let's start a better Life</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundColor
    },
    text: {
        fontSize: 20,
        fontWeight: '500',
        color: colors.red,
        paddingHorizontal: 15,
    },
    logo: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 60,
        paddingLeft: 15
    },
    hello: {
        fontSize: 30,
        fontWeight: '500',
        color: colors.text,
        paddingHorizontal: 20,
        paddingTop: 20
    },
});

export default Login;