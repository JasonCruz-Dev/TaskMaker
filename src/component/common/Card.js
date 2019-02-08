import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.constainerStyle}>
            {props.children}
        </View>
    );
}

const styles = {
    constainerStyle: {
        elevation: 1,
        padding: 5
    }
}

export { Card };