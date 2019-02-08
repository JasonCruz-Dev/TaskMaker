import React from 'react';
import { StyleSheet, View, TextInput, } from 'react-native';
import colors from 'res/colors';

class AddTasks extends React.Component {
    constructor() {
        super();
        this.state = {
            task: ''
        }
    }
    onSubmitEditing() {
        this.props.navigation.goBack();
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

export default AddTasks;