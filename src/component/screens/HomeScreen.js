import React from 'react';
import { View, TouchableOpacity, StatusBar, FlatList, } from 'react-native';
import { connect } from 'react-redux';
import { markDone, undoDone, deleteTask } from '../../redux/actions';
import _ from 'lodash';
import { DayCard, TaskRow, } from '../common';
import { Feather, Entypo, } from '@expo/vector-icons';
import colors from 'res/colors';

class HomeScreen extends React.Component {
    static navigationOptions = {
        headerLeft:
            <TouchableOpacity style={{ paddingHorizontal: 5 }}>
                <Feather name='align-left' size={24} color={colors.red} />
            </TouchableOpacity>,
        headerRight:
            <TouchableOpacity style={{ paddingHorizontal: 5 }}>
                <Entypo name='dots-three-vertical' size={20} color={colors.red} />
            </TouchableOpacity>,
    }

    onPress(day) {
        this.props.navigation.navigate('AddTasks', { day });
    }

    componentDidMount() {
        console.log('mount', this.props.taskArray);
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
                <View>
                    <FlatList
                        data={this.props.taskArray.filter(task => task.day === 'today')}
                        initialNumToRender={4}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => {
                            console.log('render task today');
                            return (
                                <TaskRow
                                    done={item.completed}
                                    onPress={() => this.props.markDone(item)}
                                    onClose={() => this.props.deleteTask(item)}
                                    onCheckPress={() => this.props.undoDone(item)}>
                                    {item.description}
                                </TaskRow>
                            );
                        }}
                    />
                </View>
                <DayCard onPress={() => this.onPress('tomorrow')}>Tomorrow</DayCard>
                <View>
                    <FlatList
                        data={this.props.taskArray.filter(task => task.day === 'tomorrow')}
                        initialNumToRender={4}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => {
                            console.log('render task tomorrow');
                            return (
                                <TaskRow
                                    done={item.completed}
                                    onPress={() => this.props.markDone(item)}
                                    onClose={() => this.props.deleteTask(item)}
                                    onCheckPress={() => this.props.undoDone(item)}>
                                    {item.description}
                                </TaskRow>
                            );
                        }}
                    />
                </View>
                <DayCard onPress={() => this.onPress('someday')}>Someday</DayCard>
                <View>
                    <FlatList
                        data={this.props.taskArray.filter(task => task.day === 'someday')}
                        initialNumToRender={4}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => {
                            console.log('render task someday');
                            return (
                                <TaskRow
                                    done={item.completed}
                                    onPress={() => this.props.markDone(item)}
                                    onClose={() => this.props.deleteTask(item)}
                                    onCheckPress={() => this.props.undoDone(item)}>
                                    {item.description}
                                </TaskRow>
                            );
                        }}
                    />
                </View>
                <TouchableOpacity style={styles.actionButton} onPress={() => this.onPress('today')}>
                    <Entypo name='plus' size={30} color={colors.backgroundColor} />
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
        bottom: 25, right: 25,
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
    };
}

export default connect(mapStateToProps, { markDone, undoDone, deleteTask })(HomeScreen);