import React from 'react';
import { SafeAreaView, Text } from 'react-native'
import ContactScreen from '../screens/ContactScreen';
import LoginScreen from '../screens//LoginScreen';
import SignUp from '../screens//SignUp';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { connect } from "react-redux"
import { TouchableOpacity } from 'react-native-gesture-handler';
import {  logout } from "../redux/actions/authActions"



const Stack = createStackNavigator();

function AppContainer({auth, logout}) {
  return (
   
    <NavigationContainer>
        {
        auth.login ?
        //show contacts
        <Stack.Navigator>

        <Stack.Screen
          options={{
            headerRight:()=>(
              <TouchableOpacity
              onPress={logout}
              style={{marginRight: 20}}
              >
                <Text>LogOut</Text>
              </TouchableOpacity>
            )
          }}
          name='Contact'
          component={ContactScreen} />

        </Stack.Navigator>
        :
        //show login and register 
        <Stack.Navigator>
        <Stack.Screen
          options={{ header: () => null }}
          name='Login'
          component={LoginScreen} />
        <Stack.Screen
          options={{ header: () => null }}
          name='SignUp'
          component={SignUp} />
        </Stack.Navigator>
        
        }
    </NavigationContainer>
     
  )
}

const mapStateToProp = (state) => {
  return {auth: state}
}

export default connect(mapStateToProp, {logout})(AppContainer)