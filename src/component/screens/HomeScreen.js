import React from 'react';
import { View, Text, TouchableOpacity, StatusBar, FlatList } from 'react-native';
import { DayCard, TaskRow } from '../common';
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
    state = {
        data: ['task one', 'task two', 'task three'],
        data2: ['task four', 'task five', 'task six']
    }
    onPress(day) {
        this.props.navigation.navigate('AddTasks', { day });
    }
    renderTaskList(data) {
        return (
            <FlatList
                data={data}
                initialNumToRender={4}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => {
                    return <TaskRow>{item}</TaskRow>
                }}
            />
        );
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor={colors.backgroundColor}
                    barStyle="dark-content"
                />
                <DayCard onPress={() => this.onPress('today')}>Today</DayCard>
                {this.renderTaskList(this.state.data)}
                <DayCard onPress={() => this.onPress('tomorrow')}>Tomorrow</DayCard>
                {this.renderTaskList(this.state.data2)}
                <DayCard onPress={() => this.onPress('someday')}>Someday</DayCard>
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