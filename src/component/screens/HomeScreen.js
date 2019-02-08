import React from 'react';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import { DayCard } from '../common';
import { connect } from 'react-redux';
import { Feather, Entypo, } from '@expo/vector-icons';
import colors from 'res/colors';

class HomeScreen extends React.Component {
    static navigationOptions = {
        headerTitle: 'ALL TASKS',
        headerLeft:
            <TouchableOpacity style={{ paddingHorizontal: 5 }}>
                <Feather name='align-left' size={30} color={colors.red} />
            </TouchableOpacity>,
        headerRight:
            <TouchableOpacity style={{ paddingHorizontal: 5 }}>
                <Entypo name='dots-three-vertical' size={24} color={colors.red} />
            </TouchableOpacity>,
    }
    onPress() {
        this.props.navigation.navigate('AddTasks');
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor={colors.backgroundColor}
                    barStyle="dark-content"
                />
                <DayCard onPress={() => this.onPress()}>Today</DayCard>
                <DayCard onPress={() => this.onPress()}>Tomorrow</DayCard>
                <DayCard onPress={() => this.onPress()}>Someday</DayCard>
                <TouchableOpacity style={styles.actionButton}>
                    <Entypo name='plus' size={35} color={colors.backgroundColor} />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: colors.backgroundColor
    },
    actionButton: {
        position: 'absolute',
        padding: 10,
        backgroundColor: colors.red,
        borderRadius: 30,
        bottom: 30, right: 30,
    }
};

const mapStateToProps = state => {
    return {
        taskArray: state.tasks.taskArray
    };
}

export default connect(mapStateToProps, {})(HomeScreen);