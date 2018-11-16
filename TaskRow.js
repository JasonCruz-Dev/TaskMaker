import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import PropTypes from 'prop-types';

class TaskRow extends React.Component{
    onDonePressed(){
        this.props.onDone(this.props.todo);
    }
    render(){
        return(
            <View style={styles.row}>
            <Text style={styles.text}>{this.props.todo.task}</Text>
            <TouchableHighlight style={styles.doneButton} onPress={this.onDonePressed.bind(this)}>
                <Text>Done</Text>
            </TouchableHighlight>
            </View>
        );
    }

}
TaskRow.propTypes = {
    todo: PropTypes.shape({
        task: PropTypes.string.isRequired,
    }).isRequired,
    onDone: PropTypes.func.isRequired,
};

const styles=StyleSheet.create({
    row: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#e7e7e7',
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        marginHorizontal: 20
    },
    text: {
        fontSize: 18,
        fontWeight: '300'
    },
    doneButton: {
        borderRadius: 5,
        backgroundColor: '#eaeaea',
        padding: 5 

    }
});

export default TaskRow;