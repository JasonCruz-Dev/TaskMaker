import React from 'react';
import colors from 'res/colors.json'
export const Context = React.createContext();

const Theme = ({ name, children }) => {
    let textColor, bgColor, phColor;
    switch (name) {
        case 'dark':
            textColor = colors.white;
            bgColor = colors.darkGrey;
            phColor: colors.lightGrey;
        case 'orange':
            textColor = colors.orange;
            bgColor = colors.white;
            phColor = colors.lightOrange;
        case 'green':
            textColor = colors.green;
            bgColor = colors.white;
            phColor = colors.lightGreen;
        case 'blue':
            textColor = colors.indigo;
            bgColor = colors.white;
            phColor = colors.lightIndigo;
        case 'purple':
            textColor = colors.purple;
            bgColor = colors.white;
            phColor = colors.lightPurple;
        case 'red':
            textColor = colors.red;
            bgColor = colors.white;
            phColor = colors.lightRed;
        default:
            textColor = colors.red;
            bgColor = colors.white;
            phColor = colors.lightRed;
    }
    return (
        <Context.Provider value={{ textColor, bgColor, phColor }}>
            {children ? children : null}
        </Context.Provider>
    );
};

export default Theme;