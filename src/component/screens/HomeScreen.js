import React from 'react';
import { View, TouchableOpacity, StatusBar, FlatList, } from 'react-native';
import { connect } from 'react-redux';
import { markDone } from '../../redux/actions';
import _ from 'lodash';
import { DayCard, TaskRow, } from '../common';
import { Feather, Entypo, } from '@expo/vector-icons';
import colors from 'res/colors';

class HomeScreen extends React.Component {
    static navigationOptions = {
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

    componentDidMount() {
        console.log('mount', this.props.taskArray);
    }

    renderTasks(day) {
        return (
            <View>
                <FlatList
                    data={this.props.taskArray}
                    initialNumToRender={4}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => {
                        if (_.isUndefined(item.day) || item.day !== day) { return; }
                        return (
                            <TaskRow onPress={() => this.props.markDone(item)}>{item.text}</TaskRow>
                        );
                    }}
                />
            </View>
        );
    }

    renderCompletedTasks(day) {
        return (
            <View>
                <FlatList
                    data={this.props.taskDoneArray}
                    initialNumToRender={4}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => {
                        if (_.isUndefined(item.day) || item.day !== day) { return; }
                        return (
                            <TaskRow done>{item.text}</TaskRow>
                        );
                    }}
                />
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    translucent
                    backgroundColor={colors.backgroundColor}
                    barStyle="dark-content"
                />
                <DayCard onPress={() => this.onPress('today')}>Today</DayCard>
                {this.renderTasks('today')}
                {this.renderCompletedTasks('today')}
                <DayCard onPress={() => this.onPress('tomorrow')}>Tomorrow</DayCard>
                {this.renderTasks('tomorrow')}
                {this.renderCompletedTasks('tomorrow')}
                <DayCard onPress={() => this.onPress('someday')}>Someday</DayCard>
                {this.renderTasks('someday')}
                {this.renderCompletedTasks('someday')}
                <TouchableOpacity style={styles.actionButton} onPress={() => this.onPress('today')}>
                    <Entypo name='plus' size={35} color={colors.backgroundColor} />
                </TouchableOpacity>
                {/* <View style={styles.moreOptions}>
                    <Text style={styles.moreOptionText}>Sync</Text>
                    <Text style={styles.moreOptionText}>Theme</Text>
                    <Text style={styles.moreOptionText}>Settings</Text>
                </View> */}
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
    rowText: {
        fontSize: 18,
        color: colors.text,
    },
    moreOptions: {
        position: 'absolute', right: 10, top: 5,
        justifyContent: 'center',
        padding: 10, borderRadius: 5,
        minWidth: 150,
        backgroundColor: colors.backgroundColor,
        elevation: 10
    },
    moreOptionText: {
        fontSize: 16,
        margin: 5,

    }
};

const mapStateToProps = state => {
    return {
        taskArray: state.tasks.taskArray,
        taskDoneArray: state.tasks.taskDoneArray
    };
}

export default connect(mapStateToProps, { markDone })(HomeScreen);