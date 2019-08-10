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
                            onMarkDone={() => props.onMarkDone(item)}
                            onClose={() => props.onClose(item)}
                            onUnmarkDone={() => props.onUnmarkDone(item)}>
                            {item.description}
                        </TaskRow>
                    );
                }}
            />
        </View>
    );
}

export { TaskList };