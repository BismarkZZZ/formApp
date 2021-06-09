import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import {connect} from 'react-redux'
import {loginEmailAccount} from "../redux/actions/authActions"




class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    } 

    handleUpdate = (name,value) => {
        this.setState({
            [name]:value
        })
    }

    handleSubmit = () => {
        this.props.loginEmailAccount(this.state.email, this.state.password)
    };

    render() {
        const {navigation, auth} = this.props
        return (
            <ScrollView style={styles.container}>
            <View style={styles.loginTextContainer}>
                <Text style={styles.loginText}>Log in</Text>
            </View>

            <View>
                {
                auth.error.login && 
                <Text style={{color: 'red'}}>{auth.error.login}</Text>}
                <TextInput
                    placeholder='Email'
                    placeholderTextColor='#aaaaaa'
                    style={styles.input}
                    value={this.state.email}
                        onChangeText={(text)=>{
                            this.handleUpdate('email',text)
                       }}
                />

                <TextInput
                    placeholder='Password'
                    placeholderTextColor='#aaaaaa'
                    style={styles.input}
                    secureTextEntry={true}
                    autoCapitalize='none'
                    value={this.state.password}
                        onChangeText={(text)=>{
                            this.handleUpdate('password',text)
                       }}
                />

                <Text style={styles.forgot}>Forgot password?</Text>
            </View>

            <View>
                <TouchableOpacity
                    onPress={this.handleSubmit}
                    style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Log in</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.noAccContainer}>
                <Text style={styles.noAccText}>Don't have an account</Text>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('SignUp')
                    }}>
                    <Text style={styles.signUpText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
            <StatusBar style="auto" />
        </ScrollView>
        )
    }
}






const styles = StyleSheet.create({
    container: {
        marginHorizontal: 50,
        marginTop: 100
    },
    loginText: {
        fontSize: 50,
        color: "#5100ad"
    },
    loginTextContainer: {
        marginBottom: 30
    },
    input: {
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

const mapStateToProp = (state ) => {
    return {auth: state}
}

export default connect(mapStateToProp,{loginEmailAccount})(LoginScreen);