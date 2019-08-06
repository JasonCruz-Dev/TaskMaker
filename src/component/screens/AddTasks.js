import React from 'react';
import { StyleSheet, View, TextInput, } from 'react-native';
import { connect } from "react-redux";
import { addTasks } from '../../actions';
import { Header } from '../common';
import Theme, { Context } from '../Theme';

class AddTasks extends React.Component {
    constructor() {
        super();
        this.state = {
            task: '',
            day: ''
        }
    }
    componentWillMount() {
        let day = this.props.navigation.getParam('day');
        this.setState({ day });
    }
    onSubmitEditing() {
        if (this.state.task === '') { return this.props.navigation.goBack(); }
        const { task, day } = this.state;
        this.props.addTasks(task, day, () => {
            this.props.navigation.goBack();
        });
    }
    render() {
        return (
            <Theme name={this.props.theme} bg={this.props.darkMode ? 'dark' : 'light'}>
                <Context.Consumer>
                    {value => {
                        return (
                            <View style={[styles.container, { backgroundColor: value.bgDark }]}>
                                <Header backEnabled navigation={this.props.navigation}>ADD TASK</Header>
                                <TextInput
                                    placeholder="Enter your task here"
                                    placeholderTextColor={value.phColor}
                                    autoFocus
                                    style={[styles.textInput, { color: value.textColor, borderBottomColor: value.textColor }]}
                                    value={this.state.task}
                                    onChangeText={(task) => this.setState({ task })}
                                    onSubmitEditing={() => this.onSubmitEditing()}
                                />
                            </View>
                        );
                    }}
                </Context.Consumer>
            </Theme>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textInput: {
        fontSize: 20,
        fontWeight: '500',
        paddingHorizontal: 5,
        paddingVertical: 10,
        margin: 5,
        borderBottomWidth: 1,

    },
});

const mapStateToProps = state => {
    return {
        darkMode: state.ui.darkMode,
        theme: state.ui.theme
    }
}

export default connect(mapStateToProps, { addTasks })(AddTasks);