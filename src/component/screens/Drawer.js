import React from 'react';
import { StyleSheet, View, Text, } from 'react-native';
import { connect } from "react-redux";
import { } from '../../redux/actions';
import colors from 'res/colors';

class Drawer extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }
    componentWillMount() {

    }

    render() {
        return (
            <View style={styles.container}>
                <Text>HI Shad</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundColor
    },

});

export default connect(null, {})(Drawer);