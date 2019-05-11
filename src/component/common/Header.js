import React from 'react';
import { View, TouchableOpacity, Text, PixelRatio, Dimensions, Platform } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';
import colors from 'res/colors.json';
import fonts from 'res/fonts.json';
const width = Dimensions.get('window').width;

const calculateFontSize = (fontSize) => {
    if (width > 550) {
        return (fontSize * 2) / PixelRatio.getFontScale();
    } else {
        return fontSize / PixelRatio.getFontScale();
    }
}

class Header extends React.PureComponent {
    renderLeftIcon() {
        if (this.props.backEnabled) {
            return (
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={[styles.iconView, styles.left]}
                    onPress={() => this.props.navigation.goBack()}>
                    <AntDesign name='arrowleft' size={26} color={colors.red} />
                </TouchableOpacity>
            );
        } else if (this.props.left) {
            return (
                <View style={[styles.iconView, styles.left]}>
                    {this.props.left}
                </View>
            );
        } else { return null; }
    }

    renderRightIcon() {
        if (this.props.right) {
            return (
                <View style={[styles.iconView, styles.right]}>
                    {this.props.right}
                </View>
            );
        } else { return null; }
    }

    render() {
        return (
            <View style={[styles.container, this.props.style]}>
                <Text style={styles.text}>
                    {this.props.children}
                </Text>
                {this.renderLeftIcon()}
                {this.renderRightIcon()}
            </View>
        );
    }
}

const styles = {
    container: {
        marginTop: Platform.OS === 'android' ? 0 : 24,
        height: 56, left: 0, right: 0,
        backgroundColor: colors.backgroundColor,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconView: {
        position: 'absolute',
        height: 45,
        aspectRatio: 1,
        zIndex: 10,
        borderRadius: 28,
        justifyContent: 'center',
        alignItems: 'center'
    },
    left: {
        left: 0,
        marginLeft: 5,
    },
    right: {
        right: 0,
        marginRight: 5,
    },
    text: {
        fontSize: calculateFontSize(16),
        fontWeight: '500',
        fontFamily: fonts.title,
        color: colors.title
    }
}

export default withNavigation(Header);