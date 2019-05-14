import React from 'react';
import colors from 'res/colors.json'
export const Context = React.createContext();

const Theme = ({ name, children }) => {
    let textColor, bgColor, phColor;
    switch (name) {
        case 'dark':
            textColor = colors.red;
            bgColor = colors.darkGrey;
            phColor = colors.lightOrange;
            break;
        case 'orange':
            textColor = colors.orange;
            bgColor = colors.white;
            phColor = colors.lightOrange;
            break;
        case 'green':
            textColor = colors.green;
            bgColor = colors.white;
            phColor = colors.lightGreen;
            break;
        case 'blue':
            textColor = colors.indigo;
            bgColor = colors.white;
            phColor = colors.lightIndigo;
            break;
        case 'purple':
            textColor = colors.purple;
            bgColor = colors.white;
            phColor = colors.lightPurple;
            break;
        case 'red':
            textColor = colors.red;
            bgColor = colors.white;
            phColor = colors.lightRed;
            break;
        default:
            console.log('trigger')
            textColor = colors.red;
            bgColor = colors.white;
            phColor = colors.lightRed;
            break;
    }
    return (
        <Context.Provider value={{ textColor, bgColor, phColor }}>
            {children ? children : null}
        </Context.Provider>
    );
};

export default Theme;