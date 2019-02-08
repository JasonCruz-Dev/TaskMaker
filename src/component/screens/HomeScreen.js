import React from 'react';
import { View, Text } from 'react-native';
import { Card, Button } from '../common';
import colors from 'res/colors';

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>YABADABADooo</Text>
                <Card>
                    <Button>Click here</Button>
                </Card>
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: colors.backgroundColor
    }
};

export default HomeScreen;