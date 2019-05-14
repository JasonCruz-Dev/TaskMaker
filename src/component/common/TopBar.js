import React, { useContext } from 'react';
import { StatusBar } from 'react-native';
import { Context } from '../Theme';

const TopBar = (props) => {
    let c = useContext(Context);
    c = c || {};
    return (
        <StatusBar
            backgroundColor={c.sbColor || colors.red}
            barStyle="light-content"
        />
    );
}

export { TopBar };