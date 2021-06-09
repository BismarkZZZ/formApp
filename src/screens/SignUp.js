import React, { Component } from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native'
import { connect } from 'react-redux'
import { createEmailAccount, registerError  } from "../redux/actions/authActions"

class SignUp extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
            confirm: ""
        };
    } 

    handleUpdate = (name,value) => {
        this.setState({
            [name]:value
        })
    }

    handleSubmit = () => {
        if(this.state.password  !== this.state.confirm){
            this.props.registerError ("Passwords do not match")
            return;
        }
        this.props.createEmailAccount(this.state.email, this.state.password)
    };
    


    render () {
        const {navigation, auth} = this.props
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.loginTextContainer}>
                    <Text style={styles.loginText}>Sign Up</Text>
                </View>
    
                <View>
                    {
                    auth.error.register && 
                    <Text style={{color: 'red'}}>{auth.error.register}</Text>}
                    <TextInput
                        placeholder='Username'
                        placeholderTextColor='#aaaaaa'
                        autoCorrect={false}
                        style={styles.input}
                        value={this.state.username}
                        onChangeText={(text)=>{
                             this.handleUpdate('username',text)
                        }}
                    />
    
                    <TextInput
                        placeholder='Email'
                        placeholderTextColor='#aaaaaa'
                        autoCorrect={false}
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
    
                    <TextInput
                        placeholder='Confirm Password'
                        placeholderTextColor='#aaaaaa'
                        style={styles.input}
                        secureTextEntry={true}
                        autoCapitalize='none'
                        value={this.state.confirm}
                        onChangeText={(text)=>{
                            this.handleUpdate('confirm',text)
                       }}
                    />
    
                </View>
    
                <View>
                    <TouchableOpacity
                        onPress={this.handleSubmit}
                        style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
    
                <View style={styles.noAccContainer}>
                    <Text style={styles.noAccText}>You already have an account</Text>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Login')
                        }}>
                        <Text style={styles.logInText}>Log in</Text>
                    </TouchableOpacity>
                </View>
                <StatusBar style="auto" />
            </SafeAreaView>
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
    logInText: {
        fontSize: 16,
        color: '#5100ad'
    }
})


const mapStateToProp = (state ) => {
    return {auth: state}
}

export default connect (mapStateToProp,{createEmailAccount, registerError})(SignUp);