import React from 'react';
import { View, TouchableOpacity, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { DayCard, TaskRow } from '../common';
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

    onPress(day) {
        this.props.navigation.navigate('AddTasks', { day });
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor={colors.backgroundColor}
                    barStyle="dark-content"
                />
                <DayCard onPress={() => this.onPress('today')}>Today</DayCard>
                <TaskRow>{this.props.tasksToday}</TaskRow>
                <DayCard onPress={() => this.onPress('tomorrow')}>Tomorrow</DayCard>
                <TaskRow>{this.props.tasksTomorrow}</TaskRow>
                <DayCard onPress={() => this.onPress('someday')}>Someday</DayCard>
                <TaskRow>{this.props.tasksSomeday}</TaskRow>
                <TouchableOpacity style={styles.actionButton} onPress={() => this.onPress('today')}>
                    <Entypo name='plus' size={35} color={colors.backgroundColor} />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: colors.backgroundColor,
    },
    actionButton: {
        position: 'absolute',
        padding: 10,
        backgroundColor: colors.red,
        borderRadius: 30,
        bottom: 30, right: 30,
    },
};

const mapStateToProps = state => {
    return {
        tasksToday: state.tasks.tasksToday,
        tasksTomorrow: state.tasks.tasksTomorrow,
        tasksSomeday: state.tasks.tasksSomeday
    };
}

export default connect(mapStateToProps, {})(HomeScreen);