import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { View, StyleSheet} from 'react-native'
import LoginScreen from "./LoginScreen"

class App extends Component {
  render (){
    return (
      <View style={styles.container}>

        <LoginScreen />
        
        <StatusBar style="auto" />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    marginTop: 50
  }
});



export default App;