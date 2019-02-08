import React from 'react';
import { StyleSheet, View, StatusBar, Text } from 'react-native';
import colors from 'res/colors';
import { Feather } from '@expo/vector-icons';

class Splash extends React.Component {
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
                <Feather name='check-circle' size={60} color={colors.red} />
                <Text style={styles.text}>Task Maker</Text>
            </View>
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

export default Splash;