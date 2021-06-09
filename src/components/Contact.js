import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, StyleSheet, SafeAreaView } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

export default function Contact({ name, phone }) {
    return (
        <SafeAreaView >
            <View style={styles.container}>
                <Image source={require('../../assets/profile.jpg')} style={styles.image}></Image>

                <View style={styles.infoContainer}>
                    <Text style={styles.fullName} numberOfLines={1}> {name} </Text>
                    <Text> {phone} </Text>
                </View>

                <View style={styles.icon}>
                    <MaterialIcons name="local-phone" size={24} color="#009cf5" />
                </View>

                <View style={styles.icon}>
                    <MaterialCommunityIcons name="message-processing" size={24} color="#009cf5" />
                </View>

                <View style={styles.icon}>
                    <SimpleLineIcons name="options-vertical" size={24} color="#a8a8a8" />
                </View>
            </View>
            <StatusBar style="auto" />
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 20,
        alignItems: 'center',
        marginVertical: 10
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
    infoContainer: {
        justifyContent: 'center',
        marginHorizontal: 15,
        flex: 4
    },
    fullName: {
        fontWeight: 'bold',
        fontSize: 17
    },
    icon: {
        flex: 1
    }
})

