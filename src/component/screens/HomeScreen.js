import React from 'react';
import {
    View, TouchableOpacity,
    Switch, Text, FlatList,
    TouchableWithoutFeedback, Dimensions
} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import _ from 'lodash';
import { DayCard, TaskRow, MoreOptionItem, Header, TopBar, ActionButton } from '../common';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
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
        theme: 'red',
        darkMode: false
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
                <MoreOptionItem icon={
                    <AntDesign name='sync' size={15} color={value.textColor} />
                }>Sync</MoreOptionItem>
                <MoreOptionItem
                    icon={<MaterialIcons name='style' size={18} color={value.textColor} />}
                    onPress={() => { this.setState({ showMoreOption: false, showThemeChooser: true }) }}>
                    Theme
                </MoreOptionItem>
                <MoreOptionItem
                    icon={
                        <AntDesign name='closecircleo' size={15} color={value.textColor} />
                    }
                    onPress={() => {
                        this.props.clearCompleted();
                        this.setState({ showMoreOption: false })
                    }}
                >Clear completed</MoreOptionItem>
                <MoreOptionItem icon={
                    <AntDesign name='setting' size={18} color={value.textColor} />
                }
                >Settings</MoreOptionItem>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 5 }}>
                    <Text style={{ color: value.textColor, fontSize: 16 }}>Dark Mode</Text>
                    <Switch
                        value={this.props.darkMode}
                        onValueChange={(value) => this.props.toggleDarkMode(value)}
                    />
                </View>

            </View>
        );
    }

    renderThemeChooser(value) {
        if (!this.state.showThemeChooser) { return null; }
        return (
            <View style={[styles.chooseThemeView, { backgroundColor: value.bgLight }]}>
                <Text style={[styles.title, { color: value.textColor }]}>Choose theme</Text>
                <View style={styles.colorBox}>
                    <TouchableOpacity activeOpacity={0.5}
                        onPress={() => {
                            this.props.toggleThemeColor('red')
                            this.setState({ showThemeChooser: false })
                        }}>
                        <FontAwesome name='circle' size={24} color={colors.red} />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5}
                        onPress={() => {
                            this.props.toggleThemeColor('green')
                            this.setState({ showThemeChooser: false })
                        }}>
                        <FontAwesome name='circle' size={24} color={colors.green} />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5}
                        onPress={() => {
                            this.props.toggleThemeColor('blue')
                            this.setState({ showThemeChooser: false })
                        }}>
                        <FontAwesome name='circle' size={24} color={colors.blue} />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5}
                        onPress={() => {
                            this.props.toggleThemeColor('orange')
                            this.setState({ showThemeChooser: false })
                        }}>
                        <FontAwesome name='circle' size={24} color={colors.orange} />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5}
                        onPress={() => {
                            this.props.toggleThemeColor('purple')
                            this.setState({ showThemeChooser: false })
                        }}>
                        <FontAwesome name='circle' size={24} color={colors.purple} />
                    </TouchableOpacity>
                </View>
            </View >
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
                                    <DayCard onPress={() => this.onPress('draft')}>
                                        Draft
                                    </DayCard>
                                    <View>
                                        <FlatList
                                            data={this.props.taskArray.filter(task => task.day === 'draft')}
                                            initialNumToRender={4}
                                            keyExtractor={(item, index) => index.toString()}
                                            renderItem={({ item }) => {
                                                console.log('render task draft');
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
                                    <ActionButton onPress={() => this.onPress('today')} />
                                </View>
                            </TouchableWithoutFeedback>

                            {this.renderMoreOption(value)}
                            {this.renderThemeChooser(value)}
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
    chooseThemeView: {
        position: 'absolute',
        top: '40%',
        left: '50%',
        marginLeft: -100,
        elevation: 1,
        padding: 25,
        minWidth: 200,
        borderRadius: 10,
    },
    colorBox: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-between'
    },
    title: {
        alignSelf: 'center',
        fontSize: 14,
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