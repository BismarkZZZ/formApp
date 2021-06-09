import React from 'react'
import {FlatList, SafeAreaView} from "react-native"
import Contact from '../components/Contact'

export default function ContactScreen() {
    const contacts = [
        {name: 'James Luke', number: '903-922-1029'},
        {name: 'Fufu Soup', number: '320-782-9129'},
        {name: 'Rice Stew', number: '910-612-9132'},
        {name: 'Jazz Puke', number: '832-102-4072'},
        {name: 'Debs Olina', number: '240-021-8910'},
        {name: 'Meeky Pangbe', number: '723-093-9833'}
    ]

  
    return (
        <SafeAreaView>
            <FlatList 
                data={contacts}
                renderItem={({ item }) => {
                    return <Contact name={item.name} phone={item.number} />
                }}
                keyExtractor={(item)=>item.number} 
            />
        </SafeAreaView>
    )
}
