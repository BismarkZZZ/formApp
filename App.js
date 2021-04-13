import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { View, StyleSheet} from 'react-native'
import Contact from './components/Contact';
import ContactScreen from './ContactScreen';


class App extends Component {
  render (){
    return (
      <View style={styles.container}>

        <ContactScreen />
        
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