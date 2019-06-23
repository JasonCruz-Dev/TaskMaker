import React from 'react';
import { View, FlatList } from 'react-native';
import { TaskRow } from './TaskRow';

const TaskList = (props) => {
    return (
        <View>
            <FlatList
                data={props.data}
                initialNumToRender={4}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => {
                    return (
                        <TaskRow
                            done={item.completed}
                            onPress={() => props.onPress(item)}
                            onClose={() => props.onClose(item)}
                            onCheckPress={() => props.onCheckPress(item)}>
                            {item.description}
                        </TaskRow>
                    );
                }}
            />
        </View>
    );
}

export { TaskList };