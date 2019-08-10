import React from 'react';
import {
    View,
    Text,
    Switch,
    TouchableWithoutFeedback,
} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import _ from 'lodash';
import db from '../../networking/db';
import {
    DayCard,
    MoreOptionItem,
    Header,
    TopBar,
    ActionButton,
    ThemeChooser,
    Loader
} from '../common';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from 'res/colors.json';
import Theme, { Context } from '../Theme';
import AsyncStorage from '@react-native-community/async-storage';
import TaskList from '../common/TaskList';

class HomeScreen extends React.Component {
    static contextType = Context;
    constructor(props) {
        super(props);
        this.state = {
            showchooseThemeView: false,
            showMoreOption: false,
            showThemeChooser: false,
            loading: false
        }
        this.props.saveThemeInfo();
    }

    async componentDidMount() {
        let arrayObject = await AsyncStorage.getItem('tasks');
        if (arrayObject)
            this.props.refreshTasks(JSON.parse(arrayObject));
    }

    async componentWillUnmount() {
        const { taskArray } = this.props;
        await AsyncStorage.setItem('tasks', JSON.stringify(taskArray));
    }

    onPress = (day) => {
        this.props.navigation.navigate('AddTasks', { day });
    }

    logoutUser = async () => {
        this.setState({ loading: true, showMoreOption: false });
        const response = await db.logoutUser();
        if (response) {
            this.setState({ loading: false });
            this.props.navigation.navigate('Auth');
        }
    }

    syncTasks = async () => {
        console.log('sync')
        this.setState({ loading: true, showMoreOption: false });
        const { taskArray } = this.props;
        const message = await db.syncTasks(taskArray);
        if (message) {
            const tasks = await db.getAllTasks(); //fetch all task
            this.props.refreshTasks(tasks);
            this.setState({ loading: false });
        } else {
            this.setState({ loading: false });
        }
    }

    renderMoreOption(value) {
        if (!this.state.showMoreOption) { return; }
        return (
            <View style={[styles.moreOptions, { backgroundColor: value.bgLight }]}>
                <MoreOptionItem
                    icon={<AntDesign name='sync' size={16} color={value.textColor} />}
                    onPress={this.syncTasks}>
                    Sync
                </MoreOptionItem>
                <MoreOptionItem
                    icon={<MaterialIcons name='style' size={20} color={value.textColor} />}
                    onPress={() => this.setState({ showMoreOption: false, showThemeChooser: true })}>
                    Theme
                </MoreOptionItem>
                <MoreOptionItem
                    icon={<AntDesign name='logout' size={20} color={value.textColor} />}
                    onPress={this.logoutUser}>
                    Log out
                </MoreOptionItem>
                <View style={styles.darkModeChooser}>
                    <Switch
                        thumbColor={value.textColor}
                        value={this.props.darkMode}
                        onValueChange={(value) => this.props.toggleDarkMode(value)}
                    />
                    <Text style={{ color: value.textColor, fontSize: 16 }}>Dark Mode</Text>
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
                        const today = new Date();
                        return <View style={[styles.container, { backgroundColor: value.bgDark }]}>
                            <TopBar />
                            <Header right='more' onPress={() => this.setState({ showMoreOption: true })}>
                                ALL TASKS
                            </Header>
                            <TouchableWithoutFeedback style={{ flex: 1 }} onPress={() => this.setState({ showMoreOption: false })}>
                                <View style={{ flex: 1 }}>
                                    <DayCard onPress={this.onPress}>
                                        Today
                                    </DayCard>
                                    <TaskList>
                                        today
                                    </TaskList>
                                    <DayCard onPress={this.onPress}>
                                        Draft
                                    </DayCard>
                                    <TaskList>
                                        draft
                                    </TaskList>
                                    <ActionButton onPress={this.onPress} />
                                </View>
                            </TouchableWithoutFeedback>
                            {this.renderMoreOption(value)}
                            {this.renderThemeChooser()}
                            {this.state.loading ? <Loader /> : null}
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
        paddingTop: 5,
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