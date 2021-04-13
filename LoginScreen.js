 import React, { Component } from 'react'
 import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView} from 'react-native'
 
export default class LoginScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    };
    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.loginTextContainer}>
                    <Text style={styles.loginText}>Log in</Text>
                </View>

                <View>
                    <TextInput
                        placeholder='Username'
                        placeholderTextColor='#aaaaaa'
                        style={styles.input}
                        value={this.state.email}
                        onChangeText={(email) => {
                            this.setState({ email })
                        }}
                    />

                    <TextInput
                        placeholder='Password'
                        placeholderTextColor='#aaaaaa'
                        style={styles.input}
                        secureTextEntry={true}
                        autoCapitalize='none'
                        value={this.state.password}
                        onChangeText={(password) => {
                            this.setState({ password })
                        }}
                    />

                    <Text style={styles.forgot}>Forgot password?</Text>
                </View>

                <View>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>Log in</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.noAccContainer}>
                    <Text style={styles.noAccText}>Don't have an account</Text>
                    <Text style={styles.signUpText}>Sign Up</Text>
                </View>

            </ScrollView>
        )
    }
}
 

 const styles = StyleSheet.create ({
    container: {
        marginHorizontal: 50
    },
    loginText: {
        fontSize: 50,
        color: "#5100ad"
    },
    loginTextContainer: {
        marginBottom: 30
    },
    input :{ 
        borderBottomWidth: 3,
        borderBottomColor: "#5100ad",
        fontSize: 20,
        height: 50,
        marginBottom: 30
    },
    forgot: {
        alignSelf: 'flex-end',
        color: "#0853a7",
        marginBottom: 10,
        fontSize: 16
    },
    buttonContainer: {
        height: 50,
        backgroundColor: '#5100ad',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginVertical: 50
    },
    buttonText: {
        color: 'white',
        fontSize: 25
    },
    noAccContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    noAccText: {
        marginRight: 10,
        fontSize: 16
    },
    signUpText: {
        fontSize: 16,
        color: '#5100ad'
    }
 })