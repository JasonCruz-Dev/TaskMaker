import React from 'react';
import { StyleSheet, View, StatusBar, Text, TextInput, TouchableOpacity } from 'react-native';
import colors from 'res/colors';
import { Feather } from '@expo/vector-icons';
import { Card, Button } from '../common';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            login: true,
            name: '',
            email: '',
            password: ''
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor={colors.backgroundColor}
                    barStyle="dark-content"
                />
                <View style={styles.logo}>
                    <Feather name='check-circle' size={40} color={colors.red} />
                    <Text style={styles.text}>Task Maker</Text>
                </View>
                <Card>
                    <Text style={styles.hello}>Hello!</Text>
                    <Text style={styles.hello}>Let's start a better Life</Text>
                </Card>
                {this.state.login ? null :
                    <Card>
                        <TextInput
                            placeholder="Your Name"
                            placeholderTextColor={colors.lightRed}
                            style={styles.textInput}
                            value={this.state.name}
                            onChangeText={(name) => this.setState({ name })}
                        />
                    </Card>}
                <Card>
                    <TextInput
                        placeholder="Email"
                        placeholderTextColor={colors.lightRed}
                        style={styles.textInput}
                        value={this.state.email}
                        keyboardType='email-address'
                        onChangeText={(email) => this.setState({ email })}
                    />
                </Card>
                <Card>
                    <TextInput
                        placeholder="Password"
                        placeholderTextColor={colors.lightRed}
                        style={styles.textInput}
                        value={this.state.password}
                        keyboardType='default'
                        onChangeText={(password) => this.setState({ password })}
                    />
                </Card>
                <Card>
                    <Button>{this.state.login ? 'Log in' : 'Create Account'}</Button>
                </Card>
                {this.state.login ?
                    <View style={styles.bottomTextView}>
                        <Text style={styles.bottomText}>Still without an account? </Text>
                        <TouchableOpacity onPress={() => this.setState({ login: false })}>
                            <Text style={[styles.bottomText, { color: colors.red }]}>Create one</Text>
                        </TouchableOpacity>
                    </View> :
                    <View style={styles.bottomTextView}>
                        <Text style={styles.bottomText}>Already have an account? </Text>
                        <TouchableOpacity onPress={() => this.setState({ login: true })}>
                            <Text style={[styles.bottomText, { color: colors.red }]}>Log in</Text>
                        </TouchableOpacity>
                    </View>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundColor
    },
    text: {
        fontSize: 20,
        fontWeight: '500',
        color: colors.red,
        marginHorizontal: 10,
    },
    logo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 60,
        marginLeft: 20
    },
    hello: {
        fontSize: 30,
        fontWeight: '500',
        color: colors.red,
    },
    textInput: {
        fontSize: 24,
        fontWeight: '500',
        color: colors.red,
        padding: 5,
        borderBottomWidth: 1,
        borderBottomColor: colors.red
    },
    bottomTextView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    bottomText: {
        fontSize: 16,
        fontWeight: '500',
        color: colors.text,
    }
});

export default Login;