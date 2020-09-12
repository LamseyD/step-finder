import React from 'react'

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { View, Dimensions, StyleSheet } from 'react-native'
import * as Location from 'expo-location'
import UpdateBox from '../components/UpdateBox'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: 20
    }
})

class UpdatesScreen extends React.Component{
    render(){
        return (
            <View style = {styles.container}>
                <UpdateBox title = "Weather"/>
                <UpdateBox title = "Traffics"/>
                <UpdateBox title = "News"/>

            </View>
        )
    }
}

export default UpdatesScreen