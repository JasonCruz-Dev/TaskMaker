import React from 'react';
import { StyleSheet, View, TextInput, } from 'react-native';
import { connect } from "react-redux";
import { addTasks } from '../../redux/actions';
import colors from 'res/colors';

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
            <View style={styles.container}>
                <TextInput
                    placeholder="Enter your task here"
                    placeholderTextColor={colors.lightRed}
                    style={styles.textInput}
                    value={this.state.task}
                    onChangeText={(task) => this.setState({ task })}
                    onSubmitEditing={() => this.onSubmitEditing()}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundColor
    },
    textInput: {
        fontSize: 25,
        fontWeight: '500',
        color: colors.red,
        padding: 5,
        margin: 5,
        borderBottomWidth: 1,
        borderBottomColor: colors.red
    },
});

export default connect(null, { addTasks })(AddTasks);