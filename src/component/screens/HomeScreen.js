import React from 'react';
import {
    View, Text,
    Switch, TouchableWithoutFeedback, Dimensions
} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import _ from 'lodash';
import { DayCard, MoreOptionItem, Header, TopBar, ActionButton, ThemeChooser, TaskList } from '../common';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from 'res/colors.json';
import Theme, { Context } from '../Theme';

class HomeScreen extends React.Component {
    static contextType = Context;
    state = {
        showchooseThemeView: false,
        showMoreOption: false,
        showThemeChooser: false,
        width: Dimensions.get('window').width,
    }

    componentWillMount() {
        this.props.saveThemeInfo();
    }

    onPress(day) {
        this.props.navigation.navigate('AddTasks', { day });
    }

    renderMoreOption(value) {
        if (!this.state.showMoreOption) { return; }
        return (
            <View style={[styles.moreOptions, { backgroundColor: value.bgLight }]}>
                <MoreOptionItem icon={<AntDesign name='sync' size={15} color={value.textColor} />}>
                    Sync
                </MoreOptionItem>
                <MoreOptionItem
                    icon={<MaterialIcons name='style' size={18} color={value.textColor} />}
                    onPress={() => this.setState({ showMoreOption: false, showThemeChooser: true })}>
                    Theme
                </MoreOptionItem>
                <MoreOptionItem
                    icon={<AntDesign name='closecircleo' size={15} color={value.textColor} />}
                    onPress={() => {
                        this.props.clearCompleted();
                        this.setState({ showMoreOption: false });
                    }}>
                    Clear completed
                </MoreOptionItem>
                <MoreOptionItem icon={<AntDesign name='setting' size={18} color={value.textColor} />}>
                    Settings
                </MoreOptionItem>
                <View style={styles.darkModeChooser}>
                    <Text style={{ color: value.textColor, fontSize: 16 }}>Dark Mode</Text>
                    <Switch
                        thumbColor={value.textColor}
                        value={this.props.darkMode}
                        onValueChange={(value) => this.props.toggleDarkMode(value)}
                    />
                </View>
            </View>
        );
    }

    renderThemeChooser() {
        if (!this.state.showThemeChooser) { return null; }
        return (
            <ThemeChooser onPress={(value) => {
                this.props.toggleThemeColor(value);
                this.setState({ showThemeChooser: false });
            }} />
        );
    }

    render() {
        return (
            <Theme name={this.props.theme} bg={this.props.darkMode ? 'dark' : 'light'}>
                <Context.Consumer>
                    {value => {
                        return <View style={[styles.container, { backgroundColor: value.bgDark }]}>
                            <TopBar />
                            <Header right='more' onPress={() => this.setState({ showMoreOption: true })}>
                                ALL TASKS
                            </Header>
                            <TouchableWithoutFeedback style={{ flex: 1 }} onPress={() => this.setState({ showMoreOption: false })}>
                                <View style={{ flex: 1 }}>
                                    <DayCard onPress={() => this.onPress('today')}>
                                        Today
                                    </DayCard>
                                    <TaskList
                                        data={this.props.taskArray.filter(task => task.day === 'today')}
                                        onPress={(task) => this.props.markDone(task)}
                                        onClose={(task) => this.props.deleteTask(task)}
                                        onCheckPress={(task) => this.props.undoDone(task)}
                                    />
                                    <DayCard onPress={() => this.onPress('draft')}>
                                        Draft
                                    </DayCard>
                                    <TaskList
                                        data={this.props.taskArray.filter(task => task.day === 'draft')}
                                        onPress={(task) => this.props.markDone(task)}
                                        onClose={(task) => this.props.deleteTask(task)}
                                        onCheckPress={(task) => this.props.undoDone(task)}
                                    />
                                    <ActionButton onPress={() => this.onPress('today')} />
                                </View>
                            </TouchableWithoutFeedback>
                            {this.renderMoreOption(value)}
                            {this.renderThemeChooser()}
                        </View>
                    }}
                </Context.Consumer>
            </Theme>
        );
    }
}

const styles = {
    container: {
        flex: 1,
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
        position: 'absolute', right: 5, top: 10,
        justifyContent: 'center',
        padding: 10, borderRadius: 5,
        minWidth: 150,
        elevation: 5,
    },
    moreOptionText: {
        fontSize: 16,
        margin: 5,
    },
    title: {
        alignSelf: 'center',
        fontSize: 14,
    },
    darkModeChooser: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 5
    }
};

const mapStateToProps = state => {
    return {
        taskArray: state.tasks.taskArray,
        darkMode: state.ui.darkMode,
        theme: state.ui.theme
    };
}

export default connect(mapStateToProps, actions)(HomeScreen);