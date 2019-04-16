import React from 'react';
import { View, TouchableOpacity, StatusBar, FlatList, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { markDone, undoDone, deleteTask, clearCompleted } from '../../redux/actions';
import _ from 'lodash';
import { DayCard, TaskRow, MoreOptionItem } from '../common';
import Header from '../common/Header';
import { Feather, Entypo, AntDesign, MaterialIcons } from '@expo/vector-icons';
import colors from 'res/colors';

class HomeScreen extends React.Component {

    state = {
        showSidePanel: false,
        showMoreOption: false
    }

    onPress(day) {
        this.props.navigation.navigate('AddTasks', { day });
    }

    renderSidePanel() {
        if (!this.state.showSidePanel) { return; }
        return (
            <View style={styles.sidePanel}>
                <Header right={
                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() => this.setState({ showSidePanel: false })}>
                        <AntDesign name='close' size={26} color={colors.red} />
                    </TouchableOpacity>
                }>My List</Header>
            </View>
        );
    }

    renderMoreOption() {
        if (!this.state.showMoreOption) { return; }
        return (
            <View style={styles.moreOptions}>
                <MoreOptionItem icon={
                    <AntDesign name='sync' size={15} color={colors.red} />
                }>Sync</MoreOptionItem>
                <MoreOptionItem icon={
                    <MaterialIcons name='style' size={18} color={colors.red} />
                }>Theme</MoreOptionItem>
                <MoreOptionItem
                    icon={
                        <AntDesign name='closecircleo' size={15} color={colors.red} />
                    }
                    onPress={() => this.props.clearCompleted()}
                >Clear completed</MoreOptionItem>
                <MoreOptionItem icon={
                    <AntDesign name='setting' size={18} color={colors.red} />
                }
                >Settings</MoreOptionItem>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor={colors.red}
                    barStyle="light-content"
                />
                <Header
                    left={
                        <TouchableOpacity style={{ paddingHorizontal: 5 }} onPress={() => this.setState({ showSidePanel: true })}>
                            <Feather name='align-left' size={24} color={colors.red} />
                        </TouchableOpacity>
                    }
                    right={
                        <TouchableOpacity style={{ paddingHorizontal: 5 }} onPress={() => this.setState({ showMoreOption: true })}>
                            <Entypo name='dots-three-vertical' size={20} color={colors.red} />
                        </TouchableOpacity>
                    }
                >
                    ALL TASKS
                </Header>
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
                <TouchableWithoutFeedback style={{ flex: 1 }} onPress={() => this.setState({ showMoreOption: false })}>
                    <View style={{ flex: 1 }}>
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
                    </View>
                </TouchableWithoutFeedback>
                {this.renderMoreOption()}
                {this.renderSidePanel()}
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
        position: 'absolute', right: 5, top: 5,
        justifyContent: 'center',
        padding: 10, borderRadius: 5,
        minWidth: 150,
        backgroundColor: colors.backgroundColor,
        elevation: 10
    },
    moreOptionText: {
        fontSize: 16,
        margin: 5,
    },
    sidePanel: {
        position: 'absolute',
        left: 0, top: 0,
        right: 0, bottom: 0,
        backgroundColor: colors.backgroundColor,
        elevation: 10
    }
};

const mapStateToProps = state => {
    return {
        taskArray: state.tasks.taskArray,
    };
}

export default connect(mapStateToProps, { markDone, undoDone, deleteTask, clearCompleted })(HomeScreen);