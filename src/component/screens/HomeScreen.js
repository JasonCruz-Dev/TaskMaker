import React from 'react';
import { View, TouchableOpacity, FlatList, TouchableWithoutFeedback, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { markDone, undoDone, deleteTask, clearCompleted } from '../../redux/actions';
import _ from 'lodash';
import { DayCard, TaskRow, MoreOptionItem, Header, TopBar } from '../common';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from 'res/colors.json';
import { ThemeChoose } from '../common/ThemeChoose';
import Theme from '../Theme';

class HomeScreen extends React.Component {

    state = {
        showchooseThemeView: false,
        showMoreOption: false,
        showThemeChooser: false,
        width: Dimensions.get('window').width
    }
    onPress(day) {
        this.props.navigation.navigate('AddTasks', { day });
    }

    renderMoreOption() {
        if (!this.state.showMoreOption) { return; }
        return (
            <View style={styles.moreOptions}>
                <MoreOptionItem icon={
                    <AntDesign name='sync' size={15} color={colors.red} />
                }>Sync</MoreOptionItem>
                <MoreOptionItem
                    icon={
                        <MaterialIcons name='style' size={18} color={colors.red} />
                    }
                    onPress={() => {
                        this.setState({ showMoreOption: false, showThemeChooser: true })
                    }}
                >Theme</MoreOptionItem>
                <MoreOptionItem
                    icon={
                        <AntDesign name='closecircleo' size={15} color={colors.red} />
                    }
                    onPress={() => {
                        this.props.clearCompleted();
                        this.setState({ showMoreOption: false })
                    }}
                >Clear completed</MoreOptionItem>
                <MoreOptionItem icon={
                    <AntDesign name='setting' size={18} color={colors.red} />
                }
                >Settings</MoreOptionItem>
            </View>
        );
    }

    renderThemeChooser() {
        if (!this.state.showThemeChooser) { return null; }
        return (
            <View style={styles.chooseThemeView}>
                <ThemeChoose onPress={() => this.setState({ showThemeChooser: false })}>

                </ThemeChoose>
            </View>
        );
    }

    render() {
        return (
            <Theme name='orange' bg='dark'>
                <View style={styles.container} navigation={this.props.navigation}>
                    <TopBar />
                    <Header
                        right={
                            <TouchableOpacity style={{ paddingHorizontal: 5 }} onPress={() => this.setState({ showMoreOption: true })}>
                                <Entypo name='dots-three-vertical' size={20} color={colors.red} />
                            </TouchableOpacity>
                        }>
                        ALL TASKS
                    </Header>
                    <DayCard
                        onPress={() => this.onPress('today')}>Today</DayCard>
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
                            <TouchableOpacity style={[styles.actionButton]} onPress={() => this.onPress('today')}>
                                <Entypo name='plus' size={30} color={colors.backgroundColor} />
                            </TouchableOpacity>
                        </View>
                    </TouchableWithoutFeedback>
                    {this.renderMoreOption()}
                    {this.renderThemeChooser()}
                </View>
            </Theme>
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
    chooseThemeView: {
        position: 'absolute',
        left: 0, top: 0,
        right: 0, bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        elevation: 10
    }
};

const mapStateToProps = state => {
    return {
        taskArray: state.tasks.taskArray,
    };
}

export default connect(mapStateToProps, { markDone, undoDone, deleteTask, clearCompleted })(HomeScreen);